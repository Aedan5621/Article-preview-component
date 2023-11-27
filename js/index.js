const buttonBgColor = document.querySelector("button");
const pathFill = document.querySelector("path");
const shareOptions = document.getElementById("share-options")
const triangleVis = document.getElementById("triangle-set")

buttonBgColor.addEventListener("click", function () {
    buttonBgColor.classList.toggle("bg-color");
    pathFill.classList.toggle("btn");
    shareOptions.classList.toggle("visibility");
    triangleVis.classList.toggle("visibility");
});


const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, My first project with javascript');
const title = encodeURIComponent(document.querySelector('title').textContent);


const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

// const pinterest = document.querySelector('.pinterest');
// pinterest.href = 'https://pinterest.com/pin/create/button/?url=&media=';