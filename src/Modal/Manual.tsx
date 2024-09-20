import React, { FC, useContext, useState } from "react";
import { GridItem } from "../Grid/Grid";
import { Backdrop, Box, Fade, Modal, SxProps, Typography } from "@mui/material";
import { texts } from "./ManualText";
import { Context } from "../Context";

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: "70%",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "justify",
  fontSize: "24px",
};

export const Manual: FC = () => {
  const { title, currentPageIndex, open, setOpen } = useContext(Context);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <GridItem
      position={{ colStart: 10, colEnd: 13, rowStart: 1, rowEnd: 2 }}
      style={{ textAlign: "-webkit-right" }}
    >
      <button className="manualButton" onClick={handleOpen}>
        Инструкция
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h6"
              component="h2"
              fontSize={24}
              style={{ fontWeight: "bold", fontFamily: "cursive" }}
            >
              {title}
            </Typography>
            <Typography sx={{ mt: 2 }} fontSize={20}>
              {texts[currentPageIndex]}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </GridItem>
  );
};
