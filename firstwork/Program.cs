var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddRazorPages();

//for static files 
app.UseStaticFiles();

app.UseRouting();
app.MapRazorPages();

//app.MapGet("/", () => "Hello World again!");


app.Run(); 

