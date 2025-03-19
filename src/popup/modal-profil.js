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

function createCustomModal() {
    // Vérifier si une modale existe déjà
    if (document.getElementById("customModal")) return;

    // Création des éléments HTML
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "customModal";
    modalOverlay.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h2>Épicierie Stock</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <a class="btn btn-outline-light w-100" href="call_epicerie">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
						<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
					</svg>
					 Appeler un vendeur
                </a>
                <br>
                <br>
                
            </div>
            <div class="modal-footer">
                <button class="action-btn">Fermer</button>
            </div>
        </div>
    `;

    // Ajouter la modale au body
    document.body.appendChild(modalOverlay);

    // Sélection des éléments pour interactivité
    const closeButton = modalOverlay.querySelector(".close-btn");
    const actionButton = modalOverlay.querySelector(".action-btn");

    // Fonction pour fermer la modale
    function closeModal() {
        modalOverlay.classList.add("closing");
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
    }

    // Événements de fermeture
    closeButton.addEventListener("click", closeModal);
    actionButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Ajout des styles CSS
    const styles = document.createElement("style");
    styles.innerHTML = `
        /* Style de fond semi-transparent */
        #customModal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            animation: fadeIn 0.3s forwards;
        }

        /* Conteneur de la modale */
        .modal-container {
            background: #333;
            width: 75%;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease-out;
            display: flex;
            flex-direction: column;
            max-height: 90vh;
            overflow-y: auto;
            color: #f8f9fa;
        }

        /* En-tête de la modale */
        .modal-header {
            background: #444;
            color: #f8f9fa;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
        }

        .modal-header .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            color: #f8f9fa;
            cursor: pointer;
        }

        /* Corps de la modale */
        .modal-body {
            padding: 20px;
            font-size: 16px;
            background: #333;
            color: #f8f9fa;
        }

        /* Pied de la modale */
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            border-top: 1px solid #ddd;
            background: #444;
        }

        .modal-footer .action-btn {
            background: #555;
            color: #f8f9fa;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .modal-footer .action-btn:hover {
            background: #666;
        }

        /* Animation d'apparition */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        /* Animation de fermeture */
        .closing {
            animation: fadeOut 0.3s forwards;
        }

        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        /* Style du bouton */
        .btn-outline-light {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px; /* Espacement entre l'icône et le texte */
            width: 100%;
            padding: 10px 15px;
            border: 2px solid #f8f9fa;
            color: #f8f9fa;
            background: transparent;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            text-align: center;
        }

        .btn-outline-light:hover {
            background: #f8f9fa;
            color: #333;
        }

        .btn-outline-light:active {
            background: #e0e0e0;
            color: #333;
        }

        /* Style de l'icône SVG */
        .btn-outline-light svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
            transition: transform 0.2s ease-in-out;
        }

        /* Animation de l'icône au survol */
        .btn-outline-light:hover svg {
            transform: scale(1.1);
        }

        /* Conteneur de la grille */
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }

        /* Colonnes */
        .col-md-4 {
            flex: 1 1 calc(33.333% - 15px);
            max-width: calc(33.333% - 15px);
        }

        @media (max-width: 992px) {
            .col-md-4 {
                flex: 1 1 calc(50% - 15px);
                max-width: calc(50% - 15px);
            }
        }

        @media (max-width: 768px) {
            .col-md-4 {
                flex: 1 1 100%;
                max-width: 100%;
            }
        }

        /* Carte produit */
        .card {
            background: #444;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            color: #f8f9fa;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
        }

        /* Image du produit */
        .card-img-top {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        /* Corps de la carte */
        .card-body {
            padding: 15px;
        }

        /* Titre du produit */
        .card-title {
            font-size: 18px;
            font-weight: bold;
            color: #f8f9fa;
            margin-bottom: 10px;
        }

        /* Table des variations */
        .variations-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .variations-table td {
            padding: 8px;
            border-bottom: 1px solid #ddd;
            text-align: center;
        }

        .variations-table td:first-child {
            text-align: left;
        }

        /* Badge de stock */
        .badge-stock {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .bg-danger {
            background-color: red;
        }

        .bg-success {
            background-color: green;
        }

        /* Prix */
        .fw-bold {
            font-weight: bold;
            color: #f8f9fa;
        }`;

    document.head.appendChild(styles);
}