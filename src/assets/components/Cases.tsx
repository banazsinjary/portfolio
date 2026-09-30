import "./Components.css";
import React from "react";
import CaseCard, { type CaseCardProps } from "./CaseCard";

const Cases: React.FC = () => {
  const cases: CaseCardProps[] = [
    {
      title: "Swamp Meet",
      summary: `A mobile event discovery app for SFSU students. I ran user research, designed account and profile flows in Figma, and used usability testing to revise the prototype.`,
      tags: ["UX Research", "Design"],
      links: [
        {
          label: "Figma",
          url: "https://www.figma.com/design/DkzyVgteahcUeOs7tCAaar/Group-10?node-id=7-369&t=ZJTxxVgFe7L0IftO-1",
        },
      ],
      overview: {
        role: "Project coordinator, UX research and design",
        timeline: "One semester, Spring 2025 (CSC 642: Human-Computer Interaction)",
        team: "5 students",
        tools: "Figma, Google Forms, SQL",
      },
      sections: [
        {
          heading: "The Problem",
          content: [
            `Students at SFSU often miss campus events because there's no one place to find them. Clubs are on the SAE website, job fairs are on Handshake, and seminars come through email. Gator Experience, the existing option, is web-based, limited to official student organizations, and doesn't cover academic or department events. Switching between platforms may discourage students from getting involved at all.`,
          ],
        },
        {
          heading: "Research",
          content: [
            `We combined a Google Forms survey responses with short in-person interviews on campus, about 20 minutes each. I recruited survey participants, ran several interviews, and helped write the survey questions.`,
            `Two survey results stood out:`,
            [
              `Half of respondents said they prefer to hear about events from friends, compared to 37.5% for email and 12.5% for an app.`,
              `"Friends attending" and "interest in the event" were tied as the biggest factors in whether students participate (37.5% each).`,
            ],
            `This suggested that students care about who they go with as much as what the event is. We turned this into two personas: Chad, who picks events based on his friends, and Jane, who picks events based on whether they help her grow academically or personally. I identified needs, pain points, and solutions for both personas.`,
          ],
        },
        {
          heading: "Key Decisions",
          content: [
            [
              {
                lead: "Mobile first.",
                text: `Students always have their phones, and our research pointed to convenience as a main need.`,
              },
              {
                lead: "Tags instead of fixed categories.",
                text: `Tags let students and organizations describe their interests more flexibly and make it easier to find like-minded peers.`,
              },
              {
                lead: "Separate student and organization accounts.",
                text: `I designed the login and account editing flows. Students manage their visible tags and follow others. Organizations can edit their bio, manage events, and view followers and engagement in a specs tab.`,
              },
              {
                lead: "Social proof built in.",
                text: `Based on the friends finding, the design includes a public RSVP list and a discussion area for events.`,
              },
              {
                lead: "Consistent visual style.",
                text: `I organized the full app flows and edited teammates' high-fidelity prototypes so the styles matched across screens.`,
              },
            ],
          ],
        },
        {
          heading: "Usability Testing",
          content: [
            `We ran 10 to 15 minute sessions where participants signed in, updated their tags, searched for a friend, and created an event. Findings included:`,
            [
              `"My Events" confused users. They thought it meant events they created, not events they planned to attend. I renamed it "My RSVPs."`,
              `The Create Event page had no description field, so one was added.`,
              `Some testers found the design too minimal. I kept the layout simple but added pops of color, since an uncluttered screen was the goal.`,
            ],
            `I presented the usability findings, future work, and conclusion to the class.`,
          ],
        },
        {
          heading: "Outcome",
          content: [
            `Other students took Swamp Meet on as their graduate project to develop it into a real app.`,
          ],
        },
        {
          heading: "What I'd Do Differently",
          content: [
            [
              {
                lead: "Scope a smaller first version.",
                text: `The prototype covered a lot: accounts, tags, search, feeds, RSVPs, discussions, and org stats. I would now prioritize the one or two features that address the core problem and test those first, then expand.`,
              },
              {
                lead: "Define success metrics up front.",
                text: `The project never set a goal like "students find an event they'd attend in under a minute" or "X% of test participants complete event creation without help."`,
              },
            ],
          ],
        },
      ],
    },
    {
      title: "Time-Based Wellbeing Nudges in VR",
      summary: `A master's thesis exploring how people experience and respond to a proactive wellbeing nudge in VR. I designed an end-to-end experiment, building a VR gallery with an adaptive nudge, running sessions with 11 participants, and identifying common themes across their responses.`,
      tags: ["UX Research", "Data Analysis"],
      links: [],
      overview: {
        role: "Sole author and researcher, advised by Dr. Zainab Agha",
        timeline: "Fall 2025 to Summer 2026 (MS thesis)",
        team: "Independent research with a faculty advisor",
        tools: "A-Frame, JavaScript, Meta Quest 3, Netlify, Google Sheets, Google Apps Script",
      },
      sections: [
        {
          heading: "The Problem",
          content: [
            `Young people are among the heaviest users of VR, and side effects like nausea, dizziness, and eye strain are common. Younger users may also have a harder time noticing and responding to discomfort while immersed. Most VR experiences leave it up to the user to decide when to stop, and there is limited research on design features that step in before discomfort builds.`,
          ],
        },
        {
          heading: "Research",
          content: [
            `I started with a systematic literature review. I screened 1,028 papers from ACM, SpringerLink, and ScienceDirect (2015 to 2025, ages 3 to 25) and narrowed them to 51 studies. A few findings shaped the rest of the project:`,
            [
              `Only 19.6% of studies documented side effects or harms at all.`,
              `Of 33 studies focused on children and teens, only 4 documented side effects.`,
              `None of the youth-focused papers used objective or physiological measures. They relied on self-report alone.`,
              `Only 39% measured session duration, and there was no consistent standard for session length.`,
              `Harm mitigation was proposed in just 17.6% of papers, and mostly as future work rather than something built and tested.`,
            ],
            `This suggested a gap: harms are under-reported, self-report may be unreliable during immersion, and few studies test an intervention in real time. I designed the VR study to explore that gap.`,
          ],
        },
        {
          heading: "Key Decisions",
          content: [
            [
              {
                lead: "A calm environment on purpose.",
                text: `I built a VR art gallery in A-Frame with 5 wings and 38 paintings, using minimal walls, floors, and lighting. The goal was to avoid environmental stressors, so any discomfort would more likely come from immersion itself.`,
              },
              {
                lead: "Two kinds of tasks.",
                text: `Free Explore let participants browse at their own pace, like paintings, and tag them. A Scavenger Hunt gave them 20 randomized clues to find specific paintings. This covered both passive and goal-directed use.`,
              },
              {
                lead: "A nudge that adapts to the user.",
                text: `At 5 minutes, a check-in asked participants to rate their wellbeing from 1 to 5. The break prompt defaulted to 9 minutes and moved earlier or later based on that rating, from about 7:30 to 10:30. Participants could choose "Take a break" (60 seconds with the headset off) or "Keep going." Prompts auto-dismissed after 20 seconds and were logged as ignored.`,
              },
              {
                lead: "Nudge vs. no nudge.",
                text: `Each participant did one block with the nudge and one without, in randomized order, with a 5-minute break between blocks.`,
              },
              {
                lead: "Live behavioral logging.",
                text: `I streamed the browser console log to a Google Sheet through Google Apps Script. That captured break-taking, nudge responses, and interaction timestamps as they happened, alongside what participants reported.`,
              },
            ],
          ],
        },
        {
          heading: "User Study",
          content: [
            `I ran an exploratory mixed-methods study with 11 young adults (ages 18 to 25), 6 of whom had never used VR. I collected pre- and post-session surveys, per-block surveys, think-aloud audio, and observer notes. I used validated measures for presence (IPQ), physical discomfort (SSQ), emotional state (STAI-6), and engagement (Flow Short Scale). I analyzed the qualitative data with thematic analysis.`,
          ],
        },
        {
          heading: "Findings",
          content: [
            [
              {
                lead: "Discomfort was common and grew with time.",
                text: `All 11 participants reported at least one physical symptom. Moderate to severe nausea rose from 18% in the first block to 64% in the second.`,
              },
              {
                lead: "First-time users were more affected.",
                text: `4 participants ended their session early because of nausea. All 4 had no prior VR experience and underestimated how long they had been immersed by 3 to 8 minutes. Experienced users usually estimated within 0 to 2 minutes.`,
              },
              {
                lead: "In-the-moment ratings didn't match how people felt.",
                text: `Wellbeing ratings were mostly 4 or 5, even among participants who later reported severe symptoms. Of the 4 who ended early, 3 had rated themselves 4 or 5.`,
              },
              {
                lead: "Participants valued the nudge but rarely acted on it.",
                text: `91% of nudge break prompts were ignored, and only one participant took a nudge-initiated break. Still, 82% said they would turn nudges on in future sessions, and 91% said the nudge was useful. 6 participants said afterward they needed a break during the nudge block, but only 2 of them took one.`,
              },
              {
                lead: "The check-in still did something.",
                text: `Participants described it as a cue to check how their body felt, something they said they would not have done on their own.`,
              },
            ],
          ],
        },
        {
          heading: "Outcome",
          content: [
            `I defended the thesis, and it was extended into a co-authored paper which is under review at the International Journal of Child-Computer Interaction.`,
          ],
        },
        {
          heading: "What I'd Do Differently",
          content: [
            [
              {
                lead: "Don't rely only on self-rating to time the nudge.",
                text: `The check-in asked users how they felt, but the findings suggest people may not know while immersed. A next version could use signals like heart rate or eye tracking to adjust timing.`,
              },
              {
                lead: "Test with more people and more settings.",
                text: `With 11 participants in one environment, the findings are exploratory. A larger, more diverse sample across different VR experiences would show whether the patterns hold.`,
              },
            ],
          ],
        },
      ],
    },
    // Add the personal training case study here
  ];

  return (
    <section className="section-sizing" id="cases">
      <div>
        {cases.map((c, index) => (
          <CaseCard key={index} {...c} />
        ))}
      </div>
    </section>
  );
};

export default Cases;