using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebIOC.MVC.Startup))]
namespace WebIOC.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
