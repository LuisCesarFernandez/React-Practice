using CopitoCandy.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CopitoCandy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : Controller
    {
        private readonly CopitoContext BD;

        public ClienteController(CopitoContext context)
        {
            BD = context;
        }

        [HttpGet]
        public IEnumerable<Cliente> ListarCliente()
        {
            return BD.Clientes.ToList();
        }

        [HttpGet("{id}", Name = "ObtenerCliente")]
        public ActionResult RetornarCliente(int id)
        {
            var Cliente = BD.Clientes.FirstOrDefault(c => c.Id == id);
            if (Cliente == null)
            {
                return NotFound();
            }
            return Ok(Cliente);
        }

        [HttpPost]
        public IActionResult CrearCliente([FromBody] Cliente cliente)
        {
            if (ModelState.IsValid)
            {
                using (var transaction = BD.Database.BeginTransaction())
                {
                    BD.Clientes.Add(cliente);
                    BD.SaveChanges();

                    transaction.Commit();

                    return new CreatedAtRouteResult("ObtenerCliente", new { id = cliente.Id }, cliente);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult ModificarCliente([FromBody] Cliente cliente, int id)
        {
            if (cliente.Id != id)
            {
                return BadRequest();
            }

            BD.Entry(cliente).State = EntityState.Modified;
            BD.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarCliente(int id) 
        {
            var cliente = BD.Clientes.Find(id);
            if (cliente == null) 
            {
                return NotFound();
            }
            BD.Clientes.Remove(cliente);
            BD.SaveChanges();

            return Ok(cliente);
        }
    }
}
