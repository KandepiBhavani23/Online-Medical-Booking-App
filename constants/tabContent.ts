import {
  Hospital,
  BriefcaseMedical,
  Brain,
  Syringe,
  LucideIcon,
} from "lucide-react";

interface CardContent {
  id: number;
  cardTitle: string;
  cardDescription?: string;
  image: string;
}

// Define the Tab interface
interface Tab {
  id: number;
  title: string;
  className: string;
  icons: LucideIcon;
  content: CardContent[];
}

export const tabs: Tab[] = [
  {
    id: 101,
    title: "Popular Services",
    className: "#FFF2D7",
    icons: Hospital,
    content: [
      {
        id: 102,
        cardTitle: "TeleHealth",
        cardDescription: "Virtual consultations with healthcare professionals.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/popular%20services/telehealth",
      },
      {
        id: 103,
        cardTitle: "Video Prescription Refill",
        cardDescription: "Refill prescriptions via video calls.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/popular%20services/video_presception",
      },
      {
        id: 104,
        cardTitle: "In-Person Doctor Visit",
        cardDescription: "Schedule an appointment with a local doctor.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/popular%20services/Inperson-visit",
      },
      {
        id: 105,
        cardTitle: "ED Consult",
        cardDescription: "Get urgent medical advice from specialists.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/popular%20services/urgent_visit",
      },
      {
        id: 106,
        cardTitle: "Surgery",
        cardDescription: "Book and manage surgical procedures.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/popular%20services/surgery",
      },
      {
        id: 107,
        cardTitle: "Neurotherapy",
        cardDescription: "Treat neurological conditions with advanced therapy.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/popular%20services/neurology",
      },
    ],
  },
  {
    id: 201,
    title: "Doctors",
    icons: BriefcaseMedical,
    className: "#FFEFEF",
    content: [
      {
        id: 202,
        cardTitle: "Primary Care",
        cardDescription: "Comprehensive general health care services.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/primary-care",
      },
      {
        id: 203,
        cardTitle: "Dermatology",
        cardDescription: "Skin, hair, and nail treatments and consultations.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/dermatology",
      },
      {
        id: 204,
        cardTitle: "Pediatrics",
        cardDescription: "Medical care for infants, children, and adolescents.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/pediatrics",
      },
      {
        id: 205,
        cardTitle: "Men's Health",
        cardDescription: "Specialized health services for men.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/mens-health",
      },
      {
        id: 206,
        cardTitle: "Women's Health",
        cardDescription: "Focused care for women's unique health needs.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/womens-health",
      },
      {
        id: 207,
        cardTitle: "Dental",
        cardDescription: "Oral health and dental treatments.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/dental",
      },
      {
        id: 208,
        cardTitle: "Imaging and Radiology",
        cardDescription: "Advanced imaging services for diagnosis.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/doctors/radiology",
      },
    ],
  },
  {
    id: 301,
    title: "Specialties",
    className: "#E0FBE2",
    icons: Brain,
    content: [
      {
        id: 302,
        cardTitle: "Pulmonology",
        cardDescription: "Care for respiratory system and lung diseases.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Pulmanologist",
      },
      {
        id: 303,
        cardTitle: "Orthopedics",
        cardDescription: "Treatment of musculoskeletal system disorders.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Orthopedics",
      },
      {
        id: 304,
        cardTitle: "Dermatology",
        cardDescription: "Expert care for skin, hair, and nails.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Dermatology",
      },
      {
        id: 305,
        cardTitle: "Rheumatology",
        cardDescription:
          "Diagnosis and treatment of arthritis and autoimmune diseases.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Rheumatology",
      },
      {
        id: 306,
        cardTitle: "Otolaryngology",
        cardDescription: "Care for ear, nose, and throat disorders.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Otolaryngology",
      },
      {
        id: 307,
        cardTitle: "Gastroenterology",
        cardDescription: "Digestive system and gastrointestinal health.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Gastroenterology",
      },
      {
        id: 308,
        cardTitle: "Nephrology",
        cardDescription: "Specialized care for kidney conditions.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Nephrology",
      },
      {
        id: 309,
        cardTitle: "Pathology",
        cardDescription:
          "Study of diseases through laboratory analysis of bodily fluids and tissues.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Pathology",
      },
      {
        id: 310,
        cardTitle: "Cardiology",
        cardDescription: "Heart and vascular system care and treatments.",
        image:
          "https://res.cloudinary.com/dassxiq3z/image/upload/f_auto,q_auto/v1/Doceasy-Online-MedicalBooking-App/tabITems-homepage/specialities/Cardiology",
      },
    ],
  },
  {
    id: 401,
    title: "Symptoms",
    className: "#eae3f9",
    icons: Syringe,
    content: [
      {
        id: 402,
        cardTitle: "Anxiety",
        cardDescription: "Feelings of worry, nervousness, or fear.",
        image: "",
      },
      {
        id: 403,
        cardTitle: "Depression",
        cardDescription: "Persistent sadness and loss of interest.",
        image: "",
      },
      {
        id: 404,
        cardTitle: "Asthma",
        cardDescription: "Breathing difficulties due to airway inflammation.",
        image: "",
      },
      {
        id: 405,
        cardTitle: "Back Pain",
        cardDescription: "Discomfort or pain in the lower or upper back.",
        image: "",
      },
      {
        id: 406,
        cardTitle: "UTI",
        cardDescription:
          "Infection in the urinary tract causing pain and urgency.",
        image: "",
      },
      {
        id: 407,
        cardTitle: "Flu, Cough or Cold",
        cardDescription: "Respiratory symptoms like coughing and congestion.",
        image: "",
      },
      {
        id: 408,
        cardTitle: "Acne",
        cardDescription: "Skin condition causing pimples and blemishes.",
        image: "",
      },
      {
        id: 409,
        cardTitle: "ToothPain",
        cardDescription: "Pain or discomfort in or around a tooth.",
        image: "",
      },
      {
        id: 410,
        cardTitle: "Itchy Skin",
        cardDescription: "Persistent itching or irritation of the skin.",
        image: "",
      },
      {
        id: 411,
        cardTitle: "Ear Infection",
        cardDescription: "Infection causing pain and discomfort in the ear.",
        image: "",
      },
      {
        id: 412,
        cardTitle: "Sore Throat",
        cardDescription: "Pain or irritation in the throat.",
        image: "",
      },
      {
        id: 413,
        cardTitle: "Rash",
        cardDescription: "Red, inflamed, or itchy skin eruption.",
        image: "",
      },
      {
        id: 414,
        cardTitle: "Migraine",
        cardDescription:
          "Severe headache often with nausea and light sensitivity.",
        image: "",
      },
      {
        id: 416,
        cardTitle: "Diarrhea",
        cardDescription: "Frequent loose or watery bowel movements.",
        image: "",
      },
      {
        id: 417,
        cardTitle: "Fever",
        cardDescription: "Elevated body temperature indicating infection.",
        image: "",
      },
      {
        id: 418,
        cardTitle: "Dizziness",
        cardDescription: "Feeling of lightheadedness or unsteadiness.",
        image: "",
      },
    ],
  },
];
