// MAIN PART FOR THE VIDEO AND PLAY BUTTON

const videoContainer = document.getElementById("video-container");
const playButton = document.getElementById("play-button");

videoContainer.addEventListener("mousemove", function (event) {
	const containerRect = videoContainer.getBoundingClientRect();
	const mouseX = event.clientX - containerRect.left;
	const mouseY = event.clientY - containerRect.top;

	const buttonWidth = playButton.offsetWidth;
	const buttonHeight = playButton.offsetHeight;
	const buttonX = mouseX - buttonWidth / 2;
	const buttonY = mouseY - buttonHeight / 2;

	const maxButtonX = containerRect.width - buttonWidth;
	const maxButtonY = containerRect.height - buttonHeight;
	playButton.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
	playButton.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
});

videoContainer.addEventListener("mouseleave", function () {
	setTimeout(function () {
		playButton.style.left = "50%";
		playButton.style.top = "50%";
		playButton.style.transform = "translate(-50%, -50%) scale(1)";
		playButton.style.transition = "all 0.3s ease-out";
	}, 50);
});

videoContainer.addEventListener("mouseover", function () {
	playButton.style.transition = "transform ease-out 0.3s";
	playButton.style.transform = "scale(1.2)";
});

const video = document.getElementById("video");

videoContainer.addEventListener("mouseenter", function () {
	if (!video.paused) {
		playButton.style.opacity = "1";
	}
});

videoContainer.addEventListener("mouseleave", function () {
	if (!video.paused) {
		playButton.style.opacity = "0";
		playButton.style.transition = "opacity ease 1s";
	}
});

videoContainer.addEventListener("click", function () {
	if (video.paused) {
		video.play();
		playButton.innerHTML =
			'<span class="pause-icon"><i class="fa fa-solid fa-pause"></i></span>';
	} else {
		video.pause();
		playButton.innerHTML =
			'<span class="play-icon"><i class="fa fa-solid fa-play"></i></span>';
	}
});

video.addEventListener("ended", function () {
	playButton.innerHTML =
		'<span class="play-icon"><i class="fa fa-solid fa-play"></i></span>';
	playButton.style.opacity = "1";
});

// END OF MAIN PART FOR THE VIDEO AND PLAY BUTTON

// Optional - Code for inputting video
const videoSource = document.getElementById("video-source");
const videoUrl = document.getElementById("video-url");
const loadButton = document.getElementById("load-button");

function loadVideo() {
	const url = videoUrl.value.trim();
	if (!url) return;
	videoSource.setAttribute("src", url);
	video.load();
	video.play();
}
let container = document.getElementById('container');
let count = 50;
for(var i = 0; i<50; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}
loadButton.addEventListener("click", function () {
	loadVideo();
	video.play();
	playButton.innerHTML =
		'<span class="pause-icon"><i class="fa fa-solid fa-pause">	</i></span>';
	playButton.style.opacity = "0";
	playButton.style.transition = "opacity ease 1s";
});
