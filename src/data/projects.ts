import { Project } from "./types";

export const PROJECTS: Project[] = [

    {
        id: 1,
        slug: "rekaloka",
        title: "Rekaloka",
        cat: "Mobile & Web",
        desc: "Platform eksplorasi budaya dengan GenAI (Text-to-3D) & Computer Vision.",
        image: "/projects/rekaloka.png",
        color: "from-orange-500/20 to-amber-600/20",
        tags: ["Node.js", "Express", "Prisma", "Python", "Gemini AI", "Redis"],
        featured: true,
        link: "#",
        github: "#",

        details: {
            overview: "Membangun infrastruktur backend yang scalable dan mengintegrasikan Generative AI dan Computer Vision.",

            features: [
                "Text-to-3D Generator menggunakan Shap-E & TripoSR",
                "Anti-spoofing Location Check dengan Gemini Vision",
                "Gamifikasi Budaya (XP, Badges, Leaderboard)",
                "REST API High Performance dengan Redis Caching"
            ],

            stack: "Node.js, Express, Prisma, Python, Redis, Gemini AI"
        }
    },

    {
        id: 2,
        slug: "supplier-system",
        title: "Supplier System",
        cat: "Web",
        desc: "Sistem manajemen stok dan produksi dengan RBAC ketat.",
        image: "/projects/supplier.png",
        color: "from-slate-500/20 to-gray-600/20",
        tags: ["Laravel", "Filament", "MySQL", "Tailwind"],
        link: "#",
        github: "#",

        details: {
            overview: "Platform web fullstack untuk digitalisasi supplier management.",

            features: [
                "Multi Role Authentication",
                "Dashboard berbeda untuk Admin & Produksi",
                "Smart Seeder",
                "Audit Log"
            ],

            stack: "Laravel, Filament, MySQL"
        }
    },

    {
        id: 3,
        slug: "vd-cosmetics",
        title: "VD Cosmetics",
        cat: "Web",
        desc: "E-commerce kosmetik dengan dashboard keuangan realtime.",
        image: "/projects/vdcosmetic.png",
        color: "from-rose-400/20 to-pink-500/20",
        tags: ["Laravel", "Filament", "Livewire", "Tailwind"],
        link: "#",
        github: "#",

        details: {
            overview: "Platform e-commerce lengkap dengan booking konsultasi.",

            features: [
                "Dashboard Profit/Loss",
                "Booking konsultasi",
                "Checkout multi skenario",
                "Role management"
            ],

            stack: "Laravel, Filament, Livewire"
        }
    },

    {
        id: 4,
        slug: "bumdesmart",
        title: "BUMDESmart",
        cat: "Web",
        desc: "Digitalisasi operasional BUMDes dengan e-commerce publik.",
        image: "/projects/bumdes.png",
        color: "from-blue-500/20 to-cyan-600/20",
        tags: ["Laravel", "Livewire", "Filament", "MySQL"],
        link: "#",
        github: "#",

        details: {
            overview: "Platform digitalisasi BUMDes Sebauk Gemilang.",

            features: [
                "E-Commerce publik",
                "Blog berita desa",
                "Laporan PDF",
                "Master data management"
            ],

            stack: "Laravel, Filament, Livewire"
        }
    },

    {
        id: 5,
        slug: "fitid-gym",
        title: "FitID Gym",
        cat: "Mobile & Web",
        desc: "Aplikasi gym terintegrasi dengan AI Personal Trainer.",
        image: "/projects/fitid.png",
        color: "from-emerald-500/20 to-teal-600/20",
        featured: true,
        tags: ["Flutter", "ExpressJS", "Laravel", "Gemini AI"],
        link: "#",
        github: "#",

        details: {
            overview: "Solusi manajemen gym modern dengan AI Coach.",

            features: [
                "QR Attendance",
                "AI Personal Trainer",
                "Reward Point",
                "Membership Management"
            ],

            stack: "Flutter, Laravel, ExpressJS, Gemini AI"
        }
    },

    {
        id: 6,
        slug: "moonlight-memories",
        title: "Moonlight Memories",
        cat: "Mobile & Web",
        desc: "Platform Wedding Organizer dengan custom paket.",
        image: "/projects/moonlight.png",
        color: "from-pink-500/20 to-purple-600/20",
        featured: true,
        tags: ["Kotlin", "Laravel", "Filament", "MySQL"],
        link: "#",
        github: "#",

        details: {
            overview: "Platform digital wedding organizer.",

            features: [
                "Custom Package Builder",
                "Vendor Management",
                "Midtrans Payment",
                "Android Native App"
            ],

            stack: "Kotlin, Laravel, MySQL"
        }
    },

    {
        id: 7,
        slug: "ar-biolens",
        title: "AR Biolens",
        cat: "AR",
        desc: "Aplikasi pembelajaran anatomi berbasis AR.",
        image: "/projects/arbiolens.png",
        color: "from-violet-500/20 to-indigo-600/20",
        featured: true,
        tags: ["Unity", "Vuforia", "Gemini AI", "ExpressJS"],
        link: "#",
        github: "#",

        details: {
            overview: "Pembelajaran anatomi dengan visualisasi AR + AI tutor.",

            features: [
                "3D Organ Visualization",
                "AI Tutor",
                "Quiz",
                "Rotate/Zoom Model"
            ],

            stack: "Unity, Vuforia, Gemini AI"
        }
    },

    {
        id: 8,
        slug: "ar-umkm",
        title: "AR UMKM Bumdes",
        cat: "AR & Web",
        desc: "Katalog produk interaktif berbasis WebAR.",
        image: "/projects/arumkm.png",
        color: "from-yellow-500/20 to-orange-600/20",
        tags: ["React", "MindAR", "AFrame", "ExpressJS"],
        link: "#",
        github: "#",

        details: {
            overview: "Katalog produk WebAR tanpa install aplikasi.",

            features: [
                "Web Native AR",
                "MindAR integration",
                "CMS Upload Aset",
                "Asset optimization"
            ],

            stack: "React, MindAR, ExpressJS"
        }
    },

    {
        id: 9,
        slug: "medical-system",
        title: "Sistem Medis Digital",
        cat: "Web",
        desc: "Manajemen klinik digital dengan rekam medis adaptif.",
        image: "/projects/medical.png",
        color: "from-green-500/20 to-emerald-600/20",
        tags: ["Laravel", "Filament", "Livewire"],
        link: "#",
        github: "#",

        details: {
            overview: "Sistem manajemen klinik digital.",

            features: [
                "Form medis dinamis",
                "Jadwal dokter otomatis",
                "Analitik pasien",
                "Laporan PDF"
            ],

            stack: "Laravel, Livewire"
        }
    },

    {
        id: 10,
        slug: "floodguard-iot",
        title: "FloodGuard IoT",
        cat: "IoT & Web",
        desc: "Dashboard monitoring banjir realtime.",
        image: "/projects/floodguard.png",
        color: "from-cyan-500/20 to-blue-600/20",
        featured: true,
        tags: ["Arduino", "Express", "SQLite", "ChartJS"],
        link: "#",
        github: "#",

        details: {
            overview: "Sistem monitoring banjir berbasis IoT.",

            features: [
                "Serial to Web Gateway",
                "Interactive Dashboard",
                "Alert System",
                "SQLite Logging"
            ],

            stack: "Arduino, Express, SQLite"
        }
    }

]