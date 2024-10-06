import { Box, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Button } from "gatsby-theme-material-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import { DefaultPage } from "../components/commun/page";
import {
  PrimarySection
} from "../components/commun/section/section";
import { Youtube } from "../components/commun/youtube";
import {
  DevfestNumbers,
  DevfestPhotos,
  HomeJumbo,
  HomeMap
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
      <PlanCite />
      <PrimarySection className="animations-section">
        <Typography style={{ textAlign: "center" }} variant="h1" color="primary">Animations</Typography>
        <Stack
            direction={{ sm: "column", md: "row"}}
            width={{ md: "100%" }}
            height={{ md: "100%" }}
            spacing={{ sm: 1, md: 4 }}
            justifyContent="space-around"
            alignItems={{ sm: "center", md: "normal" }}
          >
          
        <Card className="animation-card">
          <CardContent>
            {/* Title */}
            <Typography variant="h5" gutterBottom>
              {t("pages.home.animations.citd.title")}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" gutterBottom>
            {t("pages.home.animations.citd.description")}
            </Typography>

            {/* Sessions */}
            <Box mt={2}>
              <Typography variant="subtitle1">{t("pages.home.animations.sessions")}</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">{t("pages.schedule.day1")}</Typography>
                    <Typography variant="body2">11h10</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2"></Typography>
                    <Typography variant="body2">15h10</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">{t("pages.schedule.day2")}</Typography>
                    <Typography variant="body2">11h10</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" style={{marginLeft: "auto"}}>{t("pages.home.animations.learn-more")}</Button>
          </CardActions>
        </Card>
        <Card className="animation-card">
          <CardContent>
            {/* Title */}
            <Typography variant="h5" gutterBottom>
              {t("pages.home.animations.secret.title")}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t("pages.home.animations.secret.description")}
            </Typography>

            {/* Sessions */}
            <Box mt={2}>
              <Typography variant="subtitle1">{t("pages.home.animations.sessions")}</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">{t("pages.schedule.day1")}</Typography>
                    <Typography variant="body2">10h00</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2"></Typography>
                    <Typography variant="body2">14h00</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Stack>
      </PrimarySection>
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
