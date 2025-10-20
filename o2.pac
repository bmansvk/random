function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.sk.o2") || host == "sk.o2" ||
        shExpMatch(host, "*.cz.o2") || host == "cz.o2" ||
        shExpMatch(host, "*.to2sk.sk") || host == "to2sk.sk" ||
        shExpMatch(host, "*.to2cz.cz") || host == "to2cz.cz") {
        return "SOCKS 127.0.0.1:1080";
    }
    return "DIRECT";
}
