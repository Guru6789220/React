using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using System.Data;
using Uttara_Backend.DataAccess;
using Uttara_Backend.Models;
using Uttara_Backend.Services.IServices;

namespace Uttara_Backend.Services
{
    public class LoginService : ILoginService
    {
        private readonly Response response;
        private readonly DCConnect connect;
        public LoginService(DCConnect connect)
        {
            this.connect= connect;
            response = new Response();
        }
        public async Task<Response> ForgetPassword(ForgetPassword data)
        {
            try
            {
                if(data!=null)
                {
                    var user = await connect.Users.FirstOrDefaultAsync(s => s.Email.ToLower() == data.EmailId.ToLower());
                    if (user != null)
                    {
                        user.Password = data.NewPassword;
                        await connect.SaveChangesAsync();
                        response.Result = user.UserName;
                    }
                    else
                    {
                        response.Result = null;
                        response.ErrMessage = "Email Not Found";
                    }
                        return response;
                }
                else
                {
                    response.Result = null;
                    response.ErrMessage = "No Data Found";
                    return response;
                }
            }
            catch(Exception ex)
            {
                response.Result = null;
                response.ErrMessage = ex.Message;
                return response;
            }
        }

        
    }
}
