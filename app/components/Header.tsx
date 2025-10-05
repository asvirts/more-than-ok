'use client'

import Image from 'next/image'
import Link from 'next/link'

import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 dark:bg-gray-900/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/" aria-label="More Than OK home">
            <Image
              src="/logo.png"
              alt="More Than OK logo"
              width={831}
              height={369}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono"
            >
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
