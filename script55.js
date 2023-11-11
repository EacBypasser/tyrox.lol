document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
};

function scrollToElement(e, t = 0) {
    let i = document.querySelectorAll(e);
    i.length > t && i[t].scrollIntoView({
        behavior: "smooth"
    })
}

const link1 = document.getElementById("link1"),
    link2 = document.getElementById("link2");

function scrollToPricing() {
    document.getElementById("pricing").scrollIntoView({
        behavior: "smooth"
    })
}

function showAlert() {
    alert("This section is in development.")
}

link1.addEventListener("click", () => {
    scrollToElement(".header");
});

link2.addEventListener("click", () => {
    scrollToElement(".column");
});

document.getElementById("buyButton_optimizer").addEventListener("click", function () {
    var e = document.getElementById("licenseSelect_optimizer").value;
    "" === e ? alert("Invalid Selection.") :
        "lifetime_optimizer" === e ? window.open("https://tyrox.lol/discord", "_blank") :
            alert("Invalid application.");
});

const select_optimizer = document.getElementById("licenseSelect_optimizer"),
    price_optimizer = document.getElementById("price_optimizer");

select_optimizer.addEventListener("change", () => {
    if ("lifetime_optimizer" === select_optimizer.value) {
        price_optimizer.textContent = "7.99€";
    }
});

if (window.location.href.includes('tyrox.lol/discord')) {
    window.location.href = 'https://discord.gg/';
}