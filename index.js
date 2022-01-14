const Discord = require("discord.js")

const TOKEN = "OTI4Nzg5MjMyNDY4Nzg3MjQw.Ydd4YQ.frcGCW2w6Hc1-xi-BAzKZhPBNPU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.once("ready", () => { 
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)!`)
    client.user.setActivity({name: "Fortnite", type: "PLAYING"}) 
})


client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply(`**Halts Maul!** ${message.author} **Du Wichskrüppel**`)
    }
    
    else if (message.content == "Hi"){
        message.reply(`**Halts Maul!** ${message.author} **Du Wichskrüppel**`)
    }
    
    else if (message.content == ".help"){
        message.reply(`**Halts Maul, du Hampelmann!**`)
        message.reply("```md\n1. H/hi\n2. .invite\n3. .help\n4. S/servas\n5. M/mörle\n6. nudes\n7. .clear```")
    }
    
    else if (message.content == "Servas"){
        message.reply("https://c.tenor.com/AmU2mwgNGSgAAAAM/goeiemo-hallo.gif")
    }
    
    else if (message.content == "servas"){
        message.reply("https://c.tenor.com/AmU2mwgNGSgAAAAM/goeiemo-hallo.gif")
    }
    
    else if (message.content == "mörle"){
        message.reply("||https://preview.redd.it/q4cwk9a0q9v71.jpg?width=640&crop=smart&auto=webp&s=33b48830d3515d48c9cee4c2e6d1f88e240763e5||")
    }
    else if (message.content == "Mörle"){
        message.reply("||https://preview.redd.it/q4cwk9a0q9v71.jpg?width=640&crop=smart&auto=webp&s=33b48830d3515d48c9cee4c2e6d1f88e240763e5||")
    }
    
})


const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

client.on("messageCreate", async (message) => {
    
    if (message.content === "nudes") {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('18+')
            .setLabel('Ich bin 18+')
            .setStyle('SUCCESS')
            .setEmoji(`🔓`),
            
            new MessageButton()
            .setCustomId('18-')
            .setLabel('Ich bin keine 18+')
            .setStyle('DANGER')
            .setEmoji(`🔒`),
            );
            
            const embed = new MessageEmbed()
            .setColor(`#F50057`)
            .setTitle(`**NSFW**`)
            .setURL(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cee0a0c-81d0-4a9d-8988-fd60db7c1edd/deh80xz-db9d3ab9-76bb-4043-8cd5-4d333aaa9a1d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjZWUwYTBjLTgxZDAtNGE5ZC04OTg4LWZkNjBkYjdjMWVkZFwvZGVoODB4ei1kYjlkM2FiOS03NmJiLTQwNDMtOGNkNS00ZDMzM2FhYTlhMWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rCPJZ4QDz-hp3tOeJUzyoiP75Bh0I2OqHxOhGnozykQ`)
            .setImage('https://www.macobserver.com/wp-content/uploads/2021/04/Discord-NSFW-label.jpg')
            .setDescription(`**Bist du alt genug um das zusehen?**`)
            
            
            await message.reply({
                embeds: [embed],
                components: [row],
                ephemeral: true,
            })
        }
    })
    
    client.on("interactionCreate", async (interaction) => {
        if(interaction.isButton()) {
            if(interaction.customId === `18+`){
                interaction.reply({ content: `**<@${interaction.user.id}> hier die Nudes, hab Spaß damit!** :slight_smile:\n*(du findest sie in deinen DMs :eyes:)* `})
            } else if(interaction.customId === `18-`){
                interaction.reply({ content: `**<@${interaction.user.id}> du bist anscheinend noch zu jung...** `})
            }
        }
    })






    
    

    
    client.on("messageCreate", async (message) => {
        
        if (message.content === ".ticket") {
            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('Bug-Report')
                .setLabel('Bug-Report')
                .setStyle('PRIMARY')
                .setEmoji(`🔧`),
                
                new MessageButton()
                .setCustomId('AdminSup')
                .setLabel('Admin-Support')
                .setStyle('PRIMARY')
                .setEmoji(`🔰`),
                
                new MessageButton()
                .setCustomId('TeamBew')
                .setLabel('Team Bewerbung')
                .setStyle('PRIMARY')
                .setEmoji(`📧`),
                
                new MessageButton()
                .setCustomId('Unban')
                .setLabel('Entbannungsantrag')
                .setStyle('PRIMARY')
                .setEmoji(`💀`),
                
                new MessageButton()
                .setCustomId('frag')
                .setLabel('Allgemeine Frage')
                .setStyle('PRIMARY')
                .setEmoji(`❓`),
                );
                
                const embed = new MessageEmbed()
                .setColor(`#0099ff`)
                .setTitle(`**ACHTUNG**`)
                .setAuthor({ name: 'Discord.js Bot | Ticket System', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
                .setURL(`https://discord.gg/venomicrp`)
                .setDescription('● Öffne keine Tickets ohne Grund\n● Benutz die richtigen Templates.')
                .addFields(
                    { name: '🔧 - Bug-Report', value: 'Nutze dieses Ticket wenn du einen Bug gefunden hast'},
                    { name: '🔰 - Admin-Support', value: 'Nutze dieses Ticket wenn du einen Admin brauchst'},
                    { name: '📧 - Team Bewerbung', value: 'Nutze dieses Ticket wenn du unserem Team beitreten möchtest'},
                    { name: '💀 - Entbannungsantrag', value: 'Nutze dieses Ticket wenn du einen Entbannungsantrag stellen möchtest'},
                    { name: '❓ - Allgemeine Frage', value: 'Nutze dieses Ticket wenn du eine allgemeine Frage hast'},
                    )
                    .setFooter({ text: '(Achte auf die oben aufgelisteten Regeln!)'});
                    
                    
                    
                    await message.reply({
                        embeds: [embed],
                        components: [row],
                        ephemeral: true,
                    })
                }
            })

            client.on("interactionCreate", async (interaction) => {
                if(interaction.isButton()) {
                    if(interaction.customId === `Bug-Report`){
                        const channel = await interaction.guild.channels.create(`ticket: ${interaction.user.tag}`,{})
                        channel.setParent(`930928822189170758`)
                        
                        
                        
                        const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setCustomId('Pause')
                            .setLabel('Ticket pausieren')
                            .setStyle('SECONDARY')
                            .setEmoji(`⏸️`),
                            
                            new MessageButton()
                            .setCustomId('Close')
                            .setLabel('Ticket schließen')
                            .setStyle('SECONDARY')
                            .setEmoji(`🔒`),
                            
                            )
                            
                            
                            const embed = new MessageEmbed()
                            .setColor(`#0099ff`)
                            .setTitle(`**🔧 - Bug-Report Ticket**\n─────────────────────────────────`)
                            .setThumbnail('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report-.png')
                            .addFields(
                                { name: 'Bug Report', value: 'Solltest du einen Bug gefunden haben, bitte ich dich ihn hier zu melden ansonsten verstoßt das gegen unsere Regeln' },
                                { name: '\u200B', value: '\u200B' },
                                { name: 'Was dein Ticket behinalten muss\n────────────────────────────────────', value: '1. Was für ein Bug?\n2. Wie hast du ihn gefunden?\n3. Oder von wem hast du den Bug erfahren?\n────────────────────────────────────' },
                                { name: 'Dein Ticket', value: `<@${interaction.user.id}> es wird sich bald einer um dich kümmern`},
                                )
                                .setTimestamp()
                                .setFooter({ text: 'Bug Report\n(Achte auf die oben aufgelisteten Anforderungen!)', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                                
                                await channel.send({
                                    embeds: [embed],
                                    components: [row],
                                    ephemeral: true,
                                })
                            }   
                        }
            })
    
            client.on("interactionCreate", async (interaction) => {
                if(interaction.isButton()) {
                    if(interaction.customId === `AdminSup`){
                        const channel = await interaction.guild.channels.create(`ticket: ${interaction.user.tag}`,{})
                        channel.setParent(`930928822189170758`)
                        
                        
                        
                        const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setCustomId('Pause')
                            .setLabel('Ticket pausieren')
                            .setStyle('SECONDARY')
                            .setEmoji(`⏸️`),
                            
                            new MessageButton()
                            .setCustomId('Close')
                            .setLabel('Ticket schließen')
                            .setStyle('SECONDARY')
                            .setEmoji(`🔒`),
                            
                            )
                            

                            


                            const embed = new MessageEmbed()
                            .setColor(`#0099ff`)
                            .setTitle(`**🔰 - Admin-Support**\n─────────────────────────────────`)
                            .setThumbnail('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report-.png')
                            .addFields(
                                { name: 'Admin-Support', value: 'Du möchtest was mit der Leitungsebene klären? Dann schreib es einfach hier rein' },
                                { name: '\u200B', value: '\u200B' },
                                { name: 'Was dein Ticket behinalten muss\n────────────────────────────────────', value: '1. Dein DC- & Steamnamen\n2. Um was geht es?\n────────────────────────────────────' },
                                { name: 'Dein Ticket', value: `<@${interaction.user.id}> es wird sich bald einer um dich kümmern`},
                                )
                                .setTimestamp()
                                .setFooter({ text: 'Admin-Support\n(Achte auf die oben aufgelisteten Anforderungen!)', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                                
                                await channel.send({
                                    embeds: [embed],
                                    components: [row],
                                    ephemeral: true,
                                })
                            }   
                        }
            })





            client.on("interactionCreate", async (interaction) => {
                if(interaction.isButton()) {
                    if(interaction.customId === `TeamBew`){
                        const channel = await interaction.guild.channels.create(`ticket: ${interaction.user.tag}`,{})
                        channel.setParent(`930928822189170758`)
                        
                        
                        
                        const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setCustomId('Pause')
                            .setLabel('Ticket pausieren')
                            .setStyle('SECONDARY')
                            .setEmoji(`⏸️`),
                            
                            new MessageButton()
                            .setCustomId('Close')
                            .setLabel('Ticket schließen')
                            .setStyle('SECONDARY')
                            .setEmoji(`🔒`),
                            
                            )
                            
                            
                            const embed = new MessageEmbed()
                            .setColor(`#0099ff`)
                            .setTitle(`**📧 - Team Bewerbung**\n─────────────────────────────────`)
                            .setThumbnail('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report-.png')
                            .addFields(
                                { name: 'Team Bewerbung', value: 'Du möchtest dich für unser **Team** Bewerben? Dann bist du hier genau richtig!' },
                                { name: '\u200B', value: '\u200B' },
                                { name: 'Was dein Ticket behinalten muss \n(Das ganze bitte in einem google Docs link)\n────────────────────────────────────', value: '1. Dc- & Steamnamen\n2. Erzähl was über dich\n3. Nenne mir mind. 3.Stärken und 3.Schwächen\n4. Wieso willst du in unser Team?\n5. Wieso sollten wir dich nehmen?\n6. Schlusswort\n────────────────────────────────────' },
                                { name: 'Dein Ticket', value: `<@${interaction.user.id}> es wird sich bald einer um dich kümmern`},
                                )
                                .setTimestamp()
                                .setFooter({ text: 'Team Bewerbung\n(Achte auf die oben aufgelisteten Anforderungen!)', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                                
                                await channel.send({
                                    embeds: [embed],
                                    components: [row],
                                    ephemeral: true,
                                })
                            }   
                        }
            })




            client.on("interactionCreate", async (interaction) => {
                if(interaction.isButton()) {
                    if(interaction.customId === `Unban`){
                        const channel = await interaction.guild.channels.create(`ticket: ${interaction.user.tag}`,{})
                        channel.setParent(`930928822189170758`)
                        
                        
                        
                        const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setCustomId('Pause')
                            .setLabel('Ticket pausieren')
                            .setStyle('SECONDARY')
                            .setEmoji(`⏸️`),
                            
                            new MessageButton()
                            .setCustomId('Close')
                            .setLabel('Ticket schließen')
                            .setStyle('SECONDARY')
                            .setEmoji(`🔒`),
                            
                            )
                            
                            
                            const embed = new MessageEmbed()
                            .setColor(`#0099ff`)
                            .setTitle(`**💀 - Entbannungsantrag**\n───────────────────────────────`)
                            .setThumbnail('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report-.png')
                            .addFields(
                                { name: 'Entbannungsantrag', value: 'Du kannst hier einen Entbannungsantrag erstellen' },
                                { name: '\u200B', value: '\u200B' },
                                { name: 'Was dein Ticket behinalten muss\n────────────────────────────────────', value: '1. Dc- & Steamnamen\n2. Wieso wurdest du gebannt?\n3. Von wem wurdest du gebannt?\n4. In welchem zeitraum wurdest du gebannt?\n────────────────────────────────────' },
                                { name: 'Dein Ticket', value: `<@${interaction.user.id}> es wird sich bald einer um dich kümmern`},
                                )
                                .setTimestamp()
                                .setFooter({ text: 'Entbannungsantrag\n(Achte auf die oben aufgelisteten Anforderungen!)', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                                
                                await channel.send({
                                    embeds: [embed],
                                    components: [row],
                                    ephemeral: true,
                                })
                            }   
                        }
            })








            client.on("interactionCreate", async (interaction) => {
                if(interaction.isButton()) {
                    if(interaction.customId === `frag`){
                        const channel = await interaction.guild.channels.create(`ticket: ${interaction.user.tag}`,{})
                        channel.setParent(`930928822189170758`)
                        
                        
                        
                        const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setCustomId('Pause')
                            .setLabel('Ticket pausieren')
                            .setStyle('SECONDARY')
                            .setEmoji(`⏸️`),
                            
                            new MessageButton()
                            .setCustomId('Close')
                            .setLabel('Ticket schließen')
                            .setStyle('SECONDARY')
                            .setEmoji(`🔒`),
                            
                            )
                            
                            
                            const embed = new MessageEmbed()
                            .setColor(`#0099ff`)
                            .setTitle(`**❓ - Allgemeine Frage**\n───────────────────────────────`)
                            .setThumbnail('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report-.png')
                            .addFields(
                                { name: 'Allgemeine Frage', value: 'Du hast eine frage?' },
                                { name: '\u200B', value: '\u200B' },
                                { name: 'Was dein Ticket behinalten muss\n────────────────────────────────────', value: '1. Frage einfach stellen\n────────────────────────────────────' },
                                { name: 'Dein Ticket', value: `<@${interaction.user.id}> es wird sich bald einer um dich kümmern`},
                                )
                                .setTimestamp()
                                .setFooter({ text: 'Allgemeine Frage\n(Achte auf die oben aufgelisteten Anforderungen!)', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
                                
                                await channel.send({
                                    embeds: [embed],
                                    components: [row],
                                    ephemeral: true,
                                })
                            }   
                        }
            })



            




            
            client.on("interactionCreate", async (interaction) => {
                if(interaction.isButton()) {
                    const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setCustomId('sure')
                        .setLabel('Close')
                        .setStyle('DANGER'),
                        
                        new MessageButton()
                        .setCustomId('cancel')
                        .setLabel('Cancel')
                        .setStyle('SECONDARY'),
                        )
                        if (interaction.customId == "Close"){
                            await interaction.reply({ content: `Bist du dir sicher das du das Ticket schließen willst?`, components: [row] })

                        } else if(interaction.customId === `sure`){
                            interaction.channel.bulkDelete(1)

                            const embed = new MessageEmbed()
                            .setColor(`#F1C40F`)
                            .setDescription(`Ticket wurde geschlossen von <@${interaction.user.id}>`)
                                
                                await interaction.reply({embeds: [embed]})

                        } else if(interaction.customId === `cancel`){
                            interaction.channel.bulkDelete(1)

                        } else if(interaction.customId === `Pause`){
                            interaction.reply({ content: `**Ticket wurde Pausiert von <@${interaction.user.id}>**`})
                        }
                    }
                })
                
                client.on("messageCreate", async (message) => {
                    
                    if (message.content === ".invite") {
                        const row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                            .setLabel('Hier der Invite Link')
                            .setStyle('LINK')
                            .setURL('https://discord.com/api/oauth2/authorize?client_id=928789232468787240&permissions=1248023538935&scope=bot'),
                            );
                            
                            const embed = new MessageEmbed()
                            .setColor(`#0099ff`)
                            .setTitle(`Invite Link`)
                            .setFooter({ text: 'Dieser Bot wurde erstellt von nicoisteinfachnico#7288'});
                            
                            
                            await message.reply({
                                embeds: [embed],
                                components: [row],
                                ephemeral: true,
                            })
                        }
                    })
                    
                    
                    
                    client.on('messageCreate', async (message) => {
                        if (message.content === ".clear") {
                            const row = new MessageActionRow()
                            .addComponents(
                                new MessageSelectMenu()
                                .setCustomId(`select`)
                                .setPlaceholder(`Nichts ausgewählt`)
                                .addOptions([
                                    {
                                        label: `5`,
                                        description: `Lösche 5 nachrichten`,
                                        value: `5`,
                                    },
                                    {
                                        label: `10`,
                                        description: `Lösche 10 nachrichten`,
                                        value: `10`,
                                    },
                                    {
                                        label: `25`,
                                        description: `Lösche 25 nachrichten`,
                                        value: `25`,
            },
            {
                label: `50`,
                description: `Lösche 50 nachrichten`,
                value: `50`,
            },
            {
                label: `100`,
                description: `Lösche 100 nachrichten`,
                value: `100`,
            },
        ])
    )

    await message.reply({ content: `**Wie viele Nachrichten sollen gelöscht werden?**`, components: [row] })
    }
})

client.login(TOKEN)