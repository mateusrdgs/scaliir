interface Pagename {
  path: string;
  route: string;
  name: string;
}

interface Pagenames {
  [name: string]: Pagename;
}

const createPageNames = (rootUrl = '/'): Pagenames => {
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
