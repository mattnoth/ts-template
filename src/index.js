import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
	console.log(req);
	res.send('hello');
});

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
