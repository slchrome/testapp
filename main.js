/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ 
var pictureSource;
var destinationType;


document.addEventListener("deviceready", onDeviceReady, false);


//PhoneGap is ready 
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType  = navigator.camera.DestinationType;
    
}


//Capture photo 
function takePhoto(){
    navigator.camera.getPicture(onPhotoDataSuccess,onError,{
        quality:50,
        destinationType: destinationType.Data_URL
    });
}


//Get photo from library 

function getPhoto(source){
    navigator.camera.getPicture(onPhotoURISuccess, onError,{
        quality:50,
        destinationType: destinationType.FILE_URI,
        SourceType:source
    });
}


//if we capture a photo
function onPhotoDataSuccess(imageData){
    //set Image handler 
    var dataImage = document.getElementById('dataImage');
    
    
    //Unhide
    dataImage.style.display = 'block';
    
    //show photo 
    dataImage.src = "data:image/jpeg:base64," +imageData;
}

//if we get an image 
function onPhotoURISuccess(imageURI){
    //set Image handler
    
    var uriImage = document.getElementById('uriImage');
    
    
    //unhide
    uriImage.style.display = 'block';
    
    //show photo
    uriImage.src = imageURI;
}

//handle errors
function onError(error){
    alert('Error: '+ error);
}