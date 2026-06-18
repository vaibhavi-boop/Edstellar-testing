export async function GET() {
  const courseData = {
    slug: "esg-data-assurance-and-reporting-training",
    title: "ESG Data Assurance and Reporting Corporate Training Program",
    category: "Environmental Sustainability Training",
    duration: "12 - 24 hrs",
    deliveryType: "Instructor-led Group Training",
    modes: ["Virtual", "On-site", "Off-site"],
    languages: [
      "English",
      "Español",
      "普通话",
      "Deutsch",
      "العربية",
      "Português",
      "हिंदी",
      "Français",
      "日本語",
      "Italiano",
    ],
    description:
      "ESG Data Assurance and Reporting training equips sustainability and finance professionals with the frameworks, internal controls, and assurance standards needed to produce accurate, verifiable ESG disclosures that satisfy investors, regulators, and multi-framework reporting requirements.",

    overview: {
      title:
        "Drive Team Excellence with ESG Data Assurance and Reporting Corporate Training",
      content:
        "ESG Data Assurance and Reporting has become a critical capability for organizations navigating growing demands from investors, regulators, and stakeholders for credible, auditable sustainability disclosures. This training provides the technical knowledge and practical tools needed to build investor-grade ESG reporting systems backed by credible internal and external assurance processes.",
    },

    skills: [
      "ESG Data Governance",
      "Internal ESG Controls",
      "Third-Party ESG Assurance",
      "ISAE 3000 Application",
      "Multi-Framework ESG Reporting",
      "ESG Data Quality Management",
      "Stakeholder ESG Communication",
    ],

    learningOutcomes: [
      "Master ESG data governance frameworks and design internal controls that ensure data integrity.",
      "Apply the ISAE 3000 standard for limited and reasonable assurance engagements.",
      "Align ESG disclosures across GRI, TCFD, and ISSB/IFRS S1 and S2 frameworks.",
      "Produce investor-grade ESG reports for investors, rating agencies, and regulators.",
      "Build stakeholder communication strategies for ESG data and assurance outcomes.",
      "Improve ESG data quality and assurance readiness across reporting cycles.",
    ],

    curriculum: [
      {
        module: "Introduction to ESG Data Assurance",
        topics: [
          "The ESG Assurance Landscape",
          "ESG Data Fundamentals",
          "ESG Reporting Ecosystem Overview",
          "Stakeholder Expectations for ESG Assurance",
          "Assurance Readiness Assessment",
          "Building the Business Case for ESG Assurance",
        ],
      },
      {
        module: "ESG Data Governance and Management",
        topics: [
          "ESG Data Governance Frameworks",
          "ESG Data Policies and Standards",
          "Data Ownership and Stewardship",
          "ESG Data Taxonomy and Definitions",
          "ESG Data Lifecycle Management",
          "Governance of ESG Data in Mergers and Acquisitions",
        ],
      },
      {
        module: "ESG Data Collection and Systems",
        topics: [
          "ESG Data Sources and Collection Methods",
          "ESG Data Management Systems",
          "Data Collection Templates and Tools",
          "Managing Estimates and Proxies in ESG Data",
          "Data Validation and Cleansing Processes",
          "Continuous Improvement of Data Collection Systems",
        ],
      },
      {
        module: "Internal Controls for ESG Reporting",
        topics: [
          "Principles of Internal Control in ESG Reporting",
          "Control Design for ESG Data Processes",
          "Control Testing and Effectiveness Evaluation",
          "Reconciliation and Review Controls",
          "IT Controls Supporting ESG Reporting",
          "Internal Audit and ESG Controls",
        ],
      },
      {
        module: "Third-Party Assurance Frameworks",
        topics: [
          "Overview of Third-Party ESG Assurance",
          "Assurance Standards and Frameworks",
          "Scoping the Assurance Engagement",
          "Preparing for Assurance Engagements",
          "Assurance Opinions and Statements",
          "Continuous Improvement Through Assurance Cycles",
        ],
      },
      {
        module: "ESG Reporting Frameworks",
        topics: [
          "GRI Standards",
          "TCFD Framework and Climate Disclosure",
          "ISSB and IFRS S1 and S2",
          "Aligning Disclosures Across Multiple Frameworks",
          "Materiality Assessment for Multi-Framework Reporting",
          "Framework Evolution and Regulatory Convergence",
        ],
      },
    ],

    targetAudience: [
      "Sustainability Managers",
      "ESG Analysts and Reporting Teams",
      "Finance and Audit Professionals",
      "Risk and Compliance Officers",
      "Investor Relations Managers",
      "Board and Committee Members",
    ],

    prerequisites:
      "Professionals should have a foundational understanding of ESG principles and corporate reporting processes, along with exposure to sustainability or financial disclosure practices.",

    trainingModes: [
      {
        title: "Virtual",
        subtitle: "Live Instructor-led Training",
        points: [
          "Delivered anywhere worldwide",
          "Standardized content for consistent outcomes",
          "Join from own workspace, no travel",
          "Scalable for large groups across sites",
          "Interactive tools keep remote learners engaged",
        ],
      },
      {
        title: "On-site",
        subtitle: "Face to Face Instructor-led Training",
        points: [
          "Trainer-led sessions at your office",
          "Content tailored to workplace tools",
          "Group exercises for collaboration",
          "Live demos and hands-on practice",
          "Direct trainer access for doubts",
        ],
      },
      {
        title: "Off-site",
        subtitle: "Face to Face Instructor-led Training",
        points: [
          "Training at preferred external venue",
          "Focused learning away from distractions",
          "Built-in group activities",
          "Full uninterrupted schedule",
          "Boosts morale and team engagement",
        ],
      },
    ],

    whyEdstellar: [
      {
        title: "Experienced Trainers",
        description:
          "Trainers are selected from a vetted global network and bring practical industry expertise.",
      },
      {
        title: "Proven Quality",
        description:
          "Edstellar is known for engaging delivery and strong global training capability.",
      },
      {
        title: "Industry-Relevant Curriculum",
        description:
          "Programs are built by experts to match current business and industry needs.",
      },
      {
        title: "Fully Customizable",
        description:
          "Every program can be tailored to your organization’s goals.",
      },
      {
        title: "Comprehensive Support",
        description:
          "Pre-session and post-session support is provided for a complete learning experience.",
      },
      {
        title: "Global Delivery",
        description:
          "Training can be delivered across multiple countries and languages.",
      },
    ],

    certificate: {
      title: "Recognition That Motivates Your Team",
      description:
        "Employees receive a course completion certificate after successful completion of the training program.",
    },

    cta: {
      title: "Get a Proposal Shaped to Your Needs",
      description:
        "Need pricing for onsite, offsite, or virtual delivery? Get a proposal tailored to your team's needs.",
      buttonText: "Request a Group Training Quote",
    },
  };

  return Response.json(courseData);
}
