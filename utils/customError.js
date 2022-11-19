const customError = (code, msg) => {
    const newError = new Error()
    newError.status = code
    newError.message = msg
    return newError
}

module.exports = customError