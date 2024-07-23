import {capitalize, Typography} from "@mui/material";
import {graphql, useStaticQuery} from "gatsby";
import React from "react";
import {slots} from "../../data/slots.json";
import {Session} from "../../json_schemas/interfaces/schema_sessions";
import {Flag} from "../components/commun/flags";
import {PrimarySection} from "../components/commun/section/section";
import "../layout";
import {Helmet} from "react-helmet";

let copiedTimeout

const DataPage = () => {
  const {allSessionsYaml, allSpeakersYaml} = useStaticQuery(graphql`
      query {
          allSessionsYaml {
              edges {
                  node {
                      key
                      room
                      slot
                      title
                      language
                      tags
                      speakers
                      talkType
                  }
              }
          }
          allSpeakersYaml {
              edges {
                  node {
                      key
                      name
                  }
              }
          }
      }
  `);

  type SessionComplete = Session & { hour: string; speakersNames: string[] };
  const talksByDay: Array<Array<SessionComplete>> = [[], []];
  allSessionsYaml.edges.forEach((e) => {
    const session = e.node as SessionComplete;
    session.speakersNames = session.speakers.map(
      (s) => allSpeakersYaml.edges.find((es) => es.node.key === s)?.node?.name
    );
    const day = session.slot.startsWith("day-1") ? 0 : 1;
    session.hour = slots.find((s) => s.key === session.slot)?.start as string;
    talksByDay[day].push(session);
  });

  const ordreSalles = ["Jules Verne", "Titan", "Belem", "Tour de Bretagne", "Les Machines", "Hangar", "L'Atelier"]

  const versionSexy = [
    {
      "id": "mobile",
      "label": "📱 Mobile"
    },
    {
      "id": "iot_hardware",
      "label": "\uD83D\uDCDF IoT & Hardware"
    },
    {
      "id": "web",
      "label": "🌍 Web"
    },
    {
      "id": "discovery",
      "label": "💡 Discovery"
    },
    {
      "id": "cloud_devops",
      "label": "☁️ Cloud & DevOps"
    },
    {
      "id": "languages",
      "label": "📝 Languages"
    },
    {
      "id": "bigdata_ai",
      "label": "🤖 BigData & AI"
    },
    {
      "id": "security",
      "label": "🐱‍💻 SECURITY"
    },
    {
      "id": "ux_ui",
      "label": "💚 UX / UI"
    }
  ]


  const copy = (x) => {
    navigator.clipboard.writeText(x);
    const delay = document.getElementById("copied").style.visibility === 'visible' ? 100 : 0;
    document.getElementById("copied").style.visibility = 'hidden'
    clearTimeout(copiedTimeout)
    setTimeout(() => {
      document.getElementById("copied").style.visibility = 'visible'
      copiedTimeout = setTimeout(() => {
        document.getElementById("copied").style.visibility = 'hidden'
      }, 1000)
    }, delay)
  };
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow"/>
        <style>
          {`
          .session-data{
            border: 1px solid white;
            padding: 20px;
            margin: 10px 0;
            border-radius: 10px;
          }
          .clickable {
            cursor: pointer;
          }
          .session-data .clickable:hover {
            text-decoration: underline;
          }
          #copied {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: white;
            padding: 10px;
            border-radius: 10px; 
          }
          `}
        </style>
      </Helmet>
      <div id={"copied"}>
        copied
      </div>
      <PrimarySection>
        {talksByDay.map((tbd, i) => (
          <>
            <Typography variant="h1">{i == 0 ? "Jeudi" : "Vendredi"}</Typography>
            <br/>
            <br/>
            {tbd
              .sort((s1, s2) => {
                const sortHeures = s1.hour?.localeCompare(s2.hour);
                const sortSalles = ordreSalles.indexOf(s1.room) - ordreSalles.indexOf(s2.room)
                return sortHeures !== 0 ? sortHeures : sortSalles
              })
              .map((session) => (
                <div key={session.key} className={'session-data'}>
                  <Typography
                    variant="h4"
                    style={{fontSize: "24px", color: "var(--tertiary)"}}
                  >{session.hour}</Typography>
                  <Typography
                    style={{fontSize: "24px"}}
                    onClick={() => copy(session.title)}
                    variant="h3"
                    className={"clickable"}
                  >
                    {session.title}
                  </Typography>
                  {session.speakersNames.map((s) => (
                    <Typography
                      variant={"h4"}
                      key={s}
                      style={{fontSize: "24px", color: "var(--tertiary-dark)"}}
                      className={"clickable"}
                      onClick={() => copy(session.speakersNames.join('\n'))}
                    >
                      {s}
                    </Typography>
                  ))}
                  <p
                    style={{color: "var(--tertiary)"}}
                    className={"clickable"}
                    onClick={() => copy(versionSexy.find(t => t.id === session.tags[0]).label)}
                  >{versionSexy.find(t => t.id === session.tags[0]).label}</p>
                  <p
                    style={{color: "var(--tertiary)"}}
                    className={"clickable"}
                    onClick={() => copy(capitalize(session.talkType))}
                  >{capitalize(session.talkType)}</p>
                  <p
                    style={{color: "var(--tertiary)"}}
                    className={"clickable"}
                    onClick={() => copy(session.room)}
                  >
                    {session.room}
                  </p>
                  <Flag lang={session.language} size="small"/>
                </div>
              ))}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </>
        ))}
      </PrimarySection>
    </>
  );
};

export default DataPage;
