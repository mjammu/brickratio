export type TimeCostScenario = {
  task: string
  hoursPerWeek: number
  annualHours: number
  annualCost: string
  category: string
  assumption: string
}

export const timeCostScenarios: TimeCostScenario[] = [
  {
    task: 'Manual data entry into CRM',
    category: 'Sales',
    hoursPerWeek: 5,
    annualHours: 260,
    annualCost: '$7,800',
    assumption: 'One sales rep @ $30/hr spending ~1hr/day entering contacts, notes, and deal updates.',
  },
  {
    task: 'Weekly reporting and data pulls',
    category: 'Operations',
    hoursPerWeek: 4,
    annualHours: 208,
    annualCost: '$10,400',
    assumption: 'One ops or finance person @ $50/hr pulling numbers from multiple sources to build weekly reports.',
  },
  {
    task: 'Scheduling and calendar management',
    category: 'Admin',
    hoursPerWeek: 3,
    annualHours: 156,
    annualCost: '$4,680',
    assumption: 'Executive or admin @ $30/hr coordinating meetings, sending invites, and handling reschedules.',
  },
  {
    task: 'Receipt and invoice processing',
    category: 'Finance',
    hoursPerWeek: 6,
    annualHours: 312,
    annualCost: '$9,360',
    assumption: 'Bookkeeper or admin @ $30/hr manually entering receipts, categorizing expenses, and reconciling.',
  },
  {
    task: 'Prospecting and lead research',
    category: 'Sales',
    hoursPerWeek: 8,
    annualHours: 416,
    annualCost: '$20,800',
    assumption: 'One SDR @ $50/hr (fully loaded) manually researching and qualifying prospects from LinkedIn and databases.',
  },
  {
    task: 'Writing and formatting job descriptions',
    category: 'HR',
    hoursPerWeek: 2,
    annualHours: 104,
    annualCost: '$7,800',
    assumption: 'HR or hiring manager @ $75/hr spending ~2hrs per active role per week writing and iterating JDs.',
  },
  {
    task: 'Customer support ticket triage',
    category: 'Support',
    hoursPerWeek: 10,
    annualHours: 520,
    annualCost: '$15,600',
    assumption: 'Support team member @ $30/hr reading, routing, and drafting initial responses to inbound tickets.',
  },
  {
    task: 'Social media content creation',
    category: 'Marketing',
    hoursPerWeek: 5,
    annualHours: 260,
    annualCost: '$19,500',
    assumption: 'Marketing person or contractor @ $75/hr drafting, editing, and scheduling posts across channels.',
  },
  {
    task: 'Onboarding new employees manually',
    category: 'HR',
    hoursPerWeek: 4,
    annualHours: 208,
    annualCost: '$15,600',
    assumption: 'HR or ops manager @ $75/hr creating access, sending materials, and walking new hires through setup.',
  },
  {
    task: 'Manually summarizing sales calls',
    category: 'Sales',
    hoursPerWeek: 3,
    annualHours: 156,
    annualCost: '$7,800',
    assumption: 'Sales manager @ $50/hr reviewing recordings and manually writing up notes for 3–5 calls/week.',
  },
  {
    task: 'Pulling and formatting client reports',
    category: 'Account Management',
    hoursPerWeek: 5,
    annualHours: 260,
    annualCost: '$19,500',
    assumption: 'Account manager @ $75/hr pulling data, building decks, and formatting monthly/quarterly reports per client.',
  },
  {
    task: 'Internal knowledge lookup and answering repeat questions',
    category: 'Operations',
    hoursPerWeek: 6,
    annualHours: 312,
    annualCost: '$15,600',
    assumption: 'Multiple team members @ blended $50/hr spending time asking and answering the same internal questions.',
  },
]
