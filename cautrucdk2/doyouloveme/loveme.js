function yesClick()
        {
            alert("Yes. you are right ");
        }
function noHover ()
 {
    var x= Math.round(Math.random() * window.innerHeight);
    var y= Math.round(Math.random() * window.innerWidth);
    document.getElementById('btnNo').style.left = x + 'px';
    document.getElementById('btnNo').style.top = y + 'px';
}
        