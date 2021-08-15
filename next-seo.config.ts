// Dependencies
import type { DefaultSeoProps } from 'next-seo'

const baseUrl = 'https://danestves.com'

const common: DefaultSeoProps = {
  additionalLinkTags: [
    {
      href: '/static/icons/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
    {
      href: '/static/icons/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      href: '/static/icons/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      href: '/static/icons/site.webmanifest',
      rel: 'manifest',
    },
    {
      href: '/static/icons/safari-pinned-tab.svg',
      rel: 'mask-icon',
      color: '#050505',
    },
    {
      href: '/static/icons/favicon.ico',
      rel: 'shortcut icon',
    },
  ],
  additionalMetaTags: [
    { content: '#FAFAFA', name: 'msapplication-TileColor' },
    {
      content: '/static/icons/browserconfig.xml',
      name: 'msapplication-config',
    },
    { content: 'light dark', name: 'color-scheme' },
    { content: 'fc24b57a0cc85e0e', name: 'yandex-verification' },
  ],
  languageAlternates: [
    { href: baseUrl, hrefLang: 'en' },
    { href: `${baseUrl}/es`, hrefLang: 'es' },
  ],
  openGraph: {
    defaultImageHeight: 630,
    defaultImageWidth: 1200,
    profile: {
      firstName: 'Daniel',
      gender: 'male',
      lastName: 'Esteves',
      username: 'danestves',
    },
    site_name: 'Daniel Esteves',
    type: 'website',
    url: baseUrl,
  },
  twitter: {
    handle: '@danestves',
    site: '@danestves',
    cardType: 'summary_large_image',
  },
}
const title_by_lang = {
  en: 'Daniel Esteves - Frontend Developer',
  es: 'Daniel Esteves - Frontend Developer',
}
const description_by_lang = {
  en: 'Learn about web development, discover tools that can help us day to day, and find courses made by @danestves about React, NextJS, Gatsby, Nuxt, Website Optimization, Firebase and much more.',
  es: 'Aprende sobre desarrollo web, descubre herramientas que nos pueden ayudar en el día a día, y encuentra cursos realizados por @danestves sobre React, NextJS, Gatsby, Nuxt, Optimización de sitios web, Firebase y mucho más.',
}

const getSeoByLang = (lang: string): DefaultSeoProps => {
  switch (lang) {
    case 'en':
      return {
        ...common,
        description: description_by_lang['en'],
        openGraph: {
          ...common.openGraph,
          description: description_by_lang['en'],
          images: [
            {
              url: `https://cdn.flyyer.io/v2/danestves-com/_/_/${lang}`,
              alt: 'Daniel Esteves',
              height: 630,
              width: 1200,
            },
          ],
          locale: 'en',
          title: title_by_lang['en'],
        },
        title: title_by_lang['en'],
      }
    case 'es':
      return {
        ...common,
        description: description_by_lang['es'],
        openGraph: {
          ...common.openGraph,
          description: description_by_lang['es'],
          images: [
            {
              url: `https://cdn.flyyer.io/v2/danestves-com/_/_/`,
              alt: 'Daniel Esteves',
              height: 630,
              width: 1200,
            },
          ],
          locale: 'es',
          title: title_by_lang['es'],
        },
        title: title_by_lang['es'],
      }
    default:
      return common
  }
}

export default getSeoByLang
