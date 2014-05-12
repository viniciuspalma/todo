TodoList::Application.routes.draw do
  root :to => 'todo#index'

  post '/todos' => 'todo#create'
  get 'todos' => 'todo#all'
  put '/todos/:id' => 'todo#update'
  delete '/todos/:id' => 'todo#delete'

end
