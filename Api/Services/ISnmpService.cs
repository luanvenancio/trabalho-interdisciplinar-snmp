using System.Net;
using Lextm.SharpSnmpLib;

namespace Api.Services;

public interface ISnmpService
{
    List<string> ReadResource(string iPAddress, string community, string oid);
}