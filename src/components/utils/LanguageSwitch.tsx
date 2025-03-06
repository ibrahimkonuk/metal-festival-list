import { Button } from "@mantine/core";
import i18n from "../../i18n";

const LanguageSwitch = () => {
  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <Button variant="outlined" onClick={handleLanguageChange}>
        {i18n.language === "en" ? "Deutsch" : "English"}
      </Button>
    </div>
  );
};

export default LanguageSwitch;
