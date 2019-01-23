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
	var bodyclasses = document.body.classList
	if (bodyclasses.contains("post")) {
		bodyclasses.toggle("expanded")

		if (bodyclasses.contains("finished")) {
			bodyclasses.remove("finished")
		} else {
			setTimeout(() => {
				bodyclasses.add("finished")
			}, 700)
		}
	}
}

function toggleDarkTheme() {
	document.body.classList.toggle("dark")
	var d = new Date();
	d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = "dark" + "=" + document.body.classList.contains("dark") + ";" + expires + ";path=/";
}

// Set Theme by URL
var themeUnchecked = getParameterByName('d')
//Theme parameter will remain unchecked. May be possible to do some fun things.
document.body.classList.toggle(themeUnchecked)


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
	$("body").removeClass("expanded")
	$(".aosout").toggleClass("aos-animate")
	$(".shortlink").addClass("mobilefadeout")
})

$("a.preview").click(function () {
	$("#content").addClass("moveup")
	$(".sidebar-nav").addClass("mobilefadeout")
	$(".lead").addClass("mobilefadeout")
})

$("a.back").click(function() {
	$("#content").addClass("movedown")
})


AOS.init({
	duration: 300,
	once: true,
	disable: "mobile"
})

$(document).on("keypress", function (e) {
	var tag = e.target.tagName.toLowerCase()
	if (e.which == 102 && tag != 'input' && tag != 'textarea') {
		toggleExpandedContent()
	} else if (e.which === 100 && tag != 'input' && tag != 'textarea') {
		toggleDarkTheme()
	}
})

// Parse the URL parameter
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}