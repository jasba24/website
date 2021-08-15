// Dependencies
import Image from '@graphcms/react-image'
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

// Internals
import { Link } from '@/components'
import { sdk } from '@/lib/graphcms'
import { numberOfPages, readingTime } from '@/utils'
import type { PostsQuery } from '@/generated/graphql'
import type { Asset } from '@/interfaces'

const limit = 5

export type PostPageProps = {
  featured: PostsQuery['postsConnection']['posts'][0]
  posts: PostsQuery['postsConnection']['posts']
  hasNextPage: boolean
  hasPreviousPage: boolean
}

const PostPage: NextPage<PostPageProps> = ({ featured, posts }) => {
  const router = useRouter()

  return (
    <div className="container px-4 py-16">
      <div className="lg:grid-cols-2 lg:gap-16 grid grid-cols-1 gap-8">
        <div>
          <div className="hover:bg-white hover:shadow-2xl rounded-xl p-4 space-y-4 transition duration-200">
            <Link
              className="block"
              href={`/posts/${featured.node.slug}`}
              locale={router.locale}
              title={featured.node.title}
            >
              <Image
                alt={featured.node.title}
                className="rounded-xl"
                image={featured.node.cover as Asset}
                title={featured.node.title}
                withWebp
              />
            </Link>

            <div className="flex space-x-2">
              <div className="flex space-x-2">
                {featured.node.tags?.map((tag) => (
                  <Link
                    className="bg-secondary px-2 py-1 text-sm text-white rounded"
                    href={`/tags/${tag.slug}`}
                    key={tag.id}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>

              <span className="text-[#333]">•</span>
              <span className="text-[#818181]">
                {readingTime({
                  wordCount: featured.node.body.split(/\s+/gu).length,
                })}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl text-[#333]">
                <Link
                  href={`/posts/${featured.node.slug}`}
                  locale={router.locale}
                  title={featured.node.title}
                >
                  {featured.node.title}
                </Link>
              </h2>
              <p className="text-[#9f9f9f] line-clamp-3">
                {featured.node.body}
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {posts?.map((post) => (
              <li
                className="hover:bg-white hover:shadow-2xl rounded-xl flex p-2 space-x-4 transition duration-200"
                key={post.node.id}
              >
                <Link
                  className="block w-32 h-32"
                  href={`/posts/${post.node.slug}`}
                  locale={router.locale}
                  title={post.node.title}
                >
                  <Image
                    alt={post.node.title}
                    className="rounded-xl h-full"
                    image={post.node.cover as Asset}
                    outerWrapperClassName="h-full"
                    title={post.node.title}
                    withWebp
                  />
                </Link>

                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      {post.node.tags?.map((tag) => (
                        <Link
                          className="bg-secondary px-2 py-1 text-xs text-white rounded"
                          href={`/tags/${tag.slug}`}
                          key={tag.id}
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>

                    <span className="text-[#333] text-sm">•</span>
                    <span className="text-[#818181] text-sm">
                      {readingTime({
                        wordCount: post.node.body.split(/\s+/gu).length,
                      })}
                    </span>
                  </div>

                  <h2 className="text-lg text-[#333]">
                    <Link
                      href={`/posts/${post.node.slug}`}
                      locale={router.locale}
                      title={post.node.title}
                    >
                      {post.node.title}
                    </Link>
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  /**
   * Get the post count from GraphCMS
   */
  const { data } = await sdk().postsCount()

  /**
   * Create a list of pages based on the number of posts and the limit
   */
  const pages = [
    ...numberOfPages({
      total: data.postsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => {
    return locales.map((locale) => ({
      params: { page: String(page) },
      locale,
    }))
  })
  /**
   * Concat the pages together to avoid array in array
   */
  const paths = pages.concat.apply([], pages)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale
  const { table = {} } = await import(`i18n/${locale}`)
  const { data } = await sdk().posts({
    first: limit,
    locale: locale as any,
    offset: Number((+ctx.params.page - 1) * limit),
  })

  return {
    props: {
      table,
      featured: data.postsConnection.posts.shift(),
      posts: data.postsConnection.posts,
      ...data.postsConnection.pageInfo,
    },
  }
}

export default PostPage
