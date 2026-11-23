# Scheduled-lesson review — 2 November 2026

All **523 scheduled primary lessons** now have an individually reviewed bilingual application, general formula, method and worked solution. Each day has **three separately authored companion problems**, making **2,092 scheduled problems**: 523 primary problems plus 1,569 companions. This completes the remaining 518 days as well as retaining the first five. The compiled collection contains 2,132 exercise records because 40 original, unscheduled assessment records are preserved; those are not additional daily assignments.

The [per-day ledger](lesson-review-ledger.json) records the primary concept, source file, review note, free source IDs, solution-step counts and any interactive model. [Ownership](deep-review-ownership.json) resolves all 523 concepts to 34 authored batch files in `content/math-v2/deep-review/`. Missing days, overlapping ownership, exact duplicate companion prompts, empty translations and old shared-question scaffolds stop the review check. There is no fallback that fills an unwritten day with a generic exercise.

Curriculum source hash: `02b53f2f4c093d67f714e65c17ccb1c5685f248f47be6a29b9584a685fd83fdd`.

## Teaching and mathematical corrections

The lesson opens with its use, then states the general relation and explains the method in numbered steps. Practice retains only the question and show/hide solution. Companions use their own data or arguments and worked steps rather than reusing a checklist about how to study. Vietnamese and English retain the same mathematical content.

Examples of substantive repairs include:

- Completing the explicit matrix/eigenbasis calculation and stating the rank conditions for pseudoinverse formulas; distinguishing existence, uniqueness and minimum norm.
- Replacing a repeated derivative exercise with a directional-versus-Fréchet differentiability problem and a separate counterexample companion. Its plot uses the actual directional derivative, not an unrelated surface.
- Correcting a bounded-image claim to the compactness argument it requires, and stating domain and regularity conditions for optimization and Lagrange calculations.
- Recomputing finite-law moments, including a second moment of 9/2, a weighted HAC value of −1/10 and the Gaussian log-score fixture; distinguishing exact equalities from rounded approximations.
- Correcting the long-run-variance conclusion to the scaled variance limit, explaining stationary/dependence assumptions and handling positive denominators and zero-gap boundary cases.
- Separating the Joseph covariance identity for a general gain from the shortcut for an optimal Kalman gain, and distinguishing a conditional Gaussian law from a mere moment statement.
- Stating calibration/fit separation and the infinite conformal-quantile boundary; correcting finite-population normalization and endpoint-MLE conventions.

The ledger contains the individual reasons, rather than treating this selection as an exhaustive error list. Sources remain free online; the score-matching addition links to the [full JMLR paper](https://www.jmlr.org/papers/volume6/hyvarinen05a/hyvarinen05a.pdf).

## Illustrations tied to their questions

**24 new analytic interactive models** bring coverage to **42 daily lessons**. They include projection residuals and conditioning, curved paths and a shrinking spike, density tails and partition means, finite-state transitions, dependent means and AR covariance, shrinkage and beta updating, Lyapunov recurrences, Gaussian KL, sensor risk, selection optimism, spectral coherence and finite-population variance. This is not a claim that all 523 lessons have a graph.

Each model names its exact primary exercise, uses its constants, labels its domain and axes and resets to its own fixture. Tests traverse every allowed control tick and check finite coordinates, plotting bounds and TeX labels. Selected identities are recomputed independently by vector calculations, matrix multiplication, integration, covariance recurrences, finite-support enumeration or direct difference quotients. Infinite conformal thresholds and unstable stationary-variance cases are labelled instead of being drawn as invented finite points. A numerical picture illustrates the claim; it does not prove a general theorem.

## Reproducible verification

The checks were run against Node 24.22.1 and a clean installation with Next.js 16.4.3. The Windows verification checkout used dependencies on the same drive as its source, avoiding the cross-drive webpack resolution failure of a linked dependency directory.

| Check | Observed result |
| --- | --- |
| Authored coverage and bilingual structure | 523 lessons, 1,569 companions, zero missing entries or warnings |
| Restricted numeric equality/rounding audit | 3,434 comparisons; zero unresolved findings; 13 explicitly located, intentional contradictions retained with reasons |
| Reader Markdown → math parser → KaTeX | 45,782 distinct strings, 51,962 math nodes; zero render errors or detected unwrapped TeX commands |
| Additional notation audit | 65,312 expressions; zero parse errors |
| Unit tests | 112 passed |
| Chromium browser suite | 145 passed; one mobile hover-only case skipped because mobile navigation has separate coverage |
| Production build and TypeScript | Passed |
| Local HTTP/SSR audit | All 523 pages returned 200 with the correct primary concept, exact four-problem order, answers initially hidden and no rendered KaTeX error |
| Production dependency audit | Zero reported vulnerabilities at the time of the check |

These counts describe different scopes and should not be added together. The numeric grammar checks supported numerical equalities, not arbitrary symbolic arguments. The Markdown audit also visits hidden solutions in both languages. The daily browser payload now carries the current four-problem handout rather than every exercise in its week; an exhaustive export-parity test checks that this reduction preserves both language exports.

An initial browser run exposed a mobile-menu selector problem in the test and a benign Chromium viewport-change animation cancellation. The final test opens the actual menu, asserts that the destination calendar is visible, and permits only the exact `InvalidStateError` viewport-cancellation message. Other runtime errors still fail the test. Animation cancellation does not establish a failed route update; [Chrome's API reference](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#api-reference) distinguishes those states. The complete suite was then rerun successfully.

Reproduce content checks with `npm run curriculum:build`, `npm run math:lesson:audit` and `npm run math:notation:audit`; run `npm test`, `npm run build`, then the local browser suite. `TEST_BASE_URL=http://localhost:3100 node scripts/check-rendered-lessons.mjs` performs the exhaustive page audit. Raw local outputs are ignored under `artifacts/`; the committed ledger and this report preserve the scope and results.

During release checks, Next.js was patched from 16.4.0 to 16.4.3 and nested KaTeX versions were aligned to the existing direct 0.19.0 dependency. The changes address the published [Next.js advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw) and [KaTeX advisory](https://github.com/advisories/GHSA-238p-pmpm-9mq7); the production dependency audit was then clean.

## Limits and progress records

This is assistant authoring and internal cross-review, supported by reproducible checks. It is **not independent expert validation**, an unseen examination, a learner-outcome study or evidence of PhD-level research ability. Automated checks cannot establish every proof's truth or the effectiveness of an explanation for a particular learner. No external grader or faculty review is claimed.

Local checks use an empty MongoDB URI. Browser save/failure scenarios mock responses and do not establish a production MongoDB write. No production credentials or learner records were changed by these tests. Existing completion records remain stored, but the rewritten weeks have new revision keys, so old completion does not silently count as completing revised material.
