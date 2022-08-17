import React, { FC, useEffect, useState } from "react";
import styles from "./PortalFormTest.module.scss";

interface PortalFormTestProps {}

enum FormQuestionType {
  Text,
  Email,
  Radio,
  Checkbox,
}

type FormQuestion = {
  type: FormQuestionType;
  indentifier: string;
  question: string;
  answers?: FormAnswer[] | string[] | string;
};

type FormAnswer = {
  type?: "other" | undefined;
  answer?: string;
};

const formData: FormQuestion[] = [
  {
    type: FormQuestionType.Radio,
    indentifier: "q1",
    question: "q1?",
    answers: ["a1", "a2", "a3"],
  },
  {
    type: FormQuestionType.Radio,
    indentifier: "q2",
    question: "q2?",
    answers: ["a1", "a2", "a3"],
  },
];

const PortalFormTest: FC<PortalFormTestProps> = () => {
  const [form, setForm] = useState<React.ReactNode[]>();

  useEffect(() => {
    let form1: React.ReactNode[] = [];
    formData.forEach((question) => {
      form1.push(<h1>{question.question}</h1>);
    });

    setForm(form1);
  }, []);
  return (
    <div className={styles.PortalFormTest} data-testid="PortalFormTest">
      {form}
    </div>
  );
};

export default PortalFormTest;
