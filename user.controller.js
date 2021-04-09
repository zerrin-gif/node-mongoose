const { create } = require('../models/user.model')
const User = require('../models/user.model')

exports.create = (req,res)=>{
const user = new User({
  email: req.body.email,
  password:req.body.password,
  name:req.body.name,
  age:req.body.age,
  gender:req.body.gender,
  isActive:req.body.isActive,
  userType:req.body.userType 
})
user.save()
.then((data)=>{
res.send(data)
})
.catch((err)=>{
res.status(500).send({
message:err.message
 })
}) 
}

exports.findOne = (req, res) => {
  User.findById(req.params.id)
                  .then((user)=>{res.send(user)})
                  .catch((error)=>{res.send(error)});    
}


exports.findAll = (req, res) => {
  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

exports.delete=(req,res)=>{
  User.findByIdAndRemove(req.params.id)
            .then((user)=>{res.send(user)})
            .catch((error)=>{res.send(error)
  });
}

exports.update=(req,res)=>{
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then((user)=>{res.send(user)})
            .catch((error)=>{res.send(error)
  });
}