import { Email } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { useTranslation } from "react-i18next";
import { SubscribeNewsletter } from "../components/commun/newsletter";
import { SocialData, SocialLink } from "../components/commun/socials/socials";
import { MyLink } from "../helpers/links";
import { useResponsiveData } from "../helpers/responsive";
import "./footer.scss";

type FooterLink = { label: string; url: string; disabled?: boolean };

export const Footer: React.FC = () => {
  const { isMobileOrTablet } = useResponsiveData();
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  const { t: tPages } = useTranslation("translation", { keyPrefix: "pages" });

  const socials: SocialData[] = [
    {
      login: "gdgnantes",
      type: "facebook",
    },
    {
      login: "devfestnantes",
      type: "twitter",
    },
    {
      login: "gdg-nantes",
      type: "linkedin",
    },
    {
      login: "francegdg",
      type: "youtube",
    },
    {
      login: "GDG-Nantes/Devfest2024",
      type: "github",
    },
    {
      login: "gdgnantes",
      type: "instagram"
    }
  ];

  const aboutLinks: FooterLink[] = [
    {
      label: "GDG Nantes",
      url: "https://gdgnantes.com",
    },
    {
      label: "Google Developer Groups",
      url: "https://developers.google.com/",
    },
    {
      label: tPages("code-of-conduct.name"),
      url: "/code-of-conduct",
    },
    {
      label: tPages("legal-mentions.name"),
      url: "/legal-mentions",
    },
  ];

  const partnersLinks: FooterLink[] = [
    {
      label: t("partnership-kit"),
      url: "https://drive.google.com/drive/folders/1LhZM7gD_vicGYp8VD61P1DeGQDE8tQIS",
    },
    {
      label: t("media-kit"),
      url: "https://drive.google.com/drive/folders/1vQbLf3dHeR7ifk_BUEbopSDFCbVx0Zi6",
    },
  ];

  const previousEditions: FooterLink[] = [
    {
      url: `https://devfest2023.gdgnantes.com`,
      label: "Devfest Nantes 2023",
    },
    {
      url: `https://devfest2022.gdgnantes.com`,
      label: "Devfest Nantes 2022",
    },
    {
      url: `https://devfest2021.gdgnantes.com`,
      label: "Devfest Nantes 2021",
    },
    {
      url: `https://devfest2019.gdgnantes.com`,
      label: "Devfest Nantes 2019",
    },
  ];

  return (
    <footer className="bande-film-top">
      <Container className={"section"}>
        <Grid container rowSpacing={isMobileOrTablet ? 5 : 10}>
          <FooterItem title={t("follow")} size="half">
            <div className="socials">
              {socials.map((social) => (
                <SocialLink key={social.type} {...social} />
              ))}
            </div>
          </FooterItem>

          <FooterItem size="half">
            <Link to="mailto:bureau@gdgnantes.com">
              <Button
                className="footer-title"
                aria-label="bureau@gdgnantes.com"
              >
                <IconButton aria-label="email icon">
                  <Email style={{ color: "white" }} />
                </IconButton>
                bureau@gdgnantes.com
              </Button>
            </Link>
          </FooterItem>

          <FooterItem title={t("about")} links={aboutLinks} />
          <FooterItem title={t("previous-editions")} links={previousEditions} />
          <FooterItem title={t("partners")} links={partnersLinks} />

          <FooterItem title="Newsletter">
            <p>{t("no-spam")}</p>
            <SubscribeNewsletter />
          </FooterItem>

          <FooterItem size="full">
            <div>
              <img
                src="/images/logo-long.svg"
                alt="logo devfest"
                height="50"
                width="150"
              />
              <p style={{ marginTop: "5px" }}>{t("organizers")}</p>
            </div>
          </FooterItem>
        </Grid>
      </Container>
    </footer>
  );
};

const FooterItem: React.FC<
  React.PropsWithChildren<{
    title?: string;
    links?: FooterLink[];
    size?: "half" | "fourth" | "full";
  }>
> = ({ children, title, links, size = "fourth" }) => {
  const mediaSize: { xs?: number; sm?: number; lg?: number } =
    size == "half"
      ? { xs: 12, sm: 6 }
      : size == "full"
      ? { xs: 12 }
      : { xs: 12, sm: 6, lg: 3 };
  return (
    <Grid item {...mediaSize} textAlign="center" paddingLeft="0">
      {title && (
        <Typography variant="h3" className="footer-title">
          {title}
        </Typography>
      )}
      {links && <FooterLinks links={links} />}
      {children}
    </Grid>
  );
};

const FooterLinks: React.FC<{ links: FooterLink[] }> = ({ links }) => {
  return (
    <List dense>
      {links.map(({ label, url, disabled }) => (
        <ListItem style={{ justifyContent: "center" }} key={label}>
          {disabled ? (
            <div style={{ textDecoration: "line-through" }}>{label}</div>
          ) : (
            <MyLink to={url}>{label}</MyLink>
          )}
        </ListItem>
      ))}
    </List>
  );
};
