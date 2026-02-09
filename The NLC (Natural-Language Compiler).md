The NLC (Natural-Language Compiler)

For a given algorithm:
BEGIN
STEP 1
STEP 2
STEP 3
END

---
The relational computational structure: making a probabilistic construct output deterministic results
---

*Initial boundary conditions*

domain{D}
	sub-domains{D_S}
range{R}
	sub-ranges{R_S}

*relation_step(R | D):* // D is the input a.k.a. the Domain here
	for all (R | D) in a loop:
		LLM writes code
		Asserts (R_S | D_S) // R_S given D_S; Bayes' notation
		if pass:
			next (R | D) set
		if not:
			LLM re-writes code to match assertion
		
	if all pass:
		final assertion (R | D)
		if pass:
			relation_step(R' | R) // continues until END encountered

**Note: These steps can be carried out in reverse using recursion**