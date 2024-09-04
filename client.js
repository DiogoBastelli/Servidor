const net = require('net')
const  readline  = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const client = net.createConnection({port:3000} , ()=>{
    console.log('Conectado ao servidor de chat')

    rl.prompt()

    rl.on('line', (input)=>{
        client.write(input)
        rl.prompt()
    })
})

client.on('data' , (data)=>{
    console.log(`mensagem do chat: ${data.toString().trim()}`)
})