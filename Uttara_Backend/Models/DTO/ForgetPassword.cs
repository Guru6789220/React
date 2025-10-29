using System.ComponentModel.DataAnnotations;

namespace Uttara_Backend.Models.DTO
{
    public class ForgetPassword
    {
        [Required(ErrorMessage ="Enter Email Address")]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",ErrorMessage ="Invalid Email Address")]
        public string EmailId { get; set; }

        [Required(ErrorMessage ="Enter Password")]
        public string NewPassword { get; set; }
    }
}
