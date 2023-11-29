public class ApiKeyValidator : IApiKeyValidator
{
    public bool IsValid(string apiKey)
    {
        return apiKey == "secret";
    }
}

public interface IApiKeyValidator
{
    bool IsValid(string apiKey);
}
