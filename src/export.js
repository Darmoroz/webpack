const bred = 45;
let baron = 'alfa';

function sum(a, b) {
	console.log(a + b);
}
function run() {
	console.log('функція із модуля запущена');
}

export let i = 0;
export { bred, baron, sum, run };
