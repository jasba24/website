// Dependencies
import { CodePen } from 'mdx-embed/dist/components/codepen'
import { CodeSandbox } from 'mdx-embed/dist/components/codesandbox'
import { Tweet } from 'mdx-embed/dist/components/twitter/tweet'
import { YouTube } from 'mdx-embed/dist/components/youtube'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { LinkProps as LinkNextProps } from 'next/link'

// Internals
import { GraphImage, Link as NextLink } from '../'

const AlertInfo = dynamic(
  () => import('../Alert').then((mod) => mod.Alert.Info),
  {
    ssr: false,
  }
)
const Cloudinary = dynamic(() => import('./Cloudinary'), {
  ssr: false,
})
const Giphy = dynamic(() => import('./Giphy'), {
  ssr: false,
})

export const CustomLink = ({
  href,
  ...rest
}: React.ComponentProps<'a'> & LinkNextProps): JSX.Element => {
  const newHref = href
  const isInternalLink = newHref && newHref.startsWith('/')
  const isHeaderLink = newHref && newHref.startsWith('#')

  if (isHeaderLink) {
    return <a {...rest} href={newHref} />
  }

  if (isInternalLink) {
    return <NextLink {...rest} href={newHref} />
  }

  return <a {...rest} href={href} rel="noopener noreferrer" target="_blank" />
}

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
  CodePen,
  YouTube,
  CodeSandbox,
  Cloudinary,
  Giphy,
  AlertInfo,
  GraphCmsImage: GraphImage,
}

export default MDXComponents
