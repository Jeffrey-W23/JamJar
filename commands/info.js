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
// Purpose: Post a message with some basic bot information.
//
// Author: Thomas Wiltshire
//--------------------------------------------------------------------------------------

// const discord object for the discord js module
const m_oDiscord = require('discord.js');

// const for discord client object
const m_oClient = new m_oDiscord.Client();

module.exports = {
    
    // set name and desciption of command
    name: 'info',
    description: "Post a message with some basic bot information.",
    
    // Execute the command
    execute(oMessage, chArgs, nServerCount)
    {
        // Send a message to the text channel
        oMessage.channel.send(
            {
                // Start embed message
                embed: 
                {
                    // set the color, title and description of the embed
                    color: 7291139,
                    title: "About the Jam Jar",
                    description: "Created from boredom and a need for inspiration in games development, The JamJar is a Discord bot designed to help Game developers and Game Jam enthusiasts easily generate game ideas or themes for inspiration or motivation in their development. No need to think or use external sites, generate a random game idea right in discord with your team.\n\u200B\n\ Check it out: [thomaswiltshire.com](https://thomaswiltshire.com/pages/jamjar.html)\n\u200B\n\ List of all available commands for use with the JamJar Bot are found using the ?help command!\n\u200B\n\ " + "Currently active in " + nServerCount + " servers!",
                    
                    // footer image from the bot website
                    image: 
                    {
                        url: "https://thomaswiltshire.com/images/bottitle2.png"
                    },
                }
            }
        );
    }
}