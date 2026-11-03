# Signal Run integration record

## Iteration and scope

Iteration 1 completed. The review gate `verdict.json` was absent, so this pass validated the completed FEAT-001, FEAT-002, and FEAT-003 work together without extending their approved scope.

No application-source or approved-feature-artifact change was needed. The active build remains the lean semantic Signal Run route; no credentials were requested or used, and no Emergent login, publishing, or submission action was attempted.

## Automated validation

| Command | Result |
| --- | --- |
| `npm ci` | Passed. Installed 154 packages. npm reported 16 dependency audit vulnerabilities; no audit fix was applied. |
| `npm run lint` | Passed with zero warnings and errors for `src/main.jsx` and `src/signal-run`. |
| `npm run build` | Passed with Vite 7.3.0, transforming 38 modules. Output: `dist/index.html`, one CSS bundle, one JavaScript bundle, and the intentional `public-signal` `.gitkeep` markers only. |
| `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort` | Served the production build locally. HTTP `200` returned the Signal Run document and required opening line. The local preview process was stopped after validation. |

The production-output inspection found no copied legacy public assets. The direct dependency roots are React, React DOM, Vite, and the approved ESLint/Vite tooling. Active-source checks found no Three.js, React Three Fiber, Sanity, PostHog, Canvas, WebGL API, microphone, `getUserMedia`, or `SpeechRecognition` imports or calls.

## Production-browser validation

Local headless Chrome inspected the production preview, including desktop and 375 px mobile emulation.

- The rendered title is `The Signal Run | Shyam Sharma`; the exact opening line rendered; five semantic stop articles and five matching hash route links rendered in the approved order.
- Pointer activation reached each route and set its matching `:target`. Browser back returned from `#one-breath-one-message` to `#vri-wordwatch`; forward returned to the final stop.
- Tab order reached the skip link and then all five route links. Each route link showed a visible `rgb(0, 95, 204) solid 3px` focus outline. Tab plus Enter reached each matching article.
- A direct `#one-breath-one-message` production deep link scrolled to the final stop (`scrollY` 7660; target top 425 px in an 812 px viewport).
- At 375 px, the layout reported a 375 px document width with no horizontal overflow. The 1280 px and 375 px screenshot checks showed a readable warm editorial composition, legible no-3D card, visible route hierarchy, and no clipped layout.
- `prefers-reduced-motion: reduce` produced `scroll-behavior: auto` and a `0.00001s` route transition duration. Forced-colors emulation matched and used system foreground/background/border colors.
- With JavaScript disabled before navigation, the interactive app did not mount. The semantic `<noscript>` summary retained the opening line, five source links, the honest empty Voice Notes statement, and the proposed/not-run status.
- Initial-load requests were limited to the local HTML document, CSS bundle, and JavaScript bundle. There were no external or media requests. The default page rendered five empty Voice Notes, zero `<audio>` elements, zero `<canvas>` elements, and zero `[autoplay]` attributes.
- All rendered proof links used `_blank` with `rel="noreferrer"`.

For the already-approved ready-media path, the production bundle was temporarily overridden only in the local browser response, not on disk, with an intentionally nonexistent same-origin media URL and a temporary validation transcript. The original all-null manifest remained unchanged. That in-memory check rendered five metadata-preload audio elements, five Play controls, five Mute controls, five transcript disclosures, and five truthful missing-recording error statuses. A focused native Mute button changed to Unmute and set the audio muted state; a transcript disclosure opened successfully. No recording, caption, transcript, credential, or public asset was created or published.

## Source and repository boundaries

- `LICENSE` remains the MIT license for Tomasz Szmajda and was not edited.
- The existing README/footer attribution and original-asset boundary remain present. The legacy `public/` archive and nested Sanity Studio remain outside the active production route.
- `git status --short` and `git rev-parse --show-toplevel` both reported that the supplied archive is not a Git repository. Git was not initialized, no worktree was created, no commit was manufactured, and nothing was pushed.

No cross-FEAT seam requiring a product or source change was found. The completed FEAT-001 through FEAT-003 implementation is ready for review.