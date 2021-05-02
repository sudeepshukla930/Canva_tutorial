let c=document.getElementById("my-canvas");
let ctx=c.getContext("2d");

let loadImage=(src,callback)=>{
    let myImg=document.createElement("img");
    //let myImg=new Image();

    myImg.onload=()=>callback(myImg);
    myImg.src=src;
};

//settting the path for the images.
let imagePath=(frameNumber,animation)=>{
    return "images/"+ animation +"/"+frameNumber+".png";
};

let frames={
    idle:[1,2,3,4,5,6,7,8],
    kick: [1,2,3,4,5,6,7],
    punch:[1,2,3,4,5,6,7]
};

//loading images one by one
let loadImages=(callback)=>{
    let images={idle:[],kick:[],punch:[]};
    let imagesToLoad=0;

    // callback for loading images
    ["idle","kick","punch"].forEach((animation) =>{
        let animationFrames=frames[animation];
        imagesToLoad=imagesToLoad+animationFrames.length;
        
        animationFrames.forEach((frameNumber)=>{
            let path=imagePath(frameNumber,animation);
            
            loadImage(path,(image)=>{
                images[animation][frameNumber-1]=image;
                imagesToLoad=imagesToLoad-1;

                if(imagesToLoad===0){
                    callback(images);
                }
            });
        });
    });
};

//this callback is for after the animation
let animate=(ctx,images,animation,callback)=>{
    images[animation].forEach((image,index)=>{
        setTimeout(()=>{
            ctx.clearRect(0,0,500,500); // clearing the canvas for the next image
            ctx.drawImage(image,0,0,500,500);
        },index*100);
    });
    setTimeout(callback,images[animation].length * 100);
};

// calling load function
loadImages((images)=>{
    animate(ctx,images,'punch',()=>{
        console.log("done");
    })
});