
document.addEventListener('DOMContentLoaded', function () {

    //Create button div to house start button
    let startDiv = document.createElement('div');
    startDiv.className = 'startDiv';
    document.body.appendChild(startDiv);

    //Create start button and append to button div
    let startButton = document.createElement('button');
    startButton.className = 'button';
    startButton.innerText = 'Sing!';
    startDiv.appendChild(startButton);

    let lyricsDiv = document.createElement('div');
    lyricsDiv.className = 'lyrics-div';
    document.body.appendChild(lyricsDiv);

    startButton.addEventListener('click', function () {


        let friends = ['Daniel', 'Paul', 'Nick', 'Jessica', 'Mike'];

        //Create loop that cycles through list of friends names and logs them to the console before continuing onto next nested loop
        for (i = 0; i < friends.length; i++) {

            let friendsDiv = document.createElement('div');
            friendsDiv.className = 'friends-div';
            let friendName = document.createElement('h3');
            friendName.className = 'friend-name';
            friendName.innerText = friends[i];
            friendsDiv.appendChild(friendName);
            let friendhr = document.createElement('hr');
            friendhr.className = 'hr';
            friendsDiv.appendChild(friendhr);
            lyricsDiv.appendChild(friendsDiv);

            //console.log(friends[i] + ':');

            //Create nested loop that cycles through each line of the song until the end
            for (j = 99; j >= 3; j--) {

                let lyrics = document.createElement('p');
                lyrics.className='lyrics';
                lyrics.innerText = j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.';
                friendsDiv.appendChild(lyrics);
            }

            //Add additional console log statement to catch last line of the song for each name to eliminate chance of (-1) value
            let lyrics = document.createElement('p');
            lyrics.className='lyrics';
            lyrics.innerText = j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file.';
            friendsDiv.appendChild(lyrics);

            let ending = document.createElement('p');
            ending.className='lyrics';
            ending.innerText = '1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.';
            friendsDiv.appendChild(ending);

        }



    });

});
