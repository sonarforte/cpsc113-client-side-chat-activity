"use strict";
console.log('You should see this log message in your console');

// Put all your code in this anonymous function, which is executed
// immediately; That way, we do not "pollute" the global namespace in
// our web browser.
//
(function(){
    
    var chats = [];

    // TODO #4: Write a function that adds `li` elements to the `ul`
    // element on the page that has `id="chats"`. This function takes
    // an integer `startIndex` that indicates where the new messages
    // in the `chats` variable start (ie. those that should be written
    // to the page).
    // 
    function updateDOM(startIndex)
    {
	    
    }

    // TODO #3: Write a function that requests an array of new chats
    // from the server at `/chats/LENGTH` where LENGTH is the 
    // latest chat number that you have locally plus one. When you
    // get new chats, push them onto the `chats` array variable (above)
    // and call `updateDOM` with the index of in that array where the
    // new chats start. When the request completes, call `fetchChatsFromServer`
    // should call itself again after a one or two second delay.
    // 
    function fetchChatsFromServer(){
    }
    

    // TODO #2: Write a function that takes a string and POSTs it
    // to the server at `/chats/`. You can send your data as either
    // 'application/x-www-form-urlencoded' or 'application/json;charset=UTF-8'.
    // See `index.js` to see how that request will be handled.
    // 
    function sendChatMessage(message)
    {
	     var httpRequest = new XMLHttpRequest();
	     var jsonmsg = { "message" : message};
	     httpRequest.open("POST", "http://localhost:3000/chats", true);
	     httpRequest.onreadystatechange = fetchChatsFromServer;
	     httpRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

		//chats.push(message);

	     httpRequest.send(JSON.stringify(jsonmsg));

    }
    
    // TODO #1: Add an event listener that listens for when a user
    // clicks on the submit button and then calls the `sendChatMessage`
    // function with the value of the text entered in the textbox.
    // 
    function startAcceptingUserChats(){

    }
    
    // This event is fired when all the content on the page
    // is loaded. It's like jQuery's `onReady` event, but it
    // is vanilla ECMAScript.
    //
    document.addEventListener("DOMContentLoaded", function() {
        console.log('The DOM is loaded!');
        startAcceptingUserChats();
        fetchChatsFromServer();
    });
    
})();

