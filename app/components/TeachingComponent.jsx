// ——— Teaching data (edit here to add/update entries) ———
const courses = [
  {
    term: 'Fall 2023',
    course: 'Introduction to Statistics and Econometrics II (Econ 452)',
  },
]

const TeachingComponent = () => {
  return (
    <div>
      <h2 className="section-heading">Teaching</h2>

      <h3 className="institution-heading">
        Graduate Student Instructor at <strong>the University of Michigan</strong>
      </h3>

      <table className="teaching-table" role="table" aria-label="Graduate Student Instructor at the University of Michigan">
        <tbody>
          {courses.map((c, i) => (
            <tr key={i}>
              <td data-label="Term">{c.term}</td>
              <td data-label="Course">{c.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeachingComponent
