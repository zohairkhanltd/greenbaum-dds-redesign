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
    drGreenbaumCutout: {
      src: "/images/doctors/dr-greenbaum-cutout.webp",
      alt: "Dr. Bernard L. Greenbaum, DDS - Bethesda Dentist Portrait",
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
  heroImg: {
    src: "/images/home/new-hero.webp",
    alt: "Patient with perfect, radiant beaming smile",
    width: 1200,
    height: 1400,
    isLocal: true,
  },
  customHero: {
    src: "/images/home/hero-luxury-suite.png",
    alt: "Ultra-luxurious Bethesda Center dental treatment suite with ambient architectural lighting",
    width: 1200,
    height: 800,
    isLocal: true,
  },
  customCosmetic: {
    src: "/images/home/cosmetic-smile-luxury.png",
    alt: "Radiant, natural white aesthetic smile transformation",
    width: 1200,
    height: 800,
    isLocal: true,
  },
  clinical: {
    microscope: {
      src: "/images/services/microscopic-dentistry.png",
      alt: "Advanced precision dentistry with dental microscope at Bethesda Center",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    exam: {
      src: "/images/office/consultation-room.png",
      alt: "Comprehensive digital smile consultation suite in Bethesda",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    checkup: {
      src: "/images/services/preventive-hygiene.png",
      alt: "Gentle preventive care and hygiene suite",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    patientComfort: {
      src: "/images/office/luxury-lounge.png",
      alt: "Executive reception lounge at Bethesda Center for Family & Cosmetic Dentistry",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    femaleDentistCare: {
      src: "/images/services/sleep-apnea-care.png",
      alt: "Personalized sleep apnea and dental sleep therapy care",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    seniorCare: {
      src: "/images/services/dental-implants.png",
      alt: "Precision 3D dental implant and restorative dentistry",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    clinicExam: {
      src: "/images/home/hero-luxury-suite.png",
      alt: "Thorough clinical oral health examination suite",
      width: 1200,
      height: 800,
      isLocal: true,
    },
  },
  lifestyle: {
    patientSmileCutout: {
      src: "/images/lifestyle/patient-smile-cutout.webp",
      alt: "Patient with perfect, radiant beaming smile",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    happyWoman: {
      src: "/images/home/cosmetic-smile-luxury.png",
      alt: "Confident patient with healthy, radiant smile",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    curlyHairWoman: {
      src: "/images/home/cosmetic-smile-luxury.png",
      alt: "Happy, healthy smile after cosmetic dental treatment",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    beamingWoman: {
      src: "/images/home/cosmetic-smile-luxury.png",
      alt: "Natural smile aesthetic following cosmetic dentistry",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    handsomeMan: {
      src: "/images/services/dental-implants.png",
      alt: "Confident adult smile from restorative and implant dentistry",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    manWhiteSweatshirt: {
      src: "/images/services/sleep-apnea-care.png",
      alt: "Refreshed patient enjoying optimal bite and sleep health",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    hygieneBrush: {
      src: "/images/services/preventive-hygiene.png",
      alt: "Daily oral hygiene and preventive care",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    handsomeCloseUp: {
      src: "/images/home/cosmetic-smile-luxury.png",
      alt: "Radiant smile transformation",
      width: 1200,
      height: 800,
      isLocal: true,
    },
  },
  office: {
    lounge: {
      src: "/images/office/luxury-lounge.png",
      alt: "Executive reception lounge with warm fireplace and marble accents",
      width: 1200,
      height: 800,
      isLocal: true,
    },
    consultation: {
      src: "/images/office/consultation-room.png",
      alt: "Private digital smile design consultation room",
      width: 1200,
      height: 800,
      isLocal: true,
    },
  },
  videos: {
    doctorLoop: {
      src: "/greenbaundds/0_Dentistry_Doctor_1280x672.mp4",
      poster: "/images/services/microscopic-dentistry.png",
      title: "Bethesda dental practice in action",
    },
    hygienistLoop: {
      src: "/greenbaundds/6037426_Dental_Hygienist_1280x720.mp4",
      poster: "/images/services/preventive-hygiene.png",
      title: "Preventive care and hygiene session",
    },
    cosmeticShadeLoop: {
      src: "/greenbaundds/6037424_Dentist_Selecting_1280x720.mp4",
      poster: "/images/home/cosmetic-smile-luxury.png",
      title: "Cosmetic shade selection and consultation",
    },
    treatmentLoop: {
      src: "/greenbaundds/0_Dentistry_Treatment_1280x720.mp4",
      poster: "/images/home/hero-luxury-suite.png",
      title: "Modern dental treatment procedure",
    },
  },
} as const;
