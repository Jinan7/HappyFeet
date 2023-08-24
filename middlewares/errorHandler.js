const errorHandler = async (err, req, res, next) => {
    console.log(err.message)
    return res.send()
}

module.exports = errorHandler