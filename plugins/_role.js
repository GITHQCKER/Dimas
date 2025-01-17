let handler = m => m

handler.before = function (m) {
  let user = global.DATABASE.data.users[m.sender]
        let role = (user.level <= 2) ? 'Warrior'
          : ((user.level >= 2) && (user.level <= 4)) ? 'Traine Warrior'
          : ((user.level >= 4) && (user.level <= 6)) ? 'Apprentice Warrior'
          : ((user.level >= 6) && (user.level <= 8)) ? 'Skilled Warrior'
          : ((user.level >= 8) && (user.level <= 10)) ? 'Archer'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Traine Archer'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Apprentice Archer'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Skilled Archer'
          : ((user.level >= 40) && (user.level <= 50)) ? 'HardWorker Archer'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Tamer'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Traine Tamer' 
          : ((user.level >= 70) && (user.level <= 80)) ? 'Apprentice Tamer' 
          : ((user.level >= 80) && (user.level <= 90)) ? 'Skilled Tamer' 
          : ((user.level >= 90) && (user.level <= 100)) ? 'HardWorker Tamer' 
          : ((user.level >= 100) && (user.level <= 110)) ? 'Professional Tamer'
          : ((user.level >= 110) && (user.level <= 120)) ? 'Ninja'
          : ((user.level >= 120) && (user.level <= 130)) ? 'Traine Ninja'
          : ((user.level >= 130) && (user.level <= 140)) ? 'Apprentice Ninja'
          : ((user.level >= 140) && (user.level <= 150)) ? 'Skilled Ninja'
          : ((user.level >= 150) && (user.level <= 160)) ? 'HardWorker Ninja' 
          : ((user.level >= 160) && (user.level <= 170)) ? 'Professional Ninja' 
          : ((user.level >= 170) && (user.level <= 180)) ? 'Assassin' 
          : ((user.level >= 180) && (user.level <= 190)) ? 'Mage' 
          : ((user.level >= 190) && (user.level <= 200)) ? 'Traine Mage' 
          : ((user.level >= 200) && (user.level <= 210)) ? 'Apprentice Mage' 
          : ((user.level >= 210) && (user.level <= 220)) ? 'Skilled Mage'
          : ((user.level >= 220) && (user.level <= 230)) ? 'HardWorker Mage'
          : ((user.level >= 230) && (user.level <= 240)) ? 'Professional Mage'
          : ((user.level >= 240) && (user.level <= 250)) ? 'Warlock Mage'
          : ((user.level >= 250) && (user.level <= 260)) ? 'Druid Mage'
          : ((user.level >= 260) && (user.level <= 270)) ? 'Priest Mage'
          : ((user.level >= 270) && (user.level <= 280)) ? 'Temper'  
          : ((user.level >= 280) && (user.level <= 290)) ? 'Traine Temper' 
          : ((user.level >= 290) && (user.level <= 300)) ? 'Apprentice Temper' 
          : ((user.level >= 300) && (user.level <= 310)) ? 'Skilled Temper'
          : ((user.level >= 310) && (user.level <= 320)) ? 'HardWorker Temper'
          : ((user.level >= 320) && (user.level <= 330)) ? 'Professional Temper'
          : ((user.level >= 330) && (user.level <= 340)) ? 'Blacksmith Temper'
          : ((user.level >= 340) && (user.level <= 350)) ? 'Abyssl Temper'
          : ((user.level >= 350) && (user.level <= 360)) ? 'Artisan Temper'
          : ((user.level >= 360) && (user.level <= 370)) ? 'Corsair'
          : ((user.level >= 370) && (user.level <= 380)) ? 'Hashashin'
          : ((user.level >= 380) && (user.level <= 390)) ? 'Sage'
          : ((user.level >= 390) && (user.level <= 400)) ? 'Ranger'
          : ((user.level >= 400) && (user.level <= 410)) ? 'Guardian'
          : ((user.level >= 410) && (user.level <= 420)) ? 'Sorceress'
          : ((user.level >= 420) && (user.level <= 430)) ? 'Nova'
          : ((user.level >= 430) && (user.level <= 440)) ? 'Lahn'
          : ((user.level >= 440) && (user.level <= 450)) ? 'Berserker'
          : ((user.level >= 450) && (user.level <= 460)) ? 'Shai'
          : ((user.level >= 460) && (user.level <= 470)) ? 'Striker'
          : ((user.level >= 470) && (user.level <= 480)) ? 'Musa'
          : ((user.level >= 480) && (user.level <= 490)) ? 'Maehwa' 
          : ((user.level >= 490) && (user.level <= 500)) ? 'Mystic'
          : ((user.level >= 500) && (user.level <= 600)) ? 'Earth Quaker'
          : ((user.level >= 600) && (user.level <= 700)) ? 'Tsunami'
          : ((user.level >= 700) && (user.level <= 800)) ? 'Doomsday'
          : ((user.level >= 800) && (user.level <= 900)) ? 'Realms'
          : ((user.level >= 900) && (user.level <= 1000)) ? 'messenger of hell'
          : ((user.level >= 1000) && (user.level <= 1500)) ? 'protector of heaven'
          : ((user.level >= 1500) && (user.level <= 2000)) ? 'Satan'
          : ((user.level >= 2000) && (user.level <= 5000)) ? 'Angel'
          : ((user.level >= 5000) && (user.level <= 10000)) ? 'Demi God'
          : ((user.level >= 10000) && (user.level <= 15000)) ? 'Soul Keeper'
          : ((user.level >= 15000) && (user.level <= 20000)) ? 'God General'
          : ((user.level >= 20000) && (user.level <= 30000)) ? 'God'
          : 'IM 숒 × Immortal 숒'
          : ((user.level >= 30000) && (user.level <= 40000)) ? 'CREATOR'
          'Wait 숒 × Who Are You  숒'
          : ((user.level >= 40000) && (user.level <= 99999999999)) ? 'OWNER'
          'Truth 숒 × Seeker 숒'
  user.role = role
  return true
}

module.exports = handler
handler.help = ['role']
handler.tags = ['info']
handler.command = /^(role|levelrole)$/i
handler.register = true
