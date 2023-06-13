import styles from "./report-shaper.module.css";
import CardAdvertising from "../../components/card-advertising/card-advertising";
import ButtonElement from "../../components/button-element/button-element";
import {
  TEXT_PAGE_REPORT_SHAPER_SUBTITLE,
  CARD_ADVERTISING,
  TYPE_BTN_REPORT_GO,
  TYPE_BTN_REPORT_MAKE
} from "../../utils/constants";

const ReportShaper = () => {
  return (
    <>
      <p className={styles.subtitle}>{TEXT_PAGE_REPORT_SHAPER_SUBTITLE}</p>
      <div className={styles.cards}>
        {CARD_ADVERTISING.map((card) => (
          <CardAdvertising key={card._id} card={card} />
        ))}
      </div>
      <div className={styles.group_button}>
        <ButtonElement type={TYPE_BTN_REPORT_GO}/>
        <ButtonElement type={TYPE_BTN_REPORT_MAKE}/>
      </div>
    </>
  );
};

export default ReportShaper;
