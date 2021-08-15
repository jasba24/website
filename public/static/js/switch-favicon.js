const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

handleDarkmode(darkModeMediaQuery)

/**
 * Handle chanfe of the favicon using the dark mode media query
 *
 * @param {MediaQueryListEvent} e The media query list event
 */
function handleDarkmode(e) {
  const darkModeOn = e.matches // True if the media query matches
  const favicon = document.querySelector('link[rel="shortcut icon"]') // Get the favicon

  if (!favicon) {
    return // If favicon is not found, do nothing
  }

  if (darkModeOn) {
    favicon.href = '/static/icons/favicon-dark.ico'
  } else {
    favicon.href = '/static/icons/favicon.ico'
  }
}

darkModeMediaQuery.addEventListener('change', handleDarkmode)
