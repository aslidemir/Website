// JavaScript Document
function popUnder(node) {
    var newWindow = window.open("about:blank", node.target, "width=500,height=500");
    newWindow.blur();
    window.focus();
    newWindow.location.href = node.href;
    return false;
}