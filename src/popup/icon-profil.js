// content.js

if (window.location.hostname === "profile.intra.42.fr") {
    const interval = setInterval(() => {
        const targetElement = document.querySelector(".h-full.flex.flex-row.items-center");
        
        if (targetElement) {
            clearInterval(interval);
        
            // Création du container principal : 
            const container = document.createElement("div");
            container.style.position = "relative";
            container.style.display = "inline-block";
            
            // Création du bouton :
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
            
            // Création du dropdown :
            const dropdown = document.createElement("div");
            dropdown.style.display = "none";
            dropdown.style.position = "absolute";
            dropdown.style.backgroundColor = "white";
            dropdown.style.minWidth = "160px";
            dropdown.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
            dropdown.style.borderRadius = "4px";
            dropdown.style.zIndex = "1";
            dropdown.style.top = "100%";
            dropdown.style.left = "10px";
            dropdown.style.marginTop = "5px";

            // Items du menu : 
            const menuItems = [
                { text: "Stock", url: "https://edb42.fr" }
            ];

            // Création des éléments du menu : 
            menuItems.forEach(item => {
                const link = document.createElement("a");
                link.innerText = item.text;
                link.href = item.url;
                link.style.color = "#333";
                link.style.padding = "12px 16px";
                link.style.textDecoration = "none";
                link.style.display = "block";
                link.style.transition = "background-color 0.3s ease";

                link.addEventListener("mouseover", () => {
                    link.style.backgroundColor = "#f1f1f1";
                });
                link.addEventListener("mouseleave", () => {
                    link.style.backgroundColor = "transparent";
                });

                dropdown.appendChild(link);
            });

            // Fonctions pour gérer l'affichage : 
            const showDropdown = () => {
                dropdown.style.display = "block";
                button.style.backgroundColor = "#d62839";
                button.style.transform = "scale(1.05)";
            };

            const hideDropdown = () => {
                dropdown.style.display = "none";
                button.style.backgroundColor = "#e63946";
                button.style.transform = "scale(1)";
            };

            // Gestionnaires d'événements :
            container.addEventListener("mouseenter", showDropdown);
            
            container.addEventListener("mouseleave", (e) => {
                const rect = container.getBoundingClientRect();
                const isOutside = 
                    e.clientY < rect.top || 
                    e.clientY > rect.bottom || 
                    e.clientX < rect.left || 
                    e.clientX > rect.right;

                if (isOutside) {
                    hideDropdown();
                }
            });
            button.addEventListener("mouseenter", () => {
                dropdown.style.display = "block";
                button.style.backgroundColor = "#d62839";
                button.style.transform = "scale(1.05)";
            });

            dropdown.addEventListener("mouseenter", () => {
                dropdown.style.display = "block";
                button.style.backgroundColor = "#e63946";
                button.style.transform = "scale(1)";
            });

            button.addEventListener("mouseleave", (e) => {
                if (!dropdown.contains(e.relatedTarget)) {
                    dropdown.style.display = "none";
                    button.style.backgroundColor = "#e63946";
                    button.style.transform = "scale(1)";
                }
            });

            dropdown.addEventListener("mouseleave", (e) => {
                if (!button.contains(e.relatedTarget)) {
                    dropdown.style.display = "none";
                    button.style.backgroundColor = "#e63946";
                    button.style.transform = "scale(1)";
                }
            });
            container.appendChild(button);
            container.appendChild(dropdown);
            targetElement.prepend(container);
        }
    }, 500);
}
