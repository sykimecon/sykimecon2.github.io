const CvComponent = () => {
  const cvPath = './sykim_cv2024.pdf'

  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900 mb-4">Curriculum Vitae</h1>

      <p className="mb-6">
        <a
          href={cvPath}
          download
          className="text-blue-600 hover:underline"
        >
          Download PDF
        </a>
      </p>

      <div className="border border-neutral-200 rounded overflow-hidden">
        <iframe
          src={cvPath}
          title="Curriculum Vitae"
          className="w-full"
          style={{ height: '80vh' }}
        />
      </div>

      <p className="text-xs text-neutral-400 mt-3">
        PDF not displaying?{' '}
        <a href={cvPath} download className="text-blue-600 hover:underline">
          Download it here
        </a>.
      </p>
    </div>
  )
}

export default CvComponent
