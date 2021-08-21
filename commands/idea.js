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
// Purpose: Randomly grab and display a game theme, genre and limitation from file and 
// send to discord.
//
// Author: Thomas Wiltshire
//--------------------------------------------------------------------------------------

module.exports = {
    
    // set name and desciption of command
    name: 'idea',
    description: "Generate a game idea, including theme, genre and limitations!",
    
    // Execute the command
    execute(oMessage, chArgs, nServerCount)
    {
        // Get json files
        const fs = require('fs');
        const path = require('path');

        // theme file
        let rawdataTheme = fs.readFileSync('./json-data/theme.json');
        let dataTheme = JSON.parse(rawdataTheme);

        // genre file
        let rawdataGenre = fs.readFileSync('./json-data/genre.json');
        let dataGenre = JSON.parse(rawdataGenre);

        // limit file
        let rawdataLimit = fs.readFileSync('./json-data/limit.json');
        let dataLimit = JSON.parse(rawdataLimit);

        // create arrays for each json data
        var themeArray = [];
        var genreArray = [];
        var limitArray = [];  
        
        // Loop through theme data
        for (let i in dataTheme)
        {
            // push it to the arry
            themeArray.push
            ({  
                id: i,  
                name: dataTheme[i]  
            });
        }

        // Loop through genre data
        for (let i in dataGenre)
        {
            // push it to the array
            genreArray.push
            ({  
                id: i,  
                name: dataGenre[i]  
            });
        }

        // Loop through limit data
        for (let i in dataLimit)
        {
            // push it to the array
            limitArray.push
            ({  
                id: i,  
                name: dataLimit[i]  
            });
        }

        // Generate a random number based on each array size
        var themeIndex = Math.floor(Math.random() * themeArray.length);
        var genreIndex = Math.floor(Math.random() * genreArray.length);
        var limitIndex = Math.floor(Math.random() * limitArray.length);

        // Send a message to the text channel
        oMessage.channel.send(
            {
                // Start embed message
                embed: 
                {
                    // Get data from each array based on random number index
                    color: 7291139,
                    title: "Random Game Idea",
                    description: ":bulb: Theme: " + "`" + themeArray[themeIndex].name + "`" + "\n\u200B\n\ :musical_note: Genre: " + "`" + genreArray[genreIndex].name + "`" + "\n\u200B\n\ :hourglass: Limitation: " + "`" + limitArray[limitIndex].name + "`"
                }
            }
        );
    }
}