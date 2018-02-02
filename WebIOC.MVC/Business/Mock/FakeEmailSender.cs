using Business.Interface;
using System;

namespace Business.Mock
{
    public class FakeEmailSender : IEmailSender
    {
        public void SenEmail(int userId)
        {
            Console.WriteLine("Send face email");
        }
    }
}
