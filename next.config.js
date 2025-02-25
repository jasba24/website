// @ts-check
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact')
const withTM = require('next-transpile-modules')([
  'remark-torchlight',
  '@torchlight-api/torchlight-cli',
])

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  // @ts-ignore the rest of the config is not required
  images: {
    domains: ['i.ytimg.com', 'media.graphcms.com', 'raw.githubusercontent.com'],
    minimumCacheTTL: 31536000,
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
  async redirects() {
    return [
      {
        source: '/DanielEsteves.pdf',
        destination: '/danestves.pdf',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/danestves?tab=repositories',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/danestves',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UC6YYVDKZC3mu1iB8IOCFqcw',
        permanent: true,
      },
      {
        source: '/youtube/:id',
        destination: 'https://www.youtube.com/watch?v=:id',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/feed.xml',
        destination: '/api/feed',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}

module.exports = withPlugins(
  [withTM, [withBundleAnalyzer], [withPreact]],
  nextConfig
)

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
