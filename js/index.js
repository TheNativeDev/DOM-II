//Initial Commit

document.body.style.margin = "0";
document.body.style.padding = "0";

let navLinks = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".logo-heading");

// Eventlistener 1
navLinks.forEach(link => {
  link.addEventListener("mouseover", e => {
    e.target.style.color = "blue";
    e.target.style.opacity = "0.2";
    e.target.style.marginTop = "-20px"; 
    e.target.style.transition = "margin-top .5s";
  });
});

navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      alert('There is no leaving this site.');
    });
  });

// Eventlistener 2
navLinks.forEach(link => {
  link.addEventListener("mouseout", e => {
    e.target.style.color = "black";
    e.target.style.opacity = "1";
    e.target.style.marginTop = "0px"; 
    e.target.style.transition = "margin-top .5s";
  });
});

// Eventlistener 3
document.addEventListener("dblclick", e => {
  e.preventDefault();
  e.target.parentElement.removeChild(e.target);
});

let images = document.querySelectorAll("img");
// EventListener 4
images.forEach(image => {
  let zoomScale = 1;
  image.addEventListener("wheel", e => {
    e.preventDefault();
    e.stopPropagation();

    zoomScale += e.deltaY * -0.001;

    zoomScale = Math.min(Math.max(0.5, zoomScale), 1.25);
    image.style.transform = `scale(${zoomScale})`;
  });
});

// Eventlistener 5
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  alert("No right clicking allowed here!");
});

// Eventlistener 6
document.addEventListener("keypress", e => {
  switch (e.keyCode) {
    case 98:
      document.body.style.fontWeight = "bold";
      break;

    case 105:
      document.body.style.fontStyle = "italic";
      break;

    case 117:
      document.body.style.textDecoration = "underline";
      break;

    case 111:
      document.body.style.textDecoration = "overline";
      break;

    default:
      console.log("Invalid key pressed!");
      break;
  }
});


// Eventlistener 7
document.addEventListener('copy', e=>{
    e.preventDefault();
    alert('You are now allowed to copy, now you have made my text all red!');
    e.target.style.color = "red";
});

//Eventlistener 8
window.addEventListener('beforeprint', e=>{
    e.preventDefault();
    alert('Something went wrong!?!?');
    document.write('<h1 style="text-align:center;">Security protocol: Confidential Data Protected</h1>');
});


// Eventlistener 9
window.addEventListener('resize', e=>{
    let tempElement = document.createElement('a');
    tempElement.style.display = "block";
    tempElement.style.fontSize = "2rem";
    tempElement.style.color = "orange";
    tempElement.style.margin = "20px";
    tempElement.textContent = "Woah woah woah! Don't Resize!";
    document.body.prepend(tempElement);
});


// Eventlistener 10
document.body.addEventListener('mouseleave', e=>{
    let tempElement = document.createElement('a');
    tempElement.style.display = "block";
    tempElement.style.fontSize = "3rem";
    tempElement.style.color = "white";
    tempElement.style.backgroundColor = "red";
    tempElement.style.width = "100%";
    tempElement.style.height = "50px";
    tempElement.style.display = "flex";
    tempElement.style.alignItems = "center";
    tempElement.style.justifyContent = "center";
    tempElement.style.margin = "0px auto";
    tempElement.style.textAlign = "center";
    tempElement.textContent = "How dare you leave me!!! -_- -_- -_-";
    tempElement.setAttribute('id', 'status-alert');
    document.body.prepend(tempElement);
});

document.body.addEventListener('mouseenter', e=>{
    let tempElement = document.querySelector('#status-alert');
    if(tempElement == null){

    }else{
        document.body.removeChild(tempElement);
    }
    
});