/** @type {import("next/dist/server/config").NextConfig } */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    localeDetection: true,
  },
  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      {
        destination: 'https://cdn.splitbee.io/sb.js',
        source: '/bee.js',
      },
      {
        destination: 'https://hive.splitbee.io/:slug',
        source: '/_hive/:slug',
      },
    ]
  },
  async redirects() {
    return [
      {
        destination: '/danestves-resume.pdf',
        source: '/DanielEsteves.pdf',
        permanent: true,
      },
      {
        destination: '/danestves-resume.pdf',
        source: '/danestves.pdf',
        permanent: true,
      },
      {
        destination: 'https://github.com/danestves?tab=repositories',
        source: '/github',
        permanent: true,
      },
      {
        destination: '/posts/page/1',
        source: '/posts',
        permanent: true,
      },
      {
        destination: 'https://twitter.com/danestves',
        source: '/twitter',
        permanent: true,
      },
      {
        destination: 'https://www.youtube.com/channel/UC6YYVDKZC3mu1iB8IOCFqcw',
        source: '/youtube',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'github-readme-stats.danestves.com',
      'raw.githubusercontent.com',
      'media.graphcms.com',
      'i.ytimg.com',
    ],
  },
  experimental: {
    esmExternals: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.googletagmanager.com;
  child-src *.youtube.com *.google.com *.twitter.com *.codepen.io *.cloudinary.com codesandbox.io danestves-git-feat-graphcms-danestves.vercel.app;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' *.googleapis.com *.amazonaws.com *.gstatic.com;
  worker-src 'self';
  object-src *.danestves.com;
  frame-src *.danestves.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]
