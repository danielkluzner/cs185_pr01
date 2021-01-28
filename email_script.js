document.addEventListener("DOMContentLoaded",
    function(event){
        
        function checkEmailFormat(event){
            var input = document.getElementById("email").value;
            var at_char = input.lastIndexOf("@");
            var com = input.indexOf(".edu");
            var edu = input.indexOf(".com");
            var message = "Invalid email address";

            // condition to check that there's at least 1 character between @ and .edu/.com
            // (com > at_char + 1 || edu > at_char + 1)

            if(at_char > 0 && (com == input.length - 4 || edu == input.length - 4)){
                message = "Email successfully recorded";
            }
            document.getElementById("submit-message").textContent = message;
        }

        document.getElementById("email-submit").addEventListener("click", checkEmailFormat);

    }
);