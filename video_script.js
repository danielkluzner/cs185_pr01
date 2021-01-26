document.addEventListener("DOMContentLoaded",
    function(event){

        // source: https://stackoverflow.com/questions/5235145/changing-source-on-html5-video-tag/5371478#5371478
        // ONLY FOR THE setAttribute() line.
        const vids = document.getElementsByClassName("child");
        for(let vid of vids){
            vid.addEventListener("click",
                function(event){
                    event.preventDefault();
                    var overlay = document.getElementById("overlay");
                    overlay.setAttribute("src", vid.getElementsByTagName("video")[0].getElementsByTagName("source")[0].src);
                    overlay.style.opacity = "1";
                    overlay.style.zIndex = "1000";
                    document.getElementById("lightbox").style.zIndex = "999";
                    document.getElementById("lightbox").style.opacity = "0.9";
                }
            );
        }

        document.getElementById("overlay").addEventListener("click",
            function(event){
                event.preventDefault();
            }
        );

        // source: https://gist.github.com/cferdinandi/9044694
        function stopVideo(){
            var iframe = document.querySelector('#overlay');
            var video = document.querySelector('video');
            if(iframe){
                var iframeSrc = iframe.src;
                iframe.src = iframeSrc;
            }
            if(video){
                video.pause();
            }
        }

        document.getElementById("lightbox").addEventListener("click",
            function(event){
                document.getElementById("overlay").style.opacity = "0";
                document.getElementById("overlay").style.zIndex = "-1001";
                this.style.zIndex = "-1000";
                this.style.opacity = "0";
                stopVideo();
            }
        );

    }
);