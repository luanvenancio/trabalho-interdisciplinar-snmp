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

    [HttpGet]
    public IActionResult GetResource([FromQuery] ResourceOptions resource)
    {
        var oids = _snmpService.ReadResource(resource.IpAddress, resource.Community, resource.Oid);

        if(oids.Count == 0) {
            return NotFound("No such OID found.");
        }

        return Ok(oids);
    }
}