const cases = [
  {
    id: "driver-attention",
    title: "How Secondary Task Shapes Driver Attention and Workload: A UX Study of In-Car Distractions",
    short: "A driving UX study of how self-paced and system-paced non-driving tasks affect workload, visual attention strategies, and safer in-vehicle interaction timing.",
    year: "2024",
    article: "Master's thesis project in collaboration with Goethe University and BMW Research",
    context: "Automotive UX / high-stakes interaction",
    role: "Supervisor of a master's thesis in collaboration with Goethe University and BMW Research",
    methods: "Within-subject experiment, simulated driving, NASA TLX, eye tracking, AOI analysis",
    problem: "How do self-paced and system-paced non-driving related tasks affect drivers' workload and visual attention strategies, and what does that imply for safer infotainment UX design?",
    results: [
      "System-paced tasks generated significantly higher perceived workload than self-paced tasks.",
      "Difficult tasks also increased workload compared with easier ones.",
      "Higher workload was associated with shorter road glances, more switching between road and task AOIs, and reduced scanning of secondary areas such as mirrors.",
      "Self-paced tasks allowed longer glances and more stable road monitoring.",
      "Higher workload and frequent gaze switching were associated with worse lane-keeping performance."
    ],
    impact: [
      "Pacing matters: system-initiated tasks under time pressure impair attention more than user-paced interaction.",
      "Break visual-manual tasks into smaller, digestible steps to reduce cognitive load.",
      "Avoid presenting secondary tasks during high-demand driving phases such as merging or curves.",
      "Use gaze and workload signals to inform driver-aware interfaces that delay interaction when attention is compromised."
    ],
    tags: ["ux"]
  },
  {
    id: "credit-card",
    title: "Improving Credit Card Communication: Grace Period Visualization Testing",
    short: "Comparative usability testing of grace period visualizations to find the clearest way to explain how to use the Zero credit card without paying interest.",
    year: "2020",
    article: "Internal product research at MTS Bank",
    context: "Fintech UX / financial communication",
    role: "UX Researcher at MTS Bank, from research design to final report",
    methods: "Comparative usability test, randomized exposure order, explanation accuracy, version preference, confusion mapping",
    problem: "Which visualization best explains how to use the Zero credit card without paying interest, and where do users still get confused by grace period terms?",
    results: [
      "Participants preferred the timeline-based version because the format felt familiar and easier to follow.",
      "A cleaner visual style improved first impressions, but some icons were distracting or unclear.",
      "Low contrast and small text made critical information harder to read.",
      "Terms like minimum payment and commission were often misunderstood.",
      "Participants repeatedly asked for concrete examples to make abstract rules understandable."
    ],
    impact: [
      "Use the timeline format as the structural base because familiar layouts increase confidence.",
      "Clarify financial terms in context instead of assuming domain knowledge.",
      "Add real examples with labeled dates to support example-driven learning.",
      "Improve contrast, font size, and reduce decorative clutter so visual hierarchy serves comprehension rather than aesthetics."
    ],
    tags: ["ux"]
  },
  {
    id: "fashion-platforms",
    title: "Comparative UX Evaluation of Fashion E-commerce Platforms",
    short: "Heuristic and scenario-based evaluation of Zara, Trendsbrands, and Lamoda to identify which platform best supports realistic fashion shopping behavior.",
    year: "2019",
    article: "Comparative UX evaluation, test assignment",
    context: "E-commerce UX",
    role: "UX Researcher, test assignment",
    methods: "Heuristic review, scenario walkthrough, comparative scoring, feature documentation",
    problem: "Which fashion platform best supports realistic shopping behavior across navigation, filtering, preview, and checkout?",
    results: [
      "Lamoda performed best on navigation, quick view, and fast purchase without registration.",
      "Zara offered strong size recommendations and fast cart preview, but registration created major friction.",
      "Trendsbrands had solid filtering and fast purchase, but the structure was less intuitive.",
      "Across platforms, the comparison surfaced clear opportunities around guest checkout, persistent size profiles, and outfit-based recommendations."
    ],
    impact: [
      "Fast checkout and preview behavior are decisive in fashion browsing flows.",
      "Registration friction compounds quickly and can undermine otherwise strong product UX.",
      "Persistent size profiles and outfit-based recommendations would increase relevance and reduce decision effort.",
      "The project also mapped the next step into full UX research: task-based tests, interviews, and quantitative performance measures."
    ],
    tags: ["ux"]
  },
  {
    id: "objects-in-pieces",
    title: "Objects in Pieces: How Your Memory Stores Objects",
    short: "A working-memory study asking whether color and orientation are remembered separately or as parts of the same object.",
    year: "2019",
    article: "Different features are stored independently in visual working memory but mediated by object-based representations",
    articleLinks: [
      { label: "Journal page", href: "https://www.sciencedirect.com/science/article/pii/S0001691819302500" },
      { label: "Preprint", href: "https://psyarxiv.com/" },
      { label: "OSF", href: "https://osf.io/" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants remembered color and orientation either within the same object or across separate objects.",
    problem: "Do we store in memory individual features such as color and orientation separately, or as part of objects?",
    results: [
      "Color and orientation can be stored independently when they belong to the same object.",
      "Memory became less accurate when those features belonged to separate objects.",
      "Object structure matters even when individual features remain partly dissociable."
    ],
    impact: [
      "Grouping related visual features inside the same interface element can improve retention and recall.",
      "Reducing variation in one feature does not necessarily damage memory for another when the object stays coherent.",
      "This is useful for dense dashboards and interfaces where users must keep several attributes in mind at once."
    ],
    visual: "./assets/images/portfolio/objects-in-pieces.png",
    visualAlt: "Diagram showing past and present orientation judgments in a serial dependence task.",
    tags: ["academic", "visual working memory"]
  },
  {
    id: "depth-illusion",
    title: "Depth Illusion: How Do We Perceive Multiple Objects at Various Depths",
    short: "A perception study on how depth cues and size-distance correlations distort the apparent range of object sizes.",
    year: "2020",
    article: "Size-distance rescaling in the ensemble representation of range: Study with binocular and monocular cues",
    articleLinks: [
      { label: "Journal page", href: "https://www.sciencedirect.com/science/article/pii/S0001691821001281" },
      { label: "Open PDF", href: "./assets/pdfs/size-distance-rescaling-ensemble-range-2021.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants matched perceived size range in displays where circle size and depth cues were systematically correlated.",
    problem: "How does our visual system estimate the size and distance of multiple objects?",
    results: [
      "Participants overestimated size differences when larger objects appeared farther away and smaller objects appeared closer.",
      "Size differences were underestimated when the opposite correlation occurred, with large objects close and small objects far.",
      "The effect showed that size-distance recomputation happens automatically."
    ],
    impact: [
      "Depth cues and object size should be aligned carefully in immersive or spatial interfaces.",
      "Presenting larger elements farther away can enhance perceived size differences when that helps communication.",
      "Because the effect is automatic, pseudo-depth can bias judgment even without deliberate attention."
    ],
    visual: "./assets/images/portfolio/depth-illusion.png",
    visualAlt: "Illustration showing equal circles appearing different in size because of depth context.",
    tags: ["academic", "depth perception"]
  },
  {
    id: "mixed-in-memory",
    title: "Mixed in Memory: How Do We Forget Which Object Did What",
    short: "Research on swap errors in working memory showing that object identity and state are often stored independently.",
    year: "2021",
    article: "Real-world objects are not stored in bound representations in visual working memory",
    articleLinks: [
      { label: "Journal page", href: "https://jov.arvojournals.org/article.aspx?articleid=2778042" },
      { label: "Open PDF", href: "./assets/pdfs/real-world-objects-visual-working-memory-2021.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants remembered objects in different states and later recalled which object appeared in which state, sometimes after location swaps.",
    problem: "How does visual working memory store real-world objects? Are features like identity and state stored holistically or independently?",
    results: [
      "Participants often made swap errors, confusing which object had which feature or state.",
      "Confusions increased when objects had competing states.",
      "Identity and state appeared to be stored independently rather than as one unified trace."
    ],
    impact: [
      "Interfaces should not rely on subtle state differences between similar items.",
      "Clearer differentiation between object identity and state can reduce confusion and handoff errors.",
      "The finding supports stronger labeling, spacing, and state visibility in operational systems."
    ],
    visual: "./assets/images/portfolio/mixed-in-memory.png",
    visualAlt: "Illustration of swap error between remembered real-world objects and their states.",
    tags: ["academic", "memory for real-world objects"]
  },
  {
    id: "similar-therefore-confused",
    title: "Similar, Therefore Confused: How Similar Objects Cause Location Confusion",
    short: "A study of how object distinctiveness changes location memory, even when object recognition itself stays intact.",
    year: "2022",
    article: "Effects of item distinctiveness on the retrieval of objects and object-location bindings from visual working memory",
    articleLinks: [
      { label: "Journal page", href: "https://link.springer.com/article/10.3758/s13414-022-02445-1" },
      { label: "Open PDF", href: "./assets/pdfs/item-distinctiveness-object-location-bindings-2022.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants recalled objects and their locations after seeing either highly distinctive or visually similar sets of real-world items.",
    problem: "How does the distinctiveness of real-world objects affect our ability to remember both the objects themselves and their locations in visual working memory?",
    results: [
      "Object distinctiveness did not meaningfully change recognition of the objects themselves.",
      "Low-distinctive objects produced more location errors, with participants mixing up where objects had appeared.",
      "The main cost of similarity emerged in binding objects to their spatial positions."
    ],
    impact: [
      "Visually similar items on a screen should be distinct enough to avoid location confusion.",
      "This is especially relevant for dashboards, control panels, warehousing, and logistics interfaces.",
      "Clear differentiation in both visual features and spatial arrangement reduces interaction errors."
    ],
    visual: "./assets/images/portfolio/similar-therefore-confused.png",
    visualAlt: "Illustration of location error when remembering similar real-world objects.",
    tags: ["academic", "object-location memory"]
  },
  {
    id: "seeing-with-your-ears",
    title: "Seeing with Your Ears: How Sounds Alter Visual Perception",
    short: "A multisensory perception study showing that natural sounds can bias how people interpret ambiguous visual objects.",
    year: "2022",
    article: "What you hear is what you see: Sounds alter the contents of visual perception",
    articleLinks: [
      { label: "Journal page", href: "https://journals.sagepub.com/home/pss" },
      { label: "Open PDF", href: "./assets/pdfs/sounds-alter-visual-perception-2022.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants identified ambiguous object blends while hearing sounds that were either related or unrelated to one of the possible interpretations.",
    problem: "Can hearing a meaningful sound change how we see an ambiguous visual object?",
    results: [
      "Related sounds shifted participants' perception toward the object associated with the sound.",
      "For example, a bark made a hammer-seal blend more likely to be seen as seal-like.",
      "Natural audio cues changed not just decision strategy, but the perceived visual content itself."
    ],
    impact: [
      "Sound can guide interpretation when visuals are ambiguous, abstract, or hard to parse.",
      "This is highly relevant for advertising, AR, VR, and multimodal product experiences.",
      "Designers can use audio strategically to shape attention and interpretation rather than treating it as decoration."
    ],
    visual: "./assets/images/portfolio/seeing-with-your-ears.jpg",
    visualAlt: "Series of ambiguous silhouettes paired with different object sounds.",
    tags: ["academic", "multisensory perception"]
  },
  {
    id: "peripheral-vision-under-clutter",
    title: "Peripheral Vision Under Clutter: Using Group Stats to Improve Visual Clarity",
    short: "A crowding study showing that peripheral visibility depends strongly on the average structure of surrounding clutter.",
    year: "2022",
    article: "Unlocking crowding by ensemble statistics",
    articleLinks: [
      { label: "Journal page", href: "https://www.cell.com/current-biology/fulltext/S0960-9822(22)01517-0" },
      { label: "Open PDF", href: "./assets/pdfs/unlocking-crowding-ensemble-statistics-2022.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants discriminated a peripheral vernier target surrounded by squares whose orientation statistics were systematically manipulated.",
    problem: "How can we reduce crowding in peripheral vision by changing the statistical properties of nearby clutter?",
    results: [
      "Crowding depended primarily on the mean orientation of the surrounding objects rather than each individual orientation.",
      "When the mean orientation of the surround matched the target, crowding was reduced.",
      "When the surround mean diverged from the target, perception worsened and target discrimination became harder."
    ],
    impact: [
      "Peripheral readability depends on group structure, not only on local spacing.",
      "In real environments like road signage and advertising, nearby elements should be visually distinct enough to prevent confusion.",
      "This supports design choices that separate critical peripheral information from visually similar clutter."
    ],
    tags: ["academic", "crowding and peripheral vision"]
  },
  {
    id: "cant-forget-this",
    title: "Can't Forget This: How Familiar Objects Beat Amnesia",
    short: "A study of attribute amnesia showing that meaningful, familiar objects are remembered better, but not perfectly.",
    year: "2023",
    article: "Meaningful objects avoid attribute amnesia due to incidental long-term memories",
    articleLinks: [
      { label: "Journal page", href: "https://www.nature.com/articles/s41598-023-41642-z" },
      { label: "Open PDF", href: "./assets/pdfs/meaningful-objects-attribute-amnesia.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants saw meaningful objects and later faced surprise memory probes asking for unexpectedly specific details about what they had just seen.",
    problem: "How and when do meaningful objects resist attribute amnesia, the failure to remember specific features of recently seen objects?",
    results: [
      "Meaningful objects were more resilient to attribute amnesia than arbitrary stimuli.",
      "They were not fully immune: detailed surprise probes still revealed failures, especially for fine-grained distinctions.",
      "Long-term familiarity helped preserve information when people were not explicitly trying to memorize it."
    ],
    impact: [
      "Familiar and meaningful visuals are more likely to be remembered in interfaces, ads, and packaging.",
      "This makes meaningful imagery a practical tool for supporting incidental memory.",
      "At the same time, critical distinctions should still be made explicit because familiarity alone does not guarantee perfect recall."
    ],
    visual: "./assets/images/portfolio/cant-forget-this.png",
    visualAlt: "Diagram of pre-surprise and surprise trials testing incidental memory for meaningful objects.",
    tags: ["academic", "meaningful object memory"]
  },
  {
    id: "center-of-attention",
    title: "Center of Attention: Why We Rely on Central Vision in Crowded Scenes",
    short: "An ensemble-perception study showing that under uncertainty people weight central vision more heavily than peripheral information.",
    year: "2024",
    article: "The functional role of spatial anisotropies in ensemble perception",
    articleLinks: [
      { label: "Journal page", href: "https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-024-01822-3" },
      { label: "Open PDF", href: "./assets/pdfs/spatial-anisotropies-ensemble-perception.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants estimated average orientation in displays with different levels of uncertainty, allowing us to model which parts of the visual field contributed most.",
    problem: "How does the visual system compute information about multiple objects under different levels of uncertainty?",
    results: [
      "Participants consistently gave more weight to objects near the center of the visual field.",
      "This central bias became stronger when the overall visual information was more uncertain or noisy.",
      "The brain relied more heavily on the most reliable data source when the scene became harder to interpret."
    ],
    impact: [
      "Important information should be placed where users are most likely to foveate, not left to peripheral pickup.",
      "This matters for ads, road signs, interfaces, and any environment with crowded or uncertain displays.",
      "The finding helps explain why central placement still dominates when scenes become complex."
    ],
    visual: "./assets/images/portfolio/center-of-attention.png",
    visualAlt: "Heatmap showing stronger weighting near the center of the visual field.",
    tags: ["academic", "ensemble perception"]
  },
  {
    id: "trusting-the-past",
    title: "Trusting the Past: How High Memory Load Skews Perception Toward Recent Experiences",
    short: "A serial-dependence study showing that heavy memory load increases reliance on recently seen stimuli.",
    year: "2024",
    article: "Serial dependence: A matter of memory load",
    articleLinks: [
      { label: "Journal page", href: "https://www.sciencedirect.com/science/article/pii/S2405844024100084" },
      { label: "Open PDF", href: "./assets/pdfs/serial-dependence-memory-load.pdf" }
    ],
    context: "Academic research",
    role: "Academic researcher",
    methods: "Participants judged visual orientations while also maintaining low- or high-load memory tasks, allowing us to measure how recent stimuli biased current judgments.",
    problem: "How is serial dependence, the bias from previous visual input, affected by the amount of memory load people are carrying?",
    results: [
      "Under high memory load, serial dependence became stronger and current judgments were pulled more toward recent stimuli.",
      "When the preceding memory task was especially difficult, the influence of past stimuli was reduced.",
      "Memory load directly modulated how much perception leaned on recent visual history."
    ],
    impact: [
      "In high-stakes settings like driving, surveillance, or medical scanning, high workload can increase bias from recent experience.",
      "Reducing memory load can help users make more independent moment-to-moment judgments.",
      "The result supports simpler workflows in environments where small perceptual errors carry real cost."
    ],
    visual: "./assets/images/portfolio/trusting-the-past.png",
    visualAlt: "Chart illustrating how memory load changes serial dependence effects.",
    tags: ["academic", "serial dependence"]
  }
];

const caseList = document.querySelector("#case-list");
const caseTitle = document.querySelector("#case-title");
const caseSummary = document.querySelector("#case-summary");
const caseArticle = document.querySelector("#case-article");
const caseContext = document.querySelector("#case-context");
const caseRole = document.querySelector("#case-role");
const caseMethods = document.querySelector("#case-methods");
const caseProblem = document.querySelector("#case-problem");
const caseResults = document.querySelector("#case-results");
const caseImpact = document.querySelector("#case-impact");
const caseVisualBlock = document.querySelector("#case-visual-block");
const caseVisual = document.querySelector("#case-visual");
const chips = [...document.querySelectorAll(".filter-chip")];

let currentFilter = "all";
let selectedId = cases[0].id;

function renderCaseList() {
  const filteredCases = cases.filter((entry) => currentFilter === "all" || entry.tags.includes(currentFilter));

  if (!filteredCases.some((entry) => entry.id === selectedId)) {
    selectedId = filteredCases[0]?.id ?? cases[0].id;
  }

  caseList.innerHTML = filteredCases.map((entry) => {
    const isActive = entry.id === selectedId;
    const visibleTags = entry.context === "Academic research"
      ? entry.tags.filter((tag) => tag !== "academic")
      : entry.tags;

    return `
      <button class="case-card ${isActive ? "is-active" : ""}" type="button" data-id="${entry.id}">
        <div class="case-card-top">
          <span class="case-context-pill">${entry.context}</span>
          <span>${entry.year}</span>
        </div>
        <h3>${entry.title}</h3>
        <p>${entry.short}</p>
        <div class="case-tags">
          ${visibleTags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".case-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.id;
      renderCaseList();
      renderCasePanel();
    });
  });
}

function renderCasePanel() {
  const activeCase = cases.find((entry) => entry.id === selectedId) ?? cases[0];
  caseTitle.textContent = activeCase.title;
  caseSummary.textContent = activeCase.short;
  const articleLinks = (activeCase.articleLinks ?? []).map((link) =>
    `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
  ).join("");
  caseArticle.innerHTML = `
    <span class="article-title">${activeCase.article}</span>
    ${articleLinks ? `<span class="article-links">${articleLinks}</span>` : ""}
  `;
  caseContext.textContent = activeCase.context;
  caseRole.textContent = activeCase.role;
  caseMethods.textContent = activeCase.methods;
  caseProblem.textContent = activeCase.problem;
  caseResults.innerHTML = activeCase.results.map((item) => `<li>${item}</li>`).join("");
  caseImpact.innerHTML = activeCase.impact.map((item) => `<li>${item}</li>`).join("");

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

renderCaseList();
renderCasePanel();
