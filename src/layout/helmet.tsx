import { useLocation } from "@gatsbyjs/reach-router";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Event, WithContext } from "schema-dts";
import { MENU } from "../navbar-menu";

export const Helmet: React.FC = () => {
  const { t } = useTranslation();
  const { pathname, href } = useLocation();

  const helmet = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          image
        }
      }
    }
  `);

  const path = pathname.replace(/\/(fr|en)/, "");
  const pageTitle = MENU.find((menu) => path === menu.link)?.label;
  const title =
    pageTitle && path !== "/" ? t(`pages.${pageTitle}.name`) : "Devfest Nantes";

  const socialImage =
    helmet.site.siteMetadata.siteUrl + helmet.site.siteMetadata.image;

  const description = t("site.description");

  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={helmet.site.siteMetadata.siteUrl} />
      <meta name="image" property="og:image" content={socialImage} />
      <meta property="og:site_name" content={helmet.site.siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script src="/scripts/redirect-language.js" />
    </ReactHelmet>
  );
};
