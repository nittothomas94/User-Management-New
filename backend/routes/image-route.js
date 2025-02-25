const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: 'your_cloud_name', 
  api_key: 'your_api_key', 
  api_secret: 'your_api_secret' 
});

// Configure Multer with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { folder: 'user-images', format: async (req, file) => 'png' }
});

const upload = multer({ storage });

const router = express.Router();

// Upload image endpoint
router.post('/', upload.single('avatar'), (req, res) => {
  res.json({ url: req.file.path }); // Cloudinary returns a public URL
});

module.exports = router;
