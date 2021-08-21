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
// Purpose: Randomly grab and display a game genre from file and send to discord.
//
// Author: Thomas Wiltshire
//--------------------------------------------------------------------------------------

module.exports = {
    
    // set name and desciption of command
    name: 'genre',
    description: "Generate a random game genre!",
    
    // Execute the command
    execute(oMessage, chArgs, nServerCount)
    {
        // Get json file
        const fs = require('fs');
        const path = require('path');
        let rawdataGenre = fs.readFileSync('./json-data/genre.json');
        let dataGenre = JSON.parse(rawdataGenre);

        // create array for json data
        var genreArray = [];
        
        // Loop through genre data
        for (let i in dataGenre)
        {
            // push it to the arry
            genreArray.push
            ({  
                id: i,  
                name: dataGenre[i]  
            });
        }

        // Generate a random number based on array size
        var genreIndex = Math.floor(Math.random() * genreArray.length);

        // Send a message to the text channel
        oMessage.channel.send(
            {
                // Start embed message
                embed: 
                {
                    // Get data from array based on random number index
                    color: 7291139,
                    title: "Random Game Genre",
                    description: ":musical_note: Genre: " + "`" + genreArray[genreIndex].name + "`"
                }
            }
        );
    }
}