using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Uttara_Backend.Models;
using Uttara_Backend.Services.IServices;

namespace Uttara_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService= loginService;
        }
        [HttpPost]
        public async Task<IActionResult> ForgetPassword([FromBody] ForgetPassword details)
        {
            try
            {
                
                if(ModelState.IsValid)
                {
                    var res = await _loginService.ForgetPassword(details);
                    return res.Result != null ? Ok() : NotFound();
                }
                else
                {
                    return BadRequest("Not Data");
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
