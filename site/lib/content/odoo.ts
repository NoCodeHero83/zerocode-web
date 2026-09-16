import type { Locale } from '@/lib/nav'

export interface OdooModule {
  name: string
  description: string
  hasExperience?: boolean
}

export interface OdooModuleGroup {
  title: string
  modules: OdooModule[]
}

export interface OdooStep {
  number: string
  title: string
  description: string
}

export interface TechStackItem {
  icon: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
}

export interface OdooContent {
  hero: {
    label: string
    title: string
    titleAccent: string
    description: string
    bullets: string[]
    cta: string
    ctaHref: string
    secondaryNote: string
  }
  techStack: {
    label: string
    title: string
    subtitle: string
    items: TechStackItem[]
  }
  featuredProject: {
    label: string
    title: string
    steps: OdooStep[]
  }
  moduleCatalog: {
    label: string
    title: string
    description: string
    groups: OdooModuleGroup[]
  }
  closing: {
    title: string
    description: string
    cta: string
    ctaHref: string
  }
}

export const odooContent: Record<Locale, OdooContent> = {
  en: {
    hero: {
      label: 'Odoo ERP & CRM',
      title: 'Odoo Development & Integration for',
      titleAccent: 'Business Optimization',
      description:
        'Odoo development and integration oriented to administrative business optimization, focused on backend process automation, local regulatory compliance (electronic invoicing), and interface customization beyond standard ERP usage.',
      bullets: [
        'API & Backend Integration',
        'Self-Hosted Infrastructure',
        'Custom View Development',
        'SOAP / WS-Security',
      ],
      cta: 'Schedule a Consultation',
      ctaHref: 'https://zerocode.la/contact/',
      secondaryNote: 'Free 30-minute discovery call',
    },
    techStack: {
      label: 'Technical Stack',
      title: 'Our Odoo Expertise',
      subtitle: 'Deep technical knowledge across the full Odoo ecosystem',
      items: [
        {
          icon: 'Code',
          title: 'Odoo API & Backend',
          subtitle: 'Automation at scale',
          description: 'Full-stack API integration to automate invoicing workflows, business processes, and inter-system communication.',
          highlights: ['XML-RPC & JSON-RPC', 'Automated workflows', 'Custom business logic'],
        },
        {
          icon: 'Server',
          title: 'Self-Hosted Infrastructure',
          subtitle: 'Full environment control',
          description: 'Deployment, configuration, and maintenance of Odoo on private servers for maximum security and performance.',
          highlights: ['Docker & Nginx', 'SSL & security hardening', 'Backup & monitoring'],
        },
        {
          icon: 'Layout',
          title: 'Custom View Development',
          subtitle: 'Brand-aligned interfaces',
          description: 'Module development using inherited views to transform the Odoo backend into a branded, purpose-built management panel.',
          highlights: ['Inherited views', 'Custom XML templates', 'UI/UX optimization'],
        },
        {
          icon: 'Plug',
          title: 'External Integrations',
          subtitle: 'Enterprise connectivity',
          description: 'SOAP / WS-Security and REST API connections for third-party services, payment gateways, and government systems.',
          highlights: ['SOAP / WS-Security', 'Payment gateways', 'Government APIs (CFE/DGI)'],
        },
      ],
    },
    featuredProject: {
      label: 'Featured Project',
      title: 'Electronic Invoicing (CFE)',
      steps: [
        {
          number: '01',
          title: 'Regulatory Research',
          description:
            'Analysis of CFE/DGI requirements in Uruguay and the mandatory 2026 adoption schedule for VAT taxpayers.',
        },
        {
          number: '02',
          title: 'API Integration',
          description:
            'Automation of the electronic invoicing process connecting zerocode.la backend with Odoo, integrating SOAP/WS-Security.',
        },
        {
          number: '03',
          title: 'Interface Redesign',
          description:
            'Custom module with inherited view on account.move to give a proprietary visual identity to the entire invoicing panel.',
        },
      ],
    },
    moduleCatalog: {
      label: 'Module Catalog',
      title: 'Odoo Modules We Implement',
      description:
        'Service areas covered for implementation, integration, and customization.',
      groups: [
        {
          title: 'Sales & Customer Relationship',
          modules: [
            { name: 'CRM', description: 'Opportunity and pipeline management.' },
            { name: 'Sales', description: 'Quotations, orders, and sales workflows.' },
            { name: 'Subscriptions', description: 'Recurring billing and contract management.' },
            { name: 'Point of Sale (POS)', description: 'In-store sales and register integration.' },
            { name: 'Website', description: 'Web presence integrated with the ERP.' },
            { name: 'eCommerce', description: 'Online store connected to inventory and sales.' },
          ],
        },
        {
          title: 'Finance',
          modules: [
            { name: 'Invoicing', description: 'account.move, view customization, and CFE automation.', hasExperience: true },
            { name: 'Accounting', description: 'Chart of accounts, reconciliation, and accounting reports.' },
            { name: 'Expenses', description: 'Internal expense registration and approval.' },
            { name: 'Spreadsheets', description: 'Dynamic reports integrated with Odoo data.' },
          ],
        },
        {
          title: 'Operations & Supply Chain',
          modules: [
            { name: 'Inventory', description: 'Stock control, locations, and movements.' },
            { name: 'Purchasing', description: 'Purchase orders and supplier management.' },
            { name: 'Manufacturing (MRP)', description: 'Production orders and bills of materials.' },
            { name: 'Maintenance', description: 'Equipment and maintenance request management.' },
            { name: 'Quality', description: 'Quality control points and alerts.' },
            { name: 'Fleet', description: 'Vehicle and associated cost management.' },
          ],
        },
        {
          title: 'Human Resources',
          modules: [
            { name: 'Employees', description: 'Personnel records, org chart, and staff data.' },
            { name: 'Recruitment', description: 'Applicant tracking and selection processes.' },
            { name: 'Attendances', description: 'Employee check-in/check-out control.' },
            { name: 'Absences', description: 'Leave and vacation management.' },
            { name: 'Evaluations', description: 'Employee performance tracking.' },
            { name: 'Payroll', description: 'Salary calculation and management.' },
          ],
        },
        {
          title: 'Productivity & Project Management',
          modules: [
            { name: 'Projects', description: 'Task planning and team tracking.' },
            { name: 'Timesheets', description: 'Time tracking per project/task.' },
            { name: 'Documents', description: 'Centralized document management.' },
            { name: 'Electronic Signature', description: 'Digital document signing and validation.' },
            { name: 'Internal Chat', description: 'Internal communication linked to records.' },
          ],
        },
        {
          title: 'Marketing',
          modules: [
            { name: 'Email Marketing', description: 'Segmented email campaigns.' },
            { name: 'SMS Marketing', description: 'Text message campaigns.' },
            { name: 'Marketing Automation', description: 'Automatic flows based on customer behavior.' },
            { name: 'Events', description: 'Event organization and ticket sales.' },
            { name: 'Surveys', description: 'Survey creation and analysis.' },
          ],
        },
        {
          title: 'Customization & Platform',
          modules: [
            { name: 'Studio', description: 'View and model customization with/without code.', hasExperience: true },
            { name: 'Custom Module Development', description: 'Bespoke modules with inherited views.', hasExperience: true },
            { name: 'API Integrations', description: 'External system connectivity via API/SOAP.', hasExperience: true },
            { name: 'Automations', description: 'Automatic rules on system events.', hasExperience: true },
            { name: 'Administration / Self-hosted', description: 'Deployment and maintenance of own instances.', hasExperience: true },
          ],
        },
      ],
    },
    closing: {
      title: 'Ready to Transform Your Operations?',
      description:
        'Book a free consultation to discuss how Odoo ERP can consolidate your tools, automate manual processes, and give you full visibility across your business.',
      cta: 'Get Started',
      ctaHref: 'https://zerocode.la/contact/',
    },
  },
  es: {
    hero: {
      label: 'Odoo ERP & CRM',
      title: 'Desarrollo e Integración Odoo para',
      titleAccent: 'Optimización de Negocios',
      description:
        'Desarrollo e integración sobre Odoo orientada a la optimización administrativa de negocios, con foco en automatización de procesos de backend, cumplimiento normativo local (facturación electrónica) y personalización de la interfaz de gestión más allá del uso estándar del ERP.',
      bullets: [
        'Integración API & Backend',
        'Infraestructura Self-Hosted',
        'Desarrollo de Vistas a Medida',
        'SOAP / WS-Security',
      ],
      cta: 'Agendar una Consulta',
      ctaHref: 'https://zerocode.la/contact/',
      secondaryNote: 'Llamada de descubrimiento gratuita de 30 minutos',
    },
    techStack: {
      label: 'Stack Técnico',
      title: 'Nuestra Experiencia en Odoo',
      subtitle: 'Conocimiento técnico profundo en todo el ecosistema Odoo',
      items: [
        {
          icon: 'Code',
          title: 'Odoo API & Backend',
          subtitle: 'Automatización a escala',
          description: 'Integración completa vía API para automatizar flujos de facturación, procesos de negocio y comunicación entre sistemas.',
          highlights: ['XML-RPC & JSON-RPC', 'Flujos automatizados', 'Lógica de negocio personalizada'],
        },
        {
          icon: 'Server',
          title: 'Infraestructura Self-Hosted',
          subtitle: 'Control total del entorno',
          description: 'Despliegue, configuración y mantenimiento de Odoo en servidores privados para máxima seguridad y rendimiento.',
          highlights: ['Docker & Nginx', 'SSL y hardening de seguridad', 'Backup y monitoreo'],
        },
        {
          icon: 'Layout',
          title: 'Desarrollo de Vistas a Medida',
          subtitle: 'Interfaces con identidad de marca',
          description: 'Desarrollo de módulos con vistas heredadas para transformar el backend de Odoo en un panel de gestión personalizado.',
          highlights: ['Vistas heredadas', 'Templates XML personalizados', 'Optimización UI/UX'],
        },
        {
          icon: 'Plug',
          title: 'Integraciones Externas',
          subtitle: 'Conectividad empresarial',
          description: 'Conexiones SOAP / WS-Security y REST API con servicios de terceros, pasarelas de pago y sistemas gubernamentales.',
          highlights: ['SOAP / WS-Security', 'Pasarelas de pago', 'APIs gubernamentales (CFE/DGI)'],
        },
      ],
    },
    featuredProject: {
      label: 'Proyecto Destacado',
      title: 'Facturación Electrónica (CFE)',
      steps: [
        {
          number: '01',
          title: 'Investigación Normativa',
          description:
            'Requisitos de CFE/DGI en Uruguay y cronograma de adopción obligatoria 2026 para contribuyentes de IVA.',
        },
        {
          number: '02',
          title: 'Integración vía API',
          description:
            'Automatización del proceso de facturación electrónica conectando el backend de zerocode.la con Odoo, integrando SOAP/WS-Security.',
        },
        {
          number: '03',
          title: 'Rediseño de Interfaz',
          description:
            'Módulo con vista heredada sobre account.move para dar identidad visual propia a todo el panel de facturación.',
        },
      ],
    },
    moduleCatalog: {
      label: 'Catálogo de Módulos',
      title: 'Módulos de Odoo que Implementamos',
      description:
        'Áreas de servicio cubiertas para implementación, integración y personalización.',
      groups: [
        {
          title: 'Ventas & Relación con el Cliente',
          modules: [
            { name: 'CRM', description: 'Gestión de oportunidades y pipeline comercial.' },
            { name: 'Ventas', description: 'Cotizaciones, pedidos y flujos de venta.' },
            { name: 'Suscripciones', description: 'Facturación recurrente y gestión de contratos.' },
            { name: 'Punto de Venta (POS)', description: 'Ventas presenciales e integración con caja.' },
            { name: 'Sitio Web', description: 'Presencia web integrada al ERP.' },
            { name: 'eCommerce', description: 'Tienda online conectada a inventario y ventas.' },
          ],
        },
        {
          title: 'Finanzas',
          modules: [
            { name: 'Facturación', description: 'account.move, personalización de vistas y automatización de CFE.', hasExperience: true },
            { name: 'Contabilidad', description: 'Plan de cuentas, conciliación y reportes contables.' },
            { name: 'Gastos', description: 'Registro y aprobación de gastos internos.' },
            { name: 'Hojas de Cálculo', description: 'Reportes dinámicos integrados a datos de Odoo.' },
          ],
        },
        {
          title: 'Operaciones & Cadena de Suministro',
          modules: [
            { name: 'Inventario', description: 'Control de stock, ubicaciones y movimientos.' },
            { name: 'Compras', description: 'Órdenes de compra y gestión de proveedores.' },
            { name: 'Fabricación (MRP)', description: 'Órdenes de producción y listas de materiales.' },
            { name: 'Mantenimiento', description: 'Gestión de equipos y solicitudes de mantenimiento.' },
            { name: 'Calidad', description: 'Puntos de control y alertas de calidad.' },
            { name: 'Flota', description: 'Gestión de vehículos y costos asociados.' },
          ],
        },
        {
          title: 'Recursos Humanos',
          modules: [
            { name: 'Empleados', description: 'Legajos, organigrama y datos del personal.' },
            { name: 'Reclutamiento', description: 'Gestión de postulantes y procesos de selección.' },
            { name: 'Asistencias', description: 'Control de entrada/salida del personal.' },
            { name: 'Ausencias', description: 'Gestión de licencias y vacaciones.' },
            { name: 'Evaluaciones', description: 'Seguimiento de desempeño del personal.' },
            { name: 'Nómina', description: 'Cálculo y gestión de sueldos.' },
          ],
        },
        {
          title: 'Productividad & Gestión de Proyectos',
          modules: [
            { name: 'Proyectos', description: 'Planificación de tareas y seguimiento de equipos.' },
            { name: 'Partes de Horas', description: 'Registro de horas trabajadas por proyecto/tarea.' },
            { name: 'Documentos', description: 'Gestión documental centralizada.' },
            { name: 'Firma Electrónica', description: 'Firma y validación de documentos digitales.' },
            { name: 'Debates / Mensajería', description: 'Comunicación interna vinculada a registros.' },
          ],
        },
        {
          title: 'Marketing',
          modules: [
            { name: 'Email Marketing', description: 'Campañas de correo segmentadas.' },
            { name: 'SMS Marketing', description: 'Campañas de mensajes de texto.' },
            { name: 'Automatización de Marketing', description: 'Flujos automáticos según comportamiento del cliente.' },
            { name: 'Eventos', description: 'Organización y venta de entradas a eventos.' },
            { name: 'Encuestas', description: 'Creación y análisis de encuestas.' },
          ],
        },
        {
          title: 'Personalización & Plataforma',
          modules: [
            { name: 'Studio', description: 'Personalización de vistas y modelos sin/con código.', hasExperience: true },
            { name: 'Desarrollo de Módulos', description: 'Módulos a medida con vistas heredadas.', hasExperience: true },
            { name: 'Integraciones API', description: 'Conexión con sistemas externos vía API/SOAP.', hasExperience: true },
            { name: 'Automatizaciones', description: 'Reglas automáticas sobre eventos del sistema.', hasExperience: true },
            { name: 'Administración / Self-hosted', description: 'Despliegue y mantenimiento de instancias propias.', hasExperience: true },
          ],
        },
      ],
    },
    closing: {
      title: '¿Listo para Transformar sus Operaciones?',
      description:
        'Reserve una consulta gratuita para discutir cómo Odoo ERP puede consolidar sus herramientas, automatizar procesos manuales y brindarle visibilidad completa de su negocio.',
      cta: 'Comenzar',
      ctaHref: 'https://zerocode.la/contact/',
    },
  },
}
