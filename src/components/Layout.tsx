// Dependencies
import { window } from 'browser-monads-ts'
import { useRouter } from 'next/router'
import CookieConsent from 'react-cookie-consent'

// Internals
import { Header, Footer, CallToAction } from '@/components'

export const Layout: React.FC = ({ children }) => {
  const router = useRouter()

  const acceptConsent = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
    })
  }

  const declineConsent = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
    })
  }

  return (
    <>
      <Header />

      {children}

      {router.pathname !== '/contacto' && <CallToAction />}

      <Footer />

      <CookieConsent
        buttonClasses="m-0 flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary hover:bg-secondary-400"
        buttonText="Ok"
        buttonWrapperClasses="flex space-x-2 items-center"
        containerClasses="bg-white flex items-center space-x-2 p-2 sm:p-3"
        contentClasses="m-0"
        cookieName="cookie_consent"
        cookieSecurity
        declineButtonClasses="m-0 flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-red-500 hover:bg-red-400"
        declineButtonText="No"
        enableDeclineButton
        expires={365}
        location="bottom"
        onAccept={acceptConsent}
        onDecline={declineConsent}
        sameSite="strict"
      >
        <p className="ml-3 text-sm font-medium text-black">
          This site uses cookies to provide you with a better user experience.
          For more information, refer to our{' '}
          <a
            className="underline"
            href="https://www.privacypolicies.com/live/b48840a3-6609-410d-8ae9-cf75a727ff6b"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cookie Policy
          </a>
        </p>
      </CookieConsent>
    </>
  )
}

export default Layout
