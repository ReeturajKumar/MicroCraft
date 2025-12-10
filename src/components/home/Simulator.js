import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, MessageSquare, Puzzle, Users, Inbox, Send, FileCheck, Mail, BarChart3, Plus, Settings, CheckCircle2, } from "lucide-react";
/* ---------- ASSETS ---------- */
const AVA_IMG = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80";
const USER_IMG = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&q=80";
/* ---------- MOCK DATA ---------- */
const generateLeads = () => [
    {
        name: "Aisha Patel",
        company: "TechWorld",
        role: "CEO",
        score: 92,
        status: "Responded",
        color: "text-green-600 bg-green-50",
    },
    {
        name: "Dennis Jackson",
        company: "Pinkus",
        role: "CTO",
        score: 88,
        status: "Responded",
        color: "text-green-600 bg-green-50",
    },
    {
        name: "Javier Rodriguez",
        company: "Innovate",
        role: "VP Sales",
        score: 75,
        status: "Replied",
        color: "text-blue-600 bg-blue-50",
    },
    {
        name: "Mei-Ling Chen",
        company: "Globaltech",
        role: "Director",
        score: 64,
        status: "Interested",
        color: "text-purple-600 bg-purple-50",
    },
    {
        name: "Sarah Connor",
        company: "SkyNet",
        role: "Ops Lead",
        score: 45,
        status: "Sent",
        color: "text-gray-600 bg-gray-50",
    },
    {
        name: "Dimitri Ivanov",
        company: "NextGen",
        role: "Founder",
        score: 82,
        status: "Responded",
        color: "text-green-600 bg-green-50",
    },
    {
        name: "Elara Vance",
        company: "Cypher",
        role: "Engineer",
        score: 30,
        status: "Bounced",
        color: "text-red-600 bg-red-50",
    },
    {
        name: "Marcus Aurelius",
        company: "Rome Inc",
        role: "Manager",
        score: 55,
        status: "Opened",
        color: "text-yellow-600 bg-yellow-50",
    },
];
const generateMailboxes = () => [
    {
        email: "jane@aluratech.com",
        sent: 120,
        cap: 85,
        status: "Healthy",
        health: 98,
    },
    {
        email: "tiffany@aluratech.com",
        sent: 85,
        cap: 60,
        status: "Warming Up",
        health: 92,
    },
    {
        email: "carlos@aluratech.com",
        sent: 45,
        cap: 40,
        status: "Issues",
        health: 75,
    },
    {
        email: "support@aluratech.com",
        sent: 200,
        cap: 95,
        status: "Healthy",
        health: 99,
    },
    {
        email: "sales@aluratech.com",
        sent: 150,
        cap: 90,
        status: "Healthy",
        health: 97,
    },
    {
        email: "marketing@aluratech.com",
        sent: 30,
        cap: 20,
        status: "Cooldown",
        health: 88,
    },
];
/* ---------- HELPERS ---------- */
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
/* ---------- MAIN COMPONENT ---------- */
const Simulator = () => {
    const [activeTab, setActiveTab] = useState("campaigns");
    // State for the Automated Cursor inside the dashboard
    const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });
    // State for the Real User Mouse (for background effect)
    const [userMousePos, setUserMousePos] = useState({ x: 0, y: 0 });
    const [clickEffect, setClickEffect] = useState(false);
    const [leadHovered, setLeadHovered] = useState(false);
    const [toggleActive, setToggleActive] = useState(false);
    const leads = generateLeads();
    const mailboxes = generateMailboxes();
    // Handle Real Mouse Movement for Spotlight
    const handleSpotlightMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setUserMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };
    useEffect(() => {
        let mounted = true;
        const runScenario = async () => {
            // 1. CAMPAIGNS VIEW
            setActiveTab("campaigns");
            setCursorPos({ x: "60%", y: "60%" });
            await wait(3000);
            // 2. MOVE TO LEADS
            setCursorPos({ x: "12%", y: "35%" });
            await wait(800);
            if (mounted)
                triggerClick();
            if (mounted)
                setActiveTab("leads");
            // 3. HOVER OVER DENNIS (2nd row)
            await wait(1000);
            setCursorPos({ x: "50%", y: "32%" });
            await wait(800);
            if (mounted)
                setLeadHovered(true);
            await wait(2500);
            if (mounted)
                setLeadHovered(false);
            // 4. MOVE TO MAILBOXES
            setCursorPos({ x: "12%", y: "55%" });
            await wait(1000);
            if (mounted)
                triggerClick();
            if (mounted)
                setActiveTab("mailboxes");
            await wait(1000);
            // 5. CLICK TOGGLE SWITCH (3rd row)
            setCursorPos({ x: "90%", y: "45%" });
            await wait(800);
            if (mounted)
                triggerClick();
            if (mounted)
                setToggleActive(true);
            await wait(1500);
            // 6. MOVE TO INBOX
            setCursorPos({ x: "12%", y: "40%" });
            await wait(1000);
            if (mounted)
                triggerClick();
            if (mounted)
                setActiveTab("inbox");
            await wait(4000);
            // Reset and loop
            if (mounted) {
                setToggleActive(false);
                runScenario();
            }
        };
        runScenario();
        return () => {
            mounted = false;
        };
    }, []);
    const triggerClick = () => {
        setClickEffect(true);
        setTimeout(() => setClickEffect(false), 250);
    };
    /* ---------- Render ---------- */
    return (
    // Outer container tracks mouse and holds background effects
    _jsxs("section", { onMouseMove: handleSpotlightMove, className: "relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center py-20 font-sans", children: [_jsx("div", { className: "absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" }), _jsx("div", { className: "absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" }), _jsx("div", { className: "absolute inset-0 pointer-events-none z-0", style: {
                    backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                    maskImage: `radial-gradient(400px circle at ${userMousePos.x}px ${userMousePos.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(400px circle at ${userMousePos.x}px ${userMousePos.y}px, black, transparent)`,
                } }), _jsx("div", { className: "absolute pointer-events-none h-[300px] w-[300px] rounded-full bg-violet-400/10 blur-[80px] transition-transform duration-75 ease-out z-0", style: {
                    left: userMousePos.x,
                    top: userMousePos.y,
                    transform: "translate(-50%, -50%)",
                } }), _jsxs("div", { className: "relative z-10 text-center mb-8 max-w-7xl mx-auto px-4 mt-10", children: [_jsxs("h2", { className: "text-4xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight", children: ["Your Entire Business", " ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600", children: "One Command Center" })] }), _jsx("p", { className: "text-lg text-gray-500 leading-relaxed max-w-2xl", children: "Stop switching between 10 different tabs. Manage leads, campaigns, and support in a single, unified interface designed for speed." })] }), _jsx("div", { className: "w-full max-w-7xl mx-auto flex justify-center items-center perspective-[2000px] z-10 px-4", children: _jsxs(motion.div, { initial: {
                        opacity: 0,
                        rotateX: 20,
                        scale: 0.85,
                        y: 50,
                    }, whileInView: {
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        y: 0,
                    }, transition: {
                        duration: 0.8,
                        ease: "easeOut",
                    }, viewport: { once: true, amount: 0.3 }, className: "relative w-full aspect-[16/10] max-h-[750px] bg-white rounded-xl shadow-2xl overflow-hidden flex border border-gray-200 font-sans text-slate-900 transform-style-3d", children: [_jsxs("div", { className: "w-64 bg-white border-r border-gray-100 flex flex-col p-4 z-20 shrink-0", children: [_jsx("div", { className: "mb-8 pl-2", children: _jsxs("h1", { className: "text-xl font-bold tracking-tight flex items-center gap-2", children: ["MICROCRAFT", " ", _jsx("span", { className: "w-2 h-2 rounded-full bg-purple-600" })] }) }), _jsxs("div", { className: "space-y-1", children: [_jsx(SidebarItem, { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", active: activeTab }), _jsx(SidebarItem, { icon: MessageSquare, label: "Chat With Us", id: "chat", active: activeTab }), _jsx(SidebarItem, { icon: Puzzle, label: "Integrations", id: "integrations", active: activeTab }), _jsx(SidebarItem, { icon: Users, label: "Leads", id: "leads", active: activeTab }), _jsx("div", { className: "pt-4 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-3", children: "Outbound" }), _jsxs("div", { className: "flex justify-between items-center pr-2", children: [_jsx(SidebarItem, { icon: Inbox, label: "Inbox", id: "inbox", active: activeTab }), _jsx("span", { className: "text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded", children: "120" })] }), _jsx(SidebarItem, { icon: Send, label: "Campaigns", id: "campaigns", active: activeTab }), _jsxs("div", { className: "flex justify-between items-center pr-2", children: [_jsx(SidebarItem, { icon: FileCheck, label: "Pending Approval", id: "pending", active: activeTab }), _jsx("span", { className: "text-xs text-white bg-purple-500 px-1.5 py-0.5 rounded", children: "129" })] }), _jsx(SidebarItem, { icon: Mail, label: "Mailboxes", id: "mailboxes", active: activeTab }), _jsx(SidebarItem, { icon: BarChart3, label: "Analytics", id: "analytics", active: activeTab })] }), _jsxs("div", { className: "mt-auto flex items-center gap-3 pt-4 border-t border-gray-100", children: [_jsx("img", { src: USER_IMG, className: "w-8 h-8 rounded-full", alt: "user" }), _jsxs("div", { className: "text-xs", children: [_jsx("div", { className: "font-bold text-gray-800", children: "Dennis Jackson" }), _jsx("div", { className: "text-gray-400", children: "Pro Plan" })] }), _jsx(Settings, { className: "w-4 h-4 text-gray-400 ml-auto" })] })] }), _jsxs("div", { className: "flex-1 bg-gray-50/50 relative overflow-hidden flex flex-col", children: [_jsxs("div", { className: "h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0", children: [_jsxs("div", { className: "flex items-center gap-4 text-gray-500 text-sm", children: [_jsx("span", { className: "text-gray-900 font-bold capitalize text-lg", children: activeTab }), activeTab === "mailboxes" && (_jsx("span", { className: "bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full text-xs font-medium", children: "System Healthy" })), activeTab === "leads" && (_jsx("span", { className: "bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full text-xs font-medium", children: "10,420 Total" }))] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { className: "p-2 bg-white border border-gray-200 rounded-lg text-gray-500", children: _jsx(Settings, { size: 14 }) }), _jsxs("button", { className: "flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium shadow-sm hover:bg-gray-800", children: [_jsx(Plus, { size: 14 }), " Add New"] })] })] }), _jsx("div", { className: "flex-1 p-6 overflow-hidden relative", children: _jsxs(AnimatePresence, { mode: "wait", children: [activeTab === "campaigns" && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "w-full h-full relative", children: [_jsx("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" }), _jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center", children: _jsxs("div", { className: "w-20 h-20 rounded-full bg-white border-4 border-purple-100 shadow-2xl flex items-center justify-center relative", children: [_jsx("img", { src: AVA_IMG, className: "w-full h-full rounded-full object-cover p-1", alt: "us" }), _jsx("div", { className: "absolute -bottom-2 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full", children: "Active" })] }) }), _jsx(CampaignNode, { label: "LinkedIn Scraper", top: "15%", left: "50%", icon: "" }), _jsx(CampaignNode, { label: "Email Validator", top: "25%", left: "25%", icon: "" }), _jsx(CampaignNode, { label: "Tone Analyzer", top: "25%", left: "75%", icon: "" }), _jsx(CampaignNode, { label: "Follow-up Seq A", top: "50%", left: "10%", icon: "" }), _jsx(CampaignNode, { label: "Follow-up Seq B", top: "50%", left: "90%", icon: "" }), _jsx(CampaignNode, { label: "CRM Sync", top: "75%", left: "25%", icon: "" }), _jsx(CampaignNode, { label: "Meeting Booker", top: "75%", left: "75%", icon: "" }), _jsx(CampaignNode, { label: "Revenue Analytics", top: "85%", left: "50%", icon: "" }), _jsxs("svg", { className: "absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30", children: [_jsx("path", { d: "M600 375 L 600 120", stroke: "#9333ea", strokeWidth: "2", strokeDasharray: "4,4" }), _jsx("path", { d: "M600 375 L 300 190", stroke: "#9333ea", strokeWidth: "2" }), _jsx("path", { d: "M600 375 L 900 190", stroke: "#9333ea", strokeWidth: "2" }), _jsx("path", { d: "M300 190 L 120 375", stroke: "#9333ea", strokeWidth: "2" }), _jsx("path", { d: "M900 190 L 1080 375", stroke: "#9333ea", strokeWidth: "2" })] })] }, "campaigns")), activeTab === "leads" && (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "w-full h-full flex flex-col gap-4", children: [_jsxs("div", { className: "grid grid-cols-4 gap-4 mb-2", children: [_jsxs("div", { className: "bg-white p-3 rounded-lg border border-gray-200 shadow-sm", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Total Leads" }), _jsx("div", { className: "text-xl font-bold", children: "10,240" }), _jsx("div", { className: "h-1 w-full bg-gray-100 mt-2 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-purple-500 w-[70%]" }) })] }), _jsxs("div", { className: "bg-white p-3 rounded-lg border border-gray-200 shadow-sm", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Qualified" }), _jsx("div", { className: "text-xl font-bold", children: "4,120" }), _jsx("div", { className: "h-1 w-full bg-gray-100 mt-2 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-green-500 w-[40%]" }) })] }), _jsxs("div", { className: "bg-white p-3 rounded-lg border border-gray-200 shadow-sm", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Bounced" }), _jsx("div", { className: "text-xl font-bold", children: "120" }), _jsx("div", { className: "h-1 w-full bg-gray-100 mt-2 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-red-500 w-[10%]" }) })] }), _jsxs("div", { className: "bg-white p-3 rounded-lg border border-gray-200 shadow-sm", children: [_jsx("div", { className: "text-xs text-gray-500", children: "Response Rate" }), _jsx("div", { className: "text-xl font-bold", children: "18.4%" }), _jsx("div", { className: "h-1 w-full bg-gray-100 mt-2 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-blue-500 w-[60%]" }) })] })] }), _jsxs("div", { className: "bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex-1 flex flex-col", children: [_jsxs("div", { className: "grid grid-cols-12 px-4 py-3 border-b border-gray-100 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider", children: [_jsx("div", { className: "col-span-3", children: "Name / Company" }), _jsx("div", { className: "col-span-2", children: "Role" }), _jsx("div", { className: "col-span-3", children: "Lead Score" }), _jsx("div", { className: "col-span-2", children: "Engagement" }), _jsx("div", { className: "col-span-2 text-right", children: "Status" })] }), _jsx("div", { className: "overflow-y-auto no-scrollbar flex-1", children: leads.map((lead, i) => (_jsxs("div", { className: `relative grid grid-cols-12 px-4 py-2.5 border-b border-gray-50 items-center hover:bg-purple-50/50 transition-colors ${i === 1 && leadHovered ? "bg-purple-50" : ""}`, children: [_jsxs("div", { className: "col-span-3 flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600", children: lead.name.charAt(0) }), _jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold text-gray-900", children: lead.name }), _jsx("div", { className: "text-[10px] text-gray-400", children: lead.company })] })] }), _jsx("div", { className: "col-span-2 text-xs text-gray-600", children: lead.role }), _jsx("div", { className: "col-span-3 pr-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-[10px] font-bold w-4", children: lead.score }), _jsx("div", { className: "flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden", children: _jsx("div", { className: `h-full rounded-full ${lead.score > 80
                                                                                                ? "bg-green-500"
                                                                                                : lead.score > 50
                                                                                                    ? "bg-yellow-500"
                                                                                                    : "bg-red-500"}`, style: { width: `${lead.score}%` } }) })] }) }), _jsx("div", { className: "col-span-2", children: _jsx("div", { className: "flex items-end gap-0.5 h-4 w-12 opacity-50", children: [1, 2, 3, 4, 5].map((k) => (_jsx("div", { className: "w-1 bg-purple-600 rounded-t-sm", style: {
                                                                                        height: `${20 + ((k * 12) % 80)}%`,
                                                                                    } }, k))) }) }), _jsx("div", { className: "col-span-2 flex justify-end", children: _jsx("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${lead.color}`, children: lead.status }) }), i === 1 && (_jsx(AnimatePresence, { children: leadHovered && (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9, x: 20 }, animate: { opacity: 1, scale: 1, x: 0 }, exit: { opacity: 0, scale: 0.9 }, className: "absolute top-0 right-[100px] w-[300px] bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50", children: [_jsxs("div", { className: "flex justify-between items-start mb-3", children: [_jsxs("div", { className: "flex gap-3", children: [_jsx("img", { src: USER_IMG, className: "w-10 h-10 rounded-full", alt: "u" }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-gray-900", children: "Dennis Jackson" }), _jsx("p", { className: "text-[10px] text-gray-500", children: "CTO at Pinkus" })] })] }), _jsx("div", { className: "text-green-600 text-xs font-bold", children: "98% Match" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "h-16 bg-gray-50 rounded border border-gray-100 p-2 text-[10px] text-gray-500 leading-relaxed", children: "Recent Activity: Viewed pricing page 3 times. Opened \"Q4 Strategy\" email." }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "flex-1 bg-purple-600 text-white text-xs py-1.5 rounded", children: "Email" }), _jsx("button", { className: "flex-1 bg-white border border-gray-200 text-gray-600 text-xs py-1.5 rounded", children: "LinkedIn" })] })] })] })) }))] }, i))) })] })] }, "leads")), activeTab === "mailboxes" && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "w-full h-full flex flex-col gap-6", children: [_jsxs("div", { className: "grid grid-cols-4 gap-4", children: [_jsx(StatCard, { label: "Total Sent", value: "12,598", sub: "+12%", icon: _jsx(Send, { size: 16, className: "text-purple-500" }) }), _jsx(StatCard, { label: "Warmup Rate", value: "98%", sub: "Optimal", icon: _jsx(MessageSquare, { size: 16, className: "text-green-500" }) }), _jsx(StatCard, { label: "Spam Rate", value: "0.02%", sub: "Excellent", icon: _jsx(CheckCircle2, { size: 16, className: "text-blue-500" }) }), _jsx(StatCard, { label: "Domain Health", value: "100%", sub: "Verified", icon: _jsx(BarChart3, { size: 16, className: "text-red-500" }) })] }), _jsxs("div", { className: "bg-white rounded-xl border border-gray-200 overflow-hidden flex-1 flex flex-col shadow-sm", children: [_jsxs("div", { className: "px-6 py-3 border-b border-gray-100 font-bold text-gray-500 text-[10px] uppercase grid grid-cols-12 gap-4", children: [_jsx("div", { className: "col-span-4", children: "Account" }), _jsx("div", { className: "col-span-2", children: "Sent Today" }), _jsx("div", { className: "col-span-3", children: "Capacity Load" }), _jsx("div", { className: "col-span-2", children: "Health" }), _jsx("div", { className: "col-span-1 text-right", children: "Action" })] }), _jsx("div", { className: "overflow-y-auto no-scrollbar flex-1", children: mailboxes.map((box, i) => (_jsxs("div", { className: "grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-50 items-center hover:bg-gray-50/50", children: [_jsxs("div", { className: "col-span-4 flex items-center gap-3", children: [_jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-blue-500`, children: box.email.charAt(0).toUpperCase() }), _jsx("div", { className: "text-xs font-medium text-gray-800 truncate", children: box.email })] }), _jsxs("div", { className: "col-span-2 text-xs font-bold text-gray-600", children: [box.sent, " ", _jsxs("span", { className: "text-[10px] text-gray-400 font-normal", children: ["/ ", box.cap] })] }), _jsx("div", { className: "col-span-3 flex items-end gap-1 h-6", children: [...Array(10)].map((_, j) => (_jsx("div", { className: `flex-1 rounded-t-sm ${j > 7 ? "bg-gray-200" : "bg-purple-400"}`, style: {
                                                                                    height: `${20 + ((j * 7) % 80)}%`,
                                                                                } }, j))) }), _jsx("div", { className: "col-span-2", children: _jsxs("span", { className: `px-2 py-0.5 text-[10px] rounded-full font-medium border ${box.health > 90
                                                                                    ? "bg-green-50 text-green-700 border-green-100"
                                                                                    : "bg-yellow-50 text-yellow-700 border-yellow-100"}`, children: [box.health, "% ", box.status] }) }), _jsx("div", { className: "col-span-1 flex justify-end", children: i === 2 ? (_jsx("div", { className: `w-8 h-4 rounded-full p-0.5 transition-colors duration-300 cursor-pointer ${toggleActive
                                                                                    ? "bg-purple-600"
                                                                                    : "bg-gray-300"}`, children: _jsx(motion.div, { layout: true, className: "w-3 h-3 bg-white rounded-full shadow-sm", animate: { x: toggleActive ? 16 : 0 } }) })) : (_jsx("div", { className: "w-8 h-4 rounded-full bg-purple-600 p-0.5 flex justify-end", children: _jsx("div", { className: "w-3 h-3 bg-white rounded-full" }) })) })] }, i))) })] })] }, "mailboxes")), activeTab === "inbox" && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "w-full h-full bg-white rounded-xl border border-gray-200 flex shadow-sm overflow-hidden", children: [_jsxs("div", { className: "flex-1 flex flex-col border-r border-gray-100", children: [_jsxs("div", { className: "p-6 border-b border-gray-100", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Congrats on the Tennis Cup!" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "px-2 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded border border-purple-100", children: "AI Draft" }), _jsx("span", { className: "px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold rounded border border-gray-200", children: "High Priority" })] })] }), _jsxs("div", { className: "flex gap-2 text-sm text-gray-500 items-center", children: [_jsx("div", { className: "w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600", children: "J" }), _jsx("span", { className: "font-bold text-gray-700", children: "To:" }), " ", "jane@aluratech.com"] })] }), _jsxs("div", { className: "p-6 flex-1 text-gray-700 leading-relaxed text-sm overflow-y-auto", children: [_jsx("p", { className: "mb-4", children: "Hi Jane," }), _jsxs("p", { className: "mb-4 bg-purple-50 p-2 rounded border-l-2 border-purple-500", children: [_jsx("span", { className: "text-purple-700 font-bold text-xs block mb-1", children: "AI Personalization" }), "I saw your recent tweet about winning the NY local tennis cup, congrats! I'm reaching out because we've created an all-in-one product that can centralize your support across channels."] }), _jsx("p", { className: "mb-4", children: "We're already working with 23 other vertical farm providers, and I'm confident we'll be a great fit for you." }), _jsxs("div", { className: "my-4 border rounded-lg p-3 flex gap-3 items-center", children: [_jsx(BarChart3, { className: "text-gray-400", size: 20 }), _jsxs("div", { className: "text-xs", children: [_jsx("div", { className: "font-bold text-gray-900", children: "Q3 Case Study.pdf" }), _jsx("div", { className: "text-gray-400", children: "1.2 MB" })] })] }), _jsxs("p", { children: ["Best,", _jsx("br", {}), "Joseph"] })] }), _jsxs("div", { className: "p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center", children: [_jsxs("div", { className: "text-xs text-gray-400 flex items-center gap-2", children: [_jsx(CheckCircle2, { size: 12, className: "text-green-500" }), " ", "Autosaved 2m ago"] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { className: "px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-medium hover:bg-gray-50", children: "Discard" }), _jsx("button", { className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-xs font-medium shadow-md hover:shadow-lg", children: "Smart Schedule" })] })] })] }), _jsxs("div", { className: "w-72 bg-gray-50 p-4 flex flex-col gap-4", children: [_jsxs("div", { className: "bg-white p-3 rounded-lg border border-gray-200 shadow-sm", children: [_jsx("h4", { className: "text-xs font-bold text-gray-900 mb-2", children: "Lead Insights" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-[10px] text-gray-500", children: [_jsx("span", { children: "Open Rate" }), _jsx("span", { className: "font-bold text-gray-900", children: "45%" })] }), _jsxs("div", { className: "flex justify-between text-[10px] text-gray-500", children: [_jsx("span", { children: "Click Rate" }), _jsx("span", { className: "font-bold text-gray-900", children: "12%" })] }), _jsx("div", { className: "h-1 bg-gray-100 rounded-full mt-1", children: _jsx("div", { className: "h-full bg-green-500 w-[45%]" }) })] })] }), _jsxs("div", { className: "bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex-1", children: [_jsx("h4", { className: "text-xs font-bold text-gray-900 mb-3", children: "History" }), _jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => (_jsxs("div", { className: "relative pl-4 border-l border-gray-200", children: [_jsx("div", { className: "absolute -left-1 top-0 w-2 h-2 bg-gray-300 rounded-full" }), _jsx("div", { className: "text-[10px] font-bold text-gray-800", children: "Email Sent" }), _jsx("div", { className: "text-[9px] text-gray-400", children: "2 days ago \u2022 Automation" })] }, i))) })] })] })] }, "inbox"))] }) }), _jsx(motion.div, { className: "absolute pointer-events-none z-50", animate: {
                                        left: cursorPos.x,
                                        top: cursorPos.y,
                                        scale: clickEffect ? 0.9 : 1,
                                    }, transition: {
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20,
                                        mass: 0.5,
                                    }, style: { transform: "translate(-50%, -50%)" }, children: _jsxs("div", { className: "relative", children: [_jsx("img", { src: AVA_IMG, alt: "primary", className: "w-12 h-12 rounded-full ring-2 ring-white shadow-lg" }), _jsx(AnimatePresence, { children: clickEffect && (_jsx(motion.div, { initial: { scale: 0, opacity: 0.5 }, animate: { scale: 2, opacity: 0 }, exit: { opacity: 0 }, className: "absolute -top-3 -left-3 w-14 h-14 bg-purple-500 rounded-full opacity-40" })) })] }) })] })] }) })] }));
};
/* ---------- SUBCOMPONENTS ---------- */
const SidebarItem = ({ icon: Icon, label, id, active, }) => (_jsxs("div", { className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active === id
        ? "bg-purple-50 text-purple-700"
        : "text-gray-500 hover:bg-gray-100"}`, children: [_jsx(Icon, { size: 18 }), label] }));
const CampaignNode = ({ label, top, left, icon, }) => (_jsxs("div", { className: "absolute px-4 py-3 rounded-xl shadow-lg border bg-white flex items-center gap-3 border-gray-200", style: { top, left, transform: "translate(-50%, -50%)" }, children: [_jsx("div", { className: "", children: icon }), _jsxs("div", { children: [_jsx("span", { className: "font-bold text-xs block text-gray-800", children: label }), _jsx("span", { className: "text-[9px] text-green-500 font-bold", children: "Active \u2022 98%" })] })] }));
const StatCard = ({ label, value, sub, icon }) => (_jsxs("div", { className: "bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between", children: [_jsxs("div", { children: [_jsx("span", { className: "text-xs text-gray-400 font-bold uppercase tracking-wider", children: label }), _jsx("div", { className: "text-2xl font-bold text-gray-900 mt-1", children: value }), _jsx("div", { className: "text-xs text-green-500 font-medium mt-1", children: sub })] }), _jsx("div", { className: "p-2 bg-gray-50 rounded-lg", children: icon })] }));
export default Simulator;
