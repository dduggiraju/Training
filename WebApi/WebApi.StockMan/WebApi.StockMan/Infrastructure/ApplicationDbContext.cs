using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.StockMan.Infrastructure
{
    public class ApplicationDbContext
    {
        public ApplicationDbContext()
          : base("DefaultConnection", throwIfV1Schema: false)
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}