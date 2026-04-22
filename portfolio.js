const cases = [
  {
    id: "driver-attention",
    title: "How Secondary Task Shapes Driver Attention and Workload",
    short: "A driving UX study on how self-paced versus system-paced tasks change workload, gaze behavior, and safer interaction timing.",
    year: "2024",
    context: "Automotive UX / high-stakes interaction",
    role: "Supervisor of a master's thesis in collaboration with Goethe University and BMW Research",
    methods: "Within-subject experiment, simulated driving, NASA TLX, eye tracking, AOI analysis",
    problem: "How do self-paced and system-paced non-driving tasks change driver workload, visual attention strategy, and interface timing requirements?",
    results: [
      "System-paced tasks led to higher perceived workload than self-paced tasks.",
      "Difficult tasks increased workload and reduced stable road monitoring.",
      "Higher workload was associated with more gaze switching and worse lane-keeping performance.",
      "Self-paced tasks supported longer, more controlled glances and better road monitoring."
    ],
    impact: [
      "Let users control pacing whenever possible in in-vehicle tasks.",
      "Avoid interruptive UI during cognitively demanding driving phases.",
      "Use workload and gaze patterns to inform adaptive interface timing."
    ],
    tags: ["ux", "attention", "applied"]
  },
  {
    id: "credit-card",
    title: "Improving Credit Card Communication: Grace Period Visualization Testing",
    short: "Comparative usability evaluation of three visualization approaches for explaining credit card grace periods.",
    year: "2020",
    context: "Fintech UX",
    role: "UX Researcher at MTS Bank, from study design to final recommendation",
    methods: "Comparative usability test, randomized exposure order, explanation accuracy, confusion mapping",
    problem: "Which visualization best explains how to use the Zero credit card without paying interest, and where do users still get confused?",
    results: [
      "Participants preferred familiar timeline-based formats.",
      "Low contrast and decorative icons increased confusion.",
      "People repeatedly asked for concrete examples to understand abstract rules.",
      "Terms like minimum payment and commission were often misunderstood."
    ],
    impact: [
      "Financial communication should privilege comprehension over visual novelty.",
      "Plain language and example-driven explanation reduce misunderstanding.",
      "Accessibility details like contrast and type size materially affect confidence."
    ],
    tags: ["ux", "applied"]
  },
  {
    id: "fashion-platforms",
    title: "Comparative UX Evaluation of Fashion E-commerce Platforms",
    short: "Heuristic and scenario-based analysis of Zara, Trendsbrands, and Lamoda in the Russian fashion e-commerce segment.",
    year: "2019",
    context: "E-commerce UX",
    role: "UX Researcher, test assignment",
    methods: "Heuristic review, scenario walkthrough, comparative scoring, feature documentation",
    problem: "Which fashion platform best supports realistic shopping behavior across navigation, filtering, preview, and checkout?",
    results: [
      "Lamoda performed best on navigation and quick purchase.",
      "Zara offered strong size recommendation but added friction through registration.",
      "Trendsbrands had good filtering but weaker information architecture.",
      "The comparison surfaced opportunities like guest checkout and outfit-based recommendations."
    ],
    impact: [
      "Fast checkout and strong preview behavior are decisive for fashion browsing.",
      "Persistent size profiles and outfit-based recommendations could increase relevance.",
      "Small registration frictions compound quickly in purchase flows."
    ],
    tags: ["ux", "applied"]
  },
  {
    id: "objects-in-pieces",
    title: "Objects in Pieces: How Memory Stores Objects",
    short: "Research on whether color and orientation are stored separately or as part of object-based representations.",
    year: "Academic research",
    context: "Visual working memory",
    role: "Academic researcher",
    methods: "Controlled experiments on color and orientation memory across object bindings",
    problem: "Do we store visual features such as color and orientation independently, or are they retained as whole object representations?",
    results: [
      "Color and orientation can be stored independently within the same object.",
      "Memory became less accurate when features belonged to separate objects.",
      "Object grouping shaped recall even when individual features remained dissociable."
    ],
    impact: [
      "Grouping related interface cues into one element can support memory.",
      "Feature variation does not always harm retention when object structure is coherent.",
      "Useful for information-dense UI where recall matters."
    ],
    tags: ["memory", "applied"]
  },
  {
    id: "depth-illusion",
    title: "Depth Illusion: Perceiving Multiple Objects at Various Depths",
    short: "Study of how size and distance cues alter ensemble perception of multiple objects.",
    year: "Academic research",
    context: "Perception research",
    role: "Academic researcher",
    methods: "Range estimation tasks, depth-cue manipulation, size-distance correlation testing",
    problem: "How does the visual system estimate size differences across groups of objects when depth cues and distance information are manipulated?",
    results: [
      "Participants overestimated size differences when larger objects appeared farther away.",
      "Perceived differences shrank when large objects were closer and small objects were farther.",
      "The recomputation happened automatically, without requiring attention."
    ],
    impact: [
      "Spatial interfaces should align depth cues with intended size judgments.",
      "Perceived scale can be influenced through layout and pseudo-depth.",
      "Relevant for immersive systems and dense visual storytelling."
    ],
    tags: ["attention", "memory", "applied"]
  },
  {
    id: "mixed-in-memory",
    title: "Mixed in Memory: How We Forget Which Object Did What",
    short: "Investigation of swap errors in working memory for real-world objects and changing states.",
    year: "Academic research",
    context: "Memory for real-world objects",
    role: "Academic researcher",
    methods: "Recall tasks with object identity, state changes, and location swaps",
    problem: "How does visual working memory represent real-world objects when identity, state, and location can all vary at once?",
    results: [
      "Participants often confused which object had which state.",
      "Swap errors grew when objects were similar but not identical.",
      "Identity and state appeared to be stored independently rather than as one bound whole."
    ],
    impact: [
      "Interfaces should not rely on subtle state differences between similar items.",
      "Clear differentiation reduces attribute confusion in operational systems.",
      "Supports design choices around labeling, spacing, and state visibility."
    ],
    tags: ["memory", "applied"]
  }
];

const caseList = document.querySelector("#case-list");
const caseTitle = document.querySelector("#case-title");
const caseSummary = document.querySelector("#case-summary");
const caseContext = document.querySelector("#case-context");
const caseRole = document.querySelector("#case-role");
const caseMethods = document.querySelector("#case-methods");
const caseProblem = document.querySelector("#case-problem");
const caseResults = document.querySelector("#case-results");
const caseImpact = document.querySelector("#case-impact");
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
    return `
      <button class="case-card ${isActive ? "is-active" : ""}" type="button" data-id="${entry.id}">
        <div class="case-card-top">
          <span class="case-context-pill">${entry.context}</span>
          <span>${entry.year}</span>
        </div>
        <h3>${entry.title}</h3>
        <p>${entry.short}</p>
        <div class="case-tags">
          ${entry.tags.map((tag) => `<span>${tag}</span>`).join("")}
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
  caseContext.textContent = activeCase.context;
  caseRole.textContent = activeCase.role;
  caseMethods.textContent = activeCase.methods;
  caseProblem.textContent = activeCase.problem;
  caseResults.innerHTML = activeCase.results.map((item) => `<li>${item}</li>`).join("");
  caseImpact.innerHTML = activeCase.impact.map((item) => `<li>${item}</li>`).join("");
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
