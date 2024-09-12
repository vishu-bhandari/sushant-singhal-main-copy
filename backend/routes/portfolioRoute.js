const router=require('express').Router();


const { About , Project , Slider, Blog, Gallery, Faq ,Testimonial,Aboutme , Contact} = require("../models/portfolioModel");
const { User } = require("../models/userModel");



//get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
    try {
      
      const abouts = await About.find();
      const projects=await Project.find();
      const sliders=await Slider.find();
      const blogs=await Blog.find();
      const gallerys=await Gallery.find();
      const faqs=await Faq.find();
      const testimonials=await Testimonial.find();
      const aboutmes=await Aboutme.find();
      
      res.status(200).send({
        
        about: abouts[0],
        projects:projects,
        slider:sliders,
        blog:blogs,
        gallery:gallerys,
        faq:faqs,
        testimonial:testimonials,
        aboutme:aboutmes[0],
       
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  


  //update about
router.post("/update-about",async(req,res)=>{
  try{
      const about=await About.findOneAndUpdate(
          {_id:req.body._id},
          req.body,
          {new:true}
      );
      res.status(200).send({

          data: about,
          success:true,
          message: "About updated successfully"
      });
  }catch(error){
      res.status(500).send(error);
  }
})
  //update aboutme
router.post("/update-aboutme",async(req,res)=>{
  try{
      const aboutme=await Aboutme.findOneAndUpdate(
          {_id:req.body._id},
          req.body,
          {new:true}
      );
      res.status(200).send({

          data: aboutme,
          success:true,
          message: "Aboutme updated successfully"
      });
  }catch(error){
      res.status(500).send(error);
  }
})


//add project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


//add slider
router.post("/add-slider", async (req, res) => {
  try {
    const slider = new Slider(req.body);
    await slider.save();
    res.status(200).send({
      data: slider,
      success: true,
      message: "slider added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update slider
router.post("/update-slider", async (req, res) => {
  try {
    const slider = await Slider.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: slider,
      success: true,
      message: "slider updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete slider
router.post("/delete-slider", async (req, res) => {
  try {
    const slider = await Slider.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: slider,
      success: true,
      message: "slider deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



//add blog
router.post("/add-blog", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(200).send({
      data: blog,
      success: true,
      message: "blog added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update blog
router.post("/update-blog", async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: blog,
      success: true,
      message: "blog updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete blog
router.post("/delete-blog", async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: blog,
      success: true,
      message: "blog deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});




//add gallery
router.post("/add-gallery", async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    await gallery.save();
    res.status(200).send({
      data: gallery,
      success: true,
      message: "gallery added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update gallery
router.post("/update-gallery", async (req, res) => {
  try {
    const gallery = await Gallery.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: gallery,
      success: true,
      message: "gallery updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete gallery
router.post("/delete-gallery", async (req, res) => {
  try {
    const gallery = await Gallery.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: gallery,
      success: true,
      message: "gallery deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});




//add faq
router.post("/add-faq", async (req, res) => {
  try {
    const faq = new Faq(req.body);
    await faq.save();
    res.status(200).send({
      data: faq,
      success: true,
      message: "faq added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update faq
router.post("/update-faq", async (req, res) => {
  try {
    const faq = await Faq.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: faq,
      success: true,
      message: "faq updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete faq
router.post("/delete-faq", async (req, res) => {
  try {
    const faq = await Faq.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: faq,
      success: true,
      message: "faq deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});




//add testimonial

router.post("/add-testimonial", async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(200).send({
      data: testimonial,
      success: true,
      message: "testimonial added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update testimonial
router.post("/update-testimonial", async (req, res) => {
  try {
    const testimonial = await Testimonial.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: testimonial,
      success: true,
      message: "testimonial updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete testimonial
router.post("/delete-testimonial", async (req, res) => {
  try {
    const testimonial = await Testimonial.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: testimonial,
      success: true,
      message: "testimonial deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//admin login
router.post("/AdminLogin", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    user.password='';
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "login successfully",
      });
    }else{
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Save contact information
router.post("/add-contact", async (req, res) => {
  try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(200).send({
          data: contact,
          success: true,
          message: "Contact information saved successfully",
      });
  } catch (error) {
      res.status(500).send({
          error: error.message,
          success: false,
          message: "Failed to save contact information",
      });
  }
});

// Get all contact information
router.get('/get-contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({
      data: contacts,
      success: true,
      message: 'Contacts fetched successfully',
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
      success: false,
      message: 'Failed to fetch contacts',
    });
  }
});


router.post('/delete-contact', async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res.status(400).send({
        success: false,
        message: 'Contact ID is required',
      });
    }
    
    const contact = await Contact.findByIdAndDelete(_id);
    
    if (!contact) {
      return res.status(404).send({
        success: false,
        message: 'Contact not found',
      });
    }
    
    res.status(200).send({
      data: contact,
      success: true,
      message: 'Contact deleted successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Failed to delete contact',
      error: error.message,
    });
  }
});




  module.exports = router;