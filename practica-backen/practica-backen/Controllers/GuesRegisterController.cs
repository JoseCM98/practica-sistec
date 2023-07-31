using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using practica_backen.Helper;
using practica_backen.Models.Dto;
using practica_backen.Models;

namespace practica_backen.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GuesRegisterController : ControllerBase
    {
        private readonly DataContext _context;

        public GuesRegisterController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<GuestRegister> GetGuestList()
        {
            try
            {
                List<GuestRegister> guests = _context.GuestRegisters.ToList();

                return Ok(guests);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public ActionResult<GuestRegister> GetGuest(string id)
        {
            try
            {
                GuestRegister guest = _context.GuestRegisters.Find(id);

                return Ok(guest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult<GuestRegister> PostGuest([FromBody] GuestRegisterDto model)
        {
            try
            {
                GuestRegister newGuest = new GuestRegister();
                RegisterLog newRegister = new RegisterLog();
                newGuest.Id = Guid.NewGuid().ToString();
                newGuest.Nombre = model.Nombre;
                newGuest.Identificacion = model.Identificacion;
                newGuest.Habitacion = model.Habitacion;
                newGuest.Ingreso = DateTime.Now;
                newGuest.Salida = DateTime.Now;


                newRegister.Id = Guid.NewGuid().ToString();
                newRegister.IdHuesped = newGuest.Id;
                newRegister.Nombre = newGuest.Nombre;
                newRegister.Identificacion = newGuest.Identificacion;
                newRegister.Habitacion = newGuest.Habitacion;
                newRegister.Ingreso = newGuest.Ingreso;
                newRegister.Salida = newGuest.Salida;
                newRegister.Accion = "Ingreso";
                _context.GuestRegisters.Add(newGuest);
                _context.RegisterLogs.Add(newRegister);
                _context.SaveChanges();
                return Ok(newGuest);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public ActionResult<GuestRegister> PutGuest(string id, [FromBody] GuestRegisterDto model)
        {
            try
            {
                GuestRegister oldGuest = _context.GuestRegisters.Find(id); ;
                if (oldGuest == null)
                {
                    return BadRequest("No existe el huesped");
                }
                RegisterLog newRegister = new RegisterLog();
                oldGuest.Nombre = model.Nombre;
                oldGuest.Identificacion = model.Identificacion;
                oldGuest.Habitacion = model.Habitacion;
                oldGuest.Ingreso = model.Ingreso;
                oldGuest.Salida = DateTime.Now;


                newRegister.Id = Guid.NewGuid().ToString();
                newRegister.IdHuesped = oldGuest.Id;
                newRegister.Nombre = oldGuest.Nombre;
                newRegister.Identificacion = oldGuest.Identificacion;
                newRegister.Habitacion = oldGuest.Habitacion;
                newRegister.Ingreso = oldGuest.Ingreso;
                newRegister.Salida = oldGuest.Salida;
                newRegister.Accion = "Actualizado";

                _context.RegisterLogs.Add(newRegister);
                _context.SaveChanges();
                return Ok(oldGuest);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
        }
        [HttpDelete("{id}")]
        public ActionResult<GuestRegister> DeleteGuest(string id)
        {
            try
            {
                GuestRegister oldGuest = _context.GuestRegisters.Find(id);
                if (oldGuest == null)
                {
                    return BadRequest("No se econtro pet");

                }
                RegisterLog newRegister = new RegisterLog();
                newRegister.Id = Guid.NewGuid().ToString();
                newRegister.IdHuesped = oldGuest.Id;
                newRegister.Nombre = oldGuest.Nombre;
                newRegister.Identificacion = oldGuest.Identificacion;
                newRegister.Habitacion = oldGuest.Habitacion;
                newRegister.Ingreso = oldGuest.Ingreso;
                newRegister.Salida = oldGuest.Salida;
                newRegister.Accion = "Salida";

                _context.RegisterLogs.Add(newRegister);
                _context.GuestRegisters.Remove(oldGuest);
                _context.SaveChanges();
                List<GuestRegister> guest = _context.GuestRegisters.ToList();
                return Ok(guest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
