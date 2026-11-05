import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

os.makedirs('public/assets', exist_ok=True)
pdf_path = 'public/assets/CV.pdf'

# Page margins: compact to fit comprehensive academic data elegantly
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=32,
    rightMargin=32,
    topMargin=28,
    bottomMargin=28
)

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    'DocName',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=16,
    leading=19,
    textColor=colors.HexColor('#0f172a'),
    alignment=1
)

sub_style = ParagraphStyle(
    'DocSub',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=13,
    textColor=colors.HexColor('#047857'),
    alignment=1
)

contact_style = ParagraphStyle(
    'DocContact',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    leading=11,
    textColor=colors.HexColor('#334155'),
    alignment=1
)

heading_style = ParagraphStyle(
    'SectionHeading',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=12,
    textColor=colors.HexColor('#065f46'),
    spaceBefore=4,
    spaceAfter=3
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=7.8,
    leading=10.5,
    textColor=colors.HexColor('#1e293b')
)

right_align_style = ParagraphStyle(
    'RightAlignCustom',
    parent=body_style,
    alignment=2
)

elements = []

# --- 1. MASTHEAD & STATUTORY IDENTIFIERS ---
elements.append(Paragraph('MOHAMMED IKRAMA SHAKEEL AHMED', name_style))
elements.append(Spacer(1, 1.5))
elements.append(Paragraph('ASSISTANT PROFESSOR OF PHARMACOLOGY &amp; PH.D. RESEARCHER', sub_style))
elements.append(Spacer(1, 2.5))
elements.append(Paragraph(
    'Department of Pharmacology, Gangamai Institute of Pharmacy, Nagaon, Dhule - 424005, Maharashtra, India<br/>'
    'Email: <b>mohemedikrama@gmail.com</b> | Mobile: <b>+91 9511602973</b> | ORCID: <b>0009-0002-3334-2966</b><br/>'
    '<b>MSPC Registered Pharmacist: #375736</b> | Passbook (PPP): <b>N/314678</b> | Validity: <b>31/12/2053 (Life Validated)</b>',
    contact_style
))
elements.append(Spacer(1, 4))
elements.append(HRFlowable(width='100%', thickness=1.5, color=colors.HexColor('#059669'), spaceBefore=2, spaceAfter=4))

# --- 2. FACULTY APPOINTMENTS & INSTITUTIONAL GOVERNANCE ---
elements.append(Paragraph('FACULTY APPOINTMENTS &amp; INSTITUTIONAL GOVERNANCE', heading_style))
apt_data = [
    [
        Paragraph(
            '<b>Assistant Professor of Pharmacology</b><br/>'
            'Department of Pharmacology, Gangamai Institute of Pharmacy, Nagaon, Dhule, Maharashtra<br/>'
            '• <b>Institute Coordinator – DBATU Avishkar Research Convention (2025–26):</b> Incubating student innovations and university research delegations.<br/>'
            '• <b>Examination In-Charge (Internal &amp; University):</b> Administration of sessional and statutory end-semester university examinations.',
            body_style
        ),
        Paragraph('<b>Sep 2024 – Present</b><br/>2+ Yrs Teaching Exp.<br/>Affiliated to DBATU, Lonere', right_align_style)
    ]
]
t_apt = Table(apt_data, colWidths=[400, 148])
t_apt.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_apt)
elements.append(Spacer(1, 3))

# --- 3. ACADEMIC EDUCATION & QUALIFICATIONS ---
elements.append(Paragraph('ACADEMIC EDUCATION &amp; RESEARCH TRAINING', heading_style))
edu_data = [
    [
        Paragraph(
            '<b>Doctor of Philosophy (Ph.D.) in Pharmaceutical Sciences (Pharmacology)</b><br/>'
            'Vikrant University, Gwalior, Madhya Pradesh<br/>'
            '<i>Thesis: "Synergistic Antidepressant Activity of Bacopa monnieri and Withania somnifera Co-Loaded Niosomes in Depression Models"</i>',
            body_style
        ),
        Paragraph('<b>Winter 2024 Batch – Present</b><br/>Doctoral Researcher', right_align_style)
    ],
    [
        Paragraph(
            '<b>Master of Pharmacy (M.Pharm) in Pharmacology</b><br/>'
            'K.B.H.S.S. Institute of Pharmacy, Malegaon, Nashik | Savitribai Phule Pune University (SPPU)<br/>'
            '<i>Specialization: Preclinical behavioral models, PowerLab data acquisition, CPCSEA laboratory animal ethics.</i>',
            body_style
        ),
        Paragraph('<b>2021 – 2023</b><br/>Completed • Distinction', right_align_style)
    ],
    [
        Paragraph(
            '<b>Bachelor of Pharmacy (B.Pharm)</b><br/>'
            'Royal College of Pharmaceutical Education &amp; Research, Dhule | KBC North Maharashtra University / DBATU<br/>'
            '<i>Foundations: Pharmacology, Medicinal Chemistry, Pharmaceutics, Pharmacognosy, and Regulatory Pharmacy.</i>',
            body_style
        ),
        Paragraph('<b>2017 – 2021</b><br/>Completed • First Class', right_align_style)
    ]
]
t_edu = Table(edu_data, colWidths=[400, 148])
t_edu.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_edu)
elements.append(Spacer(1, 3))

# --- 4. PEER-REVIEWED RESEARCH PUBLICATIONS ---
elements.append(Paragraph('PEER-REVIEWED RESEARCH PUBLICATIONS (SCOPUS &amp; PUBMED / WEB OF SCIENCE)', heading_style))
pubs = [
    '<b>1. Synergistic Antidepressant Effect of Clitoria Ternatea and Phyllanthus Emblica in Experimental Animal</b><br/>'
    '<i>African Journal of Biological Sciences</i>, 2024, Vol. 6, Issue 13, pp. 427–443. ISSN: 0972-8848. '
    '<b>[DOI: 10.48047/AFJBS.6.13.2024.427-443]</b> — <b>Indexed in: Scopus</b>',

    '<b>2. Synergistic Anti-Stress Effect of Selected Medicinal Plants in Mice</b><br/>'
    '<i>International Journal of Pharmaceutical Investigation</i>, 2026, Vol. 16, Issue 1. '
    '<b>[DOI: 10.5530/ijpi.20260003]</b> — <b>Indexed in: PubMed / Web of Science</b>',

    '<b>3. Design, Synthesis, Molecular Docking, and Nanoformulation of Novel Diclofenac–Benzimidazole Hybrid Analogues Loaded into Biodegradable PLGA Nanocarriers for Improved Anti-Inflammatory Activity and Gastroprotective Potential</b><br/>'
    '<i>International Journal of Aquatic Research and Environmental Studies</i>, 2026, Vol. 6, Issue 1 S-4, pp. 320–338. '
    '<b>[DOI: 10.53555/kuey.v30i5.1983]</b> — <b>Indexed in: Scopus</b>'
]
for p in pubs:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 2.5))
elements.append(Spacer(1, 2))

# --- 5. SCIENTIFIC CONFERENCES & PRESENTATIONS ---
elements.append(Paragraph('SCIENTIFIC CONFERENCES &amp; ORAL PRESENTATIONS', heading_style))
confs = [
    '• <b>Artificial Intelligence in Regulatory Compliance (Oral Paper Presentation):</b> National Conference on AI in Pharmaceutical Regulatory Sciences, VNIPRC, Bota (Feb 2026) [National Scope].',
    '• <b>Clinical Research &amp; Good Clinical Practice (Delegate Participation):</b> International Conference on Clinical Research (ICCR-2023), Dr. VVPF College of Pharmacy, Ahmednagar (Feb 2023) [International Scope].'
]
for c in confs:
    elements.append(Paragraph(c, body_style))
    elements.append(Spacer(1, 1.5))
elements.append(Spacer(1, 2))

# --- 6. CORE EXPERIMENTAL COMPETENCIES & TEACHING PEDAGOGY ---
elements.append(Paragraph('CORE PHARMACOLOGICAL EXPERTISE &amp; TEACHING PORTFOLIO', heading_style))
elements.append(Paragraph(
    '<b>Preclinical Behavioral Pharmacology:</b> Forced Swim Test (FST), Tail Suspension Test (TST), Elevated Plus Maze (EPM), Acute Restraint Stress (ARS), Chronic Unpredictable Mild Stress (CUMS), Rodent Locomotor Profiling.<br/>'
    '<b>Novel Drug Delivery Systems:</b> Formulation, particle sizing, and zeta potential optimization of Non-ionic Surfactant Niosomes and Biodegradable PLGA Nanoparticles; In-vitro drug release kinetics.<br/>'
    '<b>In-Silico Computational Modeling:</b> Molecular Docking (AutoDock / PyRx), Ligand-Protein Binding Pocket Interactions, ADMET Profiling, Lipinski Rule of 5 Screening.<br/>'
    '<b>Undergraduate Courses Instructed:</b> Human Anatomy &amp; Physiology, Pathophysiology, Pharmacology (Theory &amp; Laboratory), Communication Skills &amp; Professional Ethics.',
    body_style
))
elements.append(Spacer(1, 2))

# --- 7. WORKSHOPS & PROFESSIONAL RECOGNITION ---
elements.append(Paragraph('WORKSHOPS, FDPs &amp; PROFESSIONAL RECOGNITION', heading_style))
elements.append(Paragraph(
    '• <b>Advanced Research Techniques in Pharmacology &amp; Data Acquisition:</b> SNJB College of Pharmacy &amp; ADInstruments New Zealand (Feb 2024).<br/>'
    '• <b>Advanced Analytical Techniques in Pharmaceutical QA &amp; Biopharmaceuticals:</b> K.B.H.S.S. Institute of Pharmacy &amp; Anatek Services (Feb 2023).<br/>'
    '• <b>Indian Pharmaceutical Association (IPA Nashik):</b> 58th National Pharmacy Week Award (2020).<br/>'
    '• <b>Government of India / MHRD:</b> Swachhta Pakhwada Participation &amp; Institutional Recognition Award (Sep 2017).',
    body_style
))
elements.append(Spacer(1, 4))
elements.append(HRFlowable(width='100%', thickness=0.8, color=colors.HexColor('#94a3b8'), spaceBefore=2, spaceAfter=3))
elements.append(Paragraph(
    'Verified Academic Curriculum Vitae of Mohammed Ikrama Shakeel Ahmed | Gangamai Institute of Pharmacy | MSPC Registration #375736',
    ParagraphStyle('DocFoot', parent=styles['Normal'], fontName='Helvetica', fontSize=7, leading=9, textColor=colors.HexColor('#64748b'), alignment=1)
))

doc.build(elements)
print(f'Verified CV.pdf successfully built at {pdf_path}, size: {os.path.getsize(pdf_path)} bytes')
