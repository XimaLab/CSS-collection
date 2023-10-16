const navItemAnimation = () => {
    const spanContainer = document.querySelectorAll(".wavy-item div");

    spanContainer.forEach((item) => {
        const letters = item.children[0].textContent.split("");
        item.innerHTML = "";
        letters.forEach((el, index) => {
            item.innerHTML += `<span style="transition-delay : ${
                0.03 * index
            }s">${el}</span>`;
        });
    });
}
navItemAnimation()

const magneticBtn = () => {
    const btn = document.querySelector(".magnetic-btn");

    btn.addEventListener("mousemove", function (e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.children[0].style.transform =
            "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
    });

    btn.addEventListener("mouseout", function (e) {
        btn.children[0].style.transform = "translate(0px, 0px)";
    });
}
magneticBtn()

const gridImg = () => {
    const grid = document.querySelector('.grid-img-container');

    for(let i = 0; i < 25; i++) {
        grid.appendChild(document.createElement("div"))
    }
}
gridImg()

const card3D = () => {
    const container = document.querySelector(".card-3D-container");

    const  rotate = (e) => {
        const card = document.querySelector(".card-3D");
        const force = 5;
        const offsetY = -(e.offsetY - card.offsetHeight / 2) / force;
        const offsetX = (e.offsetX - card.offsetWidth / 2) / force;
        card.style.transform =
            "rotateX(" + offsetY + "deg) rotateY(" + offsetX + "deg)";
    }

    const clearRotate = (e) => {
        const card = document.querySelector(".card-3D");
        card.style.transform = "rotateX(0) rotateY(0)";
    }

    container.addEventListener("mousemove", rotate);
    container.addEventListener("mouseleave", clearRotate);
}

card3D()
