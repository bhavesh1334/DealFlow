import { useState } from "react";
import {
  CheckCircle,
  Circle,
  FileText,
  MessageSquare,
  Clock,
  Bot,
  Upload,
  Download,
} from "lucide-react";
import { Navigation } from "./Navigation";

interface AcquisitionWorkflowProps {
  onNavigate: (route: string) => void;
}

export function AcquisitionWorkflow({ onNavigate }: AcquisitionWorkflowProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDeal, setSelectedDeal] = useState(0);

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

  const currentDeal = deals[selectedDeal];

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "active":
        return (
          <div className="h-5 w-5 border-2 border-teal-500 rounded-full bg-teal-500" />
        );
      default:
        return <Circle className="h-5 w-5 text-gray-300" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Acquisition Workflow
          </h1>
          <p className="text-gray-600">
            Manage your active deals with AI-powered insights and streamlined
            processes
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Deal List Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Active Deals
            </h2>
            <div className="space-y-3">
              {deals.map((deal, index) => (
                <button
                  key={deal.id}
                  onClick={() => setSelectedDeal(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedDeal === index
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {deal.businessName}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {deal.seller}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                      {deal.stage}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {deal.value}
                    </span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-teal-500 h-1 rounded-full"
                      style={{ width: `${deal.progress}%` }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Deal Header */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentDeal.businessName}
                  </h2>
                  <p className="text-gray-600">Seller: {currentDeal.seller}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600">
                    {currentDeal.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentDeal.timeline}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {currentDeal.progress}%
                  </div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {currentDeal.stage}
                  </div>
                  <div className="text-sm text-gray-600">Current Stage</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {currentDeal.lastActivity}
                  </div>
                  <div className="text-sm text-gray-600">Last Activity</div>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full"
                  style={{ width: `${currentDeal.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: "overview", label: "Overview", icon: FileText },
                    { id: "ai-insights", label: "AI Insights", icon: Bot },
                    { id: "documents", label: "Documents", icon: Upload },
                    {
                      id: "communication",
                      label: "Messages",
                      icon: MessageSquare,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-teal-500 text-teal-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Workflow Progress
                    </h3>
                    <div className="space-y-4">
                      {workflowSteps.map((step, index) => (
                        <div
                          key={step.id}
                          className="flex items-start space-x-4"
                        >
                          {getStepIcon(step.status)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4
                                className={`font-semibold ${
                                  step.status === "completed"
                                    ? "text-gray-900"
                                    : step.status === "active"
                                    ? "text-teal-600"
                                    : "text-gray-500"
                                }`}
                              >
                                {step.name}
                              </h4>
                              {step.status === "active" && (
                                <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">
                                  In Progress
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mt-1">
                              {step.description}
                            </p>

                            {step.status === "active" && (
                              <div className="mt-3 p-3 bg-teal-50 rounded-lg">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Bot className="h-4 w-4 text-teal-600" />
                                  <span className="text-sm font-medium text-teal-800">
                                    AI Assistant Active
                                  </span>
                                </div>
                                <p className="text-teal-700 text-sm">
                                  Currently analyzing financial documents and
                                  generating insights...
                                </p>
                                <div className="mt-2 flex space-x-2">
                                  <button className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-700 transition-colors">
                                    View Progress
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>

                          {index < workflowSteps.length - 1 && (
                            <div className="absolute left-6 mt-8 w-px h-8 bg-gray-300"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "ai-insights" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      AI-Powered Analysis
                    </h3>
                    <div className="space-y-6">
                      {aiInsights.map((insight, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">
                                {insight.title}
                              </h4>
                              <p className="text-gray-700 mt-1">
                                {insight.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-600">
                                Confidence
                              </div>
                              <div className="text-lg font-bold text-teal-600">
                                {insight.confidence}%
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mt-4">
                            {insight.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="bg-white p-3 rounded-lg"
                              >
                                <p className="text-sm text-gray-700">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 flex space-x-3">
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                              View Detailed Report
                            </button>
                            <button className="bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-50 transition-colors">
                              Download PDF
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "documents" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Document Management
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Required Documents
                        </h4>
                        <div className="space-y-3">
                          {[
                            {
                              name: "Financial Statements (3 years)",
                              status: "received",
                              ai: true,
                            },
                            {
                              name: "Tax Returns",
                              status: "received",
                              ai: true,
                            },
                            {
                              name: "Customer Contracts",
                              status: "pending",
                              ai: false,
                            },
                            {
                              name: "Employee Agreements",
                              status: "received",
                              ai: false,
                            },
                            {
                              name: "Lease Agreements",
                              status: "pending",
                              ai: false,
                            },
                          ].map((doc, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <FileText className="h-4 w-4 text-gray-400" />
                                <span className="text-sm font-medium">
                                  {doc.name}
                                </span>
                                {doc.ai && (
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    AI Analyzed
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                {doc.status === "received" ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Clock className="h-4 w-4 text-orange-500" />
                                )}
                                {doc.status === "received" && (
                                  <button className="text-teal-600 hover:text-teal-700">
                                    <Download className="h-4 w-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Upload Documents
                        </h4>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 mb-2">
                            Drag and drop files here
                          </p>
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                            Choose Files
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "communication" && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Communication Hub
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4 h-96 mb-4">
                      <div className="text-center text-gray-500 mt-32">
                        <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p>Secure messaging system coming soon</p>
                        <p className="text-sm">
                          All communications will be encrypted and logged
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                      <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
