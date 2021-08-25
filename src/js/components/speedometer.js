function percentCalculate() {
	let checkboxes = document.querySelectorAll('.field-checkbox input');
	let checked = 0;
	let checkboxesLength = checkboxes.length;

	checkboxes.forEach((checkbox) => {
		if (checkbox.checked) {
			checked++;
		}
	});

	return 100 / (checkboxesLength / checked);
}

function angleCalculation() {
	let percent = percentCalculate();

	return percent / 100 * 180 - 90;
}

function numberChange() {
	const numElement = document.querySelector('.js-num');
	const percent = percentCalculate();
	const num = percent / 100 * 1000;

	numElement.innerHTML = Math.round(num);
}

function percentInit() {
	let angle = angleCalculation();

	document.querySelector('.skills__arrow').style.transform = `translateX(-50%) rotate(${angle}deg)`;
}

percentInit();
numberChange();

function init() {
	let checkboxContainer = document.querySelector('.field-checkbox');
	checkboxContainer.addEventListener('change', (event) => {
		let checkbox = event.target.closest('.field-checkbox__name');

		if (!checkbox) {
			return;
		}
		event.preventDefault();

		let angle = angleCalculation();

		document.querySelector('.js-arrow').style.transform = `translateX(-50%) rotate(${angle}deg)`;
		numberChange();
	});
}

export default {
	init,
};
