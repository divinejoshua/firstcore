var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();

var app = builder.Build();

//for static files 
app.UseStaticFiles();

app.UseRouting();
app.MapRazorPages();

//app.MapGet("/", () => "Hello World again!");


app.Run(); 

