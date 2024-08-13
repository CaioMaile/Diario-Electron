const { Menu } = require("electron")

function AdicionarMenu(janela) {
    const modelo = Menu.buildFromTemplate([
        {label: "Páginas", click: () => {janela.loadfile("./public/Paginas.html")}}, 
        {label: "Publicar", click: () => {janela.loadfile("./public/Publicar.html")}},
        {label: "Sair", role: "quit"}
    ])
    Menu.setApplicationMenu(modelo)
}
module.exports = AdicionarMenu