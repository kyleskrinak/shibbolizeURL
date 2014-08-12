var shibUrl, qPathName;
if (window.location.protocol !== "https:") {
    alert("This bookmarklet is for HTTPS only");
} else {
    qPathName = (window.location.pathname === '/' ? "/" + window.location.search.substring(3) : window.location.pathname);
    shibUrl = window.location.origin + "/Shibboleth.sso/Login?target=" + window.location.origin + "/shib_login" + qPathName;
    window.prompt("Copy this Shibbolized URL to your clipboard", shibUrl);
}
