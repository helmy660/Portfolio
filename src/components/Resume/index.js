import React from "react";
import { ResumeCard, Iframe } from "./Style";
import { CardWrapper } from "../../globalStyle/Style";
import file from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <CardWrapper>
      <ResumeCard>
        <Iframe src={file} />
      </ResumeCard>
    </CardWrapper>
  );
}
