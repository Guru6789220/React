using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Uttara_Backend.Models;
using Uttara_Backend.Services.IServices;

namespace Uttara_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;
        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTodos()
        {
            try
            {
                var result = await _todoService.GetTodos();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> SaveTodo([FromBody] TodoList todo)
        {
            try
            {
                if (todo != null)
                {
                    var result = await _todoService.CreateTodo(todo);
                    return Ok(result);
                }
                else
                {
                    return BadRequest("NO Data To Save");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("V1/UserDtails")]
        public async Task<IActionResult> UserDetails(int Page,int PageSize)
        {
            try
            {
                var result = await _todoService.UserDetails(Page, PageSize);
                return Ok(result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
