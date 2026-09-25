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
    <header className="mb-8">
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors">
          Seongyoon Kim
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? 'text-blue-600'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-1 text-neutral-500 hover:text-neutral-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-neutral-100 py-3 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm ${
                pathname === href
                  ? 'text-blue-600'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <hr className="border-neutral-200" />
    </header>
  )
}

export default Header
