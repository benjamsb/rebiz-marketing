// ── All editable content lives here. Update arrays; components stay untouched. ──

export const companyGoals = [
  {
    id: 1,
    tag: 'Goal 1',
    title: 'Accelerate Profitable Growth',
    metric: 'Rule of 40: mid-30s → 45–54',
    description:
      'Rebiz runs at ~30% margin with Rule of 40 in the mid-30s. The 24-month target is to reach 45–54 while sustaining that profitability floor.',
    whyItMatters:
      'Sustaining quality growth keeps Rebiz in a position of strength to invest, compete, and attract strategic partners without sacrificing business health.',
    accent: 'orange',
  },
  {
    id: 2,
    tag: 'Goal 2',
    title: 'Defend & Widen Category Leadership',
    metric: '#1 in 50% more verticals · 3× store count',
    description:
      'Rebiz is #1 today, but competitive pressure is rising and new tech entrants are closing the gap. The goal is faster growth and #1 share in more verticals and more stores.',
    whyItMatters:
      'First-mover advantages compound. Expanding category leadership before competitors consolidate creates durable defensibility.',
    accent: 'rose',
  },
  {
    id: 3,
    tag: 'Goal 3',
    title: 'Expand from Point Solution to Platform',
    metric: '3× ARR · 50× TAM potential',
    description:
      'Rebiz can 3× within its current market while building modular new products that expand TAM by 50×. Both motions run in parallel.',
    whyItMatters:
      'Platform repositioning unlocks enterprise deal sizes, NRR growth, and defensibility that point solutions cannot sustain at scale.',
    accent: 'orange',
  },
  {
    id: 4,
    tag: 'Goal 4',
    title: 'Preserve Best-in-Class Retention & Grow NRR',
    metric: '3× NRR · Match current GRR & NPS/CSAT',
    description:
      'Retention is already very high and customer satisfaction is strong. Long-term KPIs center on ARR, NRR, and locations serviced.',
    whyItMatters:
      'NRR above 120% turns the existing customer base into a compounding growth asset that reduces reliance on net-new acquisition alone.',
    accent: 'rose',
  },
  {
    id: 5,
    tag: 'Goal 5',
    title: 'Modernize the Go-to-Market Model',
    metric: 'AI-augmented GTM · full-funnel attribution',
    description:
      'Fuel ARR and NRR through clearer segmentation, stronger product marketing, better funnel ops, brand cohesion, and a bridge from awareness to free pilot.',
    whyItMatters:
      'A modern GTM engine converts the same market activity into materially higher pipeline, shorter cycles, and measurably better win rates.',
    accent: 'orange',
  },
];

export const marketingGoals = [
  {
    id: 1,
    title: 'Reposition Rebiz from Point Solution to Platform',
    description:
      "Ensure the total market understands Rebiz's expanded product story and new TAM through top-of-funnel brand awareness, refined positioning, revamped product content, and bottom-funnel enablement.",
    enablesGoals: [3, 2],  // company goal IDs
    tags: ['Brand', 'Positioning', 'Content'],
  },
  {
    id: 2,
    title: 'Lead Full-Funnel Strategies for Enterprise & Mid-Market',
    description:
      'Differentiate GTM for enterprise and mid-market segments with tailored messaging, channels, and campaigns. Unify the GTM engine for a seamless customer journey across each segment.',
    enablesGoals: [1, 3, 5],
    tags: ['Enterprise', 'Mid-Market', 'Demand Gen'],
  },
  {
    id: 3,
    title: 'Turn PLG into a Real Growth Lever',
    description:
      'Reduce friction across awareness → pilot → activation → proof → expansion. Build a pilot-to-revenue conversion program with streamlined onboarding, education, and expansion triggers.',
    enablesGoals: [3, 4, 5],
    tags: ['PLG', 'Mid-Market', 'Lifecycle'],
  },
  {
    id: 4,
    title: 'Uplevel the Team into a Modern, High-Leverage Function',
    description:
      'Build stronger product marketing, ABM, content, and overall firepower. Leverage AI to make all marketing initiatives more impactful and efficient without over-hiring.',
    enablesGoals: [5, 1],
    tags: ['Team', 'AI', 'Operations'],
  },
  {
    id: 5,
    title: 'Build a Predictable Pipeline Engine',
    description:
      "Improve marketing's contribution to ARR while making funnel performance measurable, repeatable, and segment-aware. Stand up solid funnels with sophisticated lead handling and ABM for top enterprise accounts.",
    enablesGoals: [1, 2, 5],
    tags: ['Pipeline', 'ABM', 'Attribution'],
  },
];

export const priorities = [
  {
    id: 1,
    rank: '1',
    title: 'Create a Viable Environment for Rebiz to Grow',
    rationale:
      "The foundation: if the brand doesn't clearly communicate its new platform story, every downstream motion underperforms. This is the prerequisite for everything else.",
    tactics: [
      'Refresh core narrative, messaging architecture, and visual consistency across web, product pages, social, decks, and sales enablement.',
      'Consolidate product storytelling under one umbrella platform narrative.',
      'Launch repositioning campaign anchored in business outcomes, not features.',
      'Clarify messaging by segment: mid-market vs. enterprise, mastery vs. ruler archetypes.',
      'Tighten website fundamentals, conversion paths, and AI-search / SEO visibility.',
      'Direct PR and AR initiatives for expanded inbound pipeline, organic search success, and brand trust.',
    ],
    impact: 'Category-level brand authority, inbound pipeline growth, improved conversion from core pages.',
    weight: 'Foundation',
  },
  {
    id: 2,
    rank: '2',
    title: 'Uplevel Team Structure, Leverage & AI',
    rationale:
      'A small team with great leverage beats a large team with poor coordination. Restructuring around core muscles and AI-first workflows is the force multiplier for every other priority.',
    tactics: [
      'Shift the team toward core muscles: product marketing, growth, content, marketing ops, and brand/creative leverage.',
      'Clarify ownership, success metrics, and quarterly priorities for each role.',
      'Implement AI agents and an AI-first operating model across all applicable marketing touchpoints.',
      'Keep human investment concentrated on strategy, messaging, major campaigns, GTM alignment, and customer insight.',
      'Evaluate in-house vs. agency work based on speed, specialization, and compounding internal capability.',
    ],
    impact: 'Higher output per headcount, faster time-to-market, better signal-to-noise in every program.',
    weight: 'Enabler',
  },
  {
    id: 3,
    rank: '3',
    title: 'Turn Customer Proof into a Top Growth Driver',
    rationale:
      'Rebiz has exceptional retention and real ROI stories. Customer proof is currently underutilized — it should become one of the top acquisition and retention tools in the GTM playbook.',
    tactics: [
      'Create a structured advocacy program spanning testimonials, case studies, speaker programs, references, and customer videos.',
      'Translate quarterly ROI analyses into segment-specific proof assets.',
      'Pilot "Retail Turnaround" style content to dramatize the value story.',
      'Equip sales and CS with story libraries organized by use case, segment, and objection.',
      'Lead expansion and renewal campaigns using peer proof, ROI benchmarks, and adoption content.',
    ],
    impact: '+15% win rate on deals where proof assets are used; +10% expansion/renewal conversion.',
    weight: 'Revenue',
  },
  {
    id: 4,
    rank: '4',
    title: 'Make PLG Work for Mid-Market',
    rationale:
      'Mid-market (50–100 store) buyers want to see value before they sign. A strong PLG motion with frictionless pilot access and quick time-to-value creates a conversion flywheel.',
    tactics: [
      'Clarify the PLG path: awareness → pilot → activation → proof → conversion.',
      'Tighten free-pilot onboarding, education, follow-up, and proof-of-value communications.',
      'Package product snippets, ROI snapshots, and customer outcomes into in-product and lifecycle content.',
      'Establish partner marketing motions to boost PLG pipeline.',
      'Partner with product and CS to identify minimum activation events that predict conversion and retention.',
      'Launch pilot-to-case-study workflow so wins become reusable demand assets.',
    ],
    impact: '+25% pilot activation rate; >50% mid-market pipeline from marketing-generated / influenced accounts.',
    weight: 'Pipeline',
  },
  {
    id: 5,
    rank: '5',
    title: 'Make ABM Work for Enterprise',
    rationale:
      'Enterprise deals require precision. A tight ABM motion focused on the top 50 accounts with coordinated sales-marketing outreach dramatically improves conversion and deal quality.',
    tactics: [
      'Prioritize top 50 enterprise accounts with sales based on fit, whitespace, readiness, and rep capacity.',
      'Build use-case-based plays by archetype, vertical, and buying center.',
      'Elevate field marketing and partner marketing motions to approach key accounts from multiple angles.',
      'Lead sales enablement for campaign follow-up in lockstep with coordinated outreach.',
      'Measure ABM by account engagement, meetings, pipeline creation, progression, and win rate.',
    ],
    impact: '>50% enterprise pipeline from ABM programs; +20% meeting-to-opportunity conversion.',
    weight: 'Pipeline',
  },
  {
    id: 6,
    rank: '6',
    title: 'Build the Growth Engine & Operating Discipline',
    rationale:
      'Without a predictable operating system, great campaigns die in the funnel. This priority ensures every motion is measurable, coordinated, and compounding.',
    tactics: [
      'Audit funnel performance from awareness to pilot to closed-won by segment, channel, and use case.',
      'Define marketing-sourced, marketing-influenced, and marketing-assisted pipeline standards.',
      'Lead regular revenue operating cadence across marketing, sales, CS, and product.',
      'Create a channel investment framework separating scalable core programs from experiments.',
      'Deliver dashboards covering pilot volume, activation, pilot-to-opportunity, opp-to-closed-won, CAC efficiency, and expansion contribution.',
    ],
    impact: 'Full-funnel attribution, repeatable pipeline forecasting, marketing-sourced pipeline parity with sales by year-end.',
    weight: 'Infrastructure',
  },
];

export const okrs = [
  {
    id: 1,
    label: 'OBJ 1',
    objective: 'Reposition Rebiz as a broader platform and strengthen category leadership',
    rationale:
      "If buyers don't understand the full platform story, every sales and marketing dollar is discounted. Repositioning is the prerequisite for expanding TAM and winning enterprise deals.",
    keyResults: [
      { timeframe: '90d', text: 'Launch updated messaging architecture, brand system, and website positioning.' },
      { timeframe: '6mo', text: 'Stand up revitalized website, content strategy, PR and AR plan focused on AI search, share of voice, and category authority.' },
      { timeframe: '12mo', text: 'Increase branded search, direct traffic, or equivalent brand demand indicators by 25%.' },
      { timeframe: '12mo', text: 'Increase opportunity conversion from core product pages by 20%.' },
      { timeframe: '12mo', text: 'Publish minimum 2 flagship platform-level campaigns and 4 product-story campaigns.' },
      { timeframe: '12mo', text: 'Improve inbound pipeline 25% from AEO, share of voice, PR, thought leadership, and customer stories.' },
    ],
    kpis: ['Branded search volume', 'Inbound MQL velocity', 'Share of voice (AI search)', 'Product page conversion rate'],
  },
  {
    id: 2,
    label: 'OBJ 2',
    objective: 'Transform the marketing team for maximum revenue impact and scalability',
    rationale:
      'A high-leverage team with clear ownership, AI-augmented workflows, and the right mix of in-house and agency support can outperform a team twice its size operating without discipline.',
    keyResults: [
      { timeframe: '90d', text: 'Finalize phased team structure, AI augmentation plan, tech stack audit, and any additional agency/contractor/FTE needs.' },
      { timeframe: '90d', text: 'Establish regimented internal procedures: strategic and tactical planning, operating reviews, and feedback loops.' },
      { timeframe: '6mo', text: 'Hire or upgrade critical gaps in product marketing, growth, and marketing ops.' },
      { timeframe: '6mo', text: 'Deploy AI-assisted workflows that accelerate deliverability for content, market intel, and core accountabilities by 50%.' },
      { timeframe: '12mo', text: 'Complete later phases of team expansion, AI augmentation, and performance monitoring.' },
    ],
    kpis: ['Content velocity (assets/week)', 'AI-augmented output ratio', 'Headcount vs. pipeline ratio', 'Team OKR completion rate'],
  },
  {
    id: 3,
    label: 'OBJ 3',
    objective: 'Turn customer advocacy and ROI proof into a key growth driver',
    rationale:
      'Rebiz customers achieve real, measurable ROI. That proof — properly packaged and deployed — is one of the highest-ROI demand and retention tools available.',
    keyResults: [
      { timeframe: '90d', text: 'Establish pipeline of current customers for advocacy content.' },
      { timeframe: '6mo', text: 'Operationalize a quarterly ROI proof program with benchmark narratives.' },
      { timeframe: '6mo', text: 'Publish 10 net-new high-quality case studies, testimonials, and/or videos.' },
      { timeframe: '12mo', text: 'Pilot store turnaround video series.' },
      { timeframe: '12mo', text: 'Increase win rate by 15% on deals where customer proof assets are used.' },
      { timeframe: '12mo', text: 'Increase renewal/expansion conversion by 10% for accounts touched by customer education/proof programs.' },
      { timeframe: '12mo', text: 'Build out Customer Advisory Board (CAB) for continuous advocacy, feedback, and referenceability.' },
    ],
    kpis: ['Case study production rate', 'Proof-asset deal influence rate', 'Expansion conversion on proof-touched accounts', 'CAB participation'],
  },
  {
    id: 4,
    label: 'OBJ 4',
    objective: 'Turn PLG into a repeatable acquisition and conversion lever for mid-market',
    rationale:
      'Mid-market buyers need to experience the product to commit. A well-designed PLG motion turns the free pilot into the highest-quality top-of-funnel motion Rebiz has.',
    keyResults: [
      { timeframe: '90d', text: 'Map a clear PLG customer journey for mid-market with project plan for low/no-touch activation, ROI proof, education, and expansion triggers.' },
      { timeframe: '6mo', text: 'Develop messaging and reporting cadence to showcase time-to-value and product ROI.' },
      { timeframe: '6mo', text: 'Identify strategic partners and map coordinated demand generation tactics.' },
      { timeframe: '12mo', text: 'Increase pilot activation rate by 25%.' },
      { timeframe: '12mo', text: 'Generate at least 12 customer-proof assets directly from pilot success.' },
      { timeframe: '12mo', text: '>50% mid-market pipeline comes from marketing-generated or marketing-influenced accounts.' },
    ],
    kpis: ['Pilot signup → activation rate', 'Pilot → opportunity conversion', 'Time to first value (TTFV)', 'Mid-market marketing-sourced pipeline %'],
  },
  {
    id: 5,
    label: 'OBJ 5',
    objective: 'Build a focused enterprise ABM motion that creates qualified pipeline',
    rationale:
      'Enterprise accounts require multi-threaded engagement, precision timing, and coordinated sales-marketing plays. ABM done right dramatically improves deal quality and velocity.',
    keyResults: [
      { timeframe: '90d', text: 'Define top 50 target enterprise accounts with sales and segment-specific plays.' },
      { timeframe: '6mo', text: 'Document rep-capacity and follow-up rules so no ABM program launches without seller readiness.' },
      { timeframe: '6mo', text: 'Identify strategic partners and map coordinated campaigns around live and virtual events.' },
      { timeframe: '12mo', text: 'Achieve meaningful engagement (≥50 engagement score) in at least 60% of target accounts.' },
      { timeframe: '12mo', text: '>50% enterprise pipeline comes from ABM programs.' },
      { timeframe: '12mo', text: 'Improve meeting-to-opportunity conversion for target accounts by 20%.' },
    ],
    kpis: ['Account engagement score', 'ABM-sourced pipeline %', 'Meeting-to-opportunity rate', 'ABM win rate vs. non-ABM'],
  },
  {
    id: 6,
    label: 'OBJ 6',
    objective: 'Build a predictable marketing engine with direct revenue accountability',
    rationale:
      'Marketing without attribution is a cost center. With full-funnel visibility and a clear attribution model, marketing becomes a forecasting input and a strategic investment with measurable ROI.',
    keyResults: [
      { timeframe: '90d', text: 'Deliver attribution model for visibility on current and past deals.' },
      { timeframe: '90d', text: 'Map out a modernized multi-touch attribution model.' },
      { timeframe: '6mo', text: 'Establish dashboarded funnel visibility across all major stages, segments, and channels.' },
      { timeframe: '12mo', text: 'Deliver multi-touch attribution model with forecasted performance by channel.' },
      { timeframe: '12mo', text: 'Increase pilot signup conversion from high-intent traffic by 30%.' },
      { timeframe: '12mo', text: 'Improve pilot-to-opportunity conversion by 25%.' },
      { timeframe: '12mo', text: 'Improve opportunity-to-win conversion on marketing-influenced deals by 15%.' },
      { timeframe: '12mo', text: 'Increase marketing-sourced pipeline to equal or exceed sales-sourced pipeline in at least one core segment by year-end.' },
    ],
    kpis: ['Marketing-sourced pipeline %', 'Pilot-to-opp conversion', 'Opp-to-win on mktg-influenced', 'CAC by channel', 'Pipeline forecast accuracy'],
  },
];

export const scorecard = [
  { label: 'Marketing-Influenced ARR', description: 'Revenue attributable to any marketing touchpoint in the buying journey' },
  { label: 'Marketing-Sourced Pipeline', description: 'Opportunities where marketing originated the first qualified contact' },
  { label: 'Marketing-Assisted Win Rate', description: 'Win rate lift on deals where marketing programs were involved' },
  { label: 'Marketing-Assisted NRR', description: 'Net Revenue Retention supported by adoption, advocacy, and expansion content' },
  { label: 'Pilot Conversion Funnel', description: 'Signup → Activation → Opportunity → Closed-Won at each stage' },
  { label: 'Brand & Category Strength', description: 'Inbound pipeline, share of voice, branded search, and AI search presence' },
];

export const experiences = [
  {
    company: 'Fairmarkit',
    role: 'VP / Head of Marketing',
    headline: 'Shattered ARR and NRR goals through a company-wide GTM transformation.',
    description:
      'Fairmarkit serves enterprise retailers — a direct ICP analog to Rebiz. Led the brand and GTM through a strategic transition from point solution to end-to-end procurement platform, unlocking a dramatically larger TAM and driving pipeline and win-rate improvements to unprecedented levels.',
    achievements: [
      { label: 'TAM Expansion', text: "Navigated company's transition from point solution to end-to-end platform; elevated brand and positioning for expanded engagement with a significantly larger TAM." },
      { label: 'Pipeline & Win Rates', text: 'Shot up inbound pipeline, win rates, and ACV to record levels while reducing time-to-close through product marketing, ABM, and in-depth customer advocacy programs.' },
      { label: 'Category Authority', text: 'Earned #1 share of voice and AI search positioning, unseating competitors with significantly larger teams and budgets.' },
      { label: 'AI Operating Model', text: 'Transformed the marketing function with AI-first workflows, amplifying team impact and efficiency without proportional headcount growth.' },
    ],
    relevance: "Fairmarkit serves enterprise retail buyers — the same archetype as Rebiz's target enterprise ICP. The GTM playbook (repositioning + ABM + PLG + proof) maps directly.",
    accentColor: 'orange',
  },
  {
    company: 'AKASA',
    role: 'Head of Marketing',
    headline: 'Repositioned a narrow automation solution into a healthcare AI market leader.',
    description:
      'Led AKASA from a specialist point solution into a recognized leader in the broader healthcare AI automation market, enabling the company to pursue a significantly larger enterprise TAM through a tightly integrated GTM architecture.',
    achievements: [
      { label: 'Enterprise GTM Architecture', text: 'Built tightly integrated product marketing, ABM, and lifecycle programs — dramatically improving pipeline quality, conversion rates, and sales velocity across enterprise accounts.' },
      { label: 'Revenue Accountability', text: 'Established a revenue-accountable marketing infrastructure linking marketing activity directly to pipeline creation, opportunity progression, net-new ARR, and NRR.' },
      { label: 'Category Authority', text: 'Elevated AKASA to the center of its category through high-impact thought leadership and technical storytelling that resonated with C-suite buyers.' },
      { label: 'Operational Scale', text: 'Built the marketing operating model — team, tech stack, attribution, and agency partnerships — to sustain growth efficiently at enterprise scale.' },
    ],
    relevance: 'The AKASA playbook — enterprise repositioning, revenue-accountable marketing, thought leadership, and full-funnel attribution — is precisely what Rebiz needs for its next phase of enterprise growth.',
    accentColor: 'rose',
  },
  {
    company: 'ConverseNow',
    role: 'Head of Marketing',
    headline: 'Helped drive 12× ARR growth by repositioning a services company into a scalable AI SaaS platform.',
    description:
      'ConverseNow serves enterprise and SMB restaurant/retail owners — an ICP that overlaps significantly with Rebiz. Led the brand, GTM, and growth through a complete transformation from services-led organization to AI SaaS platform, unlocking a dramatically larger TAM.',
    achievements: [
      { label: 'Product Marketing Foundation', text: 'Built the product marketing foundation that translated complex AI technology into clear ROI-driven narratives for both SMB and enterprise buyers — enabling rapid pilot-to-close conversions.' },
      { label: 'Explosive Pipeline Growth', text: 'Drove explosive growth in pipeline, win rates, and ACV by integrating product marketing, ABM, and high-impact content programs for enterprise and mid-market audiences.' },
      { label: 'PLG & Partnerships', text: 'Established partner marketing and customer advocacy programs that catapulted inbound pipeline, conversion, and retention at scale.' },
      { label: 'SMB + Enterprise Duality', text: 'Simultaneously managed distinct GTM motions for SMB store owners and large enterprise chains — the same dual-motion challenge Rebiz faces.' },
    ],
    relevance: "12\u00d7 ARR growth serving multi-unit retail/restaurant operators at both SMB and enterprise levels. The experience with store-level ROI narratives, pilot-to-revenue conversion, and operational visibility messaging is a direct match for Rebiz's ICP.",
    accentColor: 'orange',
  },
];

export const aiAgents = [
  {
    layer: 'Strategy',
    sublabel: 'Human-Led',
    description: 'Human judgment remains at the center of strategy, positioning, and GTM decisions.',
    functions: [
      'Competitive & market positioning',
      'Messaging architecture',
      'ICP definition & segmentation',
      'GTM alignment with sales & product',
      'Customer insight synthesis',
    ],
    icon: 'brain',
  },
  {
    layer: 'Execution',
    sublabel: 'AI-Augmented',
    description: 'AI agents accelerate production, personalization, and campaign execution by 10× without sacrificing quality.',
    functions: [
      'Content briefs, drafts & variations',
      'SEO/AEO optimization & AI search signals',
      'ABM personalization at scale',
      'Email sequence generation',
      'PMM frameworks & battle card drafts',
    ],
    icon: 'zap',
  },
  {
    layer: 'Infrastructure',
    sublabel: 'Automated',
    description: 'Systematic workflows that run continuously, freeing human time for higher-value decisions.',
    functions: [
      'Competitive intelligence monitoring',
      'Attribution modeling & reporting',
      'Lead scoring & routing',
      'Performance dashboard generation',
      'Win/loss pattern analysis',
    ],
    icon: 'cpu',
  },
];

export const agentTypes = [
  {
    name: 'Research Agent',
    description: 'Continuous market, competitive, and customer intelligence. Surfaces signals before they become obvious.',
    examples: ['ICP persona synthesis from customer calls', 'Competitor messaging drift alerts', 'AI search share of voice tracking'],
  },
  {
    name: 'Content Agent',
    description: 'Transforms briefs and product data into publishable-quality drafts at scale, with human editorial review.',
    examples: ['Blog and thought leadership drafts', 'Product page copy variations', 'Social and email sequence generation'],
  },
  {
    name: 'PMM Agent',
    description: 'Supports product marketing with frameworks, battle cards, and positioning analysis on demand.',
    examples: ['Competitive battle card generation', 'Messaging matrix updates', 'Analyst briefing preparation'],
  },
  {
    name: 'Campaign Agent',
    description: 'Orchestrates campaign personalization and sequencing across channels with precision targeting.',
    examples: ['ABM email personalization at account level', 'Ad copy A/B testing', 'Campaign performance optimization'],
  },
  {
    name: 'Analytics Agent',
    description: 'Monitors funnel performance, flags anomalies, and generates weekly performance narratives automatically.',
    examples: ['Funnel health dashboards', 'Attribution model maintenance', 'Pipeline forecast by channel'],
  },
  {
    name: 'Competitive Intel Agent',
    description: 'Tracks competitor moves, pricing signals, and share of voice in real time without manual monitoring effort.',
    examples: ['Competitor launch alerts', 'Review site sentiment analysis', 'Analyst mention tracking'],
  },
];
