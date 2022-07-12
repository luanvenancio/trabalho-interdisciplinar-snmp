using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SnmpController : ControllerBase
{
    private readonly ISnmpService _snmpService;

    public SnmpController(ISnmpService snmpService)
    {
        _snmpService = snmpService;
    }

    /// <summary>
    /// Busca um Recurso SNMP
    /// </summary>
    /// <remarks>
    /// Sample request:
    ///
    ///     GET /snmp
    ///     {
    ///        "ipAddress": "127.0.0.1",
    ///        "community": "public",
    ///        "oid": "1.3.6.1.2.1.1.1.0"
    ///     }
    ///
    /// </remarks>        
    /// <param name="resource">Endereço de IP, Comunidade e OID</param>        
    /// <response code="200">Sucesso ao retornar um Recurso utilizando o SNMP.</response> 
    /// <response code="404">Não foi encontrado o OID ou Comunidade informados.</response>
    /// <response code="500">A solicitação não foi concluída devido a um erro interno no lado do servidor ou tempo limite atingido.</response>
    [HttpGet] // Endpoint para buscar recursos via SNMP - GET https://localhost:5001/api/snmp
    public IActionResult GetResource([FromQuery] ResourceOptions resource)
    {
        var oids = _snmpService.ReadResource(resource.IpAddress, resource.Community, resource.Oid);

        if(oids.Count == 0) {
            return NotFound("No such OID found.");
        }

        return Ok(oids);
    }
}