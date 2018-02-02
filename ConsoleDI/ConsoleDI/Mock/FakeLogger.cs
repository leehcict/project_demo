using System;

namespace ConsoleDI.Mock
{
    public class FakeLogger : ILogger
    {
        public void LogInfo(string info)
        {
            Console.WriteLine("Fake log");
        }
    }
}
