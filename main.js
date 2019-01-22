// Make log
var makeSpoilerLog = function() {
    var replaceSpoiler = document.getElementById("log-outer-outer");
    if(replaceSpoiler) {
        replaceSpoiler.innerHTML = "<div class=\"log-outer\"><div><button type=\"button\" onmouseover=\"this.sv=this.style.backgroundColor;this.style.backgroundColor=\'#777777\';\" onmouseout=\"if(this.sv)this.style.backgroundColor=this.sv;else this.style.backgroundColor=\'\';\" onclick=\"this.parentNode.parentNode.childNodes[1].style.display=\'block\';this.parentNode.style.display=\'none\';return false;\" title=\"點擊以顯示\">Show Pesterlog</button></div><div class=\"spoiler\" style=\"display:none;\"><div><button type=\"button\" onclick=\"this.parentNode.parentNode.parentNode.childNodes[0].style.display=\'block\';this.parentNode.parentNode.style.display=\'none\';return false;\" title=\"點擊以隱藏\">Hide Pesterlog</button></div><div class=\"log-inner\">" + replaceSpoiler.innerHTML + "</div></div></div><!-- LOG END -->";
    }
}

// Warning for HTTPS connection
var checkHTTPSWarning = function() {
    var this_page_url = window.location.href;
    var has_interact_elemment = document.getElementsByTagName("embed").length != 0 || document.getElementsByTagName("object").length != 0;
    if(this_page_url){
        if(/https/.test(this_page_url) && has_interact_elemment){
            var warning_text = "<br/><span>你使用了https連線 這可能會導致部分動畫檔案無法顯示 [<a onclick='this.parentNode.style.display=\"none\";' style='color:#0000ff;cursor:pointer;'>隱藏此訊息</a>]</span>";
            var warning_node = document.createElement("div");
            warning_node.innerHTML = warning_text;
            warning_node.style.fontSize = "13px";
            document.getElementById("pagehead").appendChild(warning_node);
        }
    }
}