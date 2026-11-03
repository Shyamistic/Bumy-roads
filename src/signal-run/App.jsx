import { useEffect } from 'react'
import FieldKit from './components/FieldKit.jsx'
import ProofLinks from './components/ProofLinks.jsx'
import PublishingChecklist from './components/PublishingChecklist.jsx'
import SignalGlyph from './components/SignalGlyph.jsx'
import TrailMap from './components/TrailMap.jsx'
import TrailStop from './components/TrailStop.jsx'
import VoiceNotes from './components/VoiceNotes.jsx'
import { voiceNotes } from './content/media-manifest.js'
import {
  fieldKit,
  footerContent,
  growthExperiment,
  heroContent,
  publicContactLinks,
  publicLinks,
  publicationChecklist,
  publishingChecklist,
  routeContent,
  stopSectionLabels,
  trailStops,
} from './content/trail.js'
import './signal-run.css'

function SignalRunApp() {
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1))

    target?.scrollIntoView()
  }, [])

  return (
    <div className="signal-run">
      <a className="skip-link" href="#signal-run-main">
        Skip to the Signal Run
      </a>

      <header className="hero">
        <div className="hero__copy">
          <h1>{heroContent.opening}</h1>
          <p className="hero__eyebrow">{heroContent.eyebrow}</p>
          <p className="hero__introduction">{heroContent.introduction}</p>
        </div>
        <div className="hero__signal" aria-hidden="true">
          <SignalGlyph />
        </div>
        <section className="hero__fallback" aria-labelledby="no-3d-heading">
          <h2 id="no-3d-heading">{heroContent.no3dTitle}</h2>
          <p>{heroContent.no3dCopy}</p>
        </section>
      </header>

      <main id="signal-run-main" tabIndex="-1">
        <TrailMap content={routeContent} stops={trailStops} />

        <section className="trail-stops" aria-labelledby="trail-stops-heading">
          <div className="trail-stops__heading">
            <p className="section-kicker">Five-stop field notebook</p>
            <h2 id="trail-stops-heading">Read the route in order, or enter anywhere.</h2>
          </div>
          {trailStops.map((stop) => (
            <TrailStop key={stop.id} labels={stopSectionLabels} stop={stop}>
              <VoiceNotes note={voiceNotes[stop.id]} />
              {stop.id === 'one-breath-one-message' ? (
                <>
                  <FieldKit
                    checklist={publicationChecklist}
                    contactLinks={publicContactLinks}
                    experiment={growthExperiment}
                    kit={fieldKit}
                  />
                  <PublishingChecklist items={publishingChecklist} />
                </>
              ) : null}
            </TrailStop>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="section-kicker">{footerContent.contactTitle}</p>
          <p>{footerContent.contactCopy}</p>
          <ProofLinks links={publicContactLinks} />
        </div>
        <p className="site-footer__attribution">
          {footerContent.attribution}{' '}
          <a href={publicLinks.upstreamStarter.href} rel="noreferrer" target="_blank">
            {publicLinks.upstreamStarter.label}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
      </footer>
    </div>
  )
}

export default SignalRunApp
