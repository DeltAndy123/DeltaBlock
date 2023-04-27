function FindProxyForURL(url, host) {
  alert("FindProxyForURL: " + url + " " + host);
  return "DIRECT";
}