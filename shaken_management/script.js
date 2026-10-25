/* Sen Sulu – Strategic Analysis. All content comes from the team's source files. Edit the DATA block to change text. */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const mu = t => t.replace(/\[[^\]]*\]/g, m => `<span class="mu">${m}</span>`); // mute [placeholders]

/* ================= DATA ================= */
const SWOT = {
  lead: "The SWOT analysis evaluates Sen Sulu's internal capabilities and limitations alongside external market opportunities and threats, based on official company information, industry research, and survey data from 152 university respondents (October 2026).",
  q: {
    Strengths: { i: ["S1. International distribution across 11 countries", "S2. Diversified decorative cosmetics portfolio", "S3. Strong brand recognition among surveyed students (96.1%)"], t: "Established in Astana in 2023, Sen Sulu has expanded to 11 countries and developed retail partnerships across Kazakhstan (Sen Sulu, n.d.-a). Its diverse cosmetics portfolio strengthens its market positioning (Sen Sulu, n.d.-b). A survey of 152 university students also revealed 96.1% brand awareness and 49.3% previous purchases (Student Research Group, 2026)." },
    Weaknesses: { i: ["W1. Limited operating history since 2023", "W2. Product concentration in decorative cosmetics", "W3. Potential purchase-conversion gap (46.7% aware but never purchased)"], t: "Sen Sulu's short operating history and focus on decorative cosmetics may limit its experience and product diversification. Additionally, 46.7% of surveyed students knew the brand but had never purchased, while 53.3% identified discounts or affordable prices as purchase incentives (Student Research Group, 2026)." },
    Opportunities: { i: ["O1. Growth of Kazakhstan's beauty market", "O2. Social media discovery (TikTok: 79.6%)", "O3. Consumer demand for quality (77%) and ingredient transparency"], t: "Kazakhstan's growing beauty market and expanding digital retail offer opportunities (Euromonitor International, 2026). 79.6% discover cosmetics through TikTok and 53.9% through Instagram, while 77% prioritize quality and 52% consider ingredients important (Student Research Group, 2026)." },
    Threats: { i: ["T1. Strong international and Asian brand competition", "T2. Consumer price sensitivity (39.5%)", "T3. Potential currency and import-related risks"], t: "Competition from established international and Asian brands creates pressure (Euromonitor International, 2026). 39.5% of surveyed students consider price an important purchasing factor (Student Research Group, 2026). Exchange-rate fluctuations and rising import costs may also pose risks (Overview of the Kazakhstan Market for Perfumery and Cosmetic Products, 2025)." }
  },
  impl: "Sen Sulu's international presence, product variety, and brand recognition provide a strong foundation for growth. However, competitive pressure and potential purchase-conversion challenges highlight the need for differentiation. Strengthening product-quality communication, digital engagement, and targeted promotions could improve its competitive position."
};
const PORTER = [
  ["Threat of new entrants", "High", "Local decorative production is only 2–6 tonnes a year (BusinesStat, 2025), so brands can enter by importing finished products. Marketplace spending on cosmetics grew from 54.8 to 106.6 billion tenge in 2022–2024 (EC[ON]OMY, 2026), and 79.6% of surveyed students discover cosmetics on TikTok (Student Research Group, 2026). Sen Sulu itself launched only in 2023 (Sen Sulu, n.d.-a).", "Low barriers mean new rivals can appear quickly. Sen Sulu must defend itself with hero products and trust, not with scale."],
  ["Bargaining power of suppliers", "Medium (E)", "Because local production is tiny, inputs and finished goods are largely imported, so costs depend on exchange rates and import conditions (Overview of the Kazakhstan Market for Perfumery and Cosmetic Products, 2025). Sen Sulu's own supplier base is not publicly disclosed, so this rating is an assumption until the team verifies where the products are made.", "Reduce dependence on a single supplier and keep a margin buffer against currency shocks."],
  ["Bargaining power of buyers", "High", "Switching costs are close to zero. 39.5% of respondents consider price important, 53.3% name discounts or affordable prices as a purchase incentive, and 46.7% know the brand but have never bought it (Student Research Group, 2026). Buyers under 29 make 63% of online purchases (EC[ON]OMY, 2026).", "Give buyers reasons beyond price: a bundle, visible ingredient information and honest reviews."],
  ["Threat of substitutes", "Medium (E)", "Shoppers can trade down to multifunctional products (42%) and natural-look routines (77% of buyers) (The Steppe, 2025). Skincare-only routines or salon services (for example, brow treatments) can replace some makeup; this last point is the team's assessment.", "Multifunctional hero products (a brow gel, a mineral powder) protect Sen Sulu against trading down."],
  ["Competitive rivalry", "High", "About US$281 million in 2024, forecast at US$353 million by 2029, a 4.7% yearly growth rate (Statista, 2024); another provider reports a 13.1% fall to US$222 million in 2024 (IndexBox, 2025). Russia supplies more than a third of beauty imports (RIA Novosti, 2025), premium products hold 18% of online beauty sales, and only 24.5% use Kazakh-made cosmetics (The Steppe, 2025). Sen Sulu sells in the accessible segment (mascara 4,800, brow gel wax 4,200, eye sparkles 5,200 tenge; Sen Sulu, n.d.-b).", "Sen Sulu should not fight on every front. It should concentrate on the one line where it already leads, Brows."]
];
const PORTER_ALL = "Three of the five forces (new entrants, buyers and rivalry) are rated High and two (suppliers and substitutes) Medium, so the industry is moderately unattractive for a small brand. Pressure from all three high forces converges on price and trust. This agrees with the SWOT (T1, T2, W3) and with the BCG matrix, which shows only one Star. Sen Sulu should compete through differentiation rather than a price war: a hero product, transparent ingredient information and a small, capped promotion.";
const BCG = {
  text: [["Market context", "Kazakhstan's decorative cosmetics market was about US$281 million in 2024 and is forecast to reach US$353 million by 2029 (CAGR 4.7%) (Statista, 2024), inside a beauty market of roughly US$2.15 billion in 2025 (The Steppe, 2025). Marketplace spending on cosmetics grew from 54.8 to 106.6 billion tenge in 2022–2024, and buyers under 29 make 63% of purchases (EC[ON]OMY, 2026). Demand favours natural-look (77% of buyers) and multifunctional (42%) makeup, and only 24.5% of respondents use Kazakh-made cosmetics (The Steppe, 2025). Local production is tiny, 2–6 tonnes a year (BusinesStat, 2025), so the market is import-led. Another provider reports a 13.1% fall to US$222 million in 2024 (IndexBox, 2025)."],
    ["Competition and positioning", "Russia supplies more than a third of Kazakhstan's beauty imports (RIA Novosti, 2025), and premium products hold 18% of online beauty sales (The Steppe, 2025). Sen Sulu competes in the accessible segment: mascara at 4,800 tenge, brow gel wax at 4,200 tenge and eye sparkles at 5,200 tenge (Sen Sulu, n.d.)."],
    ["Method", "Sen Sulu sells only decorative cosmetics, so its business lines are four product groups. The growth cut-off is the official 4.7% market CAGR; the share cut-off is a relative share of 1.0 against the strongest competitor in each group. No source publishes segment growth or Sen Sulu sales, so values marked (E) are team estimates."]],
  g: [["Brows", "brow gel, brow pencil", 12, 1.2, "Star", "The brow gel is the brand's breakout product (WeProject, n.d.); growth is above the market and share leads the niche. Keep investing to defend it."],
    ["Face", "mineral powder, concealer, blush", 7, 0.2, "Question Mark", "The largest pool and fits the natural, multifunctional trend, but share is small: back one or two hero products (mineral powder, concealer)."],
    ["Lips", "gloss, lip liner", 6, 0.15, "Question Mark", "A weaker Question Mark with growth barely above the market."],
    ["Eyes", "mascara, eyeshadow, sparkles", 4, 0.1, "Dog", "Slow growth and low share: limit SKUs and do not invest."]],
  int: "Brows are the Star and should turn into the Cash Cow that funds other lines. Face is the largest pool, but share is small, so back one or two hero products instead of the whole range. Lips are a weaker Question Mark. Eyes are a Dog. The matrix shows one strong line and a dependence on it."
};
const REC = {
  action: "Launch a six-month, TikTok-led “Brow + Face” hero starter set that pairs Sen Sulu's best-selling brow gel with one Face hero product, the mineral powder. The set is sold at about 13% below the separate prices (about 8,000 tenge against roughly 9,200; the powder price is an estimate) and is supported by 15 micro-influencer reviews and short ingredient-transparency videos for both products. Eyes and Lips receive no new investment.",
  how: "Each set contains a full-size brow gel and a mineral powder in a compact starter size, packaged so that it can be gifted. It is sold on Sen Sulu's own site and marketplaces first, where under-29 buyers are concentrated, and then in partner stores. Creators show the set in a short “everyday natural look” routine, and each video links to a page that lists ingredients and skin compatibility. This makes the brow gel the entry point and gives the powder a first trial at a lower price.",
  why: "The BCG matrix shows that Brows is the only Star, while Face is the largest pool yet a Question Mark with a relative share of only about 0.2 (E). Attaching a Face hero to the Star's existing pull is the cheapest way to build share. Awareness is already 96.1% (S3), so the problem is conversion: 46.7% know the brand but have never bought (W3), and 53.3% name discounts or affordable prices as an incentive (Student Research Group, 2026). A discounted set answers this and addresses price sensitivity (T2, 39.5%). TikTok is the main discovery channel (79.6%, O2), and 77% prioritize quality while 52% consider ingredients important (O3). Online is the fastest-growing channel, and buyers under 29 make 63% of purchases (EC[ON]OMY, 2026). A November start puts the set in market before New Year gifting and the 8 March peak.",
  cost: "The pilot costs an estimated 4.6 million tenge, about 38% of the expected set revenue of roughly 12 million tenge (1,500 sets at 8,000 tenge).",
  budget: [["15 micro-influencer reviews", "800,000", "Months 2–3"], ["Paid TikTok/Instagram boosting", "1,000,000", "Months 2–4"], ["Starter-set packaging (1,500 sets)", "700,000", "Month 1"], ["Bundle discount funding (~1,200 per set)", "1,800,000", "Months 2–5"], ["Ingredient and quality content", "300,000", "Month 1"], ["Total", "4,600,000", "Nov 2026 – Apr 2027"]],
  tl: [["Month 1", "Nov 2026", "Choose powder shades, verify ingredient information, prepare packaging, sign creators"], ["Month 2", "", "Launch the set before New Year"], ["Month 3", "", "Scale the best-performing videos"], ["Month 4", "", "Scale the best-performing videos"], ["Month 5", "", "8 March push"], ["Month 6", "Apr 2027", "Review results and repeat the poll"]],
  risks: [["(1) Discount-driven one-time buyers", "Students are price-sensitive, so the offer may attract bargain buyers who never return and erode margin. The set is therefore capped at 1,500 units, repeat purchases are tracked by promo code, and paid spending stops if fewer than 500 sets sell by Month 3."], ["(2) Credibility of quality claims and influencer dependence", "An exaggerated ingredient claim or a poorly chosen creator could damage trust. Only verified ingredient information will be published, creators will be briefed in writing and will disclose the partnership, and selection will favor audiences under 29."]],
  kpi: ["At least 1,500 sets sold", "At least 25% of set buyers purchasing another Sen Sulu product within 90 days", "Share who know the brand but have never bought falling from 46.7% to 35% or lower (repeat poll, 150+ students)", "Face moving from about 7% growth and 0.2 relative share to at least 12% and 0.3"],
  concl: "This report analysed Sen Sulu with SWOT, Porter's Five Forces and the BCG matrix. The SWOT shows high awareness (96.1% of 152 respondents) but a conversion gap: 46.7% know the brand and have never bought it. Porter's analysis rates new entrants, buyers and rivalry as High, so price and trust decide the competition. The BCG matrix shows one Star (Brows), two Question Marks (Face, Lips) and one Dog (Eyes). Together, these results lead to one recommendation: a six-month, TikTok-led “Brow + Face” starter set, capped at 1,500 units, with an estimated budget of 4.6 million tenge, a stop rule and four success indicators.",
  lim: "Sen Sulu is a private company without public financial statements; the BCG growth and share values and the set economics are team estimates (E); and the survey is a convenience sample of 152 respondents, so its results should not be generalised to all Kazakhstani consumers."
};
const REFS = [
  "BES.media. (2026). <i>Не то лицо выбрали: Sen Sulu массово атакуют из-за рекламы с Валей Карнавал</i> [The wrong face was chosen: Sen Sulu is under mass attack over an advert with Valya Karnaval]. <a href=\"https://bes.media/news/ne-to-litso-vibrali-sen-sulu-massovo-atakuyut-iz-za-reklami-s-valey-karnaval/\">bes.media</a>",
  "BusinesStat. (2025). <i>[Title of the report on Kazakhstan's cosmetics production]</i>. [URL]",
  "EC[ON]OMY. (2026). <i>[Article title]</i>. [URL]",
  "Euromonitor International. (2026). <i>Colour cosmetics in Kazakhstan</i> [Market report]. <a href=\"https://www.euromonitor.com/colour-cosmetics-in-kazakhstan/report\">euromonitor.com</a>",
  "IndexBox. (2025). <i>[Report title]</i>. [URL]",
  "[Author or organisation]. (2025). <i>Overview of the Kazakhstan market for perfumery and cosmetic products</i>. [Publisher/URL]",
  "RIA Novosti. (2025). <i>[Article title]</i>. [URL]",
  "Sen Sulu. (n.d.-a). <i>About</i>. <a href=\"https://sen-sulu.com/about\">sen-sulu.com/about</a>",
  "Sen Sulu. (n.d.-b). <i>[Product catalogue page used for prices]</i>. [URL; add date accessed if the prices may change]",
  "Statista. (2024). <i>[Title of the decorative cosmetics market page]</i>. <a href=\"https://www.statista.com/outlook/cmo/beauty-personal-care/kazakhstan\">statista.com</a>",
  "Student Research Group. (2026). <i>Sen Sulu brand awareness survey</i> (N = 152) [Unpublished raw data].",
  "The Steppe. (2025). <i>[Article title]</i>. [URL]",
  "WeProject. (n.d.). <i>10 Kazakhstani brands that became absolute hits</i>. <a href=\"https://weproject.media/en/articles/detail/10-kazakhstani-brands-that-became-absolute-hits/\">weproject.media</a>"
];
const REFS_NOTE = "Source-type check for the team: the brief limits the number of websites and requires at least two primary sources. News and media sites in this list: Sen Sulu (official website), WeProject, BES.media, EC[ON]OMY, The Steppe, RIA Novosti. This is more than three, so ask the instructor how reports (Statista, Euromonitor, BusinesStat, IndexBox) and company websites are counted. The survey is the team's own primary data; ask whether it is accepted as a primary source.";
const N = "No (to check)", NA = "Not applicable";
const AP_A = [["ID", "Section", "Claim", "Evidence (number / fact)", "Source", "Type", "Verified in original?"],
  ["A01", "Overview", "Founding", "Founded in Astana in 2023 by Ainur Kabeldinova", "Sen Sulu (n.d.-a)", "S", N],
  ["A02", "Overview, SWOT S1", "Geographic reach", "Sold across Kazakhstan and in 10 other countries (11 in total); the company's own claim", "Sen Sulu (n.d.-a); BES.media (2026)", "S", N],
  ["A03", "SWOT S3, W3", "Awareness and conversion", "96.1% aware, 49.3% purchased, 46.7% aware but never purchased (N = 152)", "Student Research Group (2026)", "P", "No (recalculate with COUNTIF on all 152 rows)"],
  ["A04", "SWOT O2", "Discovery channels", "TikTok 79.6%, Instagram 53.9%", "Student Research Group (2026)", "P", N],
  ["A05", "SWOT O3, T2", "Purchase factors", "Quality 77%, ingredients 52%, price 39.5% (multi-select)", "Student Research Group (2026)", "P", N],
  ["A06", "SWOT W3, Rec.", "Incentives", "53.3% name discounts or affordable prices; define the base (all respondents or non-buyers only)", "Student Research Group (2026)", "P", "No (define the base)"],
  ["A07", "SWOT O1, T1", "Market growth and competition", "Growing beauty market; strong international and Asian competition", "Euromonitor International (2026)", "S", "No (paywalled; read the page)"],
  ["A08", "SWOT T3, Porter", "Currency and import risk", "Exchange-rate and import-cost exposure; assumption until the supplier base is verified", "Overview of the Kazakhstan Market for Perfumery and Cosmetic Products (2025)", "S / E", N],
  ["A09", "BCG, Porter", "Market size and growth", "Decorative cosmetics about US$281 m (2024) to US$353 m (2029); 4.7% yearly growth", "Statista (2024)", "S", N],
  ["A10", "BCG", "Conflicting estimate", "A 13.1% fall to US$222 m in 2024", "IndexBox (2025)", "S", N],
  ["A11", "BCG", "Beauty market size", "About US$2.15 bn in 2025", "The Steppe (2025)", "S", N],
  ["A12", "BCG, Porter", "Online channel growth", "Marketplace spending on cosmetics 54.8 to 106.6 bn tenge in 2022–2024 (about 39% a year)", "Bureau of National Statistics via EC[ON]OMY (2026)", "S", N],
  ["A13", "BCG, Rec., Porter", "Young buyers", "Buyers under 29 make 63% of online purchases", "EC[ON]OMY (2026)", "S", N],
  ["A14", "BCG, Porter", "Consumer trends", "Natural-look 77% of buyers; multifunctional 42%; 24.5% use Kazakh-made cosmetics. Note: the survey also has a 77% for quality; do not mix them up", "The Steppe (2025)", "S", N],
  ["A15", "BCG, Porter", "Local production", "2–6 tonnes a year in 2020–2024", "BusinesStat (2025)", "S", N],
  ["A16", "BCG, Porter", "Import dependence", "Russia supplies more than a third of beauty imports", "RIA Novosti (2025)", "S", N],
  ["A17", "BCG, Porter", "Premium share", "Premium products hold 18% of online beauty sales", "The Steppe (2025)", "S", N],
  ["A18", "BCG, Porter", "Sen Sulu prices", "Mascara 4,800; brow gel wax 4,200; eye sparkles 5,200 tenge", "Sen Sulu (n.d.-b)", "S", "No (check date of prices)"],
  ["A19", "BCG", "Breakout product", "Brow gel is the brand's breakout product", "WeProject (n.d.)", "S", N],
  ["A20", "BCG", "Segment growth and share", "Brows ~12% / 1.2; Face ~7% / 0.2; Lips ~6% / 0.15; Eyes ~4% / 0.1", "Team estimates, method in Section 4", "E", NA + " (estimate)"],
  ["A21", "Porter", "Force ratings", "Entrants High; suppliers Medium; buyers High; substitutes Medium; rivalry High", "Team assessment based on A03–A18", "E", NA + " (assessment)"],
  ["A22", "Rec.", "Set price", "About 8,000 tenge vs about 9,200 separately (about 13% lower); the powder price is an estimate", "Sen Sulu (n.d.-b) plus team estimate", "E", "No (check brow gel price)"],
  ["A23", "Rec.", "Budget and revenue", "4.6 m tenge cost; 1,500 sets × 8,000 = 12 m tenge; cost is about 38% of revenue", "Team estimates", "E", NA + " (estimate)"],
  ["A24", "Rec.", "Success targets and stop rule", "1,500 sets; 25% repeat in 90 days; 46.7% to 35% or lower; Face 7% to 12% growth and 0.2 to 0.3 share; stop if fewer than 500 sets by Month 3", "Team targets", "E", NA + " (targets)"]];
const AP_B = [["Tool and date", "Key prompt (short)", "What the AI got wrong or missed", "What the group changed or added"],
  ["Claude (Anthropic), 22–24 Oct 2026", "“Describe everything that must be done in the project brief”", "A summary can miss details, so it must be checked against the original brief", "[Team: confirmed requirements against the original brief]"],
  ["Claude, Oct 2026", "“Find information about Sen Sulu”", "Search results mixed Sen Sulu with other businesses; these were excluded. It could not open paywalled sources, so it could not verify figures", "[Team: checked the facts on the official website and added sources]"],
  ["Claude, Oct 2026", "“Review our SWOT draft and survey sheet”", "Saw only the first 99 of 152 survey rows. Pointed out an unclear base for the 53.3% figure, multi-select answers in a “choose two” question, an overlap between S2 and W2, and possible mixing of two different 77% figures", "[Team: recalculated the survey percentages on all 152 rows and fixed the wording]"],
  ["Claude, Oct 2026", "“Write Porter's Five Forces from our SWOT, BCG and recommendation”", "Added no new data. The ratings are judgments, and the supplier-power rating assumes imported inputs that are not yet verified", "[Adilzhan and team: reviewed the ratings and added or checked evidence]"],
  ["Claude, Oct 2026", "“Write references, appendices, conclusion, slides and speaker script”", "Could not find titles or URLs for several sources (marked in brackets); marked every item in Appendix A as not yet verified", "[Team: completed the references and verified each source]"]];
const AP_C = [["Participant", "What they did", "Contribution (%)"],
  ["Malika", "Company Overview; Conclusion; References; compiling Appendices A–C; [survey work, pitch parts]", "[__]%"],
  ["Anelya", "SWOT analysis; [survey work, pitch parts]", "[__]%"],
  ["Adilzhan", "Porter's Five Forces [confirm what was written, reviewed or edited by Adilzhan]; [pitch parts]", "[__]%"],
  ["Ulpan", "BCG matrix; [pitch parts]", "[__]%"],
  ["Shaken", "Strategic recommendation; [pitch parts]", "[__]%"]];

/* ================= RENDER HELPERS ================= */
const table = (rows, el, fmt = (c, j) => mu(c)) => {
  el.innerHTML = `<thead><tr>${rows[0].map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.slice(1).map(r => `<tr>${r.map((c, j) => `<td>${fmt(c, j, r)}</td>`).join("")}</tr>`).join("")}</tbody>`;
};

/* SWOT: click a quadrant to show its interpretation */
$("#swot-lead").textContent = SWOT.lead; $("#swot-impl").textContent = SWOT.impl;
$("#swot-grid").innerHTML = Object.entries(SWOT.q).map(([k, v]) => `<button class="card" data-k="${k}"><h3>${k} (${k[0]})</h3><ul>${v.i.map(x => `<li>${x}</li>`).join("")}</ul></button>`).join("");
const swotShow = k => { $$("#swot-grid .card").forEach(c => c.classList.toggle("pick", c.dataset.k === k)); $("#swot-panel").innerHTML = `<h3>${k}</h3><p>${SWOT.q[k].t}</p>`; };
$$("#swot-grid .card").forEach(c => { c.onclick = c.onmouseenter = () => swotShow(c.dataset.k); }); swotShow("Strengths");

/* Porter: five blocks, click for evidence */
const order = [0, 1, 4, 2, 3]; // new entrants, suppliers, rivalry(center), buyers, substitutes
$("#porter-grid").innerHTML = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(p => { const m = { 1: 0, 3: 1, 4: 4, 5: 2, 7: 3 }[p]; return m === undefined ? "<div></div>" : `<button class="card ${m === 4 ? "center" : ""}" data-i="${m}"><h3>${PORTER[m][0]}</h3><span class="badge ${PORTER[m][1].split(" ")[0]}">${PORTER[m][1]}</span></button>`; }).join("");
const porterShow = i => { $$("#porter-grid .card").forEach(c => c.classList.toggle("pick", +c.dataset.i === i)); const f = PORTER[i]; $("#porter-panel").innerHTML = `<h3>${f[0]}: ${f[1]}</h3><p><b>Evidence.</b> ${f[2]}</p><p style="margin-top:10px"><b>Meaning for Sen Sulu.</b> ${f[3]}</p>`; };
$$("#porter-grid .card").forEach(c => c.onclick = () => porterShow(+c.dataset.i)); porterShow(4); $("#porter-all").textContent = PORTER_ALL;

/* BCG: bubble chart from the table values (x = relative share, log scale, high share on the left; y = growth) */
$("#bcg-text").innerHTML = BCG.text.map(([h, t]) => `<details ${h === "Method" ? "" : "open"}><summary>${h}</summary><p>${t}</p></details>`).join("");
const X = s => 380 - (60 + (Math.log10(s) + 1.2) / 1.5 * 300), Y = g => 285 - (g - 3) * 24, col = { Star: "#D4AF37", "Question Mark": "#1B3B2B", Dog: "#9a948a" };
$("#bcg-svg").innerHTML = `<rect x="20" y="20" width="360" height="280" fill="none" stroke="#D4AF37"/><line x1="${X(1)}" y1="20" x2="${X(1)}" y2="300" stroke="#D4AF37" stroke-dasharray="5"/><line x1="20" y1="${Y(4.7)}" x2="380" y2="${Y(4.7)}" stroke="#D4AF37" stroke-dasharray="5"/>
<text x="26" y="36" fill="#7a7467">Star</text><text x="${X(1) + 8}" y="36" fill="#7a7467">Question Mark</text><text x="26" y="294" fill="#7a7467">Cash Cow</text><text x="${X(1) + 8}" y="294" fill="#7a7467">Dog</text>
<text x="200" y="316" text-anchor="middle" fill="#7a7467">Relative share (E) →  lower</text>` + BCG.g.map((g, i) => `<g class="bub" data-i="${i}" tabindex="0"><circle cx="${X(g[3])}" cy="${Y(g[2])}" r="16" fill="${col[g[4]]}" fill-opacity=".85"/><text x="${X(g[3])}" y="${Y(g[2]) - 21}" text-anchor="middle" fill="#2A2A2A">${g[0]}</text></g>`).join("");
const bcgShow = i => { const g = BCG.g[i]; $("#bcg-panel").innerHTML = `<h3>${g[0]}: ${g[4]}</h3><p><b>Main products.</b> ${g[1]}</p><p><b>Growth (E)</b> ~${g[2]}% · <b>Rel. share (E)</b> ~${g[3]}</p><p style="margin-top:10px">${g[5]}</p>`; };
$$(".bub").forEach(b => { b.onclick = () => bcgShow(+b.dataset.i); b.onkeydown = e => e.key === "Enter" && bcgShow(+b.dataset.i); }); bcgShow(0);
table([["Product group", "Main products", "Growth (E)", "Rel. share (E)", "Quadrant"], ...BCG.g.map(g => [g[0], g[1], "~" + g[2] + "%", "~" + g[3], g[4]])], $("#bcg-table"), (c, j) => j === 4 ? `<span class="badge ${c.split(" ")[0]}">${c}</span>` : c);
$("#bcg-int").textContent = BCG.int;

/* Recommendations */
$("#rec").innerHTML = `<details open><summary>Recommended action</summary><p>${REC.action}</p></details><details><summary>How it works</summary><p>${REC.how}</p></details><details><summary>Why now</summary><p>${REC.why}</p></details>
<h3 style="margin-top:26px">Cost and timeline</h3><p class="lead">${REC.cost}</p><div class="tl">${REC.tl.map(t => `<div><b>${t[0]}${t[1] ? " · " + t[1] : ""}</b>${t[2]}</div>`).join("")}</div>
<p class="sub">Table 3. Estimated budget and timeline (E)</p><div class="tw"><table id="bud"></table></div>
<h3>Main risks</h3><div class="grid g2">${REC.risks.map(r => `<div class="card"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join("")}</div>
<h3 style="margin-top:26px">How success will be measured</h3><p class="sub">Reviewed in April 2027; all targets are team estimates.</p><div class="grid g3">${REC.kpi.map((k, i) => `<div class="card"><span class="tag">${i + 1}</span>${k}</div>`).join("")}</div>
<h3 style="margin-top:26px">Conclusion</h3><p class="lead">${REC.concl}</p><div class="note"><b>Limitations.</b> ${REC.lim}</div>`;
table(REC.budget.map((r, i) => i === 0 ? r : r), $("#bud"));
$("#bud").innerHTML = `<thead><tr><th>Cost item (E)</th><th>Cost (KZT)</th><th>Timing</th></tr></thead><tbody>${REC.budget.map((r, i) => `<tr>${r.map(c => `<td>${i === 5 ? "<b>" + c + "</b>" : c}</td>`).join("")}</tr>`).join("")}</tbody>`;

/* References */
$("#refs").innerHTML = REFS.map(r => `<li>${mu(r)}</li>`).join(""); $("#refs-note").textContent = REFS_NOTE;

/* Appendix A (search + type filter), B, C */
const ta = $("#ta"), fa = () => { const q = $("#q").value.toLowerCase(), t = $("#ty").value; table([AP_A[0], ...AP_A.slice(1).filter(r => (!q || r.join(" ").toLowerCase().includes(q)) && (!t || r[5].split(" / ").includes(t)))], ta, (c, j) => j === 6 ? `<span class="badge" style="background:${c.startsWith("No") ? "#f6e7b8" : "#e4e0d8"}">${c}</span>` : mu(c)); };
$("#q").oninput = $("#ty").onchange = fa; fa(); table(AP_B, $("#tb")); table(AP_C, $("#tc"));

/* Tabs: synced with the header dropdown and URL hash (#appendix-a/b/c) */
const tab = t => { $$("[data-p]").forEach(p => p.hidden = p.dataset.p !== t); $$(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.t === t)); };
$$(".tabs button").forEach(b => b.onclick = () => { tab(b.dataset.t); history.replaceState(null, "", "#appendix-" + b.dataset.t); });
const fromHash = () => { const m = location.hash.match(/^#appendix-([abc])$/); tab(m ? m[1] : "a"); if (m) $("#appendix-" + m[1]).scrollIntoView(); };
addEventListener("hashchange", fromHash); fromHash();

/* Header: burger, dropdown */
const nav = $("#nav"), dd = $(".dd");
$("#burger").onclick = e => { const o = nav.classList.toggle("open"); e.target.setAttribute("aria-expanded", o); };
$(".dd > button").onclick = () => { const o = dd.classList.toggle("open"); $(".dd > button").setAttribute("aria-expanded", o); };
$$("nav a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); dd.classList.remove("open"); }));
document.addEventListener("click", e => !dd.contains(e.target) && dd.classList.remove("open"));

/* Scroll: reveal sections + highlight the active menu item */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .08 });
$$(".rv").forEach(el => io.observe(el));
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const id = e.target.id; $$("nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + id)); dd.classList.toggle("on", id === "appendix"); } }), { rootMargin: "-40% 0px -55% 0px" });
$$("main section").forEach(s => spy.observe(s));

/* Hero: animated counters + mouse parallax for the ornament (off for touch and reduced motion) */
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
$$(".stat b").forEach(b => { const n = +b.dataset.n, s = b.dataset.s || "", d = n % 1 ? 1 : 0; if (still) return b.textContent = n + s; let t0; const step = t => { t0 ??= t; const p = Math.min((t - t0) / 1400, 1); b.textContent = (n * p).toFixed(d) + s; p < 1 && requestAnimationFrame(step); }; requestAnimationFrame(step); });
if (!still && matchMedia("(hover:hover)").matches) addEventListener("mousemove", e => { $("#orn").style.transform = `translate(${(e.clientX / innerWidth - .5) * -24}px,${(e.clientY / innerHeight - .5) * -24}px)`; });
