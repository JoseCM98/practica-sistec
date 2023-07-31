using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using practica_backen.Models;

namespace practica_backen.Configurations
{
    public class LogConfiguration : IEntityTypeConfiguration<RegisterLog>
    {
        public void Configure(EntityTypeBuilder<RegisterLog> builder)
        {
            builder.HasKey(x => x.Id)
                .HasName("Primary");

            builder.Property(x => x.Id)
                .IsRequired()
                .HasColumnType("varchar(36)");

            builder.ToTable("Log");

            builder.HasIndex(x => x.Id)
                .HasDatabaseName("FK_IndexIdLog");

            builder.Property(x => x.IdHuesped)
               .IsRequired()
               .HasColumnType("varchar(36)");

            builder.Property(x => x.Nombre)
               .IsRequired()
               .HasColumnType("varchar(100)");

            builder.Property(x => x.Identificacion)
                .IsRequired()
                .HasColumnType("varchar(100)");

            builder.Property(x => x.Habitacion)
                .IsRequired()
                .HasColumnType("int");

            builder.Property(x => x.Ingreso)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(x => x.Salida)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(x => x.Accion)
               .IsRequired()
               .HasColumnType("varchar(100)");

        }
    }
}
