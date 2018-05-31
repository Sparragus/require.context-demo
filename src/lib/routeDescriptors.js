import * as path from 'path'

import config from '../pages/Home/route.json'

function validateConfig (config) {
  if (!config.name || !config.path) {
    throw new Error(`Missing name or path in route config: ${JSON.stringify(config, null, 4)}`);
  }
}

function makeRouteDescriptors (routeConfigContext, routeComponentContext) {
  return routeConfigContext.keys().map(routeConfig => {
    const dirname = path.dirname(routeConfig)
    const routeComponent = routeComponentContext.keys().find(key => key.indexOf(dirname) === 0)

    // const config = routeConfigContext('../pages/Home/route.json')
    const config = routeConfigContext(routeConfig)
    validateConfig(config)

    const component = routeComponentContext(routeComponent).default

    return {
      name: config.name,
      path: config.path,
      component,
    }
  })
}

const routeConfigContext = require.context(
  '../pages',
  true,
  /route\.json$/
);

const routeComponentContext = require.context(
  '../pages',
  true,
  /index\.async\.js$/
);

export default makeRouteDescriptors(routeConfigContext, routeComponentContext)