var moveStrong = document.querySelector ("strong") ;
function isInside (node, target) {
	for (; node != null ; node=node.parentNode)
		if (node==target) {
			return true;
		}
}
moveStrong.addEventListener("mouseover", function(event) {
	if (! isInside(event.relatedTarget, moveStrong)) {
		moveStrong.style.color = "red";
	}
}) ;
moveStrong.addEventListener("mouseout", function(event) {
	if (! isInside (event.relatedTarget, moveStrong)) {
		moveStrong.style.color = "";
}) ;
