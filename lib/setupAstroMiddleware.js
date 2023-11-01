var express = require('express')

/**
 * Setup the astro middleware on Express app
 *
 * Example:
 *
 *   setupAstroMiddleware('/', path.join(__dirname, 'dist'), app)
 *
 * @param {string} base base route to serve static client files
 * @param {string} dist absolute path to dist folder location
 * @param {*} app Express app
 */
function setupAstroMiddleware (base, dist, app) {
  let astroHandler

  // get astro handler
  import(`${dist}/server/entry.mjs`).then(({ handler }) => astroHandler = handler )

  // serve static astro client files
  app.use(base, express.static(`${dist}/client/`))

  // plug server middleware
  app.use((req, res, next) => astroHandler(req, res, next, app.locals) )

}

module.exports = setupAstroMiddleware


