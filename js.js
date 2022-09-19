// git slider item
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

// get num of slider
var slidercount = sliderImages.length

//
var currentslider = 1;

//
var sliderNumElem = document.getElementById("cont")
// 
var nextEle= document.getElementById("next")

// 
var prevEle= document.getElementById("prev")

nextEle.onclick = nextslide 
prevEle.onclick = prevslide 

// creat ul & li
var pan_ul = document.createElement("ul")

pan_ul.setAttribute("class" ,"ul")

for(var i =1 ;i <= slidercount;i++){
    var pan_li = document.createElement("li")
    
    pan_li.setAttribute("data-in" ,i)
    

    pan_li.appendChild(document.createTextNode(i))
    pan_ul.appendChild(pan_li)
}
document.querySelector(".indicators").appendChild(pan_ul)
// 
var creatul =document.querySelector(".ul")
var bults = Array.from(document.querySelectorAll(".ul li"))
for(var i =0 ; i< bults.length ;i++){
    bults[i].onclick=function(){
        currentslider= parseInt(this.getAttribute("data-in"))
        theChecker()
        
    }
}
function nextslide(){
    if(nextEle.classList.contains("dis")){
        return false;
    }else{
        currentslider++
        theChecker()
    }
}
function prevslide(){
    if(prevEle.classList.contains("dis")){
        return false;
    }
    else{
        currentslider--
        theChecker()
    }
}
function theChecker() {
    sliderNumElem.textContent = `slide # `+ (currentslider) +`of `+ (slidercount)
    // 
    remove()
    // 
    sliderImages[currentslider-1].setAttribute("class","active")
    // 
    creatul.children[currentslider-1].setAttribute("class","active")
    // 
    if(currentslider==1){
        prevEle.classList.add("dis")
    }else{
        prevEle.classList.remove("dis")
    }
    if(currentslider==slidercount){
        nextEle.classList.add("dis")
    }else{
        nextEle.classList.remove("dis")
    }
}
theChecker()

// remove all active
function remove(){
    sliderImages.forEach(function(img) {
        img.classList.remove(`active`)
    });
    bults.forEach(function(li){
        li.classList.remove(`active`)
    });
     }
