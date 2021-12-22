let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *🔖Nama :* ${username}
┃•  *⏳Umur :* ${registered ? '' + age : ''}
┃•  *🧬Exp :* ${exp}
┃[${max - exp} lagi untuk levelup]
┃•  *🎟️Tiket :* ${limit} 🎟️
┃•  *⚔️Level :* ${level}
┃•  *📞Nomor :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃•  *💡Api Whatsapp :* wa.me/${who.split`@`[0]}
┃•  *💾Terdaftar :* ${registered ? 'Yes': 'No'}
┃
┣━━°❀❬ *HADIAH MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}buygift*
┣➥ *${usedPrefix}event*
┣➥ *${usedPrefix}freegift <code>*
┣➥ *${usedPrefix}gift <code>*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurotomo (author)*
┣➥ *Ibnu NR (pengembang)*
┣➥ *RC047 (pengembang)*
┣➥ *Caliph (pengembang)*
┣➥ *Raku Gans*
┣➥ *Layscode*
┣➥ *Zeks*
┣➥ *Dll
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['hadiahmenu']
handler.tags = ['nande']
handler.command = /^hadiahmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

