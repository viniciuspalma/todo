class TodoController < ApplicationController
  @todos = Todo.all
  def index
    render html: @todos
  end

  def all
    render json: @todos
  end
end
