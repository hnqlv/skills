---
name: define-spec
description: Define what to build in SPEC.md before implementation. Use for a new product, feature, or significant change when requirements are vague, scattered, or not yet recorded; when asked to write or refine a specification; or when success, scope, and non-goals need agreement. Inspect the real repository, resolve material decisions through grill-spec, and produce a concise approved contract. Skip for trivial, self-contained edits with explicit acceptance criteria.
---

# Define Spec

Create or refine the smallest specification that makes the intended outcome and completion test explicit. Do not plan or write production code.

## Workflow

### 1. Ground the specification

- Confirm the repository root and the authoritative product or task document.
- Inspect only the code, documentation, and conventions needed to distinguish facts from decisions.
- Update the existing specification when one exists. Preserve still-relevant requirements, rationale, and decision history; do not replace it wholesale for editorial neatness.
- Surface conflicts between the request, existing behaviour, and prior decisions.

### 2. Write the contract

Include only applicable sections:

- outcome, user, and reason;
- scope and explicit non-goals;
- behavioural requirements and important failure states;
- data, permissions, privacy, migration, or integration constraints;
- existing patterns that must be reused;
- specific acceptance criteria and verification evidence;
- assumptions and unresolved decisions.

Keep small changes small. A short feature section with clear acceptance criteria can be sufficient; do not force a project-wide template onto every change.

### 3. Resolve material decisions

Invoke `grill-spec` when an open decision changes behaviour, scope, data, security, cost, architecture, or acceptance criteria. Discover repository facts instead of asking the user. Record the confirmed answer and its rationale in the specification.

Choose the simplest reversible default for minor implementation details and label it as an assumption.

### 4. Confirm the handoff

Summarize the outcome, scope, non-goals, acceptance criteria, and remaining assumptions. Do not plan or code until the user confirms the specification, unless they explicitly authorized autonomous continuation.

After confirmation:

- invoke `build-from-spec` directly when the change is one bounded slice with clear verification and no material dependency or rollout ordering;
- invoke `plan-from-spec` when the work spans multiple slices or sessions, crosses independent subsystems, has important dependencies or risks, or needs a durable execution queue.

The specification remains authoritative. A later plan may sequence it but must not reinterpret it.
