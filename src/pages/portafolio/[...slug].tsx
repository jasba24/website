// Dependencies
import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import ErrorPage from 'next/error'
import Markdown from 'react-markdown'
import removeMarkdown from 'remove-markdown'
import { AiFillTags, AiOutlineLink } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'

// Components
import { SEO, CallToAction } from '@/components'

// Interfaces
import { Portfolio } from '@/interfaces'

// Utils
import { getStrapiURL, getPortfolioData } from '@/utils/api'

type DynamicPortfolioProps = {
  portfolio: Portfolio | null
}

const DynamicPortfolio: React.FC<DynamicPortfolioProps> = ({ portfolio }) => {
  // Hooks
  const router = useRouter()

  // Render

  /**
   * Check if the required data was provided
   */
  if ((!router.isFallback && !portfolio) || !portfolio) {
    return <ErrorPage statusCode={404} />
  }

  /**
   * Loading screen (only possible in preview mode)
   */
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  /**
   * Load content of the portfolio when data exist
   */
  return (
    <>
      <SEO
        title={portfolio.title}
        description={`${removeMarkdown(portfolio.body).substr(0, 157)}...`}
        shareImage={portfolio.ogCover}
      />

      <div className="relative flex flex-col items-center w-full min-h-screen xl:justify-center">
        <div className="absolute top-0 w-full max-w-4xl mx-auto">
          <button
            type="button"
            className="flex items-center pl-1 pr-2 font-semibold rounded text-primary focus:outline-none ring-2 ring-primary ring-offset-2 ring-offset-secondary"
            onClick={() => router.back()}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver
          </button>
        </div>

        <div className="container px-5 pt-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-center text-white">{portfolio.title}</h1>

            <div className="mt-4 space-y-6">
              <div>
                <h2 className="text-lg text-white">
                  <AiFillTags className="inline-block mr-1 text-primary" />
                  <b>Categoría:</b> {portfolio.category.name}
                </h2>
              </div>

              <div>
                <h2 className="text-lg text-white">
                  <BiCodeAlt className="inline-block mr-1 text-primary" />
                  <b>Tecnologías:</b> {portfolio.technologies.map((t) => t.name).join(`, `)}
                </h2>
              </div>

              <div>
                <a
                  href={portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded text-secondary bg-primary"
                >
                  Ver Proyecto <AiOutlineLink className="inline-block ml-1 text-secondary" />
                </a>
              </div>
            </div>

            <Markdown
              className="max-w-full py-5 text-lg prose text-justify text-primary"
              source={portfolio.body}
              escapeHtml={false}
            />

            <hr className="mt-3 mb-8 border-primary" />

            <p className="text-center text-gray-500">
              Este portafolio tiene como objetivo mostrar trabajos previamente realizados a través
              de enlaces externos. El desarrollador no se hace responsable por enlaces inaccesibles
              o trabajos modificados posterior a su entrega. Una vez entregado el trabajo encargado.
              queda a responsabilidad total del cliente el mantenimiento y buen uso del servicio
              solicitado originalmente.
            </p>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const portfolios = await (await fetch(getStrapiURL('/portfolios'))).json()
  const paths = portfolios.map((portfolio: Portfolio) => {
    const slugArray = portfolio.slug.split('__')

    return {
      params: { slug: slugArray },
    }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let chainedSlugs

  if (params == {} || !params?.slug) {
    chainedSlugs = ``
  } else {
    const slugs = params.slug as string[]

    chainedSlugs = slugs.join('__')
  }

  const portfolioData = await getPortfolioData(chainedSlugs)

  if (portfolioData == null) {
    return { props: {} }
  }

  const data = portfolioData

  return {
    props: {
      portfolio: data,
    },
  }
}

export default DynamicPortfolio
