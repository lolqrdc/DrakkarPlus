// Fonction pour récupérer la valeur 'eanne' après un court délai
function getUsername(callback) {
    setTimeout(() => {
		// Sélectionner l'élément <p> qui contient le texte "eanne"
		const element = document.querySelector('p.text-sm');
		
		// Vérifier si l'élément existe et retourner son texte via le callback
		if (element) {
			callback(element.textContent);
		} else {
			callback(null); // Retourner null si l'élément n'est pas trouvé
		}
    }, 1000); // Attendre 1000ms pour s'assurer que le DOM est chargé
}

// Utiliser la fonction avec un callback
getUsername((eanneValue) => {
    console.log(eanneValue);
});

function Stock() {
    // Créer un élément div pour la modal
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    
    // Créer un élément div pour le contenu de la modal
    const modalContent = document.createElement('div');
    modalContent.className = 'custom-modal-content';

    // Ajouter du contenu à la modal
    const modalHeader = document.createElement('div');
    modalHeader.className = 'custom-modal-header';
    const title = document.createElement('h2');
    title.className = 'custom-modal-title';

    // Créer un élément div pour contenir le SVG et le texte
    const titleContainer = document.createElement('div');
    titleContainer.style.display = 'flex';
    titleContainer.style.alignItems = 'center';

    // Créer un élément SVG
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const svgElement = document.createElementNS(svgNamespace, 'svg');
    svgElement.setAttribute('width', '16');
    svgElement.setAttribute('height', '16');
    svgElement.setAttribute('fill', 'black'); // Changer la couleur en noir
    svgElement.setAttribute('class', 'bi bi-shop');
    svgElement.setAttribute('viewBox', '0 0 16 16');

    // Créer un élément path pour le SVG
    const pathElement = document.createElementNS(svgNamespace, 'path');
    pathElement.setAttribute('d', 'M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z');

    // Ajouter le path au SVG
    svgElement.appendChild(pathElement);

    // Ajouter le SVG et le texte au conteneur
    titleContainer.appendChild(svgElement);
    const textNode = document.createTextNode(' Stock Épicerie');
    titleContainer.appendChild(textNode);

    // Ajouter le conteneur au titre
    title.appendChild(titleContainer);
    
    // Ajouter un bouton pour fermer la modal
    const closeButton = document.createElement('button');
    closeButton.className = 'custom-modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        document.body.removeChild(modal);
    };
    
    modalHeader.appendChild(title);
    modalHeader.appendChild(closeButton);
    
    // Ajouter le contenu à la modal
    const modalBody = document.createElement('div');
    modalBody.className = 'custom-modal-body';
    const bodyContent = document.createElement('p');
    bodyContent.textContent = "Ceci est une superbe modal avec un design moderne et épuré !";
    modalBody.appendChild(bodyContent);
    
    // Ajouter les éléments au contenu de la modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    
    // Ajouter la modal au corps du document
    document.body.appendChild(modal);

    // Ajouter les styles CSS dynamiquement
    const style = document.createElement('style');
    style.textContent = `
        .custom-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            animation: fadeIn 0.3s forwards;
            z-index: 1000;
        }
        
        .custom-modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            width: 400px;
            max-width: 80%;
            text-align: center;
            position: relative;
            animation: slideDown 0.3s ease-out;
        }
        
        .custom-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        
        .custom-modal-title {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
        }
        
        .custom-modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
        
        .custom-modal-body {
            font-size: 16px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

Stock();

// Appeler la fonction pour récupérer la valeur 'eanne'
getEanneValue();
