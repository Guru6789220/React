
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Uttara_Backend.DataAccess;
using Uttara_Backend.Models;
using Uttara_Backend.Models.DTO;
using Uttara_Backend.Services.IServices;

namespace Uttara_Backend.Services
{
    public class LoginService : ILoginService
    {
        private readonly DCConnect connect;
        private readonly IConfiguration configuration;
        public LoginService(DCConnect connect,IConfiguration configuration)
        {
            this.connect= connect;
            this.configuration= configuration;
        }
        public async Task<Response<object>> ForgetPassword(ForgetPassword data)
        {
            var response = new Response<object>();
            try
            {
                
                    var user = await connect.Users.FirstOrDefaultAsync(s => s.Email.ToLower() == data.EmailId.ToLower());
                    if (user != null)
                    {
                        user.Password = data.NewPassword;
                        await connect.SaveChangesAsync();

                        response.Success = true;
                        response.Message = "Password Re-Generated";
                        response.Data = null;
                    
                    }
                    else
                    {
                        response.Success= false;
                        response.Message = "Validation Error";
                        response.Data = null;
                        response.Errors = new Dictionary<string, string>
                        {
                            {"Email","Email Id Not Found" }
                        };
                        
                    }
                return response;
                
               
            }
            catch(Exception ex)
            {
                response.Success= false;
                response.Message= ex.Message;
                return response;
            }
        }

        public async Task<Response<AuthDTO>> Login(Login login)
        {
            try
            {
                if(login!=null)
                {
                    var result = await connect.Users.Where(s => s.UserName.ToLower() == login.UserName.ToLower() && s.Password.ToLower() == login.Password.ToLower()).FirstOrDefaultAsync();
                    if(result!=null)
                    {
                       string Tokens= GenerateToken(result.UserName, result.Email);
                        return Response<AuthDTO>.Ok("Token Generated", new AuthDTO { UserName=result.UserName,Role="Admin",Token=Tokens,});
                    }
                    else
                    {
                        return Response<AuthDTO>.Fail("validation Error", new Dictionary<string, string> { { "Username", "Invalid UserName Or Password" } });
                    }
                }
                else
                {
                    return Response<AuthDTO>.Fail("No Data Found");
                }
            }
            catch(Exception ex)
            {
                return Response<AuthDTO>.Fail(ex.Message);
               
            }
        }

        public string GenerateToken(string UserName,string Email)
        {
            try
            {
                var securitykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
                var credentails = new SigningCredentials(securitykey, SecurityAlgorithms.HmacSha256);

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Name, UserName),
                    new Claim(JwtRegisteredClaimNames.Email, Email),
                    new Claim("Role",""),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
                };

                var startTime = DateTime.Now;
                var endTime = DateTime.Now.AddMinutes(3);

                var token = new JwtSecurityToken(
                    configuration["Jwt:Issuer"],
                    configuration["Jwt:Audience"],
                    claims,
                    expires: endTime,
                    signingCredentials: credentails);

                string newToken=new JwtSecurityTokenHandler().WriteToken(token);
                return newToken;
            }
            catch (Exception ex)
            {
                return "";
            }
           
        }
        
    }
}
