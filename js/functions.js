var myIndex = 0;
var imgIndex = 1;
let photosDiv = document.querySelector(".photoGallery");

function carousel () {
    // var i;
    var x = document.getElementsByClassName("mobile-img");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

function createSwitch(className, onClickValue) {
    let photoSwitchA = document.createElement("a");
    let photoSwitchOnClick = document.createAttribute("onclick");
    photoSwitchA.className = className;
    photoSwitchOnClick.value = onClickValue;
    photoSwitchA.setAttributeNode(photoSwitchOnClick);
    let myIcon = document.createElement("i");
    //photoSwitchA.attributes.setNameItem(photoSwitchOnClick);
    if (photoSwitchA.className == "prev") {
        myIcon.className = "fas fa-chevron-left"
    } else if (photoSwitchA.className == "next") {
        myIcon.className = "fas fa-chevron-right"
    }
    photoSwitchA.appendChild(myIcon);
    return photoSwitchA;
}

function createMobileSlideShow(){
    let photosDiv = document.querySelector(".photoGallery");
    let photos = 11;

    for (var i = 1; i <= photos; i++) {
        let imageImg = document.createElement("img");
        imageImg.className = "mobile-img w3-animate-fading";
        imageImg.src = "img/creations/creation" + i + ".webp";
        photosDiv.appendChild(imageImg);
    }
}

function createDesktopSlideShow() {
    var photosDiv = document.querySelector(".photoGallery");
    var photos = 11;
    var miniImgRow = document.createElement("div");
    miniImgRow.className = "miniImgRow";

    for (var i = 1; i <= photos; i++) {
        var imageDiv = document.createElement("div");
        imageDiv.className = "image";
        var imageImg = document.createElement("img");
        var miniImg = document.createElement("img");
        imageImg.src = "img/creations/creation" + i + ".webp";
        imageDiv.appendChild(imageImg);
        photosDiv.appendChild(imageDiv);
    }
    
    photosDiv.appendChild(miniImgRow);
    miniImgRow.appendChild(createSwitch("prev", "plusImages(-1)"));

    for (var i = 1; i <= photos; i++) {
        var miniImg = document.createElement("img");
        miniImg.className = "miniImg cursor";
        var miniImgCol = document.createElement("div");
        miniImgCol.className = "miniImgCol";
        var onclickAtt = document.createAttribute("onclick");
        onclickAtt.value = "currentImg(" + i + ")";
        miniImg.setAttributeNode(onclickAtt);
        miniImg.src = "img/creations/creation" + i + ".webp";
        
        miniImgCol.appendChild(miniImg);
        
        miniImgRow.appendChild(miniImgCol);
    }
    miniImgRow.appendChild(createSwitch("next", "plusImages(1)"));
}

function plusImages(n) {
    showImages(imgIndex += n);
}
  
function currentImg(n) {
    showImages(imgIndex = n);
}

function showImages(n) {
    var images = document.getElementsByClassName("image");
    var miniImg = document.getElementsByClassName("miniImg");
    
    if (n > images.length) {imgIndex = 1;}
    if (n < 1) {imgIndex = images.length;}
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (var i = 0; i < miniImg.length; i++) {
        miniImg[i].className = miniImg[i].className.replace(" active", "");
    }
    images[imgIndex-1].style.display = "block";
    miniImg[imgIndex-1].className += " active";
}

function createSlideShow(scrnWidth) {
    var imgIndex = 1;
    var images = document.getElementsByClassName("image");
    var miniImg = document.getElementsByClassName("miniImg");
    if (scrnWidth <= 600) {
        createMobileSlideShow();
        carousel();
    } else if (scrnWidth > 600) {
        createDesktopSlideShow();
        showImages(imgIndex);
        for(var i = 1; i < miniImg.length; i++) {
            miniImg[i].addEventListener("click", currentImg(imgIndex));
        }
    }
}

function renderFbstore(scrnWidth) {
    let fb = document.querySelector(".fb-page");
    if (scrnWidth <= 600) {
        fb.getAttributeNode("data-width").value = "375";
        fb.getAttributeNode("data-height").value = "375";
    } else if (scrnWidth > 600) {
        fb.getAttributeNode("data-width").value = "500";
        fb.getAttributeNode("data-height").value = "500";
    }
}