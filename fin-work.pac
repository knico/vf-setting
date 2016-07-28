function FindProxyForURL(url, host) {
	if (shExpMatch(host, "idc*"))
	{
		// 口袋生产环境
		return "SOCKS 10.5.20.60:8887";
	}
	if (shExpMatch(host, "*.koudai.com"))
	{
		// 口袋生产环境
		return "SOCKS 10.5.20.60:8887";
	}
	//if (shExpMatch(host, "*.kjtpay.com"))
	//{
		// 快捷通生产环境
	//	return "SOCKS 10.5.20.60:8889";
	//}
	if (shExpMatch(host, "*.google.com"))
	{
		return "PROXY 10.5.20.60:8087";
	}
	if (shExpMatch(host, "*.twitter.*"))
	{
		return "PROXY 10.5.20.60:8087";
	}
	if (isInNet(host, "10.3.8.0","255.255.255.0"))
	{
		// 口袋生产环境
		return "SOCKS 10.5.20.60:8887";
	}
	if (isInNet(host, "10.1.15.0","255.255.255.0"))
	{
		// 口袋开发环境
		return "SOCKS 10.5.20.60:8886";
	}
	if (isInNet(host, "192.168.180.0","255.255.255.0"))
	{
		// 快捷通开发环境
		return "SOCKS 10.5.20.60:8885";
	}
	if (isInNet(host, "10.255.0.0","255.255.0.0"))
	{
		// 快捷通预生产环境
		return "SOCKS 10.5.20.60:8889";
	}
	if (isInNet(host, "10.118.0.0","255.255.0.0"))
	{
		// 快捷通生产环境
		return "SOCKS 10.5.20.60:8889";
	}
	if (isInNet(host, "192.168.103.0","255.255.255.0"))
	{
		// 车易拍联调
		return "SOCKS 10.5.20.60:8880";
	}
	if (isInNet(host, "10.10.10.0","255.255.255.0"))
	{
		// 车易拍生产
		return "SOCKS 10.5.20.60:8891";
	}
	if (isInNet(host, "10.10.11.0","255.255.255.0"))
	{
		// 车易拍生产
		return "SOCKS 10.5.20.60:8891";
	}
	if (isInNet(host, "10.232.0.0","255.255.0.0"))
	{
		// 妈妈资本生产
		return "SOCKS 10.5.20.60:8879";
	}
	if (shExpMatch(host, "*.mmzb.com"))
	{
		// 妈妈资本生产
		return "SOCKS 10.5.20.60:8879";
	}
	if (isInNet(host, "121.40.53.0","255.255.255.0"))
	{
		// 车猫B环境
		return "SOCKS 10.5.20.60:8869";
	}
	if (isInNet(host, "192.168.10.0","255.255.255.0"))
	{
		// 道喜啦生产环境
		return "SOCKS 10.5.20.60:8859";
	}
	if (shExpMatch(host, "*.dxlpay.com"))
	{
		// 道喜啦生产环境
		return "SOCKS5 10.5.20.60:8879";
	}
	if (shExpMatch(host, "*.yongqiantouzi.com"))
	{
		// 华维用钱生产环境
		return "SOCKS5 10.5.20.60:8890";
	}
	return "DIRECT";
}
