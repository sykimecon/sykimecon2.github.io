'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'CV', href: '/cv' },
]

const Header = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="navbar">
      <nav className="main-nav" aria-label="Main navigation">
        <div className="nav-left">
          <Image
            src="./images/sy.jpg"
            alt=""
            width={32}
            height={32}
            unoptimized={true}
            className="nav-profile-pic"
          />
          <p className="brand">
            <Link href="/">Seongyoon Kim</Link>
          </p>
        </div>

        {/* Desktop nav */}
        <ul className="nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={href} style={{ listStyle: 'none' }}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Mobile dropdown */}
        <ul className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
