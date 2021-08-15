// Dependencies
import { useI18n } from 'next-rosetta'
import Image from 'next/image'
import type { GetStaticProps, NextPage } from 'next'

// Internals
import { Link, SEO } from '@/components'
import { MyLocale } from 'i18n'
import LogoImage from 'public/static/img/logo.png'

const Page404: NextPage = () => {
  const { t } = useI18n<MyLocale>()

  return (
    <>
      <SEO title={String(t('404.seo.title'))} />
      <div className="flex flex-col min-h-screen pt-16 pb-12 bg-white">
        <main className="max-w-7xl sm:px-6 lg:px-8 flex flex-col justify-center flex-grow w-full px-4 mx-auto">
          <div className="flex justify-center flex-shrink-0">
            <Link className="inline-flex" href="/">
              <span className="sr-only">Daniel Esteves</span>
              <span className="inline-block w-12 h-auto">
                <Image
                  alt="@danestves logo"
                  placeholder="blur"
                  src={LogoImage}
                />
              </span>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                {t('404.headline')}
              </p>
              <h1 className="sm:text-5xl mt-2 text-4xl font-extrabold tracking-tight text-gray-900">
                {t('404.title')}
              </h1>
              <p className="mt-2 text-base text-gray-500">{t('404.message')}</p>
              <div className="mt-6">
                <Link
                  className="hover:text-blue-500 text-base font-medium text-blue-600"
                  href="/"
                >
                  {t('404.back')}
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="max-w-7xl sm:px-6 lg:px-8 flex-shrink-0 w-full px-4 mx-auto">
          <nav className="flex justify-center space-x-4">
            <Link
              className="hover:text-gray-600 text-sm font-medium text-gray-500"
              href="/rss.xml"
            >
              RSS
            </Link>
            <span
              aria-hidden="true"
              className="inline-block border-l border-gray-300"
            />
            <Link
              className="hover:text-gray-600 text-sm font-medium text-gray-500"
              href="/sitemap.xml"
            >
              Sitemap
            </Link>
            <span
              aria-hidden="true"
              className="inline-block border-l border-gray-300"
            />
            <Link
              className="hover:text-gray-600 text-sm font-medium text-gray-500"
              href="/twitter"
            >
              Twitter
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale
  const { table = {} } = await import(`i18n/${locale}`)

  return {
    props: {
      table,
    },
  }
}

export default Page404
