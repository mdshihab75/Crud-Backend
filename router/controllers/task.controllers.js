const usermodel = require("../../model/user.model");
let add_task_controller = async(req, res) => {
    let add_user = new usermodel(req.body)
    await add_user.save()
    res.status(201).json({success:true, message:"user created", data:add_user})
}

module.exports = {add_task_controller}