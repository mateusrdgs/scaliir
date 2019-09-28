const createPageNames = (rootUrl = '/') => {
  return {
    root: {
      path: `${rootUrl}`,
      route: `${rootUrl}`,
      name: 'root',
    },
    home: {
      path: `${rootUrl}`,
      route: `${rootUrl}`,
      name: 'home',
      page: './pages/Home',
    },
    about: {
      path: `${rootUrl}about/`,
      route: `${rootUrl}about`,
      name: 'about',
      page: './pages/About',
    },
  }
}

export default createPageNames
