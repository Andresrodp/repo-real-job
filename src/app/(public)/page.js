"use client";
import { useState } from "react";
import FormSubmission from "@/components/FormSubmission";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ContentCookingCourses from "@/components/ContentCookingCourses";

export default function Home() {
  const [submitConfirm, setSubmitConfirm] = useState(false);

  const handleConfirm = () => {
    setSubmitConfirm(!submitConfirm);
  };
  return (
    <main className="flex w-full flex-col rounded-t-[20px] z-40 gap-20 xl:pt-8 items-center bg-[#ffffff] lg:bg-transparent lg:gap-0 lg:rounded-t-0 lg:pl-8 lg:w-2/5 lg:absolute lg:right-0">
      <ContentCookingCourses styleVisibility="flex lg:hidden" />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={submitConfirm}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="slide"
        >
          {submitConfirm ? (
            <ConfirmationMessage />
          ) : (
            <FormSubmission toggleStatusSubmit={handleConfirm} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}
