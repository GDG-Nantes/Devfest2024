import {
  Brush,
  Cloud,
  Code,
  DeveloperBoard,
  Language,
  Lightbulb,
  PhoneAndroid,
  Security,
  SmartToy
} from "@mui/icons-material";
import { Avatar, Chip, Tooltip } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  Rooms,
  Session,
} from "../../../json_schemas/interfaces/schema_sessions";
import { Slot } from "../../../json_schemas/interfaces/schema_slots";
import { Speaker } from "../../../json_schemas/interfaces/schema_speakers";
import { MyLink } from "../../helpers/links";
import "./schedule.scss";

export type PartialSession = Omit<Session, "abstract"> & { slot: Slot };
export type PartialSpeaker = Pick<Speaker, "key" | "name" | "photoUrl">;

export const rooms: Rooms[] = [
  "Jules Verne",
  "Titan",
  "Belem",
  "Tour Bretagne",
  "Les Machines",
  "Hangar",
  "L'Atelier",
];

const tagLabels = {
  iot_hardware: {
    label: "IoT & Hardware",
    icon: <DeveloperBoard />,
  },
  mobile: {
    label: "Mobile",
    icon: <PhoneAndroid />,
  },
  web: {
    label: "Web",
    icon: <Language />,
  },
  discovery: {
    label: "Discovery",
    icon: <Lightbulb />,
  },
  cloud_devops: {
    label: "Cloud & DevOps",
    icon: <Cloud />,
  },
  languages: {
    label: "Languages",
    icon: <Code />,
  },
  bigdata_ai: {
    label: "BigData & AI",
    icon: <SmartToy />,
  },
  security: {
    label: "SECURITY",
    icon: <Security />,
  },
  ux_ui: {
    label: "UX / UI",
    icon: <Brush />,
  },
};
export const Tags: React.FC<{
  tags: string[];
  color?: "primary" | "secondary";
}> = ({ tags, color = "primary" }) => {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <Chip
          icon={tagLabels[tag].icon}
          key={tag}
          label={tagLabels[tag].label}
          variant="outlined"
          size="small"
          color={color}
          sx={{ fontSize: "10px" }}
        />
      ))}
    </div>
  );
};
export const SessionComplexity: React.FC<{
  complexity: "Beginner" | "Intermediate" | "Advanced";
}> = ({ complexity }) => {
  return (
    <Chip
      label={complexity}
      variant="outlined"
      size="small"
      color="secondary"
      sx={{ fontSize: "10px" }}
    />
  );
};

export const Speakers: React.FC<{ speakers: string[] }> = ({ speakers }) => {
  const { allSpeakersYaml } = useStaticQuery(graphql`
    query {
      allSpeakersYaml {
        edges {
          node {
            key
            name
            photoUrl
          }
        }
      }
    }
  `);

  const speakersFull: PartialSpeaker[] = speakers.map(
    (key) => {
      const speaker = allSpeakersYaml.edges.find((edge) => edge.node.key === key);
      if (!speaker) {
        throw new Error(key + " not found")
      }
      return speaker.node;
    }
  );

  return (
    <div className="speakers">
      {speakers.length === 1 ? (
        <MyLink to={"/speakers/" + speakersFull[0].key}>
          <div className="speaker">
            <AvatarSpeaker speaker={speakersFull[0]} noLink/>
            {speakersFull[0].name}
          </div>
        </MyLink>
      ) : (
        <>
          {speakersFull.map((speaker) => (
            <MyLink to={"/speakers/" + speaker.key} key={speaker.key}>
              <div className="speaker">
                <AvatarSpeaker speaker={speaker} noLink/>
              </div>
            </MyLink>
          ))}
        </>
      )}
    </div>
  );
};

export const AvatarSpeaker: React.FC<{
  speaker: PartialSpeaker;
  size?: "small" | "medium" | "large";
  noLink?: boolean
}> = ({ speaker, size = "small", noLink }) => {
  const sizePx = size == "large" ? "150px" : size == "medium" ? "50px" : "24px";
  const Wrapper = noLink ? React.Fragment : ({children}) => <MyLink to={"/speakers/" + speaker.key}>{children}</MyLink>;
  return (
    <Wrapper>
      <Tooltip title={speaker.name}>
        <Avatar
          alt={speaker.name}
          src={speaker.photoUrl}
          sx={{ width: sizePx, height: sizePx, margin: "4px 4px" }}
        />
      </Tooltip>
    </Wrapper>
  );
};
