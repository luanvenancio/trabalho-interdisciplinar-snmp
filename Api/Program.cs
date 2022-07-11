using Api.Middlewares;
using Api.Services;
using Microsoft.OpenApi.Models;
using System.Reflection;


// Arquivo para configurar o Pipeline da aplicação

// Cria o webhost
var builder = WebApplication.CreateBuilder(args);


// Configura os serviços da aplicação
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Adiciona o Swagger para documentação - https://localhost:5001/
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SNMP API", Description = "API for SNMP Queries", Version = "v1" });
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
});


// Registra o serviço de SNMP no Container de Injeção de Dependência(IoC)
builder.Services.AddScoped<ISnmpService, SnmpService>();

// Habilita o CORS
builder.Services.AddCors(options => {
    options.AddPolicy("Cors", policy => {
        policy.AllowAnyHeader()
              .AllowAnyOrigin()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configura o pipeline de requisições HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options => 
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "SNMPAPI v1");
        options.RoutePrefix = string.Empty;
    });
}

// Registra o middleware de tratamento de exceções 
app.UseMiddleware(typeof(ErrorHandlingMiddleware));

app.UseCors("Cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
