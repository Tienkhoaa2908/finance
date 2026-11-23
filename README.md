# Finance learning studio

A personal learning system for Tienkhoaa2908, being rebuilt toward quantitative research, trading and systems development across equities, crypto and FX.

## Current state

The application retains the upstream mathematics curriculum. The finance curriculum and teaching model are in research and design; they are not yet a finished course. The learner has basic mathematics and Python experience and starts finance from the beginning. Detailed definitions, assumptions, derivations, worked examples and meaningful practice take precedence over a fixed completion calendar.

Repository: https://github.com/Tienkhoaa2908/finance

Existing website: https://quant-finance-learning.vercel.app — currently runs the earlier upstream snapshot, not necessarily the latest finance commit. Automatic deployment from this repository is not yet verified.

## Local development

Requires Node.js 24 and npm. Run `npm ci`, then `npm run dev`. Validate with `npm run typecheck`, `npm test`, `npm run build`. Read `.env.example` and `docs/backend.md` for optional authentication and MongoDB. Do not reuse upstream credentials.

The inherited authoring pipeline remains in `content/math-v2`, `lib/math-practice-plan.ts` and `scripts/build-math-curriculum.ts`. Historical docs describe the upstream system unless labeled as the finance rebuild.

## Finance rebuild pilot

Open `/finance` for the bilingual, step-by-step pilot on cash flows, P&L and returns. It stores answer drafts only in the current browser. Questions are for self-explanation, not automatic grading. The old course remains available while the replacement is being designed.

- [Rebuild plan and Vietnamese editorial pipeline](docs/finance-rebuild.md)
- [Upstream history and architecture audit](docs/research/upstream-audit.md)
- [Quant competency map](docs/research/quant-competencies.md)
- [Education research and its limitations](docs/research/pedagogy-evidence.md)
- [Learning materials and data candidates](docs/research/source-catalog.md)

`npm run finance:audit` checks structure, references, rendering and bilingual formula parity. It cannot certify explanatory depth, proof correctness or learner outcomes. No external NLP model is connected; the current language workflow combines authored editing with deterministic lint checks.

## Attribution

See [UPSTREAM.md](UPSTREAM.md) and the [historical README](docs/upstream/README.md). A fresh Git history does not change authorship of imported work.
