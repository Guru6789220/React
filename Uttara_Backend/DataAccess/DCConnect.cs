using Microsoft.EntityFrameworkCore;
using Uttara_Backend.Models;

namespace Uttara_Backend.DataAccess
{
    public class DCConnect:DbContext
    {
        public DCConnect(DbContextOptions<DCConnect> options):base(options) 
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Users> Users { get; set; }

        public DbSet<TodoList> TodoList { get; set; }
    }
}
