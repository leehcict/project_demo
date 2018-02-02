using Business.Interface;
using System;

namespace Business.Mock
{
    public class FakeLogger : ILogger
    {
        public void LogInfo(string info)
        {
            Console.WriteLine("Fake log");
        }
    }
}
