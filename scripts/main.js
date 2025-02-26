document.getElementById("login").addEventListener("click",
    function(event){
        event.preventDefault();
        const number=document.getElementById("number").value;
        const password=getConvertedValue("password");
        if(number.length===11)
        {
            if(password===1234)
            {
                window.location.href="./main.html"

            }
            else
            {
                alert("password error");
            }
            
        }
        else{
            alert("number error");
        }
    }
)