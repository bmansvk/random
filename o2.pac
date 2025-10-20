function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.o2.sk") || host == "o2.sk" ||
        shExpMatch(host, "*.o2.cz") || host == "o2.cz" ||
        shExpMatch(host, "*.to2sk.sk") || host == "to2sk.sk" ||
        shExpMatch(host, "*.to2cz.cz") || host == "to2cz.cz") {
        return "SOCKS 127.0.0.1:1080";
    }
    return "DIRECT";
}
