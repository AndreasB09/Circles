const inputNum = document.querySelector("#input-num");
// inputNum.remove();
const circleContainer = document.querySelector("#circle-container")

const makeCircles = () => {
    //console.log("Psuh push!")
    if (inputNum.value < 1 || inputNum.value > 1000)    {
        window.alert("Number must be between 1 and 1000"); //Ikke bruk popups!!
    } else {
        //should not use innerHTML due to security
        //circleContainer.innerHTML = "";
        const circles = document.querySelectorAll(".circle");
        for (circle of circles) {
            circle.remove();
        }
        for (let i = 0; i < inputNum.value; i++) {
            //console.log(i)
            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.textContent = i + 1;
            circle.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            circleContainer.append(circle);
        }
    }
};
