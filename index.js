var images = [
    ["1_l.jpg","1_r.jpg"],
    ["chair1_l.JPG","chair1_r.JPG"],
    ["DrD_r.JPG","DrD_l.JPG"]
];

var l_eye = document.getElementById("lefteye1");
var r_eye = document.getElementById("righteye1");
var index = 0;
var x = document.createElement("img");
x.src = "res/"+images[(index+1)%images.length][0];

var interval = window.setInterval(changeImage,10000);

function changeImage(){
    console.log("changing");
    index++;
    index = index%images.length;
    
    l_eye.setAttribute("src","res/"+images[index][0]);
    l_eye.setAttribute("width",x.naturalWidth/900);
    l_eye.setAttribute("height",x.naturalHeight/900);
    r_eye.setAttribute("src","res/"+images[index][1]);
    r_eye.setAttribute("width",x.naturalWidth/900);
    r_eye.setAttribute("height",x.naturalHeight/900);
    console.log(x.naturalWidth);
    console.log(x.naturalHeight);
    console.log("res/"+images[index][0])
    console.log("res/"+images[index][1]);
    console.log("changed");
    x.src = "res/"+images[(index+1)%images.length][0];
}
