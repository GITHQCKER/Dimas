let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*BOT Ini Menggunakan  *
**
_Password Ada Di Video_
_Jika Tidak Menemukannya Bisa Chat_
_wa.me/
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *SC ALAN BOTZ* 🔥', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler
 