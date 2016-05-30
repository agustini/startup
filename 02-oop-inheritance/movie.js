class Movie {

	constructor(title, year, duration) {
		this.title = title;
		this.year = year;
		this.duration = duration;
	}

	play(){
		console.log(this.title + ": Play");
	}

	pause(){
		console.log(this.title + ": Pause");
	}

	resume(){
		console.log(this.title + ": Resume");
	}
}
