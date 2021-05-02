let c=document.getElementById("my-canvas");
let ctx=c.getContext("2d");

let loadImage=(src,callback)=>{
    let myImg=document.createElement("img");
    //let myImg=new Image();

    myImg.onload=()=>callback(myImg);
    myImg.src=src;
};


loadImage("images/idle.png",(myImg)=>{
    ctx.drawImage(myImg,0,0,500,500);
});