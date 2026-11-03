import { useRef, useState } from 'react'

function VoiceNotes({ note }) {
  const audioRef = useRef(null)
  const hasAudioSrc = Boolean(note.audioSrc?.trim())
  const hasCaptionSrc = Boolean(note.captionSrc?.trim())
  const hasTranscript = Boolean(note.transcript?.trim())
  const hasAnyReleaseArtifact = hasAudioSrc || hasCaptionSrc || hasTranscript
  const isReady = note.consentState === 'cleared' && hasAudioSrc && hasCaptionSrc && hasTranscript
  const isAwaitingRelease = !isReady && (note.consentState === 'cleared' || hasAnyReleaseArtifact)
  const missingReleaseRequirements = [
    note.consentState !== 'cleared' ? 'affirmative release approval' : null,
    !hasAudioSrc ? 'recording URL' : null,
    !hasCaptionSrc ? 'verified captions URL' : null,
    !hasTranscript ? 'verified transcript' : null,
  ].filter(Boolean)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mediaStatus, setMediaStatus] = useState(
    isReady ? 'Loading recording metadata.' : 'Awaiting Shyam’s authentic recording.',
  )
  const headingId = `${note.stopId}-voice-note-heading`

  const togglePlayback = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      try {
        await audio.play()
      } catch {
        setMediaStatus('Playback could not start. Check the recording and try again.')
      }
      return
    }

    audio.pause()
  }

  const toggleMute = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextMuted = !isMuted
    audio.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <section className="voice-notes" aria-labelledby={headingId}>
      <div className="voice-notes__heading">
        <p className="section-kicker">Voice note · human recording only</p>
        <h3 id={headingId}>{note.title}</h3>
        <p>{note.prompt}</p>
      </div>

      {isReady ? (
        <div className="voice-notes__player">
          <audio
            ref={audioRef}
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
            onError={() => setMediaStatus('Recording could not load. No audio is being played.')}
            onLoadedMetadata={() => setMediaStatus('Recording metadata loaded. Ready to play.')}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          >
            <source src={note.audioSrc} type="audio/mpeg" />
            {note.captionSrc ? <track default kind="captions" src={note.captionSrc} srcLang="en" /> : null}
            Your browser does not support the audio element.
          </audio>
          <div className="voice-notes__controls">
            <button type="button" onClick={togglePlayback}>
              {isPlaying ? 'Pause recording' : 'Play recording'}
            </button>
            <button type="button" onClick={toggleMute}>
              {isMuted ? 'Unmute recording' : 'Mute recording'}
            </button>
          </div>
          <p aria-live="polite" className="voice-notes__status">
            {mediaStatus}
          </p>
          {note.transcript ? (
            <details className="voice-notes__transcript">
              <summary>Read verified transcript</summary>
              <p>{note.transcript}</p>
            </details>
          ) : null}
        </div>
      ) : (
        <div className="voice-notes__empty">
          <p>
            {isAwaitingRelease
              ? `Release is awaiting ${missingReleaseRequirements.join(', ')}. Nothing auto-plays.`
              : 'No authentic recording is published for this stop. Nothing auto-plays.'}
          </p>
          <p>{note.consentState}. {note.replacementInstructions}</p>
        </div>
      )}
    </section>
  )
}

export default VoiceNotes
