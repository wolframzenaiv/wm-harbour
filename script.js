function dirsetquery() {window.location.href = 'query.html';}
function dirsetartmirror() {window.location.href = 'art.html'}
function dirsettales() {window.location.href = 'tales.html'}
function dirsetdir() {window.location.href = 'directories.html'}
function dirsetcode() {window.location.href = 'code.html'}
function dirsetinventory() {window.location.href = 'inventories.html'}
function dirsetcommission() {window.location.href = 'commission.html'}


function linkextyoutube() {window.open('https://www.youtube.com/@ivysgarden7746', '_blank');}
function linkextbsky() {window.open('https://bsky.app/profile/wolframzena.bsky.social', '_blank');}
function linkexte621() {window.open('https://e621.net/posts?tags=evelyn_ivy', '_blank');}
function linkextfuraffinity() {window.open('https://www.furaffinity.net/user/wolframzena', '_blank');}
function linkextetsy() {window.open('https://www.etsy.com/shop/WolfMountainAsylum', '_blank');}



	
document.querySelectorAll('.toggleLink').forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault(); // Prevent the default behavior of the anchor tag
			const hiddenText = link.nextElementSibling;
				if (hiddenText && hiddenText.tagName === 'P2') {
					if (hiddenText.style.display === 'none' || hiddenText.style.display === '') { 
						hiddenText.style.display = 'block';
					} else {
						hiddenText.style.display = 'none';
					}
				}
			});
		});
function filterResults() {
	// Get the input value
	const input = document.getElementById('searchInput').value.toLowerCase();
	// Get the list of items
	const items = document.getElementById('searchResults').getElementsByTagName('li');

	// Loop through all list items and hide those that don't match the search query
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const text = item.textContent || item.innerText;
		if (text.toLowerCase().indexOf(input) > -1) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
    const triggerImages = document.querySelectorAll('.triggerImage');
    const popover = document.getElementById('popover');
    const popoverImage = document.getElementById('popoverImage');
    const popoverText = document.getElementById('popoverText');
    let currentImage = null;

    triggerImages.forEach(image => {
        image.addEventListener('click', function() {
            if (currentImage && currentImage !== image) {
                popover.style.display = 'none';
            }

            if (popover.style.display === 'block' && currentImage === image) {
                popover.style.display = 'none';
                currentImage = null;
            } else {
                popover.style.display = 'block';
                popoverText.textContent = image.getAttribute('data-popover');
                popoverImage.src = image.getAttribute('data-image');
                popoverImage.alt = image.alt;
                currentImage = image;

                // Position the pop-over near the image
                const imageRect = image.getBoundingClientRect();
                popover.style.top = `${imageRect.bottom + window.scrollY}px`;
                popover.style.left = `${imageRect.left + window.scrollX}px`;
            }
        });
    });

    // Close the pop-over if the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!Array.from(triggerImages).some(image => image.contains(event.target)) && !popover.contains(event.target)) {
            popover.style.display = 'none';
            currentImage = null;
        }
    });
});


