function FindProxyForURL(url, host)
{
    if  (isPlainHostName(host)
      || shExpMatch(host, "*.o2")
      || shExpMatch(host, "*.to2cz.cz")
      || shExpMatch(host, "*.to2sk.sk"))
    return "SOCKS 127.0.0.1:1080";
    return "DIRECT";
}
