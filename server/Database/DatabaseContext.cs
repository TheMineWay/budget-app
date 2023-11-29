using Microsoft.EntityFrameworkCore;

class DatabaseContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

        if (string.IsNullOrEmpty(databaseUrl)) throw new Exception();

        optionsBuilder.UseMySql(databaseUrl);
    }
}