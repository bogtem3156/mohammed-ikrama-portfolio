import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

os.makedirs('public/assets', exist_ok=True)
pdf_path = 'public/assets/CV.pdf'

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    'DocName',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=18,
    leading=22,
    textColor=colors.HexColor('#0f172a'),
    alignment=1
)

sub_style = ParagraphStyle(
    'DocSub',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#059669'),
    alignment=1
)

contact_style = ParagraphStyle(
    'DocContact',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    textColor=colors.HexColor('#475569'),
    alignment=1
)

heading_style = ParagraphStyle(
    'SectionHeading',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor('#065f46'),
    spaceAfter=4
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#1e293b')
)

elements = []

# Masthead
elements.append(Paragraph('MOHAMMED IKRAMA SHAKEEL AHMED', name_style))
elements.append(Spacer(1, 2))
elements.append(Paragraph('ASSISTANT PROFESSOR OF PHARMACOLOGY &amp; PH.D. RESEARCHER', sub_style))
elements.append(Spacer(1, 4))
elements.append(Paragraph('Gangamai Institute of Pharmacy, Nagaon, Dhule - 424005, Maharashtra, India<br/>Email: ikramashakeel92@gmail.com | Phone: +91 93259 87304 | MSPC Reg: #375736 (PPP: N/314678)', contact_style))
elements.append(Spacer(1, 8))
elements.append(HRFlowable(width='100%', thickness=1.5, color=colors.HexColor('#059669'), spaceBefore=2, spaceAfter=8))

# Academic Appointments
elements.append(Paragraph('ACADEMIC APPOINTMENTS', heading_style))
apt_data = [
    [Paragraph('<b>Assistant Professor of Pharmacology</b><br/>Gangamai Institute of Pharmacy, Nagaon, Dhule, Maharashtra', body_style),
     Paragraph('<b>Sept 2024 - Present</b><br/>Affiliated to DBATU, Lonere', ParagraphStyle('R1', parent=body_style, alignment=2))],
    [Paragraph('<b>Assistant Professor of Pharmacology</b><br/>Ali-Allana College of Pharmacy, Akkalkuwa, Nandurbar, Maharashtra', body_style),
     Paragraph('<b>Nov 2022 - Sept 2024</b><br/>2 Years Teaching Experience', ParagraphStyle('R2', parent=body_style, alignment=2))]
]
t_apt = Table(apt_data, colWidths=[380, 160])
t_apt.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ('TOPPADDING', (0,0), (-1,-1), 2),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_apt)
elements.append(Spacer(1, 6))

# Education & Qualifications
elements.append(Paragraph('EDUCATION &amp; QUALIFICATIONS', heading_style))
edu_data = [
    [Paragraph('<b>Doctor of Philosophy (Ph.D.) in Pharmaceutical Sciences (Pharmacology)</b><br/>School of Pharmacy, Parul University, Vadodara, Gujarat', body_style),
     Paragraph('<b>Admitted Winter 2024</b><br/>Enrolment: 240822301004', ParagraphStyle('RE1', parent=body_style, alignment=2))],
    [Paragraph('<b>Master of Pharmacy (M.Pharm) in Pharmacology</b><br/>Ali-Allana College of Pharmacy, KBC North Maharashtra University, Jalgaon', body_style),
     Paragraph('<b>2020 - 2022</b><br/>First Class with Distinction', ParagraphStyle('RE2', parent=body_style, alignment=2))],
    [Paragraph('<b>Bachelor of Pharmacy (B.Pharm)</b><br/>Ali-Allana College of Pharmacy, KBC North Maharashtra University, Jalgaon', body_style),
     Paragraph('<b>2016 - 2020</b><br/>First Class', ParagraphStyle('RE3', parent=body_style, alignment=2))]
]
t_edu = Table(edu_data, colWidths=[380, 160])
t_edu.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ('TOPPADDING', (0,0), (-1,-1), 2),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
elements.append(t_edu)
elements.append(Spacer(1, 6))

# Peer-Reviewed Research Publications
elements.append(Paragraph('PEER-REVIEWED RESEARCH PUBLICATIONS', heading_style))
pubs = [
    '<b>1. Synergistic Antidepressant Effect of Clitoria Ternatea and Phyllanthus Emblica in Experimental Animal</b><br/><i>African Journal of Biological Sciences</i>, 2024, Vol. 6, Issue 13, pp. 427-443. ISSN: 0972-8848.',
    '<b>2. A Systematic Review on Anti-Arthritic Efficacy of Curcumin: Mechanistic Insights</b><br/><i>International Journal of Pharmaceutical Investigation</i>, 2023, Vol. 13, Issue 4, pp. 680-688.',
    '<b>3. Screening of Diuretic Activity of Ethanolic Extract of Cucumis Melo Seeds in Wistar Albino Rats</b><br/><i>Journal of Drug Delivery and Therapeutics</i>, 2022, Vol. 12, Issue 3, pp. 112-118.'
]
for p in pubs:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 3))
elements.append(Spacer(1, 4))

# Statutory Registrations & Academic Leadership
elements.append(Paragraph('STATUTORY REGISTRATIONS &amp; INSTITUTIONAL LEADERSHIP', heading_style))
leadership = [
    '• <b>Registered Pharmacist:</b> Maharashtra State Pharmacy Council (MSPC) Reg. No. 375736, Pharmacist Professional Passbook No. N/314678.',
    '• <b>Institute Coordinator - DBATU Avishkar Research Convention (2025-2026):</b> Coordinated university research projects across Western Maharashtra.',
    '• <b>Paper Presenter:</b> National Conference on AI in Regulatory Compliance (VNIPRC Bota, Feb 2026).',
    '• <b>Faculty Delegate:</b> International Conference on Clinical Research (ICCR-2023, Dr. VVPF College of Pharmacy, Ahmednagar).'
]
for l in leadership:
    elements.append(Paragraph(l, body_style))
    elements.append(Spacer(1, 2.5))
elements.append(Spacer(1, 4))

# Research Core Competencies
elements.append(Paragraph('RESEARCH SPECIALIZATIONS &amp; LABORATORY COMPETENCIES', heading_style))
elements.append(Paragraph('<b>In Vivo Behavioral Pharmacology:</b> Forced Swim Test (FST), Tail Suspension Test (TST), Elevated Plus Maze (EPM), Open Field Test (OFT), Rotarod Motor Coordination.<br/><b>Disease Models:</b> Freund\'s Complete Adjuvant (FCA) Arthritis Model, Formalin-induced Nociception, Tail Immersion Analgesia.<br/><b>Biochemical &amp; Analytical:</b> ELISA, Spectrophotometric Enzyme Assays (SOD, Catalase, MDA, GSH), HPLC, Column Chromatography.<br/><b>Regulatory &amp; Ethics:</b> CPCSEA Guidelines, Protocol Preparation, Institutional Animal Ethics Committee (IAEC) Documentation.', body_style))

doc.build(elements)
print(f'PDF generated successfully at {pdf_path}, size: {os.path.getsize(pdf_path)} bytes')
