'use client'

import { useState } from 'react'

// ——— Paper data (edit here to add/update papers) ———
const papers = {
  jmp: {
    title: '[Job Market Paper Title]',
    coauthors: '',
    abstract: '[Abstract text for your job market paper.]',
    pdf: '',
    status: 'Job Market Paper',
  },
  workingPapers: [
    {
      title: 'Allocating Labor Across Small Firms: Experimental Evidence on Information Constraints',
      coauthors: '',
      abstract: '[Abstract text]',
      pdf: 'https://www.dropbox.com/scl/fi/tsbagohxjghtvdapylcn5/Draft_Apr_2024.pdf?rlkey=h4hs2ttwlk73m1mfuryc6xqhq&e=1&st=u8pzx94j&dl=0',
      status: 'Working Paper',
    },
  ],
  workInProgress: [
    // { title: '', coauthors: '', status: 'Work in Progress' },
  ],
}

function AbstractToggle({ text }) {
  const [open, setOpen] = useState(false)

  if (!text || text.startsWith('[')) return null

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-link hover:text-link-hover"
      >
        [{open ? '\u2212' : '+'}Abstract]
      </button>
      {open && (
        <p className="mt-2 text-sm text-body leading-relaxed pl-4 border-l-2 border-gray-200">
          {text}
        </p>
      )}
    </div>
  )
}

function PaperEntry({ paper, highlight = false }) {
  return (
    <div className={`mb-6 ${highlight ? 'border-l-4 border-accent bg-blue-50 p-4 rounded-r-lg' : ''}`}>
      {highlight && (
        <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">
          {paper.status}
        </p>
      )}
      <h3 className={`font-medium text-heading ${highlight ? 'text-lg' : ''}`}>
        {paper.title}
      </h3>
      {paper.coauthors && (
        <p className="text-sm text-gray-500 mt-0.5">with {paper.coauthors}</p>
      )}
      <div className="flex items-center gap-3 mt-1">
        {!highlight && paper.status && (
          <span className="text-xs text-gray-500 italic">{paper.status}</span>
        )}
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-link hover:text-link-hover"
          >
            [PDF]
          </a>
        )}
      </div>
      <AbstractToggle text={paper.abstract} />
    </div>
  )
}

const ResearchComponent = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-heading mb-8">Research</h1>

      {/* Job Market Paper */}
      <section className="mb-10">
        <PaperEntry paper={papers.jmp} highlight={true} />
      </section>

      {/* Working Papers */}
      <section className="mb-10">
        <h2 className="text-lg font-medium text-heading mb-4">Working Papers</h2>
        {papers.workingPapers.map((paper, i) => (
          <PaperEntry key={i} paper={paper} />
        ))}
      </section>

      {/* Work in Progress */}
      <section className="mb-10">
        <h2 className="text-lg font-medium text-heading mb-4">Work in Progress</h2>
        {papers.workInProgress.length > 0 ? (
          papers.workInProgress.map((paper, i) => (
            <PaperEntry key={i} paper={paper} />
          ))
        ) : (
          <p className="text-sm text-gray-400 italic">Coming soon.</p>
        )}
      </section>
    </div>
  )
}

export default ResearchComponent
