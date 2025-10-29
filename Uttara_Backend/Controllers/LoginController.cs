using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Uttara_Backend.Models.DTO;
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
        [HttpPost("ForgetPassword")]
        public async Task<IActionResult> ForgetPassword([FromBody] ForgetPassword details)
        {
            try
            {
                
                if(ModelState.IsValid)
                {
                    var res = await _loginService.ForgetPassword(details);
                    if(res.Success)
                    {
                        return Ok(res);
                    }
                    else
                    {
                        return Unauthorized(res);
                    }
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

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] Login logindata)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var res = await _loginService.Login(logindata);
                    if(res.Success)
                    {
                        
                        return Ok(res);
                    }
                    else
                    {
                        return Unauthorized(res);
                    }
                }
                else
                {
                    return BadRequest();
                }
                   
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
