using System.Net;
using Lextm.SharpSnmpLib;

namespace Api.Services;

public interface ISnmpService
{
    Task<List<string>> ReadResource(string iPAddress, string community, string variable);
}