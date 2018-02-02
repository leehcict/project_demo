using Business.Interface;

namespace Business.Cart
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
