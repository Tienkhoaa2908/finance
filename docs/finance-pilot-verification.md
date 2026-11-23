# Finance pilot verification — 23/11/2026

Scope: one 10-step bilingual cash-flow/return lesson and reader, not a completed finance course.

- 118 unit tests passed, including six new content/ledger cases.
- TypeScript passed.
- Final content audit: zero errors/warnings; checks structure, citations, rendered math and bilingual formula parity only.
- Four Playwright cases passed across desktop/mobile: draft/reveal/navigation/language/reload and unavailable browser storage. An earlier desktop run overlapped unfinished source references and failed; after content completion the complete four-case suite passed.
- Production build including inherited curriculum audits passed. An initial local build launcher failed because a portable npm shim resolved the wrong directory; corrected local tooling and reran successfully.
- Production local /finance rendered; desktop/mobile screenshots captured after hydration; no page errors or console errors observed in that smoke.
- Next.js updated from 16.4.3 to 16.4.6; npm reported zero vulnerabilities after installation. This is not an exhaustive security review.
- Review checked the numeric examples independently and corrected TeX escaping and an ambiguous zero-profit test instruction.

Not verified: real learner outcomes, independent subject expert review, all routes E2E after patch, live MongoDB/OAuth, production deployment of this commit, or a model-based NLP pipeline. Current language work is authored editing plus static lint.

Raw logs and screenshots remain outside Git at D:/ChatGPT/webtaichinh/research. Source provenance and research limitations are in docs/research and UPSTREAM.md.
