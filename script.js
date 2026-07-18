const popup = document.getElementById("popup");

document.getElementById("findBtn").onclick = () => {
    popup.classList.add("active");
};

function closePopup(){
    popup.classList.remove("active");
}

// Fungsi Salin Contract Address (CA)
function copyCA(){
    const ca = document.getElementById("ca").innerText;
    navigator.clipboard.writeText(ca);
    
    const btn = document.querySelector(".copy-btn");
    btn.innerText = "COPIED";
    btn.style.background = "#ffffff";
    btn.style.color = "#000000";

    setTimeout(() => {
        btn.innerText = "COPY";
        btn.style.background = "#8cff00";
        btn.style.color = "black";
    }, 1500);
}
