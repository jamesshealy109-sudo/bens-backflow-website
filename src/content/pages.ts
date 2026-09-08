export type Section = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  link?: { href: string; label: string };
};
export type PageContent = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  image?: string;
  alt?: string;
  sections: Section[];
  related?: string[];
  service?: boolean;
  article?: boolean;
};

export const services: PageContent[] = [
  {
    path: "/services/backflow-testing/",
    title: "Backflow Testing in Upstate South Carolina",
    description:
      "Backflow assembly testing for commercial, residential and irrigation systems in Upstate SC. Get help with your test, documentation and utility report.",
    eyebrow: "Backflow testing",
    heading: "The test. The report. Taken care of.",
    intro:
      "A testing notice is one more thing on your list. We test your backflow assembly and submit the completed report to your water provider after a passing test.",
    image: "backflow-assembly-test",
    alt: "Test kit connected to a backflow assembly in an original company field photo",
    service: true,
    sections: [
      {
        heading: "Know where your assembly stands",
        paragraphs: [
          "A backflow preventer helps keep water from your property from flowing back toward the public drinking water supply. Testing checks whether its internal components are working as intended.",
          "Ben’s Backflow tests commercial, residential and irrigation assemblies across the Upstate, with statewide South Carolina service available. If you received a notice, share the property address, water provider and due date when you contact us.",
        ],
      },
      {
        heading: "Testing for your property",
        items: [
          "Commercial and multi-tenant properties",
          "Residential and irrigation systems",
          "Reduced pressure, double check and pressure vacuum breaker assemblies",
          "Test documentation and report submission after a passing test",
        ],
      },
      {
        heading: "Before the appointment",
        paragraphs: [
          "Make sure the assembly and shutoff valves are accessible. Tell us about locked gates, equipment rooms, tenant access and any operating hours we need to consider. Testing can interrupt water to the affected line; discuss the timing with us in advance.",
          "Your water provider determines which assemblies require testing and when. A reminder from your utility is the best starting point for your specific property.",
        ],
        link: {
          href: "/resources/preparing-for-a-backflow-test/",
          label: "Use the appointment checklist",
        },
      },
      {
        heading: "If the assembly does not pass",
        paragraphs: [
          "We can assess the problem and explain the repair or replacement options. A repaired assembly is retested to check its performance before a passing report is submitted. Parts availability and device condition affect what can be completed during a visit.",
        ],
        link: {
          href: "/services/backflow-repair/",
          label: "Learn about repair and retesting",
        },
      },
    ],
    related: [
      "/services/commercial-backflow/",
      "/resources/how-often-backflow-testing/",
      "/request-service/",
    ],
  },
  {
    path: "/services/backflow-repair/",
    title: "Backflow Repair & Replacement in Upstate SC",
    description:
      "Get a failed or leaking backflow assembly assessed, repaired or replaced and retested. Serving the Upstate and accepting work throughout South Carolina.",
    eyebrow: "Backflow repair & replacement",
    heading: "A failed test deserves a clear answer.",
    intro:
      "Find out what failed, what can be repaired and what needs to happen next. We repair and replace backflow assemblies, then retest the work.",
    image: "testing-gate-valve-vault",
    alt: "Technician working on an assembly in a below-grade valve vault, from the company photo collection",
    service: true,
    sections: [
      {
        heading: "Start with the cause",
        paragraphs: [
          "Worn internal parts, damaged seals and shutoff problems can affect an assembly’s performance. A failed test does not by itself tell you whether the whole assembly needs replacing.",
          "We assess the device and explain the repair options. Share the failed test report and the make, model and size if available; a clear photo of the assembly tag can help.",
        ],
      },
      {
        heading: "Repair, replacement and retesting",
        items: [
          "Troubleshooting failed tests and visible leaks",
          "Checks, seats, seals, springs and relief-valve components",
          "Shutoff-valve issues and worn assembly parts",
          "Replacement when condition, compatibility or parts availability calls for it",
          "Retesting and documentation after the work",
        ],
      },
      {
        heading: "Plan around the property",
        paragraphs: [
          "Tell us whether the assembly serves irrigation, domestic water or a fire line. Let us know who controls access and who needs advance notice of an interruption. We will discuss the work and scheduling with you before the appointment.",
          "Keep the utility’s notice and any earlier test report together. If a deadline is approaching, contact your water provider about its requirements while you arrange service.",
        ],
      },
    ],
    related: [
      "/services/backflow-testing/",
      "/resources/failed-backflow-test/",
      "/request-service/",
    ],
  },
  {
    path: "/services/commercial-backflow/",
    title: "Commercial Backflow Testing & Property Management | Upstate SC",
    description:
      "Backflow testing, repair and reporting for commercial properties and property managers. Coordinate site access and testing needs across South Carolina.",
    eyebrow: "Commercial & property management",
    heading: "Keep the property running. Keep the reports in order.",
    intro:
      "One assembly or several properties: bring us the locations, testing notices and access details. We will help you work out the next steps.",
    image: "trailer-residential",
    alt: "Ben’s Backflow service trailer and truck at a property",
    service: true,
    sections: [
      {
        heading: "A practical point of contact",
        paragraphs: [
          "Backflow testing touches the people managing a building, the people using it and the utility keeping its records. Clear site information helps everyone prepare for the visit.",
          "Ben’s Backflow provides commercial testing, repair and replacement. Property managers, HOAs, multifamily managers and facility contacts can discuss their assemblies and locations directly with us.",
        ],
      },
      {
        heading: "What to send for a commercial request",
        items: [
          "Each property’s service address and water provider",
          "Testing notices, due dates and assembly records you have",
          "On-site contact and access instructions",
          "Tenant, operating-hour or shutdown constraints",
          "Billing contact and any vendor onboarding requirements",
        ],
      },
      {
        heading: "From the test to the utility report",
        paragraphs: [
          "After a passing test, we complete the report and submit it to the water provider. If an assembly fails, we explain the repair or replacement options and arrange the retest.",
          "Keep your confirmations with the property’s records. Ask about any outstanding device or submission questions rather than assuming one test covers every connection at the site.",
        ],
      },
      {
        heading: "Properties beyond the Upstate",
        paragraphs: [
          "The Upstate is our primary service region, and we accept jobs throughout South Carolina. For a portfolio spread across the state, send the complete list of locations so scheduling and travel can be discussed together.",
        ],
        link: { href: "/south-carolina/", label: "Discuss statewide service" },
      },
    ],
    related: [
      "/services/backflow-testing/",
      "/services/backflow-repair/",
      "/resources/preparing-for-a-backflow-test/",
    ],
  },
  {
    path: "/services/irrigation-repair/",
    title: "Irrigation & Sprinkler Repair in Upstate South Carolina",
    description:
      "Diagnostics and repair for existing irrigation systems: leaking valves, broken heads, controllers and uneven coverage. Contact Ben’s Backflow in Upstate SC.",
    eyebrow: "Irrigation repair",
    heading: "Get your existing system working again.",
    intro:
      "A dry zone, a leaking valve or a controller that will not run its schedule: we diagnose and repair existing lawn irrigation systems.",
    image: "irrigation-running-lawn",
    alt: "Sprinklers running across a lawn in an original company service photo",
    service: true,
    sections: [
      {
        heading: "Repair focused on the problem",
        paragraphs: [
          "Tell us what you are seeing and which zones are affected. We can investigate the system and discuss the work needed to restore its operation.",
        ],
        items: [
          "Broken or misdirected sprinkler heads",
          "Leaking valves and irrigation lines",
          "Zones that will not run or will not shut off",
          "Controller and schedule problems",
          "Uneven coverage in an existing system",
        ],
      },
      {
        heading: "Irrigation and backflow are connected",
        paragraphs: [
          "An irrigation system’s connection to a drinking water supply can create a backflow risk. Your water provider determines the protection and testing requirements for your connection.",
          "A sprinkler repair and a backflow test address different parts of the system. Let us know if you have both an irrigation problem and a testing notice so we can discuss the scope together.",
        ],
        link: {
          href: "/services/backflow-testing/",
          label: "Read about backflow testing",
        },
      },
      {
        heading: "Service scope",
        paragraphs: [
          "Our irrigation work focuses on repairing and optimizing existing systems. We do not install new irrigation systems or carry out interior plumbing work. For service outside the Upstate, contact us with the location and problem to discuss availability.",
        ],
      },
    ],
    related: [
      "/services/backflow-repair/",
      "/service-areas/",
      "/request-service/",
    ],
  },
];

const utilitySource = {
  href: "https://www.greenvillewater.com/engineering/backflow-prevention",
  label: "Greenville Water: backflow prevention",
};
export const resources: PageContent[] = [
  {
    path: "/resources/how-often-backflow-testing/",
    title: "How Often Does a Backflow Preventer Need Testing?",
    description:
      "Understand who sets your backflow testing schedule, what a utility notice means and how to confirm the requirements for your South Carolina property.",
    eyebrow: "Backflow basics · 3 minute read",
    heading: "How often does your backflow preventer need testing?",
    intro:
      "Start with your water provider. The answer depends on the connection, the assembly and the requirements that apply to your property.",
    article: true,
    sections: [
      {
        heading: "What is a backflow preventer?",
        paragraphs: [
          "It is a device or assembly intended to help prevent reverse flow from a property’s plumbing toward the drinking water supply. A pressure change can create that reverse flow; the protection sits at a point where the two systems connect.",
          "A testable assembly contains mechanical parts. A field test checks their performance. Its appearance alone cannot tell you that it will pass.",
        ],
      },
      {
        heading: "An annual schedule is not a universal answer",
        paragraphs: [
          "Greenville Water describes annual testing for customers whose connections present a backflow hazard under its program. That is a statement about that provider’s program; it does not establish the requirements for every South Carolina home.",
          "Confirm the schedule with the water provider named on your bill or notice. Ask which assembly is covered, the due date and who needs to receive the completed report.",
        ],
        link: utilitySource,
      },
      {
        heading: "If you have received a notice",
        paragraphs: [
          "Keep the notice and contact a tester with the address, water provider and due date. Tell them about gates, locked rooms or operating hours that affect access.",
          "If the notice is unclear or the due date has passed, contact the utility directly about your account. Booking a visit is not the same as completing a test or submitting a report.",
        ],
      },
      {
        heading: "No notice in hand?",
        paragraphs: [
          "Do not assume a device is exempt or overdue based only on its location. Your provider can confirm what is on record and what the connection requires. Ben’s Backflow can discuss testing once you have those details.",
        ],
      },
    ],
    related: [
      "/services/backflow-testing/",
      "/resources/preparing-for-a-backflow-test/",
      "/faq/",
    ],
  },
  {
    path: "/resources/failed-backflow-test/",
    title: "What Happens If a Backflow Test Fails?",
    description:
      "A practical guide to the next steps after a failed backflow test: understand the report, assess repair or replacement, arrange retesting and follow up.",
    eyebrow: "Repair guide · 3 minute read",
    heading: "Your backflow test failed. What happens next?",
    intro:
      "Keep the test report. It is the starting point for understanding the failure and arranging the right work.",
    article: true,
    sections: [
      {
        heading: "1. Get the details together",
        paragraphs: [
          "Find the report, property address, assembly make and model, and any utility notice. Tell the service company about visible leaks and changes you have noticed. You do not need to diagnose the device yourself.",
        ],
      },
      {
        heading: "2. Discuss repair or replacement",
        paragraphs: [
          "Some failures involve serviceable internal components. Other devices may have damage, compatibility issues or unavailable parts that make replacement appropriate. The assessment should explain what failed and the proposed work.",
          "Avoid assuming a price or completion time from the word “failed.” The assembly’s size, condition, access and required parts all affect the job.",
        ],
      },
      {
        heading: "3. Arrange access and a retest",
        paragraphs: [
          "Discuss any water interruption and who needs to be informed. After repair, the assembly needs testing again to establish its performance.",
          "Greenville Water’s testing policy addresses reporting failed assemblies and testing after repair. If that is your provider, consult its current instructions; other utilities may have different procedures.",
        ],
        link: {
          href: "https://www.greenvillewater.com/documents/Cross-Connection-Manual-20250606.pdf",
          label: "Greenville Water cross-connection manual, section 7",
        },
      },
      {
        heading: "4. Keep the result with your records",
        paragraphs: [
          "Confirm who is submitting the report and retain the confirmation. If there are questions about a deadline or account status, speak with your water provider directly.",
        ],
        link: {
          href: "/services/backflow-repair/",
          label: "Arrange backflow repair with Ben’s Backflow",
        },
      },
    ],
    related: [
      "/services/backflow-repair/",
      "/services/backflow-testing/",
      "/request-service/",
    ],
  },
  {
    path: "/resources/preparing-for-a-backflow-test/",
    title: "How to Prepare for a Backflow Test | Property Checklist",
    description:
      "Get ready for a backflow test with a simple checklist for notices, assembly access, water interruptions, site contacts and report records.",
    eyebrow: "Property checklist · 3 minute read",
    heading: "A little preparation makes the visit easier.",
    intro:
      "Use this checklist whether you are arranging a test at home or coordinating several commercial properties.",
    article: true,
    sections: [
      {
        heading: "Have the right information ready",
        items: [
          "Service address and water provider",
          "Testing notice and due date, if you have one",
          "Previous reports and assembly details, if available",
          "A contact who can answer questions about the property",
        ],
      },
      {
        heading: "Make the assembly accessible",
        paragraphs: [
          "Check that gates and equipment rooms can be opened. Tell us about access restrictions before the appointment. Leave technical work on the assembly and shutoffs to the service professional.",
          "For managed properties, confirm which person will meet the technician or provide access. Include instructions for every site rather than assuming one set works for the whole portfolio.",
        ],
      },
      {
        heading: "Discuss the timing",
        paragraphs: [
          "Testing can interrupt water to the affected line. Let us know about tenant needs, business hours and other constraints so the timing can be discussed before work begins.",
          "If the assembly serves equipment or a fire line, identify that when booking and coordinate with the people responsible for the building.",
        ],
      },
      {
        heading: "Know what follows the test",
        paragraphs: [
          "Ask how results will be shared and who files the report. Ben’s Backflow submits the completed report to the water provider after a passing test. If the device fails, we can explain repair or replacement and retesting options.",
          "Keep your notice, result and confirmation together for the next person responsible for the property.",
        ],
        link: {
          href: "/services/commercial-backflow/",
          label: "Backflow service for property managers",
        },
      },
    ],
    related: [
      "/services/backflow-testing/",
      "/resources/failed-backflow-test/",
      "/request-service/",
    ],
  },
];

export const otherPages: PageContent[] = [
  {
    path: "/services/",
    title: "Backflow & Irrigation Services | Upstate South Carolina",
    description:
      "Explore backflow testing, repair, commercial service and irrigation repair from Ben’s Backflow. Upstate focused, with statewide South Carolina availability.",
    eyebrow: "Our services",
    heading: "Backflow is our focus. Your property is the priority.",
    intro:
      "Testing, repair and practical help with the next step. Choose the service that fits your property, or call us with the notice in front of you.",
    sections: [],
    related: services.map((p) => p.path),
  },
  {
    path: "/service-areas/",
    title: "Service Areas | Upstate & Statewide South Carolina",
    description:
      "Based in the Upstate and accepting jobs throughout South Carolina. Explore Ben’s Backflow service coverage and discuss your property’s location.",
    eyebrow: "Where we work",
    heading: "At home in the Upstate. Available across South Carolina.",
    intro:
      "The Upstate is our primary service area. We also accept jobs throughout South Carolina—contact us with your location and the work you need.",
    sections: [
      {
        heading: "Upstate South Carolina",
        paragraphs: [
          "Our core region includes Greenville, Spartanburg, Anderson and surrounding communities, from Greer and Simpsonville to Easley, Greenwood, Laurens and Honea Path.",
        ],
        link: {
          href: "/service-areas/upstate-south-carolina/",
          label: "Explore Upstate service",
        },
      },
      {
        heading: "Elsewhere in South Carolina",
        paragraphs: [
          "For work beyond the Upstate, send the service address, scope and any due date. We will discuss scheduling and travel with you. There is no need to be in a listed city to ask about service.",
        ],
        link: {
          href: "/south-carolina/",
          label: "Explore statewide availability",
        },
      },
    ],
    related: [
      "/services/backflow-testing/",
      "/services/commercial-backflow/",
      "/request-service/",
    ],
  },
  {
    path: "/service-areas/upstate-south-carolina/",
    title:
      "Backflow Testing in Upstate SC | Greenville, Spartanburg & Anderson",
    description:
      "Backflow testing and repair across Greenville, Spartanburg, Anderson and the Upstate. Prepare your utility notice, access details and service request.",
    eyebrow: "Our primary service region",
    heading: "Backflow service for the Upstate.",
    intro:
      "From Greenville and Spartanburg to Anderson and the surrounding communities, our work starts with the same essentials: the property, the assembly and the report.",
    image: "jeep-brand",
    alt: "Ben’s Backflow branded service vehicle from the company photo collection",
    sections: [
      {
        heading: "Communities we serve",
        items: [
          "Greenville, Mauldin, Taylors and Travelers Rest",
          "Spartanburg, Greer, Duncan and Woodruff",
          "Anderson, Clemson, Easley and Powdersville",
          "Simpsonville, Fountain Inn and Five Forks",
          "Greenwood, Laurens, Clinton, Honea Path and Belton",
        ],
      },
      {
        heading: "Your water provider matters more than the city name",
        paragraphs: [
          "A mailing address does not necessarily tell you which water provider handles your connection. Use the provider named on your water bill or test notice when arranging service.",
          "For Greenville Water customers, its backflow prevention page explains its program and provides the current reporting resources. For other providers, follow the instructions on your notice.",
        ],
        link: utilitySource,
      },
      {
        heading: "Plan a visit around the actual site",
        paragraphs: [
          "Tell us whether your device is outdoors, behind a locked gate or in an equipment room. Commercial contacts should include operating-hour constraints and the person responsible for access.",
          "We provide testing, repair and replacement as well as existing irrigation-system repair. If you manage several properties, include every address and due date when you contact us.",
        ],
      },
    ],
    related: [
      "/services/commercial-backflow/",
      "/south-carolina/",
      "/request-service/",
    ],
  },
  {
    path: "/south-carolina/",
    title: "Statewide South Carolina Backflow Service",
    description:
      "Ben’s Backflow accepts jobs throughout South Carolina from its Upstate base. Discuss testing, repairs and commercial property needs beyond the Upstate.",
    eyebrow: "Statewide availability",
    heading: "South Carolina service, beyond our home region.",
    intro:
      "Based in the Upstate, Ben’s Backflow accepts jobs throughout South Carolina. Send us the location and scope so we can discuss the right arrangements.",
    sections: [
      {
        heading: "One property or a statewide portfolio",
        paragraphs: [
          "If your property is in Columbia, Charleston, Rock Hill, Florence, Myrtle Beach or elsewhere in South Carolina, contact us about the work. These are service inquiries from our Upstate base; we do not claim local offices in those cities.",
          "For commercial properties across several regions, send the locations together with assembly information, water providers and due dates. Travel, access and scheduling can then be discussed with the whole request in view.",
        ],
      },
      {
        heading: "What helps us assess the request",
        items: [
          "Complete service address for each location",
          "Testing, repair or other service needed",
          "Device information and previous reports, if available",
          "Water provider and any notice deadline",
          "Access contact and preferred scheduling window",
        ],
      },
      {
        heading: "Local requirements still apply",
        paragraphs: [
          "Utilities manage their own backflow programs. Follow the provider’s notice for your connection, and check any uncertainty directly with that provider. We can discuss testing and reporting as part of your service request.",
        ],
      },
    ],
    related: [
      "/services/commercial-backflow/",
      "/service-areas/upstate-south-carolina/",
      "/request-service/",
    ],
  },
  {
    path: "/about/",
    title: "About Ben’s Backflow Testing & Repair",
    description:
      "Meet the next generation of Ben’s Backflow. Ben is taking over from his dad, continuing a family business serving the Upstate and customers across South Carolina.",
    eyebrow: "About Ben’s Backflow",
    heading: "A family business. The next generation.",
    intro:
      "Ben is the owner/operator taking over from his dad. The work remains rooted in backflow testing and repair, with the Upstate at the center of the business.",
    image: "trailer-residential",
    alt: "Ben’s Backflow service truck and branded trailer at a property",
    sections: [
      {
        heading: "A practical trade, carried forward",
        paragraphs: [
          "The company has served the Upstate since 1999. Today, Ben is taking the business into its next chapter: helping property owners arrange testing, resolve assembly problems and keep their reports in order.",
          "Backflow is the company’s focus. Alongside testing, repair and replacement, we repair existing lawn irrigation systems. When you contact us, start with the property and the problem—we will talk through what you need.",
        ],
      },
      {
        heading: "What you can contact us for",
        items: [
          "Backflow testing and reporting",
          "Failed assemblies, repairs and replacement",
          "Commercial and property-management service requests",
          "Diagnostics and repair for existing irrigation systems",
        ],
      },
      {
        heading: "Local roots. Statewide availability.",
        paragraphs: [
          "We are based in the Upstate and accept jobs throughout South Carolina. Whether you are looking after your own property or coordinating several locations, send us the details and any testing deadline.",
        ],
        link: { href: "/service-areas/", label: "See where we work" },
      },
    ],
    related: ["/services/", "/request-service/"],
  },
  {
    path: "/resources/",
    title: "Backflow Guides & Property Checklists",
    description:
      "Practical backflow guides: testing schedules, failed tests and preparing for an appointment. Useful information for South Carolina property owners and managers.",
    eyebrow: "The resource center",
    heading: "Understand the work. Know your next step.",
    intro:
      "Straightforward guides to backflow testing and repair, written for the people responsible for the property.",
    sections: [],
    related: resources.map((p) => p.path),
  },
];

export const faqs = [
  {
    question: "Do you serve customers outside the Upstate?",
    answer:
      "Yes. The Upstate is our primary market, and we accept jobs throughout South Carolina. Send the property address and scope so we can discuss scheduling and travel.",
  },
  {
    question: "How often do I need a backflow test?",
    answer:
      "Your water provider sets the requirements for your connection. Check the testing notice or ask your provider which assembly needs testing and when. Requirements can differ by provider and property.",
  },
  {
    question: "Do you submit the test report?",
    answer:
      "Yes. After a passing test, we complete the report and submit it to the water provider. Keep the confirmation with your property records.",
  },
  {
    question: "Can you repair an assembly that fails?",
    answer:
      "We provide backflow repair and replacement. We assess the failure and discuss the options, then retest after the work. Device condition and parts availability affect the repair plan.",
  },
  {
    question: "Will the water be interrupted?",
    answer:
      "Testing can interrupt water to the affected line. Tell us about operating hours, tenants and access restrictions so the timing can be discussed before the appointment.",
  },
  {
    question: "Do you work with property managers?",
    answer:
      "Yes. Contact us about commercial properties or multiple locations with the addresses, notices, due dates and access contacts.",
  },
  {
    question: "Do you install irrigation systems?",
    answer:
      "Our irrigation service covers diagnostics, repair and optimization of existing systems. We do not install new irrigation systems or do interior plumbing work.",
  },
  {
    question: "How do I request service?",
    answer:
      "Call (864) 238-5277 or email bensbackflow@gmail.com with your service address and the work you need. An inquiry becomes an appointment when the details are confirmed with you.",
  },
];

export const allPages = [...services, ...resources, ...otherPages];
export function pageByPath(path: string) {
  return allPages.find((page) => page.path === path);
}
