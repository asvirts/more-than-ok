import {Suspense} from 'react'

import {AllPosts} from '@/app/components/Posts'

export default async function Page() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container py-12 sm:py-20">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-black dark:text-white mb-4 max-w-4xl">Recent Posts</h1>
        </div>

        <aside>
          <Suspense>{await AllPosts()}</Suspense>
        </aside>
      </div>
    </div>
  )
}
