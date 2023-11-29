using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("auth")]
public class AuthenticationController : ControllerBase
{
    [HttpGet("login")]
    public string Login()
    {
        return "TOKEN";
    }
}