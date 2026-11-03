# The Signal Run

The Signal Run is Shyam Sharma’s evidence-led portfolio trail through systems work, documented learning, and a proposed voice-habit growth test. It is a five-stop React single-page application designed to remain readable through native scrolling, hash links, keyboard navigation, and a no-JavaScript summary.

## What is in this build

- **Nexus Prime:** a documented diagnostic evaluation. Its figures describe evaluation and diagnosis, not production incident outcomes.
- **A.S.T.R.A.:** a defensive, authorized, sandbox-only assurance concept with independent validation.
- **Vayu:** a climate forecasting project that documents a plausible-but-wrong stale-model failure.
- **VRI + Wordwatch:** résumé-backed, public-safe summaries that omit confidential material.
- **One Breath, One Message:** an authored, consent-first 14-day Bangalore growth-test proposal. It has not run and has no results to claim.
- **Voice Notes:** five initially empty places for authentic, consent-cleared recordings that only Shyam can provide.

## Voice and release boundary

No audio is generated, fetched, or played on initial load. The app does not request microphone access, use speech recognition, render a fake waveform, or claim an official Wispr Flow or Emergent integration. It does not collect credentials or publish anywhere.

The visible publishing checklist and [human-only handoff](docs/EMERGENT-HANDOFF.md) separate the implemented interface from Shyam-only work: personal reflections, authentic voice, consent and redaction, contact choices, link review, publishing, video creation, and submission.

See [Voice Notes](docs/VOICE-NOTES.md) for the five recording prompts and consent-cleared media replacement instructions. See [The Signal Run](docs/SIGNAL-RUN.md) for source-status rules and browser boundaries.

## Local development

Use Node.js and npm from the repository root:

```bash
npm ci
npm run lint
npm run build
npm run dev
npm run preview
```

Use `npm run dev` to test every empty Voice Note with mouse and keyboard. Confirm no autoplay, audio fetch, or microphone prompt. After manually configuring a consent-cleared test recording, use a nonexistent source URL to confirm the aria-live error feedback and verify the transcript disclosure.

Use `npm run preview` to inspect the production build at desktop and 375 px mobile widths. Check native scroll and hash navigation, Tab and Enter controls, focus order, reduced motion, contrast or forced-colors mode, no-JavaScript content, and the final human-only checklist.

## Attribution and asset policy

This project is built from the [MIT-licensed ITomPoland/portfolio-itom starter](https://github.com/ITomPoland/portfolio-itom). The starter code remains available under the [MIT License](LICENSE).

The Signal Run uses original CSS and inline SVG composition. It does **not** use Tomasz Szmajda / ITom’s personal images, 3D textures, sounds, other assets, or copy. The project does not imply endorsement by ITom, Wispr Flow, or Emergent.
