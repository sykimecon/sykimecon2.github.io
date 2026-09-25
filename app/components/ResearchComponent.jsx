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
      abstract: '',
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
        className="abstract-toggle"
        style={{ marginLeft: '0.25rem' }}
      >
        <span className="abstract-toggle-icon">{open ? '[\u2212]' : '[+]'}</span> Abstract
      </button>
      {open && (
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          {text}
        </p>
      )}
    </>
  )
}

function PaperEntry({ paper }) {
  return (
    <div className="paper-card">
      <p className="paper-title">
        {paper.title}
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '0.5rem', fontSize: '0.875rem', fontWeight: 400 }}
          >
            [PDF]
          </a>
        )}
      </p>
      {paper.coauthors && (
        <p className="paper-meta">with {paper.coauthors}</p>
      )}
      <AbstractToggle text={paper.abstract} />
    </div>
  )
}

const ResearchComponent = () => {
  return (
    <div>
      <h2 className="section-heading">Job Market Paper</h2>
      <PaperEntry paper={papers.jmp} />

      <h2 className="section-heading" style={{ marginTop: '2rem' }}>Working Papers</h2>
      {papers.workingPapers.map((paper, i) => (
        <PaperEntry key={i} paper={paper} />
      ))}

      <h2 className="section-heading" style={{ marginTop: '2rem' }}>Work in Progress</h2>
      {papers.workInProgress.length > 0 ? (
        papers.workInProgress.map((paper, i) => (
          <PaperEntry key={i} paper={paper} />
        ))
      ) : (
        <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Coming soon.</p>
      )}
    </div>
  )
}

export default ResearchComponent
