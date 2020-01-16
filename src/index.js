console.log('start')

const startPromise = async value => value

const delay = time => value => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(value)
	}, time)
})

const log = msg => value => {
	console.log(msg)
	return value
}

logValue = fn => value => {
	console.log(fn(value))
	return value
}

const test = () => {
	startPromise(40)
		.then(log('starting timer'))
		.then(delay(1000))
		.then(x => x + 2)
		.then(log('adding'))
		.then(delay(2000))
		.then(logValue(x => `timer finished with ${x}`))
}
