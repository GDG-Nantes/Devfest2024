import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { SubscribeNewsletter } from "../components/commun/newsletter";
import { DefaultPage } from "../components/commun/page";
import {
  PrimarySection,
  TertiarySection
} from "../components/commun/section/section";
import { Youtube } from "../components/commun/youtube";
import {
  DevfestNumbers,
  DevfestPhotos,
  HomeJumbo,
  HomeMap,
  Tickets,
} from "../components/home";
import { PlanCite } from "../components/home/plan";
import { Partners } from "../components/partners";
import Layout from "../layout";

const HomeContent = () => {
  const { t } = useTranslation("translation");
  return (
    <>
      <PrimarySection> 
        <Typography variant="h1">{t("pages.home.what-is")}</Typography>
        <Typography variant="body1">{t("site.description")}</Typography>
        <Typography variant="body1">{t("site.theme")}</Typography>
        <DevfestNumbers />
        <Youtube id="IE0pnWdSwuw" title="After Movie 2023" />
      </PrimarySection>
      {/* <PrimarySection slim className="home-speakers">
        <Typography variant="h2">{t("pages.home.speakers.title")}</Typography>
        <Speakers featuredOnly={true} />
        <Stack justifyContent="center" alignItems="center">
          <MyLink to="/speakers">
            <Button variant="contained">
              {t("pages.home.speakers.seeAll")}
            </Button>
          </MyLink>
        </Stack>
      </PrimarySection> */}
      <PrimarySection slim>
        <Typography variant="h2">{t("pages.home.tickets.name")}</Typography>
        <Typography variant="h3">
          {t("pages.home.tickets.description")}
        </Typography>
        <Tickets />
      </PrimarySection>
      <PlanCite />
      <TertiarySection slim>
        <Typography variant="h2">{t("pages.home.newsletter")}</Typography>
        <SubscribeNewsletter />
      </TertiarySection>
      <HomeMap />
      <Partners onlyPlatinium={true} />

      <DevfestPhotos />
    </>
  );
};

const HomePage = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages.home" });
  return (
    <Layout>
      <DefaultPage title={t("name")} jumbo={HomeJumbo}>
        <HomeContent />
      </DefaultPage>
    </Layout>
  );
};

export default HomePage;
