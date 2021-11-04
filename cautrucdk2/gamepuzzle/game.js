
var index = 1;
function changeImage() {
    var imgs = ["img/cho1.jpeg", "img/meo1.jpeg", "img/vit1.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == 3) {
        index = 0;
    }
}

