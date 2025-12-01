const img = document.getElementById("image").src;


if(img==="http://127.0.0.1:5500/JavaScript/photoEditingTool/index.html"){
    document.getElementById("mage").style.display="none";
}
else{
    document.getElementById(uploadLabel).style.display="none";
}

function uploadImage(){
    const file = document.getElementById("upload").files[0];

    const fileURL = URL.createObjectURL(file);
    
    document.getElementById("Image").src=fileURL;
    document.getElementById("Image").style.display="block";
    document.getElementById("uploadLabel").style.display="none";
}
function changeBrightness(){
    const value =  document.getElementById("Brightness").value;
    document.getElementById("Image").style.filter=`brightness(${value*2/100})`
}


function changeContrast(){
    const value =  document.getElementById("Contrast").value;
    document.getElementById("Image").style.filter=`contrast(${value*2/100})`
}

function changeGrayScale(){
    const value =  document.getElementById("GrayScale").value;
    document.getElementById("Image").style.filter=`grayScale(${value}%)`
}

function changeSepia(){
    const value =  document.getElementById("sepia").value;
    document.getElementById("Image").style.filter=`sepia(${value*2/100})`
}

function changeSaturation(){
    const value =  document.getElementById("Saturation").value;
    document.getElementById("Image").style.filter=`saturate(${value*2/100})`
}


function changeInvert(){
    const value =  document.getElementById("invert").value;
    document.getElementById("Image").style.filter=`invert(${value*2/100})`
}