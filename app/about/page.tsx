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
              About me
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Running the race and striving to bring God's Word to Oklahoma and beyond.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The idea for the name of this blog came from the Switchfoot song "More Than Fine" from one of my favorite albums of all time, The Beautiful Letdown. The phrase 'more than OK' I feel perfectly encompasses my story as I've battled with both depression and anxiety throughout my life. By God's good grace, He has brought me to a place where I am not just 'OK', but I am thriving only because He sustains me.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Mark 16:15 tells us to "Go into all the world and preach the gospel to all creation". I grew up in Florida, but also lived in Louisiana for a while. My family and I now live in the Oklahoma City area where I work on <a href='https://www.youversion.com/the-bible-app/' target='_blank'>the Bible App</a>.</p>
          </header>

          <footer className="flex items-center gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              See my recent posts
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
}
