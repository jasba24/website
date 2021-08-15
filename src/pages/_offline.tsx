// Dependencies
import type { GetStaticProps, NextPage } from 'next'

const OfflinePage: NextPage = () => {
  return (
    <div className="sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 min-h-screen px-4 py-16">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="sm:text-5xl text-4xl font-extrabold">📴</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:pl-6">
              <h1 className="sm:text-5xl text-4xl font-extrabold tracking-tight text-[#333]">
                You are offline
              </h1>
              <p className="mt-1 text-base text-[#818181]">
                Please connect to the internet.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
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

export default OfflinePage
