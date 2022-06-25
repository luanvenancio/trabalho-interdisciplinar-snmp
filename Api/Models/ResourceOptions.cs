using System.Net;
using Lextm.SharpSnmpLib;

namespace Api.Models;

public class ResourceOptions
{
    public string IpAddress { get; set; }
    public string Community { get; set; }
    public string Variable { get; set; }

    public ResourceOptions(string ipAddress, string community, string variable)
    {
        IpAddress = ipAddress;
        Community = community;
        Variable = variable;
    }
}