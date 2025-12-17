using Microsoft.EntityFrameworkCore;
using Uttara_Backend.DataAccess;
using Uttara_Backend.Models;
using Uttara_Backend.Services.IServices;

namespace Uttara_Backend.Services
{
    public class TodoService : ITodoService
    {
        private readonly DCConnect db;
        private readonly IConfiguration configuration;

        public TodoService(DCConnect db,IConfiguration configuration)
        {
            this.db= db;
            this.configuration= configuration;
        }
        public async Task<Response<TodoList>> CreateTodo(TodoList todo)
        {
            try
            {
                TodoList newtodo = new TodoList
                {
                    ItemName = todo.ItemName,
                    CreatedDate = DateTime.Now,
                };
                await db.TodoList.AddAsync(newtodo);
                await db.SaveChangesAsync();

                return Response<TodoList>.Ok("Data Saved", new TodoList { });
            }
            catch (Exception ex)
            {
                return Response<TodoList>.Fail(ex.Message);
            }
        }

        public async Task<Response<List<TodoList>>> GetTodos()
        {
            try
            {
                var res = await db.TodoList.ToListAsync();
                return Response<List<TodoList>>.Ok("Feteched data", res);
            }
            catch(Exception ex)
            {
                return Response<List<TodoList>>.Fail(ex.Message);
            }
        }

        public async Task<Response<List<Users>>> UserDetails(int Page, int PageSize)
        {
            try
            {
                var result = await db.Users.OrderBy(o=>o.UserName).Skip((Page - 1) * PageSize).Take(PageSize).ToListAsync();
                return Response<List<Users>>.Ok("Fetching Data", result);
            }
            catch(Exception ex)
            {
                return Response<List<Users>>.Fail(ex.Message);
            }
        }
    }
}
