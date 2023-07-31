namespace practica_backen.Models.Dto
{
    public class GuestRegisterDto
    {
        public string Nombre { get; set; }
        public string Identificacion { get; set; }
        public int Habitacion { get; set; }
        public DateTime? Ingreso { get; set; }
        public DateTime? Salida { get; set; }
    }
}
