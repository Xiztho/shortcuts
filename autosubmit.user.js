// ==UserScript==
// @name       Auto-Submit Codes
// @namespace
// @version    0.2
// @description  no more pinky pain :<
// @match      http://barafranca.com/*
// @match      http://www.barafranca.com/*
// @match      http://barafranca.nl/*
// @match      http://www.barafranca.nl/*
// @match      https://barafranca.com/*
// @match      https://www.barafranca.com/*
// @match      https://barafranca.nl/*
// @match      https://www.barafranca.nl/*
// @copyright  2013-2016
// ==/UserScript==

$(document).ready(setupKeyHandler);
var buttonSelector = "#submitAction, input[value=' Try it '], input[value=' Probeer het '], input[value='Buy/Sell'], input[value='Scratch!']";
var codeSelector = "#ver, input[name='imgcode']";

function setupKeyHandler() {
    var ver = $(codeSelector);
    if (ver.length > 0 && !ver.is("[data-keyhandler-done]") && $(buttonSelector).length > 0) {
        ver.keyup(function(e) {
            if ($(e.target).val().length == 3) {
                $(buttonSelector).focus();
                ver.attr('readOnly', true).css('background-color', '#B7B5B5');
                $(buttonSelector).click();
                $(buttonSelector).attr('disabled', true);
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
