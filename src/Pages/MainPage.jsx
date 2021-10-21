import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStateLogin } from "../redux/features/login";

function MainPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleIsDisabled = () => {
    if (login === "developer21" && password === "123456") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleLogin = () => {
    dispatch(setStateLogin(login));
    history.push("/profile");
  };

  useEffect(() => {
    handleIsDisabled();
  }, [login, password]);

  return (
    <div>
      <h1>Войти</h1>
      <form>
        <div>
          <input type="text" onChange={handleSetLogin} />
        </div>
        <div>
          <input type="password" onChange={handleSetPassword} />
        </div>
        <div>
          <button disabled={isDisabled} onClick={handleLogin}>
            ВОЙТИ
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
