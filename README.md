## Envite – Canton-based Financial Prediction Market (mockup)

Envite is an institutional platform for **on‑chain financial prediction markets** on top of the **Canton** network.  
The goal of this project is to communicate the product vision, user flows and market structure – not to implement real trading.

---

### What the app shows

- **Landing / Home**
  - Hero section describing Envite as a venue to price **macro, corporate events and public policy** in real time.
  - A “Live macro sentiment” panel with markets on **rates, inflation, FX and commodities** to illustrate how market-implied probabilities are going to look.

- **Markets overview**
  - High‑level explanation of three main groups:
    - **Interest rate curves** (central bank decisions, yield curve shape, terminal rates).
    - **Inflation & growth** (CPI, GDP, labor market data).
    - **FX & commodities** (major FX crosses, energy, metals, agriculture).
  - Navigation chips that link to **dedicated category pages** with sample boards.

- **Category “pages” with mock order boards**
  - One focused page for each theme, with demo prices and volumes:
    - **Rates**, **Inflation & growth**, **FX**, **Commodities**, **Corporate events**, **Public policy**.
  - Each board uses tables with columns like _Market_, _Settlement_, _Yes price_ and _Volume (demo)_ to mimic a compact prediction‑market order board.

- **Voting flow per category**
  - In each category, at least one market has a **“Vote”** button that opens a full‑screen modal:
    - Lets the user pick **Yes / No**, set a **0–100% confidence slider**, and add an optional comment.
    - On submit, the UI shows a “thank you” message, but **nothing is persisted or transmitted** – it is purely illustrative UX.

- **How Envite would work (conceptually)**
  - Step‑by‑step narrative from **question design → tokenization on Canton → trading → oracle‑based settlement → analytics**.

- **Canton network section**
  - Explains why Canton is a good fit for institutional prediction markets: privacy, compliance‑ready identity, composable settlement with tokenized cash/bonds/funds, deterministic atomic updates.
  - Includes an example flow for a “Fed decision” market on Canton.

- **Use cases**
  - **Tokenized corporate events**: M&A, earnings surprises, product launches, rating changes.
  - **Economic public policy**: GDP growth after reforms, infrastructure execution, unemployment outcomes, etc.

- **FAQ**
  - Clarifies that Envite is **not a live product**, does **not** involve real assets or connectivity, and describes how a future regulated version could handle:
    - Participant onboarding and KYC.
    - Cash / collateral settlement.
    - Institutional data providers / oracles.

- **Contact**
  - `https://form.typeform.com/to/ZiXTJCnc`

---

### How to run the demo locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL in your browser.

---

### Opportunity space

- **Better pricing of macro and policy risk**
  - Turn qualitative narratives about rates, inflation, FX or reforms into explicit, tradable probabilities.
  - Provide risk managers and policymakers with **forward‑looking signals** that complement surveys and econometric models.

- **Tokenized corporate event surfaces**
  - Allow issuers, investors and analysts to observe real‑time market‑implied views on **M&A timelines, earnings outcomes and strategic announcements**.
  - Combine with tokenized equity/credit instruments on Canton to build richer multi‑asset strategies.

- **Regulated‑grade infra on Canton**
  - Use Canton’s **privacy, identity and composability** to build markets that are compatible with institutional standards (KYC, segregation of roles, auditability).
  - Enable atomic settlement between prediction markets and tokenized cash, repo, funds or bonds on the same network.

- **Data and analytics layer**
  - Export implied probabilities, volumes and time series from Envite‑style markets into **risk dashboards, research platforms or policy labs**.
  - Combine market‑implied paths with scenario analysis to stress‑test portfolios or public programs.


