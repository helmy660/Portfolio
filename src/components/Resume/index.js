import React from "react";
import { ResumeCard, Iframe } from "../../style/resume";
import { CardWrapper } from "../../style/wrapper";
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
