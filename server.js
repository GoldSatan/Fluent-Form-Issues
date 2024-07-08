window.onload = function() {
        /*
         * This script sends the height of the iframe content to the parent page.
         * Include this snippet inside the form custom JS within the iframe.
         */
        
        function sendHeightToParent() {
            var height = document.documentElement.scrollHeight || document.body.scrollHeight;
            window.parent.postMessage({type: 'resize', height: height}, '*');
        }
        
        // Send the height initially when the page loads
        // window.onload = sendHeightToParent;
        sendHeightToParent();
        // Send the height whenever the window is resized
        window.onresize = sendHeightToParent;
        
        // Send the height when the DOM content is fully loaded
        document.addEventListener('DOMContentLoaded', sendHeightToParent);
        
        // Add event listeners to the buttons to send height on click
        document.addEventListener('click', function(event) {
            if (event.target.matches('.ff-btn-prev, .ff-btn-next, .ff-btn-submit')) {
                sendHeightToParent();
            }
        });
        
        var form = document.querySelector('.ff_landing_form form');
        
        form.addEventListener('change', function(event) {
            if (event.target.matches('div, label, p, span, *, input[type="radio"], input[type="checkbox"], input[type="text"], input[type="number"], input[type="date"], input[type="time"], input[type="email"], input[type="url"], input[type="password"], input[type="file"], input[type="color"], input[type="range"], input[type="search"], input[type="tel"]')) {
                sendHeightToParent();
            }
        });
        form.addEventListener('input', function(event) {
            if (event.target.matches('div, label, p, span, *, input[type="radio"], input[type="checkbox"], input[type="text"], input[type="number"], input[type="date"], input[type="time"], input[type="email"], input[type="url"], input[type="password"], input[type="file"], input[type="color"], input[type="range"], input[type="search"], input[type="tel"]')) {
                sendHeightToParent();
            }
        });
        form.addEventListener('click', function(event) {
            if (event.target.matches('div, label, p, span, *, input[type="radio"], input[type="checkbox"], input[type="text"], input[type="number"], input[type="date"], input[type="time"], input[type="email"], input[type="url"], input[type="password"], input[type="file"], input[type="color"], input[type="range"], input[type="search"], input[type="tel"]')) {
                sendHeightToParent();
            }
        });
        
        form.addEventListener('click', function(event) {
            sendHeightToParent();
        });
        form.addEventListener('scroll', function(event) {
            sendHeightToParent();
        });
       
	}


}
