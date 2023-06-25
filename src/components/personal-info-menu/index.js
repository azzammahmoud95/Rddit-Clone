import React from "react";
import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { personalInfoItems } from "./personal-info-items"; // Import from the new file
import styles from "./styles.module.css";

export default function PersonalInfoMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleShowLinks = (itemId) => {
    activeItem === itemId ? setActiveItem(null) : setActiveItem(itemId);
  };

  return (
    <div className={styles.personalMenu} onClick={handleShowMenu}>
      <PersonOutlineOutlinedIcon
        fontSize="large"
        style={{ alignSelf: "center" }}
      />
      <KeyboardArrowDownRoundedIcon />

      <div
        className={styles.menuComponent}
        style={{ display: showMenu ? "block" : "none" }}
        onBlur={() => setShowMenu(!showMenu)}
      >
        {personalInfoItems.map((item) => (
          <>
            <button
              className={styles.topicsLinks}
              key={item.id}
              onClick={() => handleShowLinks(item.id)}
            >
              <span className={styles.link}>
                <span className={styles.linkIcon1}>{item.icon1}</span>
                <span className={styles.linkLabel}>{item.label}</span>
                {item.links.length > 0 && (
                  <span
                    className={`${styles.linkIcon2} ${
                      activeItem === item.id && styles.rotate
                    }`}
                  >
                    {item.icon2}
                  </span>
                )}
              </span>
            </button>
            {item.links.length > 0 && activeItem === item.id && (
              <div className={styles.linksDropDown}>
                {item.links.map((link) => (
                  <a to="#" className={styles.linksDropDownLink} key={item.id}>
                    {link}
                  </a>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
