import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import emailjs from '@emailjs/nodejs';

// Load environment variables
dotenv.config({ path: './.env' });

// Log environment variables for debugging
console.log("🔧 Loaded Environment Variables:");
console.log("📨 EMAILJS_SERVICE_ID:", process.env.EMAILJS_SERVICE_ID || "❌ MISSING");
console.log("📨 EMAILJS_TEMPLATE_ID:", process.env.EMAILJS_TEMPLATE_ID || "❌ MISSING");
console.log("📨 EMAILJS_PUBLIC_KEY:", process.env.EMAILJS_PUBLIC_KEY || "❌ MISSING");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 📌 Sample Project Data (For Demo)
let projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

// 📌 GET all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// 📌 POST a new project
app.post('/api/projects', (req, res) => {
  const newProject = {
    id: Date.now().toString(),
    ...req.body
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// 📌 UPDATE an existing project
app.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(p => p.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Project not found' });
  }

  projects[index] = { ...projects[index], ...req.body };
  res.json(projects[index]);
});

// 📌 DELETE a project
app.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  projects = projects.filter(p => p.id !== id);
  res.status(204).send();
});

// ✅ Secure EmailJS Integration
app.post(
  '/api/send-email',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Check if environment variables exist
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      return res.status(500).json({
        success: false,
        message: "Missing required EmailJS environment variables. Please check your server configuration.",
      });
    }

    try {
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message
        },
        process.env.EMAILJS_PUBLIC_KEY
      );

      console.log("📨 EmailJS Response:", response);
      res.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
      console.error('❌ EmailJS Error:', error);

      res.status(500).json({
        success: false,
        message: 'Failed to send email. Check server logs for more details.',
        error: error.message,
      });
    }
  }
);

// 🌟 Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
