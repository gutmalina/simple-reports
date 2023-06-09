import globalStyles from '../../components/global-styles.module.css';
import InputElement from '../../components/input-element/input-element';
import Button from '../../components/button/button';
import { TYPE_INPUT_EMAIL, TYPE_BTN_RESTORE } from '../../utils/constants';
import { useState } from 'react';

const RestorePassword = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleRestorePassword = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={globalStyles.form} onClick={handleRestorePassword}>
        <fieldset className={globalStyles.fieldset}>
          <InputElement type={TYPE_INPUT_EMAIL} />
        </fieldset>
        <Button type={TYPE_BTN_RESTORE} disabled={disabledBtn}/>
      </form>
    </>
  )
};

export default RestorePassword;
