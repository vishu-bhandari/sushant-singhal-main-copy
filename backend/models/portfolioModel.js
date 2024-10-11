const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  paragraph1: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
  paragraph3: {
    type: String,
    required: true,
  },
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
});

const aboutmeSchema = new mongoose.Schema({
  about: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
    required: true,
  },
  content1: {
    type: String,
    required: true,
  },
  heading2: {
    type: String,
    required: true,
  },
  content2: {
    type: String,
    required: true,
  },
  heading3: {
    type: String,
    required: true,
  },
  content3: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const sliderSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const gallerySchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  youtubeLink: {
    type: String,
    required: true,
  },
});

const faqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  occupation: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

// Privacy Policy Schema
const privacyPolicySchema = new mongoose.Schema({
  subheading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Optional timestamps for tracking

module.exports = {
  About: mongoose.model("abouts", aboutSchema),
  Aboutme: mongoose.model("aboutmes", aboutmeSchema),
  Project: mongoose.model("projects", projectsSchema),
  Slider: mongoose.model("sliders", sliderSchema),
  Blog: mongoose.model("blogs", blogSchema),
  Gallery: mongoose.model("gallerys", gallerySchema),
  Faq: mongoose.model("faqs", faqSchema),
  Testimonial: mongoose.model("testimonials", testimonialSchema),
  Contact: mongoose.model('Contacts', ContactSchema),
  PrivacyPolicy: mongoose.model("PrivacyPolicies", privacyPolicySchema), // New Privacy Policy model
};
