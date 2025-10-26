"use client";

import * as React from "react";
import { Card, CardContent, CardActions, Box, Button, Typography } from "@mui/material";

type CardCustomProps = {
  title?: string;
  subtitle?: string;
  width?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  children?: React.ReactNode; // conteúdo customizável dentro do card
};

const CardCustom: React.FC<CardCustomProps> = ({
  title,
  subtitle,
  width,
  actionLabel,
  onActionClick,
  children,
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: width,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        {title && (
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            {subtitle}
          </Typography>
        )}

        {/* conteúdo customizado */}
        <Box>{children}</Box>
      </CardContent>

      {actionLabel && (
        <CardActions>
          <Button size="small" onClick={onActionClick}>
            {actionLabel}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CardCustom;
