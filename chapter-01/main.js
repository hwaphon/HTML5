/*
 * @Author: hwaphon
 * @Date:   2017-03-08 21:08:11
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-08 21:08:39
 */

window.onload = function() {
	var element = document.getElementById("join"),
		button = document.getElementById("join");

	element.addEventListener("click", function(event) {
		event.preventDefault();
		if (!button.classList.contains("success")) {
			button.classList.add("success");
		}
	}, false);
}