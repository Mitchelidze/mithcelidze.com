export interface CaseStudySection {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  placeholderLabel?: string;
  metrics?: { label: string; value: string }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  headline: string;
  company: string;
  role: string;
  duration: string;
  tags: string[];
  bgColor: string;
  appIcon?: string;
  appIconSub?: string;
  overview: string;
  keyMetrics: { label: string; value: string }[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tbc-ai-chat",
    title: "TBC Bank AI Chat Experience",
    headline:
      "Led the design of TBC bank’s first AI-driven chat experience for 5M+ users, creating a new touchpoint for engagement and automating routine support queries.",
    company: "TBC Mobile Bank",
    role: "Lead Product Designer",
    duration: "2023 · 8 months",
    tags: ["Interface for AI agents", "AI-powered Assistant", "Design Systems"],
    bgColor: "#00ADEE",
    appIcon: "/tbcappicon.svg",
    appIconSub: "114k ratings · 4.9 stars",
    overview:
      "TBC Bank is the largest financial institution in Georgia, serving over 5 million active digital users. As customer service demand scaled, routine support tickets inundated human operations. We set out to design an intelligent AI chat assistant embedded directly into the mobile banking experience to resolve complex inquiries instantly while maintaining user trust.",
    keyMetrics: [
      { label: "Active Users", value: "5M+" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Automated Support", value: "64%" },
    ],
    sections: [
      {
        title: "1. The Challenge & Context",
        subtitle: "Bridging human conversations with AI agent capabilities",
        paragraphs: [
          "Integrating artificial intelligence into a core banking app introduces unique friction: users demand total accuracy when dealing with money. Traditional chatbots felt rigid, while conversational LLMs could produce ambiguous responses.",
          "Our goal was to define conversational primitives, fallback states, and structured action cards (e.g. instant peer-to-peer transfer, statement downloads) within the chat stream.",
        ],
        placeholderLabel: "Exploratory Wireframes & Conversational Flow Architecture",
      },
      {
        title: "2. Research & Discovery",
        subtitle: "Mapping customer anxiety points and top support tasks",
        paragraphs: [
          "Through qualitative interviews with 24 banking customers and analysis of 50,000 anonymized support transcripts, we categorized user needs into three urgency tiers: Instant Verification, Transaction Disputes, and Product Advice.",
          "We discovered that visual feedback during AI thinking states significantly reduced user cancellation rates compared to plain text spinners.",
        ],
        placeholderLabel: "User Task Mapping & Sentiment Analysis Chart",
      },
      {
        title: "3. Design Solution & Interface System",
        subtitle: "Generative UI cards within a fluid chat interface",
        paragraphs: [
          "Instead of forcing plain text responses, we designed Generative Action Cards. When a user asks 'Send $50 to Alex', the assistant renders a pre-filled confirmation card directly inside the message feed.",
          "We established strict accessibility guidelines, high-contrast states, and clear disclaimers for AI transparency.",
        ],
        placeholderLabel: "Generative Action Cards & UI Component Breakdown",
      },
      {
        title: "4. Impact & Results",
        subtitle: "Scaling to millions of interactions with high user satisfaction",
        paragraphs: [
          "The AI Chat experience launched successfully to 5M+ mobile banking users. It resolved 64% of tier-1 support tickets automatically without human agent intervention, maintaining a 4.9-star rating across 114k store reviews.",
        ],
        placeholderLabel: "Final High-Fidelity App Screen Mockups & Micro-Interactions",
      },
    ],
  },
  {
    slug: "thunderact-mvp",
    title: "ThunderAct AI Customer Analytics",
    headline:
      "Designed MVP for the customer‑interaction AI analytics startup that helped businesses extract insights from customer data across many systems instantly.",
    company: "ThunderAct",
    role: "Founding Designer (0-1)",
    duration: "2023 · 4 months",
    tags: ["0-1 Product", "MVP Design", "Data Analytics"],
    bgColor: "#5A3DED",
    overview:
      "ThunderAct is a B2B SaaS platform that unifies customer feedback from CRM tools, support tickets, and email streams, turning raw unstructured data into actionable product priorities.",
    keyMetrics: [
      { label: "Product Phase", value: "0 to 1 MVP" },
      { label: "Data Sources", value: "10+ Integrations" },
      { label: "Insight Speed", value: "Instant" },
    ],
    sections: [
      {
        title: "1. Problem & Product Vision",
        subtitle: "Turning noisy data streams into clear executive insights",
        paragraphs: [
          "Product and customer success teams were drowning in fragmented feedback across Zendesk, Salesforce, Intercom, and Jira. They lacked a centralized dashboard to identify recurring pain points.",
          "As founding designer, I led the 0-1 product strategy, wireframing, component system, and interactive MVP prototype.",
        ],
        placeholderLabel: "Early Sketch Concepts & Information Architecture",
      },
      {
        title: "2. Interaction Design & Dashboard Framework",
        subtitle: "Configurable widgets & AI sentiment clustering",
        paragraphs: [
          "Designed a modular grid system that allows product managers to drag and pin key topic clusters, sentiment trends, and high-impact churn risk accounts.",
        ],
        placeholderLabel: "Modular Grid Dashboard & Data Visualization Mockups",
      },
      {
        title: "3. Validation & Launch",
        subtitle: "Securing initial enterprise beta customers",
        paragraphs: [
          "The MVP design enabled the founding team to sign enterprise pilot accounts and secure seed funding round milestones.",
        ],
        placeholderLabel: "High-Fidelity Web App Dashboard & Design Tokens",
      },
    ],
  },
  {
    slug: "fly-ge-cheap-flights",
    title: "Fly.ge Cheap Flight Matrix",
    headline:
      "Designed 'Find the cheapest day to fly' and other core user journeys for the largest travel agency - www.fly.ge, increasing conversion and user satisfaction.",
    company: "Fly.ge Travel Agency",
    role: "Lead UX Researcher & Designer",
    duration: "2022 · 6 months",
    tags: ["User Experience Research", "High-Fidelity Prototyping", "E-Commerce"],
    bgColor: "#011946",
    overview:
      "Fly.ge is the leading travel booking portal in the region. Flexible travelers needed a fast, visually intuitive way to compare pricing across surrounding dates without running dozens of individual searches.",
    keyMetrics: [
      { label: "Booking Conversion", value: "+18%" },
      { label: "Search Efficiency", value: "3x Faster" },
      { label: "Monthly Visitors", value: "1.2M+" },
    ],
    sections: [
      {
        title: "1. Understanding Travel Friction",
        subtitle: "Solving rigid search limitations for budget-conscious flyers",
        paragraphs: [
          "Traditional datepickers hide fare fluctuations behind multiple loading clicks. Users were forced to keep multiple tabs open to compare flight prices across consecutive days.",
        ],
        placeholderLabel: "User Journey Map & Competitive UX Audit",
      },
      {
        title: "2. The Date Matrix Solution",
        subtitle: "Interactive price heatmap & intuitive calendar filters",
        paragraphs: [
          "Created a dynamic fare matrix that visualizes price trends in a clean grid heatmap, allowing users to select the optimal outbound and return combinations effortlessly.",
        ],
        placeholderLabel: "Flight Price Heatmap Matrix Wireframes",
      },
      {
        title: "3. Results & Impact",
        subtitle: "Driving measurable e-commerce conversion gains",
        paragraphs: [
          "The updated booking flow delivered an 18% increase in completed ticket purchases and reduced average booking time from 12 minutes down to under 4 minutes.",
        ],
        placeholderLabel: "High-Fidelity Flight Booking UI & Mobile Experience",
      },
    ],
  },
  {
    slug: "consumer-loans",
    title: "Secured Lending & Consumer Loans Journey",
    headline:
      "Optimized secured lending journeys by refactoring complex regulatory requirements into conversion‑driven user experiences targeting +12% increase.",
    company: "Financial Services",
    role: "Senior Interaction Designer",
    duration: "2022 · 5 months",
    tags: ["UX Audit", "Conversion Design", "Fintech"],
    bgColor: "#1A1A1A",
    overview:
      "Applying for a loan often involves multi-page regulatory forms, income verifications, and credit checks. We redesigned the end-to-end consumer lending flow to feel transparent and encouraging.",
    keyMetrics: [
      { label: "Target Growth", value: "+12% Conversion" },
      { label: "Drop-off Reduction", value: "-24%" },
      { label: "Form Steps", value: "Reduced 40%" },
    ],
    sections: [
      {
        title: "1. Regulatory Audit & Form Streamlining",
        subtitle: "Deconstructing loan applications into progressive steps",
        paragraphs: [
          "Conducted a systematic UX audit of the legacy 14-page loan application. Identified drop-off hotspots caused by upfront income documentation before users knew their estimated rate.",
        ],
        placeholderLabel: "Lending Flow Audit & Funnel Analysis Diagrams",
      },
      {
        title: "2. Progressive Disclosure & Rate Estimator",
        subtitle: "Instant feedback calculator before deep verification",
        paragraphs: [
          "Introduced a 30-second rate estimator that gives users instant approval probability before initiating formal document uploads.",
        ],
        placeholderLabel: "Interactive Rate Calculator & Form Micro-UX",
      },
      {
        title: "3. Final Prototype & Testing",
        subtitle: "User testing with diverse financial demographics",
        paragraphs: [
          "Validated the streamlined prototype with 18 participants, achieving a 100% completion rate with zero navigation errors.",
        ],
        placeholderLabel: "High-Fidelity Loan Application Screen Flow",
      },
    ],
  },
  {
    slug: "multi-account-login",
    title: "Multi-Account Business Authentication",
    headline:
      "Designed multi-account login for business owners and finance professionals to securely access and manage multiple bank accounts.",
    company: "Business Banking",
    role: "Staff Product Designer",
    duration: "2021 · 6 months",
    tags: ["Top Task Analysis", "Systems Thinking", "Security UX"],
    bgColor: "#0E437F",
    overview:
      "Entrepreneurs and CFOs often manage multiple legal entities, subsidiaries, and personal accounts. Switching between separate logins caused operational fatigue and security risks.",
    keyMetrics: [
      { label: "Account Switch Speed", value: "Instant" },
      { label: "Security Compliance", value: "100%" },
      { label: "User Satisfaction", value: "4.8 / 5" },
    ],
    sections: [
      {
        title: "1. Problem & Security Architecture",
        subtitle: "Single identity access across complex legal entities",
        paragraphs: [
          "Mapped authorization roles for company directors, accountants, and delegates to create a seamless account-switching architecture protected by biometric 2FA.",
        ],
        placeholderLabel: "Authentication Flow Chart & Authorization Matrix",
      },
      {
        title: "2. Switcher Component & Workspace UI",
        subtitle: "Unified dashboard with quick organization toggle",
        paragraphs: [
          "Designed a universal organization switcher in the navigation bar that preserves current context while toggling between business accounts.",
        ],
        placeholderLabel: "Multi-Account Switcher & Navigation Wireframes",
      },
      {
        title: "3. Rollout & Enterprise Reception",
        subtitle: "Streamlining daily financial workflows for SMEs",
        paragraphs: [
          "Adopted by over 40,000 commercial banking clients within the first quarter of release.",
        ],
        placeholderLabel: "High-Fidelity Desktop & Tablet Banking Screens",
      },
    ],
  },
  {
    slug: "car-inspection-ux",
    title: "Car Inspection Booking Platform",
    headline:
      "Conducted a UX audit to design an intuitive, user‑friendly booking experience that supports 2.7M+ car owners in scheduling inspections effortlessly.",
    company: "Automotive Services",
    role: "UX Strategist & Researcher",
    duration: "2021 · 4 months",
    tags: ["Usability Testing", "Heuristic Evaluation", "Service Design"],
    bgColor: "#056253",
    overview:
      "Mandatory vehicle inspection platforms handle millions of recurring annual bookings. We refactored the digital scheduling portal to minimize queue wait times and streamline center selection.",
    keyMetrics: [
      { label: "Annual Bookings", value: "2.7M+" },
      { label: "Completion Time", value: "< 2 Mins" },
      { label: "Mobile Usage", value: "78%" },
    ],
    sections: [
      {
        title: "1. Heuristic Evaluation & Field Research",
        subtitle: "Visiting inspection centers to map physical-digital touchpoints",
        paragraphs: [
          "Shadowed vehicle owners at inspection centers to uncover why online appointment confirmation codes were causing delays at gate check-in.",
        ],
        placeholderLabel: "Service Blueprint & On-Site Inspection Mapping",
      },
      {
        title: "2. Geo-Location Booking & Real-Time Availability",
        subtitle: "Smart slot recommendations based on driver location",
        paragraphs: [
          "Implemented map-based scheduling that suggests nearby centers with shortest current wait times.",
        ],
        placeholderLabel: "Map-Based Booking Interface & Date Selector Prototype",
      },
      {
        title: "3. Final UI & Mobile Platform",
        subtitle: "Empowering 2.7M+ drivers with instant SMS reminders and digital passes",
        paragraphs: [
          "Reduced missed appointments by 32% and improved customer CSAT scores significantly across all regional test centers.",
        ],
        placeholderLabel: "High-Fidelity Mobile Ticket & Inspection Pass UI",
      },
    ],
  },
];
