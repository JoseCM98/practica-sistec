namespace practica_backen.Models
{
    public class RegisterLog
    {
        public string Id { get; set; }
        public string? IdHuesped { get; set; }
        public string Nombre { get; set; }
        public string Identificacion { get; set; }
        public int Habitacion { get; set; }
        public DateTime? Ingreso { get; set; }
        public DateTime? Salida { get; set; }
        public string Accion { get; set; }
    }
}
