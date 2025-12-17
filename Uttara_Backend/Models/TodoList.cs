using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Uttara_Backend.Models
{
    public class TodoList
    {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        public string? ItemName { get; set; }

        [Required]
        public  DateTime CreatedDate { get; set; }

    }
}
