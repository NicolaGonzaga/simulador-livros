class Livro {
    constructor(titulo, autor, numPaginas, tipo) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.tipo = tipo;
    }

    exibirInformacoes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de Páginas: ${this.numPaginas}`);
        console.log(`Tipo: ${this.tipo}`);
    }
}

class SimuladorLivros {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`${livro.titulo} foi adicionado ao simulador.`);
    }

    exibirLivros() {
        console.log("Livros no simulador:");
        this.livros.forEach(livro => {
            livro.exibirInformacoes();
        });
    }
}

const livrosFemininos = [
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", numPaginas: 608, tipo: "Romance" },
    { titulo: "O Conto da Aia", autor: "Margaret Atwood", numPaginas: 368, tipo: "Ficção" },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", numPaginas: 248, tipo: "Fantasia" },
    { titulo: "Persuasão", autor: "Jane Austen", numPaginas: 288, tipo: "Romance" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", numPaginas: 279, tipo: "Romance" },
    { titulo: "O Diário de Anne Frank", autor: "Anne Frank", numPaginas: 336, tipo: "Biografia" },
    { titulo: "A Casa dos Espíritos", autor: "Isabel Allende", numPaginas: 416, tipo: "Ficção" },
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", numPaginas: 480, tipo: "Ficção" },
    { titulo: "A Cor Púrpura", autor: "Alice Walker", numPaginas: 336, tipo: "Romance" },
    { titulo: "A Gorda", autor: "Isabela Figueiredo", numPaginas: 200, tipo: "Biografia" }
];

const simuladorLivros = new SimuladorLivros();

livrosFemininos.forEach(livro => {
    const livroObj = new Livro(livro.titulo, livro.autor, livro.numPaginas, livro.tipo);
    simuladorLivros.adicionarLivro(livroObj);
});

simuladorLivros.exibirLivros();
