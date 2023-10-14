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
