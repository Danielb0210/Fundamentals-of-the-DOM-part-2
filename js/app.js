//Simple loop to make each of your friends to console log each line of the 99 lines song to the console.

// Create list of friends using simple array to store 5 friend's names
let friends = ['Daniel', 'Paul', 'Nick', 'Jessica', 'Mike'];

    //Create loop that cycles through list of friends names and logs them to the console before continuing onto next nested loop
    for (i = 0; i < friends.length; i++) {
        console.log(friends[i] + ':');

            //Create nested loop that cycles through each line of the song until the end
            for(j = 99; j >=3; j--) {
                console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file.');
            }
            
            //Add additional console log statement to catch last line of the song for each name to eliminate chance of (-1) value
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file.');
            console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.');
    }