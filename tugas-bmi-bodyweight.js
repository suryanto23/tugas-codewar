









function bmi(weight, height) {
   
    let body = weight / (height * height);

    if (body <= 18.5){
            return "Underweight";
        } else if (body <= 25.0) {
            return "Normal";
        } else if (body <= 30.0) {
            return "Overweight";
        } else if (body > 30) {
            return "Obese";

    };

}


console.log(  bmi(80 , 1.80)    );