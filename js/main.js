document.addEventListener("DOMContentLoaded", function() {
	const secondHand = document.querySelector('.second-hand');
	const minsHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

  	function setDate(x = 0) {
	    const now = new Date();

	 	const seconds = now.getSeconds();
	 	const secondsDegrees = ((seconds / 60) * 360) + 90;
	    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	    const mins = now.getMinutes();
	    const minsDegrees = ((mins / 60) * 360) + 90;
	    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	    const hours = now.getHours();
	    const hourDegrees = ((hours / 12) * 360) + 90 + (x * 30);
	    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  	}

	let currentInterval = setInterval(function(){setDate()}, 1000);

	function setDefaultButtonColor(array) {
		for( let i = 0; i < array.length; i ++ ) {
	  		array[i].style.backgroundColor = "grey";
	  		array[i].style.opacity = "0.7";
	  	}
	}

  	const timeZonesButtons = document.querySelectorAll('button');

  	for( let i = 0; i < timeZonesButtons.length; i++ ){
  		timeZonesButtons[i].addEventListener('click', handleClick);
  	}

	function handleClick() {
	  	clearInterval(currentInterval);
		document.body.style.backgroundImage = `url("${this.dataset.url}")`;
	  	setDefaultButtonColor(timeZonesButtons);
	  	this.style.backgroundColor = "green";
	  	this.style.opacity = "1";
	  	currentInterval = eval(`${this.dataset.interval}`);
	}
});


