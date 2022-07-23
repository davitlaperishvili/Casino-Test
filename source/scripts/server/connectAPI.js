const SERVER_URL = "http://mystake.com/api/game/getgametemplates/1/1/1 ";

export default async function serverRequest(requestUrl = SERVER_URL) {
	try {
		const response = await fetch(requestUrl, {
			mode: "no-cors",
		});
		console.log(response);
		const data = await response.json();
		console.log(data);

		return data;
	} catch (e) {
		console.log("Something Goes Wrong");
	}
}
