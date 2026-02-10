# Amarac BPA - Smart Business Automation

Amarac BPA is a premium, high-fidelity business process automation platform inspired by the clean and human-centric design of Gusto.com. It provides an integrated suite of tools designed to streamline organization-wide operations from payroll and asset management to procurement and employee onboarding.

## ✨ Features

- **Gusto-Inspired Design**: A warm, professional UI/UX featuring a clean color palette (Guava, Kale, and Navy), modern typography (Poppins & Nunito), and smooth interactions.
- **Integrated Product Suite**: Complete management modules for:
  - **Workforce**: ACICO (Time-tracking), OBOBE (Onboarding), Apodosia (Performance), Averiti (Absence).
  - **Operations**: Ascienti (Asset Management), AVAL (Fleet Management), APOS (Procurement), Expensia (Expense Tracking).
  - **Compliance & Learning**: DocuPliance (Review), FileLogic (AI Archival), Ubiquiti (Education).
- **Multi-Page Architecture**: Each product module features its own dedicated detail page with high-impact "selling captions" and feature breakdowns.
- **Custom Admin CMS**: A modern dashboard at `/admin` to manage site content, update product strategies, and view incoming customer inquiries.
- **Lead Generation**: Functional contact forms integrated with a dedicated backend API for real-time customer request capturing.
- **AI-Ready**: Simulated Microsoft Azure AI Chatbot integration and AI-powered document logic placeholders.

## 🛠️ Technology Stack

- **Backend**: Express.js (v5+)
- **Storage**: LowDB (Local JSON database for persistent storage)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript, jQuery (v3.5.1)
- **Design Framework**: Bootstrap 5
- **Iconography**: Boxicons, Remix Icons, Bootstrap Icons
- **Visuals**: ApexCharts for data transitions, Google Fonts (Poppins, Nunito)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mydross989-prog/amaracbpa.git
   cd amaracbpa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   - **Website**: `http://localhost:3000`
   - **CMS Dashboard**: `http://localhost:3000/admin`

## 📂 Project Structure

- `/server.js`: Express.js backend and API routes.
- `/public/`: Frontend assets and HTML templates.
  - `index.html`: Main marketing landing page.
  - `product.html`: Dynamic product detail template.
  - `admin.html`: Custom CMS and lead management dashboard.
  - `/assets/`: CSS styles, client-side JS, and images.
- `/db.json`: Local database file (auto-generated on startup).

## 📄 License

&copy; 2026 Amarac Technology Solutions. All rights reserved.
