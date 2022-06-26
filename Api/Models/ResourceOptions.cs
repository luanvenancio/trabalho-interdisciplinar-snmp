namespace Api.Models;

public class ResourceOptions
{
    public string IpAddress { get; set; }
    public string Community { get; set; }
    public string Oid { get; set; }

    public ResourceOptions(string ipAddress = "", string community = "", string oid = "")
    {
        IpAddress = ipAddress;
        Community = community;
        Oid = oid;
    }

    public ResourceOptions(){
        IpAddress = "";
        Community = "";
        Oid = "";
    }
}