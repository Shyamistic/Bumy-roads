export const sourceLabels = {
  nexus: 'Diagnostic evaluation · Verified public source + provided résumé',
  verified: 'Verified public source',
  resume: 'Résumé-backed / public-safe summary',
  proposal: 'Proposed, not run',
  illustrative: 'Illustrative signal fragments · not live logs, telemetry, or customer data',
}

export const publicLinks = {
  github: {
    href: 'https://github.com/Shyamistic',
    label: 'Shyamistic on GitHub',
  },
  devpost: {
    href: 'https://devpost.com/Shyamistic',
    label: 'Shyamistic on Devpost',
  },
  nexusCode: {
    href: 'https://github.com/Shyamistic/Nexus-prime',
    label: 'Nexus Prime code on GitHub',
  },
  nexusLive: {
    href: 'https://white-river-06eae7700.2.azurestaticapps.net/',
    label: 'Live link listed by project repository',
    note: 'Verify availability immediately before publishing.',
  },
  astraCode: {
    href: 'https://github.com/Shyamistic/A.S.T.R.A',
    label: 'A.S.T.R.A. code on GitHub',
  },
  vayuCode: {
    href: 'https://github.com/Shyamistic/vayu',
    label: 'Vayu code on GitHub',
  },
  upstreamStarter: {
    href: 'https://github.com/ITomPoland/portfolio-itom',
    label: 'MIT-licensed ITomPoland starter',
  },
}

export const publicContactLinks = [publicLinks.github, publicLinks.devpost]

export const heroContent = {
  opening: 'I build things that have to be right after the demo.',
  eyebrow: 'The Signal Run',
  introduction:
    'An evidence-led portfolio trail by Shyam Sharma. It follows the decisions, documented mistakes, and public-safe boundaries behind the work.',
  no3dTitle: 'A visible no-3D fallback, by design',
  no3dCopy:
    'This ordinary HTML route is the experience, not a hidden alternative. Read it by scrolling, choose a stop, or use Tab and Enter. It uses no WebGL, autoplay, microphone request, or analytics.',
}

export const routeContent = {
  title: 'Follow the signal',
  introduction:
    'The route is legible as a normal scroll: five compact stops, each with a signal, a decision or documented mistake, what changed, and its evidence boundary.',
  guidance:
    'Scroll through the trail, choose any stop below with a click, or press Tab and Enter on a route link. These are ordinary hash links, so browser back and forward work too.',
}

export const stopSectionLabels = {
  signal: 'Signal',
  change: 'What changed',
  source: 'Source / proposal',
}

export const trailStops = [
  {
    id: 'nexus-prime',
    number: '01',
    route: 'Noise',
    title: 'Nexus Prime',
    status: sourceLabels.nexus,
    statusTone: 'evaluation',
    summary: 'A multi-source incident-response system where a quick diagnosis still needs an independent check.',
    signal:
      'When alerts arrive from more than one source, the tempting move is to turn noise into a confident answer as fast as possible.',
    turningPointLabel: 'Decision',
    turningPoint:
      'Treat speed as a diagnostic aid, not permission to skip a safety check. A fast answer should not be its own final approval.',
    change:
      'The documented evaluation separates a safety validator from the diagnostic path. That keeps the result framed as diagnosis evidence rather than an incident-resolution claim.',
    source:
      'A documented 150-incident diagnostic evaluation reports 90% top-1 diagnostic accuracy, hallucinations 8.0% → 1.2% after a safety validator, and median diagnosis 48.3 minutes → 6.1 seconds. These are diagnosis and evaluation figures, not incident resolution, downtime, uptime, or customer results.',
    illustrativeAlerts: [
      'queue drift · source A',
      'dependency lag · source B',
      'handoff waiting · source C',
    ],
    illustrativeLabel: sourceLabels.illustrative,
    links: [publicLinks.nexusCode, publicLinks.nexusLive],
  },
  {
    id: 'astra',
    number: '02',
    route: 'Gate',
    title: 'A.S.T.R.A.',
    status: sourceLabels.verified,
    statusTone: 'verified',
    summary: 'A defensive, authorized, sandbox-only assurance concept built around independent validation.',
    signal:
      'A repair proposal can sound convincing before anyone has established that it is safe enough to consider.',
    turningPointLabel: 'Decision',
    turningPoint:
      'Keep generation and validation separate. An AI cannot approve its own risky action.',
    change:
      'The concept keeps proposals inside an authorized, defensive sandbox and places independent checking before any production consideration.',
    source:
      'The public project describes a defensive repair and assurance concept. Validation is separated from generation and remains out of production.',
    links: [publicLinks.astraCode],
  },
  {
    id: 'vayu',
    number: '03',
    route: 'Weather',
    title: 'Vayu',
    status: sourceLabels.verified,
    statusTone: 'verified',
    summary: 'A climate forecasting project where a plausible response exposed a stale-model failure.',
    signal:
      'A forecast can arrive in a familiar shape and still be wrong enough to mislead the person reading it.',
    turningPointLabel: 'Documented mistake',
    turningPoint:
      'A stale checkpoint returned HTTP 200 with plausible baseline-like output. A successful response was not proof that the model was current.',
    change:
      'Make the baseline floor and model freshness visible before treating a plausible output as a validated one. The lesson is: plausible output is not validated output.',
    source:
      'The public project makes a tuned baseline floor visible and reports that rainfall surpassed that floor in three of four regions. Its public repository says cloud hosting is not live, so this trail links to code only.',
    baselineChecks: [
      {
        label: 'Baseline floor',
        copy: 'The tuned comparison floor stays visible. Rainfall surpassed it in three of four regions, not every region.',
      },
      {
        label: 'Plausible baseline-like stale output',
        copy: 'The stale checkpoint produced a plausible HTTP 200 response. That documented failure is a validation warning, not a live result.',
      },
    ],
    links: [publicLinks.vayuCode],
  },
  {
    id: 'vri-wordwatch',
    number: '04',
    route: 'Keep',
    title: 'VRI + Wordwatch',
    status: sourceLabels.resume,
    statusTone: 'resume',
    summary: 'Public-safe summaries of durable inventory and API-to-UI work, without confidential artefacts.',
    signal:
      'A durable system has to earn trust in the small moments: uncertain retrieval, a handoff between layers, and the work that stays useful after launch.',
    turningPointLabel: 'Decision',
    turningPoint:
      'Make uncertainty explicit in the inventory search and carry the same care through API-to-UI work instead of treating delivery as a one-time handoff.',
    change:
      'VRI used a confidence-threshold semantic-search pipeline in a TypeScript, React, and Supabase book-inventory system stated to serve 100+ meditation centres worldwide. For Wordwatch, Shyam reports 90+ pull requests and 150+ commits across four repositories in under five months while shipping API-to-UI work for a UK compliance SaaS.',
    source:
      'These are résumé-backed, public-safe summaries. This stop intentionally excludes internal screens, records, member data, proprietary product detail, client material, source links, and other confidential artefacts.',
    links: [],
  },
  {
    id: 'one-breath-one-message',
    number: '05',
    route: 'Carry',
    title: 'One Breath, One Message',
    status: sourceLabels.proposal,
    statusTone: 'proposal',
    summary: 'A consent-first, 14-day Bangalore growth test proposed to learn whether a one-breath workflow becomes a repeat habit.',
    signal:
      'A polished voice workflow is only an idea until a person chooses to return to it without being prompted.',
    turningPointLabel: 'Proposed decision',
    turningPoint:
      'Test a narrow repeat habit before telling a larger growth story, and let participant consent set the boundary for every observation.',
    change:
      'The next step is a small, segmented, moderated 14-day test rather than a claim that a campaign, interview program, or analytics result already exists.',
    source:
      'This is an authored proposal, not completed research or a campaign result. It claims no conversion rate, audience interview, participant voice, analytics, or fieldwork.',
    links: [],
  },
]

export const growthExperiment = {
  status: sourceLabels.proposal,
  title: 'A 14-day Bangalore test',
  introduction:
    'One Breath, One Message is a proposed, consent-first test. It has not been run and has no results to report.',
  audience: 'Bangalore students, early-career operators, and developers.',
  hypothesis:
    'If a first voice workflow can be completed in one breath and connect to a real job to be done, participants may return to use it again without prompting.',
  methodology:
    'Recruit only people who affirmatively opt in. Use segmented examples, moderated observation, and redacted synthesis. Do not publish a participant voice, image, quote, or identifiable detail without affirmative consent.',
  northStar:
    'Repeat activation: a participant completes a first one-breath workflow and independently returns for a second within seven days.',
  killCondition:
    'Stop or redesign if repeat activation is below 20% by day 10, or if no consistent job to be done emerges.',
  steps: [
    {
      phase: 'Days 1–2 · consent-first recruitment',
      copy: 'Invite only opt-in Bangalore students, early-career operators, and developers. Explain the purpose, withdrawal path, and that participation is not a public endorsement.',
    },
    {
      phase: 'Days 3–5 · segmented examples',
      copy: 'Prepare small, consent-cleared one-breath workflow examples for each audience segment instead of assuming one use case fits everyone.',
    },
    {
      phase: 'Days 6–9 · moderated observation',
      copy: 'Observe first-use friction with permission, ask what job the workflow actually served, and keep any notes non-identifying.',
    },
    {
      phase: 'Day 10 · repeat-activation check',
      copy: 'Check the proposed north star and kill condition before extending the test. Do not turn a partial signal into a success claim.',
    },
    {
      phase: 'Days 11–14 · redacted synthesis',
      copy: 'Synthesize recurring jobs to be done and next decisions without publishing voice, screenshots, quotes, or identifiable material.',
    },
  ],
}

export const fieldKit = {
  title: 'My $3,000 One-Breath Field Kit',
  answer:
    'If I received the $3,000 grant, I would use it to learn at human scale before mistaking a polished idea for a habit. I would compensate participants fairly, remove access barriers, and keep consent and redaction ahead of any public learning.',
  total: '$3,000',
  budget: [
    { item: 'Participant honoraria', amount: '$1,200' },
    { item: 'Local travel and accessibility', amount: '$450' },
    { item: 'Consent, transcription, and translation', amount: '$500' },
    { item: 'Prototype materials and testing', amount: '$450' },
    { item: 'Accessibility and contingency', amount: '$250' },
    { item: 'Public learning summary', amount: '$150' },
  ],
}

export const publicationChecklist = [
  'Collect affirmative consent before recording, observing, or publishing any participant voice, image, quote, screen, or identifiable detail.',
  'Keep transcripts, redaction, and accessibility review ahead of any public learning summary.',
  'Keep GitHub and Devpost as the only public contact methods unless Shyam explicitly opts in to another channel. No phone number is published here.',
  'Treat the experiment and field kit as proposed until they are actually run and reviewed. Do not infer analytics or growth results from this plan.',
]

export const publishingChecklist = [
  'Write and approve the reflections in Shyam’s own words. The interface cannot supply personal testimony.',
  'Confirm that every photo, screenshot, voice, quote, and identifiable detail is consent-cleared or redacted for public release.',
  'Add only authentic Shyam recordings, then verify captions and transcripts against the final media.',
  'Choose public contact methods explicitly. GitHub and Devpost are listed; no phone number is published by default.',
  'Review every source, link, claim status, and availability note immediately before release.',
  'Manually publish through Emergent, create the explanatory video, and complete the challenge submission using Shyam’s own account and judgment.',
]

export const footerContent = {
  contactTitle: 'Stay with the public trail',
  contactCopy: 'GitHub and Devpost are the only public contact methods in this build.',
  attribution:
    'Built from an MIT-licensed starter. The Signal Run uses original CSS and inline SVG composition, not the starter’s personal visual assets or copy.',
}
