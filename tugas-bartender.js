







function getDrinkByProfession(param){


    let vip = [
            ["jabroni" , "Patron Tequila"],
            ["school counselor" , "Anything with Alcohol"],
            ["programmer" , "Hipster Craft Beer"],
            ["bike gang member" , "Moonshine"],
            ["politician" , "Your tax dollars"],
            ["rapper" , "Cristal"]
             ];


    for (let i=0 ; i < vip.length ; i++){
        
            if (vip[i][0] == param.toLowerCase()){
                console.log("true");
                return vip[i][1];
            };

     };


    return "Beer";

};

console.log(getDrinkByProfession("school conselor")); 
