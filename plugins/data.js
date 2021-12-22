let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "⛏️LIST PEKERJAAN⛏️",
                        "description": "_©bydimas_",
                        "buttonText": "PILIH",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                     "title": `- 🌳Menebang Pohon (Limit)`,
                                        "description": "Tebang pohon",
                                        "rowId": ".tebang"
                                    },{
                                       "title": `- 🛵Ngojek (Ojek)`,
                                        "description": "Ngojek Orang / Ojek",
                                        "rowId": ".ojek"
                                    },{
                                        "title": "-⛏️Menambang",
                                        "description": "Menambang Batu & uang",
                                        "rowId": ".nambang"                                              
                                    },{
                                       "title": `- 🚕Taxy (Taksi)`,
                                        "description": "Taksi Nganterin",
                                        "rowId": ".taxy"
                                    },{
                                        "title": `- 🐅Berburu Hewan`,
                                        "description": "Berburu suatu hewan",
                                        "rowId": ".berburu"
                                    },{
                                      "title": "-🎣Mancing Di laut",
                                        "description": "Memancing ikan di laut",
                                        "rowId": ".mancing"                                              
                                    },{
       
                                        "title": "- 🗺️Ke Hutan",
                                        "description": "Mencari item di semua tempat",
                                        "rowId": ".adventure"
                                    },{
                                        "title": `- 🕯️Ngepet (Premium)`,
                                        "description": "Ngepet jaga lilin",
                                        "rowId": ".ngepet"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['pekerjaan']
handler.register = true
module.exports = handler