const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { algorithm } = JSON.parse(event.body);

    if (!algorithm) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Algorithm is required' })
      };
    }

    // Get API key from environment variable
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{
          role: 'system',
          content: 'You are the NLC (Natural Language Compiler). You convert algorithms into executable JavaScript code following the NLC framework with domain/range assertions. You return ONLY executable JavaScript code, no explanations, no markdown formatting.'
        }, {
          role: 'user',
          content: `Convert this algorithm into executable JavaScript code following the NLC framework with domain/range assertions.

Algorithm:
${algorithm}

Requirements:
1. Parse the algorithm steps
2. Generate a single JavaScript function that implements ALL steps
3. The function MUST be named 'nlcCompiled'
4. Include proper error handling and type checking (domain assertions)
5. Return ONLY the function code, nothing else - no explanations, no markdown
6. The function should accept an object with named parameters
7. Make it production-ready and deterministic

Return ONLY the JavaScript function code with no formatting.`
        }],
        temperature: 0.1
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: error.error?.message || 'Failed to generate code' })
      };
    }

    const data = await response.json();
    let code = data.choices[0].message.content;
    
    // Clean up any markdown formatting
    code = code.replace(/```javascript\n?/g, '').replace(/```\n?/g, '').trim();

    return {
      statusCode: 200,
      body: JSON.stringify({ code })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
