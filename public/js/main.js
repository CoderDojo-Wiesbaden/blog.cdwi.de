document.getElementById("pulltab").classList.remove("invisible");
if (document.body.classList.contains("post"))
	document.getElementById("expand-icon").classList.remove("invisible");

function fixHoverState() {
	var el = this
	var par = el.parentNode
	var next = el.nextSibling
	par.removeChild(el)
	setTimeout(function () { par.insertBefore(el, next); }, 0)
}

function toggleExpandedContent() {
	document.body.classList.toggle("expanded")
}


$(document).ready(function () {

	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

$("a").click(function () {
	$(".fadeout").toggleClass("active")
	$(".fadeupsmall").toggleClass("active")
	$(".aosout").toggleClass("aos-animate")
});


AOS.init({
	duration: 300,
	once: true,
	disable: "mobile"
});