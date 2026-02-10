# Contributing to NLC

Thank you for your interest in contributing to the Natural Language Compiler! We're excited to build this together.

---

## 🎯 Vision

NLC aims to make programming accessible through natural language while maintaining mathematical rigor and deterministic guarantees. We're building:

1. A framework that transforms probabilistic AI into deterministic compilation
2. Educational tools that remove syntax barriers for learners
3. Production-ready code generation with formal verification

---

## 🚀 How to Contribute

### Areas We Need Help

**1. Core Framework**
- [ ] Additional language backends (Python, Go, Rust, C++)
- [ ] Performance optimization passes
- [ ] Better assertion generation algorithms
- [ ] Type inference improvements
- [ ] Error message clarity

**2. Examples & Documentation**
- [ ] More algorithm examples (graph algorithms, dynamic programming, etc.)
- [ ] Tutorial content for beginners
- [ ] Video walkthroughs
- [ ] Translation to other languages (documentation)

**3. Educational Content**
- [ ] CS1/CS2 curriculum development
- [ ] Lesson plans for teachers
- [ ] Student exercises and assignments
- [ ] Assessment rubrics

**4. Research & Theory**
- [ ] Mathematical formalism review
- [ ] Proof verification
- [ ] Complexity analysis
- [ ] Benchmark development
- [ ] Academic paper improvements

**5. Tooling & Infrastructure**
- [ ] VS Code extension
- [ ] CLI improvements
- [ ] Web UI enhancements
- [ ] API design
- [ ] Testing infrastructure

---

## 📋 Getting Started

### 1. Set Up Your Environment

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/nlc.git
cd nlc

# Create a new branch
git checkout -b feature/your-feature-name
```

### 2. Understand the Codebase

**Key Files:**
- `index.html` - Main web interface
- `README.md` - Project documentation
- `PAPER.md` - Technical framework explanation
- `examples/` - Algorithm examples (coming soon)

**Architecture:**
```
User Algorithm → Domain/Range Analysis → Iterative Generation → Verified Code
```

### 3. Make Your Changes

Follow these guidelines:
- Write clear, commented code
- Test your changes thoroughly
- Update documentation if needed
- Keep commits focused and atomic

### 4. Submit a Pull Request

```bash
# Commit your changes
git add .
git commit -m "feat: Add Python backend support"

# Push to your fork
git push origin feature/your-feature-name

# Open a Pull Request on GitHub
```

---

## 📝 Contribution Guidelines

### Code Style

**JavaScript:**
```javascript
// Use clear, descriptive names
function generateCodeWithAssertions(algorithm, domainSpec, rangeSpec) {
    // Add comments for complex logic
    const assertions = extractAssertions(domainSpec, rangeSpec);
    
    // Use async/await for asynchronous operations
    const result = await llmGenerate(algorithm, assertions);
    
    return result;
}
```

**Naming Conventions:**
- Functions: `camelCase` (e.g., `validateDomain`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_ITERATIONS`)
- Classes: `PascalCase` (e.g., `AssertionGenerator`)

**Documentation:**
- Document all public functions
- Explain the "why" not just the "what"
- Include examples for complex features

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: Add support for Python compilation
fix: Resolve assertion loop infinite recursion
docs: Update README with new examples
test: Add unit tests for domain extraction
refactor: Simplify iteration logic
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `chore`: Maintenance tasks

### Pull Request Process

1. **Title**: Clear, descriptive summary
   - ✅ "Add Python backend with assertion support"
   - ❌ "Updates"

2. **Description**: Include:
   - What changed and why
   - How to test it
   - Screenshots (if UI changes)
   - Related issues (if any)

3. **Tests**: Ensure your changes don't break existing functionality

4. **Review**: Be responsive to feedback and questions

**Example PR Description:**
```markdown
## What Changed
Added Python compilation target alongside existing JavaScript support.

## Why
Expands NLC's usefulness for data science and scripting use cases.

## How to Test
1. Select "Python" as target language
2. Compile Fibonacci example
3. Verify generated code runs with `python3 output.py`

## Related Issues
Closes #42
```

---

## 🎓 Adding Examples

We especially need more algorithm examples! Here's how to contribute:

### Example Template

```markdown
# Algorithm Name

**Category**: [Data Structures / Sorting / Graph Algorithms / etc.]
**Difficulty**: [Beginner / Intermediate / Advanced]

## Natural Language Algorithm

\`\`\`
BEGIN
STEP 1: [Describe first step]
STEP 2: [Describe second step]
STEP 3: [Describe third step]
END
\`\`\`

## Domain/Range Specification

**Domain**: [Input types and constraints]
**Range**: [Output types and guarantees]

## Test Cases

\`\`\`json
{"input": {"n": 10}, "expected": 55}
{"input": {"n": 0}, "expected": 0}
{"input": {"n": 20}, "expected": 6765}
\`\`\`

## Generated Code

\`\`\`javascript
function nlcCompiled(input) {
    // [Generated code will appear here]
}
\`\`\`

## Educational Notes

- What algorithmic concepts does this demonstrate?
- What are common pitfalls for students?
- How do the assertions ensure correctness?
```

### Where to Add

```
examples/
├── basics/
│   ├── fibonacci.md
│   ├── palindrome.md
│   └── prime-check.md
├── data-structures/
│   ├── stack.md
│   ├── queue.md
│   └── linked-list.md
├── sorting/
│   ├── bubble-sort.md
│   ├── merge-sort.md
│   └── quick-sort.md
└── real-world/
    ├── authentication.md
    ├── rate-limiter.md
    └── cache.md
```

---

## 🔬 Research Contributions

### Academic Feedback

We welcome feedback on:
- Mathematical formalism in the paper
- Proof correctness and completeness
- Related work we should cite
- Theoretical limitations and extensions

Please open an issue with the `research` label.

### Benchmarking

Help us establish rigorous benchmarks:

1. **Correctness**: Does NLC generate correct code?
2. **Determinism**: Same input → same output?
3. **Convergence**: How many iterations needed?
4. **Comparison**: NLC vs. direct LLM vs. other tools

Share benchmark results via pull request to `benchmarks/`.

---

## 📚 Documentation Contributions

### Improving Existing Docs

- Fix typos, grammar, clarity
- Add missing explanations
- Update outdated information
- Improve code examples

### Creating New Docs

We need:
- **Tutorials**: Step-by-step guides for specific tasks
- **How-To Guides**: Solutions to common problems
- **Explanations**: Deep dives into framework concepts
- **API Reference**: Complete function/class documentation

---

## 🐛 Bug Reports

### Before Submitting

1. Check if the issue already exists
2. Try the latest version
3. Gather reproduction steps

### Bug Report Template

```markdown
## Description
[Clear description of the bug]

## Steps to Reproduce
1. Go to '...'
2. Enter algorithm: '...'
3. Click compile
4. See error

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Browser: [Chrome 120 / Firefox 115 / etc.]
- OS: [Windows 11 / macOS 14 / Ubuntu 22.04]
- NLC Version: [commit hash or release version]

## Screenshots
[If applicable]

## Additional Context
[Any other relevant information]
```

---

## 💡 Feature Requests

We love new ideas! Please include:

1. **Problem**: What problem does this solve?
2. **Proposed Solution**: How would it work?
3. **Alternatives**: What other approaches did you consider?
4. **Impact**: Who benefits and how?

Use the `enhancement` label.

---

## 🎨 Design Contributions

### UI/UX Improvements

We welcome:
- Visual design enhancements
- User experience improvements
- Accessibility fixes
- Mobile responsiveness

### Design Principles

- **Simplicity**: Clean, minimal interface
- **Clarity**: Clear feedback and error messages
- **Speed**: Fast, responsive interactions
- **Accessibility**: WCAG 2.1 AA compliance

Share mockups or prototypes via issues or PRs.

---

## 🌍 Translation

Help make NLC accessible globally:

1. Documentation translation
2. UI text translation
3. Example localization

Currently supported: English
Planned: Spanish, French, German, Chinese, Japanese, Hindi

---

## 📊 Performance Contributions

### Optimization Areas

- Compilation speed
- Memory usage
- Assertion verification efficiency
- API call reduction

### Profiling

If proposing optimizations, please include:
- Benchmark before/after
- Profiling data
- Trade-offs considered

---

## 🧪 Testing

### Writing Tests

We use a simple testing approach:

```javascript
// test/assertion-generator.test.js
function testAssertionGeneration() {
    const domain = {type: "number", range: [0, 100]};
    const assertions = generateAssertions(domain);
    
    assert(assertions.includes("typeof input === 'number'"));
    assert(assertions.includes("input >= 0 && input <= 100"));
}
```

### Test Coverage

Priority areas:
- Domain/range extraction
- Assertion generation
- Code verification
- Iteration termination
- Edge cases

---

## 🤝 Community

### Code of Conduct

We're committed to providing a welcoming and inclusive environment:

- **Be respectful**: Treat everyone with respect and kindness
- **Be constructive**: Focus on ideas, not people
- **Be collaborative**: We're building this together
- **Be patient**: Everyone is learning

Zero tolerance for:
- Harassment or discrimination
- Personal attacks
- Trolling or inflammatory behavior

Report issues to: polarjsapkota@gmail.com

### Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: File an issue
- **Feature Ideas**: Start a Discussion first
- **Urgent**: Email polarjsapkota@gmail.com

### Stay Connected

- **GitHub**: Watch the repo for updates
- **Twitter**: Follow [@antiresonant](https://twitter.com/antiresonant)
- **Discord**: [Coming soon]

---

## 🏆 Recognition

Contributors will be:
- Listed in README.md
- Credited in release notes
- Acknowledged in academic papers (if significant theoretical contributions)

Top contributors may be invited to join the core team.

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

All contributions must be your original work or properly attributed.

---

## 🙏 Thank You

Every contribution matters, whether it's:
- Fixing a typo
- Adding a feature
- Reporting a bug
- Sharing feedback
- Spreading the word

Let's make programming accessible to everyone while maintaining mathematical rigor and correctness guarantees.

**Ready to contribute?** Pick an issue labeled `good-first-issue` and dive in!

---

## 📞 Contact

**Author**: Polarj Sapkota  
**Email**: polarjsapkota@gmail.com  
**Twitter**: [@antiresonant](https://twitter.com/antiresonant)  
**GitHub**: [antiresonant](https://github.com/antiresonant)

---

*Last updated: February 2026*
