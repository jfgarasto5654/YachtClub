const app = require('./app')

//esta logica es para ejecutar el servidor

async function main() {
    await app.listen(app.get('port'))
    console.log('el servidor se esta conectando en el puerto ', app.get('port'));
}

main();