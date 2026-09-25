import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header>
        <Image
          src="./images/sy.jpg"
          alt="Seongyoon Kim, PhD Candidate in Economics at the University of Michigan"
          width={200}
          height={200}
          unoptimized={true}
          className="profile-pic"
        />
        <p className="sidebar-name">Seongyoon Kim</p>
        <p>PhD Candidate in Economics<br />University of Michigan</p>
        <p className="sidebar-email contactinfo-plain">syoonkim@umich.edu</p>
        <hr />

        <div className="contact-container">
          <p className="contactinfo">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>
            <a href="mailto:syoonkim@umich.edu">Email</a>
          </p>
        </div>
      </header>
    </div>
  )
}

export default Sidebar
