//import routes from modules and add them to const routes

const apiPrefix = '/api/v1';

// add your route to this list
const routes = [
  
];
export default (app) => {
  routes.forEach(route => app.use(apiPrefix, route));
  return app;
};
