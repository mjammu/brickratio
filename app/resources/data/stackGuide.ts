export type CompatibilityLevel = 'works-well' | 'with-caveats' | 'needs-custom'

export type StackEntry = {
  tool: string
  category: string
  compatibility: CompatibilityLevel
  note: string
}

export const compatibilityLabel: Record<CompatibilityLevel, string> = {
  'works-well': 'Works well',
  'with-caveats': 'Works with caveats',
  'needs-custom': 'Needs custom work',
}

export const stackGuide: StackEntry[] = [
  // CRM
  {
    tool: 'HubSpot',
    category: 'CRM',
    compatibility: 'works-well',
    note: 'Excellent API and native integrations. AI agents can read/write contacts, deals, and notes. Great for automated prospecting and follow-up.',
  },
  {
    tool: 'Salesforce',
    category: 'CRM',
    compatibility: 'works-well',
    note: 'Robust API. Most automation platforms connect natively. Custom SOQL queries give agents deep access to pipeline data.',
  },
  {
    tool: 'Pipedrive',
    category: 'CRM',
    compatibility: 'works-well',
    note: 'Clean REST API. Easy to connect for lead enrichment and deal status updates. Good Zapier/Make support for lighter automations.',
  },
  {
    tool: 'Zoho CRM',
    category: 'CRM',
    compatibility: 'with-caveats',
    note: 'API is available but less documented than HubSpot or Salesforce. Automation is possible with more setup effort.',
  },

  // Docs & Knowledge
  {
    tool: 'Notion',
    category: 'Docs & Knowledge',
    compatibility: 'works-well',
    note: 'Strong API with read/write support for pages and databases. Ideal for Company Brain setups and knowledge retrieval.',
  },
  {
    tool: 'Google Drive',
    category: 'Docs & Knowledge',
    compatibility: 'works-well',
    note: 'Deeply integrated with AI tools. Docs, Sheets, and Slides can all be read and written to programmatically.',
  },
  {
    tool: 'Confluence',
    category: 'Docs & Knowledge',
    compatibility: 'with-caveats',
    note: 'API exists but it is more complex. Requires more setup to extract clean text from pages. Works well once connected.',
  },
  {
    tool: 'SharePoint',
    category: 'Docs & Knowledge',
    compatibility: 'with-caveats',
    note: 'Microsoft Graph API enables access but setup is more involved. Requires Azure app registration and careful permission scoping.',
  },

  // Communication
  {
    tool: 'Slack',
    category: 'Communication',
    compatibility: 'works-well',
    note: 'Excellent API. Agents can post summaries, respond to slash commands, and read channel history for context.',
  },
  {
    tool: 'Gmail',
    category: 'Communication',
    compatibility: 'works-well',
    note: 'Google\'s APIs are well-supported. Agents can read, draft, send, and label emails. Strong ecosystem.',
  },
  {
    tool: 'Microsoft Teams',
    category: 'Communication',
    compatibility: 'with-caveats',
    note: 'Microsoft Graph API works but setup is more complex than Slack. Requires Azure AD configuration.',
  },

  // Spreadsheets & Databases
  {
    tool: 'Google Sheets',
    category: 'Spreadsheets',
    compatibility: 'works-well',
    note: 'One of the easiest automation targets. Agents read, write, and append rows with minimal setup. Ideal for dashboards and logs.',
  },
  {
    tool: 'Airtable',
    category: 'Spreadsheets',
    compatibility: 'works-well',
    note: 'Clean REST API and first-class automation support. Excellent for structured data agents need to read or update frequently.',
  },
  {
    tool: 'Excel / OneDrive',
    category: 'Spreadsheets',
    compatibility: 'with-caveats',
    note: 'Microsoft Graph API supports Excel files in OneDrive. Works but requires more auth setup than Google Sheets.',
  },

  // Project Management
  {
    tool: 'Asana',
    category: 'Project Management',
    compatibility: 'works-well',
    note: 'Good REST API. Agents can create tasks, update statuses, and post comments. Works well for standup summaries and handoffs.',
  },
  {
    tool: 'Linear',
    category: 'Project Management',
    compatibility: 'works-well',
    note: 'Well-documented GraphQL API. Great for engineering teams that want issue creation and status updates automated.',
  },
  {
    tool: 'Jira',
    category: 'Project Management',
    compatibility: 'with-caveats',
    note: 'API is comprehensive but verbose. Atlassian\'s auth can be fiddly. Automation is very possible but takes more setup.',
  },
  {
    tool: 'Monday.com',
    category: 'Project Management',
    compatibility: 'with-caveats',
    note: 'GraphQL API. Automation is possible but data model is more complex than Asana or Linear. Budget extra setup time.',
  },

  // E-commerce & Payments
  {
    tool: 'Shopify',
    category: 'E-commerce',
    compatibility: 'works-well',
    note: 'Excellent API ecosystem. Agents can monitor orders, update inventory, generate reports, and trigger customer comms.',
  },
  {
    tool: 'Stripe',
    category: 'Payments',
    compatibility: 'works-well',
    note: 'Best-in-class API. Webhooks make it easy to trigger agents on payment events like successful charges or failed renewals.',
  },

  // Automation Platforms
  {
    tool: 'Zapier',
    category: 'Automation',
    compatibility: 'works-well',
    note: 'Good for simple trigger-action flows. Becomes expensive at volume and hit limits with complex logic. Use for lightweight glue.',
  },
  {
    tool: 'Make (Integromat)',
    category: 'Automation',
    compatibility: 'works-well',
    note: 'More powerful than Zapier for multi-step workflows. Better value at volume. Still not a replacement for custom AI agents at scale.',
  },
  {
    tool: 'n8n',
    category: 'Automation',
    compatibility: 'works-well',
    note: 'Open-source and self-hostable. Excellent for technical teams. Strong LLM node support makes it a good backbone for AI workflows.',
  },

  // Legacy / Custom Systems
  {
    tool: 'Custom SQL Database',
    category: 'Legacy / Custom',
    compatibility: 'needs-custom',
    note: 'Direct DB access requires a custom connector. Totally feasible — just takes planning around permissions and read/write scope.',
  },
  {
    tool: 'Legacy ERP (SAP, Oracle)',
    category: 'Legacy / Custom',
    compatibility: 'needs-custom',
    note: 'These systems often lack modern APIs. Integration requires middleware or custom ETL. Possible but requires a scoped discovery.',
  },
  {
    tool: 'Custom Internal Tools',
    category: 'Legacy / Custom',
    compatibility: 'needs-custom',
    note: 'If it has an API or exports data, we can connect to it. If not, we scope a data extraction layer first.',
  },
]
