class TodoController < ApplicationController
  def index
    @todos = Todo.all

    respond_to do |format|
      format.html
      format.xml {render xml: @todos}
      format.json {render json: @todos}
    end
  end
end
