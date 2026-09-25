const CvComponent = () => {
  const cvPath = './sykim_cv2024.pdf'

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-heading">Curriculum Vitae</h1>
        <a
          href={cvPath}
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded hover:bg-link-hover transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* Embedded PDF viewer */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <iframe
          src={cvPath}
          title="Curriculum Vitae"
          className="w-full"
          style={{ height: '80vh' }}
        />
      </div>

      {/* Fallback */}
      <p className="text-sm text-gray-400 mt-3 text-center">
        PDF not displaying?{' '}
        <a href={cvPath} download className="text-link hover:text-link-hover">
          Download it here
        </a>.
      </p>
    </div>
  )
}

export default CvComponent
