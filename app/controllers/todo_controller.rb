class TodoController < ApplicationController
  before_filter :get_all_todos

  def index
    render html: @todos
  end

  def all
    render json: @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def create
    @todo = Todo.new
    #@todo.id = params[:id]
    @todo.title = params[:todo][:title]
    @todo.active = params[:todo][:active]
    if @todo.save
      render text: 'Go'
    else
      render text: 'fail'
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      render nothing: true
    else
      render text: 'Go'
    end
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.title = params[:todo][:title]
    @todo.active = params[:todo][:active]
    @todo.save
    render nothing: true
  end

  def get_all_todos
    @todos = Todo.order("id ASC").all
  end
end
