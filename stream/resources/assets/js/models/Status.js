class Status {
	static all() {
		return axios.get('/statuses');
	}
	static all(then) {
		return axios.get('/statuses')
			.then( ({data}) => then(data));	
	}

}

export default Status;