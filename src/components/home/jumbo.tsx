import { Android, Apple, PhotoSharp, YouTube } from "@mui/icons-material";
import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const HomeJumbo = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.jumbo",
  });

  return (
    <>
      <div className="jumbo-home-blood">
        <img src="/images/jumbo-blood.svg" alt="" />
      </div>
      <div className="logo-jumbo-home">
        <img alt="logo" src="/images/tagline.svg" />
      </div>

      <div>
        <Typography variant="h1" textAlign="center">
          {t("come-back")}
        </Typography>
        {/*<Typography*/}
        {/*  variant="h2"*/}
        {/*  textAlign="center"*/}
        {/*>*/}
        {/*  At night, they come to code !*/}
        {/*</Typography>*/}
        <Typography variant="h1" textAlign="center"
          style={{marginTop: "10px", marginBottom: "25px"}}>
          {t("date")}
        </Typography>
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={3} justifyContent={"center"}>
            <Button
              color="secondary"
              variant="contained"
              href="https://devfest2024.gdgnantes.com"
              aria-label={t("previous")}
            >
              {t("previous")}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              href="https://www.billetweb.fr/reunion-dinformation-partenaire-devfest-2025"
              target="_blank"
              aria-label="Devenir Sponsor"
            >
              Devenir Sponsor 2025
            </Button>
          </Stack>
          {/*<Stack direction="row" spacing={3} justifyContent={"center"}>*/}
            {/* <Button
              color="secondary"
              variant="contained"
              href="https://conference-hall.io/public/event/AJYPylkzTDd6j3O6ADZn"
              aria-label={t("cfp")}
            >
              {t("cfp")}
            </Button> */}
            {/* <Button
              color="secondary"
              variant="contained"
              aria-label={t('schedule')}
              href="/schedule"
            >
              {t('schedule')}
            </Button> */}
            {/*<Button*/}
            {/*  color="secondary"*/}
            {/*  startIcon={<PhotoSharp />}*/}
            {/*  variant="contained"*/}
            {/*  href="https://photos.app.goo.gl/iQPsdQ8KKeXH8JrT8"*/}
            {/*  aria-label="Photos"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  Photos*/}
            {/*</Button> */}
            {/*<Button*/}
            {/*  color="secondary"*/}
            {/*  startIcon={<YouTube />}*/}
            {/*  variant="contained"*/}
            {/*  href="https://www.youtube.com/watch?v=xuKrkOh_mzk&list=PLuZ_sYdawLiWenx-X315dfZNOaliVnSTY"*/}
            {/*  aria-label="Videos"*/}
            {/*  target={"_blank"}*/}
            {/*>*/}
            {/*  Videos*/}
            {/*</Button>*/}
            {/* <Button
              color="secondary"
              variant="contained"
              href="https://billetterie.gdgnantes.com"
              aria-label={t('resend-tickets')}
              target={"_blank"}
              >
              {t('resend-tickets')}
              </Button> */}
          {/*</Stack>*/}
        {/*  <Stack direction="row" spacing={3} justifyContent={"center"}>*/}
        {/*      <Button*/}
        {/*        color="secondary"*/}
        {/*        variant="contained"*/}
        {/*        aria-label={"Feedbacks"}*/}
        {/*        target="_blank"*/}
        {/*        href="https://openfeedback.io/devfestnantes24"*/}
        {/*      >*/}
        {/*        Feedbacks*/}
        {/*      </Button>*/}

        {/*  /!* <Button*/}
        {/*  color="secondary"*/}
        {/*  variant="outlined"*/}
        {/*  onClick={() => setModalOpen(true)}*/}
        {/*  aria-label={t('get-app')}*/}
        {/*  >*/}
        {/*  {t('get-app')}*/}
        {/*</Button> *!/*/}
        {/*    /!* <Button*/}
        {/*      color="secondary"*/}
        {/*      variant="contained"*/}
        {/*      aria-label={t("offers")}*/}
        {/*      target={"_blank"}*/}
        {/*      href="https://nantes.francedigitaljobs.fr/search-list-jobs?id=&titre=&city=&categorie=&niveau=&type=&teletravail="*/}
        {/*    >*/}
        {/*      {t('offers')}*/}
        {/*    </Button> *!/*/}
        {/*  </Stack>*/}
        {/*<Stack direction="row" spacing={3} justifyContent={"center"}>*/}
        {/*  <Button href="/our-values" color="secondary">{t('bring-ecocup')}</Button>*/}
        {/*</Stack>*/}
        </Stack>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} className={"modal-apps"}>
        <Paper className={"modal-content"}>
          <Box className={"modal-body"}>
            <Stack spacing={[5,5]} direction={["column", "row"]}>
              <Button
                color="secondary"
                variant="contained"
                href="https://apps.apple.com/fr/app/devfest-nantes/id6443489706"
                aria-label="iOS app"
                target={"_blank"}
                startIcon={<Apple/>}
              >
                iOS
              </Button>
              <Button
                color="secondary"
                variant="contained"
                href="https://play.google.com/store/apps/details?id=com.gdgnantes.devfest.androidapp&pli=1"
                aria-label="Android app"
                target={"_blank"}
                startIcon={<Android/>}
              >
                Android
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};
