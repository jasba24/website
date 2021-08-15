// Dependencies
import Image from '@graphcms/react-image'
import { useRouter } from 'next/router'
import { useI18n } from 'next-rosetta'

// Internals
import { Link } from '@/components'
import { formatDate } from '@/utils'
import type { Post } from '@/generated/graphql'
import type { Asset } from '@/interfaces'
import type { MyLocale } from 'i18n'

export const BlogCard = (post: Post): JSX.Element => {
  const { t } = useI18n<MyLocale>()
  const { locale } = useRouter()

  return (
    <article className="mb-12">
      <Link
        className="group hover:no-underline focus:no-underline"
        href={`/blog/${post.slug}`}
        locale={locale}
      >
        <div className="group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1 flex w-full overflow-hidden duration-200 transform rounded-lg">
          <Image
            alt={post.title}
            image={post.cover as Asset}
            outerWrapperClassName="w-full"
            withWebp
          />
        </div>

        <div className="mt-6">
          <p className="dark:text-gray-400 my-2 text-xs text-gray-500">
            {t('blog.publishedAt')}{' '}
            {formatDate(
              new Date(post.published).toISOString().slice(0, 19),
              'MMM. d yyy',
              locale
            )}
          </p>

          <h2 className="dark:text-white group-hover:underline group-focus:underline mb-2 text-2xl font-medium leading-tight text-gray-700">
            {post.title}
          </h2>
          <p className="dark:text-gray-300 text-sm text-gray-600">
            {post.seo?.description}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
