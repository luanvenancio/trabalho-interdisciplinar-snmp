using Api.Middlewares;
using Api.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SNMP API", Description = "API for SNMP Queries", Version = "v1" });
});

builder.Services.AddScoped<ISnmpService, SnmpService>();

builder.Services.AddCors(options => {
    options.AddPolicy("Cors", policy => {
        policy.AllowAnyHeader()
              .AllowAnyOrigin()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options => 
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "SNMPAPI v1");
        options.RoutePrefix = string.Empty;
    });
}

app.UseMiddleware(typeof(ErrorHandlingMiddleware));

app.UseCors("Cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
