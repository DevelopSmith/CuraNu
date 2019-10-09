const sendResJSON = (res, status, content) => {
	res.status(status);
	res.json(content);
};

export {
	sendResJSON
}