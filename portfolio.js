const cases = [
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
    title: "Improving Credit Card Communication: Grace Period Visualization Testing",
    short:
      "Comparative usability testing of grace period visualizations to find the clearest way to explain how to use the Zero credit card without paying interest.",
    year: "2020",
    category: "UX Research",
    context: "Fintech UX / financial communication",
    role: "UX Researcher at MTS Bank, from research design to final report",
    methods: "Comparative usability testing, randomized exposure order, explanation accuracy, preference analysis, confusion mapping",
    visual: "./assets/images/portfolio/credit-card-case.png",
    visualAlt: "Comparison of two grace period visualizations for the MTS Bank Zero credit card.",
    sections: [
      {
        label: "Situation",
        body:
          'The "Zero" credit card had a communication problem: users struggled to understand how the grace period worked and how to avoid paying interest.',
      },
      {
        label: "Task",
        body:
          "Evaluate three visual approaches to explain the grace period, identify which version was clearest, and surface the moments where confusion still appeared.",
      },
      {
        label: "Action",
        items: [
          "Ran a comparative usability test in which each participant reviewed two versions of the visualization.",
          "Asked participants to explain the card terms in their own words and choose the clearest version.",
          "Randomized exposure order to reduce bias.",
          "Tracked first impressions, explanation accuracy, version preference, and reported confusion points.",
        ],
      },
      {
        label: "Results",
        items: [
          "Participants consistently preferred the timeline-based version because the format felt familiar and easier to follow.",
          "The cleaner version created a better first impression, but some icons were distracting or unclear.",
          "Low contrast and small text made important information harder to read.",
          'Terms such as "minimum payment" and "commission" were misunderstood or confused with each other.',
          "Participants repeatedly asked for concrete examples, which showed that example-driven learning was essential for understanding the grace period.",
        ],
      },
      {
        label: "Recommendations",
        items: [
          "Use the timeline structure as the base because familiar formats increase confidence.",
          "Clarify financial terms in context instead of assuming domain knowledge.",
          "Add real examples with labeled dates such as purchase date and repayment date.",
          "Improve contrast and type size, and remove decorative elements that compete with comprehension.",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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
        label: "Design relevance",
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

const caseList = document.querySelector("#case-list");
const casePanel = document.querySelector("#case-panel");
const caseBack = document.querySelector("#case-back");
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
let selectedId = cases[0].id;

function renderCaseList() {
  const filteredCases = cases.filter((entry) => currentFilter === "all" || entry.tags.includes(currentFilter));

  if (!filteredCases.some((entry) => entry.id === selectedId)) {
    selectedId = filteredCases[0]?.id ?? cases[0].id;
  }

  caseList.innerHTML = filteredCases
    .map((entry) => {
      const isActive = entry.id === selectedId;
      const visibleTags = entry.tags.filter((tag) => tag !== "ux" && tag !== "academic");

      return `
        <button class="case-card ${isActive ? "is-active" : ""}" type="button" data-id="${entry.id}">
          <div class="case-card-top">
            <span class="case-type-pill">${entry.category}</span>
            <span class="case-year">${entry.year}</span>
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
      casePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderCasePanel() {
  const activeCase = cases.find((entry) => entry.id === selectedId) ?? cases[0];
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
  controls.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCaseList();
renderCasePanel();
