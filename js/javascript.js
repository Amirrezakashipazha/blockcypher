$(document).ready(function () {




    //navbar-hover
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
    //navbar-hover




    // برای حالت تایپ کردن متن


        
    

        var type_first = setInterval(function () {

            let i = 0,
                j = 0;
            var txt1 = '$ curl https://api.blockcypher.com/v1/btc/main';
            var txt2 =
                '{"name": "BTC.main,"' +
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
                '"last_fork_hash": "0000000000000000000b2e70d7..."}';
    
            (function typeWriter() {
                if (i < txt1.length) {
                    document.getElementById("p1-type").innerHTML += txt1.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20);
                }
                if (txt1.length == txt1.length) {
                    clearTimeout(typeWriter);
                }
            })();
    
    
            var cleartime = setInterval(function () {
    
                (function typeWriter() {
                    if (j < txt2.length) {
                        document.getElementById("p2-type").innerHTML += txt2.charAt(j);
                        j++;
                        setTimeout(typeWriter, 10);
                    }
                })();
    
                if (txt2.length == txt2.length) {
                    clearTimeout(cleartime);
                    clearTimeout(type_first);
                }
            }, 1000);
    
            if (txt1.length + txt2.length == txt1.length + txt2.length) {
                clearTimeout(type_first);
            }
    
        }, 1000);
    
    
    
    
        var type_secound = setInterval(function () {
            var i = 0,
                j = 0,
                k = 0,
                Q = 0;
            var speed = 20;
            var txt_1 = '$ export ETHURL=https://api.blockcypher.com/v1/eth/main';
            var txt_2 = '$ curl --data @query.json $ETHURL/contracts/$USDT/totalSupply';
            var txt_3 = '{"gas_limit": 20000,' + '"address": "dac17f958d2ee523a2206206994597c13d831ec7",' +
                '"results"' + ':' + '[' + '10334246184469201] }';
            var txt_4 = ' $ That was easy ';
            document.getElementById("p1-type").innerHTML = "";
            document.getElementById("p2-type").innerHTML = "";
    
            (function typeWriter() {
                if (i < txt_1.length) {
    
                    document.getElementById("p1-type").innerHTML += txt_1.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
                if (txt_1.length == txt_1.length) {
                    clearTimeout(typeWriter);
                }
            })();
    
            var type_child2_secound = setInterval(function () {
                (function typeWriter2() {
                    if (j < txt_2.length) {
                        document.getElementById("p3-type").innerHTML += txt_2.charAt(j);
                        j++;
                        setTimeout(typeWriter2, 20);
                    }
                    if (txt_2.length == txt_2.length) {
                        clearTimeout(typeWriter2);
                    }
                })();
            }, 1000);
    
            var type_child3_secound = setInterval(function () {
                (function typeWriter3() {
                    if (k < txt_3.length) {
                        document.getElementById("p2-type").innerHTML += txt_3.charAt(k);
                        k++;
                        setTimeout(typeWriter3, 20);
                    }
                    if (txt_3.length == txt_3.length) {
                        clearTimeout(typeWriter3);
                    }
                })();
            }, 2000);
    
            var type_child4_secound = setInterval(function () {
                (function typeWriter4() {
                    if (Q < txt_4.length) {
                        document.getElementById("p4-type").innerHTML += txt_4.charAt(Q);
                        Q++;
                        setTimeout(typeWriter4, 20);
                    }
                    if (txt_4.length == txt_4.length) {
                        clearTimeout(typeWriter4);
                    }
                })();
            }, 4500);
    
            if (txt_1.length + txt_2.length + txt_3.length + txt_4.length == txt_1.length + txt_2.length + txt_3.length + txt_4.length) {
                clearInterval(type_secound);
                setInterval(type_first);
            }
    
        }, 7500);
    

  



    // برای حالت تایپ کردن متن





    //حالت اولیه بالا آمدن المان ها در ابتدا



    var width_window = window.innerWidth;
    // var height_window = window.innerHeight;
    $('.sec1-blockchain').css({
        'transform': ' translateY(-50px)',
        'transition': '1s',
        'opacity': '1'
    });

    $('.sec2-blockchain').css({
        'transform': ' translateY(-10px)',
        'transition': '3s',
        'opacity': '1'
    });

    if (width_window > 768) {

        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('.icon_3_pedar').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $('.icon_brand').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 600) {
                $('.Build').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 1550) {
                $('.Powerful').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {



            if ($(window).scrollTop() > 1900) {
                $('.Build-now').css({
                    'transform': ' translateY(0px)',
                    'transition': '1s',
                    'opacity': '1'
                });


                //شمارش آمار
                (function counter1() {
                    let darsad = document.getElementById('darsad');
                    let i = 0.00;
                    let counter = setInterval(function () {
                        i = i + 0.11;
                        darsad.innerHTML = i.toFixed(2);
                        if (i >= 99.98) {
                            clearInterval(counter);
                        }
                    }, 1);
                })();

                (function counter2() {
                    let numK = document.getElementById('num-K');
                    let i = 0;
                    let counter = setInterval(function () {
                        i++;
                        numK.innerHTML = i;
                        if (i >= 65) {
                            clearInterval(counter);

                        }
                    }, 50);
                })();

                (function counter3() {
                    let numM = document.getElementById('num-M');
                    let i = 0;
                    let counter = setInterval(function () {
                        i++;
                        numM.innerHTML = i;
                        if (i >= 10) {
                            clearInterval(counter);

                        }
                    }, 333);
                })();
                //شمارش آمار


            }

        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 2500) {
                $('.ready').css({
                    'transform': ' translateY(0px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });
    } else if (width_window <= 768) {

        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $('.icon_3_pedar').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 950) {
                $('.icon_brand').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 1300) {
                $('.Build').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 2400) {
                $('.Powerful').css({
                    'transform': ' translateY(-50px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });

        $(window).scroll(function () {



            if ($(window).scrollTop() > 3700) {
                $('.Build-now').css({
                    'transform': ' translateY(0px)',
                    'transition': '1s',
                    'opacity': '1'
                });


                //شمارش آمار
                (function counter1() {
                    let darsad = document.getElementById('darsad');
                    let i = 0.00;
                    let counter = setInterval(function () {
                        i = i + 0.11;
                        darsad.innerHTML = i.toFixed(2);
                        if (i >= 99.98) {
                            clearInterval(counter);
                        }
                    }, 1);
                })();

                (function counter2() {
                    let numK = document.getElementById('num-K');
                    let i = 0;
                    let counter = setInterval(function () {
                        i++;
                        numK.innerHTML = i;
                        if (i >= 65) {
                            clearInterval(counter);

                        }
                    }, 50);
                })();

                (function counter3() {
                    let numM = document.getElementById('num-M');
                    let i = 0;
                    let counter = setInterval(function () {
                        i++;
                        numM.innerHTML = i;
                        if (i >= 10) {
                            clearInterval(counter);

                        }
                    }, 333);
                })();
                //شمارش آمار


            }

        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 4100) {
                $('.ready').css({
                    'transform': ' translateY(0px)',
                    'transition': '1s',
                    'opacity': '1'
                });
            }
        });
    }
    //حالت اولیه بالا آمدن المان ها در ابتدا



});



function showmenu() {
    document.querySelector(".show-menu").style.display = "flex";
    document.querySelector(".d-close").style.display = "flex";
}

function closemenu() {
    document.querySelector(".show-menu").style.display = "none";
    document.querySelector(".d-close").style.display = "none";
}
