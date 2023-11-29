using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthenticationController : ControllerBase
{
    [HttpPost()]
    [ApiKey]
    public string Login()
    {
        return "TOKEN";
    }
}
