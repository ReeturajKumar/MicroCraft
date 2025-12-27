/* eslint-disable react-hooks/immutability */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  Puzzle,
  Users,
  Inbox,
  Send,
  FileCheck,
  Mail,
  BarChart3,
  Plus,
  Settings,
  CheckCircle2,
} from "lucide-react";

/* ---------- ASSETS ---------- */
const AVA_IMG =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80";
const USER_IMG =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&q=80";

/* ---------- TYPES ---------- */
type CursorPos = { x: string; y: string };

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  id: string;
  active: string;
};

type CampaignNodeProps = {
  label: string;
  top: string;
  left: string;
  color?: string;
  icon?: string | React.ReactNode;
};

type StatCardProps = {
  label: string;
  value: string;
  sub?: string;
  icon?: React.ReactNode;
};

type Lead = {
  name: string;
  company: string;
  role: string;
  score: number;
  status: string;
  color: string;
};

type Mailbox = {
  email: string;
  sent: number;
  cap: number;
  status: string;
  health: number;
};

/* ---------- MOCK DATA ---------- */
const generateLeads = (): Lead[] => [
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

const generateMailboxes = (): Mailbox[] => [
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
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

/* ---------- MAIN COMPONENT ---------- */
const Simulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("campaigns");

  // State for the Automated Cursor inside the dashboard
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: "50%", y: "50%" });

  // State for the Real User Mouse (for background effect)
  const [userMousePos, setUserMousePos] = useState({ x: 0, y: 0 });

  const [clickEffect, setClickEffect] = useState<boolean>(false);
  const [leadHovered, setLeadHovered] = useState<boolean>(false);
  const [toggleActive, setToggleActive] = useState<boolean>(false);

  const leads = generateLeads();
  const mailboxes = generateMailboxes();

  // Handle Real Mouse Movement for Spotlight
  const handleSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      if (mounted) triggerClick();
      if (mounted) setActiveTab("leads");

      // 3. HOVER OVER DENNIS (2nd row)
      await wait(1000);
      setCursorPos({ x: "50%", y: "32%" });
      await wait(800);
      if (mounted) setLeadHovered(true);
      await wait(2500);
      if (mounted) setLeadHovered(false);

      // 4. MOVE TO MAILBOXES
      setCursorPos({ x: "12%", y: "55%" });
      await wait(1000);
      if (mounted) triggerClick();
      if (mounted) setActiveTab("mailboxes");
      await wait(1000);

      // 5. CLICK TOGGLE SWITCH (3rd row)
      setCursorPos({ x: "90%", y: "45%" });
      await wait(800);
      if (mounted) triggerClick();
      if (mounted) setToggleActive(true);
      await wait(1500);

      // 6. MOVE TO INBOX
      setCursorPos({ x: "12%", y: "40%" });
      await wait(1000);
      if (mounted) triggerClick();
      if (mounted) setActiveTab("inbox");
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
    <section
      onMouseMove={handleSpotlightMove}
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center font-sans py-8"
    >
      {/* ========================================================
          BACKGROUND LAYERS
      ======================================================== */}

      {/* 1. Base Gradient (Subtle Ambient Light) */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      {/* 2. THE SPOTLIGHT GRID (Reveals only on hover) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: `radial-gradient(400px circle at ${userMousePos.x}px ${userMousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${userMousePos.x}px ${userMousePos.y}px, black, transparent)`,
        }}
      />

      {/* 3. THE GLOWING CURSOR BALL (Follows mouse) */}
      <div
        className="absolute pointer-events-none h-[300px] w-[300px] rounded-full bg-violet-400/10 blur-[80px] transition-transform duration-75 ease-out z-0"
        style={{
          left: userMousePos.x,
          top: userMousePos.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 text-center mb-6 max-w-6xl mx-auto px-4">
        <h2 className="simulator-heading mb-3">
          Your Entire Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            One Command Center
          </span>
        </h2>

        <p className="simulator-subheading max-w-2xl mx-auto">
          Stop switching between 10 different tabs. Manage leads, campaigns, and
          support in a single, unified interface designed for speed.
        </p>
      </div>

      {/* ========================================================
          DASHBOARD SIMULATOR CONTENT
      ======================================================== */}

      <div className="w-full max-w-6xl mx-auto flex justify-center items-center perspective-[2000px] z-10 px-4 flex-1">
        <motion.div
          initial={{
            opacity: 0,
            rotateX: 20,
            scale: 0.85,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            rotateX: 0,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full aspect-[16/10] max-h-[580px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex border border-gray-200 font-sans text-slate-900 transform-style-3d"
        >
          {/* SIDEBAR */}
          <div className="w-64 bg-white border-r border-gray-100 flex flex-col p-5 z-20 shrink-0">
            <div className="mb-8 pl-2">
              <h1 className="simulator-brand-name flex items-center gap-2">
                MICROCRAFT{" "}
                <span className="w-2 h-2 rounded-full bg-purple-600" />
              </h1>
            </div>

            <div className="space-y-1">
              <SidebarItem
                icon={LayoutDashboard}
                label="Dashboard"
                id="dashboard"
                active={activeTab}
              />
              <SidebarItem
                icon={MessageSquare}
                label="Chat With Us"
                id="chat"
                active={activeTab}
              />
              <SidebarItem
                icon={Puzzle}
                label="Integrations"
                id="integrations"
                active={activeTab}
              />
              <SidebarItem
                icon={Users}
                label="Leads"
                id="leads"
                active={activeTab}
              />

              <div className="simulator-sidebar-section-label">Outbound</div>

              <div className="flex justify-between items-center pr-2">
                <SidebarItem
                  icon={Inbox}
                  label="Inbox"
                  id="inbox"
                  active={activeTab}
                />
                <span className="simulator-badge-gray">120</span>
              </div>

              <SidebarItem
                icon={Send}
                label="Campaigns"
                id="campaigns"
                active={activeTab}
              />

              <div className="flex justify-between items-center pr-2">
                <SidebarItem
                  icon={FileCheck}
                  label="Pending Approval"
                  id="pending"
                  active={activeTab}
                />
                <span className="simulator-badge-purple">129</span>
              </div>

              <SidebarItem
                icon={Mail}
                label="Mailboxes"
                id="mailboxes"
                active={activeTab}
              />
              <SidebarItem
                icon={BarChart3}
                label="Analytics"
                id="analytics"
                active={activeTab}
              />
            </div>

            <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
              <img
                src={USER_IMG}
                className="w-9 h-9 rounded-full ring-2 ring-gray-100"
                alt="user"
              />
              <div className="text-xs flex-1">
                <div className="font-semibold text-gray-900">
                  Dennis Jackson
                </div>
                <div className="text-gray-500 text-[11px]">Pro Plan</div>
              </div>
              <Settings className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 bg-gray-50/50 relative overflow-hidden flex flex-col">
            {/* Header */}
            <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="simulator-tab-title capitalize">
                  {activeTab}
                </span>
                {activeTab === "mailboxes" && (
                  <span className="bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full text-xs font-medium">
                    System Healthy
                  </span>
                )}
                {activeTab === "leads" && (
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full text-xs font-medium">
                    10,420 Total
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button className="simulator-header-button">
                  <Settings size={14} />
                </button>
                <button className="simulator-add-button">
                  <Plus size={14} /> Add New
                </button>
              </div>
            </div>

            {/* Views container */}
            <div className="flex-1 p-6 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {/* Campaigns View */}
                {activeTab === "campaigns" && (
                  <motion.div
                    key="campaigns"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full relative"
                  >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-white border-4 border-purple-100 shadow-2xl flex items-center justify-center relative">
                        <img
                          src={AVA_IMG}
                          className="w-full h-full rounded-full object-cover p-1"
                          alt="us"
                        />
                        <div className="absolute -bottom-2 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                          Active
                        </div>
                      </div>
                    </div>

                    <CampaignNode
                      label="LinkedIn Scraper"
                      top="15%"
                      left="50%"
                      icon=""
                    />
                    <CampaignNode
                      label="Email Validator"
                      top="25%"
                      left="25%"
                      icon=""
                    />
                    <CampaignNode
                      label="Tone Analyzer"
                      top="25%"
                      left="75%"
                      icon=""
                    />
                    <CampaignNode
                      label="Follow-up Seq A"
                      top="50%"
                      left="10%"
                      icon=""
                    />
                    <CampaignNode
                      label="Follow-up Seq B"
                      top="50%"
                      left="90%"
                      icon=""
                    />
                    <CampaignNode
                      label="CRM Sync"
                      top="75%"
                      left="25%"
                      icon=""
                    />
                    <CampaignNode
                      label="Meeting Booker"
                      top="75%"
                      left="75%"
                      icon=""
                    />
                    <CampaignNode
                      label="Revenue Analytics"
                      top="85%"
                      left="50%"
                      icon=""
                    />

                    {/* Decorative Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30">
                      <path
                        d="M600 375 L 600 120"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                      />
                      <path
                        d="M600 375 L 300 190"
                        stroke="#9333ea"
                        strokeWidth="2"
                      />
                      <path
                        d="M600 375 L 900 190"
                        stroke="#9333ea"
                        strokeWidth="2"
                      />
                      <path
                        d="M300 190 L 120 375"
                        stroke="#9333ea"
                        strokeWidth="2"
                      />
                      <path
                        d="M900 190 L 1080 375"
                        stroke="#9333ea"
                        strokeWidth="2"
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Leads View */}
                {activeTab === "leads" && (
                  <motion.div
                    key="leads"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full h-full flex flex-col gap-4"
                  >
                    {/* Top metrics */}
                    <div className="grid grid-cols-4 gap-4 mb-2">
                      <div className="simulator-metric-card">
                        <div className="simulator-metric-label">
                          Total Leads
                        </div>
                        <div className="simulator-metric-value">10,240</div>
                        <div className="simulator-metric-bar">
                          <div className="simulator-metric-bar-fill bg-purple-500 w-[70%]" />
                        </div>
                      </div>
                      <div className="simulator-metric-card">
                        <div className="simulator-metric-label">Qualified</div>
                        <div className="simulator-metric-value">4,120</div>
                        <div className="simulator-metric-bar">
                          <div className="simulator-metric-bar-fill bg-green-500 w-[40%]" />
                        </div>
                      </div>
                      <div className="simulator-metric-card">
                        <div className="simulator-metric-label">Bounced</div>
                        <div className="simulator-metric-value">120</div>
                        <div className="simulator-metric-bar">
                          <div className="simulator-metric-bar-fill bg-red-500 w-[10%]" />
                        </div>
                      </div>
                      <div className="simulator-metric-card">
                        <div className="simulator-metric-label">
                          Response Rate
                        </div>
                        <div className="simulator-metric-value">18.4%</div>
                        <div className="simulator-metric-bar">
                          <div className="simulator-metric-bar-fill bg-blue-500 w-[60%]" />
                        </div>
                      </div>
                    </div>

                    {/* Leads table */}
                    <div className="simulator-table-container">
                      <div className="simulator-table-header">
                        <div className="col-span-3">Name / Company</div>
                        <div className="col-span-2">Role</div>
                        <div className="col-span-3">Lead Score</div>
                        <div className="col-span-2">Engagement</div>
                        <div className="col-span-2 text-right">Status</div>
                      </div>

                      <div className="simulator-table-body">
                        {leads.map((lead, i) => (
                          <div
                            key={i}
                            className={`simulator-table-row ${
                              i === 1 && leadHovered
                                ? "simulator-table-row-active"
                                : ""
                            }`}
                          >
                            <div className="col-span-3 flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                                {lead.name.charAt(0)}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-gray-900">
                                  {lead.name}
                                </div>
                                <div className="text-[10px] text-gray-400">
                                  {lead.company}
                                </div>
                              </div>
                            </div>
                            <div className="col-span-2 text-xs text-gray-600">
                              {lead.role}
                            </div>
                            <div className="col-span-3 pr-4">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold w-4">
                                  {lead.score}
                                </span>
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${
                                      lead.score > 80
                                        ? "bg-green-500"
                                        : lead.score > 50
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                    }`}
                                    style={{ width: `${lead.score}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-span-2">
                              <div className="flex items-end gap-0.5 h-4 w-12 opacity-50">
                                {[1, 2, 3, 4, 5].map((k) => (
                                  <div
                                    key={k}
                                    className="w-1 bg-purple-600 rounded-t-sm"
                                    style={{
                                      height: `${20 + ((k * 12) % 80)}%`,
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="col-span-2 flex justify-end">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lead.color}`}
                              >
                                {lead.status}
                              </span>
                            </div>

                            {/* Hover card for Dennis (index 1) */}
                            {i === 1 && (
                              <AnimatePresence>
                                {leadHovered && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute top-0 right-[100px] w-[300px] bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50"
                                  >
                                    <div className="flex justify-between items-start mb-3">
                                      <div className="flex gap-3">
                                        <img
                                          src={USER_IMG}
                                          className="w-10 h-10 rounded-full"
                                          alt="u"
                                        />
                                        <div>
                                          <h3 className="font-bold text-gray-900">
                                            Dennis Jackson
                                          </h3>
                                          <p className="text-[10px] text-gray-500">
                                            CTO at Pinkus
                                          </p>
                                        </div>
                                      </div>
                                      <div className="text-green-600 text-xs font-bold">
                                        98% Match
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <div className="h-16 bg-gray-50 rounded border border-gray-100 p-2 text-[10px] text-gray-500 leading-relaxed">
                                        Recent Activity: Viewed pricing page 3
                                        times. Opened "Q4 Strategy" email.
                                      </div>
                                      <div className="flex gap-2">
                                        <button className="flex-1 bg-purple-600 text-white text-xs py-1.5 rounded">
                                          Email
                                        </button>
                                        <button className="flex-1 bg-white border border-gray-200 text-gray-600 text-xs py-1.5 rounded">
                                          LinkedIn
                                        </button>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Mailboxes View */}
                {activeTab === "mailboxes" && (
                  <motion.div
                    key="mailboxes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      <StatCard
                        label="Total Sent"
                        value="12,598"
                        sub="+12%"
                        icon={<Send size={16} className="text-purple-500" />}
                      />
                      <StatCard
                        label="Warmup Rate"
                        value="98%"
                        sub="Optimal"
                        icon={
                          <MessageSquare size={16} className="text-green-500" />
                        }
                      />
                      <StatCard
                        label="Spam Rate"
                        value="0.02%"
                        sub="Excellent"
                        icon={
                          <CheckCircle2 size={16} className="text-blue-500" />
                        }
                      />
                      <StatCard
                        label="Domain Health"
                        value="100%"
                        sub="Verified"
                        icon={<BarChart3 size={16} className="text-red-500" />}
                      />
                    </div>

                    <div className="simulator-table-container">
                      <div className="simulator-table-header">
                        <div className="col-span-4">Account</div>
                        <div className="col-span-2">Sent Today</div>
                        <div className="col-span-3">Capacity Load</div>
                        <div className="col-span-2">Health</div>
                        <div className="col-span-1 text-right">Action</div>
                      </div>

                      <div className="simulator-table-body">
                        {mailboxes.map((box, i) => (
                          <div key={i} className="simulator-table-row">
                            <div className="col-span-4 flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-blue-500`}
                              >
                                {box.email.charAt(0).toUpperCase()}
                              </div>
                              <div className="text-xs font-medium text-gray-800 truncate">
                                {box.email}
                              </div>
                            </div>
                            <div className="col-span-2 text-xs font-bold text-gray-600">
                              {box.sent}{" "}
                              <span className="text-[10px] text-gray-400 font-normal">
                                / {box.cap}
                              </span>
                            </div>
                            <div className="col-span-3 flex items-end gap-1 h-6">
                              {[...Array(10)].map((_, j) => (
                                <div
                                  key={j}
                                  className={`flex-1 rounded-t-sm ${
                                    j > 7 ? "bg-gray-200" : "bg-purple-400"
                                  }`}
                                  style={{
                                    height: `${20 + ((j * 7) % 80)}%`,
                                  }}
                                />
                              ))}
                            </div>
                            <div className="col-span-2">
                              <span
                                className={`px-2 py-0.5 text-[10px] rounded-full font-medium border ${
                                  box.health > 90
                                    ? "bg-green-50 text-green-700 border-green-100"
                                    : "bg-yellow-50 text-yellow-700 border-yellow-100"
                                }`}
                              >
                                {box.health}% {box.status}
                              </span>
                            </div>
                            <div className="col-span-1 flex justify-end">
                              {i === 2 ? (
                                <div
                                  className={`w-8 h-4 rounded-full p-0.5 transition-colors duration-300 cursor-pointer ${
                                    toggleActive
                                      ? "bg-purple-600"
                                      : "bg-gray-300"
                                  }`}
                                >
                                  <motion.div
                                    layout
                                    className="w-3 h-3 bg-white rounded-full shadow-sm"
                                    animate={{ x: toggleActive ? 16 : 0 }}
                                  />
                                </div>
                              ) : (
                                <div className="w-8 h-4 rounded-full bg-purple-600 p-0.5 flex justify-end">
                                  <div className="w-3 h-3 bg-white rounded-full" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Inbox View */}
                {activeTab === "inbox" && (
                  <motion.div
                    key="inbox"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full bg-white rounded-xl border border-gray-200 flex shadow-sm overflow-hidden"
                  >
                    <div className="flex-1 flex flex-col border-r border-gray-100">
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-xl font-bold text-gray-900">
                            Congrats on the Tennis Cup!
                          </h2>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded border border-purple-100">
                              AI Draft
                            </span>
                            <span className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold rounded border border-gray-200">
                              High Priority
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 text-sm text-gray-500 items-center">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">
                            J
                          </div>
                          <span className="font-bold text-gray-700">To:</span>{" "}
                          jane@aluratech.com
                        </div>
                      </div>

                      <div className="p-6 flex-1 text-gray-700 leading-relaxed text-sm overflow-y-auto">
                        <p className="mb-4">Hi Jane,</p>
                        <p className="mb-4 bg-purple-50 p-2 rounded border-l-2 border-purple-500">
                          <span className="text-purple-700 font-bold text-xs block mb-1">
                            AI Personalization
                          </span>
                          I saw your recent tweet about winning the NY local
                          tennis cup, congrats! I'm reaching out because we've
                          created an all-in-one product that can centralize your
                          support across channels.
                        </p>
                        <p className="mb-4">
                          We're already working with 23 other vertical farm
                          providers, and I'm confident we'll be a great fit for
                          you.
                        </p>
                        <div className="my-4 border rounded-lg p-3 flex gap-3 items-center">
                          <BarChart3 className="text-gray-400" size={20} />
                          <div className="text-xs">
                            <div className="font-bold text-gray-900">
                              Q3 Case Study.pdf
                            </div>
                            <div className="text-gray-400">1.2 MB</div>
                          </div>
                        </div>
                        <p>
                          Best,
                          <br />
                          Joseph
                        </p>
                      </div>

                      <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-xs text-gray-400 flex items-center gap-2">
                          <CheckCircle2 size={12} className="text-green-500" />{" "}
                          Autosaved 2m ago
                        </div>
                        <div className="flex gap-3">
                          <button className="simulator-button-secondary">
                            Discard
                          </button>
                          <button className="simulator-button-primary">
                            Smart Schedule
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="w-72 bg-gray-50 p-4 flex flex-col gap-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-xs font-bold text-gray-900 mb-2">
                          Lead Insights
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] text-gray-500">
                            <span>Open Rate</span>
                            <span className="font-bold text-gray-900">45%</span>
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-500">
                            <span>Click Rate</span>
                            <span className="font-bold text-gray-900">12%</span>
                          </div>
                          <div className="h-1 bg-gray-100 rounded-full mt-1">
                            <div className="h-full bg-green-500 w-[45%]" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex-1">
                        <h4 className="text-xs font-bold text-gray-900 mb-3">
                          History
                        </h4>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="relative pl-4 border-l border-gray-200"
                            >
                              <div className="absolute -left-1 top-0 w-2 h-2 bg-gray-300 rounded-full" />
                              <div className="text-[10px] font-bold text-gray-800">
                                Email Sent
                              </div>
                              <div className="text-[9px] text-gray-400">
                                2 days ago • Automation
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Primary avatar (cursor) */}
            <motion.div
              className="absolute pointer-events-none z-50"
              animate={{
                left: cursorPos.x,
                top: cursorPos.y,
                scale: clickEffect ? 0.9 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 0.5,
              }}
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="relative">
                <img
                  src={AVA_IMG}
                  alt="primary"
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-lg"
                />
                <AnimatePresence>
                  {clickEffect && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-3 -left-3 w-14 h-14 bg-purple-500 rounded-full opacity-40"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- SUBCOMPONENTS ---------- */

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  id,
  active,
}) => (
  <div
    className={`simulator-sidebar-item ${
      active === id
        ? "simulator-sidebar-item-active"
        : "simulator-sidebar-item-inactive"
    }`}
  >
    <Icon size={18} />
    {label}
  </div>
);

const CampaignNode: React.FC<CampaignNodeProps> = ({
  label,
  top,
  left,
  icon,
}) => (
  <div
    className="absolute px-4 py-3 rounded-xl shadow-lg border bg-white flex items-center gap-3 border-gray-200"
    style={{ top, left, transform: "translate(-50%, -50%)" }}
  >
    <div className="">{icon}</div>
    <div>
      <span className="font-bold text-xs block text-gray-800">{label}</span>
      <span className="text-[9px] text-green-500 font-bold">Active • 98%</span>
    </div>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({ label, value, sub, icon }) => (
  <div className="simulator-stat-card">
    <div>
      <span className="simulator-stat-label">{label}</span>
      <div className="simulator-stat-value">{value}</div>
      <div className="simulator-stat-sub">{sub}</div>
    </div>
    <div className="simulator-stat-icon">{icon}</div>
  </div>
);

export default Simulator;
