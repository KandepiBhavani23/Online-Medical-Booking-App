interface MenuItems {
  id: number;
  title: string;
  subItems: {
    id: number;
    heading: string;
    description: string;
    href: string;
  }[];
}

export const megaMenuItems: MenuItems[] = [
  {
    id: 101,
    title: "Specialties",
    subItems: [
      {
        id: 102,
        heading: "Primary Care",
        description: "Comprehensive healthcare for individuals of all ages.",
        href: "/specialties/primary-care",
      },
      {
        id: 103,
        heading: "Pediatrics",
        description: "Specialized care for infants, children, and adolescents.",
        href: "/specialties/pediatrics",
      },
      {
        id: 104,
        heading: "Dermatology",
        description: "Diagnosis and treatment of skin conditions.",
        href: "/specialties/dermatology",
      },
      {
        id: 105,
        heading: "Cardiology",
        description:
          "Heart health services, including diagnostics and treatments.",
        href: "/specialties/cardiology",
      },
      {
        id: 106,
        heading: "Orthopedics",
        description:
          "Musculoskeletal care, from injuries to joint replacements.",
        href: "/specialties/orthopedics",
      },
      {
        id: 107,
        heading: "Neurology",
        description: "Diagnosis and treatment of neurological disorders.",
        href: "/specialties/neurology",
      },
      {
        id: 108,
        heading: "Ophthalmology",
        description: "Eye care services, including exams and surgeries.",
        href: "/specialties/ophthalmology",
      },
      {
        id: 109,
        heading: "Gynecology",
        description:
          "Women's health services, from exams to reproductive health.",
        href: "/specialties/gynecology",
      },
      {
        id: 110,
        heading: "Psychiatry",
        description:
          "Mental health services, including therapy and medication management.",
        href: "/specialties/psychiatry",
      },
    ],
  },
  {
    id: 201,
    title: "Doctors/Providers",
    subItems: [
      {
        id: 202,
        heading: "Find a Doctor",
        description:
          "Search for healthcare providers by specialty, location, or name.",
        href: "/doctors/find",
      },
      {
        id: 203,
        heading: "Meet Our Team",
        description: "Get to know our experienced healthcare professionals.",
        href: "/doctors/meet-our-team",
      },
      {
        id: 204,
        heading: "Provider Directory",
        description:
          "Explore our comprehensive directory of doctors and specialists.",
        href: "/doctors/provider-directory",
      },
      {
        id: 205,
        heading: "Physician Profiles",
        description:
          "Learn about our physicians' backgrounds, specialties, and expertise.",
        href: "/doctors/physician-profiles",
      },
      {
        id: 206,
        heading: "Schedule an Appointment",
        description: "Easily book an appointment with your preferred provider.",
        href: "/appointments/schedule",
      },
    ],
  },
  {
    id: 302,
    title: "Services",
    subItems: [
      {
        id: 207,
        heading: "Routine Check-ups",
        description:
          "Regular preventive healthcare visits for monitoring and wellness.",
        href: "/services/routine-checkups",
      },
      {
        id: 208,
        heading: "Vaccinations",
        description: "Immunizations to protect against infectious diseases.",
        href: "/services/vaccinations",
      },
      {
        id: 209,
        heading: "Physical Exams",
        description: "Comprehensive examinations to assess overall health.",
        href: "/services/physical-exams",
      },
      {
        id: 210,
        heading: "Lab Tests",
        description:
          "Diagnostic tests to analyze blood, urine, and other bodily fluids.",
        href: "/services/lab-tests",
      },
      {
        id: 211,
        heading: "Radiology Services",
        description: "Imaging tests such as X-rays, MRIs, and CT scans.",
        href: "/services/radiology-services",
      },
      {
        id: 212,
        heading: "Telemedicine Consultations",
        description: "Remote medical consultations via video or phone.",
        href: "/services/telemedicine-consultations",
      },
      {
        id: 213,
        heading: "Urgent Care",
        description:
          "Prompt medical attention for non-life-threatening conditions.",
        href: "/services/urgent-care",
      },
    ],
  },
  {
    id: 401,
    title: "Appointments",
    subItems: [
      {
        id: 402,
        heading: "Book an Appointment",
        description: "Schedule your next visit with ease.",
        href: "/appointments/book",
      },
      {
        id: 403,
        heading: "Manage Appointments",
        description: "View, reschedule, or cancel upcoming appointments.",
        href: "/appointments/manage",
      },
      {
        id: 404,
        heading: "Appointment Reminders",
        description: "Receive notifications to keep you informed.",
        href: "/appointments/reminders",
      },
      {
        id: 405,
        heading: "Telemedicine Appointments",
        description: "Convenient virtual consultations from anywhere.",
        href: "/appointments/telemedicine",
      },
      {
        id: 406,
        heading: "Cancel/Reschedule",
        description: "Adjust your appointment plans as needed.",
        href: "/appointments/cancel-reschedule",
      },
    ],
  },
  {
    id: 501,
    title: "Locations",
    subItems: [
      {
        id: 502,
        heading: "Clinic/Hospital Locations",
        description: "Find our facilities near you.",
        href: "/locations/clinic-hospital",
      },
      {
        id: 503,
        heading: "Hours of Operation",
        description: "Operating hours for our clinics and hospitals.",
        href: "/locations/hours-of-operation",
      },
      {
        id: 504,
        heading: "Maps & Directions",
        description: "Navigate to our locations with ease.",
        href: "/locations/maps-directions",
      },
      {
        id: 505,
        heading: "Parking Information",
        description: "Details on parking availability and accessibility.",
        href: "/locations/parking-information",
      },
      {
        id: 506,
        heading: "Virtual Tours",
        description: "Explore our facilities online before your visit.",
        href: "/locations/virtual-tours",
      },
    ],
  },
  {
    id: 601,
    title: "Insurance & Billing",
    subItems: [
      {
        id: 602,
        heading: "Accepted Insurances",
        description: "Information on insurance plans we accept.",
        href: "/insurance/accepted-insurances",
      },
      {
        id: 603,
        heading: "Billing Information",
        description: "Resources and support for managing medical bills.",
        href: "/insurance/billing-information",
      },
      {
        id: 604,
        heading: "Payment Options",
        description: "Convenient payment methods for healthcare services.",
        href: "/insurance/payment-options",
      },
      {
        id: 605,
        heading: "Insurance FAQs",
        description: "Answers to commonly asked insurance-related questions.",
        href: "/insurance/insurance-faqs",
      },
    ],
  },
  {
    id: 701,
    title: "Patient Resources",
    subItems: [
      {
        id: 702,
        heading: "Patient Portal",
        description:
          "Access your medical records and communicate with your care team.",
        href: "/patient-resources/patient-portal",
      },
      {
        id: 703,
        heading: "Health Library",
        description: "Educational resources on various health topics.",
        href: "/patient-resources/health-library",
      },
      {
        id: 704,
        heading: "FAQs",
        description:
          "Answers to frequently asked questions about our services and policies.",
        href: "/patient-resources/faqs",
      },
      {
        id: 705,
        heading: "Insurance Information",
        description: "Guidance on navigating insurance coverage and benefits.",
        href: "/patient-resources/insurance-information",
      },
      {
        id: 706,
        heading: "Medical Records Request",
        description:
          "Request copies of your medical records for personal use or transfer.",
        href: "/patient-resources/medical-records-request",
      },
    ],
  },
  {
    id: 801,
    title: "Community",
    subItems: [
      {
        id: 802,
        heading: "Health Events",
        description:
          "Information on upcoming health-related events and activities.",
        href: "/community/health-events",
      },
      {
        id: 803,
        heading: "Health Tips & Articles",
        description: "Articles and tips for maintaining a healthy lifestyle.",
        href: "/community/health-tips-articles",
      },
      {
        id: 804,
        heading: "Community Outreach Programs",
        description: "Engage with our initiatives to promote community health.",
        href: "/community/community-outreach-programs",
      },
      {
        id: 805,
        heading: "Support Groups",
        description: "Connect with others facing similar health challenges.",
        href: "/community/support-groups",
      },
      {
        id: 806,
        heading: "Health Education Classes",
        description:
          "Attend classes and workshops to learn about health topics.",
        href: "/community/health-education-classes",
      },
    ],
  },
  {
    id: 901,
    title: "About Us",
    subItems: [
      {
        id: 902,
        heading: "Our Mission",
        description:
          "Learn about our commitment to providing quality healthcare.",
        href: "/about-us/our-mission",
      },
      {
        id: 903,
        heading: "Our Team",
        description:
          "Meet the dedicated professionals behind our organization.",
        href: "/about-us/our-team",
      },
      {
        id: 904,
        heading: "Awards & Recognition",
        description: "Discover our achievements and accolades.",
        href: "/about-us/awards-recognition",
      },
      {
        id: 905,
        heading: "News & Press Releases",
        description: "Stay updated on the latest news and announcements.",
        href: "/about-us/news-press-releases",
      },
      {
        id: 906,
        heading: "Contact Us",
        description: "Reach out to us for inquiries, feedback, or assistance.",
        href: "/about-us/contact-us",
      },
    ],
  },
];
