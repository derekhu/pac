;
/**
 * Proxy Autodiscovery Protocol
 *    http://en.wikipedia.org/wiki/Web_Proxy_Autodiscovery_Protocol
 */
function FindProxyForURL(url, host)
{
    // our local URLs from the domains below need a proxy:
    var proxyHosts = [
        // For youtube
        "*.youtube.com",
        "*.googlevideo.com",
        "*.googleusercontent.com"
    ];
    for(var i = 0; i < proxyHosts.length; ++i){
        if (shExpMatch(host, proxyHosts[i]) ){
              return "PROXY 192.168.10.100:8580; DIRECT";
        }
    }
    
    //if (shExpMatch(host, "*.youtube.com") || shExpMatch(host, "*.googlevideo.com")){
    //    return "PROXY 192.168.10.100:8580; DIRECT";
    //}
    
      
   //var resolved_ip = dnsResolve(host);
    //if (isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
    //        isInNet(resolved_ip, "172.16.0.0",  "255.240.0.0") ||
    //        isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") ||
    //        isInNet(resolved_ip, "127.0.0.0", "255.255.255.0")){
    //    return "DIRECT";
    //}
 
    return "DIRECT";
}
