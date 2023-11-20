const express = require("express");
const blogsCtrl = require("../controller/blogs")

module.exports = (app) => {
    const router = express.Router();

    router.post("/",blogsCtrl.create);

    router.get("/",blogsCtrl.findAll);

    router.get("/:id",blogsCtrl.findByPk);

    router.put("/:id",blogsCtrl.update);

    router.delete("/:id",blogsCtrl.delete);

    router.delete("/",blogsCtrl.deleteAll);

    app.use("/api/v1/blogs",router);
}