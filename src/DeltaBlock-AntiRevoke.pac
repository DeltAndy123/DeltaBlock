// DeltaBlock
// Personal adblock filterlist using PAC format
// Last updated: 2023-04-26 EDT
// Addons:
// - Anti Revoke

const BLOCK = "PROXY 0.0.0.0";
const ALLOW = "DIRECT";
function FindProxyForURL(url, host) {
  const u = url.toLowerCase();
  const h = host.toLowerCase();
  var hosts = [
    "adtago.s3.amazonaws.com",
    "analyticsengine.s3.amazonaws.com",
    "analytics.s3.amazonaws.com",
    "freshmarketer.com",
    "stats.wp.com",
    "pixel.facebook.com",
    "an.facebook.com",
    "log.pinterest.com",
    "trk.pinterest.com",
    "widgets.pinterest.com",
    "business-api.tiktok.com",
    "byteoversea.com",
    "geo.yahoo.com",
    "udc.yahoo.com",
    "udcm.yahoo.com",
    "log.fc.yahoo.com",
    "gemini.yahoo.com",
    "adtech.yahooinc.com",
    "extmaps-api.yandex.net",
    "offerwall.yandex.net",
    "adfox.yandex.ru",
    "api.ad.xiaomi.com",
    "click.oneplus.cn",
    "open.oneplus.net",
    "metrics.icloud.com",
    "metrics.apple.com",
    "metrics.mzstatic.com",
    "samsung-com.112.2o7.net",
    "events.reddit.com",
    "events.redditmedia.com",
    "adfstat.yandex.ru",
    "grs.hicloud.com",
    "an.yandex.ru",
    "d2wy8f7a9ursnm.cloudfront.net",
    "highcpmrevenuenetwork.com",
    "godpvqnszo.com",
    "effectivecreativeformat.com",
    "wyhifdpatl.com",
    "rxeosevsso.com",
    "stagepopkek.com",
    "qgxbluhsgad.com",
    "syntaxaboriginalsaxophone.com",
    "addresseepaper.com",
    "unseenreport.com",
    "firebaselogging.googleapis.com",
    "barscreative1.com",

    // Addon: Anti Revoke
    "ocsp.apple.com", 
    "ocsp2.apple.com",
  ];
  var regexps = [
    "*doubleclick*",
    "*googlesyndication*",
    "*ads*",
    "*adcolony*",
    "*advertis*",
    "*media.net*",
    "*analytics*",
    "*app-measurement*",
    "*hotjar*",
    "*mouseflow*",
    "*luckyorange*",
    "*bugsnag*",
    "*sentry*",
    "*appmetric*",
    "*metrika*",
    "*logser*",
    "*adx*",
    "*mistat*",
    "*ad*xiaomi*",
    "*tracking*miui*",
    "*metrics*.data*",
    "*log*.hicloud*",
    "*metrics*.samsung*",
    "*mopinion*",
  ];

  for (var i = 0; i < hosts.length; i++) {
    if (dnsDomainIs(h, hosts[i])) {
      return BLOCK;
    }
  }
  for (var i = 0; i < regexps.length; i++) {
    if (shExpMatch(u, regexps[i])) {
      return BLOCK;
    }
  }
  return ALLOW;
}