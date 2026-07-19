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

    btn.innerHTML="✓ COPIED";

    btn.disabled=true;

    setTimeout(()=>{

        btn.innerHTML="COPY";
        btn.disabled=false;

    },1800);

}
