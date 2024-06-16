import { Send } from "@mui/icons-material";
import { Button } from "gatsby-theme-material-ui";
import React from "react";
import { useTranslation } from "react-i18next";
import { MyLink } from "../../helpers/links";

export const SubscribeNewsletter = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  return (
    <MyLink to="http://eepurl.com/c7X2V9">
      <Button variant="contained" aria-label="newsletter">
        <Send style={{ marginRight: "20px" }} /> {t("news-button")}
      </Button>
    </MyLink>
  );
};
