$(document).ready(function () {

    $("#prodoct-hover,#li-prodoct").hover(function () {

        $("#li-prodoct").css({
            "transform": "translateY(-9px)",
            "transition": "all 0.s",
            // "display":"inline",
        });
        $("#li-prodoct").fadeIn(100);
    }, function () {
        $("#li-prodoct").css({
            "transform": "translateY(9px)",
            "transition": "all 0.3s",
            // "display":"none"
        });
        $("#li-prodoct").fadeOut(100);
    });



    $("#docs-hover,#li-docs").hover(function () {

        $("#li-docs").css({
            "transform": "translateY(-9px)",
            "transition": "all 0.s",
            // "display":"inline",
        });
        $("#li-docs").fadeIn(100);
    }, function () {
        $("#li-docs").css({
            "transform": "translateY(9px)",
            "transition": "all 0.3s",
            // "display":"none"
        });
        $("#li-docs").fadeOut(100);
    });




    var i = 0;
    var txt1 = '$ curl https://api.blockcypher.com/v1/btc/main';
    var speed = 20;

    (function typeWriter() {
        if (i < txt1.length) {
            document.getElementById("p1-type").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    })();


    var clertime = setInterval(function () {
        var i = 0;
        var txt2 =
            '{' +
            '"name": "BTC.main,"' +
            '"height": 722393,' +
            '"hash":"00000000000000000002fbcf1d...",' +
            '"time":"2022-02-08T20:34:52.114385849Z",' +
            '"previous_hash": "0000000000000000000497eb3b...",' +
            '"peer_count": 1306,' +
            '"unconfirmed_count": 9091,' +
            '"high_fee_per_kb": 15858,' +
            '"medium_fee_per_kb": 6239,' +
            '"low_fee_per_kb": 3334,' +
            '"last_fork_height": 714367,' +
            '"last_fork_hash": "0000000000000000000b2e70d7..."' +
            '}';
        var speed = 10;

        (function typeWriter() {
            if (i < txt2.length) {
                document.getElementById("p2-type").innerHTML += txt2.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        })();

        if (txt2.length == txt2.length) {
            clearTimeout(clertime);
        }
    }, 1000);


    (function counter() {
        let darsad = document.getElementById('darsad');
        let i = 0.00;
        let counter= setInterval(function () {
            i = i + 0.11;
            darsad.innerHTML = i.toFixed(2);
            if (i >= 99.98) {
                clearInterval(counter);
            }
        }, 1);
    })();

    (function counter() {
        let numK = document.getElementById('num-K');
        let i = 0;
        let counter= setInterval(function () {
            i++;
            numK.innerHTML = i;
            if (i >= 65) {
                clearInterval(counter);
                
            }
        }, 50);
    })();

    (function counter() {
        let numM = document.getElementById('num-M');
        let i = 0;
        let counter= setInterval(function () {
            i++;
            numM.innerHTML = i;
            if (i >=10) {
                clearInterval(counter);
                
            }
        }, 333);
    })();
});



function showmenu() {
    document.querySelector(".show-menu").style.display = "flex";
    document.querySelector(".d-close").style.display = "flex";
}

function closemenu() {
    document.querySelector(".show-menu").style.display = "none";
    document.querySelector(".d-close").style.display = "none";
}