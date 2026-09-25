'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'CV', href: '/cv' },
  { label: 'Teaching', href: '/teaching' },
]

const Header = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="flex items-center justify-between border-b border-gray-200 py-4 mb-10">
      <Link href="/">
        <h1 className="font-semibold text-xl text-heading hover:text-link transition-colors">
          Seongyoon Kim
        </h1>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors ${
              pathname === href
                ? 'text-link font-medium'
                : 'text-body hover:text-heading'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden p-2 text-gray-500 hover:text-gray-700"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="absolute top-24 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  pathname === href
                    ? 'text-link font-medium'
                    : 'text-body hover:text-heading'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
