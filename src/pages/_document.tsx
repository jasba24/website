// Dependencies
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Base Meta */}
          <meta charSet="utf-8" />

          {/* Meta */}
          <meta
            content="#FAFAFA"
            media="(prefers-color-scheme: light)"
            name="msapplication-TileColor"
          />
          <meta
            content="#050505"
            media="(prefers-color-scheme: dark)"
            name="msapplication-TileColor"
          />
          <meta
            content="#FAFAFA"
            media="(prefers-color-scheme: light)"
            name="theme-color"
          />
          <meta
            content="#050505"
            media="(prefers-color-scheme: dark)"
            name="theme-color"
          />

          <link
            crossOrigin="anonymous"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Roboto+Slab:wght@400..700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="bg-[#FAFAFA] dark:bg-[#050505]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
