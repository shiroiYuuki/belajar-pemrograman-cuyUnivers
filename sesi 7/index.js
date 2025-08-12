const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1'
const port = 3001


const server = http.createServer(function (request, response ) {
    const nama = "yuuki";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    const hasil = `
    <h1>Node JS uang jajan</h1>
    
    <p>hallo nama saya ${nama} saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa} 
    </p>`

    response.statusCode = 208;
    response.end(hasil);
})

server.listen(port, host, function() {
    console.log(`server menyala di ${host}:${port}`);
});