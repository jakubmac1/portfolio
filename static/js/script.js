console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = static + '/default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = static + '/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = static + '/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = static + '/purple.css'
	}

	localStorage.setItem('theme', mode)
}

let toggleBtn = document.getElementById("toggleBtn");
let info = document.getElementById("info");

let toggle = false;

toggleBtn.addEventListener("click", () => {
    if (toggle) {
        info.style = 'transform: translateY(8rem);';
        toggleBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
        toggle = false;
    }   else {
        info.style = 'transform: translateY(0rem);';
        toggleBtn.innerHTML = '<i class="fas fa-arrow-down"></i>'
        toggle = true;
        }
       })