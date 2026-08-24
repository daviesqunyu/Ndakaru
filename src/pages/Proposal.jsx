import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './Proposal.css';

const IMG = (name) => `/img/${name}`;
const enc = (path) => path.split('/').map((p) => encodeURIComponent(p)).join('/');
const COVER = enc(IMG('IMAGE SHOWING OUR WORK FIELD BEING BRICKS BEING DRIED.jpeg'));
const PDF_URL = '/docs/Ndakaru-Emergency-Support-Proposal-2026.pdf';
const DOC_URL = '/docs/Ndakaru-Emergency-Support-Proposal-2026.docx';

export default function Proposal() {
  return (
    <div className="page-proposal proposal-wrap">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.construction})` }}>
        <div className="container">
          <h1>Official Proposal Document</h1>
          <p>Read our full funding proposal online — or download the official document below.</p>
        </div>
      </section>

      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.building})` }}>
        <div className="container">
          <article className="proposal-paper">
            <h1 className="doc-title">
              Emergency Support Proposal: Sustaining 25 Women &amp; Youth Jobs Through Ndakaru
              Community Brick Manufacturing Initiative
            </h1>
            <p className="doc-subtitle">Bungoma County, Kenya · March 2026</p>

            <img src={COVER} alt="Ndakaru brick field – bricks being dried in the sun" className="proposal-cover" loading="lazy" />

            <span className="proposal-label">Submitted to:</span>
            <p>Dr. Yvonne Thompson</p>

            <span className="proposal-label">Submitted by:</span>
            <p>Mildred Nasipuondi Wepukhulu<br />Founder – Ndakaru Bricks &amp; Construction</p>

            <span className="proposal-label">Location:</span>
            <p>Ndakaru Village, Sirisia Sub-County<br />Bungoma County, Kenya</p>

            <span className="proposal-label">Contact:</span>
            <p>
              Phone: +254 755 550 708 / +254 713 947 746<br />
              Email: mildredwepukhulu7@gmail.com<br />
              Website: https://ndakaru.vercel.app/
            </p>

            <h2>1. Executive Summary</h2>
            <p>Ndakaru Bricks &amp; Construction is a community-based brick manufacturing and construction initiative located in Ndakaru Village, Sirisia Sub-County, Bungoma County, Kenya. The initiative was established in June 2024 to address unemployment among women and youth while providing affordable and durable construction materials for local housing, schools, and small businesses.</p>
            <p>Currently, the project employs 25 individuals (10 women and 15 youth) who earn daily wages through brick production and construction support work. The initiative uses locally sourced soil and manual brick presses to produce environmentally friendly bricks used across Bungoma County.</p>
            <p>Since its establishment, Ndakaru Bricks &amp; Construction has successfully supplied bricks for over 12 homes, 4 small businesses, 3 places of worship, and 2 learning institutions within the region. The initiative has contributed to improved livelihoods, skills development, and community economic empowerment.</p>
            <p>However, the project now faces serious financial constraints that threaten production continuity. Without immediate support, brick production may slow or stop, which would affect the income and livelihood of 25 families who depend on this initiative.</p>
            <p>This proposal respectfully requests targeted financial support to address the single most urgent operational need and the easiest area for donor assistance, which is the acquisition of improved brick production equipment and protective tools. With modest support, the project can stabilize operations, increase productivity, and continue providing employment opportunities.</p>
            <p>The requested support ranges between <strong>KES 180,000 – KES 450,000 (USD 1,390 – USD 3,480)</strong> depending on the level of assistance available.</p>

            <h2>2. Background of the Initiative</h2>
            <p>Ndakaru Bricks &amp; Construction was founded by Mildred Nasipuondi Wepukhulu, a community member committed to creating employment opportunities for women and youth in Ndakaru Village.</p>
            <p>The community faces high unemployment levels, especially among young people and women who often lack access to formal employment opportunities. Many households rely on seasonal farming which does not provide stable income throughout the year.</p>
            <p>To address this challenge, the Ndakaru Community Brick Manufacturing initiative was established to:</p>
            <ul>
              <li>Create sustainable local employment.</li>
              <li>Provide practical construction and brick-making skills.</li>
              <li>Support affordable housing development in rural areas.</li>
              <li>Empower women economically.</li>
              <li>Train youth in practical technical skills.</li>
            </ul>
            <p>The initiative operates using manual brick pressing technology, locally sourced soil, and community labor. Workers earn wages through daily production activities and construction support services.</p>

            <h2>3. Problem Statement</h2>
            <p>Although the initiative has demonstrated strong impact, it is currently facing operational limitations due to inadequate equipment and limited production infrastructure.</p>
            <p>The current brick press is slow and requires significant manual effort, which limits daily production capacity. Additionally, brick drying is affected by rain and weather because the project lacks a proper sheltered drying structure.</p>
            <p>These challenges create three major risks:</p>
            <ul>
              <li>Reduced production capacity.</li>
              <li>Loss of income for workers.</li>
              <li>Inability to meet increasing demand for bricks.</li>
            </ul>
            <p>If the situation is not addressed soon, production could decline significantly, affecting the 25 workers and their families who rely on the initiative for daily income.</p>
            <p>Therefore, the most critical need to keep the business operational is improved brick production equipment and a basic drying structure.</p>

            <h2>4. Most Important Support Needed</h2>
            <p>After reviewing the operational challenges, the most urgent support needed is:</p>
            <p><strong>Acquisition of an Improved Manual or Semi-Automated Brick Press</strong></p>
            <p>A more efficient brick press will significantly increase production capacity while reducing physical strain on workers.</p>
            <p>Currently, production averages 350–450 bricks per day. With an improved press, production could increase to 800–1,000 bricks per day, which would significantly increase income stability for workers.</p>
            <p>Improved production will allow the project to:</p>
            <ul>
              <li>Sustain employment for current workers.</li>
              <li>Meet growing demand for construction materials.</li>
              <li>Reduce delays in client construction projects.</li>
              <li>Increase revenue for expansion and training programs.</li>
            </ul>

            <h2>5. Easiest Support Opportunity for Donors</h2>
            <p>To make it easier for supporters such as yourself and your networks to assist, we have identified specific items with clear costs that can be supported individually or collectively.</p>
            <p><strong>Priority Support Items</strong></p>
            <p><strong>1. Manual or Semi-Automated Brick Press</strong><br />
              Estimated Cost: KES 150,000 – KES 220,000 (USD 1,160 – USD 1,700)<br />
              This is the single most impactful piece of equipment for increasing production.</p>
            <p><strong>2. Brick Drying Shed Construction</strong><br />
              To allow brick production during rainy seasons.<br />
              Estimated Cost: KES 80,000 – KES 120,000 (USD 620 – USD 930)<br />
              Includes timber poles, roofing sheets, and basic construction.</p>
            <p><strong>3. Brick Molds and Production Tools</strong><br />
              Additional molds increase simultaneous brick production.<br />
              Estimated Cost: KES 20,000 – KES 40,000 (USD 155 – USD 310)</p>
            <p><strong>4. Safety Equipment for Workers</strong><br />
              Protective gear for 25 workers including gloves, gumboots, dust masks, and work overalls.<br />
              Estimated Cost: KES 30,000 – KES 50,000 (USD 235 – USD 385)</p>
            <p><strong>Total Estimated Support Range</strong></p>
            <table className="cost-table">
              <thead>
                <tr><th>Item</th><th>Cost (KES)</th><th>Cost (USD)</th></tr>
              </thead>
              <tbody>
                <tr><td>Brick Press</td><td>150,000 – 220,000</td><td>1,160 – 1,700</td></tr>
                <tr><td>Drying Shed</td><td>80,000 – 120,000</td><td>600 – 930</td></tr>
                <tr><td>Tools &amp; Molds</td><td>20,000 – 40,000</td><td>155 – 310</td></tr>
                <tr><td>Safety Equipment</td><td>30,000 – 50,000</td><td>235 – 385</td></tr>
                <tr className="total"><td>Total Estimated Range</td><td>180,000 – 450,000</td><td>1,390 – 3,480</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '0.9rem', color: '#636e72' }}>Donors may choose to support a single item or the full package.</p>

            <h2>6. Expected Impact</h2>
            <p>With this support, the initiative will achieve the following outcomes:</p>
            <ul>
              <li>Sustain employment for 25 women and youth.</li>
              <li>Increase brick production by more than 100%.</li>
              <li>Improve worker safety and efficiency.</li>
              <li>Enable year-round brick production.</li>
              <li>Expand supply of affordable building materials.</li>
            </ul>
            <p>The project will also continue training youth in:</p>
            <ul>
              <li>Brick manufacturing</li>
              <li>Construction support skills</li>
              <li>Basic business management</li>
              <li>Community cooperative development</li>
            </ul>
            <p>In the long term, Ndakaru Bricks &amp; Construction aims to grow into a community construction cooperative and training center serving Bungoma County.</p>

            <h2>7. Accountability and Transparency</h2>
            <p>All funds received will be used strictly for the intended equipment and materials listed in this proposal. The project will provide:</p>
            <ul>
              <li>Photographic evidence of purchased equipment.</li>
              <li>Progress updates on brick production.</li>
              <li>Impact updates on employment and training.</li>
              <li>Documentation of completed construction projects using the bricks.</li>
            </ul>
            <p>We are committed to transparency and responsible use of all support provided.</p>

            <h2>8. Conclusion</h2>
            <p>Ndakaru Bricks &amp; Construction represents a grassroots initiative that is already creating meaningful impact in the community by providing employment, skills training, and affordable building materials.</p>
            <p>With relatively modest support, the initiative can stabilize operations, expand production, and continue empowering women and youth in Ndakaru Village.</p>
            <p>We greatly appreciate your encouragement and guidance and remain grateful for your continued interest in this initiative. Your support, or support through your networks, would help secure the livelihoods of many families while strengthening community development in Bungoma County.</p>
            <p>Thank you for considering this proposal.</p>
          </article>

          <div className="proposal-download">
            <h3>Read or Download the Official Proposal</h3>
            <p>A fully branded, colored document — view it right in your browser, or download and share it with donors and partners.</p>
            <a className="btn-download" href={PDF_URL} target="_blank" rel="noopener noreferrer">📖 View Proposal (PDF)</a>
            <a className="btn-download btn-download--ghost" href={PDF_URL} download>⬇ Download PDF</a>
            <a className="btn-download btn-download--ghost" href={DOC_URL} download>⬇ Download Word (.docx)</a>
          </div>

          <div className="page-actions" style={{ marginTop: '2rem' }}>
            <a href="/support" className="btn-page">Support Our Mission</a>
            <ContactIcons variant="default" />
          </div>
        </div>
      </section>
    </div>
  );
}
