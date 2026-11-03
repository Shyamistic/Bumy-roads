function PublishingChecklist({ items }) {
  return (
    <section className="publishing-checklist" aria-labelledby="publishing-checklist-heading">
      <p className="section-kicker">Human-only release handoff</p>
      <h3 id="publishing-checklist-heading">Before this portfolio goes public</h3>
      <p>
        The interface is implemented here. Shyam must complete and verify every release item below.
      </p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default PublishingChecklist
