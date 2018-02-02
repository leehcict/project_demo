using System;

namespace ConsoleDI.Mock
{
    public class XMLDatabase : IDatabase
    {
        public void Save(int orderId)
        {
            Console.WriteLine("Save to XML file");
        }
    }
}
