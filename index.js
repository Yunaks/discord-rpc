const rpc = require("discord-rpc")
const clients = new rpc.Client({ transport: 'ipc' })
clients.on('ready', () => {
clients.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
timestamps: { start: Date.now() },
details : "Developed By Yunak",// mesaj kısmı
assets : {
large_image : "yunak",// discord.com/developers -> app -> yeni bot oluştur -> botu aç -> rich presence -> addimage -> görsel seciniz -> secriginiz görselin adı
large_text : "yunak" // discord.com/developers -> app -> yeni bot oluştur -> botu aç -> rich presence -> addimage -> görsel seciniz -> secriginiz görselin adı
},
buttons : [{label : "Bilgi İçin" , url : "https://discord.com/users/408785106942164992"}] //kendinize göre yazın
}
})
})
console.log("Yunak => Rpc aktif edildi!")
clients.login({ clientId : "944609307280957480" }).catch(() => {})// oluşturdgunuz botun idsi