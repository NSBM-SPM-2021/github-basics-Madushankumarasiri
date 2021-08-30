using Azure.Extensions.AspNetCore.Configuration.Secrets;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseTrackerAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context, config) =>
                {
                    var builtConfiguration = config.Build();

                    string kvURL = builtConfiguration["KeyVaultConfig:KVUrl"];
                    string tenantId = builtConfiguration["KeyVaultConfig:TenantId"];
                    string clientId = builtConfiguration["KeyVaultConfig:ClientId"];
                    string clientSecret = builtConfiguration["KeyVaultConfig:ClientSecretId"];

                    var credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
                    var client = new SecretClient(new Uri(kvURL), credential);
                    config.AddAzureKeyVault(client, new AzureKeyVaultConfigurationOptions());
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
