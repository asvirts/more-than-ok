import type {Metadata, ResolvingMetadata} from 'next'
import {notFound} from 'next/navigation'
import {Suspense} from 'react'
import {MDXRemote} from 'next-mdx-remote/rsc'
import Image from 'next/image'

import Avatar from '@/app/components/Avatar'
import {MorePosts} from '@/app/components/Posts'
import {getAllPostSlugs, getPostBySlug} from '@/lib/mdx'

type Props = {
  params: Promise<{slug: string}>
}

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  return getAllPostSlugs()
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    authors:
      post?.author?.firstName && post?.author?.lastName
        ? [{name: `${post.author.firstName} ${post.author.lastName}`}]
        : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: post.coverImage ? [post.coverImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata
}

export default async function PostPage(props: Props) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="container my-12 lg:my-24">
          <div className="max-w-4xl mx-auto">
            <div className="pb-6 grid gap-6 mb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-7xl">
                  {post.title}
                </h1>
                <p className='text-gray-500'>{post.excerpt}</p>
              </div>
              <div className="w-full flex gap-4 items-center">
                {post.author && post.author.firstName && post.author.lastName && (
                  <Avatar person={post.author} date={post.date} />
                )}
              </div>
            </div>
            <article className="gap-6 grid w-full">
              {post?.coverImage && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
                </div>
              )}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXRemote source={post.content} />
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
        <div className="container py-12 lg:py-24 grid gap-12">
          <aside>
            <Suspense>{await MorePosts({skip: post.slug, limit: 2})}</Suspense>
          </aside>
        </div>
      </div>
    </>
  )
}
