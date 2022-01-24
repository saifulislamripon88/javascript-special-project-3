// movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// moving animation event

container.addEventListener("mousemove", (e) => {
    console.log(e.pageX , e.pageY)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10; 

    card.style.transform = `rotateY(${yAxis}deg) rorateX(${xAxis}deg)`;

})

// animate in
container.addEventListener("mouseover", (e) => {
    card.style.transform = "none";

})





// animate out


container.addEventListener("mouseover", (e) => {
    card.style.transform = "all o.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;


})