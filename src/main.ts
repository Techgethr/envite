import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Root element "#app" not found')
}

app.innerHTML = `
  <div class="envite-root">
    <header class="envite-header">
      <div class="envite-header-inner">
        <div class="envite-logo">Envite</div>
        <nav class="envite-nav">
          <a href="#home">Home</a>
          <a href="#markets">Markets</a>
          <a href="#how-it-works">How it works</a>
          <a href="#canton">Canton network</a>
          <a href="#use-cases">Use cases</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div class="envite-header-cta">
          <button class="btn-outline">Sign in</button>
          <button class="btn-primary">Launch mock dApp</button>
        </div>
      </div>
    </header>

    <main>
      <section id="home" class="section hero">
        <div class="section-inner hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">On-chain financial prediction markets</p>
            <h1>Price macro, corporate events and policy in real time.</h1>
            <p class="subtitle">
              Envite is a concept platform for tokenized prediction markets on interest rates, inflation,
              FX, commodities, corporate events and economic policy outcomes, built on the Canton network.
            </p>
            <div class="hero-actions">
              <button class="btn-primary">Explore markets (mock)</button>
              <button class="btn-ghost">View product deck</button>
            </div>
            <div class="hero-footnote">
              This is a non-production mockup for design and discovery purposes only. No real trading or assets.
            </div>
          </div>

          <div class="hero-panel">
            <div class="panel-header">
              <span>Live macro sentiment</span>
              <span class="badge">Demo data</span>
            </div>
            <div class="panel-body">
              <div class="metric-row">
                <div>
                  <div class="metric-label">Fed funds rate – Dec 2025</div>
                  <div class="metric-sub">Will the target range be above 5.00%?</div>
                </div>
                <div class="metric-values">
                  <span class="metric-price up">64.3%</span>
                  <span class="metric-tag">Yes</span>
                </div>
              </div>
              <div class="metric-row">
                <div>
                  <div class="metric-label">US CPI YoY – Q2 2026</div>
                  <div class="metric-sub">Will inflation be below 2.5%?</div>
                </div>
                <div class="metric-values">
                  <span class="metric-price down">41.8%</span>
                  <span class="metric-tag">Yes</span>
                </div>
              </div>
              <div class="metric-row">
                <div>
                  <div class="metric-label">EUR / USD – year-end 2025</div>
                  <div class="metric-sub">Will EUR trade above 1.15?</div>
                </div>
                <div class="metric-values">
                  <span class="metric-price up">52.1%</span>
                  <span class="metric-tag">Yes</span>
                </div>
              </div>
              <div class="metric-row">
                <div>
                  <div class="metric-label">WTI crude – Q1 2026</div>
                  <div class="metric-sub">Will WTI close above $100?</div>
                </div>
                <div class="metric-values">
                  <span class="metric-price">27.4%</span>
                  <span class="metric-tag">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="markets" class="section alt">
        <div class="section-inner">
          <header class="section-header">
            <h2>Markets across macro, corporate and policy risk.</h2>
            <p>
              Envite aggregates tokenized markets around the key questions that drive institutional portfolios.
              Every market is a simple, binary or multi-outcome claim that settles against transparent data feeds.
            </p>
          </header>

          <div class="grid-3">
            <article class="card">
              <h3>Interest rate curves</h3>
              <p>
                Structure markets around policy meetings, terminal rates and yield curve shapes to express views
                on global monetary policy.
              </p>
              <ul class="card-list">
                <li>Central bank decisions (Fed, ECB, BoE, LatAm)</li>
                <li>Yield-curve steepening vs. flattening</li>
                <li>Forward rate cut / hike probabilities</li>
              </ul>
            </article>

            <article class="card">
              <h3>Inflation & growth</h3>
              <p>
                Price the path of inflation and real activity with markets tied to CPI, PPI, GDP growth and labor
                data.
              </p>
              <ul class="card-list">
                <li>Headline and core CPI surprise ranges</li>
                <li>GDP growth bands after reforms or shocks</li>
                <li>Unemployment and wage inflation prints</li>
              </ul>
            </article>

            <article class="card">
              <h3>FX & commodities</h3>
              <p>
                Turn qualitative macro narratives into quantifiable positions on FX crosses, energy and metals.
              </p>
              <ul class="card-list">
                <li>FX levels at quarter or year-end</li>
                <li>Commodity price corridors and tails</li>
                <li>Event-linked commodity scenarios</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="how-it-works" class="section">
        <div class="section-inner">
          <header class="section-header narrow">
            <h2>How Envite would work.</h2>
            <p>
              Envite is a design prototype showing how regulated financial institutions could use a permissioned
              blockchain like Canton to issue, trade and settle tokenized prediction instruments.
            </p>
          </header>

          <ol class="steps">
            <li>
              <h3>1. Design the economic question</h3>
              <p>
                A sponsor defines a precise, observable financial or policy outcome (for example,
                “Will the 10Y government bond yield close above 4.5% on 30 June 2026?”).
              </p>
            </li>
            <li>
              <h3>2. Tokenize the market on Canton</h3>
              <p>
                Smart contracts on Canton represent the market, its possible outcomes and payoff logic. Access
                controls and participant identities are enforced at the protocol level.
              </p>
            </li>
            <li>
              <h3>3. Price discovery and secondary trading</h3>
              <p>
                Authorized participants trade outcome tokens through an order-book or automated market maker, with
                prices evolving as new information arrives.
              </p>
            </li>
            <li>
              <h3>4. Data-driven settlement</h3>
              <p>
                Upon event maturity, an off-chain oracle or institutional data provider publishes the reference
                data. The Canton contract settles winning tokens and updates balances atomically.
              </p>
            </li>
            <li>
              <h3>5. Post-trade analytics</h3>
              <p>
                Market-implied probabilities, time series and liquidity metrics can be streamed into risk,
                research and policymaking dashboards.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section id="canton" class="section alt">
        <div class="section-inner canton-layout">
          <div>
            <header class="section-header">
              <h2>Why Canton for institutional prediction markets?</h2>
              <p>
                Canton combines the benefits of blockchain with the privacy, control and interoperability that
                financial institutions require.
              </p>
            </header>

            <ul class="pill-list">
              <li><strong>Privacy-aware</strong> – only involved parties see sensitive trade details.</li>
              <li><strong>Compliant by design</strong> – identity and access layers align with regulated workflows.</li>
              <li><strong>Composable finance</strong> – markets can settle into tokenized cash, bonds or funds.</li>
              <li><strong>Deterministic settlement</strong> – atomic updates across multiple contracts and ledgers.</li>
            </ul>
          </div>

          <div class="card canton-card">
            <h3>Example flow on Canton</h3>
            <ol class="card-list numbered">
              <li>Issuer deploys a “Fed Decision – March 2026” market contract.</li>
              <li>Participants receive whitelisted access and permissioned wallets.</li>
              <li>Outcome tokens (e.g. “Hike”, “Hold”, “Cut”) are allocated and traded.</li>
              <li>On decision date, an oracle publishes the official rate decision.</li>
              <li>Contract settles winning outcome tokens into tokenized cash.</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="use-cases" class="section">
        <div class="section-inner">
          <header class="section-header">
            <h2>Use cases: corporate events and public policy.</h2>
            <p>
              Beyond macro data, Envite showcases how markets could be structured around tokenized corporate and
              policy events.
            </p>
          </header>

          <div class="grid-2">
            <article class="card">
              <h3>Tokenized corporate event markets</h3>
              <p>
                Capture consensus around strategic decisions and milestones for listed or private companies.
              </p>
              <ul class="card-list">
                <li>Mergers, acquisitions and regulatory approvals</li>
                <li>Quarterly earnings surprise bands</li>
                <li>Product launch timelines and adoption milestones</li>
                <li>Credit events and rating changes</li>
              </ul>
              <p class="card-footnote">
                Outcomes could be used by issuers, investors and analysts as an additional forward-looking signal.
              </p>
            </article>

            <article class="card">
              <h3>Economic public policy markets</h3>
              <p>
                Design markets around the realized impact of fiscal or regulatory reforms on growth and inflation.
              </p>
              <ul class="card-list">
                <li>GDP growth bands following tax or labor reforms</li>
                <li>Public investment programs and completion milestones</li>
                <li>Effect of policy changes on unemployment or inequality</li>
              </ul>
              <p class="card-footnote">
                Policymakers could use these signals as a real-time complement to surveys and model outputs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" class="section alt">
        <div class="section-inner">
          <header class="section-header narrow">
            <h2>Frequently asked questions.</h2>
            <p>This page is an illustrative mockup. The answers below describe how a future platform could work.</p>
          </header>

          <div class="faq-grid">
            <div class="faq-item">
              <h3>Is Envite live today?</h3>
              <p>
                No. Envite is a conceptual design exploring how financial prediction markets could operate on
                Canton. It does not support real trading, real assets or connectivity to production infrastructure.
              </p>
            </div>

            <div class="faq-item">
              <h3>Who would be allowed to participate?</h3>
              <p>
                In a production environment, participation would be limited to regulated institutions and
                accredited clients, with onboarding and KYC handled by licensed entities.
              </p>
            </div>

            <div class="faq-item">
              <h3>Where do payoffs come from?</h3>
              <p>
                In a full implementation, outcome tokens would be settled against tokenized cash or collateral held
                on Canton, with risk and margin frameworks aligned with existing market infrastructure.
              </p>
            </div>

            <div class="faq-item">
              <h3>How are data and oracles handled?</h3>
              <p>
                Settlement would rely on high-quality data providers (for example, central bank releases, official
                statistics agencies or vetted financial data vendors) integrated as oracles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="envite-footer">
      <div class="section-inner footer-inner">
        <div>
          <div class="envite-logo">Envite</div>
          <p class="footer-copy">
            Concept interface for institutional-grade prediction markets on the Canton network.
          </p>
        </div>
        <div class="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#markets">Markets</a>
            <a href="#how-it-works">How it works</a>
            <a href="#use-cases">Use cases</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#faq">FAQ</a>
            <a href="#">Canton network</a>
            <a href="#">Design notes</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Demo only – not an offer to sell or solicit any financial instrument.</span>
      </div>
    </footer>
  </div>
`
