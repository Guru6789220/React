using Uttara_Backend.Models;
using Uttara_Backend.Models.DTO;

namespace Uttara_Backend.Services.IServices
{
    public interface ILoginService
    {
        public Task<Response<object>> ForgetPassword(ForgetPassword data);

        public Task<Response<AuthDTO>> Login(Login login);
    }
}
