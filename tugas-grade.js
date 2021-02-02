function getGrade (s1, s2, s3) {
    // Code here
    
    
   let a = (s1 + s2 + s3) / 3
  
  if( a >= 90 ){
      return "A";
  } else if ( a >= 80){
      return "B";
  } else if ( a >= 70){
      return "C";
  } else if ( a >= 60){
      return "D";
  } else if ( a <= 59){
      return "F";
  };
    
  }