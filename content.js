// content.js

if (window.location.hostname === "profile.intra.42.fr") {
    const interval = setInterval(() => {
        const targetElement = document.querySelector(".h-full.flex.flex-row.items-center");
        
        if (targetElement) {
            clearInterval(interval);
            
            const button = document.createElement("button");
            button.innerText = "Aller sur DRAKKAR";
            button.style.padding = "12px 20px";
            button.style.marginLeft = "10px";
            button.style.backgroundColor = "#e63946";
            button.style.color = "white";
            button.style.fontSize = "16px";
            button.style.fontWeight = "bold";
            button.style.border = "none";
            button.style.borderRadius = "8px";
            button.style.cursor = "pointer";
            button.style.transition = "all 0.3s ease-in-out";
            button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            
            button.addEventListener("mouseover", () => {
                button.style.backgroundColor = "#d62839";
                button.style.transform = "scale(1.05)";
            });
            
            button.addEventListener("mouseleave", () => {
                button.style.backgroundColor = "#e63946";
                button.style.transform = "scale(1)";
            });
            
            button.addEventListener("click", () => {
                console.log("Bouton cliqué, redirection vers DRAKKAR");
                window.location.href = "https://edb42.fr";
            });
            
            targetElement.prepend(button);
        }
    }, 500);
}
