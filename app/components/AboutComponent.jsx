import Image from 'next/image'
import Link from 'next/link'

const AboutComponent = () => {
  return (
    <div>
      {/* Name and title */}
      <div className="flex items-start gap-6 mb-6">
        <Image
          src="./images/sy.jpg"
          alt="Seongyoon Kim"
          width={120}
          height={120}
          unoptimized={true}
          className="rounded-full object-cover flex-shrink-0"
        />
        <div className="pt-2">
          <h1 className="text-2xl font-semibold text-neutral-900">
            Seongyoon Kim
          </h1>
          <p className="text-neutral-600 mt-1">
            PhD Candidate in Economics at the{' '}
            <a href="https://lsa.umich.edu/econ" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              University of Michigan
            </a>
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="leading-relaxed mb-4">
        My research lies in development economics, drawing inspiration from trade and spatial
        models. I am interested in firms, migration, and the effects of infrastructure development.
      </p>

      <p className="leading-relaxed mb-4">
        I received my bachelor&apos;s degree from New York University Abu Dhabi (NYUAD) in
        Economics and Mathematics in 2020.
      </p>

      <p className="leading-relaxed mb-6">
        <span className="font-medium text-neutral-900">Research fields:</span>{' '}
        Development Economics, Trade/Spatial Economics, Environmental Economics.
      </p>

      {/* CV link */}
      <p className="mb-6">
        <Link href="/cv" className="text-blue-600 hover:underline">Curriculum Vitae</Link>
      </p>

      <hr className="border-neutral-200 my-8" />

      {/* Job Market Paper */}
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">Job Market Paper</h2>
      <p className="leading-relaxed mb-2">
        <Link href="/research" className="text-blue-600 hover:underline font-medium">
          [Job Market Paper Title]
        </Link>
      </p>
      <p className="text-sm text-neutral-500 leading-relaxed">
        [Brief description or one-line abstract of your job market paper.]
      </p>

      <hr className="border-neutral-200 my-8" />

      {/* Education */}
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">Education</h2>
      <ul className="space-y-1.5">
        <li>PhD in Economics, University of Michigan, 2021 &ndash; Present</li>
        <li>B.A. in Economics and Mathematics, New York University Abu Dhabi, 2014 &ndash; 2020</li>
      </ul>

      <hr className="border-neutral-200 my-8" />

      {/* Contact */}
      <h2 className="text-lg font-semibold text-neutral-900 mb-3">Contact</h2>
      <p>
        <a href="mailto:syoonkim@umich.edu" className="text-blue-600 hover:underline">
          syoonkim@umich.edu
        </a>
      </p>
    </div>
  )
}

export default AboutComponent
