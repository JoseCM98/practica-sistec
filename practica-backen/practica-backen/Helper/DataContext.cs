using Microsoft.EntityFrameworkCore;
using practica_backen.Configurations;
using practica_backen.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace practica_backen.Helper
{
    public class DataContext : DbContext
    {
        public DataContext()
        {
        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }


        public DbSet<GuestRegister> GuestRegisters { get; set; }
        public DbSet<RegisterLog> RegisterLogs { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new GuestConfiguration());
            modelBuilder.ApplyConfiguration(new LogConfiguration());

        }
    }
}
