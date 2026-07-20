# 📄 Smart PDF Studio

Smart PDF Studio is a full-stack PDF generation application that enables users to generate professional PDF documents from either structured JSON data or existing MongoDB records. The application provides an intuitive interface for document creation, real-time PDF generation, automatic downloads, and document preview.


## ✨ Features

- Generate PDF documents from JSON input
- Generate PDFs using MongoDB Document ID
- Store document data in MongoDB
- Automatic PDF download with custom document name
- Real-time PDF generation using Puppeteer
- Live Preview Panel
- Activity Tracking Panel
- Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Puppeteer

---

## 🔄 Application Workflow


User Input (JSON / MongoDB ID)
            │
            ▼
      React Frontend
            │
            ▼
      Express REST API
            │
            ▼
        MongoDB
            │
            ▼
HTML Template Generation
            │
            ▼
 Puppeteer PDF Generation
            │
            ▼
 Automatic PDF Download


## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/krutika-naphade/smart-pdf-studio.git
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
**
 Frontend Setup**

```bash
cd frontend
npm install
npm run dev


** 📁 Project Structure**

Smart-PDF-Studio
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── templates
│   └── server.ts
│
├── frontend
│   ├── public
│   ├── src
│   └── package.json
│
└── README.md
```



B.Tech – Computer Science & Engineering (Data Science)

St. Vincent Pallotti College of Engineering & Technology, Nagpur
