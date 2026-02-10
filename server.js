const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const port = 3000;

// Database setup
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set default values with expanded information
db.defaults({
    products: [
        {
            id: 1,
            slug: "acico",
            name: "ACICO",
            purpose: "Clock-In/Out",
            tagline: "Run payroll in minutes with smart technology.",
            description: "ACICO is an employee time management system that enables employees to clock-in and clock-out easily and reliably from their designated workplace, capturing location and system timestamp.",
            details: "Eliminate manual timesheets and ensure absolute accuracy in your payroll. ACICO uses smart location capturing to verify employee presence, helping you save over 80 hours a year in manual data entry.",
            features: ["GPS Location Tagging", "Offline Support", "Mobile App Access", "Real-time Dashboard"],
            icon: "bx-time-five"
        },
        {
            id: 2,
            slug: "apos",
            name: "APOS",
            purpose: "Procurement",
            tagline: "Simplify your supply chain from request to delivery.",
            description: "APOS is an integrated procurement system for managing purchase requests, approvals, purchase orders, and supplier collaboration.",
            details: "Bring transparency to your spending. APOS automates the approval workflow, ensuring every purchase is authorized and tracked. Join 400,000+ businesses who trust our procurement logic.",
            features: ["Automated Workflows", "Vendor Management", "Budget Tracking", "Digital Purchase Orders"],
            icon: "bx-cart-alt"
        },
        {
            id: 3,
            slug: "ascienti",
            name: "Ascienti",
            purpose: "Asset Management",
            tagline: "Track every asset's lifecycle with precision.",
            description: "Ascienti™ is a dynamic asset management system for tracking asset lifecycle, including acquisition, usage, maintenance, and decommissioning.",
            details: "Don't lose track of your investments. From IT equipment to heavy machinery, Ascienti gives you a 360-degree view of your organization's physical assets.",
            features: ["Lifecycle Tracking", "Maintenance Alerts", "Depreciation Calculation", "QR Code Generation"],
            icon: "bx-barcode-reader"
        },
        {
            id: 4,
            slug: "aval",
            name: "AVAL",
            purpose: "Fleet Management",
            tagline: "Keep your fleet moving efficiently.",
            description: "AVAL enables organizations to track vehicle movements, fuel utilization, and maintenance schedules.",
            details: "Reduce fuel costs and extend vehicle life. AVAL provides real-time insights into your fleet's performance and driver behavior.",
            features: ["Fuel Tracking", "Route Optimization", "Maintenance Schedules", "Driver Performance"],
            icon: "bx-car"
        },
        {
            id: 5,
            slug: "averiti",
            name: "Averiti",
            purpose: "Absence Management",
            tagline: "Manage PTO without the headache.",
            description: "Averiti™ enables employees to request leave and time off, and managers to review and approve requests while tracking PTO.",
            details: "Simplify leave management for your team. Averiti calculates balances automatically and integrates directly with your team calendar.",
            features: ["One-click Approvals", "Balance Tracking", "Calendar Integration", "Custom Policies"],
            icon: "bx-calendar-x"
        },
        {
            id: 6,
            slug: "expensia",
            name: "Expensia",
            purpose: "Expense Management",
            tagline: "Reimburse your team faster.",
            description: "Expensia™ allows employees to submit expense requests and managers to review, approve, deny, or reroute approvals.",
            details: "Eliminate paper receipts. Expensia digitalizes the entire expense process, making it easier for employees to get paid back and for finance to stay compliant.",
            features: ["Receipt Scanning", "Policy Compliance", "Multi-currency Support", "Fast Reimbursements"],
            icon: "bx-receipt"
        },
        {
            id: 7,
            slug: "obobe",
            name: "OBOBE",
            purpose: "Onboarding & Offboarding",
            tagline: "Perfect first impressions for every hire.",
            description: "OBOBE is an HRM system for managing employee onboarding and offboarding processes and documentation.",
            details: "Give new hires a warm welcome. OBOBE automates documentation collection and task assignments, so your new team members can hit the ground running.",
            features: ["Digital Document Signing", "Compliance Checklists", "Orientation Scheduling", "IT Auto-provisioning"],
            icon: "bx-user-plus"
        },
        {
            id: 8,
            slug: "apodosia",
            name: "Apodosia",
            purpose: "Performance Management",
            tagline: "Drive growth with goal-oriented reviews.",
            description: "Apodosia™ enables goal setting, validation, performance reviews, and ratings using a five-tier index.",
            details: "Build a high-performance culture. Apodosia makes reviews meaningful by aligning individual goals with company objectives.",
            features: ["Goal Setting", "360-degree Feedback", "Peer Reviews", "Performance Indexing"],
            icon: "bx-trending-up"
        },
        {
            id: 9,
            slug: "docupliance",
            name: "DocuPliance",
            purpose: "Compliance Management",
            tagline: "Stay audit-ready, always.",
            description: "DocuPliance manages document and process reviews for compliance, legal, audit, and operational purposes.",
            details: "Mitigate risk across your organization. DocuPliance ensures that all critical processes are reviewed and approved by the right stakeholders.",
            features: ["Audit Trails", "Policy Versioning", "Risk Assessment", "Approval Logs"],
            icon: "bx-check-shield"
        },
        {
            id: 10,
            slug: "filelogic",
            name: "FileLogic",
            purpose: "Document Digitization",
            tagline: "Your office, now search-friendly.",
            description: "FileLogic™ is an AI-powered system for document digitization, secure storage, and retrieval.",
            details: "Never lose a file again. FileLogic uses advanced OCR and AI to index your documents, making them searchable in milliseconds.",
            features: ["AI OCR Scanning", "Secure Encryption", "Smart Search", "Cloud Storage"],
            icon: "bx-file-find"
        },
        {
            id: 11,
            slug: "ubiquiti",
            name: "Ubiquiti",
            purpose: "Education Management",
            tagline: "The future of learning management.",
            description: "Ubiquiti™ is an education management and online learning platform for all academic levels.",
            details: "Empower learners everywhere. Ubiquiti provides a comprehensive platform for course management, student tracking, and virtual classrooms.",
            features: ["Course Management", "Virtual Classrooms", "Student Portals", "Assessment Tools"],
            icon: "bx-book-open"
        }
    ],
    services: [
        { id: 1, name: "Email Service", desc: "Domain-based email services.", icon: "bx-envelope" },
        { id: 2, name: "Cybersecurity", desc: "Security awareness and GRC.", icon: "bx-shield-quarter" },
        { id: 3, name: "WISP", desc: "Wireless internet services.", icon: "bx-wifi" },
        { id: 4, name: "ICT Infrastructure", desc: "Complete computer lab setup.", icon: "bx-laptop" }
    ],
    settings: {
        siteName: "Amarac BPA",
        heroTitle: "Payroll, benefits, and HR built for the big leagues.",
        heroSubtitle: "Join 400,000+ businesses who trust Amarac from kickoff to payday."
    }
}).write();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/content', (req, res) => {
    res.json({
        products: db.get('products').value(),
        services: db.get('services').value(),
        settings: db.get('settings').value()
    });
});

app.get('/api/product/:slug', (req, res) => {
    const product = db.get('products').find({ slug: req.params.slug }).value();
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});

app.post('/api/settings', (req, res) => {
    db.set('settings', req.body).write();
    res.json({ success: true });
});

app.post('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.get('products')
        .find({ id: id })
        .assign(req.body)
        .write();
    res.json({ success: true });
});

// Admin Route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin.html'));
});

// Front-end Routes
app.get('/product/:slug', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/product.html'));
});

app.get('/api/leads', (req, res) => {
    res.json(db.get('leads').value() || []);
});

app.post('/api/leads', (req, res) => {
    const lead = {
        id: Date.now(),
        ...req.body,
        date: new Date().toISOString()
    };
    db.get('leads').push(lead).write();
    res.json({ success: true, message: "Thank you! We'll contact you soon." });
});

app.listen(port, () => {
    console.log(`Amarac BPA running at http://localhost:${port}`);
});
