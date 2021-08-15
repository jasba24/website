// Dependencies
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkCodeTitles from 'remark-code-titles'
import type { I18nProps } from 'next-rosetta'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

// Internals
import BlogLayout from '@/layouts/blog'
import { sdk } from '@/lib/graphcms'
import type { Post } from '@/generated/graphql'
import type { MyLocale } from 'i18n'

interface Props {
  post: Post & {
    mdx: {
      compiledSource: string
    }
  }
}

const PostPage: NextPage<Props> = ({ post }) => <BlogLayout post={post} />

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Array<string | { params: any; locale?: string }> = []

  // Loop over every locale and later loop on every blog to add the locale
  for (const locale of locales as string[]) {
    const data = await sdk()
      .getAllPostsWithSlug({
        locale: locale as any,
      })
      .then((data) => data.data)

    data.posts.map((post) => {
      paths.push({ params: { slug: post.slug }, locale })
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<I18nProps<MyLocale>> = async (
  context
) => {
  const locale = context.locale || context.defaultLocale
  const { table = {} } = await import(`i18n/${locale}`)

  const data = await sdk()
    .getPost({
      slug: context.params?.slug as string,
      locale: locale as any,
      stage: 'PUBLISHED' as any,
    })
    .then((data) => data.data)

  return {
    props: {
      table,
      post: {
        ...data.post,
        mdx: await serialize(data.post?.body, {
          mdxOptions: {
            remarkPlugins: [remarkCodeTitles],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'append' }],
            ],
          },
        }),
      },
    },
    revalidate: 600,
  }
}

export default PostPage
