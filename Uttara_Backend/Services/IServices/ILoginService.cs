using Uttara_Backend.Models;

namespace Uttara_Backend.Services.IServices
{
    public interface ILoginService
    {
        public Task<Response> ForgetPassword(ForgetPassword data);
    }
}
