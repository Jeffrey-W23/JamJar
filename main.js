// LICENSE //
//--------------------------------------------------------------------------------------
// Copyright 2020 Thomas Wiltshire
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this 
// software and associated documentation files (the "JamJar"), to deal in the Software 
// without restriction, including without limitation the rights to use, copy, modify, 
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
// permit persons to whom the Software is furnished to do so, subject to the following 
// conditions:
//
// The above copyright notice and this permission notice shall be included in all copies 
// or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
// For more information: https://opensource.org/licenses/mit-license.php
//--------------------------------------------------------------------------------------

// INFORMATION //
//--------------------------------------------------------------------------------------
// Purpose: Main.js used to initiate bot and used as a main hub for all the discord commands.
//
// Author: Thomas Wiltshire
//--------------------------------------------------------------------------------------

// REQUIRES //
//--------------------------------------------------------------------------------------
// require dotenv dependencies for bot token input
require('dotenv').config();
//--------------------------------------------------------------------------------------

// VARIABLES //
//--------------------------------------------------------------------------------------
// const discord object for the discord js module
const m_oDiscord = require('discord.js');

// const for discord client object, only the Guilds intent is needed for slash commands
// (no privileged intents such as Message Content are required)
const m_oClient = new m_oDiscord.Client({ intents: [m_oDiscord.GatewayIntentBits.Guilds] });

// const for the file system object
const m_oFS = require('fs');

// Commands array of discord objects, under the client
m_oClient.aoCommands = new m_oDiscord.Collection();

// const aaray of files for storing command files
const m_afCommandFiles = m_oFS.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// new var for server count
let m_nServerCount = 0;
//--------------------------------------------------------------------------------------

// loop through files in the command files array
for (const fFile of m_afCommandFiles)
{
    // const for a command file
    const fCommand = require(`./commands/${fFile}`);
    
    // set command files in the discord client collection
    m_oClient.aoCommands.set(fCommand.data.name, fCommand);
}

// if the bot is ready
m_oClient.once('clientReady', async () =>
{
    // console log that it is online and the server counts!
    console.log('The JamJar is now online!')
    console.log(`Currently active in ${m_oClient.guilds.cache.size} servers!`);

    // update the server count
    m_nServerCount = m_oClient.guilds.cache.size;

    // register the slash commands with discord (global, may take a short while to appear)
    try
    {
        await m_oClient.application.commands.set(m_oClient.aoCommands.map(fCommand => fCommand.data.toJSON()));
        console.log(`Registered ${m_oClient.aoCommands.size} slash commands.`);
    }
    catch (oError)
    {
        console.error('Failed to register slash commands:', oError);
    }
});

// Get slash command interactions
m_oClient.on('interactionCreate', async (oInteraction) => 
{
    // only handle slash commands
    if (!oInteraction.isChatInputCommand())
        return;

    // update the server count
    m_nServerCount = m_oClient.guilds.cache.size;

    // get the command by name, ignore unknown commands
    const fCommand = m_oClient.aoCommands.get(oInteraction.commandName);
    if (!fCommand)
        return;

    // try and run the command
    try
    {
        await fCommand.execute(oInteraction, m_nServerCount);
        console.log(`${oInteraction.commandName} command activated!`);
    }

    // catch any errors
    catch (oError)
    {
        console.error(`${oInteraction.commandName} command failed:`, oError);

        // let the user know something went wrong
        const oReply = { content: 'There was an error running that command!', ephemeral: true };
        if (oInteraction.replied || oInteraction.deferred)
            await oInteraction.followUp(oReply).catch(() => {});
        else
            await oInteraction.reply(oReply).catch(() => {});
    }
});

// Must be last line of code. Login into discord bot.
m_oClient.login(process.env.BOT_TOKEN);
