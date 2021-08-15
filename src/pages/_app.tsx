// Dependencies
import * as React from 'react'
import { window } from 'browser-monads-ts'
import { MDXEmbedProvider } from 'mdx-embed'
import { I18nProvider } from 'next-rosetta'
import { DefaultSeo, LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Script from 'next/script'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

// Internals
import { Layout } from '@/components'
import { GA_MEASUREMENT_ID, pageview } from '@/lib/gtag'
import '@/styles/main.css'
import defaultSeo from 'seoConfig'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element | null {
  React.useEffect(() => {
    /**
     * Handle a route change.
     *
     * @param url The URL of the page
     */
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  let lang = ''
  switch (router.locale) {
    case 'es':
      lang = '/es'
      break
    default:
      break
  }

  return (
    <ThemeProvider attribute="class">
      <I18nProvider table={pageProps.table}>
        <MDXEmbedProvider>
          <>
            <Head>
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
            </Head>
            <DefaultSeo
              {...defaultSeo(router.locale)}
              canonical={`https://danestves.com${lang}${router.asPath}`}
            />

            <LogoJsonLd
              logo="https://danestves.com/logo.png"
              url="https://danestves.com"
            />
            <SocialProfileJsonLd
              name="Daniel Esteves"
              sameAs={[
                'https://youtube.com/danesteves',
                'https://instagram.com/danestves',
                'https://www.linkedin.com/in/danestves',
                'https://twitter.com/danestves',
              ]}
              type="Person"
              url="https://danestves.com"
            />

            <Layout>
              <Component {...pageProps} />

              <Script async src="/static/js/switch-favicon.js" />
              <Script
                async
                data-api="/_hive"
                src="/bee.js"
                strategy="afterInteractive"
              />
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
              />
              <Script strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                  dataLayer.push(arguments);
                }

                gtag('consent', 'default', {
                  'ad_storage': 'denied'
                });

                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
              </Script>
            </Layout>
          </>
        </MDXEmbedProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric): void {
  window.gtag?.('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  })
}

export default MyApp
