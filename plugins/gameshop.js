let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
_Harga Diamonds Free Fire_
			**
			
⦿ 70 Diamonds = IDR 

⦿ 100 Diamonds = IDR

⦿ 140 Diamonds = IDR 

⦿ 210 Diamonds = IDR

⦿ 355 Diamonds = IDR 

⦿ 500 Diamonds = IDR 

⦿ 720 Diamonds = IDR 

⦿ 1000 Diamonds = IDR 

⦿ 1080 Diamonds = IDR

⦿ 1440 Diamonds = IDR 

⦿ 2005 Diamonds = IDR 

⦿ 4005 Diamonds = I

⦿ M.MINGGUAN = I
⦿ M.BULANAN = 

Contoh Pembelian
355DM 8251936106

Cara Pembelian
Ketik *NEXT*

Note : Pastikan ID Mu Benar Karena 
Diamond Tidak Masuk Bukan 
Tanggung Jawab Kami

▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
             T E R P E R C A Y A
                	       *©Dimas*
             
             ᴄᴏɴᴛᴀᴄᴛ ᴘᴇʀsᴏɴ
         wa.me/
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 DIMAS SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(LIST TOP UP)$/i
handler.command = new RegExp

module.exports = handler
