# CulinaAI - Restaurant Analytics & Management Dashboard

A premium, frontend-driven SaaS dashboard designed for modern restaurant management. CulinaAI provides restaurant owners with real-time analytics, dynamic menu controls, automated insights, and streamlined order tracking through a highly responsive UI/UX interface.

## 🚀 Live Demo
Check out the live application: [CulinaAI Production Build](https://restaurant-ai-dashboard-atfn.vercel.app)

---

## ✨ Features
* **AI-Powered Analytics Hub**: High-fidelity visual charts tracking revenue trends, popular menu choices, and demographic performance metrics.
* **Dynamic Menu Management**: Full client-side CRUD capabilities allowing seamless updates to offerings, price points, and seasonal availability toggles.
* **Responsive Architecture**: Fully optimized layout for seamless use across desktop environments down to mobile devices.
* **Performance Optimizations**: Implemented robust user-experience features including custom debouncing hooks to drastically reduce unnecessary component re-renders during high-volume query tasks.

---

## 🛠️ Tech Stack

### Frontend & Core Framework
* **Framework**: Next.js 15 (App Router)
* **Language**: TypeScript
* **State Management**: Zustand
* **Styling & UI**: Tailwind CSS & Shadcn UI
* **Data Visualization**: Recharts

### Deployment & Tooling
* **Hosting**: Vercel Production Environment
* **Version Control**: Git / GitHub

---

## 📂 Repository Structure

```text
├── app/                  # Next.js App Router layouts, routes, and page views
├── components/           # Reusable, modular presentation components (Shadcn UI)
├── data/                 # Local mock datasets simulating backend models (e.g., recipes.ts)
├── hooks/                # Custom hooks (including the search optimization debounce engine)
├── lib/                  # Shared utilities, style mergers, and formatting configurations
├── store/                # Zustand state logic managing global client data flow
└── types/                # System-wide TypeScript type definitions and safety interfaces
