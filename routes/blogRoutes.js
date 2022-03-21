const router = require("express").Router();
const blogControllers = require("../controllers/blogControllers");

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});
router.post("/", blogControllers.blog_create);

router.get("/", blogControllers.blog_index);

router.get("/:id", blogControllers.blog_detail);

router.delete(
  "/:id",
  blogControllers.blog_delete
);

module.exports = router;
