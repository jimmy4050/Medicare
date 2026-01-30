
import React from 'react';
import { 
  Beaker, 
  ShieldCheck, 
  Cloud, 
  Users, 
  FileText, 
  Activity, 
  Microscope,
  CreditCard,
  Package,
  Layers,
  Settings
} from 'lucide-react';
import { NavItem, FeatureItem, ProductModule } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const HIMS_MODULES: ProductModule[] = [
  {
    id: 'hims-1',
    title: 'Patient Registration & OPD',
    description: 'Streamlined appointment scheduling, queue management, and comprehensive patient profiling.',
    features: ['Quick Registration', 'Appt. Scheduling', 'Token System', 'Digital Prescriptions'],
    icon: <Users className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'hims-2',
    title: 'IPD & Ward Management',
    description: 'End-to-end management of admissions, bed allocation, and nursing records.',
    features: ['Bed Visualization', 'Daily Nursing Charts', 'OT Scheduling', 'Discharge Summary'],
    icon: <Activity className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'hims-3',
    title: 'EMR / EHR',
    description: 'Digital health records compliant with global standards, ensuring easy data retrieval.',
    features: ['Clinical History', 'Vitals Tracking', 'ICD-10 Coding', 'History Portability'],
    icon: <FileText className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'hims-4',
    title: 'Billing & Insurance',
    description: 'Consolidated billing with automated TPA and insurance claim processing.',
    features: ['Interim Billing', 'TPA Workflows', 'Discount Management', 'GST Reports'],
    icon: <CreditCard className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'hims-5',
    title: 'Pharmacy & Inventory',
    description: 'Real-time stock tracking with automated alerts and purchase orders.',
    features: ['Expiry Alerts', 'Stock Returns', 'Multi-Store Support', 'Indent Tracking'],
    icon: <Package className="w-6 h-6 text-medical-600" />,
  },
];

export const LIMS_MODULES: ProductModule[] = [
  {
    id: 'lims-1',
    title: 'Sample Collection & Accession',
    description: 'Robust barcode integration and automated sample tracking from collection to report.',
    features: ['Barcode Support', 'Sample Log-in', 'Worklist Gen.', 'Phlebotomy App'],
    icon: <Beaker className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'lims-2',
    title: 'Analyzer Integration',
    description: 'Bi-directional interfacing with leading lab analyzers for error-free data sync.',
    features: ['Uni/Bi-directional', 'Auto-Verification', 'Flagging Rules', 'Sync Logs'],
    icon: <Settings className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'lims-3',
    title: 'QC & Accreditation (NABL)',
    description: 'Built-in tools for Levey-Jennings charts and Westgard rules for NABL compliance.',
    features: ['L-J Charts', 'Audit Trails', 'Proficiency Testing', 'Corrective Actions'],
    icon: <ShieldCheck className="w-6 h-6 text-medical-600" />,
  },
  {
    id: 'lims-4',
    title: 'Patient & Doctor Portal',
    description: 'Deliver reports securely via SMS, Email, and interactive online portals.',
    features: ['Online Reporting', 'PDF Signing', 'QR Code Reports', 'Trend Analysis'],
    icon: <Microscope className="w-6 h-6 text-medical-600" />,
  },
];

export const KEY_FEATURES: FeatureItem[] = [
  {
    title: 'NABH / NABL Ready',
    description: 'Built-in workflows designed to meet strict accreditation standards from day one.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Cloud & On-Premise',
    description: 'Flexible deployment options to suit your security and infrastructure needs.',
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: 'Role-Based Access',
    description: 'Granular permissions to ensure data privacy and security for all stakeholders.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'HL7 / FHIR Integration',
    description: 'Interoperable systems that connect seamlessly with other healthcare platforms.',
    icon: <Layers className="w-6 h-6" />,
  },
];
