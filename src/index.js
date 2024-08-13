const { app, BrowserWindow } = require("electron")
const AddMenu = require("./functions/AdicionarMenu.js")

app.whenReady()
    .then(() => {
        const janela = new BrowserWindow({
            height: 640,
            resizable: false,
            width: 480
        })
        AddMenu(janela)
        janela.loadFile("./public/Paginas.html")
    })