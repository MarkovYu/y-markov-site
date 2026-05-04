const cases = [
  {
    id: "hse-app-lms",
    title: "Shaping the HSE University App Around Real Student LMS Workflows",
    short:
      "Led a student UX research team to identify which Learning Management System (LMS) functions should move into the HSE University mobile app and which additions would actually reduce friction in day-to-day study life.",
    year: "2020",
    category: "UX Research",
    context: "Education UX / student experience",
    role: "Research lead supervising 3 student researchers and coordinating with the HSE University UX team",
    methods: "Competitive review, semi-structured interviews, synthesis matrix, feature prioritization, scenario mapping",
    cardTags: ["interviews", "feature prioritization"],
    sections: [
      {
        label: "Situation",
        body:
          "The HSE University mobile app was being considered for a major expansion based on LMS functionality. The open question was not simply which features could be added, but which student workflows were frequent, painful, and worth moving into the app.",
      },
      {
        label: "Task",
        body:
          "Lead a research effort that could help the university decide which LMS services students actually needed on mobile, how those needs differed across scenarios, and which opportunities were high-value versus low-priority.",
      },
      {
        label: "Action",
        items: [
          "Supervised 3 student researchers and coordinated the work with the university's UX department.",
          "Started with a review of existing HSE App flows, the proposed LMS-based expansion, and examples from university apps in other countries.",
          "Built the interview guide around real student workflows: schedules, deadlines, grades, course materials, communication, campus navigation, library access, and administrative requests.",
          "Organized and synthesized 20+ interviews with students from different programs, then consolidated feature-level feedback into a comparison matrix.",
          "Mapped the research back to the product's `as is` and `to be` structure so recommendations could directly inform roadmap decisions.",
        ],
      },
      {
        label: "Results",
        items: [
          "Confirmed that students relied heavily on the app for schedules and classroom search, and often checked not only their own schedule but also those of friends and instructors.",
          "Identified strong demand for mobile access to gradebook, ranking, course pages, study-program documents, free classrooms, and faster contact with the study office for requests such as certificates and passes.",
          "Found that some proposed ideas were much less valuable than expected, especially chat/forum features, portal links, and an embedded corporate email client.",
          "Surfaced important nuances instead of generic feature requests: maps mattered most for first-year onboarding, events needed filtering rather than more notifications, and deadline tools needed auto-updating rather than just a prettier UI.",
          "Produced a clearer hierarchy of what should be added first to reduce study friction versus what could remain secondary or optional.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Prioritize LMS-linked study essentials on mobile: gradebook, course information, announcements, and easier access to academic administration workflows.",
          "Keep expanding around high-frequency student moments rather than low-usage ideas such as generic forums or duplicated portal access.",
          "Treat notifications as a personalization problem: schedule changes and deadline updates matter, while broad event pushes should stay optional.",
          "Use the app to reduce small but repeated study frictions, for example better deadline syncing, faster free-classroom search, and clearer access to course documentation from the schedule.",
        ],
      },
    ],
    tags: ["ux", "education UX", "student experience"],
  },
  {
    id: "driver-attention",
    title: "How Secondary Task Shapes Driver Attention and Workload: A UX Study of In-Car Distractions",
    short:
      "A driving UX study of how self-paced and system-paced non-driving tasks affect workload, visual attention strategies, and safer in-vehicle interaction timing.",
    year: "2024",
    category: "UX Research",
    context: "Automotive UX / high-stakes interaction",
    role: "Supervisor of Master's thesis project in collaboration between Goethe University and BMW Research",
    methods: "Within-subjects design, driving simulator, SuRT task, NASA TLX, eye tracking, AOI analysis",
    cardTags: ["eye tracking", "driving simulation"],
    visual: "./assets/images/portfolio/bmw-case.jpg",
    visualAlt: "Driving simulator setup and in-car view used in the BMW attention study.",
    sections: [
      {
        label: "Situation",
        body:
          "In-car systems increasingly compete with the road for attention. This study looked at how non-driving related tasks affect workload and visual attention during simulated driving.",
      },
      {
        label: "Task",
        body:
          "Understand how task pacing and task difficulty shape workload, gaze behavior, and lane-keeping performance, then translate those findings into safer UX guidance for infotainment systems.",
      },
      {
        label: "Action",
        items: [
          "Ran a within-subjects study with five simulated drives per participant: one baseline drive and four secondary-task conditions.",
          "Varied task pacing: self-paced vs. system-paced.",
          "Varied task difficulty: easy vs. difficult.",
          "Used the visual-manual Surrogate Reference Task (SuRT) as the secondary task.",
          "Measured perceived workload with NASA TLX after each drive and captured gaze behavior with eye tracking across predefined AOIs.",
        ],
      },
      {
        label: "Results",
        items: [
          "System-paced tasks generated significantly higher perceived workload than self-paced tasks.",
          "Difficult tasks also led to greater workload than easy ones.",
          "Higher workload was associated with shorter glances toward the road, more transitions between road and task AOIs, and reduced scanning of mirrors and rear-view areas.",
          "Self-paced tasks allowed longer glances and supported better road monitoring.",
          "Higher workload and more frequent gaze switching were associated with worse lane-keeping performance.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Let drivers control pacing whenever possible instead of forcing time-pressured system prompts.",
          "Simplify visual-manual tasks or break them into smaller steps to reduce cognitive load.",
          "Avoid presenting secondary tasks during high-demand moments such as curves or merging.",
          "Use gaze and workload signals to inform adaptive interfaces that delay interaction when attention is compromised.",
        ],
      },
    ],
    tags: ["ux", "automotive UX", "driving simulation"],
  },
  {
    id: "credit-card",
    title: "Making Credit Card Terms Understandable: UX Research for a Credit Card Landing Page",
    short:
      "A combined UX research project that tested how clearly a credit card landing page explained key terms, usage rules, and the grace-period model across desktop, mobile, and alternative visual concepts.",
    year: "2020",
    category: "UX Research",
    context: "Fintech UX / financial communication",
    role: "UX Researcher for a large retail bank, from research design to final report",
    methods:
      "Two rounds of moderated UX research: a small website comprehension study followed by a small comparative concept test",
    cardTags: ["website comprehension", "concept testing"],
    visual: "./assets/images/portfolio/credit-card-case.png",
    visualAlt: "Comparison of alternative grace period visualizations for a credit card landing page.",
    sections: [
      {
        label: "Situation",
        body:
          "The landing page had to explain several non-trivial rules at once: product benefits, cashback conditions, repayment logic, and how to use the credit limit without unnecessary cost.",
      },
      {
        label: "Task",
        body:
          "Evaluate whether the landing page actually helped people understand the product, then identify which parts of the communication needed redesign and which grace-period visualization explained the logic most clearly.",
      },
      {
        label: "Action",
        items: [
          "Ran a broader usability study of the desktop and mobile landing page, asking participants to find and explain key product conditions in their own words.",
          "Tested whether users correctly understood benefits, cashback rules, tariff details, card delivery and top-up information, and the overall logic of the credit limit.",
          "Used findings from that first round to run a second focused study comparing three grace-period visualization concepts.",
          "Asked participants to retell the rules, compare versions, and describe moments that felt unclear, misleading, or cognitively heavy.",
        ],
      },
      {
        label: "Results",
        items: [
          "Basic operational information such as delivery, getting the card, and usage conditions was generally discoverable, but comprehension dropped once participants had to explain the financial mechanics in detail.",
          "The mobile version buried secondary benefits because users did not immediately realize some content had to be explored through horizontal scrolling.",
          "Cashback communication was weak: participants did not clearly understand the scope and limitations of the offer.",
          'The credit-limit explanation created repeated confusion around the difference between "commission" and "minimum payment", as well as the overall repayment logic.',
          "The tariffs section added friction because terminology was inconsistent between the main page and the detailed explanation.",
          "The concept test showed that a timeline-based grace-period visualization was the easiest mental model, but all versions still needed clearer labels and concrete examples.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Keep the timeline structure as the base for grace-period communication because it matched the most familiar mental model for time-based rules.",
          'Unify terminology across the product page and tariff details so that "commission" and "minimum payment" do not feel like different or competing concepts.',
          "Rebuild the grace-period explanation with explicit labeled examples so users can map abstract rules onto a concrete scenario.",
          "Group cashback conditions into a single clearly bounded block so users do not miss important limitations.",
          "Make secondary benefits more visible on mobile instead of relying on horizontal discovery patterns that users may not notice.",
        ],
      },
    ],
    tags: ["ux", "fintech UX", "usability testing"],
  },
  {
    id: "fashion-platforms",
    title: "Comparative UX Evaluation of Fashion E-commerce Platforms",
    short:
      "Heuristic and scenario-based evaluation of Zara, Trendsbrands, and Lamoda to identify which platform best supports realistic fashion shopping behavior.",
    year: "2019",
    category: "UX Research",
    context: "E-commerce UX",
    role: "UX Researcher, test assignment",
    methods: "Heuristic evaluation, scenario walkthrough, comparative scoring, feature documentation",
    cardTags: ["heuristic review", "comparative evaluation"],
    sections: [
      {
        label: "Situation",
        body:
          "Three fashion e-commerce platforms served a similar customer need but supported the shopping journey very differently across navigation, filtering, preview, and checkout.",
      },
      {
        label: "Task",
        body:
          "Evaluate Zara, Trendsbrands, and Lamoda to determine which platform best supports a realistic customer scenario and where each experience breaks down.",
      },
      {
        label: "Action",
        items: [
          "Reviewed each platform through a scenario-based heuristic evaluation.",
          "Assessed navigation, filtering, product preview, and checkout flow.",
          "Applied comparative scoring per criterion: 0 for does not meet, 1 for partially meets, 2 for fully meets.",
          "Documented notable product patterns such as fast checkout, quick preview, and size recommendation support.",
        ],
      },
      {
        label: "Results",
        items: [
          "Lamoda performed best on navigation, quick view, and fast purchase without registration, but its navigation could still feel overloaded.",
          "Zara had strong size recommendations and cart preview, but forced registration created major friction.",
          "Trendsbrands handled filtering and fast purchase well, but the overall structure felt less intuitive.",
          "The comparison highlighted clear product opportunities: outfit-based recommendations, persistent size profiles, and simpler guest checkout.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Add outfit-based recommendations to better support browsing and discovery.",
          "Let users save size preferences across sessions to reduce repeated effort.",
          "Reduce checkout friction, especially where registration is mandatory.",
          "As a next step, validate these opportunities with task-based usability testing, post-test interviews, and quantitative task metrics.",
        ],
      },
    ],
    tags: ["ux", "e-commerce UX", "comparative evaluation"],
  },
  {
    id: "bank-website-functionality",
    title: "Defining the Role of a Bank Website in the Product Ecosystem",
    short:
      "A mixed-method study that mapped which banking tasks customers expected to complete on the website, where the site was already useful, and where product management should treat the website and app as distinct channels.",
    year: "2020",
    category: "UX Research",
    context: "Digital banking / channel strategy",
    role: "UX Researcher for a large retail bank, from survey design to qualitative synthesis",
    methods:
      "Mixed-method UX research: a survey with dozens of respondents, followed by a smaller set of qualitative interviews",
    cardTags: ["survey + interviews", "channel strategy"],
    sections: [
      {
        label: "Situation",
        body:
          "The bank website was used for information lookup and some self-service tasks, but its exact role in the broader product ecosystem was unclear. The team needed to understand which tasks customers expected from the website, how it compared to other banks, and whether people truly preferred the site over the mobile app for any meaningful workflows.",
      },
      {
        label: "Task",
        body:
          "Identify what customers used the site for today, what functionality they felt was missing, and where the website should be strengthened rather than treated as a weaker copy of the app.",
      },
      {
        label: "Action",
        items: [
          "Ran a survey about website usage, expectations, and missing functionality across a broad respondent base.",
          "Followed the survey with a smaller round of interviews to understand how customers searched for product information, chose between channels, and interpreted the role of the website in day-to-day banking tasks.",
          "Compared current site usage with both desired functionality and examples of services respondents valued on competitor websites.",
          "Used the interview stage to validate an important methodological issue: many respondents blurred the boundary between the website and the mobile app, so part of the survey reflected broader digital expectations rather than website-only behavior.",
        ],
      },
      {
        label: "Results",
        items: [
          "The website worked best as an information channel: customers primarily used it to check product conditions, review offers, and access a limited set of existing services.",
          "The mobile app remained the preferred channel for day-to-day product management, but the website still mattered for specific information gaps that were not covered elsewhere.",
          "Participants wanted the website to support a broader set of self-service tasks, especially payments, repayment flows, account controls, certificates, and clearer status information for product servicing.",
          "Competitor comparisons showed that users noticed not just missing features, but also missing ways of presenting information clearly, for example concise product-specific summaries, clearer payment breakdowns, and easier access to product-level documents.",
          "A key research finding was methodological as well as product-related: customers often talked about the site and app as one digital experience, which meant channel expectations had to be interpreted carefully rather than taken at face value.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Treat the website as a distinct channel with its own high-value jobs, rather than as an incomplete version of the app.",
          "Prioritize self-service tasks that users explicitly expected on the website, especially payments, repayment flows, certificates, and account-control actions.",
          "Improve product information architecture and product-level documents so users can find detailed answers without falling back to support.",
          "After the main study, compare the website with competitor sites to identify which features and interaction patterns worked especially well elsewhere and which ideas were worth adapting.",
          "Combine survey and interview findings with complaint analysis and behavioral data before expanding functionality, because stated needs were partly shaped by confusion between channels.",
        ],
      },
    ],
    tags: ["ux", "fintech UX", "mixed-method research"],
  },
  {
    id: "loyalty-program-clarity",
    title: "Reducing Loyalty Program Friction Across App, SMS, and Support",
    short:
      "A qualitative fintech UX study of how cardholders understood loyalty-program conditions, tracked monthly progress, and dealt with breakdowns between the app, SMS updates, and support channels.",
    year: "2020",
    category: "UX Research",
    context: "Fintech UX / loyalty program experience",
    role: "UX Researcher for a large retail bank, from interview design to insight report",
    methods:
      "Qualitative UX research: in-depth interviews with roughly two dozen cardholders, including customers who had already contacted support about reward accrual issues",
    cardTags: ["interviews", "cross-channel friction"],
    sections: [
      {
        label: "Situation",
        body:
          "The loyalty program was central to the value of the card, but the experience depended on several moving parts at once: understanding the rules, checking progress, trusting app and SMS signals, and knowing who to contact when something went wrong.",
      },
      {
        label: "Task",
        body:
          "Understand which parts of the loyalty-program experience were already clear, where customers still struggled, and how the app, website, SMS communication, and support flows could better work together.",
      },
      {
        label: "Action",
        items: [
          "Ran in-depth interviews with cardholders, including a subgroup of customers who had already contacted support about reward accrual issues.",
          "Tested how well participants understood program conditions, where they expected to find them, and how they checked whether monthly requirements had been met.",
          "Mapped the strategies customers used in practice, including app checks, SMS-based estimation, safety-buffer behavior, and reliance on memorized rules instead of product interfaces.",
          "Looked not only at comprehension, but also at cross-channel breakdowns: when users saw conflicting signals, how they interpreted the issue, and how they tried to resolve it.",
        ],
      },
      {
        label: "Results",
        items: [
          "Most engaged cardholders understood the basic conditions well enough, but many relied on memory, rough heuristics, or manual self-checking rather than on one trusted source of truth.",
          "Customers used several different strategies to estimate whether they had met the monthly conditions, which signaled that the product did not provide a single clear progress view.",
          "Many participants wanted to monitor fulfillment through SMS, while others expected the app to show more explicit progress and clearer explanations.",
          "When inconsistent status signals appeared across channels, users often could not tell where the issue originated or what to trust.",
          "That cross-channel ambiguity created support friction because ownership and resolution status were not transparent enough to users.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Provide one clearly trusted place to track progress toward monthly loyalty conditions instead of forcing customers to estimate fulfillment themselves.",
          "Use SMS and app communication as complementary channels: one for timely status updates, the other for fuller explanations and history.",
          "Make reward logic and accrual status easier to interpret, especially when transactions fail, are returned, or are processed differently than expected.",
          "Clarify responsibility and status in support and product messaging so customers know where to go when loyalty benefits do not appear as expected.",
        ],
      },
    ],
    tags: ["ux", "fintech UX", "qualitative research"],
  },
  {
    id: "gaming-audience-survey",
    title: "Large-Scale Audience Survey Design for a Digital Entertainment Product",
    short:
      "A large-scale quantitative research case about turning broad audience and product questions into a structured cross-country survey program for engagement, spending behavior, segmentation, and market comparison.",
    year: "2024",
    category: "UX Research",
    context: "Gaming research / quantitative strategy",
    role: "Quantitative researcher for an NDA digital entertainment project",
    methods:
      "Survey architecture in Alchemer, branching questionnaire design, R and Excel analysis, segmentation, cross-country comparison",
    cardTags: ["survey design", "quantitative research"],
    sections: [
      {
        label: "Situation",
        body:
          "A product and strategy team needed a clearer quantitative picture of audience behavior across engagement, content consumption, gaming habits, platform usage, spending behavior, satisfaction, and demographics.",
      },
      {
        label: "Task",
        body:
          "Design a survey instrument that could translate broad business questions into measurable variables, support hypothesis-driven analysis, and scale from an initial launch to a broader international research program.",
      },
      {
        label: "Action",
        items: [
          "Reduced a raw pool of more than two hundred candidate items into a tighter final questionnaire built for analytical usefulness rather than questionnaire sprawl.",
          "Structured the instrument around screeners, real-world engagement, content consumption, gaming habits, platform usage, monetization, satisfaction, and player profile variables.",
          "Built the questionnaire in Alchemer with branching logic so different respondent paths stayed relevant while preserving a stable analytical backbone for comparison.",
          "Used the initial launch as both a research wave and a quality check, then extended the same framework to five countries with roughly one thousand respondents in each market.",
          "Ran the analytical workflow in R and Excel, including data cleaning, preprocessing, variable construction, descriptive analysis, correlations, regression models, chi-square tests, t-tests, and segmentation work.",
        ],
      },
      {
        label: "Results",
        items: [
          "Produced one deep market report and one larger cross-market comparison report designed for product and strategy decisions.",
          "Identified key drivers of engagement, playtime, and spending behavior.",
          "Surfaced distinct audience segments and meaningful behavioral differences across markets.",
          "Created a measurement framework strong enough to support both immediate decision-making and later market expansion.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Treat survey design as measurement architecture, not just question writing, when the goal is to support segmentation and strategic analysis.",
          "Use a stable core questionnaire with carefully designed branching so expansion across markets does not break comparability.",
          "Combine descriptive reporting with inferential analysis to move from audience description to actual product and strategy guidance.",
          "Build survey systems that stay useful after the first launch, so the same instrument can support both immediate decisions and later international comparison.",
        ],
      },
    ],
    tags: ["ux", "gaming UX", "quantitative research"],
  },
  {
    id: "live-service-retention",
    title: "Designing a Retention Research Plan for a Live-Service Multiplayer Game",
    short:
      "An anonymized gaming UX case built from a test assignment: framing early and late player drop-off, reviewing public trend signals, and designing a mixed-method research plan to explain retention problems more precisely.",
    year: "2025",
    category: "UX Research",
    context: "Gaming UX / retention research",
    role: "Research strategist, test assignment for a multiplayer game team",
    methods:
      "Public trend review, stakeholder question design, behavioral-metrics framework, exit survey design, interview and playtest planning",
    cardTags: ["research strategy", "gaming retention"],
    sections: [
      {
        label: "Situation",
        body:
          "A live-service multiplayer game showed two different retention concerns at once: some players left very early, within the first sessions, while more experienced players also dropped off despite ongoing content updates.",
      },
      {
        label: "Task",
        body:
          "Design a research approach that could separate early drop-off from late drop-off, connect player behavior to likely causes, and give the team a clearer path for prioritizing onboarding, engagement, and long-term retention work.",
      },
      {
        label: "Action",
        items: [
          "Started with a review of public player-trend signals across multiple content cycles to understand whether the retention problem looked stable, seasonal, or tied to specific update patterns.",
          "Used that review to frame two distinct problem spaces: first-session churn and experienced-player churn.",
          "Outlined the stakeholder questions, behavioral metrics, and comparison groups needed to validate both problems with real product data.",
          "Designed a mixed-method plan that combined behavioral analysis, in-product exit surveys, onboarding playtests, and interviews with disengaged or returning players.",
        ],
      },
      {
        label: "Research output",
        items: [
          "The case established that retention could not be treated as one generic problem: early and late drop-off likely reflected different causes and therefore required different evidence.",
          "It translated a vague retention concern into a structured plan with clear segments, measurable behaviors, and hypotheses worth testing.",
          "The proposed analytics layer focused on performance, progression, map and mode usage, social experience, and interaction with core mechanics rather than on one surface-level KPI.",
          "The qualitative layer was designed to explain what behavioral metrics alone could not reveal, especially confusion, frustration, content fatigue, perceived unfairness, and onboarding breakdowns.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Treat early churn and experienced-player churn as separate research tracks, not as one retention bucket.",
          "Use product data to identify behavioral predictors of drop-off before running interviews, so qualitative work can focus on the most meaningful segments.",
          "Add lightweight in-context feedback collection at moments of disengagement instead of relying only on delayed retrospective surveys.",
          "Use public trend review as framing, but validate every major hypothesis against internal player behavior before making roadmap decisions.",
        ],
      },
    ],
    tags: ["ux", "gaming UX", "research strategy"],
  },
  {
    id: "objects-in-pieces",
    title: "Objects in Pieces: How Your Memory Stores Objects",
    short:
      "A working-memory study asking whether color and orientation are remembered separately or as parts of the same object.",
    year: "2019",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle:
      "Different features are stored independently in visual working memory but mediated by object-based representations",
    sourceLinks: [
      { label: "Journal page", href: "https://www.sciencedirect.com/science/article/pii/S0001691819302500" },
      { label: "Preprint", href: "https://psyarxiv.com/" },
      { label: "OSF", href: "https://osf.io/" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants remembered color and orientation either within the same object or across separate objects",
    sections: [
      {
        label: "Research question",
        body:
          "Do we store color and orientation separately in working memory, or as parts of unified object representations?",
      },
      {
        label: "Approach",
        body:
          "Participants remembered color and orientation either within the same object or split across separate objects, allowing us to compare feature memory under different object structures.",
      },
      {
        label: "Findings",
        items: [
          "Color and orientation can be stored independently when they belong to the same object.",
          "Memory became less accurate when those features belonged to separate objects.",
          "Object structure matters even when individual features remain partly dissociable.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Grouping related visual features inside the same interface element can improve retention and recall.",
          "Reducing variation in one feature does not necessarily damage memory for another when the object stays coherent.",
          "This matters for dense dashboards and interfaces where users must keep several attributes in mind at once.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/objects-in-pieces.png",
    visualAlt: "Diagram showing object-based feature memory relationships.",
    tags: ["academic", "visual working memory"],
  },
  {
    id: "depth-illusion",
    title: "Depth Illusion: How Do We Perceive Multiple Objects at Various Depths",
    short:
      "A perception study on how depth cues and size-distance correlations distort the apparent range of object sizes.",
    year: "2020",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "Size-distance rescaling in the ensemble representation of range: Study with binocular and monocular cues",
    sourceLinks: [
      { label: "Journal page", href: "https://www.sciencedirect.com/science/article/pii/S0001691821001281" },
      { label: "Open PDF", href: "./assets/pdfs/size-distance-rescaling-ensemble-range-2021.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants matched perceived size range in displays where circle size and depth cues were systematically correlated",
    sections: [
      {
        label: "Research question",
        body: "How does our visual system estimate the size and distance of multiple objects?",
      },
      {
        label: "Approach",
        body:
          "Participants judged size range in displays where circle size and depth cues were deliberately correlated in different ways.",
      },
      {
        label: "Findings",
        items: [
          "Participants overestimated size differences when larger objects appeared farther away and smaller objects appeared closer.",
          "Size differences were underestimated when the opposite correlation occurred, with large objects close and small objects far.",
          "The effect showed that size-distance recomputation happens automatically.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Depth cues and object size should be aligned carefully in immersive or spatial interfaces.",
          "Presenting larger elements farther away can enhance perceived size differences when that helps communication.",
          "Because the effect is automatic, pseudo-depth can bias judgment even without deliberate attention.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/depth-illusion.png",
    visualAlt: "Illustration showing equal circles appearing different in size because of depth context.",
    tags: ["academic", "depth perception"],
  },
  {
    id: "mixed-in-memory",
    title: "Mixed in Memory: How Do We Forget Which Object Did What",
    short:
      "Research on swap errors in working memory showing that object identity and state are often stored independently.",
    year: "2021",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "Real-world objects are not stored in bound representations in visual working memory",
    sourceLinks: [
      { label: "Journal page", href: "https://jov.arvojournals.org/article.aspx?articleid=2778042" },
      { label: "Open PDF", href: "./assets/pdfs/real-world-objects-visual-working-memory-2021.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants remembered objects in different states and later recalled which object appeared in which state, sometimes after location swaps",
    sections: [
      {
        label: "Research question",
        body:
          "How does visual working memory store real-world objects? Are identity and state stored holistically or independently?",
      },
      {
        label: "Approach",
        body:
          "Participants remembered objects in different states and later recalled which object appeared in which state, including conditions with location swaps.",
      },
      {
        label: "Findings",
        items: [
          "Participants often made swap errors, confusing which object had which feature or state.",
          "Confusions increased when objects had competing states.",
          "Identity and state appeared to be stored independently rather than as one unified trace.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Interfaces should not rely on subtle state differences between similar items.",
          "Clearer differentiation between object identity and state can reduce confusion and handoff errors.",
          "The finding supports stronger labeling, spacing, and state visibility in operational systems.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/mixed-in-memory.png",
    visualAlt: "Illustration of swap error between remembered real-world objects and their states.",
    tags: ["academic", "memory for real-world objects"],
  },
  {
    id: "similar-therefore-confused",
    title: "Similar, Therefore Confused: How Similar Objects Cause Location Confusion",
    short:
      "A study of how object distinctiveness changes location memory, even when object recognition itself stays intact.",
    year: "2022",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle:
      "Effects of item distinctiveness on the retrieval of objects and object-location bindings from visual working memory",
    sourceLinks: [
      { label: "Journal page", href: "https://link.springer.com/article/10.3758/s13414-022-02445-1" },
      { label: "Open PDF", href: "./assets/pdfs/item-distinctiveness-object-location-bindings-2022.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants recalled objects and their locations after seeing either highly distinctive or visually similar sets of real-world items",
    sections: [
      {
        label: "Research question",
        body:
          "How does the distinctiveness of real-world objects affect memory for both the objects themselves and their locations?",
      },
      {
        label: "Approach",
        body:
          "Participants recalled objects and locations after seeing either highly distinctive or visually similar object sets.",
      },
      {
        label: "Findings",
        items: [
          "Object distinctiveness did not meaningfully change recognition of the objects themselves.",
          "Low-distinctive objects produced more location errors, with participants mixing up where objects had appeared.",
          "The main cost of similarity emerged in binding objects to their spatial positions.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Visually similar items on a screen should be distinct enough to avoid location confusion.",
          "This is especially relevant for dashboards, control panels, warehousing, and logistics interfaces.",
          "Clear differentiation in both visual features and spatial arrangement reduces interaction errors.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/similar-therefore-confused.png",
    visualAlt: "Illustration of location error when remembering similar real-world objects.",
    tags: ["academic", "object-location memory"],
  },
  {
    id: "seeing-with-your-ears",
    title: "Seeing with Your Ears: How Sounds Alter Visual Perception",
    short:
      "A multisensory perception study showing that natural sounds can bias how people interpret ambiguous visual objects.",
    year: "2022",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "What you hear is what you see: Sounds alter the contents of visual perception",
    sourceLinks: [
      { label: "Journal page", href: "https://journals.sagepub.com/home/pss" },
      { label: "Open PDF", href: "./assets/pdfs/sounds-alter-visual-perception-2022.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants identified ambiguous object blends while hearing sounds that were either related or unrelated to one possible interpretation",
    sections: [
      {
        label: "Research question",
        body: "Can hearing a meaningful sound change how we see an ambiguous visual object?",
      },
      {
        label: "Approach",
        body:
          "Participants identified ambiguous object blends while hearing sounds that were either related or unrelated to one interpretation.",
      },
      {
        label: "Findings",
        items: [
          "Related sounds shifted participants' perception toward the object associated with the sound.",
          "For example, a bark made a hammer-seal blend more likely to be seen as seal-like.",
          "Natural audio cues changed not just decision strategy, but the perceived visual content itself.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Sound can guide interpretation when visuals are ambiguous, abstract, or hard to parse.",
          "This is highly relevant for advertising, AR, VR, and multimodal product experiences.",
          "Designers can use audio strategically to shape attention and interpretation rather than treating it as decoration.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/seeing-with-your-ears.jpg",
    visualAlt: "Series of ambiguous silhouettes paired with different object sounds.",
    tags: ["academic", "multisensory perception"],
  },
  {
    id: "peripheral-vision-under-clutter",
    title: "Peripheral Vision Under Clutter: Using Group Stats to Improve Visual Clarity",
    short:
      "A crowding study showing that peripheral visibility depends strongly on the average structure of surrounding clutter.",
    year: "2022",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "Unlocking crowding by ensemble statistics",
    sourceLinks: [
      { label: "Journal page", href: "https://www.cell.com/current-biology/fulltext/S0960-9822(22)01517-0" },
      { label: "Open PDF", href: "./assets/pdfs/unlocking-crowding-ensemble-statistics-2022.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants discriminated a peripheral vernier target surrounded by squares whose orientation statistics were systematically manipulated",
    sections: [
      {
        label: "Research question",
        body: "How can we reduce crowding in peripheral vision by changing the statistical properties of nearby clutter?",
      },
      {
        label: "Approach",
        body:
          "Participants discriminated a peripheral target while the orientation statistics of surrounding clutter were systematically changed.",
      },
      {
        label: "Findings",
        items: [
          "Crowding depended primarily on the mean orientation of the surrounding objects rather than each individual orientation.",
          "When the mean orientation of the surround matched the target, crowding was reduced.",
          "When the surround mean diverged from the target, perception worsened and target discrimination became harder.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Peripheral readability depends on group structure, not only on local spacing.",
          "In environments like road signage and advertising, nearby elements should be visually distinct enough to prevent confusion.",
          "This supports design choices that separate critical peripheral information from visually similar clutter.",
        ],
      },
    ],
    tags: ["academic", "crowding and peripheral vision"],
  },
  {
    id: "cant-forget-this",
    title: "Can't Forget This: How Familiar Objects Beat Amnesia",
    short:
      "A study of attribute amnesia showing that meaningful, familiar objects are remembered better, but not perfectly.",
    year: "2023",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "Meaningful objects avoid attribute amnesia due to incidental long-term memories",
    sourceLinks: [
      { label: "Journal page", href: "https://www.nature.com/articles/s41598-023-41642-z" },
      { label: "Open PDF", href: "./assets/pdfs/meaningful-objects-attribute-amnesia.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants saw meaningful objects and later faced surprise memory probes asking for unexpectedly specific details",
    sections: [
      {
        label: "Research question",
        body:
          "How and when do meaningful objects resist attribute amnesia, the failure to remember specific features of recently seen objects?",
      },
      {
        label: "Approach",
        body:
          "Participants saw meaningful objects and later received surprise probes asking for specific details they had not intentionally memorized.",
      },
      {
        label: "Findings",
        items: [
          "Meaningful objects were more resilient to attribute amnesia than arbitrary stimuli.",
          "They were not fully immune: detailed surprise probes still revealed failures, especially for fine-grained distinctions.",
          "Long-term familiarity helped preserve information when people were not explicitly trying to memorize it.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Familiar and meaningful visuals are more likely to be remembered in interfaces, ads, and packaging.",
          "This makes meaningful imagery a practical tool for supporting incidental memory.",
          "Critical distinctions should still be made explicit because familiarity alone does not guarantee perfect recall.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/cant-forget-this.png",
    visualAlt: "Diagram of pre-surprise and surprise trials testing incidental memory for meaningful objects.",
    tags: ["academic", "meaningful object memory"],
  },
  {
    id: "center-of-attention",
    title: "Center of Attention: Why We Rely on Central Vision in Crowded Scenes",
    short:
      "An ensemble-perception study showing that under uncertainty people weight central vision more heavily than peripheral information.",
    year: "2024",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "The functional role of spatial anisotropies in ensemble perception",
    sourceLinks: [
      { label: "Journal page", href: "https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-024-01822-3" },
      { label: "Open PDF", href: "./assets/pdfs/spatial-anisotropies-ensemble-perception.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants estimated average orientation in displays with different levels of uncertainty, allowing us to model weighting across the visual field",
    sections: [
      {
        label: "Research question",
        body: "How does the visual system compute information about multiple objects under different levels of uncertainty?",
      },
      {
        label: "Approach",
        body:
          "Participants estimated average orientation in displays with varying uncertainty so we could model which areas of the visual field contributed most.",
      },
      {
        label: "Findings",
        items: [
          "Participants consistently gave more weight to objects near the center of the visual field.",
          "This central bias became stronger when the overall visual information was more uncertain or noisy.",
          "The brain relied more heavily on the most reliable data source when the scene became harder to interpret.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "Important information should be placed where users are most likely to foveate, not left to peripheral pickup.",
          "This matters for ads, road signs, interfaces, and any environment with crowded or uncertain displays.",
          "The finding helps explain why central placement still dominates when scenes become complex.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/center-of-attention.png",
    visualAlt: "Heatmap showing stronger weighting near the center of the visual field.",
    tags: ["academic", "ensemble perception"],
  },
  {
    id: "trusting-the-past",
    title: "Trusting the Past: How High Memory Load Skews Perception Toward Recent Experiences",
    short:
      "A serial-dependence study showing that heavy memory load increases reliance on recently seen stimuli.",
    year: "2024",
    category: "Academic Research",
    sourceLabel: "Publication",
    sourceTitle: "Serial dependence: A matter of memory load",
    sourceLinks: [
      { label: "Journal page", href: "https://www.sciencedirect.com/science/article/pii/S2405844024100084" },
      { label: "Open PDF", href: "./assets/pdfs/serial-dependence-memory-load.pdf" },
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods:
      "Participants judged visual orientations while also maintaining low- or high-load memory tasks",
    sections: [
      {
        label: "Research question",
        body: "How is serial dependence affected by the amount of memory load people are carrying?",
      },
      {
        label: "Approach",
        body:
          "Participants judged visual orientations while simultaneously maintaining memory tasks with different load levels.",
      },
      {
        label: "Findings",
        items: [
          "Under high memory load, serial dependence became stronger and current judgments were pulled more toward recent stimuli.",
          "When the preceding memory task was especially difficult, the influence of past stimuli was reduced.",
          "Memory load directly modulated how much perception leaned on recent visual history.",
        ],
      },
      {
        label: "Applicability",
        items: [
          "In high-stakes settings like driving, surveillance, or medical scanning, high workload can increase bias from recent experience.",
          "Reducing memory load can help users make more independent moment-to-moment judgments.",
          "The result supports simpler workflows in environments where small perceptual errors carry real cost.",
        ],
      },
    ],
    visual: "./assets/images/portfolio/trusting-the-past.png",
    visualAlt: "Chart illustrating how memory load changes serial dependence effects.",
    tags: ["academic", "serial dependence"],
  },
];

const categoryOrder = {
  "UX Research": 0,
  "Academic Research": 1,
};

const uxCaseOrder = {
  "gaming-audience-survey": 0,
  "driver-attention": 1,
  "credit-card": 2,
  "bank-website-functionality": 3,
  "loyalty-program-clarity": 4,
  "hse-app-lms": 5,
  "live-service-retention": 6,
  "fashion-platforms": 7,
};

const orderedCases = cases
  .map((entry, index) => ({ ...entry, originalIndex: index }))
  .sort((left, right) => {
    const categoryDifference =
      (categoryOrder[left.category] ?? Number.MAX_SAFE_INTEGER) -
      (categoryOrder[right.category] ?? Number.MAX_SAFE_INTEGER);

    if (categoryDifference !== 0) {
      return categoryDifference;
    }

    if (left.category === "UX Research" && right.category === "UX Research") {
      const uxDifference =
        (uxCaseOrder[left.id] ?? Number.MAX_SAFE_INTEGER) -
        (uxCaseOrder[right.id] ?? Number.MAX_SAFE_INTEGER);

      if (uxDifference !== 0) {
        return uxDifference;
      }
    }

    const yearDifference = Number(right.year) - Number(left.year);

    if (yearDifference !== 0) {
      return yearDifference;
    }

    return left.originalIndex - right.originalIndex;
  })
  .map(({ originalIndex, ...entry }) => entry);

const caseList = document.querySelector("#case-list");
const casePanel = document.querySelector("#case-panel");
const caseBack = document.querySelector("#case-back");
const casePrev = document.querySelector("#case-prev");
const caseNext = document.querySelector("#case-next");
const caseTitle = document.querySelector("#case-title");
const caseSummary = document.querySelector("#case-summary");
const caseArticle = document.querySelector("#case-article");
const caseSourceBlock = document.querySelector("#case-source-block");
const caseSourceLabel = document.querySelector("#case-source-label");
const caseContext = document.querySelector("#case-context");
const caseRole = document.querySelector("#case-role");
const caseMethods = document.querySelector("#case-methods");
const caseVisualBlock = document.querySelector("#case-visual-block");
const caseVisual = document.querySelector("#case-visual");
const caseStory = document.querySelector("#case-story");
const caseLinksBlock = document.querySelector("#case-links-block");
const caseLinks = document.querySelector("#case-links");
const chips = [...document.querySelectorAll(".filter-chip")];
const controls = document.querySelector(".portfolio-controls");

let currentFilter = "all";
let selectedId = orderedCases[0].id;

function getFilteredCases() {
  return orderedCases.filter((entry) => currentFilter === "all" || entry.tags.includes(currentFilter));
}

function renderCaseList() {
  const filteredCases = getFilteredCases();

  if (!filteredCases.some((entry) => entry.id === selectedId)) {
    selectedId = filteredCases[0]?.id ?? orderedCases[0].id;
  }

  caseList.innerHTML = filteredCases
    .map((entry) => {
      const isActive = entry.id === selectedId;
      const visibleTags = entry.cardTags ?? entry.tags.filter((tag) => tag !== "ux" && tag !== "academic");

      return `
        <button class="case-card ${isActive ? "is-active" : ""}" type="button" data-id="${entry.id}">
          <div class="case-card-top">
            <span class="case-type-pill">${entry.category}</span>
            ${entry.category === "Academic Research" ? `<span class="case-year">${entry.year}</span>` : ""}
          </div>
          <h3>${entry.title}</h3>
          <p>${entry.short}</p>
          <div class="case-tags">
            <span>${entry.context}</span>
            ${visibleTags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".case-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      renderCaseList();
      renderCasePanel();
      scrollToWithOffset(casePanel, 20);
    });
  });
}

function scrollToWithOffset(target, extraOffset = 16) {
  const topbar = document.querySelector(".topbar");
  const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
  const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
  const targetTop = Math.max(absoluteTop - topbarHeight - extraOffset, 0);

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

function renderCasePanel() {
  const activeCase = orderedCases.find((entry) => entry.id === selectedId) ?? orderedCases[0];
  const filteredCases = getFilteredCases();
  const activeIndex = filteredCases.findIndex((entry) => entry.id === activeCase.id);
  const previousCase = activeIndex > 0 ? filteredCases[activeIndex - 1] : null;
  const nextCase = activeIndex >= 0 && activeIndex < filteredCases.length - 1 ? filteredCases[activeIndex + 1] : null;

  caseTitle.textContent = activeCase.title;
  caseSummary.textContent = activeCase.short;
  caseContext.textContent = activeCase.context;
  caseRole.textContent = activeCase.role;
  caseMethods.textContent = activeCase.methods;

  if (activeCase.sourceTitle) {
    caseSourceBlock.hidden = false;
    caseSourceLabel.textContent = activeCase.sourceLabel ?? "Publication";
    caseArticle.innerHTML = `<span class="article-title">${activeCase.sourceTitle}</span>`;
  } else {
    caseSourceBlock.hidden = true;
    caseArticle.innerHTML = "";
  }

  if (activeCase.sourceLinks?.length) {
    caseLinksBlock.hidden = false;
    caseLinks.innerHTML = activeCase.sourceLinks
      .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
      .join("");
  } else {
    caseLinksBlock.hidden = true;
    caseLinks.innerHTML = "";
  }

  caseStory.innerHTML = activeCase.sections
    .map((section) => {
      const bodyMarkup = section.items
        ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : `<p class="case-summary">${section.body}</p>`;
      return `
        <div class="detail-block">
          <h4>${section.label}</h4>
          ${bodyMarkup}
        </div>
      `;
    })
    .join("");

  if (activeCase.visual) {
    caseVisualBlock.hidden = false;
    caseVisual.src = activeCase.visual;
    caseVisual.alt = activeCase.visualAlt ?? activeCase.title;
  } else {
    caseVisualBlock.hidden = true;
    caseVisual.src = "";
    caseVisual.alt = "";
  }

  casePrev.disabled = !previousCase;
  caseNext.disabled = !nextCase;
  casePrev.dataset.id = previousCase?.id ?? "";
  caseNext.dataset.id = nextCase?.id ?? "";
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    currentFilter = chip.dataset.filter;
    chips.forEach((item) => item.classList.toggle("is-active", item === chip));
    renderCaseList();
    renderCasePanel();
  });
});

caseBack.addEventListener("click", () => {
  scrollToWithOffset(controls, 20);
});

casePrev.addEventListener("click", () => {
  if (!casePrev.dataset.id) {
    return;
  }

  selectedId = casePrev.dataset.id;
  renderCaseList();
  renderCasePanel();
  scrollToWithOffset(casePanel, 20);
});

caseNext.addEventListener("click", () => {
  if (!caseNext.dataset.id) {
    return;
  }

  selectedId = caseNext.dataset.id;
  renderCaseList();
  renderCasePanel();
  scrollToWithOffset(casePanel, 20);
});

renderCaseList();
renderCasePanel();
