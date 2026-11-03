function TrailMap({ content, stops }) {
  return (
    <nav className="trail-map" aria-labelledby="trail-map-heading">
      <div className="trail-map__intro">
        <p className="section-kicker">Route map</p>
        <h2 id="trail-map-heading">{content.title}</h2>
        <p>{content.introduction}</p>
        <p className="trail-map__guidance">{content.guidance}</p>
      </div>
      <ol className="trail-map__list">
        {stops.map((stop) => (
          <li key={stop.id}>
            <a className="trail-map__link" href={`#${stop.id}`}>
              <span className="trail-map__number" aria-hidden="true">
                {stop.number}
              </span>
              <span className="trail-map__route">{stop.route}</span>
              <span className="trail-map__title">{stop.title}</span>
              <span className="trail-map__arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default TrailMap
