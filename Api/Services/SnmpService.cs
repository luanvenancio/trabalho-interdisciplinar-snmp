using System.Net;
using Lextm.SharpSnmpLib;
using Lextm.SharpSnmpLib.Messaging;

namespace Api.Services;

class SnmpService : ISnmpService
{
    public SnmpService()
    {
    }

    public async Task<List<string>> ReadResource(string ipAddress, string community, string oid)
    {
        var host = new IPEndPoint(IPAddress.Parse(ipAddress), 161);
        var communityOctet = new OctetString(community);
        var variables = new List<Variable>{new Variable(new ObjectIdentifier(oid))};

        var oids = await Messenger.GetAsync(VersionCode.V1, host, communityOctet, variables);

        var oidMessages = new List<string>();

        foreach(var item in oids)
        {
            oidMessages.Add(item.ToString());
        }
        
        return oidMessages;
    }
}