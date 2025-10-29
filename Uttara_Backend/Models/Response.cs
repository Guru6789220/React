namespace Uttara_Backend.Models
{
    public class Response<T>
    {
        public bool Success { get; set; }

        public string Message { get; set; }

        public T? Data { get; set; }

        public Dictionary<string, string>? Errors { get; set; }

        public Response()
        {
            Success = true;
            Message = string.Empty;
            Data = default;
            Errors = new Dictionary<string, string>();
        }


        public static Response<T> Fail(string Message, Dictionary<string, string>? Errors = null)
        {
            return new Response<T>
            {
                Success = false,
                Message = Message,
                Errors = Errors
            };

        }

        public static Response<T> Ok(string Message, T data)
        {
            return new Response<T>
            {
                Success = true,
                Message = Message,
                Data = data
            };
        }
    }

}
