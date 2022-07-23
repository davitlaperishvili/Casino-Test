import "select2";
// import 'magnific-popup';

import hamburderMenu from "./libs/hamburger_menu.js";
import formFunctions from "./libs/form_functions.js";
import additionalFunctions from "./libs/additional_functions.js";
import plugindParameters from "./libs/plugin_parameters.js";
import serverRequest from "./server/connectAPI.js";
//import treeMenu from './libs/tree_menu.js';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

$(window).on("load", function () {
	//formFunctions();
	//additionalFunctions();
	plugindParameters();
	hamburderMenu();
	console.log("ready");
	fetch("http://mystake.com/api/game/getgametemplates/1/1/1 ", {
		headers: {
			Accept: "*/*",
			"Accept-Encoding": "gzip, deflate, br",
			Connection: "keep-alive",
		},
	}).then((response) => {
		console.log(response);
	});
});
