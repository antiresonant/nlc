# 🚀 NLC: Natural Language Compiler

**Transform algorithms written in plain English into verified, executable code.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://nlc-compiler.netlify.app/)

---

## What is NLC?

The Natural Language Compiler (NLC) is a novel framework that makes Large Language Model outputs **deterministic and mathematically verifiable** through domain/range assertions. It bridges the gap between probabilistic AI and production software engineering.

### The Problem

LLMs generate probabilistic outputs. Production systems need deterministic guarantees.

### The Solution

NLC applies **relational computational structure** to constrain LLM outputs:

## The Goal
My goal here is simple: People should now be able to deploy SWE primitives directly from algorithms.
Similar things have been said by many greats in the field, the latest being [Grady Booch](https://www.youtube.com/watch?v=OfMAtaocvJw)

---

```
For each algorithm step:
  Domain {D} → Range {R}
  
  Loop:
    LLM generates code
    Assert (R | D)  // Bayesian notation
    If pass: continue
    If fail: LLM regenerates until assertion passes
```

This transforms probabilistic generation into **verified, production-ready code**.

---

## ✨ Live Demo

**[Try it now →](https://nlc-compiler.netlify.app/)**

Write an algorithm in natural language, hit compile, and watch it transform into working code.

---

## 🎯 Quick Start

### Option 1: Use the Web Interface

1. Open `nlc-compiler.html` in your browser
2. Write your algorithm:
   ```
   BEGIN
   STEP 1: Take input number n
   STEP 2: Calculate nth Fibonacci number
   STEP 3: Return the result
   END
   ```
3. Add test input: `{"n": 10}`
4. Click "⚡ Compile & Run"
5. Get verified, executable code + results

### Option 2: Run Locally

```bash
# Clone the repo
git clone https://github.com/antiresonant/nlc.git
cd nlc

# Open in browser
open src/nlc-compiler.html
```

No build process. No dependencies. Just works.

---

## 📚 How It Works

### Traditional Approach
```
User prompt → LLM → Code (maybe works?)
```

### NLC Approach
```
Algorithm → Domain/Range Analysis → Iterative Generation with Assertions → Verified Code
```

### Example: User Authentication

**Input Algorithm:**
```
BEGIN
STEP 1: Validate user credentials
STEP 2: Generate session token
STEP 3: Store session in database
END
```

**NLC Process:**

1. **STEP 1**: Domain {username, password} → Range {valid: boolean}
   - LLM generates code
   - Assertion fails: comparing plaintext passwords
   - Regenerates with bcrypt
   - Assertion passes ✓

2. **STEP 2**: Domain {valid, user_id} → Range {jwt_token}
   - LLM generates UUID
   - Assertion fails: no cryptographic signature
   - Regenerates with proper JWT
   - Assertion passes ✓

3. **STEP 3**: Domain {jwt_token} → Range {db_record}
   - LLM generates basic insert
   - Assertion fails: no session cleanup
   - Regenerates with expiry handling
   - Assertion passes ✓

**Output**: Production-ready, mathematically verified authentication system.

See full example in [examples/authentication.md](examples/authentication.md)

---

## 🎓 Educational Impact

### For Students
- **Learn by describing**: Write what you want, see how it's implemented
- **Understand verification**: See why code passes or fails assertions
- **Build intuition**: Connect natural language to computational structure

### For Teachers
- **Interactive lectures**: Live-compile examples during class
- **Assignment tool**: Students describe algorithms, NLC verifies correctness
- **Assessment**: Check understanding of algorithm design vs. syntax

### For Self-Learners
- **Remove syntax barriers**: Focus on logic, not semicolons
- **Immediate feedback**: See working code instantly
- **Pattern recognition**: Learn from generated examples

---

## 🔬 Technical Framework

### Mathematical Foundation

The NLC framework is based on **relational computation**:

```
relation_step(R | D):
  for all (R | D) in loop:
    LLM.generate(code)
    Assert (R_sub | D_sub)  // Sub-domain verification
    if pass:
      next (R | D) set
    else:
      LLM.regenerate(code)
      
  if all_pass:
    Assert (R | D)  // Final verification
    relation_step(R' | R)  // Chain to next step
```

### Key Properties

1. **Determinism**: Same algorithm + input always produces same output
2. **Composability**: Steps chain through R₁ → D₂ → R₂ → D₃
3. **Verifiability**: Each step has mathematical guarantees
4. **Correctness**: Assertions ensure semantic validity

See [PAPER.md](PAPER.md) for full mathematical treatment.

---

## 🛠️ Architecture

```
┌─────────────────┐
│  User Algorithm │
│   (Plain Text)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Domain/Range    │
│ Analysis        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Iterative Code  │
│ Generation      │ ◄──┐
└────────┬────────┘    │
         │             │
         ▼             │
┌─────────────────┐    │
│ Assertion       │    │
│ Verification    │ ───┘ Fail
└────────┬────────┘
         │ Pass
         ▼
┌─────────────────┐
│ Verified Code + │
│ Execution       │
└─────────────────┘
```

---

## 📊 Comparison

| Feature | Traditional LLM | NLC |
|---------|----------------|-----|
| Output consistency | ❌ Probabilistic | ✅ Deterministic |
| Correctness guarantee | ❌ None | ✅ Assertion-verified |
| Domain validation | ❌ Manual | ✅ Automatic |
| Production-ready | ❌ Requires review | ✅ Verified at generation |
| Educational value | 🟡 Shows examples | ✅ Teaches structure |

---

## 🚧 Current Limitations

- **Requires API access**: Uses Claude API for generation (planning local model support)
- **JavaScript only**: Currently compiles to JS (Python, Go support planned)
- **Simple algorithms**: Works best with 3-10 step algorithms
- **No optimization**: Focuses on correctness over performance

---

## 🗺️ Roadmap

- [ ] Support for Python, Go, Rust compilation targets
- [ ] Local model support (Llama 3, Mistral)
- [ ] Visual domain/range diagram generator
- [ ] Step-by-step assertion debugger
- [ ] Multi-file project compilation
- [ ] Type system inference
- [ ] Performance optimization passes
- [ ] Integration with IDEs (VS Code extension)

---

## 🤝 Contributing

Contributions are welcome! This is an early-stage research project.

**Areas we need help:**
- Additional language backends
- More example algorithms
- Educational curriculum development
- Mathematical formalism review
- Performance benchmarks

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

**TL;DR**: Use it for anything. Modify it. Build products with it. Just keep the copyright notice.

---

## 📖 Citation

If you use NLC in your research or educational materials, please cite:

```bibtex
@software{nlc2025,
  author = {[Polarj Sapkota]},
  title = {NLC: Natural Language Compiler},
  year = {2025},
  url = {https://github.com/antiresonant/nlc},
  note = {A framework for deterministic code generation from natural language through domain/range assertions}
}
```

---

## 🙏 Acknowledgments

- Framework inspired by control theory and Bayesian inference
- Built with Claude (Anthropic) API
- Special thanks to the open source community

---

## 📧 Contact

- **Author**: Polarj Sapkota
- **Email**: polarjsapkota@gmail.com
- **Twitter**: [@antiresonant](https://x.com/antiresonant)
- [**Website**](https://antiresonant.github.io)

---

## 🌟 Star History

If you find this useful, consider giving it a star! It helps others discover the project.

[![Star History Chart](https://api.star-history.com/svg?repos=antiresonant/nlc&type=Date)](https://star-history.com/#antiresonant/nlc&Date)

---

**Built with ❤️ for developers, students, and educators worldwide.**
