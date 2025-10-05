import Link from 'next/link'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the More Than OK blog and the people behind it.',
}

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container py-12 sm:py-20">
        <div className="max-w-3xl space-y-10">
          <header className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
              About the project
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              More Than OK is a notebook for the stories and people shaping Oklahoma.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From neighborhood discoveries to statewide headlines, this site captures the lived-in
              glimpse of life here—told through longform posts, curated photos, and the occasional
              guide to the places we keep returning to.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">What you&apos;ll find</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700 dark:text-gray-300">
              <li>Dispatches written in MDX and published from `content/posts`, mixed with hand-drawn photography.</li>
              <li>Thoughtful curation of local events, restaurant picks, and road trip itineraries that speak to every season.</li>
              <li>Behind-the-scenes observations on building with Next.js, Tailwind CSS, and the tooling that keeps the site fast.</li>
            </ul>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/60">
              <h3 className="font-semibold text-lg">How it&apos;s built</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Posts live in the filesystem, rendered through Next.js server components, and styled with Tailwind.
                Each deploy to Vercel pulls the latest Markdown and keeps the reading experience instant.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-800/60">
              <h3 className="font-semibold text-lg">Who&apos;s behind it</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Curated by Andrew Virts and friends who live, work, and explore across Oklahoma City, Tulsa, and the highways in between.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Stay in touch</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Have a story lead or a spot we should visit next? Reach out via{' '}
              <a href="https://andrewvirts.com" className="underline underline-offset-4">
                andrewvirts.com
              </a>{' '}
              or tag us on socials with <span className="font-mono text-sm">#morethanok</span>.
            </p>
          </section>

          <footer className="flex items-center gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Browse recent posts
            </Link>
            <a
              href="https://github.com/andrewvirts/more-than-ok/tree/main/content/posts"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 underline-offset-4 transition hover:underline dark:text-gray-300"
            >
              Explore the archive
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}
