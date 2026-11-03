import ProofLinks from './ProofLinks.jsx'

function TrailStop({ labels, stop, children }) {
  const headingId = `${stop.id}-heading`

  return (
    <article className="trail-stop" id={stop.id} tabIndex="-1" aria-labelledby={headingId}>
      <header className="trail-stop__header">
        <p className="trail-stop__index">
          <span>{stop.number}</span>
          <span>{stop.route}</span>
        </p>
        <p className={`evidence-label evidence-label--${stop.statusTone}`}>{stop.status}</p>
        <h2 id={headingId}>{stop.title}</h2>
        <p className="trail-stop__summary">{stop.summary}</p>
      </header>

      <div className="trail-stop__body">
        <section>
          <h3>{labels.signal}</h3>
          <p>{stop.signal}</p>
        </section>
        <section>
          <h3>{stop.turningPointLabel}</h3>
          <p>{stop.turningPoint}</p>
        </section>
        <section>
          <h3>{labels.change}</h3>
          <p>{stop.change}</p>
        </section>

        {stop.illustrativeAlerts ? (
          <aside className="illustrative-alerts" aria-label={stop.illustrativeLabel}>
            <p className="evidence-label evidence-label--illustrative">{stop.illustrativeLabel}</p>
            <ul>
              {stop.illustrativeAlerts.map((alert) => (
                <li key={alert}>{alert}</li>
              ))}
            </ul>
          </aside>
        ) : null}

        {stop.baselineChecks ? (
          <section className="baseline-checks" aria-label="Vayu validation checks">
            <h3>Baseline checks</h3>
            <dl>
              {stop.baselineChecks.map((check) => (
                <div key={check.label}>
                  <dt>{check.label}</dt>
                  <dd>{check.copy}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <section className="trail-stop__source">
          <h3>{labels.source}</h3>
          <p>{stop.source}</p>
          <ProofLinks links={stop.links} />
        </section>
      </div>

      {children}
    </article>
  )
}

export default TrailStop
