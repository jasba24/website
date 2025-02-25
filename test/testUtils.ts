// Dependencies
import { render, RenderResult } from '@testing-library/preact'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui: React.ReactElement, options = {}): RenderResult => {
  return render(ui, { wrapper: Providers, ...options })
}

// re-export everything
export * from '@testing-library/preact'

// override render method
export { customRender as render }
