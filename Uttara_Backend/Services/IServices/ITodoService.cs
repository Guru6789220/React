using Uttara_Backend.Models;

namespace Uttara_Backend.Services.IServices
{
    public interface ITodoService
    {
        public Task<Response<List<TodoList>>> GetTodos();
        public Task<Response<TodoList>> CreateTodo(TodoList todo);

        public Task<Response<List<Users>>> UserDetails(int Page, int PageSize);

    }
}
