function FindProxyForURL(url, host)
{
    //var resolved_ip = dnsResolve(host);

    // our local URLs from the domains below example.com don't need a proxy:
    //if (shExpMatch(url,"*.youtube.com/*")){
    //    return "PROXY 192.168.10.100:8580; DIRECT";
    //}
      
 
    //if (isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
    //        isInNet(resolved_ip, "172.16.0.0",  "255.240.0.0") ||
    //        isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") ||
    //        isInNet(resolved_ip, "127.0.0.0", "255.255.255.0")){
    //    return "DIRECT";
    //}
 
    return "PROXY 192.168.10.100:8580; DIRECT";
}
