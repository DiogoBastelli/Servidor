const net = require('net')

const client = []

const server = net.createServer((socket)=>{
    client.push(socket)
    console.log('Novo cliente conectado')

    socket.on('data' , (data)=>{
        console.log(`Mensagem recebida: ${data.toString().trim()}`)
        Broadcast(data, socket)
    })
})

function Broadcast(mesage, senderSocket){
    client.forEach((client)=>{
        if(client != senderSocket){
            client.write(mesage)
        }
    })
}
server.listen(3000 , ()=>{
    console.log('Servidor de chate rodando na porta 3000')
})