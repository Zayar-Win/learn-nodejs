const Blog = require("../models/Blog");

const blog_create = async (req, res) => {
  try {
    const blog = Blog.create(req.body);
    res.redirect("/blogs");
  } catch (err) {
    res.sendStatus(500);
  }
};

const blog_index = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render("index", {
      title: "All blogs",
      blogs,
    });
  } catch (err) {
    res.sendStatus(500);
  }
};

const blog_detail = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.render("detail", {
    title: "Blog Details",
    blog,
  });
};

const blog_delete = async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);

    res.json({ redirect: "/blogs" });
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {
  blog_index,
  blog_create,
  blog_detail,
  blog_delete,
};
