Vue.config.devtools = true;
document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');
	var root = new Vue(
		{
			el: '#root',
			data: {
				hello: "ciao",
			},

			methods: {

			},
			compiuted:{
				
			},

			created: function () {
			}
		}
	);
});
