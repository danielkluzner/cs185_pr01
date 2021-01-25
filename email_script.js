document.addEventListener("DOMContentLoaded",
    function(){
        
        function checkEmailFormat(){
            var input = document.getElementById("email").value;
            var at_char = input.lastIndexOf("@");
            var dot = input.lastIndexOf(".");
            var message = "Invalid email address";
            console.log(at_char);
            console.log(dot);
            console.log(input.length);
            if(at_char > 0 && dot > at_char + 1 && dot != input.length - 1){
                message = "Email successfully recorded";
            }
            document.getElementById("submit-message").textContent = message;
        }

        document.getElementById("email-submit").addEventListener("click", checkEmailFormat);

    }
);