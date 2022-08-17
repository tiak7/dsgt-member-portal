import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import FormItem from "../../components/FormItem/FormItem";
import FlexColumn from "../../layout/FlexColumn/FlexColumn";
import PortalFormTest from "../PortalFormTest/PortalFormTest";
import styles from "./PortalForms.module.scss";

interface PortalFormsProps {}

const PortalForms: FC<PortalFormsProps> = () => (
  <div className={styles.PortalForms} data-testid="PortalForms">
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <h1 className={styles.Major}>Forms</h1>
            <h1 className={styles.Minor}>Create Form</h1>
            <form>
              <FlexColumn></FlexColumn>
            </form>

            <h1 className={styles.Minor}>Available Forms</h1>
            <FlexColumn gap="10px">
              <FormItem
                formName="Leadership Application"
                formTime="5min"
                formLink="#"
              />
              <FormItem />
              <FormItem />
            </FlexColumn>
          </>
        }
      />
      <Route path="/test" element={<PortalFormTest />} />
    </Routes>
  </div>
);

export default PortalForms;
