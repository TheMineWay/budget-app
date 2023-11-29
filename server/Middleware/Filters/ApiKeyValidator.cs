public class ApiKeyValidator : IApiKeyValidator
{
    public bool IsValid(string apiKey)
    {
        return apiKey == Environment.GetEnvironmentVariable("PASSWORD");
        ;
    }
}

public interface IApiKeyValidator
{
    bool IsValid(string apiKey);
}
