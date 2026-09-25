// ——— Teaching data (edit here to add/update entries) ———
const courses = [
  {
    term: 'Fall 2023',
    course: 'Econ 452',
    title: 'Intermediate Introduction to Statistics and Econometrics II',
    role: 'Graduate Student Instructor',
  },
]

const TeachingComponent = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-heading mb-8">Teaching</h1>

      <h2 className="text-lg font-medium text-heading mb-4">Graduate Student Instructor</h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-heading">Term</th>
              <th className="px-4 py-3 text-left font-medium text-heading">Course</th>
              <th className="px-4 py-3 text-left font-medium text-heading">Title</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {courses.map((c, i) => (
              <tr key={i}>
                <td className="px-4 py-3 text-body whitespace-nowrap">{c.term}</td>
                <td className="px-4 py-3 text-body whitespace-nowrap">{c.course}</td>
                <td className="px-4 py-3 text-body">{c.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeachingComponent
