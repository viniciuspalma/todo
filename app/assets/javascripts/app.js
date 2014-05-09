//= require jquery-1.10.2.min
//= require handlebars-1.0.0
//= require ember
//= require ember-data

window.Todos = Ember.Application.create();
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

//= require_tree .
