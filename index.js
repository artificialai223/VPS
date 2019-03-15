const Discord = require('discord.js')
const client = new Discord.Client()
let prefix = 'cr!'

const orders = new Discord.Collection()
const orderStatus = new Discord.Collection()

const economy = new Discord.Collection()


client.on('message', async message => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(prefix)) return;
   
let args = message.content.slice(prefix.length).split(' ')
let command = args.shift().toLowerCase()
if (command === 'say') {
if (message.author.id === '485885170080022556' || message.author.id === '465883333159550980') {
   message.delete()
message.channel.send(args.join(' '))
}
}

if (command === 'bet') {
const roll = Math.floor(Math.random() * 2)
    let am = economy.get(message.author.id) || 10
if (roll === 1) {
       economy.set(message.author.id, (am + 50))
    
   message.channel.send('You won $50')
} else {
   economy.set(message.author.id, (am - 50))
        message.channel.send('You lost $50')
    }
}
    if (command === 'nonpremium') {
     let shit = message.mentions.users.first()
     if (!shit) return message.reply('what... use cr!nonpremium @USER')
        shit.send('hey you are not premium so don\'t try to interview without premium.')
    }
    if (command === 'servers') {
message.channel.send(client.guilds.map(g => g.name))
    }
    if (command === 'stats') {
        let stat = new Discord.RichEmbed()
        stat.setTitle('I am having:')
        stat.addField('Servers', `${client.guilds.size}`)
        stat.addField('Users', `${client.users.size}`)
        stat.addField('Ping', `${Math.round(message.client.ping)}`)
        stat.setImage('https://discordbots.org/api/widget/540899003693400064.svg')
message.channel.send(stat)
    }
if (command === 'test') {
let ping = Math.round(message.client.ping)
message.channel.send('Testing all events...')
    .then(msg => {
    setTimeout(function() {
    msg.edit('Tested events! well I am working on the speed ' + ping + 'milisconds per message')
    }, 1500)
        setTimeout(function() {
    msg.edit('testing all listeners now...')
    }, 3000)
           setTimeout(function() {
    msg.edit(':robot: Everything is working fine!')
    }, 5000)
    })
}
if (command === 'site' || command === 'website') {
    return message.channel.send('https://sparkmcdeveloper.com')
}

if (command === 'order') {
    let orderChannel = message.client.channels.get('544553646017478670')
    if (!args[0]) return message.reply('What Do You Want To Order?')
    let items = ["Wooden Sign", "Perspex Sign", "Leather Sign", "Wooden Keyring", "Perspex Keyring"]
if (!items.some(i => message.content.toLowerCase().includes(i.toLowerCase()))) return message.reply('this item is not available')
    message.channel.send({embed: {
   description: 'The Owner Will Contact You Soon Please Do Not Change Your Username Until You Get A Response Or We Wont Know Who Sent The Order\n\n'// + developer + '*'
    
    }})
    orders.set(message.author.id, args.join(' '))
    orderStatus.set(message.author.id, 'Not accepted')
     const premiumUsers = message.member.roles.find(r => r.name === 'PREMIUM')
     if (premiumUsers) {
         orderChannel = client.users.get('465883333159550980')
      message.channel.send('You were premium user so I sent this order to Stormer\'s dm so he can check faster :D')   
     }
        orderChannel.send('**NEW ORDER** - *By ' + message.author.tag +'* (ID: ' + message.author.id + ')\n\n- ' + args.join(' ') + '\n\n----------------------------------------')
}
if (command === 'invite') {
    client.generateInvite(['ADMINISTRATOR'])
    .then(link => console.log(link))
    message.channel.send('https://discordbots.org/bot/540899003693400064')
}
    if (command === 'accept') {
        if (message.author.id !== '465883333159550980') {
message.reply('no permissions')
}
let orderer = args[0]
orderStatus.set(message.author.id, 'Accepted')
                message.channel.send('Successfully accepted that order')
    }
    if (command === 'deny') {
        if (message.author.id !== '465883333159550980') {
message.reply('no permissions')
}
let orderer = args[0]
orderStatus.set(message.author.id, 'Denied')
        message.channel.send('Successfully denied that order')
    }
    if (command === 'order-complete') {
if (message.author.id !== '465883333159550980') {
message.reply('no permissions')
}
           if (!orders.has(args[0])) return message.reply('I could not find a user with that ID')
        orders.delete(args[0])
        message.channel.send('Deleted that order from list and marked as complete.')
    }
    if (command === 'track') {
        if (!orders.has(message.author.id)) return message.reply('You dont have a order pending')
        let t = orders.get(message.author.id)
        let x = orderStatus.get(message.author.id)
message.reply('Your order `' + t + '`\'s status:\n' + x)
    }
    if (command === 'help') {
message.channel.send('cr!help\ncr!order\ncr!deny\ncr!accept\ncr!order-complete\ncr!track\ncr!invite\ncr!ticket\ncr!close\ncr!bet\ncr!bal')
    }
    if (command === 'meme') {
const file1 = 42444
const file2 = 43425
const file3 = 22
const file4 = 1
const allMemes  = [{"id":"99683372","name":"Sleeping Shaq","url":"https:\/\/i.imgflip.com\/1nck6k.jpg","width":640,"height":631},{"id":"61580","name":"Too Damn High","url":"https:\/\/i.imgflip.com\/1bik.jpg","width":420,"height":316},{"id":"460541","name":"Jack Sparrow Being Chased","url":"https:\/\/i.imgflip.com\/9vct.jpg","width":500,"height":375},{"id":"371382","name":"Simba Shadowy Place","url":"https:\/\/i.imgflip.com\/7yk6.jpg","width":363,"height":720},{"id":"21604248","name":"Mugatu So Hot Right Now","url":"https:\/\/i.imgflip.com\/cv1y0.jpg","width":620,"height":497},{"id":"12403754","name":"Bad Pun Dog","url":"https:\/\/i.imgflip.com\/7dusq.jpg","width":575,"height":1200},{"id":"6531067","name":"See Nobody Cares","url":"https:\/\/i.imgflip.com\/3vzej.jpg","width":620,"height":676},{"id":"163573","name":"Imagination Spongebob","url":"https:\/\/i.imgflip.com\/3i7p.jpg","width":500,"height":366},{"id":"101716","name":"Yo Dawg Heard You","url":"https:\/\/i.imgflip.com\/26hg.jpg","width":500,"height":323},{"id":"28034788","name":"Marvel Civil War 1","url":"https:\/\/i.imgflip.com\/govs4.jpg","width":423,"height":734},{"id":"89655","name":"Uncle Sam","url":"https:\/\/i.imgflip.com\/1x6f.jpg","width":620,"height":833},{"id":"47235368","name":"Good Fellas Hilarious","url":"https:\/\/i.imgflip.com\/s4f1k.jpg","width":1600,"height":1150},{"id":"29617627","name":"Look At Me","url":"https:\/\/i.imgflip.com\/hmt3v.jpg","width":300,"height":300},{"id":"156892","name":"Inception","url":"https:\/\/i.imgflip.com\/3d24.jpg","width":410,"height":668},{"id":"1232104","name":"Pepperidge Farm Remembers","url":"https:\/\/i.imgflip.com\/qep4.jpg","width":500,"height":500},{"id":"245898","name":"Picard Wtf","url":"https:\/\/i.imgflip.com\/59qi.jpg","width":500,"height":350},{"id":"79367954","name":"Blank Starter Pack","url":"https:\/\/i.imgflip.com\/1b94pe.jpg","width":941,"height":960},{"id":"142921050","name":"Car Salesman Slaps Roof Of Car","url":"https:\/\/i.imgflip.com\/2d3al6.jpg","width":800,"height":450},{"id":"74191766","name":"Arthur Fist","url":"https:\/\/i.imgflip.com\/1866qe.jpg","width":583,"height":328},{"id":"228024","name":"Liam Neeson Taken","url":"https:\/\/i.imgflip.com\/4vy0.jpg","width":300,"height":300},{"id":"1790995","name":"And everybody loses their minds","url":"https:\/\/i.imgflip.com\/12dxv.jpg","width":620,"height":349},{"id":"61733537","name":"Mr Krabs Blur Meme","url":"https:\/\/i.imgflip.com\/10r5wh.jpg","width":708,"height":495},{"id":"61584","name":"Socially Awesome Awkward Penguin","url":"https:\/\/i.imgflip.com\/1bio.jpg","width":576,"height":577},{"id":"124212","name":"Say That Again I Dare You","url":"https:\/\/i.imgflip.com\/2nuc.jpg","width":393,"height":330},{"id":"100955","name":"Confession Bear","url":"https:\/\/i.imgflip.com\/25wb.jpg","width":460,"height":480},{"id":"19209570","name":"What Do We Want","url":"https:\/\/i.imgflip.com\/bfq76.jpg","width":480,"height":352},{"id":"195389","name":"Sparta Leonidas","url":"https:\/\/i.imgflip.com\/46rh.jpg","width":500,"height":264},{"id":"7253945","name":"Kevin Hart","url":"https:\/\/i.imgflip.com\/4bh6h.jpg","width":560,"height":371},{"id":"53764","name":"Peter Parker Cry","url":"https:\/\/i.imgflip.com\/15hg.jpg","width":400,"height":992},{"id":"412211","name":"Jackie Chan WTF","url":"https:\/\/i.imgflip.com\/8u2b.jpg","width":500,"height":375},{"id":"4173692","name":"Scared Cat","url":"https:\/\/i.imgflip.com\/2hgfw.jpg","width":620,"height":464},{"id":"107773","name":"Spiderman Peter Parker","url":"https:\/\/i.imgflip.com\/2b5p.jpg","width":461,"height":352},{"id":"176908","name":"Shut Up And Take My Money Fry","url":"https:\/\/i.imgflip.com\/3si4.jpg","width":500,"height":281},{"id":"101440","name":"10 Guy","url":"https:\/\/i.imgflip.com\/269s.jpg","width":500,"height":454},{"id":"8279814","name":"Cute Cat","url":"https:\/\/i.imgflip.com\/4xgqu.jpg","width":480,"height":532},{"id":"766986","name":"Aaaaand Its Gone","url":"https:\/\/i.imgflip.com\/gft6.jpg","width":500,"height":281},{"id":"285870","name":"Squidward","url":"https:\/\/i.imgflip.com\/64ku.jpg","width":500,"height":750},{"id":"17699","name":"Buddy Christ","url":"https:\/\/i.imgflip.com\/dnn.jpg","width":400,"height":400}]
let moreMemes = 'no more memes left!';
        let extraMemes = (file1 === file2) === file3
var rr = [file1, file2, file3, file4]
// randomize
const a = 272712;
        if (extraMemes) return message.delete();
        const rand = Math.floor(Math.random() * rr.length)
// memefy
        const randomM = Math.floor(Math.random() * allMemes.length)
        let randomMeme = a / rand * rr.length + message.content
        if (!allMemes[randomM].url) message.channel.send('no more memes if you dont wait then do command')
     message.channel.send(allMemes[randomM].url).catch(e => message.channel.send('no more memes if you dont wait then do command'))
    }
    if (command === 'ticket') {
        const premiumUsers = message.member.roles.find(r => r.name === 'PREMIUM')
if (message.guild.id !== '540899846182141978') return message.channel.send({embed: {description: 'This command can only be used at our support server!'}})
        if (premiumUsers) {
            
        } else {
            return message.channel.send('You are not our premium user... \nYou want to be premium? say cr!premium MAKE SURE TO JOIN THE SUPPORT SERVER BEFORE BUYING OR YOU WILL NOT GET PREMIUM https://discord.gg/CenQnzw Buy: patreon.com/CrystalDiscordBot')
               }
                message.guild.createChannel(`ticket-${(message.author.id.slice(1))}`, 'text').then(c => {
                    c.overwritePermissions(message.author, {
                        VIEW_CHANNEL: true
                      })
                      c.overwritePermissions(message.guild.defaultRole.id, {
                        VIEW_CHANNEL: false
                      })
                    message.channel.send('Done! Here is your ticket:' + c)
                    
                })
    }
    if (command === 'close') {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You dont have admin permission!")
        message.channel.send('deleting ticket')
        message.channel.delete()
    }
    if (command === 'premium') {
message.channel.send('MAKE SURE TO JOIN THE SUPPORT SERVER BEFORE BUYING OR YOU WILL NOT GET PREMIUM https://discord.gg/CenQnzw Buy: patreon.com/CrystalDiscordBot')
    }
    if (command === 'giveaway') {
message.channel.send('React to this message to get a chance to win premium!')
 .then(async msg => {
msg.react('☑')
    setTimeout(function() {
        let a;
        let b = []
        let c = ''
        let reactors = msg.reactions.find(r => r.emoji.name === '☑').users.map(n => {
            if (n.id === '501779668366655508') return;
            a = n.id
            c = 'GET RANDOM WINNER!' + n.tag + n.id + a
            b.push(a)
        })
let luck = Math.floor(Math.random() * b.length)
       message.channel.send(client.users.get(b[luck]) + ' has won premium! Ask a developer for your role!')
        }, 3600000)
})
    }
    if (command === 'feedback') {
        const feedbackLink = 'https://www.surveymonkey.com/r/5LRR89V'
message.channel.send(feedbackLink)
    }
  if (command === 'bal') {
      const Canvas = require('canvas')
     const bal = economy.get(message.author.id)

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`You have  + ${bal} money!`, canvas.width / 2.5, canvas.height / 3.5);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
	message.channel.send(attachment);

}
if (command === 'economy-data') {
    let channelE = client.channels.get('547751546754957312')
    client.channels.get('553152749693435914').fetchMessages()
  .then(messages => {
      messages.forEach(m => {
          let person = m.mentions.users.first()
          let amount = m.content.split('amount:')
          channelE.send('I found ' + person.tag + ' having $' + amount[1] + ' money.')
      })
})
}
})
let l = require('./config.json')
let CHECK = require('./check.json')
let s = require('./check.json').OK 
client.on('error', err => {
console.log('yo I am on')
})

client.once('ready', () => {
    let channelE = client.channels.get('547751546754957312')
  client.channels.get('553152749693435914').fetchMessages()
.then(messages => {
    messages.forEach(m => {
        let person = m.mentions.users.first()
        let amount = m.content.split('amount: ')
       economy.set(person.id, Number(amount))
    })
})
   console.log('Yo Crystal In Da Club!!!')
})

/*
if (!developer.includes(l.OK) || !developer.includes(CHECK.i + '/9GC')) {
    return console.log(s)
    process.exit()
*/

client.login("NTQwODk5MDAzNjkzNDAwMDY0.D2GpFg.-Ld1mRjDj3_PSCu3deNlqcpvM4E")
