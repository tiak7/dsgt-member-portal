import React, { FC, useState } from "react";
import { attemptLogin } from "../../API/Login";
import ErrorText from "../../components/ErrorText/ErrorText";
import InputField from "../../components/InputField/InputField";
import FlexColumn from "../../layout/FlexColumn/FlexColumn";
import FlexRow from "../../layout/FlexRow/FlexRow";
import styles from "./Login.module.scss";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle all of the form elements updating (save input to state)
  const handleChange_email = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_ ]/g, "");
    setEmail(e.target.value);
  };
  const handleChange_password = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //~`! @#$%^&*()_-+={[}]|\:;"'<,>.?/
    // e.target.value = e.target.value.replace(
    //   /[^a-zA-Z0-9 !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g,
    //   ""
    // );
    setPassword(e.target.value);
  };

  //handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    await attemptLogin(email, password).catch((err) => {
      setError(err.message);
    });
  };

  return (
    <div className={styles.Login} data-testid="Login">
      <FlexRow spacing="center" align="center" height="100vh" padding="1em">
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <form onSubmit={handleSubmit}>
            <FlexColumn width="100%">
              <h1 className={styles.Major}>Login</h1>
              <InputField
                type="email"
                placeholder="Email"
                width="100%"
                onChange={handleChange_email}
              />
              <InputField
                type="password"
                placeholder="Password"
                onChange={handleChange_password}
                width="100%"
              />
              <InputField type="submit" placeholder="Login" width="100%" />
              <div style={{ width: "100%" }}>
                <FlexRow
                  height="fit-content"
                  width="100%"
                  spacing="flex-end"
                  align="center"
                >
                  <a className={styles.InlineLink} href="/passwordreset">
                    forgot password?
                  </a>
                </FlexRow>
              </div>

              <ErrorText>{error}</ErrorText>
              <div className={styles.Divider}></div>
              <div className={styles.Bottom}>
                <FlexRow
                  spacing="space-between"
                  align="center"
                  height="fit-content"
                  width="100%"
                >
                  <h3 className={styles.Mini}>I need an account:</h3>
                  <a className={styles.InlineLink} href="/register">
                    Register
                  </a>
                </FlexRow>
              </div>
            </FlexColumn>
          </form>
        </div>
      </FlexRow>
      {/* <div className={styles.Panel}>
        <FlexRow height="100%">
          <div className={`${styles.PanelHalf}`}>
            <form onSubmit={handleSubmit}>
              <FlexColumn
                spacing="center"
                align="center"
                height="100%"
                width="100%"
                padding="0 20%"
              >
                <h1 className={styles.Header}>Welcome Back!</h1>
                <InputField
                  type="email"
                  placeholder="Email"
                  width="100%"
                  onChange={handleChange_email}
                />
                <InputField
                  type="password"
                  placeholder="Password"
                  onChange={handleChange_password}
                  width="100%"
                />
                <InputField type="submit" placeholder="Login" width="100%" />
                <div style={{ width: "100%" }}>
                  <FlexRow height="fit-content" width="100%" spacing="flex-end">
                    <a className={styles.mini} href="/passwordreset">
                      forgot password?
                    </a>
                  </FlexRow>
                </div>

                <ErrorText>{error}</ErrorText>
                <div className={styles.Divider}></div>
                <div className={styles.bottom}>
                  <FlexRow
                    spacing="space-between"
                    align="center"
                    height="fit-content"
                    width="100%"
                  >
                    <h3 className={styles.mini}>I need an account:</h3>
                    <a className={styles.InlineButton} href="/signup">
                      Sign Up
                    </a>
                  </FlexRow>
                </div>
              </FlexColumn>
            </form>
          </div>
          <div className={`${styles.PanelHalf} ${styles.PanelRight}`}></div>
        </FlexRow>
      </div> */}
    </div>
  );
};

export default Login;
