const firstschema = require("../module/firstschema");
const fs = require("fs")
   

module.exports.login =(req,res)=>{
    res.render("login");
};

module.exports.userLogin = async (req, res) =>{
    console.log(req.body);
    res.redirect("Dashbord");
};
    
module.exports.Dashbord = (req,res)=>{
    res.render("Dashbord");
};

module.exports.Addadmin = (req, res) => {
    res.render("Addadmin");
};

module.exports.Viewaddmin = async (req, res) => {
        let data = await firstschema.find({});
        data && res.render("Viewadmin",{data});
    
};

module.exports.AddData = async (req, res)=>{
    req.body.image = req.file.path;
    let data = await firstschema.create(req.body);
    data && res.redirect("Addadmin");
};          

module.exports.DeleteData = async (req,res)=>{
    let singleRecord = await firstschema.findById(req.query.id);  
    fs.unlinkSync(singleRecord.image);
    let data= await firstschema.findByIdAndDelete(req.query.id);
    data && res.redirect("/Viewaddmin");
}

module.exports.EditData = async(req,res)=>{
    let singleData = await firstschema.findById(req.query.id);
    singleData && res.render("edit", { singleData });
};

module.exports.UpdateData = async(req,res)=>{
    let img = ""
    let singleData = await firstschema.findById(req.body.id)
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img
    let update = await firstschema.findByIdAndUpdate(req.body.id,req.body);
    update && res.redirect("/Viewaddmin");
};

module.exports.logout = (req ,res)=>{
    res.clearCookie("adminData");
    res.redirect("/");
};

module.exports.profile = (req, res) => {
    res.render("profile");
};