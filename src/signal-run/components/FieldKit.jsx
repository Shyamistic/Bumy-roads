import ProofLinks from './ProofLinks.jsx'

function FieldKit({ contactLinks, experiment, kit, checklist }) {
  return (
    <section className="field-kit" aria-labelledby="field-kit-heading">
      <div className="field-kit__heading">
        <p className="evidence-label evidence-label--proposal">{experiment.status}</p>
        <h3 id="field-kit-heading">{experiment.title}</h3>
        <p>{experiment.introduction}</p>
      </div>

      <dl className="field-kit__facts">
        <div>
          <dt>Audience</dt>
          <dd>{experiment.audience}</dd>
        </div>
        <div>
          <dt>Hypothesis</dt>
          <dd>{experiment.hypothesis}</dd>
        </div>
        <div>
          <dt>Consent-first method</dt>
          <dd>{experiment.methodology}</dd>
        </div>
        <div>
          <dt>North star</dt>
          <dd>{experiment.northStar}</dd>
        </div>
        <div>
          <dt>Kill condition</dt>
          <dd>{experiment.killCondition}</dd>
        </div>
      </dl>

      <section className="field-kit__steps" aria-labelledby="experiment-steps-heading">
        <h4 id="experiment-steps-heading">The proposed 14-day route</h4>
        <ol>
          {experiment.steps.map((step) => (
            <li key={step.phase}>
              <strong>{step.phase}</strong>
              <span>{step.copy}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="field-kit__budget" aria-labelledby="field-kit-budget-heading">
        <div>
          <p className="section-kicker">Proposed use of a grant</p>
          <h4 id="field-kit-budget-heading">{kit.title}</h4>
          <p>{kit.answer}</p>
        </div>
        <div className="field-kit__total" aria-label={`Proposed total: ${kit.total}`}>
          <span>Total</span>
          <strong>{kit.total}</strong>
        </div>
        <ul>
          {kit.budget.map((line) => (
            <li key={line.item}>
              <span>{line.item}</span>
              <strong>{line.amount}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="field-kit__checklist" aria-labelledby="field-kit-checklist-heading">
        <h4 id="field-kit-checklist-heading">Consent and public-contact checklist</h4>
        <ul>
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ProofLinks links={contactLinks} />
      </section>
    </section>
  )
}

export default FieldKit
