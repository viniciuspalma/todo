TodoList::Application.routes.draw do
  root :to => 'todo#index'

  post '/todos' => 'todo#create'
  #get '/:id' => 'todo#show'
  put '/todos/:id' => 'todo#update'
  delete '/todos/:id' => 'todo#delete'

end
