'use client'

import { useState } from 'react'

// ——— Paper data (edit here to add/update papers) ———
const papers = {
  jmp: {
    title: '[Job Market Paper Title]',
    coauthors: '',
    abstract: '[Abstract text for your job market paper.]',
    pdf: '',
  },
  workingPapers: [
    {
      title: 'Allocating Labor Across Small Firms: Experimental Evidence on Information Constraints',
      coauthors: '',
      abstract: '[Abstract text]',
      pdf: 'https://www.dropbox.com/scl/fi/tsbagohxjghtvdapylcn5/Draft_Apr_2024.pdf?rlkey=h4hs2ttwlk73m1mfuryc6xqhq&e=1&st=u8pzx94j&dl=0',
    },
  ],
  workInProgress: [
    // { title: '', coauthors: '' },
  ],
}

function AbstractToggle({ text }) {
  const [open, setOpen] = useState(false)

  if (!text || text.startsWith('[')) return null

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-blue-600 hover:underline ml-1"
      >
        [{open ? '\u2212' : '+'}Abstract]
      </button>
      {open && (
        <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
          {text}
        </p>
      )}
    </>
  )
}

function PaperEntry({ paper }) {
  return (
    <li className="mb-4">
      <p>
        <span className="font-medium text-neutral-900">{paper.title}</span>
        {paper.coauthors && (
          <span className="text-neutral-500"> (with {paper.coauthors})</span>
        )}
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline ml-1"
          >
            [PDF]
          </a>
        )}
        <AbstractToggle text={paper.abstract} />
      </p>
    </li>
  )
}

const ResearchComponent = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Research</h1>

      {/* Job Market Paper */}
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">Job Market Paper</h2>
      <ul className="list-none mb-6">
        <PaperEntry paper={papers.jmp} />
      </ul>

      <hr className="border-neutral-200 my-6" />

      {/* Working Papers */}
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">Working Papers</h2>
      <ul className="list-none mb-6">
        {papers.workingPapers.map((paper, i) => (
          <PaperEntry key={i} paper={paper} />
        ))}
      </ul>

      <hr className="border-neutral-200 my-6" />

      {/* Work in Progress */}
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">Work in Progress</h2>
      {papers.workInProgress.length > 0 ? (
        <ul className="list-none">
          {papers.workInProgress.map((paper, i) => (
            <PaperEntry key={i} paper={paper} />
          ))}
        </ul>
      ) : (
        <p className="text-neutral-400 italic text-sm">Coming soon.</p>
      )}
    </div>
  )
}

export default ResearchComponent
