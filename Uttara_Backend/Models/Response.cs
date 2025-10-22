namespace Uttara_Backend.Models
{
    public class Response
    {
        public object Result  { get; set; }
        public int Status { get; set; }

        public string ErrMessage { get; set; }
        public string Message { get; set; }
    }
}
