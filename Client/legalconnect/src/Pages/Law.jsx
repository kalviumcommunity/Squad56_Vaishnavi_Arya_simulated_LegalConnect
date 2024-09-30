import React from 'react';
import './Law.css'; 

const Law = () => {
  return (
    <div className="law-container">
      <header className="law-header">
        <h1>Types of Laws</h1>
        <p>Explore the different branches of law and their relevance in our society.</p>
      </header>

      <section className="law-section">
        <div className="law-category">
          <h2>Criminal Law</h2>
          <p>Criminal law deals with behaviors considered harmful to society and outlines punishments for such offenses. This branch covers crimes such as theft, assault, murder, and other criminal activities.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Crime classification (felonies, misdemeanors)</li>
            <li>Punishments (fines, imprisonment)</li>
            <li>Criminal procedure and trial process</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Civil Law</h2>
          <p>Civil law governs disputes between individuals or organizations. It includes issues like contracts, property ownership, and personal injury. Civil law cases generally seek compensation or specific remedies.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Contract law</li>
            <li>Property disputes</li>
            <li>Tort law (personal injury)</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Constitutional Law</h2>
          <p>Constitutional law focuses on the interpretation and implementation of a country's constitution. It establishes the structure of the government and guarantees the rights and freedoms of individuals.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Human rights and fundamental freedoms</li>
            <li>Separation of powers</li>
            <li>Judicial review</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Corporate Law</h2>
          <p>Corporate law deals with the formation, management, and operation of corporations. It includes issues such as mergers, acquisitions, shareholder rights, and corporate governance.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Formation of companies</li>
            <li>Corporate governance</li>
            <li>Mergers and acquisitions</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Family Law</h2>
          <p>Family law addresses matters related to family relationships, such as marriage, divorce, child custody, and adoption. It ensures the protection of family members' rights in these situations.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Divorce and separation</li>
            <li>Child custody and support</li>
            <li>Adoption processes</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Employment Law</h2>
          <p>Employment law regulates the relationship between employers and employees. It covers areas such as labor rights, workplace safety, and disputes between workers and management.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Employee rights and workplace discrimination</li>
            <li>Wage laws and working hours</li>
            <li>Health and safety regulations</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Intellectual Property Law</h2>
          <p>Intellectual property (IP) law grants protection for creations of the mind, including inventions, designs, literary works, and trademarks. It ensures that creators can benefit from their work.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Patents for inventions</li>
            <li>Copyrights for literary and artistic works</li>
            <li>Trademarks and trade secrets</li>
          </ul>
        </div>

        <div className="law-category">
          <h2>Environmental Law</h2>
          <p>Environmental law is concerned with protecting the environment and regulating the impact of human activities. It addresses issues like pollution control, wildlife protection, and land use.</p>
          <h3>Key Aspects:</h3>
          <ul>
            <li>Pollution control laws</li>
            <li>Wildlife and natural resources protection</li>
            <li>Regulations on land use and zoning</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Law;
