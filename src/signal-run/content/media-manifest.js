const awaitingRecording = {
  audioSrc: null,
  captionSrc: null,
  transcript: null,
  consentState: 'awaiting recording and affirmative release',
  replacementInstructions:
    'After Shyam records and affirmatively clears this note, place <stop>.mp3 and <stop>.vtt in the source directory public-signal/media/. In the browser manifest, set audioSrc to /media/<stop>.mp3 and captionSrc to /media/<stop>.vtt, then add the verified transcript.',
}

export const voiceNotes = {
  'nexus-prime': {
    ...awaitingRecording,
    stopId: 'nexus-prime',
    title: 'Nexus alert',
    prompt: 'In Shyam’s own words: describe the unsafe-fast Nexus alert and why a quick diagnosis could not approve itself.',
  },
  astra: {
    ...awaitingRecording,
    stopId: 'astra',
    title: 'A.S.T.R.A. approval',
    prompt: 'In Shyam’s own words: explain why A.S.T.R.A. needs independent approval before a risky action is considered.',
  },
  vayu: {
    ...awaitingRecording,
    stopId: 'vayu',
    title: 'Vayu validation',
    prompt: 'In Shyam’s own words: describe Vayu’s plausible-but-wrong output and what made it a validation warning.',
  },
  'vri-wordwatch': {
    ...awaitingRecording,
    stopId: 'vri-wordwatch',
    title: 'Durable-system detail',
    prompt: 'In Shyam’s own words: share one durable-system detail that mattered to a person, without exposing confidential material.',
  },
  'one-breath-one-message': {
    ...awaitingRecording,
    stopId: 'one-breath-one-message',
    title: 'Growth-test observation',
    prompt: 'In Shyam’s own words: give one spoken observation that could change the proposed growth-test hypothesis.',
  },
}
