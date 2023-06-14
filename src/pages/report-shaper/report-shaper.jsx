import styles from "./report-shaper.module.css";
import CardAdvertising from "../../components/card-advertising/card-advertising";
import ButtonElement from "../../components/button-element/button-element";
import SelectElement from "../../components/select-element/select-element";
import IconInfo from "../../components/icon-info/icon-info";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import {
  TEXT_PAGE_REPORT_SHAPER_SUBTITLE,
  CARD_ADVERTISING,
  TYPE_BTN_REPORT_GO,
  TYPE_BTN_REPORT_MAKE,
  TYPE_FILTER_OFFICES,
  TYPE_FILTER_CAMPAIGN,
  TYPE_FILTER_GROUPING,
  TYPE_FILTER_DATA_REPORT,
  TYPE_FILTER_METRICS,
  TYPE_ICON_FILLED_HELP
} from "../../utils/constants";
import { useState } from "react";

const ReportShaper = () => {
  const [selected, setSelected] = useState(false);
  const [personName, setPersonName] = useState([]);

  return (
    <>
      <p className={styles.subtitle}>{TEXT_PAGE_REPORT_SHAPER_SUBTITLE}</p>
      <div className={styles.cards}>
        {CARD_ADVERTISING.map((card) => (
          <CardAdvertising key={card._id} card={card} />
        ))}
      </div>
      <div className={styles.group_fillter}>
        <SelectElement
          type={TYPE_FILTER_OFFICES}
          setPersonName={setPersonName}
          personName={personName}
        />
        <SelectElement
          type={TYPE_FILTER_CAMPAIGN}
          setPersonName={setPersonName}
          personName={personName}
        />
        <SelectElement
          type={TYPE_FILTER_DATA_REPORT}
          setPersonName={setPersonName}
          personName={personName}
        />
        <SelectElement
          type={TYPE_FILTER_GROUPING}
          setPersonName={setPersonName}
          personName={personName}
        />
      </div>
      <div className={styles.group_subtitle}>
        <p>
          Выберите метрики в том порядке, в каком они должны отобразиться в
          отчёте
        </p>
        <ToggleButton
          value="check"
          selected={selected}
          color="primary"
          aria-label="Small sizes"
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
        <p>Добавить разбивку по объявлениям</p>
      </div>
      <div className={styles.group_metrics}>
        <SelectElement
          type={TYPE_FILTER_METRICS}
          setPersonName={setPersonName}
          personName={personName}
        />
        {personName &&
          personName.map((item) => (
              <span key={item} className={styles.span}>
                {item}
                <IconInfo type={TYPE_ICON_FILLED_HELP}/>
              </span>
          ))}
      </div>
      <div className={styles.group_button}>
        <ButtonElement type={TYPE_BTN_REPORT_GO} />
        <ButtonElement type={TYPE_BTN_REPORT_MAKE} />
      </div>
    </>
  );
};

export default ReportShaper;
