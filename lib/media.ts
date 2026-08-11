// lib/media.ts
// Typed Centralized Media Manifest for Greenbaum DDS Website

export interface MediaItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isLocal?: boolean;
}

export interface VideoItem {
  src: string;
  poster: string;
  title: string;
}

export const media = {
  brand: {
    logo: {
      src: "/brand/greenbaum-mark.webp",
      alt: "Bethesda Center for Family & Cosmetic Dentistry logo",
      width: 404,
      height: 316,
      isLocal: true,
    },
    markWhite: {
      src: "/brand/greenbaum-mark.webp",
      alt: "Bethesda Center logo mark",
      width: 200,
      height: 156,
      isLocal: true,
    },
  },
  doctors: {
    drGreenbaum: {
      src: "/images/doctors/dr-greenbaum.jpg",
      alt: "Dr. Bernard L. Greenbaum, DDS - Bethesda Dentist",
      width: 600,
      height: 800,
      isLocal: true,
    },
    drLuong: {
      src: "/images/doctors/dr-luong.jpg",
      alt: "Dr. Nhu Thuy H. Luong, DDS - Bethesda Dentist",
      width: 600,
      height: 800,
      isLocal: true,
    },
  },
  clinical: {
    microscope: {
      src: "/greenbaundds/male-dentist-working-with-dental-microscope.jpg",
      alt: "Advanced precision dentistry with dental microscope at Bethesda Center",
      width: 1200,
      height: 800,
    },
    exam: {
      src: "/greenbaundds/dentist-examines-patient-s-teeth.jpg",
      alt: "Comprehensive dental examination in Bethesda",
      width: 1200,
      height: 800,
    },
    checkup: {
      src: "/greenbaundds/dentist-doing-check-up-patient.jpg",
      alt: "Gentle preventive checkup and cleaning",
      width: 1200,
      height: 800,
    },
    patientComfort: {
      src: "/greenbaundds/smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic.jpg",
      alt: "Relaxed patient during comfortable dental visit",
      width: 1200,
      height: 800,
    },
    femaleDentistCare: {
      src: "/greenbaundds/young-female-dentist-dental-office-dentist-work-dental-treatment-concept.jpg",
      alt: "Personalized dental care and treatment planning",
      width: 1200,
      height: 800,
    },
    seniorCare: {
      src: "/greenbaundds/dentist-doing-dental-treatment-intervention-senior-woman-elderly-patient-medical-examination-with-dentist-dental-office-with-orange-equipment.jpg",
      alt: "Comprehensive restorative dentistry for seniors and adults",
      width: 1200,
      height: 800,
    },
    clinicExam: {
      src: "/greenbaundds/dentist-examining-patient-s-teeth-dental-clinic.jpg",
      alt: "Thorough clinical oral health examination",
      width: 1200,
      height: 800,
    },
  },
  lifestyle: {
    happyWoman: {
      src: "/greenbaundds/excited-happy-young-pretty-woman.jpg",
      alt: "Confident patient with healthy, radiant smile",
      width: 1200,
      height: 800,
    },
    curlyHairWoman: {
      src: "/greenbaundds/headshot-carefree-happy-lucky-young-curly-haired-positive-caucasian-woman-laughing-smiling-having-fun-enjoying-perfect-day-chatting-nice-friendly-talking-coworkers-standing-white-background.jpg",
      alt: "Happy, healthy smile after cosmetic dental treatment",
      width: 1200,
      height: 800,
    },
    beamingWoman: {
      src: "/greenbaundds/good-looking-feminine-brunette-woman-with-perfect-beaming-smile-no-blemishes-makeup-skin-touching-her-face-looking-pleased-got-rid-acne.jpg",
      alt: "Natural smile aesthetic following cosmetic dentistry",
      width: 1200,
      height: 800,
    },
    handsomeMan: {
      src: "/greenbaundds/waist-up-portrait-friendly-looking-handsome-masculine-man-with-perfect-white-smile.jpg",
      alt: "Confident adult smile from restorative and implant dentistry",
      width: 1200,
      height: 800,
    },
    manWhiteSweatshirt: {
      src: "/greenbaundds/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept.jpg",
      alt: "Refreshed patient enjoying optimal bite and sleep health",
      width: 1200,
      height: 800,
    },
    hygieneBrush: {
      src: "/greenbaundds/happy-woman-cleaning-her-teeth-with-toothbrush-morning.jpg",
      alt: "Daily oral hygiene and preventive home care",
      width: 1200,
      height: 800,
    },
    handsomeCloseUp: {
      src: "/greenbaundds/smile-portrait-handsome-man-close-up-white-background-happiness-positive-mindset-relax-lifestyle-model-face-happy-big-smile-calm-energy-confidence-isolated-studio.jpg",
      alt: "Radiant smile transformation",
      width: 1200,
      height: 800,
    },
  },
  videos: {
    doctorLoop: {
      src: "/greenbaundds/0_Dentistry_Doctor_1280x672.mp4",
      poster: "/greenbaundds/male-dentist-working-with-dental-microscope.jpg",
      title: "Bethesda dental practice in action",
    },
    hygienistLoop: {
      src: "/greenbaundds/6037426_Dental_Hygienist_1280x720.mp4",
      poster: "/greenbaundds/dentist-doing-check-up-patient.jpg",
      title: "Preventive care and hygiene session",
    },
    cosmeticShadeLoop: {
      src: "/greenbaundds/6037424_Dentist_Selecting_1280x720.mp4",
      poster: "/greenbaundds/good-looking-feminine-brunette-woman-with-perfect-beaming-smile-no-blemishes-makeup-skin-touching-her-face-looking-pleased-got-rid-acne.jpg",
      title: "Cosmetic shade selection and consultation",
    },
    treatmentLoop: {
      src: "/greenbaundds/0_Dentistry_Treatment_1280x720.mp4",
      poster: "/greenbaundds/dentist-examines-patient-s-teeth.jpg",
      title: "Modern dental treatment procedure",
    },
  },
} as const;
