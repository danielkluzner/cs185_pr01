document.addEventListener("DOMContentLoaded",
    function(event){

        const images = document.getElementsByTagName("img");
        for(let image of images){
            image.addEventListener("click",
                function(event){
                    document.getElementById("overlay").style.opacity = "1";
                    document.getElementById("overlay").style.zIndex = "1000";
                    document.getElementById("overlay").src = image.src;
                    document.getElementById("lightbox").style.zIndex = "999";
                    document.getElementById("lightbox").style.opacity = "0.9";
                }
            );
        }

        document.getElementById("lightbox").addEventListener("click",
            function(event){
                document.getElementById("overlay").style.opacity = "0";
                document.getElementById("overlay").style.zIndex = "-1000";
                this.style.zIndex = "-1001";
                this.style.opacity = "0";
            }
        );

        // source: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
        // for getting page height
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight);

        // source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        // used for going back to the top of page
        document.getElementById("back_to_top_bttn").addEventListener("click",
            function(event) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );

        window.addEventListener("scroll",
            function(event){
                if (document.body.scrollTop > height/4 || document.documentElement.scrollTop > height/4) {
                    document.getElementById("back_to_top_bttn").style.display = "flex";
                } else {
                    document.getElementById("back_to_top_bttn").style.display = "none";
                }
            }
        );
    }
);