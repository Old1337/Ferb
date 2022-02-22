const pupil = document.querySelectorAll(".inner-eye");

document.addEventListener("mousemove", (e) => {
	let x = e.clientX * 100 / window.innerWidth - 20;
	let y = e.clientY * 100 / window.innerHeight - 20;
    
    pupil.forEach(element => {
        element.style.left = x + "%";
        element.style.top = y + "%";
    })
	
})



