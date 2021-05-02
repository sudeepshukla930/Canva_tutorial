let c=document.getElementById("my-canvas");
let ctx=c.getContext("2d");

let loadImage=(src,callback)=>{
    let myImg=document.createElement("img");
    //let myImg=new Image();

    myImg.onload=()=>callback(myImg);
    myImg.src=src;
};

//settting the path for the images.
let imagePath=(frameNumber)=>{
    return "images/idle/"+ frameNumber+".png";
};

//loading images one by one
let loadImages=(callback)=>{
    let images=[];
    let imagesToLoad=8;

    // callback for loading images
    [1,2,3,4,5,6,7,8].forEach((frameNumber) =>{
        let path=imagePath(frameNumber);
        loadImage(path,(image)=>{
            images[frameNumber-1]=image;
            imagesToLoad=imagesToLoad-1;

            if(imagesToLoad===0){
                callback(images);
            }
        });
    });
};

//this callback is for after the animation
let animate=(ctx,images,callback)=>{
    images.forEach((image,index)=>{
        setTimeout(()=>{
            ctx.clearRect(0,0,500,500); // clearing the canvas for the next image
            ctx.drawImage(image,0,0,500,500);
        },index*100);
    });
    setTimeout(callback,images.length * 100);
};

// calling load function
loadImages((images)=>{
    animate(ctx,images,()=>{
        console.log("done");
    })
});