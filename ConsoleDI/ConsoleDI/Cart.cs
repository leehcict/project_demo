using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDI
{
    public class Cart
    {

        private readonly IDatabase _db;
        private readonly ILogger _log;
        private readonly IEmailSender _es;

        public Cart(IDatabase db, ILogger log, IEmailSender es)
        {
            _db = db;
            _log = log;
            _es = es;
        }

        public void Checkout(int orderid, int userid)
        {            
            _db.Save(orderid);            
            _log.LogInfo("Order has been checkout");            
            _es.SenEmail(userid);
        }
    }
}
