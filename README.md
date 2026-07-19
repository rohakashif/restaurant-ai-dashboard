# 🍽️ Restaurant AI Dashboard & Food Ordering Platform

A premium, high-performance frontend system designed for modern restaurant operations and a seamless client ordering experience. This project demonstrates structured state management, responsive data visualization, and polished micro-interactions.

🚀 **[Live Demo Link](https://restaurant-ai-dashboard-gamma.vercel.app/)** 

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Running with Docker (Recommended)](#-running-with-docker-recommended)
- [Local Development (Without Docker)](#-local-development-without-docker)

---

## ✨ Features

### 🛒 Frontend & Client Ordering Experience
* **Intelligent Menu & Navigation:** Dynamic category filters with an exact debounce search hook for real-time responsiveness.
* **Persistent Cart System:** Fully functional global state tracking for seamless item additions, updates, and checkout math.
* **Framer Motion Animations:** Immersive micro-interactions and smooth page transitions for a native-app feel.

### 📊 Admin SaaS Dashboard
* **Data Analytics Hub:** Beautifully rendered business metrics and sales patterns using responsive charts.
* **Management Layout:** Clean UI grids optimized for handling active digital menu items, product listings, and analytical tracking.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router) & React
* **Language:** TypeScript (Type-safe interfaces and strict props checking)
* **Styling & UI:** Tailwind CSS & Shadcn UI
* **State Management:** Zustand (Lightweight global store for cart memory and UI states)
* **Data Visualization:** Recharts (For interactive dashboard graphs and charts)

---

## 📁 Project Structure

```text
restaurant-ai-dashboard/
├── app/                    # Next.js App Router (Pages & Layouts)
├── components/             # Reusable UI components (Shadcn + Custom)
├── data/                   # Mock food data, menus, and configurations
├── hooks/                  # Custom React hooks (Debounce, UI triggers)
├── lib/                    # Utility functions and helper scripts
├── store/                  # Zustand global state configurations (Cart store)
├── styles/                 # Global CSS and Tailwind directives
├── types/                  # TypeScript definitions and type declarations
├── Dockerfile              # Docker production environment blueprint
├── .dockerignore           # Excluded files from Docker build context
└── README.md               # Project documentation
