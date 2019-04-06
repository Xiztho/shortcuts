// ==UserScript==
// @name       Auto-Submit Codes
// @namespace  
// @version    0.1
// @description  no more pinky pain :<
// @match      http://barafranca.com/*
// @match      http://www.barafranca.com/*
// @match      http://barafranca.nl/*
// @match      http://www.barafranca.nl/*
// @copyright  2013
// ==/UserScript==

$(document).ready(setupKeyHandler);


function setupKeyHandler() {
    var ver = $("#ver");
    if (ver.length > 0 && !ver.is("[data-keyhandler-done]") && $("#submitAction, input[value=' Try it '], input[value=' Probeer het ']").length > 0) {
        ver.keyup(function(e) {
            if ($(e.target).val().length == 3) {
                $("#submitAction, input[value=' Try it '], input[value=' Probeer het ']").focus();
                $("#ver").attr('readOnly', true).css('background-color', '#B7B5B5');
                $("#submitAction, input[value=' Try it '], input[value=' Probeer het ']").click();
                $("#submitAction, input[value=' Try it '], input[value=' Probeer het ']").attr('disabled', true);
            }
        });
        ver.keypress(function(e) {
            if (e.keyCode == 13) {
                return false;
            }
        });
        ver.attr('data-keyhandler-done', 'true');
    }
    window.setTimeout(setupKeyHandler, 50);
}