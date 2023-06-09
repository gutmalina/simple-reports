import globalStyles from '../../components/global-styles.module.css';
import Button from "../../components/button/button";
import InputElement from "../../components/input-element/input-element";
import {
  TYPE_BTN_SIGN_IN,
  TYPE_INPUT_EMAIL,
  TYPE_INPUT_PASSWORD
} from "../../utils/constants";
import { useState } from 'react';

const Login = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form className={globalStyles.form} onClick={handleLogin}>
      <fieldset className={globalStyles.fieldset}>
        <InputElement type={TYPE_INPUT_EMAIL} />
      </fieldset>
      <fieldset className={globalStyles.fieldset}>
        <InputElement type={TYPE_INPUT_PASSWORD} />
      </fieldset>
      <Button type={TYPE_BTN_SIGN_IN} disabled={disabledBtn}/>
    </form>
  );
};

export default Login;
