function outer(){
    let a = "";
    let b = "";
    console.log(a + b);
    function inner(a , b) {
        a = "string";
        b = "cat"; 
        console.log(a + b);
    }

    inner(a , b);
    console.log(a + b);
  }
  
  outer();