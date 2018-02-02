using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDI
{
    class Program
    {
        static void Main(string[] args)
        {
            // voi moi Interface ta define mot class tuong ung
            DIContainer.SetModule<IDatabase, Database>();
            DIContainer.SetModule<ILogger, Logger>();
            DIContainer.SetModule<IEmailSender,EmailSender>();

            DIContainer.SetModule<Cart,Cart>();

            //DI Container se tu inject Database, Logger vao cart
            var myCart = DIContainer.GetModule<Cart>();
        }
        
    }
}
