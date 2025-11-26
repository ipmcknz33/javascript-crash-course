function isLoggedInAndSubscribed(firstString, secondString) {
    return firstString === "LOGGED_IN" && secondString === "SUBSCRIBED";
    }
    
    console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED')); 
    console.log(isLoggedInAndSubscribed('LOGGED_IN','NOT_SUBSCRIBED')); 
    console.log(isLoggedInAndSubscribed('NOT_LOGGED_IN','SUBSCRIBED')); 



