var _ = require('ramda');
module.exports = _.curry((app, middleware) => app.use(middleware));
