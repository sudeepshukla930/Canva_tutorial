let c= document.getElementById("myCanvas");
let ctx=c.getContext("2d");

let drawLine=(startX,startY,endX,endY)=>{
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
};

ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

drawLine(250,150,250,350); //body
drawLine(250,200,150,150);//right arm
drawLine(250,200,350,150); //left arm
drawLine(250,350,200,450); //right leg
drawLine(250,350,300,450); //left leg