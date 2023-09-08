myData = document.getElementById("my-data");

window.addEventListener('load', function() {
    myData.style.animationPlayState = 'running';
})

gallery = document.getElementById("gallery");
gallery.addEventListener('mouseover', function(){
    p1 = document.getElementsByClassName("peacock");
    p1.style.animationPlayState = 'running';
});

myData = document.getElementById("my-data");
myData.addEventListener("mouseover",function(){
    this.style.transform = "scale(1.1)";
    this.style.fontWeight = "bolder";
});

myData.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
    this.style.fontWeight = "normal";
})

text = document.getElementById("art-gallery");
text.addEventListener("mouseover", function(){
    this.style.transform = "scale(1.1)";
    this.style.fontWeight = "bolder";
})

text.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
    this.style.fontWeight = "normal";
})