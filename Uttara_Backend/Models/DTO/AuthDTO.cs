using System.ComponentModel.DataAnnotations;

namespace Uttara_Backend.Models.DTO
{
    public class AuthDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Role { get; set; }
        [Required]
        public string Token { get; set; }

        public string? Expires { get; set; }
    }
}
