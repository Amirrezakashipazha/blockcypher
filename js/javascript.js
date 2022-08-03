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
});



function showmenu() {
    document.querySelector(".show-menu").style.display = "flex";
    document.querySelector(".d-close").style.display="flex";
}

function closemenu() {
    document.querySelector(".show-menu").style.display = "none";
    document.querySelector(".d-close").style.display="none";
}
