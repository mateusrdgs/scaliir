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
    },
    about: {
      path: `${rootUrl}about/`,
      route: `${rootUrl}about`,
      name: 'about',
    },
  };
};

module.exports = createPageNames;
