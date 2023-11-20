const db = require("../models/index");
const Blogs = db.blogs;

//Create and Save a nee post
exports.create = (req, res) => {
  // console.log(req.body);
  if (!req.body.title) {
    return res.status(404).send({
      message: "Content can't be empty",
    });
  }

  Blogs.create({
    title: req.body.title,
    content: req.body.content,
    published: req.body.published ? req.body.published : false,
  })
    .then((data) => {
      res.status(201).send({
        status: "Success",
        message: "successfully added a post",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "Fail",
        message: err.message || "Some eorror occoured while creating a post",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(title);

  Blogs.findAll({
    where: {
      published: false,
    },
  })
    .then((data) => {
      res.status(200).send({
        status: "Success",
        message: "Successfully finded",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "Fail",
        message: err.message || "Some error occoured!",
      });
    });
};

exports.findByPk = (req, res) => {
  const primId = req.params.id;

  Blogs.findByPk(primId)
    .then((data) => {
      if (data) {
        res.status(200).send({
          data,
        });
      }else{
        res.status(404).send({
            status: "Fail",
            message: err.message || `Cannot find ${primId} in Blogs`,
        })
      }
    })
    .catch((err) => {
        res.status(500).send({
            status: "Fail",
            message: "Error retrieving Blogs with id"
        })
    })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Blogs.update(req.body,{
        where :{
            id : id
        }
    }).then((Number) =>{
        if(Number = 1){
            res.status(200).send({
                status: "Success",
                message: "Blogs was updated sucessfully",
            })
        }else{
            res.status(422).send({
                status: "Fail",
                message: `Can't update Blogs with ${id}`,
            })
        }
    }).catch((err)=>{
        res.status(500).send({
            status: "Fail",
            message: `Error updating Blogs with id ${id}`
        })
    })
};

exports.delete =(req, res) => {
    const id = req.params.id;

    Blogs.destroy({
        where :{
            id : id
        }
    }).then((Number) =>{
        if(Number = 1){
            res.status(200).send({
                status: "Success",
                message: "Blog was deleted sucessfully",
            })
        }else{
            res.status(404).send({
                status: "Fail",
                message: `Can't delete Blogs with ${id}`,
            })
        }
    }).catch((err)=>{
        res.status(500).send({
            status: "Fail",
            message: `Error updating Blogs with id ${id}`
        })
    })
};

exports.deleteAll = (req,res) => {

    Blogs.destroy({
        where:{},
        truncate: false,
    }).then( Number => {
        res.status(200).send({
            status:"Success",
            message: `${Number} Blogs were deleted successfully`,
        })
    }).catch((err)=>{
        res.status(500).send({
            status: "Fail",
            message:err.message || "Some error occoured while removing all blogs!"
        })
    })
}