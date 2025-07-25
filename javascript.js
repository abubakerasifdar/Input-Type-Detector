 
      document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })

        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
            }
        })
         function myFunction(){
            let input = document.getElementById("input").value;
            let result;
            let uppercase = "uppercase";
            let lowercase = "lowercase";
            let digit = 1;
            let symbol = "@";
            if(input == uppercase){
               result = `Your have Entered ${input} which is Uppercase Character `
               document.getElementById('output').style.background = "orange";
            }
            else if(input == lowercase){
                result = `Your have Entered ${input} which is LowerCase Character `
                document.getElementById('output').style.background = "green";

            }
            else if(input == digit){
                result = `Your have Entered ${input} which is Digits. `
                document.getElementById('output').style.background = "black";

            }
            else if(input == symbol){
                result = `Your have Entered ${input} which is Symbol.`
                document.getElementById('output').style.background = "brown";

            }
            else{
                result = "Please Entered Something Valid"
                document.getElementById('output').style.background = "red";
            }
            document.getElementById("output").style.display = "flex";
             document.getElementById("output").innerHTML = result;
         }
