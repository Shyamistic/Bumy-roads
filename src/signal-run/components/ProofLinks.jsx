function ProofLinks({ links }) {
  if (links.length === 0) {
    return null
  }

  return (
    <ul className="proof-links">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} rel="noreferrer" target="_blank">
            <span>{link.label}</span>
            <span aria-hidden="true" className="proof-links__arrow">
              ↗
            </span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          {link.note ? <small>{link.note}</small> : null}
        </li>
      ))}
    </ul>
  )
}

export default ProofLinks
