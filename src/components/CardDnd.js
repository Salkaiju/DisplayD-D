class CardDnd extends HTMLElement { // orientação a objetos
    constructor() {
        super(); // Chama o construtor da classe pai HTMLElement
        // Cria um shadow DOM para encapsular o estilo e o conteúdo do componente
        this.attachShadow({ mode: "open" }); // Cria um shadow DOM aberto, ou seja, acessível do exterior
        this.render(); 
    }

    // Método chamado quando o componente é adicionado ao DOM
    render() {
        this.shadowRoot.innerHTML = `
        <style>
        subtitle {
                font-size: 1.2em;
                color: #555;
            }

            .card {
                border: 1px solid #ccc;
                border-radius: 8px;
                padding: 16px;
                margin: 16px;
                background-color: #f9f9f9;
                display: flex;
                justify-content: space-between;
            }

            .title {
                font-size: 1.5em;
                margin-bottom: 8px;
            }

            .content {
                max-width: 75%;
                font-size: 1em;
            }

            .content2 {
                max-width: 75%;
                font-size: 1em;
            }

            .image-container {
                display: flex;
                justify-content: end;
                position: relative;
                min-width: 20%;
                width: 20%;
            }

            img {
                max-width: 100%;
                border-radius: 4px;
            }
        </style>
        <div class="card">
            <div class="content-container">
                <h1 class="title">${this.getAttribute("title")}</h1>
                <p class="content">${this.getAttribute("subtitle")}</p>
                <p class="content">${this.getAttribute("description")}</p>
            </div>
            <div class="image-container">
                <img src="${this.getAttribute("image")}" alt="Noticia Image" />
            </div>
        </div>
        `;
    }
}

customElements.define("card-dnd", CardDnd);
