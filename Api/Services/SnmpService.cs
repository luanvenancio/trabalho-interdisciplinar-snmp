using System.Net;
using Lextm.SharpSnmpLib;
using Lextm.SharpSnmpLib.Messaging;

namespace Api.Services;

class SnmpService : ISnmpService
{
    public SnmpService()
    {
    }

    public async Task<List<string>> ReadResource(string ipAddress, string community, string variable)
    {
        var oids = await Messenger.GetAsync(VersionCode.V1,
                           new IPEndPoint(IPAddress.Parse(ipAddress), 161),
                           new OctetString(community),
                           new List<Variable>{new Variable(new ObjectIdentifier(variable))});

        var oidsStrings = new List<string>();

        foreach(var oid in oids)
        {
            oidsStrings.Add(oid.ToString());
        }
        

        return oidsStrings;
    }
}