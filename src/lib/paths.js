import routeDescriptors from './routeDescriptors'

const pathFunctions = routeDescriptors.reduce((fns, rd) => {
  fns[rd.name] = function (params) {
    let path = rd.path

    if (params) {
      Object.keys(params).forEach(param => {
        path = path.replace(`:${param}`, params[param])
      })
    }

    return path
  }

  return fns
}, {})

export default pathFunctions
