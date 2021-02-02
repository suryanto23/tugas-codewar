


function solve(s){

    let panjang = s.length

    console.log(panjang);



    for (let i=0 ; i < s.length/2 ; i++){

                if(  s[i].charCodeAt() + 2 == s[panjang-(i+1)].charCodeAt() ||  s[i].charCodeAt() - 2 == s[panjang-(i+1)].charCodeAt() || s[i].charCodeAt() == s[panjang-(i+1)].charCodeAt()  ){           

                } else {
                    return false;
                }

    };

    return true;

};



   console.log(solve("abbe"));
