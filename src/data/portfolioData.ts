export interface Publication {
  id: string;
  title: string;
  journal: string;
  indexedIn: ('Scopus' | 'PubMed' | 'Web of Science')[];
  volume: string;
  issue: string;
  year: number;
  pages?: string;
  citationString: string;
  doi: string;
  url: string;
  publisherUrl: string;
  scholarUrl: string;
  doiStatus?: 'verified' | 'publisher-direct';
  category: 'Research Article' | 'Review Article' | 'Nanoformulation Study';
  abstract: string;
  tags: string[];
  apaCitation: string;
  vancouverCitation: string;
}

export interface Conference {
  id: string;
  title: string;
  presentationType: 'Oral Paper Presentation' | 'Delegate Participation' | 'Conference Participation';
  scope: 'International' | 'National';
  conferenceName: string;
  organizer: string;
  location: string;
  date: string;
  certificateId?: string;
  abstractSummary?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Licensure & Statutory Registration' | 'Institutional Leadership & Research Mentorship' | 'Conferences & Scientific Presentations' | 'Workshops & Faculty Development' | 'Awards & Professional Recognition';
  date: string;
  isFeatured: boolean;
  image: string;
  imageJpg: string;
  thumb: string;
  regNo?: string;
  pppNo?: string;
  validity?: string;
  topic?: string;
  hasBack?: boolean;
  backImage?: string;
  backThumb?: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  roleOrDegree: string;
  institution: string;
  type: 'education' | 'appointment' | 'licensure' | 'research';
  description: string;
  highlights: string[];
  badge: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    fullName: string;
    title: string;
    role: string;
    department: string;
    institution: string;
    institutionAddress: string;
    appointmentDate: string;
    totalTeachingExperience: string;
    registration: {
      council: string;
      regNumber: string;
      pppNumber: string;
      validUntil: string;
      qualificationAtReg: string;
    };
    orcid: string;
    orcidUrl: string;
    email: string;
    phone: string;
    location: string;
    photo: {
      original: string;
      webp: string;
      thumb: string;
    };
    shortBio: string;
    extendedBio: string;
    researchStatement: string;
    teachingPhilosophy: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  researchAreas: {
    title: string;
    description: string;
    icon: string;
    techniques: string[];
  }[];
  education: {
    degree: string;
    specialization?: string;
    institution: string;
    university?: string;
    period: string;
    status: 'Pursuing (Winter 2024 Batch)' | 'Completed';
    thesisOrFocus?: string;
    details: string[];
  }[];
  publications: Publication[];
  conferences: Conference[];
  teaching: {
    subjects: {
      name: string;
      code?: string;
      level: 'B.Pharm' | 'D.Pharm';
      description: string;
    }[];
    administrativeRoles: {
      role: string;
      organization: string;
      duration: string;
      responsibilities: string[];
      certificateId?: string;
    }[];
  };
  workshops: {
    title: string;
    organizer: string;
    inAssociationWith?: string;
    date: string;
    location: string;
    certificateId?: string;
    description: string;
  }[];
  certificates: CertificateItem[];
  timeline: TimelineMilestone[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mohammed Ikrama",
    fullName: "Mohammed Ikrama Shakeel Ahmed",
    title: "Assistant Professor & PhD Researcher",
    role: "Assistant Professor of Pharmacology",
    department: "Department of Pharmacology",
    institution: "Gangamai Institute of Pharmacy",
    institutionAddress: "Nagaon, Dhule - 424005, Maharashtra, India",
    appointmentDate: "September 01, 2024",
    totalTeachingExperience: "2+ Years",
    registration: {
      council: "Maharashtra State Pharmacy Council (MSPC)",
      regNumber: "375736",
      pppNumber: "N/314678",
      validUntil: "31/12/2053 (Renewed through life)",
      qualificationAtReg: "B.Pharm"
    },
    orcid: "0009-0002-3334-2966",
    orcidUrl: "https://orcid.org/0009-0002-3334-2966",
    email: "mohemedikrama@gmail.com",
    phone: "+91 9511602973",
    location: "Dhule / Malegaon, Maharashtra, India",
    photo: {
      original: "/assets/profile/photo.jpg",
      webp: "/assets/profile/photo.webp",
      thumb: "/assets/profile/photo-thumb.webp"
    },
    shortBio: "Assistant Professor of Pharmacology at Gangamai Institute of Pharmacy, Dhule, and Doctoral Researcher in Pharmaceutical Sciences. Specializing in phytopharmacology, neuropharmacological animal models, and synergistic nanoformulations (niosomes and biodegradable PLGA nanocarriers).",
    extendedBio: "Mohammed Ikrama Shakeel Ahmed is an academician, registered pharmacist, and researcher dedicated to experimental pharmacology and novel drug delivery systems. Holding a Master of Pharmacy in Pharmacology from K.B.H.S.S. Institute of Pharmacy and presently pursuing his Ph.D. at Vikrant University, his doctoral research investigates co-encapsulated phytopharmaceutical niosomes targeting depressive neurobiology. Beyond his research, he actively mentors undergraduate scholars in university-level research conventions including DBATU Avishkar and administers vital academic and examination divisions at Gangamai Institute of Pharmacy.",
    researchStatement: "My investigation focuses on unlocking synergistic phytopharmacological therapeutics against neurodegenerative, depressive, and inflammatory conditions. By integrating traditional ethnomedicinal phytoconstituents (such as Bacopa monnieri, Withania somnifera, and Clitoria ternatea) with contemporary nanocarrier delivery architectures (polymeric PLGA nanoparticles and non-ionic surfactant niosomes), our laboratory targets superior blood-brain barrier permeability, reduced peripheral toxicity, and validated monoaminergic neurochemical recovery.",
    teachingPhilosophy: "I believe in experiential, student-centric pharmacological education that bridges molecular mechanisms, organ pathology, and tangible clinical interventions. By grounding theoretical concepts in interactive physiological experiments and promoting active participation in state-level research conventions like Avishkar, my goal is to cultivate rigorous scientific inquiry and ethical healthcare leadership among upcoming pharmacists."
  },

  metrics: [
    {
      label: "Peer-Reviewed Publications",
      value: "03",
      description: "Scopus & PubMed Indexed"
    },
    {
      label: "Academic Experience",
      value: "2+ Yrs",
      description: "Assistant Professor & In-charge"
    },
    {
      label: "Scientific Presentations",
      value: "04+",
      description: "International & National Forums"
    },
    {
      label: "Verified Credentials",
      value: "09+",
      description: "MSPC Licensure, DBATU & FDPs"
    }
  ],

  researchAreas: [
    {
      title: "Phytopharmacology & Natural Products",
      description: "Screening synergistic botanical extracts and bioactive phytochemicals (e.g., Withanolides, Bacosides, Flavonoids) for central nervous system and adaptogenic therapeutics.",
      icon: "Leaf",
      techniques: [
        "Soxhlet & Microwave Extraction",
        "Phytochemical Characterization",
        "In-vitro Antioxidant Assays",
        "Synergistic Combination Index Analysis"
      ]
    },
    {
      title: "Experimental Neuropharmacology",
      description: "Translational preclinical animal models evaluating depressive states, restraint stress, anxiety, and neurochemical monoamine homeostasis.",
      icon: "Brain",
      techniques: [
        "Forced Swim Test (FST)",
        "Tail Suspension Test (TST)",
        "Elevated Plus Maze (EPM)",
        "Brain Monoamine (5-HT, DA, NE) Assays"
      ]
    },
    {
      title: "Nanoformulation & Drug Delivery",
      description: "Engineering non-ionic surfactant vesicles (niosomes) and biodegradable PLGA nanocarriers for targeted delivery and improved bioavailability of hydrophobic molecules.",
      icon: "Atom",
      techniques: [
        "Thin-Film Hydration & Nanoprecipitation",
        "Particle Size & Zeta Potential Analysis",
        "Entrapment Efficiency Optimization",
        "In-Vitro Drug Release Kinetics"
      ]
    },
    {
      title: "Molecular Docking & In-Silico Modeling",
      description: "Computational drug design, ligand-target interaction profiling, and pharmacophore modeling to validate binding affinity with receptor targets prior to synthesis.",
      icon: "Cpu",
      techniques: [
        "Molecular Docking (AutoDock / PyRx)",
        "ADMET Prediction & Lipinski Rule Screening",
        "Binding Pocket Interaction Mapping",
        "Hybrid Analogue Rational Design"
      ]
    }
  ],

  education: [
    {
      degree: "Ph.D. in Pharmaceutical Sciences",
      specialization: "Pharmacology & Novel Drug Delivery Systems",
      institution: "Vikrant University",
      university: "Vikrant University, Gwalior, Madhya Pradesh",
      period: "Winter 2024 Batch – Present",
      status: "Pursuing (Winter 2024 Batch)",
      thesisOrFocus: "Synergistic Antidepressant Activity of Bacopa monnieri and Withania somnifera Co-Loaded Niosomes in Depression Models",
      details: [
        "Formulation, optimization, and characterization of co-loaded vesicular niosomes.",
        "Evaluating synergistic behavioral reversal in chronic unpredictable mild stress (CUMS) and acute depression models.",
        "Pharmacokinetic profiling and neurochemical monoaminergic assessment across rodent prefrontal cortex and hippocampus."
      ]
    },
    {
      degree: "Master of Pharmacy (M.Pharm)",
      specialization: "Pharmacology",
      institution: "K.B.H.S.S. Institute of Pharmacy",
      university: "Savitribai Phule Pune University (SPPU) affiliated",
      period: "2021 – 2023",
      status: "Completed",
      thesisOrFocus: "Preclinical behavioral screening and pharmacological evaluation of polyherbal formulations in animal models.",
      details: [
        "Rigorous training in experimental pharmacology, laboratory animal handling, and CPCSEA ethics guidelines.",
        "Advanced training on data acquisition systems (ADInstruments PowerLab) and analytical bioinstrumentation.",
        "Presented research at state and national symposiums."
      ]
    },
    {
      degree: "Bachelor of Pharmacy (B.Pharm)",
      specialization: "Pharmaceutical Sciences",
      institution: "Royal College of Pharmaceutical Education & Research",
      university: "KBC North Maharashtra University / DBATU affiliated",
      period: "2017 – 2021",
      status: "Completed",
      thesisOrFocus: "Foundational training across pharmacology, medicinal chemistry, pharmaceutics, and pharmacognosy.",
      details: [
        "Earned Registered Pharmacist license under Maharashtra State Pharmacy Council (Reg: 375736).",
        "Active organizer and participant in National Pharmacy Week (IPA Nashik) and Swachhta Pakhwada initiatives.",
        "Graduated with First Class distinction."
      ]
    }
  ],

  publications: [
    {
      id: "pub-1",
      title: "Synergistic Antidepressant Effect of Clitoria Ternatea and Phyllanthus Emblica in Experimental Animal",
      journal: "African Journal of Biological Sciences",
      indexedIn: ["Scopus"],
      volume: "6",
      issue: "13",
      year: 2024,
      pages: "427–443",
      citationString: "African Journal of Biological Sciences, 6(13), 2024, pp. 427-443.",
      doi: "10.48047/AFJBS.6.13.2024.427-443",
      url: "https://afjbs.com/",
      publisherUrl: "https://afjbs.com/",
      scholarUrl: "https://scholar.google.com/scholar?q=Synergistic+Antidepressant+Effect+of+Clitoria+Ternatea+and+Phyllanthus+Emblica+in+Experimental+Animal+Mohammed+Ikrama",
      doiStatus: "publisher-direct",
      category: "Research Article",
      abstract: "This study investigated the synergistic antidepressant efficacy of combined Clitoria ternatea and Phyllanthus emblica hydroalcoholic extracts in experimental rodent models. Utilizing forced swim test (FST) and tail suspension test (TST), the co-administered extracts demonstrated statistically significant reduction in immobility duration compared to mono-extract cohorts and vehicle controls, with marked elevation in central serotonergic and dopaminergic levels, validating potential polyherbal synergism in mood disorder therapeutics.",
      tags: ["Clitoria ternatea", "Phyllanthus emblica", "Synergism", "Antidepressant", "Neuropharmacology", "Scopus"],
      apaCitation: "Ahmed, M. I. S. (2024). Synergistic Antidepressant Effect of Clitoria Ternatea and Phyllanthus Emblica in Experimental Animal. African Journal of Biological Sciences, 6(13), 427–443. https://afjbs.com/",
      vancouverCitation: "Ahmed MIS. Synergistic Antidepressant Effect of Clitoria Ternatea and Phyllanthus Emblica in Experimental Animal. Afr J Biol Sci. 2024;6(13):427-43."
    },
    {
      id: "pub-2",
      title: "Synergistic Anti-Stress Effect of Selected Medicinal Plants in Mice",
      journal: "International Journal of Pharmaceutical Investigation",
      indexedIn: ["PubMed", "Web of Science"],
      volume: "16",
      issue: "1",
      year: 2026,
      pages: "Jan–Mar 2026",
      citationString: "Int. J. Pharm. Investigation, 16(1), Jan-Mar 2026.",
      doi: "10.5530/ijpi.20260003",
      url: "https://www.jpionline.org/",
      publisherUrl: "https://www.jpionline.org/",
      scholarUrl: "https://scholar.google.com/scholar?q=Synergistic+Anti-Stress+Effect+of+Selected+Medicinal+Plants+in+Mice+Mohammed+Ikrama",
      doiStatus: "verified",
      category: "Research Article",
      abstract: "Chronic stress precipitates systemic neuroendocrine and oxidative dysregulation. In this investigation, combinational medicinal plant extracts were assessed using acute restraint stress and anoxia stress models in mice. Pre-treatment with the selected phytopharmaceutical blend preserved adrenal gland index, mitigated stress-induced corticosterone elevation, restored depleted superoxide dismutase (SOD) levels, and preserved behavioral locomotion, highlighting robust adaptogenic and neuroprotective synergy.",
      tags: ["Anti-Stress", "Adaptogenic", "Medicinal Plants", "Oxidative Stress", "PubMed", "Preclinical"],
      apaCitation: "Ahmed, M. I. S. (2026). Synergistic Anti-Stress Effect of Selected Medicinal Plants in Mice. International Journal of Pharmaceutical Investigation, 16(1). https://www.jpionline.org/",
      vancouverCitation: "Ahmed MIS. Synergistic Anti-Stress Effect of Selected Medicinal Plants in Mice. Int J Pharm Investig. 2026;16(1)."
    },
    {
      id: "pub-3",
      title: "Design, Synthesis, Molecular Docking, and Nanoformulation of Novel Diclofenac–Benzimidazole Hybrid Analogues Loaded into Biodegradable PLGA Nanocarriers for Improved Anti-Inflammatory Activity and Gastroprotective Potential",
      journal: "International Journal of Aquatic Research and Environmental Studies",
      indexedIn: ["Scopus"],
      volume: "6",
      issue: "1 S-4",
      year: 2026,
      pages: "2026",
      citationString: "Int. J. Aquat. Res. Environ. Stud., 6(1 S-4), 2026.",
      doi: "10.53555/ijaress.v6i1S4.2026",
      url: "https://ijaress.com/",
      publisherUrl: "https://ijaress.com/",
      scholarUrl: "https://scholar.google.com/scholar?q=Design+Synthesis+Molecular+Docking+and+Nanoformulation+of+Novel+Diclofenac+Benzimidazole+Hybrid+Analogues+Loaded+into+Biodegradable+PLGA+Nanocarriers",
      doiStatus: "publisher-direct",
      category: "Nanoformulation Study",
      abstract: "Nonsteroidal anti-inflammatory drugs (NSAIDs) are severely limited by gastrointestinal ulcerogenesis. To address this, novel diclofenac–benzimidazole hybrid analogues were rationally designed through in-silico molecular docking against COX-2 and subsequently synthesized. The optimized candidate was encapsulated into biodegradable poly(lactic-co-glycolic acid) (PLGA) nanocarriers via emulsion solvent evaporation. The resulting nanoparticles exhibited controlled biphasic release, enhanced anti-inflammatory inhibition in carrageenan-induced paw edema, and zero discernible gastric mucosal lesions.",
      tags: ["PLGA Nanoparticles", "Diclofenac Analogues", "Molecular Docking", "Gastroprotection", "Anti-inflammatory", "Scopus"],
      apaCitation: "Ahmed, M. I. S. (2026). Design, Synthesis, Molecular Docking, and Nanoformulation of Novel Diclofenac–Benzimidazole Hybrid Analogues Loaded into Biodegradable PLGA Nanocarriers for Improved Anti-Inflammatory Activity and Gastroprotective Potential. International Journal of Aquatic Research and Environmental Studies, 6(1 S-4). https://ijaress.com/",
      vancouverCitation: "Ahmed MIS. Design, Synthesis, Molecular Docking, and Nanoformulation of Novel Diclofenac–Benzimidazole Hybrid Analogues Loaded into Biodegradable PLGA Nanocarriers for Improved Anti-Inflammatory Activity and Gastroprotective Potential. Int J Aquat Res Environ Stud. 2026;6(1 S-4)."
    }
  ],

  conferences: [
    {
      id: "conf-1",
      title: "Synergistic Antidepressant Effect of Herbal Plants: A Review",
      presentationType: "Oral Paper Presentation",
      scope: "International",
      conferenceName: "International Conference on Emerging Challenges and Research Frontiers in Digital Transformation (ICECRF 2026)",
      organizer: "Vikrant University",
      location: "Gwalior, Madhya Pradesh, India",
      date: "January 30–31, 2026",
      certificateId: "vniprc-ai-regulatory-2026",
      abstractSummary: "Presented a comprehensive systematic review exploring polyherbal phytoconstituents and their multifaceted mechanistic pathways targeting monoamine neurotransmitters, neuroinflammation, and hippocampal neurogenesis."
    },
    {
      id: "conf-2",
      title: "Synergistic Antidepressant Effect of Herbal Plants: A Review",
      presentationType: "Oral Paper Presentation",
      scope: "National",
      conferenceName: "National Conference on Artificial Intelligence in Regulatory Compliance: Transforming Pharmaceutical and Healthcare Industry",
      organizer: "Vidya Niketan Institute of Pharmacy & Research Center (VNIPRC)",
      location: "Bota, Sangamner, Maharashtra, India",
      date: "February 20–21, 2026",
      certificateId: "vniprc-ai-regulatory-2026",
      abstractSummary: "Delivered oral research presentation highlighting the intersection of AI-assisted phytocompound screening and regulatory compliance frameworks in developing botanical therapeutics."
    },
    {
      id: "conf-3",
      title: "National Multidisciplinary Conference on Artificial Intelligence in Health Care",
      presentationType: "Conference Participation",
      scope: "National",
      conferenceName: "One Day National Level Multidisciplinary Conference on AI in Health Care (Supported by PM-USHA)",
      organizer: "KBC North Maharashtra University, Jalgaon & Smt. SSP College of Pharmacy",
      location: "Chopda, Jalgaon, Maharashtra, India",
      date: "September 20, 2025",
      certificateId: "pm-usha-ai-healthcare-2025",
      abstractSummary: "Participated in national deliberations on deploying machine learning algorithms for diagnostics, computational pharmacology, and healthcare data analytics."
    },
    {
      id: "conf-4",
      title: "World of Clinical Research and Digital Technologies - Know What You Do Not Know",
      presentationType: "Delegate Participation",
      scope: "International",
      conferenceName: "International Conference on Clinical Research (ICCR-2023)",
      organizer: "Dr. Vithalrao Vikhe Patil Foundation's College of Pharmacy",
      location: "Vilad Ghat, Ahmednagar, Maharashtra, India",
      date: "February 13, 2023",
      certificateId: "iccr-clinical-research-2023",
      abstractSummary: "Engaged in specialized sessions addressing international clinical trial regulatory protocols, electronic data capture (EDC), and pharmacovigilance standards."
    }
  ],

  teaching: {
    subjects: [
      {
        name: "Human Anatomy and Physiology (HAP)",
        level: "B.Pharm",
        description: "Comprehensive dissection of human body systems, cellular homeostasis, hematology, cardiovascular mechanisms, neuroanatomy, and physiological regulation."
      },
      {
        name: "Pathophysiology",
        level: "B.Pharm",
        description: "Etiology, cellular adaptations, mechanisms of tissue injury, inflammation, and clinical manifestations of major organ dysfunctions."
      },
      {
        name: "Pharmacology (Theory & Laboratory)",
        level: "B.Pharm",
        description: "Pharmacodynamics, pharmacokinetics, molecular drug targets, autonomic & central nervous system pharmacology, and ethical bioassays on isolated tissues and animal paradigms."
      },
      {
        name: "Communication Skills & Professional Ethics",
        level: "B.Pharm",
        description: "Fostering academic presentation acumen, scientific literature writing, interpersonal patient counseling, and healthcare jurisprudence."
      }
    ],
    administrativeRoles: [
      {
        role: "Institute Coordinator – Avishkar Research Convention",
        organization: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
        duration: "2025 – 2026",
        responsibilities: [
          "Supervised institutional scientific research entries, innovation proposals, and model displays.",
          "Mentored undergraduate pharmacy scholars through project conception, empirical methodology, and convention defense.",
          "Liaised with the central DBATU Avishkar University Council ensuring compliance and representation."
        ],
        certificateId: "dbatu-avishkar-2025"
      },
      {
        role: "Sessional Examination In-charge",
        organization: "Gangamai Institute of Pharmacy, Dhule",
        duration: "2024 – Present",
        responsibilities: [
          "Formulation of institutional examination timetables, question paper moderation, and confidentiality protocols.",
          "Supervision of continuous internal evaluation (CIE) data collation and outcome-based education (OBE) tracking.",
          "Coordination with departmental heads for timely student performance assessments."
        ]
      },
      {
        role: "End-Semester Examination In-charge",
        organization: "Gangamai Institute of Pharmacy, Dhule (DBATU Affiliation)",
        duration: "2024 – Present",
        responsibilities: [
          "Execution of university semester-end theory and practical examinations under strict university oversight.",
          "Custodian of question paper repository, digital barcode handling, and invigilation squad coordination.",
          "Ensured full statutory and regulatory adherence required by DBATU Lonere and PCI."
        ]
      }
    ]
  },

  workshops: [
    {
      title: "Advanced Experimental Techniques & Data Acquisition in Pharmacological Research",
      organizer: "SNJB's Shriman Sureshdada Jain College of Pharmacy, Chandwad",
      inAssociationWith: "ADInstruments, New Zealand",
      date: "February 06, 2024",
      location: "Chandwad, Nashik, Maharashtra",
      description: "Hands-on training with PowerLab data acquisition hardware and LabChart software for in-vivo hemodynamic recording, electrocardiography, and isolated tissue organ bath experimentation."
    },
    {
      title: "Application of Advance Analytical Techniques in Pharmaceutical QA & Biopharmaceuticals",
      organizer: "Kai. Bhausaheb Hiray Smarnika Samiti Trust's Institute of Pharmacy, Malegaon",
      inAssociationWith: "Anatek Services Pvt. Ltd., Mumbai",
      date: "February 07, 2023",
      location: "Malegaon, Nashik, Maharashtra",
      certificateId: "kbhss-analytical-workshop-2023",
      description: "In-depth industrial exposure to High-Performance Liquid Chromatography (HPLC), Mass Spectrometry (LC-MS), and method validation under GLP guidelines."
    },
    {
      title: "58th National Pharmacy Week (IPA Celebrations)",
      organizer: "Indian Pharmaceutical Association (IPA) Nashik Local Branch",
      date: "January 06–21, 2020",
      location: "Nashik, Maharashtra",
      certificateId: "ipa-pharmacy-week-2020",
      description: "Participated and recognized during academic and scientific pharmacy events celebrating community health and pharmacist stewardship."
    },
    {
      title: "National Swachhta Pakhwada Initiative",
      organizer: "Ministry of Human Resource Development (MHRD), Government of India",
      date: "September 2017",
      location: "Malegaon, Nashik, Maharashtra",
      certificateId: "swachhta-pakhwada-2017",
      description: "Honored for active leadership in social healthcare, environmental hygiene, and institutional community welfare."
    }
  ],

  certificates: [
    {
      id: "mspc-certificate",
      title: "Registered Pharmacist Certificate",
      subtitle: "Maharashtra State Pharmacy Council (MSPC)",
      category: "Licensure & Statutory Registration",
      date: "26-December-2022",
      isFeatured: true,
      image: "/assets/certificates/mspc-pharmacist-certificate.webp",
      imageJpg: "/assets/certificates/mspc-pharmacist-certificate.jpg",
      thumb: "/assets/certificates/mspc-pharmacist-certificate-thumb.webp",
      regNo: "375736",
      pppNo: "314678",
      validity: "Valid until 31/12/2053",
      description: "Official statutory registration certificate issued under Sub-section (4) of Section 33 of the Pharmacy Act, 1948 by the Registrar of the Maharashtra State Pharmacy Council."
    },
    {
      id: "mspc-id-card",
      title: "Pharmacist Professional Smart ID Card",
      subtitle: "Maharashtra State Pharmacy Council",
      category: "Licensure & Statutory Registration",
      date: "2022 – 2053",
      isFeatured: true,
      image: "/assets/certificates/mspc-license-id-front.webp",
      imageJpg: "/assets/certificates/mspc-license-id-front.jpg",
      thumb: "/assets/certificates/mspc-license-id-front-thumb.webp",
      regNo: "375736",
      pppNo: "N/314678",
      validity: "Reg: 2053 | PPP: 2026",
      hasBack: true,
      backImage: "/assets/certificates/mspc-license-id-back.webp",
      backThumb: "/assets/certificates/mspc-license-id-back-thumb.webp",
      description: "Official identity card of Mohammed Ikrama Shakeel Ahmed as a Registered Pharmacist in Maharashtra. Interactive lightbox enables flipping between Front Identity and Back Regulatory Guidelines."
    },
    {
      id: "dbatu-avishkar-2025",
      title: "Institute Coordinator – Avishkar 2025-26",
      subtitle: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
      category: "Institutional Leadership & Research Mentorship",
      date: "2025 – 2026",
      isFeatured: true,
      image: "/assets/certificates/dbatu-avishkar-coordinator-2025.webp",
      imageJpg: "/assets/certificates/dbatu-avishkar-coordinator-2025.jpg",
      thumb: "/assets/certificates/dbatu-avishkar-coordinator-2025-thumb.webp",
      regNo: "Avishkar 2025-26",
      description: "Certificate of Appreciation recognizing successful coordination of the Avishkar Research Convention at Gangamai Institute of Pharmacy, promoting innovation, scientific inquiry, and student mentorship."
    },
    {
      id: "vniprc-ai-regulatory-2026",
      title: "Research Paper Presentation Award Certificate",
      subtitle: "VNIPRC National Conference on AI in Regulatory Compliance",
      category: "Conferences & Scientific Presentations",
      date: "20th & 21st February 2026",
      isFeatured: true,
      image: "/assets/certificates/vniprc-ai-regulatory-paper-2026.webp",
      imageJpg: "/assets/certificates/vniprc-ai-regulatory-paper-2026.jpg",
      thumb: "/assets/certificates/vniprc-ai-regulatory-paper-2026-thumb.webp",
      topic: "Synergistic Antidepressant Effect of Herbal Plants: A Review",
      description: "Awarded for oral paper presentation at the two-day National Conference on 'Artificial Intelligence in Regulatory Compliance: Transforming Pharmaceutical and Healthcare Industry' organized by VNIPRC, Bota."
    },
    {
      id: "pm-usha-ai-healthcare-2025",
      title: "National Conference on AI in Health Care",
      subtitle: "KBCNMU Jalgaon & Smt. SSP College of Pharmacy (Supported by PM-USHA)",
      category: "Conferences & Scientific Presentations",
      date: "20th September 2025",
      isFeatured: true,
      image: "/assets/certificates/pm-usha-ai-healthcare-2025.webp",
      imageJpg: "/assets/certificates/pm-usha-ai-healthcare-2025.jpg",
      thumb: "/assets/certificates/pm-usha-ai-healthcare-2025-thumb.webp",
      description: "Active participation in the National Level Multidisciplinary Conference on AI in Health Care supported by the Pradhan Mantri Uchchattar Shiksha Abhiyan (PM-USHA), Ministry of Education, Govt. of India."
    },
    {
      id: "iccr-clinical-research-2023",
      title: "International Conference on Clinical Research (ICCR-2023)",
      subtitle: "Dr. VVPF College of Pharmacy, Ahmednagar",
      category: "Conferences & Scientific Presentations",
      date: "13th February 2023",
      isFeatured: true,
      image: "/assets/certificates/iccr-clinical-research-2023.webp",
      imageJpg: "/assets/certificates/iccr-clinical-research-2023.jpg",
      thumb: "/assets/certificates/iccr-clinical-research-2023-thumb.webp",
      topic: "World of Clinical Research and Digital Technologies",
      description: "Certificate of Delegate Participation in the International Conference exploring clinical trial design, ethical drug development, and digital technologies."
    },
    {
      id: "kbhss-analytical-workshop-2023",
      title: "Workshop on Advanced Analytical Techniques in QA",
      subtitle: "KBHSS Institute of Pharmacy, Malegaon & Anatek Services Pvt. Ltd.",
      category: "Workshops & Faculty Development",
      date: "7th February 2023",
      isFeatured: false,
      image: "/assets/certificates/kbhss-analytical-workshop-2023.webp",
      imageJpg: "/assets/certificates/kbhss-analytical-workshop-2023.jpg",
      thumb: "/assets/certificates/kbhss-analytical-workshop-2023-thumb.webp",
      description: "Hands-on participation certificate in advanced analytical instrumentation, chromatography, and spectroscopic quality assurance of biopharmaceuticals."
    },
    {
      id: "ipa-pharmacy-week-2020",
      title: "58th National Pharmacy Week Award",
      subtitle: "Indian Pharmaceutical Association (IPA) Nashik Local Branch",
      category: "Awards & Professional Recognition",
      date: "6th - 21st January 2020",
      isFeatured: false,
      image: "/assets/certificates/ipa-58th-pharmacy-week-2020.webp",
      imageJpg: "/assets/certificates/ipa-58th-pharmacy-week-2020.jpg",
      thumb: "/assets/certificates/ipa-58th-pharmacy-week-2020-thumb.webp",
      description: "Awarded during the 58th National Pharmacy Week celebrations organized by the Indian Pharmaceutical Association Nashik Local Branch."
    },
    {
      id: "swachhta-pakhwada-2017",
      title: "Swachhta Pakhwada Certificate of Leadership",
      subtitle: "Ministry of Human Resource Development (MHRD), Government of India",
      category: "Awards & Professional Recognition",
      date: "September 2017",
      isFeatured: false,
      image: "/assets/certificates/swachhta-pakhwada-2017.webp",
      imageJpg: "/assets/certificates/swachhta-pakhwada-2017.jpg",
      thumb: "/assets/certificates/swachhta-pakhwada-2017-thumb.webp",
      description: "Honored by Royal College and MHRD Department of Higher Education for enthusiastic participation and leadership in the national sanitation and community outreach mission."
    }
  ],

  timeline: [
    {
      year: "2017 – 2021",
      title: "Bachelor of Pharmacy (B.Pharm)",
      roleOrDegree: "Undergraduate Scholar",
      institution: "Royal College of Pharmaceutical Education & Research, Malegaon",
      type: "education",
      description: "Completed comprehensive pharmaceutical sciences curriculum with First Class distinction. Active in community outreach and national pharmacy conventions.",
      highlights: [
        "MHRD Swachhta Pakhwada Leadership Award (2017)",
        "IPA 58th National Pharmacy Week Award (2020)",
        "Graduated with honors in Pharmacology and Medicinal Chemistry"
      ],
      badge: "Degree Conferred"
    },
    {
      year: "Dec 2022",
      title: "MSPC Registered Pharmacist Licensure",
      roleOrDegree: "Registered Pharmacist (Reg. No: 375736)",
      institution: "Maharashtra State Pharmacy Council (Govt. of Maharashtra)",
      type: "licensure",
      description: "Awarded official statutory licensure as Registered Pharmacist under the Pharmacy Act, 1948, valid through 2053 with Pharmacist Professional Profile No. N/314678.",
      highlights: [
        "Statutory license under Section 33(4) of Pharmacy Act 1948",
        "Registered with life validity up to 31/12/2053",
        "Pharmacist Professional Profile ID Card issued"
      ],
      badge: "State Licensure"
    },
    {
      year: "2021 – 2023",
      title: "Master of Pharmacy (M.Pharm) in Pharmacology",
      roleOrDegree: "Postgraduate Scholar & Researcher",
      institution: "K.B.H.S.S. Institute of Pharmacy, Malegaon, Nashik",
      type: "education",
      description: "Specialized in experimental pharmacology, animal behavior models, and neurochemical analysis under SPPU university guidelines.",
      highlights: [
        "Completed thesis on synergistic herbal neuropharmacology",
        "Participated in ICCR-2023 International Clinical Research Conference",
        "Trained in Anatek Advanced Analytical QA Instrumentation"
      ],
      badge: "M.Pharm Completed"
    },
    {
      year: "Sep 2024 – Present",
      title: "Appointed Assistant Professor of Pharmacology",
      roleOrDegree: "Assistant Professor & Examination In-charge",
      institution: "Gangamai Institute of Pharmacy, Nagaon, Dhule",
      type: "appointment",
      description: "Commenced faculty appointment in the Department of Pharmacology. Entrusted with undergraduate classroom pedagogy, practical laboratory training, and institutional governance.",
      highlights: [
        "Teaching Human Anatomy & Physiology, Pathophysiology, and Pharmacology",
        "Appointed Sessional Examination In-charge for continuous evaluation",
        "Appointed University End-Semester Examination In-charge"
      ],
      badge: "Faculty Appointment"
    },
    {
      year: "Winter 2024 – Present",
      title: "Ph.D. in Pharmaceutical Sciences",
      roleOrDegree: "Doctoral Research Scholar",
      institution: "Vikrant University, Gwalior, Madhya Pradesh",
      type: "research",
      description: "Doctoral research exploring synergistic antidepressant niosomal nanocarriers loaded with Bacopa monnieri and Withania somnifera bioactives.",
      highlights: [
        "Formulation & physicochemical characterization of vesicular niosomes",
        "Translational behavioral paradigms (FST, TST, CUMS) in rodents",
        "Hippocampal and prefrontal cortex monoamine neurochemistry"
      ],
      badge: "Ph.D. Scholar"
    },
    {
      year: "2025 – 2026",
      title: "DBATU Avishkar Research Convention Leadership & High-Impact Publications",
      roleOrDegree: "Avishkar Institute Coordinator & Senior Author",
      institution: "DBATU Lonere & Gangamai Institute of Pharmacy",
      type: "research",
      description: "Appointed Avishkar Institute Coordinator by DBATU Lonere. Published peer-reviewed research in Scopus and PubMed indexed journals; delivered oral paper presentations at ICECRF & VNIPRC 2026.",
      highlights: [
        "Certificate of Appreciation as Institute Coordinator for Avishkar 2025-26",
        "Published in African Journal of Biological Sciences (Scopus) & IJPI (PubMed)",
        "Presented oral paper at National AI in Regulatory Compliance Conference (2026)"
      ],
      badge: "Institutional Leadership"
    }
  ]
};
