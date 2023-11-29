# Use the appropriate .NET SDK image as a base
FROM mcr.microsoft.com/dotnet/sdk:7.0

# Set the working directory in the container
WORKDIR /app

# Copy the backend files to the working directory
COPY . .

# Restore dependencies and build the project
RUN dotnet restore
RUN dotnet build -c Release

# Expose the port your ASP.NET app runs on
EXPOSE 8080

# Set the command to start the app
CMD ["dotnet", "run", "--urls", "http://0.0.0.0:80"]