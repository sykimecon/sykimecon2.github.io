// ——— Teaching data (edit here to add/update entries) ———
const courses = [
  {
    term: 'Fall 2023',
    course: 'Econ 452',
    title: 'Intermediate Introduction to Statistics and Econometrics II',
  },
]

const TeachingComponent = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Teaching</h1>

      <h2 className="text-lg font-semibold text-neutral-900 mb-3">
        Graduate Student Instructor, University of Michigan
      </h2>

      <ul className="list-none space-y-2">
        {courses.map((c, i) => (
          <li key={i}>
            <span className="text-neutral-900 font-medium">{c.course}</span>
            {' \u2014 '}
            {c.title}
            <span className="text-neutral-400 text-sm ml-1">({c.term})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeachingComponent
