using System;

namespace ConsoleDI.Mock
{
    public class FakeEmailSender : IEmailSender
    {
        public void SenEmail(int userId)
        {
            Console.WriteLine("Send face email");
        }
    }
}
