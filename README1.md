# Fraud Detection System

An AI-powered fraud detection system that combines advanced machine learning techniques with an intuitive user interface for real-time transaction monitoring and fraud prevention.

## 📋 Table of Contents

- [Fraud Detection System](#fraud-detection-system)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🏗️ System Architecture](#️-system-architecture)
  - [✨ Key Features](#-key-features)
  - [🧩 Components](#-components)
    - [AI Model Scripts](#ai-model-scripts)
    - [Flask Backend Server](#flask-backend-server)
    - [React Frontend](#react-frontend)
    - [System Design Diagrams](#system-design-diagrams)
  - [🚀 Installation](#-installation)
    - [Prerequisites](#prerequisites)
    - [Firebase Setup](#firebase-setup)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [💻 Usage](#-usage)

## 🔍 Overview

This fraud detection system leverages Generative Adversarial Networks (GANs) and other machine learning techniques to identify potentially fraudulent transactions. The application features a Flask backend serving the AI model via RESTful APIs and a React frontend that provides a seamless user experience for monitoring and analyzing transactions.

## 🏗️ System Architecture

The system follows a three-tier architecture:

1. **Data Layer**: Firebase Firestore database for storing transaction data and user information
2. **Application Layer**: Flask backend server hosting the AI model and processing APIs
3. **Presentation Layer**: React frontend providing intuitive dashboards and user interfaces

![System Architecture](SystemDesignDiagrams/SystemDesign.png)

## ✨ Key Features

- Advanced fraud detection using GANs and Random Forest models
- Real-time transaction monitoring
- Interactive dashboards for visualizing fraud patterns
- User authentication and secure data handling
- Customizable fraud detection thresholds
- Transaction simulation for testing

## 🧩 Components

### AI Model Scripts

Located in `AI_model_Py_Scripts/`, these scripts handle data generation, model training, and evaluation:

- **DataSetGeneratorUSingNumpy.ipynb**: Generates synthetic datasets with realistic features
- **FraudDetectionUSingGAN.ipynb**: Implements GANs for fraud detection

### Flask Backend Server

Located in `AI_model_server_Flask/`, the backend server exposes the AI model via RESTful APIs:

- **app.py**: Main Flask application file
- **best_rf_model.pkl**: Pre-trained Random Forest model

### React Frontend

Located in `fraudAI_Frontend_React/`, the frontend provides the user interface:

- **Components**: Authentication, transaction simulation, dashboard views
- **UI Elements**: Reusable components ensuring consistent design

### System Design Diagrams

Located in `SystemDesignDiagrams/`, these diagrams document the system architecture:

- **AIMODEL_VISUAL.png**: AI model visualization
- **sequenceDiagram.pdf**: Component interaction sequence
- **SystemDesign.png**: System architecture overview
- **WorkFlowDiagram.png**: End-to-end workflow

## 🚀 Installation

### Prerequisites

- Node.js and npm
- Python 3.8+ and uv package manager
- Firebase account

### Firebase Setup

1. **Create a Firebase Project**
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard

2. **Register Your Web Application**
   - From your project dashboard, click the web icon (`</>`)
   - Register with a nickname (e.g., "Fraud Detection Web App")
   - Copy the Firebase configuration object

3. **Set Up Authentication**
   - Navigate to Authentication → Sign-in methods
   - Enable Google provider and configure your support email

4. **Create Firestore Database**
   - Select Firestore Database from the sidebar
   - Choose "Start in test mode" for development
   - Select an appropriate database location

5. **Configure Security Rules**
   - In Firestore, navigate to the Rules tab
   - For development, use the following rules:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /{document=**} {
           allow read, write: if true;
         }
       }
     }
     ```

6. **Update Firebase Configuration**
   - Open `fraudAI_Frontend_React/src/components/logic/firebase.js`
   - Replace with your Firebase configuration:
     ```javascript
     import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";
     import { getFirestore } from "firebase/firestore";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     export const db = getFirestore(app);
     ```

### Backend Setup

1. **Install uv Package Manager** (if not already installed)

2. **Create and Activate Virtual Environment**
   ```bash
   cd AI_model_server_Flask
   uv -m venv .venv
   uv init
   
   # Activate the virtual environment
   # On Windows: .venv\Scripts\activate
   # On macOS/Linux: source .venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   uv add -r requirements.txt
   # Or
   uv pip install -r requirements.txt
   ```

4. **Start the Flask Server**
   ```bash
   uv run app.py
   # Or
   python app.py
   ```

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd fraudAI_Frontend_React
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Open the URL displayed in your terminal (typically http://localhost:5173)

## 💻 Usage

1. **Sign in** using your Google account
2. **Navigate** to the dashboard to view transaction history
3. **Simulate** transactions to test the fraud detection system
4. **Monitor** real-time fraud detection results
