import express from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import emailjs from '@emailjs/nodejs'; // Use EmailJS directly

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Hardcoded EmailJS API Keys
const EMAILJS_SERVICE_ID = "service_jtf39xn";
const EMAILJS_TEMPLATE_ID = "template_43hbu3e";
const EMAILJS_PUBLIC_KEY = "hAcedc5Vy9DMuF_jC";

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

// ✅ Email Sending Endpoint
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

    try {
      console.log("📨 Sending Email with:", {
        serviceID: EMAILJS_SERVICE_ID,
        templateID: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY, // Log to check
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("📨 Email Sent Successfully:", response);
      res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send email.',
        error: error.message
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
