const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port, () =>
	console.log("Aplikacja nasłuchuje na porcie 3000"),
);
