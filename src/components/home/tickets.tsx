import { Grid, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { MyLink } from "../../helpers/links";

export const Tickets = () => {
  const disabled1st = true;
  const disabled2nd = false;

  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={3}
      margin="20px 0"
      justifyContent="center"
      className="tickets"
    >
      <Ticket
        labelKey="2days-1st"
        price={110}
        quantity={1200}
        disabled={disabled1st}
        date="06/06/2024 11h"
      />
      <Ticket
        labelKey="2days-2nd"
        price={110}
        quantity={900}
        disabled={disabled2nd}
        date="05/09/2024 23h55"
        />
      <Ticket
        labelKey="1day"
        price={70}
        quantity={500}
        disabled={disabled2nd}
        date="05/09/2024 23h55"
      />
    </Grid>
  );
};

const Ticket: React.FC<{
  price: number;
  labelKey: string;
  date: string;
  quantity: number;
  disabled: boolean;
}> = ({ labelKey, price, quantity, disabled, date }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.home.tickets",
  });

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <MyLink
        to="https://www.billetweb.fr/billet-devfest-nantes-2024"
        style={{ cursor: "default" }}
      >
        <div className={classNames("ticket", disabled && "disabled")}>
          <div className="ticket-wrapper">
            <div className="ticket-body">
              <div className="price">
                <Typography variant="h2">{price} € <span style={{fontSize: "8px"}}>HT</span></Typography>
                <hr />
              </div>
              <div className="description">
                <p className="label">{t(labelKey)}</p>
                <p className="quantity">{quantity} places</p>
                <p className="date">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </MyLink>
    </Grid>
  );
};
