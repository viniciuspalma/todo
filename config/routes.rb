TodoList::Application.routes.draw do
  root :to => 'todo#index'
  get 'todo/index'
end
