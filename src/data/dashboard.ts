import { Clock, DollarSign, Heart, MessageSquare, Users } from "lucide-react";

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

export { sellerStats, buyerStats };
