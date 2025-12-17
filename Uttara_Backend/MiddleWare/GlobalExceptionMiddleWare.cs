using System.Net;
using System.Text.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Uttara_Backend.MiddleWare
{
    public class GlobalExceptionMiddleWare
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<GlobalExceptionMiddleWare> _logger;

        public GlobalExceptionMiddleWare(RequestDelegate next, ILogger<GlobalExceptionMiddleWare> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);

                if (context.Response.StatusCode >= 400 && !context.Response.HasStarted)
                {
                    await HandleNonExceptionStatusCode(context);
                }
                

            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static async Task HandleNonExceptionStatusCode(HttpContext context)
        {
            try
            {
                context.Response.ContentType = "application/json";
                var statuscode = context.Response.StatusCode;
                var message = statuscode switch
                {
                    400 => "Bad Request",
                    401=>"Unauthorized",
                    403=>"Forbidden",
                    404=>"Resource Not Found",
                    500=>"Server Error",
                    _=>"Error Occured"
                };

                var result = new
                {
                    Success = false,
                    Message = message,
                    Data = (object)null,
                    Errors = (object)null
                };

                await context.Response.WriteAsync(JsonSerializer.Serialize(result));



            }
            catch(Exception ee)
            {

            }
        }

        private static async Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            try
            {
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = ex switch
                {
                    ArgumentNullException => (int)HttpStatusCode.BadRequest,
                    KeyNotFoundException => (int)HttpStatusCode.NotFound,
                    _ => (int)HttpStatusCode.InternalServerError
                };

                var res = new
                {
                    Success = false,
                    Message = ex.Message,
                    Data=(object?)null,
                    Errors = new Dictionary<string, Exception>()
                };

                var jsonresponse = JsonSerializer.Serialize(res);

                await context.Response.WriteAsync(jsonresponse);

            }
            catch (Exception ee)
            {

            }
        }
    }
}
