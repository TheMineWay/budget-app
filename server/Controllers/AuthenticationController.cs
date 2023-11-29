using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("auth")]
public class AuthenticationController : ControllerBase
{
    [HttpGet("login")]
    [ApiKey]
    public string Login()
    {
        return "TOKEN";
    }
}