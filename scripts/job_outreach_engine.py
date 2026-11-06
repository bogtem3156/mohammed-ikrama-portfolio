"""
Pharma & Biotech Career Search Engine & Networking Tracker
Candidate: Mohammed Ikrama Shakeel Ahmed (M.Pharm, Ph.D. Researcher)
Specialization: Preclinical In-Vivo Pharmacology, Niosomes & PLGA Nanocarriers, Molecular Docking
"""

import os
import json
import csv
from datetime import datetime

DATA_FILE = "data/job_search_database.json"
CSV_EXPORT = "data/job_applications_tracker.csv"
HTML_DASHBOARD = "public/job_tracker_dashboard.html"

# Ensure directories exist
os.makedirs("data", exist_ok=True)
os.makedirs("public", exist_ok=True)

CANDIDATE = {
    "name": "Mohammed Ikrama Shakeel Ahmed",
    "title": "Assistant Professor of Pharmacology & Ph.D. Researcher",
    "email": "mohemedikrama@gmail.com",
    "phone": "+91 9511602973",
    "linkedin": "https://www.linkedin.com/in/mohammed-ikrama-712b43287/",
    "portfolio": "https://mohammed-ikrama-portfolio.vercel.app",
    "cv_pdf": "https://mohammed-ikrama-portfolio.vercel.app/assets/CV.pdf",
    "reg_no": "MSPC #375736 (PPP: N/314678)",
    "target_salary_india": "₹90,000+ / month (₹11.0 – ₹18.0 LPA CTC)",
    "target_salary_abroad": "$75,000 – $120,000 / AED 18,000 – 28,000/mo",
    "notice_period": "30 Days (Negotiable for immediate research transition)"
}

TARGET_COMPANIES = [
    # HYDERABAD HUB
    {
        "id": "dr-reddys",
        "company": "Dr. Reddy's Laboratories",
        "hub": "Hyderabad",
        "location": "IPDO Bachupally / Discovery Biology Bollaram, Hyderabad",
        "division": "Integrated Product Development Organization (IPDO) & Biologics Discovery",
        "target_roles": ["Scientist - Preclinical In-Vivo Pharmacology", "Senior Research Scientist - NDDS"],
        "expected_ctc": "₹12.0 - ₹16.5 LPA",
        "key_focus": "Central Nervous System, Metabolic Disorders, Oral Bioavailability Enhancement",
        "career_url": "https://careers.drreddys.com/",
        "email_format": "firstname.lastname@drreddys.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "aragen",
        "company": "Aragen Life Sciences (formerly GVK BIO)",
        "hub": "Hyderabad",
        "location": "Nacharam & Mallapur Discovery Campus, Hyderabad",
        "division": "Discovery Biology, In-Vivo Pharmacology & Safety Assessment",
        "target_roles": ["Study Director - In-Vivo Pharmacology", "Senior Scientist - Safety Pharmacology"],
        "expected_ctc": "₹11.5 - ₹15.0 LPA",
        "key_focus": "Preclinical CRO models, FST/TST, Inflammation, IAEC/CPCSEA protocol compliance",
        "career_url": "https://www.aragen.com/careers/",
        "email_format": "firstname.lastname@aragen.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "sai-life",
        "company": "Sai Life Sciences",
        "hub": "Hyderabad",
        "location": "Genome Valley, Shamirpet, Hyderabad",
        "division": "Preclinical Discovery Biology & DMPK",
        "target_roles": ["Senior Scientist - Discovery Biology", "Research Scientist - In-Vivo Efficacy"],
        "expected_ctc": "₹11.0 - ₹14.5 LPA",
        "key_focus": "Small molecules, In-vivo rodent efficacy models, PK/PD correlation",
        "career_url": "https://www.sailife.com/careers/",
        "email_format": "firstname.l@sailife.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "aurobindo",
        "company": "Aurobindo Pharma",
        "hub": "Hyderabad",
        "location": "Aurobindo Pharma Research Centre (APRC-I/II), Bachupally & Pashamylaram",
        "division": "Preclinical Research & Novel Drug Delivery Systems",
        "target_roles": ["Scientist - Formulation NDDS", "Scientist - Pharmacology & Toxicology"],
        "expected_ctc": "₹10.5 - ₹14.0 LPA",
        "key_focus": "Nanoparticles, Vesicular drug carriers, Bioequivalence & Preclinical Screening",
        "career_url": "https://www.aurobindo.com/careers/",
        "email_format": "firstname.lastname@aurobindo.com",
        "status": "Target Identified",
        "priority": "Medium"
    },
    {
        "id": "biological-e",
        "company": "Biological E. Limited",
        "hub": "Hyderabad",
        "location": "Genome Valley, Shamirpet, Hyderabad",
        "division": "Biologics, In-Vivo Bioassay & Safety Pharmacology",
        "target_roles": ["Senior Executive / Assistant Manager - In-Vivo Testing", "Scientist - Preclinical Safety"],
        "expected_ctc": "₹10.0 - ₹13.5 LPA",
        "key_focus": "Animal models, ELISA, Bioassays, Immunogenicity & Toxicology",
        "career_url": "https://www.biologicale.com/careers.html",
        "email_format": "firstname.lastname@biologicale.com",
        "status": "Target Identified",
        "priority": "Medium"
    },
    {
        "id": "bharat-biotech",
        "company": "Bharat Biotech International",
        "hub": "Hyderabad",
        "location": "Genome Valley, Hyderabad",
        "division": "Preclinical Animal Research & Translational Medicine",
        "target_roles": ["Scientist - In-Vivo Pharmacology & Preclinical Safety", "Research Scientist - Translational Biology"],
        "expected_ctc": "₹11.0 - ₹15.0 LPA",
        "key_focus": "Preclinical challenge models, Rodent handling, CPCSEA compliance",
        "career_url": "https://www.bharatbiotech.com/careers.html",
        "email_format": "hr@bharatbiotech.com",
        "status": "Target Identified",
        "priority": "Medium"
    },

    # BANGALORE HUB
    {
        "id": "syngene",
        "company": "Syngene International (Biocon Group)",
        "hub": "Bangalore",
        "location": "Biocon Park, Electronic City & Bommasandra, Bangalore",
        "division": "Discovery Biology, In-Vivo Pharmacology & Toxicology",
        "target_roles": ["Senior Scientist - In-Vivo Pharmacology", "Study Director - Preclinical Biology", "Principal Investigator - Neuroscience"],
        "expected_ctc": "₹13.0 - ₹18.0 LPA",
        "key_focus": "Global CRO studies, CNS behavioral models (FST, TST, EPM), Neurochemistry, CPCSEA/AAALAC audits",
        "career_url": "https://www.syngeneintl.com/careers/",
        "email_format": "firstname.lastname@syngeneintl.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "anthem",
        "company": "Anthem Biosciences",
        "hub": "Bangalore",
        "location": "Bommasandra Industrial Area & Harohalli, Bangalore",
        "division": "Preclinical Pharmacology, Safety Assessment & Discovery CRO",
        "target_roles": ["Senior Scientist - In-Vivo Pharmacology", "Project Manager - Preclinical Studies"],
        "expected_ctc": "₹11.5 - ₹15.5 LPA",
        "key_focus": "Rodent models of depression, pain, inflammation, pharmacokinetic sampling",
        "career_url": "https://www.anthembio.com/careers/",
        "email_format": "firstname.lastname@anthembio.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "aurigene",
        "company": "Aurigene Discovery Technologies",
        "hub": "Bangalore",
        "location": "Electronic City Phase II, Bangalore",
        "division": "Translational Pharmacology & In-Vivo Biology",
        "target_roles": ["Research Scientist - In-Vivo Pharmacology", "Scientist - Pharmacology & Biomarkers"],
        "expected_ctc": "₹12.0 - ₹16.0 LPA",
        "key_focus": "Oncology, Inflammation, In-vivo drug screening, PK/PD assays",
        "career_url": "https://www.aurigene.com/careers/",
        "email_format": "firstname.lastname@aurigene.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "astrazeneca-blr",
        "company": "AstraZeneca India R&D",
        "hub": "Bangalore",
        "location": "Manyata Tech Park, Nagavara, Bangalore",
        "division": "Global Medical Affairs, Scientific Communications & Preclinical Data Systems",
        "target_roles": ["Medical Science Liaison (MSL) - Neuro / Oncology", "Scientific Communications Lead"],
        "expected_ctc": "₹15.0 - ₹22.0 LPA",
        "key_focus": "Scientific liaison with key opinion leaders, clinical and preclinical data interpretation",
        "career_url": "https://careers.astrazeneca.com/",
        "email_format": "firstname.lastname@astrazeneca.com",
        "status": "Target Identified",
        "priority": "High"
    },

    # PUNE HUB
    {
        "id": "serum-inst",
        "company": "Serum Institute of India (Cyrus Poonawalla Group)",
        "hub": "Pune",
        "location": "Hadapsar, Pune, Maharashtra",
        "division": "Animal Research & Safety Pharmacology / Bioassay",
        "target_roles": ["Senior Research Scientist - In-Vivo Toxicology", "Study Scientist - Preclinical Bioassays"],
        "expected_ctc": "₹12.0 - ₹17.0 LPA",
        "key_focus": "In-vivo quality control assays, safety pharmacology, rodent disease models",
        "career_url": "https://www.seruminstitute.com/careers.php",
        "email_format": "firstname.lastname@seruminstitute.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "lupin-lrp",
        "company": "Lupin Research Park (LRP)",
        "hub": "Pune",
        "location": "Nande Village, Mulshi, Pune, Maharashtra",
        "division": "Novel Drug Discovery & Preclinical Pharmacology",
        "target_roles": ["Senior Scientist - In-Vivo Pharmacology", "Research Scientist - NDDS & Formulation"],
        "expected_ctc": "₹12.5 - ₹16.5 LPA",
        "key_focus": "Preclinical CNS & Respiratory models, Nanocarriers, Molecular docking screening",
        "career_url": "https://www.lupin.com/careers/",
        "email_format": "firstname.lastname@lupin.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "emcure",
        "company": "Emcure Pharmaceuticals",
        "hub": "Pune",
        "location": "Hinjewadi Infotech Park & Bhosari, Pune, Maharashtra",
        "division": "R&D - Preclinical Formulations & Drug Delivery",
        "target_roles": ["Scientist - Novel Drug Delivery Systems (NDDS)", "Manager - Preclinical Documentation & CPCSEA"],
        "expected_ctc": "₹11.0 - ₹14.5 LPA",
        "key_focus": "Liposomes, Niosomes, Biodegradable polymeric carriers, Preclinical kinetics",
        "career_url": "https://www.emcure.com/careers/",
        "email_format": "firstname.lastname@emcure.co.in",
        "status": "Target Identified",
        "priority": "Medium"
    },
    {
        "id": "gennova",
        "company": "Gennova Biopharmaceuticals",
        "hub": "Pune",
        "location": "Hinjewadi Phase II, Pune, Maharashtra",
        "division": "Translational Biology & Preclinical Animal Testing",
        "target_roles": ["Scientist - In-Vivo Pharmacology", "Preclinical Project Coordinator"],
        "expected_ctc": "₹11.0 - ₹15.0 LPA",
        "key_focus": "Nanoparticle mRNA formulations, Preclinical biodistribution, rodent immunogenicity",
        "career_url": "https://gennova.bio/careers/",
        "email_format": "careers@gennova.bio",
        "status": "Target Identified",
        "priority": "Medium"
    },

    # INTERNATIONAL CROs & PHARMA GIANTS
    {
        "id": "eurofins",
        "company": "Eurofins Scientific / Discovery",
        "hub": "International / India",
        "location": "Bangalore / Europe / USA / Singapore",
        "division": "Eurofins Discovery - In-Vivo Pharmacology & Safety",
        "target_roles": ["Study Director - In-Vivo Pharmacology", "Senior Scientist - Neurobiology"],
        "expected_ctc": "₹14.0 - ₹20.0 LPA (India) | $85,000 - $115,000 (US/Europe)",
        "key_focus": "Neuropharmacology CRO screening, High-throughput in-vivo assays, International GLP compliance",
        "career_url": "https://www.eurofins.com/careers/",
        "email_format": "firstname.lastname@eurofins.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "charles-river",
        "company": "Charles River Laboratories",
        "hub": "International (UK / Germany / USA)",
        "location": "Edinburgh (UK) / Frankfurt (Germany) / Wilmington, MA (USA)",
        "division": "Discovery & Safety Assessment (In-Vivo Pharmacology)",
        "target_roles": ["Research Scientist I/II - In-Vivo Pharmacology", "Postdoctoral Scientist - CNS Pharmacology"],
        "expected_ctc": "£45,000 - £62,000 (UK) | $85,000 - $110,000 (USA)",
        "key_focus": "Neuroscience models, Behavioral assays, In-vivo microdialysis, Stereotaxic surgery",
        "career_url": "https://jobs.criver.com/",
        "email_format": "firstname.lastname@criver.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "novartis",
        "company": "Novartis Healthcare / NIBR",
        "hub": "Hyderabad / Switzerland / USA",
        "location": "Novartis Knowledge City, Hitec City, Hyderabad & Basel, Switzerland",
        "division": "Novartis Institutes for BioMedical Research (NIBR) & Global Drug Development",
        "target_roles": ["Senior Scientific Communications Specialist", "Preclinical Data Scientist / MSL"],
        "expected_ctc": "₹16.0 - ₹24.0 LPA (India) | CHF 110,000 - 135,000 (Switzerland)",
        "key_focus": "Scientific data dissemination, Preclinical-to-clinical bridge, Regulatory dossier preparation",
        "career_url": "https://www.novartis.com/careers",
        "email_format": "firstname.lastname@novartis.com",
        "status": "Target Identified",
        "priority": "High"
    },
    {
        "id": "julphar-uae",
        "company": "Julphar Pharmaceuticals (Gulf Pharmaceutical Industries)",
        "hub": "UAE / Gulf",
        "location": "Ras Al Khaimah / Dubai, United Arab Emirates",
        "division": "R&D Formulation & Preclinical Research",
        "target_roles": ["R&D Scientist - Formulation Development", "Preclinical Regulatory & Scientific Affairs Specialist"],
        "expected_ctc": "AED 18,000 - 26,000 / month (Tax-Free: ~₹4.0 - ₹5.8 Lakhs/mo)",
        "key_focus": "NDDS formulation development, Regulatory dossiers (MOHAP UAE, GCC SFDA), Bioavailability",
        "career_url": "https://julphar.net/careers/",
        "email_format": "careers@julphar.net",
        "status": "Target Identified",
        "priority": "High"
    }
]

def save_database():
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump({"candidate": CANDIDATE, "companies": TARGET_COMPANIES}, f, indent=2)
    print(f"[OK] Database saved to {DATA_FILE}")

def export_csv():
    fieldnames = [
        "Company", "Hub", "Location", "Division", "Target Roles", "Expected CTC", 
        "Key Focus", "Career URL", "Email Format", "Status", "Priority"
    ]
    with open(CSV_EXPORT, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for c in TARGET_COMPANIES:
            writer.writerow({
                "Company": c["company"],
                "Hub": c["hub"],
                "Location": c["location"],
                "Division": c["division"],
                "Target Roles": " | ".join(c["target_roles"]),
                "Expected CTC": c["expected_ctc"],
                "Key Focus": c["key_focus"],
                "Career URL": c["career_url"],
                "Email Format": c["email_format"],
                "Status": c["status"],
                "Priority": c["priority"]
            })
    print(f"[OK] CSV Tracker exported to {CSV_EXPORT}")

def generate_html_dashboard():
    companies_rows = ""
    for c in TARGET_COMPANIES:
        badge_color = "bg-emerald-100 text-emerald-800" if c["priority"] == "High" else "bg-blue-100 text-blue-800"
        roles_html = "".join([f"<span class='inline-block bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs px-2 py-0.5 rounded mr-1 mb-1 font-medium'>{r}</span>" for r in c["target_roles"]])
        
        companies_rows += f"""
        <tr class="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
            <td class="p-4">
                <div class="font-bold text-slate-900 dark:text-white">{c["company"]}</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">{c["location"]}</div>
            </td>
            <td class="p-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {c["hub"]}
                </span>
            </td>
            <td class="p-4">
                <div class="max-w-md">{roles_html}</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 italic">{c["division"]}</div>
            </td>
            <td class="p-4 font-mono font-semibold text-emerald-700 dark:text-emerald-400 text-xs">
                {c["expected_ctc"]}
            </td>
            <td class="p-4">
                <span class="px-2 py-1 text-xs font-bold rounded-md {badge_color}">
                    {c["priority"]}
                </span>
            </td>
            <td class="p-4 text-xs font-mono text-slate-500">
                {c["email_format"]}
            </td>
            <td class="p-4">
                <a href="{c["career_url"]}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors">
                    Portal &rarr;
                </a>
            </td>
        </tr>
        """

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pharma & Biotech Job Search Matrix | Mohammed Ikrama</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {{ font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }}
    </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased p-4 md:p-8">
    <div class="max-w-7xl mx-auto space-y-8">
        
        <!-- Header Banner -->
        <header class="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-emerald-500/20">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        CONFIDENTIAL CAREER MATRIX
                    </span>
                    <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight mt-2">{CANDIDATE["name"]}</h1>
                    <p class="text-emerald-300 font-medium text-sm md:text-base mt-1">{CANDIDATE["title"]}</p>
                    <p class="text-xs text-slate-300 mt-2">
                        {CANDIDATE["reg_no"]} &bull; {CANDIDATE["email"]} &bull; {CANDIDATE["phone"]}
                    </p>
                </div>
                <div class="flex flex-wrap gap-2 text-xs">
                    <a href="{CANDIDATE["portfolio"]}" target="_blank" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all">
                        <i class="fa-solid fa-globe mr-1"></i> Live Portfolio
                    </a>
                    <a href="{CANDIDATE["cv_pdf"]}" target="_blank" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all">
                        <i class="fa-solid fa-file-pdf mr-1"></i> Official CV (PDF)
                    </a>
                    <a href="{CANDIDATE["linkedin"]}" target="_blank" class="px-4 py-2 rounded-xl bg-[#0077b5] hover:bg-[#005582] text-white font-semibold transition-all">
                        <i class="fa-brands fa-linkedin mr-1"></i> LinkedIn Profile
                    </a>
                </div>
            </div>

            <!-- Key Value Proposition Chips -->
            <div class="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div class="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-emerald-300 font-bold">Target Compensation</p>
                    <p class="text-white font-mono mt-0.5">{CANDIDATE["target_salary_india"]}</p>
                </div>
                <div class="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-teal-300 font-bold">Target Hubs</p>
                    <p class="text-white mt-0.5">Hyderabad, Bangalore, Pune & International</p>
                </div>
                <div class="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-cyan-300 font-bold">Core Specialization</p>
                    <p class="text-white mt-0.5">In-Vivo Pharmacology, Niosomes, Docking</p>
                </div>
                <div class="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-amber-300 font-bold">Notice Period</p>
                    <p class="text-white mt-0.5">{CANDIDATE["notice_period"]}</p>
                </div>
            </div>
        </header>

        <!-- Target Company Database Table -->
        <section class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">Target Companies &amp; CRO Matrix ({len(TARGET_COMPANIES)} Selected)</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Tier-1 Pharma Innovators, Global CROs, and Biotech R&amp;D Hubs filtered by compensation match.</p>
                </div>
                <div class="flex items-center gap-2">
                    <a href="/data/job_applications_tracker.csv" download class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
                        <i class="fa-solid fa-download mr-1"></i> Download CSV Tracker
                    </a>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-sm">
                    <thead>
                        <tr class="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
                            <th class="p-4">Company &amp; Location</th>
                            <th class="p-4">Hub</th>
                            <th class="p-4">Target Roles &amp; Division</th>
                            <th class="p-4">Expected Package</th>
                            <th class="p-4">Priority</th>
                            <th class="p-4">Email Format</th>
                            <th class="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies_rows}
                    </tbody>
                </table>
            </div>
        </section>

    </div>
</body>
</html>
"""
    with open(HTML_DASHBOARD, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"[OK] HTML Dashboard generated at {HTML_DASHBOARD}")

if __name__ == "__main__":
    save_database()
    export_csv()
    generate_html_dashboard()
    print("[SUCCESS] Outreach database and dashboard initialized successfully.")
