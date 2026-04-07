import jsPDF from 'jspdf';

const DUMMY_DOCUMENTS = [
  {
    title: 'Q1 2026 Financial Report',
    author: 'Finance Department',
    date: 'April 7, 2026',
    pages: generateFinancialReport,
  },
  {
    title: 'Employee Handbook',
    author: 'HR Department',
    date: 'January 1, 2026',
    pages: generateEmployeeHandbook,
  },
  {
    title: 'Product Roadmap 2026',
    author: 'Product Team',
    date: 'March 15, 2026',
    pages: generateProductRoadmap,
  },
];

function generateFinancialReport(doc: jsPDF) {
  // Cover page
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Q1 2026 Financial Report', 105, 80, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Finance Department', 105, 100, { align: 'center' });
  doc.text('April 7, 2026', 105, 115, { align: 'center' });

  doc.setDrawColor(200, 200, 200);
  doc.line(40, 130, 170, 130);

  doc.setFontSize(11);
  doc.text('CONFIDENTIAL', 105, 145, { align: 'center' });

  // Page 2 - Revenue Summary
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Revenue Summary', 20, 30);

  doc.setDrawColor(100, 149, 237);
  doc.setLineWidth(1);
  doc.line(20, 35, 190, 35);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');

  const revenueData = [
    ['Category', 'Q1 2025', 'Q1 2026', 'Growth'],
    ['Product Sales', '$2.4M', '$3.1M', '+29.2%'],
    ['Services', '$1.2M', '$1.8M', '+50.0%'],
    ['Subscriptions', '$0.8M', '$1.4M', '+75.0%'],
    ['Other', '$0.3M', '$0.4M', '+33.3%'],
    ['Total', '$4.7M', '$6.7M', '+42.6%'],
  ];

  let y = 55;
  doc.setFont('helvetica', 'bold');
  doc.setFillColor(240, 240, 240);
  doc.rect(20, y - 7, 170, 10, 'F');
  revenueData[0].forEach((cell, i) => {
    doc.text(cell, 25 + i * 42, y);
  });

  doc.setFont('helvetica', 'normal');
  revenueData.slice(1).forEach((row, rowIdx) => {
    y += 12;
    if (rowIdx === revenueData.length - 2) {
      doc.setFont('helvetica', 'bold');
      doc.setFillColor(230, 240, 255);
      doc.rect(20, y - 7, 170, 10, 'F');
    }
    row.forEach((cell, i) => {
      doc.text(cell, 25 + i * 42, y);
    });
  });

  doc.setFont('helvetica', 'normal');
  y += 25;
  doc.setFontSize(11);
  doc.text('Key Highlights:', 20, y);
  y += 10;
  const highlights = [
    '• Record-breaking Q1 revenue driven by strong subscription growth',
    '• Services revenue exceeded targets by 15%',
    '• New enterprise clients added: 23 (vs 14 in Q1 2025)',
    '• Customer retention rate: 94.2%',
  ];
  highlights.forEach((h) => {
    doc.text(h, 25, y);
    y += 9;
  });

  // Page 3 - Expenses
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Expense Breakdown', 20, 30);

  doc.setDrawColor(100, 149, 237);
  doc.setLineWidth(1);
  doc.line(20, 35, 190, 35);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');

  const expenseData = [
    ['Department', 'Budget', 'Actual', 'Variance'],
    ['Engineering', '$1.8M', '$1.7M', '-$0.1M'],
    ['Sales & Marketing', '$1.2M', '$1.3M', '+$0.1M'],
    ['Operations', '$0.6M', '$0.58M', '-$0.02M'],
    ['G&A', '$0.4M', '$0.38M', '-$0.02M'],
    ['R&D', '$0.5M', '$0.52M', '+$0.02M'],
    ['Total', '$4.5M', '$4.48M', '-$0.02M'],
  ];

  y = 55;
  doc.setFont('helvetica', 'bold');
  doc.setFillColor(240, 240, 240);
  doc.rect(20, y - 7, 170, 10, 'F');
  expenseData[0].forEach((cell, i) => {
    doc.text(cell, 25 + i * 42, y);
  });

  doc.setFont('helvetica', 'normal');
  expenseData.slice(1).forEach((row, rowIdx) => {
    y += 12;
    if (rowIdx === expenseData.length - 2) {
      doc.setFont('helvetica', 'bold');
      doc.setFillColor(230, 240, 255);
      doc.rect(20, y - 7, 170, 10, 'F');
    }
    row.forEach((cell, i) => {
      doc.text(cell, 25 + i * 42, y);
    });
  });
}

function generateEmployeeHandbook(doc: jsPDF) {
  // Cover page
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Employee Handbook', 105, 80, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Human Resources Department', 105, 100, { align: 'center' });
  doc.text('Effective: January 1, 2026', 105, 115, { align: 'center' });

  doc.setDrawColor(200, 200, 200);
  doc.line(40, 130, 170, 130);

  doc.setFontSize(11);
  doc.text('Welcome to our company!', 105, 145, { align: 'center' });

  // Page 2 - Company Values
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Our Core Values', 20, 30);

  doc.setDrawColor(100, 149, 237);
  doc.line(20, 35, 190, 35);

  const values = [
    { title: 'Innovation', desc: 'We embrace creativity and push boundaries to solve complex problems.' },
    { title: 'Integrity', desc: 'We act with honesty and transparency in everything we do.' },
    { title: 'Collaboration', desc: 'We believe the best results come from working together.' },
    { title: 'Excellence', desc: 'We hold ourselves to the highest standards of quality.' },
    { title: 'Inclusion', desc: 'We celebrate diversity and create an environment where everyone belongs.' },
  ];

  let y = 55;
  values.forEach((v) => {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text(v.title, 20, y);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(v.desc, 165);
    doc.text(lines, 20, y + 7);
    y += 7 + lines.length * 7 + 8;
  });

  // Page 3 - Benefits
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Employee Benefits', 20, 30);

  doc.setDrawColor(100, 149, 237);
  doc.line(20, 35, 190, 35);

  const benefits = [
    'Health & Wellness',
    ['Comprehensive medical, dental, and vision insurance', 'Mental health support and Employee Assistance Program', 'Annual wellness stipend: $1,000', 'Gym membership reimbursement up to $50/month'],
    'Financial Benefits',
    ['Competitive base salary with annual reviews', '401(k) with 4% company match', 'Employee Stock Purchase Plan (ESPP)', 'Life and disability insurance'],
    'Work-Life Balance',
    ['Flexible working hours', 'Remote work options', '20 days PTO + 10 company holidays', 'Parental leave: 16 weeks primary, 8 weeks secondary'],
    'Professional Development',
    ['$2,000 annual learning & development budget', 'Access to online learning platforms', 'Conference attendance support', 'Internal mentorship program'],
  ];

  y = 55;
  benefits.forEach((item) => {
    if (typeof item === 'string') {
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text(item, 20, y);
      y += 10;
    } else {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      item.forEach((b) => {
        doc.text(`• ${b}`, 25, y);
        y += 8;
      });
      y += 5;
    }
  });
}

function generateProductRoadmap(doc: jsPDF) {
  // Cover page
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Product Roadmap 2026', 105, 80, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Product Team', 105, 100, { align: 'center' });
  doc.text('March 15, 2026', 105, 115, { align: 'center' });

  doc.setDrawColor(200, 200, 200);
  doc.line(40, 130, 170, 130);

  doc.setFontSize(11);
  doc.text('Building the future, one sprint at a time.', 105, 145, { align: 'center' });

  // Page 2 - Q1/Q2
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('H1 2026 Initiatives', 20, 30);

  doc.setDrawColor(100, 149, 237);
  doc.line(20, 35, 190, 35);

  const h1Items = [
    { quarter: 'Q1 2026', status: 'Completed', items: ['Mobile app redesign (iOS & Android)', 'SSO integration with SAML 2.0', 'API v3 release with GraphQL support', 'Real-time collaboration features'] },
    { quarter: 'Q2 2026', status: 'In Progress', items: ['AI-powered recommendation engine', 'Advanced analytics dashboard', 'Bulk import/export tools', 'Enterprise audit logging'] },
  ];

  let y = 50;
  h1Items.forEach((section) => {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`${section.quarter} — ${section.status}`, 20, y);
    y += 3;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 190, y);
    y += 10;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    section.items.forEach((item) => {
      const badge = section.status === 'Completed' ? '[DONE]' : '[IN PROGRESS]';
      doc.text(`${badge} ${item}`, 25, y);
      y += 9;
    });
    y += 8;
  });

  // Page 3 - Q3/Q4
  doc.addPage();
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('H2 2026 Initiatives', 20, 30);

  doc.setDrawColor(100, 149, 237);
  doc.line(20, 35, 190, 35);

  const h2Items = [
    { quarter: 'Q3 2026', status: 'Planned', items: ['Multi-region data residency', 'Workflow automation builder', 'Custom branding & white-labeling', 'Performance optimization sprint'] },
    { quarter: 'Q4 2026', status: 'Planned', items: ['Native integrations with 50+ tools', 'Self-serve onboarding improvements', 'Advanced role-based access control', 'Year-end security audit & hardening'] },
  ];

  y = 50;
  h2Items.forEach((section) => {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`${section.quarter} — ${section.status}`, 20, y);
    y += 3;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 190, y);
    y += 10;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    section.items.forEach((item) => {
      doc.text(`[PLANNED] ${item}`, 25, y);
      y += 9;
    });
    y += 8;
  });
}

export interface DummyDocument {
  id: string;
  title: string;
  author: string;
  date: string;
  blob: Blob;
  pageCount: number;
}

export async function generateDummyDocuments(): Promise<DummyDocument[]> {
  return DUMMY_DOCUMENTS.map((docDef, idx) => {
    const doc = new jsPDF();
    docDef.pages(doc);

    const blob = doc.output('blob');
    const pageCount = doc.getNumberOfPages();

    return {
      id: `doc-${idx + 1}`,
      title: docDef.title,
      author: docDef.author,
      date: docDef.date,
      blob,
      pageCount,
    };
  });
}
