using System.ComponentModel.DataAnnotations;

namespace Uttara_Backend.Models.DTO
{
    public class Login
    {
        [Required(ErrorMessage ="Enter User Name")]
        public string UserName { get; set; }
        [Required(ErrorMessage ="Enter Password")]
        public string Password { get; set; }
    }
}
