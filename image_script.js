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

    }
);