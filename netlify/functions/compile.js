const fetch = require('node-fetch');

const NLC_SYSTEM_PROMPT = `You are the NLC (Natural Language Compiler). You convert structured natural-language algorithms into a single executable JavaScript function.

CRITICAL RULES:
1. The function MUST be named exactly: nlcCompiled
2. It MUST accept one parameter: an object with named fields
3. It MUST return a plain object (JSON-serializable, no class instances)
4. NO external dependencies — pure JavaScript only
5. Return ONLY raw JavaScript code. No markdown fences. No backticks. No explanation text.

NLC FRAMEWORK:
- Each STEP has a Domain (input types/constraints) and Range (output guarantees)
- You MUST validate Domain assertions with runtime checks (throw Error on violation)
- You MUST ensure Range assertions hold on the output
- If Assert lines are present, enforce each one as an explicit runtime check

CODE QUALITY:
- Use descriptive error messages prefixed with "Domain assertion failed:" or "Range assertion failed:"
- Handle edge cases (empty arrays, zero, negative numbers, etc.)
- Be deterministic: same input → same output always
- Do NOT use crypto, fetch, require, import, or any async operations
- Do NOT use Date.now() for unique IDs — use deterministic generation from input values`;

const NLC_USER_SUFFIX = `Requirements:
1. Function named 'nlcCompiled' accepting one object parameter
2. Validate all Domain assertions at runtime
3. Enforce all Range assertions on output
4. Return ONLY the raw JavaScript function — no markdown, no backticks, no explanation`;

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Server API key not configured' })
        };
    }

    try {
        const body = JSON.parse(event.body);
        const { algorithm, previousCode, error: prevError, regenerate } = body;

        if (!algorithm) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing algorithm' })
            };
        }

        let messages;

        if (regenerate && previousCode && prevError) {
            // NLC regeneration loop — feed error back to LLM
            messages = [
                { role: 'system', content: NLC_SYSTEM_PROMPT },
                { role: 'user', content: 'Convert this algorithm:\n\n' + algorithm + '\n\n' + NLC_USER_SUFFIX },
                { role: 'assistant', content: previousCode },
                { role: 'user', content: 'The code above failed with this error:\n\n' + prevError + '\n\nFix the code. Return ONLY the corrected JavaScript function. No markdown, no explanation.' }
            ];
        } else {
            // First generation
            messages = [
                { role: 'system', content: NLC_SYSTEM_PROMPT },
                { role: 'user', content: 'Convert this algorithm into an executable JavaScript function:\n\n' + algorithm + '\n\n' + NLC_USER_SUFFIX }
            ];
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages,
                temperature: 0.15
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            return {
                statusCode: response.status,
                headers,
                body: JSON.stringify({
                    error: errData.error?.message || 'OpenAI API error: ' + response.status
                })
            };
        }

        const data = await response.json();
        let code = data.choices[0].message.content;

        // Clean markdown formatting
        code = code.replace(/```javascript\n?/g, '').replace(/```js\n?/g, '').replace(/```\n?/g, '').trim();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ code })
        };

    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: err.message })
        };
    }
};
