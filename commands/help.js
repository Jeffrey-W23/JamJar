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
// Purpose: List all commands avalible for the bot to the user.
//
// Author: Thomas Wiltshire
//--------------------------------------------------------------------------------------

module.exports = {
    
    // set name and desciption of command
    name: 'help',
    description: "List all commands avalible for the bot to the user.",
    
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
                    title: "JamJar Help",
                    description: "List of all available commands for use with the JamJar Bot are below! (Some commands may require the role of Moderator)\n\u200B\n\ ",

                    // create text fields for all the different bot commands
                    fields: 
                    [
                        // help new command
                        {
                            name: "Help",
                            value: "?help: List of all available commands for use with the JamJar Bot!\n\u200B"
                        },

                        // info new command
                        {
                            name: "Info",
                            value: "?info: An about section (Readme) on the JamJar Bot, detailing its purpose, origin and a link to where it can be download/installed.\n\u200B"
                        },

                        // ping command
                        {
                            name: "Ping",
                            value: "?ping: Sends a message to the JamJar Bot, if received the bot will send one back. Perfect for checking if the bot is online.\n\u200B"
                        },

                        // idea command
                        {
                            name: "Idea",
                            value: "?idea: Generates a random idea with a theme, genre and limitation and returns it to the discord chat.\n\u200B"
                        },

                        // theme command
                        {
                            name: "Theme",
                            value: "?theme: Generates a random game theme and returns it to the discord chat.\n\u200B"
                        },

                        // genre command
                        {
                            name: "Genre",
                            value: "?genre: Generates a random game genre and returns it to the discord chat.\n\u200B"
                        },

                        // limit command
                        {
                            name: "Limitation",
                            value: "?limit: Generates a random development limitation and returns it to the discord chat.\n\u200B"
                        }
                    ],
                }
            }
        );
    }
}