// ==UserScript==
// @name         Keyboard Shortcuts
// @namespace    keyboardshortcuts.barafranca.com
// @version      0.1
// @description  Re-Enables keyboard shortcuts broken with latest Chrome updates
// @include                  http://*.barafranca.com/*
// @include                  https://*.barafranca.com/*
// @include                  http://play.barafranca.com/*
// @include                  https://play.barafranca.com/*
// @include                  http://barafranca.com/*
// @include                  https://barafranca.com/*
// @include                  http://*.barafranca.nl/*
// @include                  https://*.barafranca.nl/*
// @include                  http://barafranca.nl/*
// @include                  https://barafranca.nl/*
// @include                  http://*.barafranca.us/*
// @include                  https://*.barafranca.us/*
// @include                  http://barafranca.us/*
// @include                  https://barafranca.us/*
// @include                  http://*.barafranca.gen.tr/*
// @include                  https://*.barafranca.gen.tr/*
// @include                  http://barafranca.gen.tr/*
// @include                  https://barafranca.gen.tr/*
// @include                  http://omerta.com.tr/*
// @include                  https://omerta.com.tr/*
// @include                  http://*.omerta.com.tr/*
// @include                  https://*.omerta.com.tr/*
// @include                  http://*.omerta.dm/*
// @include                  https://*.omerta.dm/*
// @include                  http://omerta.dm/*
// @include                  https://omerta.dm/*
// @include                  http://*.omerta.pt/*
// @include                  https://*.omerta.pt/*
// @include                  http://omerta.pt/*
// @include                  https://omerta.pt/*
// @include                  https://*.omerta.land*
// @exclude                  http://*/game-register.php*
// @exclude                  https://*/game-register.php*
// @copyright    2015, MurderInc
// @grant        unsafeWindow
// ==/UserScript==

var shortcutKeys = {
    "74": "J",
    "65": "A",
    "67": "C",
    "78": "N",
    "83": "S",
    "84": "T",
    "71": "G",
    "77": "M",
    "66": "B",
    "70": "R"
};

unsafeWindow.onkeydown = function(e) {
    if (e.keyCode == 192) {
        $("input[name='buymeout']").click();
    }

    if ($(e.target).is('input, textarea') || e.ctrlKey || e.metaKey) {
        return;
    }

    if (shortcutKeys[e.keyCode]) {
        $("a[accesskey='" + shortcutKeys[e.keyCode] + "']").click();
        e.preventDefault();
    }

    if (e.keyCode == 81) {
        $("input[name='buymeout']").click();
    }

    if(e.keyCode == 88) {
        unsafeWindow.omerta.GUI.container.loadPage('/scratch.php');
    }

    if(e.keyCode == 79) {
        unsafeWindow.omerta.GUI.container.loadPage('/orgcrime2.php');
    }

    if(e.keyCode == 40) {
        unsafeWindow.omerta.GUI.container.loadPage('/scratch.php');
        var x = 0;
        var snookerCunt = setInterval(function() {
            if ((document.documentElement.textContent || document.documentElement.innerText).indexOf('Security Check') > -1){
                console.log("Captcha!");
                clearInterval(snookerCunt);
            }
            else if ($('#game_container:contains("Sorry, but 10 per minute is enough.")').length) {
                console.log("Sorry, but 10 per minute is enough.");
                clearInterval(snookerCunt);
                return;
            }
            else if(x == 13) {
                clearInterval(snookerCunt);
                return;
            }
            else{
                $('input[name="scratch"]').focus().click();
                x++;
                console.log(x);
            }
        },500);
    }

if (e.keyCode == 38) {
        unsafeWindow.omerta.GUI.container.loadPage('/scratch.php');
        var y = 0;
        var claimPrizes = setInterval(function() {
            if ($('input[name="codescratch"]').length) {
                $('input[type="submit"]:eq(1)').focus().click();
            }else if ( $('input[name="goback"]').length) {
              $('input[name="goback"]').focus().click();
            }
            else{
                clearInterval(claimPrizes);
            }
        },300);
}

    if (e.keyCode == 82) {
        unsafeWindow.omerta.GUI.container.loadPage('/races.php?driver=');
        var aight = setTimeout(function() {
        $('input[type="submit"]').focus();
        $('input[value="Race!!!"]').focus().click();
            },200);
}

    // if (e.keyCode == 55) {
        // unsafeWindow.omerta.GUI.container.loadPage('BeO/webroot/index.php?module=Heist&driver=Necmi');
        // var heist1 = setTimeout(function() {
            // $("input[value='Start']").click();
        // },500);
        // var heiststart = setTimeout(function() {
            // $("input[value='Start Heist']").click();
        // },500);
    // }

    if (e.keyCode == 87) {
        unsafeWindow.omerta.GUI.container.loadPage('/allusers.php?start=0&order=lastrank&sort=DESC&dead=HIDE');
    }

    if (e.keyCode == 90) {
        unsafeWindow.omerta.GUI.container.loadPage('/BeO/webroot/index.php?module=Spots&driver=Geezy');
        // var inviteraid = setTimeout(function() {
         // $("button[data-raidid='221']").focus().click();
        // },500);
//         var acceptRaid = setTimeout(function() {
//             $('a:contains("Accept Invite")').click();
//         },400);
    }

    if (e.keyCode == 85) {
        unsafeWindow.omerta.GUI.container.loadPage('/wedding/wedding.php');
    }

    if (e.keyCode == 53) {
         unsafeWindow.omerta.GUI.container.loadPage('/obay.php?action=tosell&type=11');
    }

    if (e.keyCode == 72) {
        unsafeWindow.omerta.GUI.container.loadPage('BeO/webroot/index.php?module=Heist');
    }

    if (e.keyCode == 86) {
        unsafeWindow.omerta.GUI.container.loadPage('/BeO/webroot/index.php?module=Bodyguards');
    }

    if (e.keyCode == 69) {
        unsafeWindow.omerta.GUI.container.loadPage('/obay.php');
    }

    if (e.keyCode == 75) {
        unsafeWindow.omerta.GUI.container.loadPage('/BeO/webroot/index.php?module=Detectives');
    }

    if (e.keyCode == 70) {
        unsafeWindow.omerta.GUI.container.loadPage('/BeO/webroot/index.php?module=Poker');
    }

    if (e.keyCode == 89) {
        unsafeWindow.omerta.GUI.container.loadPage('/?module=City');
    }

    if (e.keyCode == 103) {
        unsafeWindow.omerta.GUI.container.loadPage('/BeO/webroot/index.php?module=HallOfFame');
    }

};
