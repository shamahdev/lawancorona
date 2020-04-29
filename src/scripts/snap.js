const float = document.querySelector('.btn-float');
let windowWidth = window.innerWidth;
float.style.top = '75%';
float.style.left = float.style.left = `${windowWidth - 40}px`;


window.addEventListener('resize', _ => { 
    windowWidth = window.innerWidth;
    float.style.top = '75%';
	float.style.left = float.style.left = `${windowWidth - 40}px`;
});
const move = e => {
	float.classList.add("move");
	float.style.top = e.clientY + 'px';
	float.style.left = e.clientX + 'px';
	float.removeAttribute("data-target", "#aboutModal");
};

float.addEventListener('mousedown', _ => {
	window.addEventListener('mousemove', move);
	float.style.transition = 'none';
	if(!float.classList.contains("move")){
		float.setAttribute("data-target", "#aboutModal");
	}
});

float.addEventListener('mouseup', e => {
	window.removeEventListener('mousemove', move);
	snapToSide(e);
	float.style.transition = '0.3s ease-in-out left';
});

const snapToSide = e => {
	const currentPosition = e.clientX;
	if (currentPosition < windowWidth / 2) {
		float.style.left = 20 + 'px';
	} else {
		float.style.left = `${windowWidth - 40}px`;
	}
	window.setTimeout(float.classList.remove("move"), 3000);
};