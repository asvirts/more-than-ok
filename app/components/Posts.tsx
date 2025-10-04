import Link from 'next/link'

import {getAllPosts, PostMetadata} from '@/lib/mdx'
import DateComponent from '@/app/components/Date'
import Avatar from '@/app/components/Avatar'

const Post = ({post, index}: {post: PostMetadata; index: number}) => {
  const {title, slug, excerpt, date, author, coverImage} = post

  return (
    <article key={slug} className="flex flex-col bg-white overflow-hidden group">
      {/* Image section */}
      <Link href={`/posts/${slug}`} className="block aspect-[16/9] bg-gray-200 overflow-hidden mb-6">
        {coverImage ? (
          <img src={coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
        )}
      </Link>

      {/* Content section */}
      <div className="flex flex-col flex-1">
        {/* Date and category */}
        <div className="flex items-center gap-4 mb-6">
          <DateComponent dateString={date} className="text-sm text-gray-900" />
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#2d5442] bg-[#c8f4d9] rounded-md uppercase tracking-wide">
            Press Releases
          </span>
        </div>

        {/* Title */}
        <Link href={`/posts/${slug}`}>
          <h3 className="text-2xl lg:text-3xl font-normal mb-4 leading-tight text-gray-900 hover:text-[#2d5442] transition-colors">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-base leading-relaxed text-gray-700 mb-6 flex-1">{excerpt}</p>
      </div>
    </article>
  )
}

const Posts = ({posts, heading}: {posts: PostMetadata[]; heading?: string}) => {
  if (posts.length === 0) return null

  return (
    <div>
      {heading && <h2 className="text-3xl font-normal tracking-tight text-black mb-2">{heading}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {posts.map((post, idx) => (
          <Post key={post.slug} post={post} index={idx} />
        ))}
      </div>
    </div>
  )
}

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const allPosts = getAllPosts()
  const filteredPosts = allPosts.filter((post) => post.slug !== skip).slice(0, limit)

  if (filteredPosts.length === 0) {
    return null
  }

  return <Posts posts={filteredPosts} heading={`Recent Posts`} />
}

export const AllPosts = async () => {
  const allPosts = getAllPosts()

  if (allPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-normal mb-4 text-black">No posts yet</h2>
        <p className="text-gray-700">
          Create your first post by adding a <code className="bg-gray-100 px-2 py-1 rounded">.mdx</code> file to{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">content/posts/</code>
        </p>
      </div>
    )
  }

  return <Posts posts={allPosts} />
}
