import Image from 'next/image'
import Link from 'next/link'

const AboutComponent = () => {
  return (
    <div>
      {/* Two-column layout: photo + info */}
      <div className="flex flex-col sm:flex-row gap-8 mb-10">
        {/* Left: Photo */}
        <div className="flex-shrink-0">
          <Image
            src="./images/sy.jpg"
            alt="Seongyoon Kim"
            width={180}
            height={180}
            unoptimized={true}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-heading mb-1">Seongyoon Kim</h1>
          <p className="text-body mb-1">PhD Candidate in Economics</p>
          <p className="text-body mb-3">University of Michigan</p>
          <p className="text-sm text-body mb-4">
            <a href="mailto:syoonkim@umich.edu" className="text-link hover:text-link-hover">
              syoonkim@umich.edu
            </a>
          </p>

          <div>
            <h2 className="text-sm font-medium text-heading mb-1">Research Fields</h2>
            <p className="text-sm text-body">
              Development Economics · Trade/Spatial Economics · Environmental Economics
            </p>
          </div>
        </div>
      </div>

      {/* JMP Highlight */}
      <div className="border-l-4 border-accent bg-blue-50 p-5 rounded-r-lg mb-10">
        <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">Job Market Paper</p>
        <h3 className="text-lg font-medium text-heading mb-2">
          <Link href="/research" className="hover:text-link">
            [Job Market Paper Title]
          </Link>
        </h3>
        <p className="text-sm text-body">
          [Brief description or one-line abstract of your job market paper.]
        </p>
      </div>

      {/* Bio */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-heading mb-3">About</h2>
        <p className="text-body leading-relaxed">
          I am a PhD candidate in Economics at the University of Michigan. My research lies in
          development economics, drawing inspiration from trade and spatial models. I am interested
          in firms, migration, and the effects of infrastructure development.
        </p>
        <p className="text-body leading-relaxed mt-3">
          I received my bachelor&apos;s degree from New York University Abu Dhabi (NYUAD) in
          Economics and Mathematics in 2020.
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-lg font-medium text-heading mb-3">Education</h2>
        <ul className="space-y-2">
          <li>
            <p className="text-body">PhD in Economics, 2021 &ndash; Present</p>
            <p className="text-sm text-gray-500">University of Michigan</p>
          </li>
          <li>
            <p className="text-body">B.A. in Economics and Mathematics, 2014 &ndash; 2020</p>
            <p className="text-sm text-gray-500">New York University Abu Dhabi</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutComponent
