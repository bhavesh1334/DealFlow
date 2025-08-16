const sellerStats = [
  {
    icon: Users,
    label: "Profile Views",
    value: "142",
    change: "+12%",
    color: "text-teal-600 bg-teal-100",
  },
  {
    icon: Heart,
    label: "Interested Buyers",
    value: "23",
    change: "+5%",
    color: "text-orange-600 bg-orange-100",
  },
  {
    icon: MessageSquare,
    label: "Active Conversations",
    value: "8",
    change: "+2",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: DollarSign,
    label: "Avg. Offer Value",
    value: "$2.8M",
    change: "+8%",
    color: "text-green-600 bg-green-100",
  },
];

const buyerStats = [
  {
    icon: Users,
    label: "Businesses Viewed",
    value: "89",
    change: "+15%",
    color: "text-teal-600 bg-teal-100",
  },
  {
    icon: Heart,
    label: "Saved Businesses",
    value: "12",
    change: "+3",
    color: "text-orange-600 bg-orange-100",
  },
  {
    icon: MessageSquare,
    label: "Active Deals",
    value: "5",
    change: "+1",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Clock,
    label: "Days Since Last Match",
    value: "3",
    change: "-2",
    color: "text-blue-600 bg-blue-100",
  },
];
const recentActivity = [
  {
    type: "match",
    title: isSeller
      ? "New buyer interested in your business"
      : "New business matches your criteria",
    subtitle: isSeller
      ? "TechCorp Ventures viewed your profile"
      : "SaaS company in your target range",
    time: "2 hours ago",
    color: "text-green-600 bg-green-100",
  },
  {
    type: "message",
    title: "New message received",
    subtitle: isSeller
      ? "Buyer wants to schedule a call"
      : "Seller responded to your inquiry",
    time: "5 hours ago",
    color: "text-blue-600 bg-blue-100",
  },
  {
    type: "document",
    title: "Document analysis complete",
    subtitle: "AI review of financial statements ready",
    time: "1 day ago",
    color: "text-purple-600 bg-purple-100",
  },
];

export { recentActivity, sellerStats, buyerStats };
