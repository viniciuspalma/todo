Todos.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create({
    url: 'http://localhost:3000',
    bulkCommit: false
  })
});
