const CvComponent = () => {
  const cvPath = './sykim_cv2024.pdf'

  return (
    <div>
      <h2 className="section-heading">Curriculum Vitae</h2>

      <a href={cvPath} className="button-cv" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" style={{ width: '1rem', height: '1rem', fill: 'currentColor', flex: '0 0 auto' }}>
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg>
        <strong>Download PDF</strong>
      </a>

      <div style={{ border: '1px solid var(--color-border)', borderRadius: '0.375rem', overflow: 'hidden', marginTop: '1rem' }}>
        <iframe
          src={cvPath}
          title="Curriculum Vitae"
          style={{ width: '100%', height: '80vh', border: 'none' }}
        />
      </div>

      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
        PDF not displaying?{' '}
        <a href={cvPath} download>Download it here</a>.
      </p>
    </div>
  )
}

export default CvComponent
