
// Make log
var makeSpoilerLog = function(parentNode) {
    if (parentNode === undefined) {
        parentNode = document;
    }
    let spoilerDOMs = [].slice.call(parentNode.getElementsByClassName("log-outer-outer"));
    let spoilerDOMThatUseIdAttr = null;
    if (parentNode === document) {
        spoilerDOMThatUseIdAttr = parentNode.getElementById("log-outer-outer"); // beccause I fucked up
    }
    if (spoilerDOMThatUseIdAttr != null) {
        spoilerDOMs.push(spoilerDOMThatUseIdAttr)
    }
    for (let i in spoilerDOMs) {
        let spoilerName = "Pesterlog";
        if ("name" in spoilerDOMs[i].attributes) {
            spoilerName = spoilerDOMs[i].getAttribute("name");
        }
        spoilerDOMs[i].innerHTML = "<div class=\"log-outer\"><div><button type=\"button\" onmouseover=\"this.sv=this.style.backgroundColor;this.style.backgroundColor=\'#777777\';\" onmouseout=\"if(this.sv)this.style.backgroundColor=this.sv;else this.style.backgroundColor=\'\';\" onclick=\"this.parentNode.parentNode.childNodes[1].style.display=\'block\';this.parentNode.style.display=\'none\';return false;\" title=\"點擊以顯示\">Show " + spoilerName + "</button></div><div class=\"spoiler\" style=\"display:none;\"><div><button type=\"button\" onclick=\"this.parentNode.parentNode.parentNode.childNodes[0].style.display=\'block\';this.parentNode.parentNode.style.display=\'none\';return false;\" title=\"點擊以隱藏\">Hide " + spoilerName + "</button></div><div class=\"log-inner\">" + spoilerDOMs[i].innerHTML + "</div></div></div><!-- LOG END -->";
    }
}

// Warning for manual Flash object on Blogger site
var flashWarning = function() {
    var flashElem;
    // if there is object tag that mean the flash file is linked to zhhomestuck.github.io
    // so this is a translated flash file
    if (document.getElementsByTagName("object").length == 1) {
        flashElem = document.getElementsByTagName("object")[0];
    }
    if(flashElem){
        var flashUrl = flashElem.data || flashElem.src;
        var warning_text = "由於Adobe Flash播放器已於2021年起停止支援，若此內容無法呈現，請到官方網頁觀看。<br />";
        if (flashUrl.includes("zhhomestuck")) {
            warning_text += "<span>[<a onclick='this.parentElement.style.display=\"none\";importRuffleRS();' style='color:#0000ff;cursor:pointer;'>可嘗試使用Ruffle播放(功能不完全)</a>]</span>";
        }
        let warning_node = document.createElement("div");
        warning_node.innerHTML = warning_text;
        warning_node.style.fontSize = "11px";
        warning_node.style.marginTop  = "12px";
        warning_node.style.lineHeight = "12px";
        warning_node.style.display = "block";
        document.getElementsByClassName("pagehead")[0].appendChild(warning_node);
    }
}

var linkOfficial = function() {
    document.getElementById("official-link").href = "https://www.homestuck.com/story/" + (parseInt(document.URL.substr(document.URL.indexOf('00')+2,4))-1900).toString();
}

var importRuffleRS = function() {
    var imported = document.createElement('script');
    imported.src = 'https://zhhomestuck.github.io/ruffle/ruffle.js';
    document.head.appendChild(imported);
}