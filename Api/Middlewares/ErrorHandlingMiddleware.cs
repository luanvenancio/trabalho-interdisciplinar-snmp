using System.Net;
using Lextm.SharpSnmpLib;
using Newtonsoft.Json;

namespace Api.Middlewares;

public class ErrorHandlingMiddleware
{
    private readonly RequestDelegate _next;

    // Middleware para tratar as exceções que ocorrerem sem necessidade de usar try/catch
    public ErrorHandlingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch(Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private static Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        var code = HttpStatusCode.InternalServerError;

        if(ex is ArgumentException)
            code = HttpStatusCode.BadRequest;

        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)code;

        string error = "";

        if(ex is SnmpException)
        {
            code = HttpStatusCode.NotFound;
            error = JsonConvert.SerializeObject(new
            {
                message = ex.Message,
                innerExceptionMessage = ex.InnerException?.Message,
                details = "No such OID found.",
            });
        } 
        else
        {
            error = JsonConvert.SerializeObject(new
            {
                message = ex.Message,
                innerExceptionMessage = ex.InnerException?.Message,
            });
        }

        return context.Response.WriteAsync(error);
    }
}