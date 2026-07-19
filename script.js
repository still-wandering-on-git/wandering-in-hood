// =========================
// ELEMENTS
// =========================

const popup = document.getElementById("popup");
const findBtn = document.getElementById("findBtn");
const copyBtn = document.querySelector(".copy-btn");
const contract = document.getElementById("ca");

// =========================
// FIND HOME
// =========================

findBtn.addEventListener("click", () => {

    findBtn.disabled = true;
    findBtn.innerText = "Searching...";

    setTimeout(() => {

        popup.classList.add("active");

        findBtn.disabled = false;
        findBtn.innerText = "Find Home";

    }, 1800);

});

// =========================
// CLOSE POPUP
// =========================

function closePopup() {

    popup.classList.remove("active");

}

// Tutup popup jika klik area gelap

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        closePopup();

    }

});

// Tutup popup dengan tombol ESC

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closePopup();

    }

});

// =========================
// COPY CONTRACT
// =========================

async function copyCA() {

    const text = contract.innerText.trim();

    try {

        await navigator.clipboard.writeText(text);

        copyBtn.innerText = "✓ COPIED";
        copyBtn.disabled = true;

        setTimeout(() => {

            copyBtn.innerText = "COPY";
            copyBtn.disabled = false;

        }, 1800);

    } catch {

        alert("Clipboard not available.");

    }

}

// =========================
// OPTIONAL
// ENTER = FIND HOME
// =========================

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !popup.classList.contains("active")) {

        findBtn.click();

    }

});