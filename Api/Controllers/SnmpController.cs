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
    public async Task<IActionResult> GetResource(ResourceOptions resource)
    {
        var variable = await _snmpService.ReadResource(resource.IpAddress, resource.Community, resource.Variable);

        return Ok(variable);
    }
}