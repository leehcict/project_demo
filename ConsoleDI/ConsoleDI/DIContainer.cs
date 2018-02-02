using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDI
{
    public class DIContainer
    {
        //Dictionary de chua cac interface va module tuong ung

        private static readonly Dictionary<Type, object> ResgisteredModules = new Dictionary<Type, object>();

        //Dang type trong C# de de viet code
        public static void SetModule<TInterface, TModule>()
        {
            SetModule(typeof(TInterface),typeof(TModule));
        }
        public static T GetModule<T>()
        {
            return (T)GetModule(typeof(T));
        }

        private static void SetModule(Type interfaceType,Type moduleType)
        {
            //Kiểm tra class đã implement interface chưa
            if(!interfaceType.IsAssignableFrom(moduleType))
            {
                throw new Exception("Wrong Module type");
            }

            //Tìm contructor đầu tiên
            var firstConstructor = moduleType.GetConstructors()[0];
            object module = null;
            //Nếu như không có tham số
            if (!firstConstructor.GetParameters().Any())
            {
                //Khởi tạo class
                module = firstConstructor.Invoke(null);//new Database(),Logger()
            }
            else
            {
                //Lấy các tham số của constructor
                var constructorParameters = firstConstructor.GetParameters();//IDatabase,Ilogger
                var moduleDependecies = new List<object>();
                foreach (var parameter in constructorParameters)
                {
                    var dependency = GetModule(parameter.ParameterType);//Lấy class tương ứng từ DIContainer
                    moduleDependecies.Add(dependency);
                }

                //Inject các dependency vào constructor của Module
                module = firstConstructor.Invoke(moduleDependecies.ToArray());

            }
            //Lưu trữ interface vao class tương ứng
            ResgisteredModules.Add(interfaceType,module);

        }

        private static object GetModule(Type interfaceType)
        {
            if (ResgisteredModules.ContainsKey(interfaceType))
            {
                return ResgisteredModules[interfaceType];
            }
            throw new Exception("Class not register");
        }
    }
}
