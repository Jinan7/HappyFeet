
const getAll = async (req,res)=>{
    throw new Error("Handling the error")
    console.log("getting all")
    return res.send()
}

const getOne = async (req, res)=>{
    console.log("getting one")
    return res.send()
}

const createOne = async (req,res)=>{
    console.log("creating one")
    return res.send()
}

const updateOne = async (req,res)=>{
    console.log("updating one")
    return res.send()
}

const deleteOne = async (req,res)=>{
    console.log("deleting one")
    return res.send()
}

module.exports = {getAll, getOne, createOne, updateOne, deleteOne}