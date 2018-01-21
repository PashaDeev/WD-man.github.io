var link1 = document.querySelector('.tile-left li:nth-of-type(4)');
var popup1 = document.querySelector('.modal-page');
var video1 = document.querySelector('.modal-page video');
var close1 = document.querySelector('.modal-page button');

link1.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup1.classList.add('show-modal');
});

close1.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup1.classList.remove('show-modal');
	video1.setAttribute('src', "Video/Video_1.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup1.classList.contains('show-modal')) {
			popup1.classList.remove('show-modal');
			video1.setAttribute('src', "Video/Video_1.mp4");
		}
	}
});




var link2 = document.querySelector(".tile-right .link-box a");
var video2 = document.querySelector(".modal-page:nth-of-type(2) video");
var popup2 = document.querySelector(".modal-page:nth-of-type(2)");
var close2 = document.querySelector(".modal-page:nth-of-type(2) button");

link2.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup2.classList.add("show-modal");
});

close2.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup2.classList.remove("show-modal");
	video2.setAttribute('src', "Video/Video_2.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup2.classList.contains("show-modal")) {
			popup2.classList.remove("show-modal");
			video2.setAttribute('src', "Video/Video_2.mp4");
		}
	}
});




var link3 = document.querySelector(".tile-right .link-box a:nth-of-type(2)");
var popup3 = document.querySelector(".modal-page:nth-of-type(3)");
var video3 = document.querySelector(".modal-page:nth-of-type(3) video");
var close3 = document.querySelector(".modal-page:nth-of-type(3) button");

link3.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup3.classList.add("show-modal");
});

close3.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup3.classList.remove("show-modal");
	video3.setAttribute('src', "Video/Video_3.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup3.classList.contains("show-modal")) {
			popup3.classList.remove("show-modal");
			video3.setAttribute('src', "Video/Video_3.mp4");
		}
	}
});




var link4 = document.querySelector(".tile-left .link-box a");
var popup4 = document.querySelector(".modal-page:nth-of-type(4)");
var video4 = document.querySelector(".modal-page:nth-of-type(4) video");
var close4 = document.querySelector(".modal-page:nth-of-type(4) button");

link4.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup4.classList.add("show-modal");
});

close4.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup4.classList.remove("show-modal");
	video4.setAttribute('src', "Video/Video_4.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup4.classList.contains("show-modal")) {
			popup4.classList.remove("show-modal");
			video4.setAttribute('src', "Video/Video_4.mp4");
		}
	}
});




var link5 = document.querySelector(".tile-left .link-box a:nth-of-type(3)");
var popup5 = document.querySelector(".modal-page:nth-of-type(5)");
var video5 = document.querySelector(".modal-page:nth-of-type(5) video");
var close5 = document.querySelector(".modal-page:nth-of-type(5) button");

link5.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup5.classList.add("show-modal");
});

close5.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup5.classList.remove("show-modal");
	video5.setAttribute('src', "Video/Video_5.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup5.classList.contains("show-modal")) {
			popup5.classList.remove("show-modal");
			video5.setAttribute('src', "Video/Video_5.mp4");
		}
	}
});




var link6 = document.querySelector(".tile-left .link-box a:nth-of-type(2)");
var popup6 = document.querySelector(".modal-page:nth-of-type(6)");
var video6 = document.querySelector(".modal-page:nth-of-type(6) video");
var close6 = document.querySelector(".modal-page:nth-of-type(6) button");

link6.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup6.classList.add("show-modal");
});

close6.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup6.classList.remove("show-modal");
	video6.setAttribute('src', "Video/Video_6.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup6.classList.contains("show-modal")) {
			popup6.classList.remove("show-modal");
			video6.setAttribute('src', "Video/Video_6.mp4");
		}
	}
});




var link7 = document.querySelector(".tile-left .link-box a:nth-of-type(4)");
var popup7 = document.querySelector(".modal-page:nth-of-type(7)");
var video7 = document.querySelector(".modal-page:nth-of-type(7) video");
var close7 = document.querySelector(".modal-page:nth-of-type(7) button");

link7.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup7.classList.add("show-modal");
});

close7.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup7.classList.remove("show-modal");
	video7.setAttribute('src', "Video/Video_7.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup7.classList.contains("show-modal")) {
			popup7.classList.remove("show-modal");
			video7.setAttribute('src', "Video/Video_7.mp4");
		}
	}
});


var link8 = document.querySelector(".second-box .link-box a");
var popup8 = document.querySelector(".modal-page:nth-of-type(8)");
var video8 = document.querySelector(".modal-page:nth-of-type(8) video");
var close8 = document.querySelector(".modal-page:nth-of-type(8) button");

link8.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup8.classList.add("show-modal");
});

close8.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup8.classList.remove("show-modal");
	video8.setAttribute('src', "Video/Video_8.mp4");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup8.classList.contains("show-modal")) {
			popup8.classList.remove("show-modal");
			video8.setAttribute('src', "Video/Video_8.mp4");
		}
	}
});

// var show = document.querySelector(".show-modal");

// window.addEventListener("keydown", function(evt) {
// 	if (evt.keyCode === 27) {
// 		show.classList.remove(".show-modal");
// 	}
// });