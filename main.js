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

// Warning for Flash contents on Blogger site
var flashWarning = function() {
    let this_page_url = window.location.href;
    let has_interact_elemment = document.getElementsByTagName("embed").length != 0 || document.getElementsByTagName("object").length != 0;
    if(this_page_url){
        if(has_interact_elemment){
            let warning_text = "<span>由於Adobe Flash播放器已於2021年起停止支援，若此內容無法呈現，請到官方網頁觀看。 [<a href=\"/" + window.location.pathname.replace(/^\/+/g,"") + "?fl=0\">回到不使用Flash的頁面</a>] [<a onclick='this.style.display=\"none\";loadswf2js();' style='color:#0000ff;cursor:pointer;'>測試swf2js導入(無聲音)</a>]</span>";
            let warning_node = document.createElement("div");
            warning_node.innerHTML = warning_text;
            warning_node.style.fontSize = "12px";
            warning_node.style.lineHeight = "12px";
            document.getElementsByClassName("pagehead")[0].appendChild(warning_node);
        }
    }
}

var linkOfficial = function() {
    document.getElementById("official-link").href = "https://www.homestuck.com/story/" + (parseInt(document.URL.substr(document.URL.indexOf('00')+2,4))-1900).toString();
}

var loadswf2js = function() {
    var objArr = document.getElementsByTagName("object");
    if (objArr.length == 1) {
        if (objArr[0].type == "application/x-shockwave-flash") {
            objArr[0].style.display = "none";
            
            var option = {};
            option.tagId = "swf2js-container";
            option.width = objArr[0].width;
            option.height = objArr[0].height;
            if (option.width == "") {
                option.width = 650;
                option.height = 450;
            }
            option.callback = (function() {
                document.getElementById("swf2js-preloader").remove();
            });
            console.log(option);
            
            var swfurl = objArr[0].data;
            
            var preloading_img = document.createElement("img");
            preloading_img.setAttribute("id", "swf2js-preloader");
            preloading_img.setAttribute("src", "https://zhhomestuck.github.io/assets/preloader.gif");
            document.getElementsByClassName("pagebody")[0].insertBefore(preloading_img, objArr[0]);
            
            var container = document.createElement("div");
            container.setAttribute("id", "swf2js-container");
            document.getElementsByClassName("pagebody")[0].insertBefore(container, objArr[0]);
            
            swf2js.load(swfurl, option);
        }
    }
    
}
