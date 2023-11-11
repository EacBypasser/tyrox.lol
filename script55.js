function scrollToElement(e, t=0) {
    let i = document.querySelectorAll(e);
    i.length > t && i[t].scrollIntoView({
        behavior: "smooth"
    })
}
const link1 = document.getElementById("link1")
  , link2 = document.getElementById("link2");
function scrollToPricing() {
    document.getElementById("pricing").scrollIntoView({
        behavior: "smooth"
    })
}
function showAlert() {
    alert("This section is in development.")
}
link1.addEventListener("click", ()=>{
    scrollToElement(".header")
}
),
link2.addEventListener("click", ()=>{
    scrollToElement(".column")
}
),
document.getElementById("buyButton_perm").addEventListener("click", function() {
    var e = document.getElementById("licenseSelect_perm").value;
    if ("" === e)
        alert("Select an application.");
    else
        switch (e) {
        case "onetime_perm":
            window.open("https://buy.stripe.com/4gwaIG1Q74jR8k89AG", "_blank");
            break;
        case "lifetime_perm":
            window.open("https://buy.stripe.com/aEU8AyeCT5nV2ZO28f", "_blank");
            break;
        default:
            alert("Invalid application.")
        }
}),
document.getElementById("buyButton_temp").addEventListener("click", function() {
    var e = document.getElementById("licenseSelect_temp").value;
    if ("" === e)
        alert("Select an application.");
    else
        switch (e) {
        case "day_temp":
            window.open("https://buy.stripe.com/8wM042eCT17FcAo3ck", "_blank");
            break;
        case "week_temp":
            window.open("https://buy.stripe.com/7sI3geamDbMj7g414d", "_blank");
            break;
        case "month_temp":
            window.open("https://buy.stripe.com/4gwdUSfGX3fN2ZO4gq", "_blank");
            break;
        case "lifetime_temp":
            window.open("https://buy.stripe.com/14k6sq1Q75nV43SfZ9", "_blank");
            break;
        default:
            alert("Invalid application.")
        }
}),
document.getElementById("buyButton_private").addEventListener("click", function() {
    var e = document.getElementById("licenseSelect_private").value;
    if ("" === e)
        alert("Select an application.");
    else
        switch (e) {
        case "day_private":
        case "3day_private":
            window.open("https://buy.stripe.com/aEUdUSeCT6rZ57WcMZ", "_blank");
            break;
        case "week_private":
            window.open("https://buy.stripe.com/aEUeYWbqH03B0RG7sG", "_blank");
            break;
        case "month_private":
            window.open("https://buy.stripe.com/aEUdUS1Q79Eb1VK00f", "_blank");
            break;
        case "lifetime_private":
            window.open("https://buy.stripe.com/bIY5om52j3fN6c0aEY", "_blank");
            break;
        default:
            alert("Invalid application.")
        }
}),
document.getElementById("buyButton_optimizer").addEventListener("click", function() {
    var e = document.getElementById("licenseSelect_optimizer").value;
    "" === e ? alert("Select an application.") : "lifetime_optimizer" === e ? window.open("https://buy.stripe.com/eVaaIG7ar8A71VKcMY", "_blank") : alert("Invalid application.")
});
const select_perm = document.getElementById("licenseSelect_perm")
  , price_perm = document.getElementById("price_perm");
select_perm.addEventListener("change", ()=>{
    "lifetime_perm" === select_perm.value ? price_perm.textContent = "39.99€" : "onetime_perm" === select_perm.value && (price_perm.textContent = "19.99€")
}
);
const select_temp = document.getElementById("licenseSelect_temp")
  , price_temp = document.getElementById("price_temp");
select_temp.addEventListener("change", ()=>{
    "day_temp" === select_temp.value ? price_temp.textContent = "7.99€" : "week_temp" === select_temp.value ? price_temp.textContent = "14.99€" : "month_temp" === select_temp.value ? price_temp.textContent = "24.99€" : "lifetime_temp" === select_temp.value && (price_temp.textContent = "39.99€")
}
);
const select_private = document.getElementById("licenseSelect_private")
  , price_private = document.getElementById("price_private");
select_private.addEventListener("change", ()=>{
    "day_private" === select_private.value ? price_private.textContent = "9.99€" : "week_private" === select_private.value ? price_private.textContent = "24.99€" : "month_private" === select_private.value ? price_private.textContent = "49.99€" : "lifetime_private" === select_private.value && (price_private.textContent = "234.99€")
}
);
const select_optimizer = document.getElementById("licenseSelect_optimizer")
  , price_optimizer = document.getElementById("price_optimizer");
select_optimizer.addEventListener("change", ()=>{
    "lifetime_optimizer" === select_optimizer.value && (price_optimizer.textContent = "7.99€")
}
);
