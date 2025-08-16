const deals = [
  {
    id: 1,
    businessName: "CloudSync Solutions",
    seller: "Michael Thompson",
    stage: "Due Diligence",
    progress: 65,
    value: "$12M",
    status: "active",
    timeline: "45 days remaining",
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    businessName: "Artisan Coffee Co.",
    seller: "Sarah Martinez",
    stage: "Initial Review",
    progress: 25,
    value: "$4.5M",
    status: "active",
    timeline: "60 days remaining",
    lastActivity: "1 day ago",
  },
  {
    id: 3,
    businessName: "TechFlow Analytics",
    seller: "David Chen",
    stage: "Negotiation",
    progress: 85,
    value: "$8.2M",
    status: "pending",
    timeline: "15 days remaining",
    lastActivity: "30 minutes ago",
  },
];

const workflowSteps = [
  {
    id: 1,
    name: "Initial Contact",
    status: "completed",
    description: "First communication established",
  },
  {
    id: 2,
    name: "NDA & Basic Info",
    status: "completed",
    description: "Confidentiality agreements signed",
  },
  {
    id: 3,
    name: "Business Overview",
    status: "completed",
    description: "High-level business review completed",
  },
  {
    id: 4,
    name: "Financial Review",
    status: "active",
    description: "AI analysis of financial documents in progress",
  },
  {
    id: 5,
    name: "Due Diligence",
    status: "pending",
    description: "Comprehensive business evaluation",
  },
  {
    id: 6,
    name: "Valuation",
    status: "pending",
    description: "Business valuation and offer preparation",
  },
  {
    id: 7,
    name: "Negotiation",
    status: "pending",
    description: "Terms negotiation and agreement",
  },
  {
    id: 8,
    name: "Legal Review",
    status: "pending",
    description: "Legal documentation and compliance",
  },
  {
    id: 9,
    name: "Closing",
    status: "pending",
    description: "Final transaction completion",
  },
];

const aiInsights = [
  {
    type: "financial",
    title: "Financial Health Score: 8.5/10",
    description:
      "Strong revenue growth (35% YoY) with healthy profit margins. Cash flow is stable.",
    confidence: 92,
    details: [
      "Revenue: $3.2M (↑35%)",
      "EBITDA: $890K (28% margin)",
      "Cash: $450K",
      "Debt: $180K",
    ],
  },
  {
    type: "risk",
    title: "Risk Assessment: Medium-Low",
    description:
      "Customer concentration risk identified (top 3 clients = 45% revenue). Otherwise low risk profile.",
    confidence: 88,
    details: [
      "Customer diversification needed",
      "Regulatory compliance: Good",
      "Market position: Strong",
      "Technology: Current",
    ],
  },
  {
    type: "valuation",
    title: "Suggested Valuation Range: $10M - $14M",
    description:
      "Based on comparable transactions and DCF analysis. Current ask of $12M is within fair range.",
    confidence: 85,
    details: [
      "Revenue multiple: 3.1-4.4x",
      "EBITDA multiple: 11.2-15.7x",
      "DCF value: $11.8M",
      "Comparable avg: $12.4M",
    ],
  },
];

export { aiInsights, deals, workflowSteps };
