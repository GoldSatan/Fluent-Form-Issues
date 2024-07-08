<section class="fluent_form">
	<iframe id="fluentform"  width="100%" style="min-height: 500px; border: none;" loading="lazy" src="https://taxcanada.accountant/?ff_landing=24&embedded=1" ></iframe>

	<script>
		/*
		 * This script listens for messages from the iframe and adjusts its height accordingly.
		 * Add this JS snippet with the iframe on the parent page.
		 */
		 window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'resize' && !isNaN(event.data.height)) {
                var iframe = document.getElementById('fluentform');
                var newHeight = event.data.height + 'px';
                if (iframe.style.height !== newHeight) {
                    iframe.style.height = newHeight;
                }
            }
        }, false);
		</script>
</section>
