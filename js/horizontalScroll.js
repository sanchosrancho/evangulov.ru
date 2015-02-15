/*
 * The horizontal scrolling by mouse wheel
 * Alex Shevlyakov
 * http://sanchosrancho.com
 */
var HorizontalScroll = function(element) {
	if (!element) return;
	var horizontalScrollHandler = function (e, element) {
	    var event = e || window.event;

	    if (element.doScroll) 
			element.doScroll(event.wheelDelta>0?"left":"right");
		else if (event.wheelDelta > 0 || event.detail < 0)
			element.scrollLeft -= 60;
		else
			element.scrollLeft += 60;

	    return false;
	}
	
	if ("onmousewheel" in element) {
		element.onmousewheel = function(e) { horizontalScrollHandler(e, element); }
	} else {
		element.addEventListener("DOMMouseScroll", function(e) { horizontalScrollHandler(e, element); }, false);
	}
}