# Voice Notes

Voice Notes are intentionally empty until Shyam supplies authentic, consent-cleared recordings. The interface neither generates speech nor asks for microphone permission. It is not an official Wispr Flow integration.

## Shyam-only recording prompts

1. **Nexus Prime:** Describe the unsafe-fast Nexus alert and why a quick diagnosis could not approve itself.
2. **A.S.T.R.A.:** Explain why independent approval is needed before a risky action is considered.
3. **Vayu:** Describe the plausible-but-wrong output and why it was a validation warning.
4. **VRI + Wordwatch:** Share a durable-system detail that mattered to a person without exposing confidential material.
5. **One Breath, One Message:** Give a spoken observation that could change the proposed growth-test hypothesis.

## Adding a recording

1. Shyam records the note and confirms it is truthful, his own voice, and appropriate for public release.
2. Obtain affirmative permission from every identifiable person represented in the recording, transcript, captions, or associated material. Redact confidential, personal, client, and participant material before publication.
3. Create and verify captions and a readable transcript against the final recording.
4. Place the source files at `public-signal/media/<stop>.mp3` and `public-signal/media/<stop>.vtt`. Vite copies them to browser URLs at `/media/<stop>.mp3` and `/media/<stop>.vtt`; do not use `/public-signal/media/...` as a browser URL.
5. In `src/signal-run/content/media-manifest.js`, set that stop’s `audioSrc` to `/media/<stop>.mp3`, `captionSrc` to `/media/<stop>.vtt`, and `transcript` to the verified non-empty text. Set `consentState` to `cleared` only after release approval. All four conditions are required before the player can publish the recording.
6. Run the local checks, test keyboard play/pause, mute/unmute, captions, the transcript disclosure, loading feedback, and a bad URL error state. Confirm that the ready player requests the `/media/...` browser URLs, nothing auto-plays, and no microphone prompt occurs.

A missing recording remains an honest awaiting-recording state. Do not substitute synthetic narration, a fake waveform, a placeholder clip, or another person’s audio.
