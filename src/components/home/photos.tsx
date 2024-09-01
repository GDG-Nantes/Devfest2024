import { Button, Stack } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React, { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { MyLink } from "../../helpers/links";
import { useResponsiveData } from "../../helpers/responsive";
import { SecondarySection } from "../commun/section/section";

export const DevfestPhotos = () => (
  <SecondarySection padding="none">
    <Album />
  </SecondarySection>
);

const Album = () => {
  const { isMobileOrTablet } = useResponsiveData();
  const { highImages, squareImages, wideImages } = useStaticQuery(graphql`
    query {
      highImages: allFile(
        filter: { relativePath: { glob: "home/album/high/*" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 0.75
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
      squareImages: allFile(
        filter: { relativePath: { glob: "home/album/square/*" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
      wideImages: allFile(
        filter: { relativePath: { glob: "home/album/wide/*" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.2
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  `);

  const imageByName = React.useCallback(
    (name: string): ImageDataLike & { name: string } => {
      return [
        ...highImages.nodes,
        ...squareImages.nodes,
        ...wideImages.nodes,
      ].find((node) => node.name === name);
    },
    [highImages, squareImages, wideImages]
  );

  return isMobileOrTablet ? (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(5, 17vh)",
        gridAutoFlow: "dense",
        gap: "5px",
      }}
    >
      <Picture
        image={imageByName("dino")}
        gridColumn="1"
        gridRow="span 2"
      />
      <Picture
        image={imageByName("delorean")}
        gridColumn="span 2"
        objectPosition={"top"}
      />
      <Picture image={imageByName("buffet")} gridColumn="span 1" />
      <Picture
        image={imageByName("annabelle")}
        gridColumn="span 1"
        gridRow="span 2"
      />
      <Picture image={imageByName("equipe-amphi")} gridColumn="span 2" />
      <Picture image={imageByName("concert")} gridColumn="span 1" />
      <Picture image={imageByName("2000")} gridColumn="span 1" />
      <Picture image={imageByName("stand")} gridColumn="span 1" />
      <ButtonTile gridColumn="span 3" />
    </div>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(3, 30vh)",
        gridAutoFlow: "dense",
        gap: "5px",
      }}
    >
      <Picture
        image={imageByName("dino")}
        gridColumn="1"
        gridRow="span 2"
      />
      <Picture image={imageByName("equipe-amphi")} gridColumn="span 2" />
      <Picture
        image={imageByName("delorean")}
        gridColumn="span 2"
        objectPosition={"top"}
      />
      <ButtonTile gridColumn="span 2" />
      <Picture
        image={imageByName("annabelle")}
        gridColumn="span 1"
        gridRow="span 2"
      />
      <Picture image={imageByName("buffet")} gridColumn="span 1" />
      <Picture image={imageByName("2000")} gridColumn="span 2" />
      <Picture image={imageByName("stand")} gridColumn="span 1" />
      <Picture image={imageByName("concert")} gridColumn="span 1" />
    </div>
  );
};

const ButtonTile = ({ gridColumn }: { gridColumn: string }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.photos",
  });
  return (
    <Stack style={{ gridColumn }} alignItems="center" justifyContent="center">
      <p>{t("p1")}</p>
      <p style={{ marginTop: 0 }}>{t("p2")}</p>
      <MyLink to="https://photos.google.com/share/AF1QipNE4VHB8i-8JwIvBSFowehspWw3G7Ab93IwHHb8pbOksg8oIBCpAgFXLvGbabSVXA?key=MzNzXzREUFlSQnlyN3RaNlVYWXJNcl8tcEdwY3p3">
        <Button variant="contained" color="primary" aria-label="Photos 2022">
          {t("button")}
        </Button>
      </MyLink>
    </Stack>
  );
};

const Picture: React.FC<{
  image: ImageDataLike & { name: string };
  gridColumn?: string;
  gridRow?: string;
  objectPosition?: CSSProperties["objectPosition"];
}> = ({ image, gridColumn, gridRow, objectPosition }) => {
  return (
    <div style={{ gridColumn, gridRow }}>
      <GatsbyImage
        alt={image.name}
        image={getImage(image)}
        objectPosition={objectPosition || "center"}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};
