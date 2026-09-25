import Link from 'next/link'

const AboutComponent = () => {
  return (
    <div>
      <p>
        I am a PhD Candidate in the Department of Economics at the{' '}
        <a href="https://lsa.umich.edu/econ" target="_blank" rel="noopener noreferrer">
          University of Michigan
        </a>
        . My research lies in development economics, drawing inspiration from trade and spatial
        models. I am interested in firms, migration, and the effects of infrastructure development.
      </p>

      <p>
        I received my bachelor&apos;s degree from{' '}
        <a href="https://nyuad.nyu.edu/" target="_blank" rel="noopener noreferrer">
          New York University Abu Dhabi
        </a>{' '}
        (NYUAD) in Economics and Mathematics in 2020.
      </p>

      <Link href="/cv" className="button-cv">
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ width: '1rem', height: '1rem', fill: 'currentColor', flex: '0 0 auto' }}>
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg>
        <strong>Curriculum Vitae</strong>
      </Link>

      <hr />

      <h2 className="section-heading">Job Market Paper</h2>
      <div className="paper-card">
        <p className="paper-title">[Job Market Paper Title]</p>
        <p className="paper-meta">[Brief description or one-line abstract of your job market paper.]</p>
      </div>
    </div>
  )
}

export default AboutComponent
