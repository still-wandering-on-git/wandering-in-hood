alert("JS Loaded");

const popup = document.getElementById("popup");
const btn = document.getElementById("findBtn");

btn.addEventListener("click", () => {
    popup.classList.add("active");
});

function closePopup(){
    popup.classList.remove("active");
}

function copyCA(){
    const ca=document.getElementById("ca").innerText;

    navigator.clipboard.writeText(ca);

    const btn=document.querySelector(".copy-btn");

    btn.innerHTML="COPIED";

    setTimeout(()=>{
        btn.innerHTML="COPY";
    },1500);
}
