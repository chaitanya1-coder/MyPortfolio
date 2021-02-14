const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Programmer",
				weight: 12.3
			}, {
				text: "Freelancer",
				weight: 8
			}, {
				text: "Web-Devloper",
				weight: 14
			}, {
				text: "Full-Stack",
				weight: 5
			}, {
				text: "Coder",
				weight: 7
			}, {
				text: "Mentor",
				weight: 10
			}, {
				text: "Content Writer",
				weight: 9
			}, {
				text: "CHAITANYA",
				weight: 15
			}, {
				text: "Creative",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Front-End Web Developer.", "am a freelancer.", "also teach.","am a Content Writer.","love to solve problems and give solutions."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#308fe8"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
