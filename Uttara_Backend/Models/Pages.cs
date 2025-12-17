using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Uttara_Backend.Models
{
    public class Pages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PageId { get; set; }
        [Required]
        [MaxLength(50)]
        public string PageName { get; set; }
        [Required]
        [MaxLength(250)]
        public string PageDesc { get; set; }
        [Required]
        public int ParentId { get; set; }
        [Required]
        [MaxLength(100)]
        public string Path { get; set; }

        [Required]
        public int CreatedBy { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
    }
}
