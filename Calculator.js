  
  let op;
  function func(){
    let result;
      let Num1= Number(document.getElementById("Num1").value);
      let Num2= Number(document.getElementById("Num2").value);
      
      switch (op){
          case'+':
          result=Num1+Num2;
          break;
          case '-':
              result=Num1-Num2;
              break;
          case'*':
          result=Num1*Num2;
          break;
          case'/':
            if (Num2==0){
              alert("Hа ноль делить нельзя!");
              return;
            }
            result=Num1/Num2;
          break;
      }
document.getElementById("result").innerHTML=result;
  }
  
  
  
  
  
  

         