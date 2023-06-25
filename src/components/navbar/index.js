import React, { useState } from "react";
import styles from "../navbar/styles.module.css";
import Redditlogo from "../../assets/Reddit-logo-name.png";
import MainButton from "../main-button/index.js";
import SecondaryButton from "../secondary-button/index.js";
import SearchBar from "../search-bar";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import  qrcode  from "../../assets/gofind-qrcode.png"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"
import PersonalInfoMenu from "../personal-info-menu";
export default function Nabvar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <img src={Redditlogo} alt="logo" className={styles.Redditlogo} />
        <SearchBar />
        <div className={styles.ButtonGroup}>
          <SecondaryButton
            style={{
              padding: "12px 0",
              width: "40%",
              height: "15%",
            }}
            onClick={handleClickOpen} // => Passing Function as Props
          >
            <QrCodeScannerOutlinedIcon />
            Get App
          </SecondaryButton>
          <MainButton
            style={{
              padding: "12px 0",
              width: "40%",
              height: "15%",
            }}
          >
            Login In
          </MainButton>
          {/* hi */}
          <PersonalInfoMenu />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
          >
            <h2>Get The Reddit App</h2>
            <CloseOutlinedIcon onClick={handleClose} />
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "black" }}
          >
            <Stack
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <h4 style={{ width: "60%", textAlign: "center" }}>
                Scan The QR Code to download the app now
              </h4>
              <img src={qrcode} width="300" alt="qrApp"/>
              <h5 style={{ width: "70%", textAlign: "center" }}>
                Or Check it out in the App Stores
              </h5>
              <Stack display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
                <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage" target="_blank" rel="noreferrer">
                <img src={googlePlay} alt="googlePlayImg" width="150" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage" target="_blank" rel="noreferrer">
                <img src={appStore} alt="appStoreimg" width="120"/>
                </a>
              </Stack>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </header>
  );
}
