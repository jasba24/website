const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

handleDarkmode(darkModeMediaQuery)

/**
 * Handle chanfe of the favicon using the dark mode media query
 *
 * @param {MediaQueryListEvent} e The media query list event
 */
function handleDarkmode(e) {
  const darkModeOn = e.matches // true if dark mode is enabled
  const favicon = document.querySelector('link[rel="shortcut icon"]') // get favicon-192.png element
  const largeFavicon = document.querySelector('link[rel="icon"]') // get favicon.ico element

  if (!favicon || !largeFavicon) {
    return // where are our favicon elements???
  }

  if (darkModeOn) {
    favicon.href = '/static/icons/favicon-dark.ico'
  } else {
    favicon.href = '/static/icons/favicon.ico'
  }
}

darkModeMediaQuery.addEventListener('change', handleDarkmode)
