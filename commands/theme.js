// LICENSE //
//--------------------------------------------------------------------------------------
// Copyright 2020 Thomas Wiltshire
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this 
// software and associated documentation files (the "ImposterBot"), to deal in the Software 
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
// Purpose: Display a full game idea, randoming grab a theme, genre and limitation from 
// file and send to discord.
//
// Author: Thomas Wiltshire
//--------------------------------------------------------------------------------------

module.exports = {
    
    // set name and desciption of command
    name: 'theme',
    description: "Generate a game idea theme!",
    
    // Execute the command
    execute(oMessage, chArgs, nServerCount)
    {
        //
        const fs = require('fs');
        const path = require('path');





        //
        let rawdataTheme = fs.readFileSync('./json-data/theme.json');
        let dataTheme = JSON.parse(rawdataTheme);





        //
        var themeArray = [];
        




        //
        for (let i in dataTheme)
        {
            // 
            themeArray.push
            ({  
                id: i,  
                name: dataTheme[i]  
            });
        }

        










        //
        var themeIndex = Math.floor(Math.random() * themeArray.length);



        // Send a message to the text channel
        oMessage.channel.send(
            {
                // Start embed message
                embed: 
                {
                    //
                    color: 7261139,
                    title: "Random Game Theme",
                    description: ":bulb: Theme: " + "`" + themeArray[themeIndex].name + "`"
                }
            }
        );





    }
}