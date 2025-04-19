var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

var app = builder.Build();
app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action}/{id?}");

app.UseCors(x => x
.AllowCredentials()
.AllowAnyMethod()
.AllowAnyHeader()
.WithOrigins("http://127.0.0.1:5500"));

app.Run();
