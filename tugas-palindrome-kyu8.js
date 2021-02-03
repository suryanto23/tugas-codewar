


function palindrome(n){


    let x = n.toString().toLowerCase();

    for(let i=0 ; i < x.length/2 ; i++){

        if( x[i] == x[x.length-(i+1)] ){

        } else {
            return false;
        };

    };

    return true

};


console.log(palindrome("anna"));