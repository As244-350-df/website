// setting up the image gallery functionality
//iniatializing variables 
let imageCont=document.getElementsByClassName('card');
//get the image-viewer element
 let imageViewer=document.getElementById('image-view');
 let imageViewerContainer=document.getElementById('image-viewer-container');
 //hide the image-viewer-container when clicked THE close button
document.querySelector('.close').addEventListener('click', ()=>{
    imageViewerContainer.style.display='none';
})
//close the image-viewer-container when clicked outside the image-viewer
imageViewerContainer.addEventListener('click', (e)=>{
    if(e.target==imageViewerContainer){
        imageViewerContainer.style.display='none';
    }
})
imageCont=Array.from(imageCont);
console.log(imageCont[0].firstElementChild);
imageCont.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        //adding the button functionality
        let checkbtn=e.target
        if(checkbtn.innerHTML=='View'){
            //get this elments first child
            let imgElement=element.firstElementChild;
            let imageSrc=imgElement.src
            imageViewer.src=imageSrc;
            //show the image-viewer-container
            imageViewerContainer.style.display='flex';

    }
})
})