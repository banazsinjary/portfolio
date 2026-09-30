import "./Components.css";
import React, { useState } from "react";

// A bullet can be plain text, or have a bold lead-in (e.g. "Mobile first.")
export type CaseListItem = string | { lead: string; text: string };

// A block is either a paragraph (string) or a bullet list (array)
export type CaseBlock = string | CaseListItem[];

export interface CaseSection {
  heading: string;
  content: CaseBlock[];
}

export interface CaseOverview {
  role: string;
  timeline: string;
  team?: string;
  tools: string;
}

export interface CaseCardProps {
  title: string;
  summary: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  overview: CaseOverview;
  sections: CaseSection[];
}

const CaseCard: React.FC<CaseCardProps> = ({
  title,
  summary,
  tags,
  links,
  overview,
  sections,
}) => {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `case-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="project-card">
      <div className="project-details">
        <p className="project-title">{title}</p>
        <p className="project-summary">{summary}</p>

        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`project-tag tag-${tag.toLowerCase().replace(/[\s/]+/g, "-")}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {links &&
          links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}

        <div>
          <button
            className="case-toggle"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={detailsId}
          >
            {expanded ? "Show less" : "Read case study"}
          </button>
        </div>

        {expanded && (
          <div className="case-details" id={detailsId}>
            <div className="case-section">
              <h3>Overview</h3>
              <ul className="case-overview">
                <li>
                  <strong>Role:</strong> {overview.role}
                </li>
                <li>
                  <strong>Timeline:</strong> {overview.timeline}
                </li>
                {overview.team && (
                  <li>
                    <strong>Team:</strong> {overview.team}
                  </li>
                )}
                <li>
                  <strong>Tools:</strong> {overview.tools}
                </li>
              </ul>
            </div>

            {sections.map((section, i) => (
              <div className="case-section" key={i}>
                <h3>{section.heading}</h3>
                {section.content.map((block, j) =>
                  typeof block === "string" ? (
                    <p key={j}>{block}</p>
                  ) : (
                    <ul key={j}>
                      {block.map((item, k) =>
                        typeof item === "string" ? (
                          <li key={k}>{item}</li>
                        ) : (
                          <li key={k}>
                            <strong>{item.lead}</strong> {item.text}
                          </li>
                        ),
                      )}
                    </ul>
                  ),
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseCard;
