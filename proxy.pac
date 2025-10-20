function FindProxyForURL(url, host) {
    var socksProxy = "SOCKS5 127.0.0.1:1080";

    if (
		shExpMatch(host, "*.blocked-site.com") ||
        shExpMatch(host, "specific-domain.com") ||
        dnsDomainIs(host, ".o2.sk") ||
	    dnsDomainIs(host, ".o2.cz") ||
	    dnsDomainIs(host, ".to2sk.sk") ||
	    dnsDomainIs(host, ".to2cz.cz")
	) {
        return socksProxy;
    }

    if (isInNet(host, "192.168.1.0", "255.255.255.0")) {
        return socksProxy;
    }

    return "DIRECT";
}
