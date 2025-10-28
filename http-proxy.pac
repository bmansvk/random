function FindProxyForURL(url, host)
{

    if  (isPlainHostName(host)
      || shExpMatch(host, "*.o2")
      || shExpMatch(host, "*.to2cz.cz")
      || shExpMatch(host, "*.to2sk.sk"))
    return "PROXY 127.0.0.1:8080";

    return "DIRECT";
}
