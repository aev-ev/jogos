let button = document.getElementById("generatorButton");
let entry = document.getElementById("entry");
let turbo = document.getElementById("turbo");
let expiration = document.getElementById("expiration");

function getRandomNumber(t, e) {
    let n = Math.random() * (e - t + 1) + t;
    return Math.floor(n);
}

function getRandomNumber(t, e) {
    let n = Math.random() * (e - t + 1) + t;
    return Math.floor(n) + "X";
}

function countdown(t) {
    let e = t;
    const n = setInterval((() => {
        button.innerHTML = "AGUARDE (" + e + "s...)",
        e--,
        e < 0 && (clearInterval(n),
        button.disabled = !1,
        button.innerHTML = "GERAR NOVO SINAL")
    }
    ), 1e3)
}

function updateTime() {
    return dayjs().add(2, "m").format("HH:mm")
}

button.addEventListener("click", (t => {
    t.preventDefault(),
    button.disabled = !0,
    entry.innerText = getRandomNumber(5, 10),
    turbo.innerText = getRandomNumber(5, 10),
    expiration.innerText = updateTime(),
    countdown(60)
}
));