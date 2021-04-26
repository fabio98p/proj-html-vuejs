Vue.config.devtools = true;
import similAxsios from "./partial_js/_data.js"
import cardNumber from "./partial_js/_data.js"
import cardService from "./partial_js/_data.js"
import ulService from "./partial_js/_data.js"
import cardCourses from "./partial_js/_data.js"
import cardAbout from "./partial_js/_data.js"
import logosAbout from "./partial_js/_data.js"
import cardBlog from "./partial_js/_data.js"
import cardHelp from "./partial_js/_data.js"
import footerInfo from "./partial_js/_data.js"
document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');
	var root = new Vue(
		{
			el: '#root',
			data: {
				navbarAnchor: similAxsios.navbarAnchor,
				cardNumber: similAxsios.cardNumber,
				cardService: similAxsios.cardService,
				ulService: similAxsios.ulService,
				cardCourses: similAxsios.cardCourses,
				cardAbout: similAxsios.cardAbout,
				logosAbout: similAxsios.logosAbout,
				cardBlog: similAxsios.cardBlog,
				cardHelp: similAxsios.cardHelp,
				logosSocial: similAxsios.logosSocial,
				footerInfo: similAxsios.footerInfo,
			},

			methods: {

			},
			compiuted:{
				
			},

			created: function () {
				console.log(this.navbarAnchor);
			}
		}
	);
});
