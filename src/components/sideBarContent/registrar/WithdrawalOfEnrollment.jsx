import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  GraduationCap,
  Info,
  MessageSquareText,
  Send,
  ShieldCheck,
  UserCheck,
  XCircle,
} from "lucide-react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

function WithdrawalOfEnrollment() {
  const withdrawalSteps = [
    {
      number: "01",
      title: "Review",
      fullTitle: "Review Your Enrollment Status",
      description:
        "Before requesting withdrawal, review your current enrollment status and understand the possible academic and administrative requirements associated with withdrawing from enrollment.",
      icon: ClipboardCheck,
      items: [
        "Review your current enrollment information",
        "Identify the semester or academic period involved",
        "Review your enrolled subjects and academic records",
        "Consider any pending academic or administrative transactions",
        "Confirm that withdrawal is the appropriate request for your situation",
      ],
    },
    {
      number: "02",
      title: "Consult",
      fullTitle: "Consult the Appropriate Office or Adviser",
      description:
        "Discuss your intention to withdraw with your academic adviser, department, or the appropriate JHCSC office before submitting the request.",
      icon: MessageSquareText,
      items: [
        "Discuss your intention to withdraw",
        "Ask about the applicable procedure and requirements",
        "Clarify the possible effect on your academic records",
        "Ask about pending obligations or accountabilities",
        "Take note of important deadlines and instructions",
      ],
    },
    {
      number: "03",
      title: "Prepare",
      fullTitle: "Prepare the Required Documents",
      description:
        "Gather the documents and information required for your withdrawal request. Make sure all information is complete, accurate, and readable.",
      icon: ClipboardList,
      items: [
        "Prepare your student identification information",
        "Prepare the required withdrawal form or request",
        "Prepare supporting documents if required",
        "Provide accurate enrollment information",
        "Keep copies of documents submitted for your records",
      ],
    },
    {
      number: "04",
      title: "Submit",
      fullTitle: "Submit Your Withdrawal Request",
      description:
        "Complete the required withdrawal request and submit it through the designated JHCSC process or appropriate authorized office.",
      icon: Send,
      items: [
        "Complete all required information",
        "Clearly indicate the enrollment period being withdrawn",
        "Provide the required reason or supporting information",
        "Attach all required documents",
        "Submit the request to the designated office or authorized personnel",
      ],
    },
    {
      number: "05",
      title: "Evaluate",
      fullTitle: "Wait for Evaluation and Processing",
      description:
        "Your withdrawal request may need to be reviewed by the appropriate offices before it can be officially processed.",
      icon: FileCheck2,
      items: [
        "Wait for the request to be reviewed",
        "Respond to additional requirements if requested",
        "Check the request status when instructed",
        "Follow any instructions from the responsible office",
        "Do not assume the withdrawal is final until officially confirmed",
      ],
    },
    {
      number: "06",
      title: "Clear",
      fullTitle: "Complete Required Clearances",
      description:
        "Depending on the applicable procedure, you may need to settle accountabilities or obtain clearance from relevant offices before the withdrawal can be finalized.",
      icon: ShieldCheck,
      items: [
        "Check whether clearance is required",
        "Review any outstanding accountabilities",
        "Coordinate with the appropriate offices",
        "Submit required clearance documents",
        "Keep proof of completed clearances or transactions",
      ],
    },
    {
      number: "07",
      title: "Confirm",
      fullTitle: "Confirm Your Withdrawal Status",
      description:
        "After the request has been processed, verify that your withdrawal has been officially recorded and keep the relevant documents for future reference.",
      icon: GraduationCap,
      items: [
        "Confirm the official status of your withdrawal",
        "Verify the applicable academic record information",
        "Obtain or keep the appropriate confirmation documents",
        "Keep copies of approved requests and clearances",
        "Contact the appropriate office if you find discrepancies",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />

      <div className="min-h-screen bg-[#F6FBF7] px-4 pb-10 pt-32 sm:px-6 md:ml-72 md:pt-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* HERO */}
          <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#176B38] via-[#238B4E] to-[#48B96D] px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            {/* Decorative shapes */}
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-28 right-24 h-72 w-72 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                  <XCircle size={17} />
                  JHCSC Student Services Guide
                </div>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Withdrawal of Enrollment
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                  A step-by-step guide for students who need to formally
                  withdraw their enrollment and complete the necessary
                  academic and administrative procedures.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <ClipboardCheck size={16} />
                    7 Withdrawal Steps
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <ShieldCheck size={16} />
                    Official Confirmation
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="hidden lg:block">
                <div className="relative mx-auto h-64 w-full max-w-[330px] rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
                  <div className="rounded-2xl bg-white p-5 text-gray-900 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                        <FileText size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2E9B59]">
                          Student Request
                        </p>

                        <p className="font-bold">Enrollment Withdrawal</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl bg-[#F6FBF7] p-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#2E9B59]">
                          <ClipboardCheck size={15} />
                        </div>

                        <span className="text-sm font-medium">
                          Review Request
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[#F6FBF7] p-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#2E9B59]">
                          <ShieldCheck size={15} />
                        </div>

                        <span className="text-sm font-medium">
                          Complete Clearance
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[#EAF7EE] p-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2E9B59] text-white">
                          <CheckCircle2 size={15} />
                        </div>

                        <span className="text-sm font-semibold text-[#176B38]">
                          Official Confirmation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BEFORE YOU BEGIN */}
          <section className="mb-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
                  <Info size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                    Before You Begin
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Understand the withdrawal process
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Withdrawal of enrollment is a formal academic transaction.
                    Before submitting a request, consult the appropriate
                    office and clarify the requirements, deadlines, possible
                    accountabilities, and documents that may be needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#EAF7EE] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2E9B59] text-white">
                  <MessageSquareText size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                    Important Tip
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#176B38]">
                    Consult before submitting
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#39714D]">
                    Ask the appropriate academic office about the current
                    withdrawal procedure and any requirements that apply to
                    your enrollment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* QUICK CHECKLIST */}
          <section className="mb-12">
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2E9B59]">
                Quick Checklist
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                Prepare Before Requesting Withdrawal
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review these items before beginning your withdrawal request.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Enrollment Details",
                  text: "Know your current enrollment and academic period.",
                },
                {
                  icon: FileCheck2,
                  title: "Required Documents",
                  text: "Prepare the appropriate forms and supporting records.",
                },
                {
                  icon: ClipboardList,
                  title: "Accountabilities",
                  text: "Check whether you have pending academic or administrative obligations.",
                },
                {
                  icon: UserCheck,
                  title: "Appropriate Office",
                  text: "Consult the designated office before submitting your request.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#DCEDE1] bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-4 font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PROCESS HEADER */}
          <section className="mb-12">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2E9B59]">
                Step-by-Step Process
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                How to Withdraw Your Enrollment
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Follow the general process below and confirm the exact
                requirements, deadlines, and clearance procedure with the
                appropriate JHCSC office.
              </p>
            </div>

            {/* Desktop Process Indicator */}
            <div className="hidden overflow-hidden rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm lg:block">
              <div className="flex items-start">
                {withdrawalSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <React.Fragment key={step.number}>
                      <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E9B59] text-white shadow-sm">
                          <Icon size={19} />
                        </div>

                        <span className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[#2E9B59]">
                          Step {step.number}
                        </span>

                        <span className="mt-1 text-xs font-semibold text-gray-700">
                          {step.title}
                        </span>
                      </div>

                      {index !== withdrawalSteps.length - 1 && (
                        <div className="mt-6 h-px flex-1 bg-[#CFE7D6]" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet Process Indicator */}
            <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
              {withdrawalSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="flex items-center gap-4 rounded-2xl border border-[#DCEDE1] bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2E9B59] text-sm font-bold text-white">
                      {step.number}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-[#2E9B59]" />

                        <span className="text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                          Step {step.number}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {step.fullTitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* DETAILED STEPS */}
          <section className="mb-12 space-y-6">
            {withdrawalSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group overflow-hidden rounded-3xl border border-[#DCEDE1] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="grid lg:grid-cols-[100px_1fr]">
                    {/* Number Panel */}
                    <div className="flex items-start bg-[#EAF7EE] p-5 sm:p-6 lg:justify-center lg:p-7">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E9B59] text-lg font-bold text-white shadow-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 lg:p-8">
                      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                        <div>
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                              <Icon size={20} />
                            </div>

                            <span className="text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                              Step {step.number}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {step.fullTitle}
                          </h3>

                          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
                            {step.description}
                          </p>

                          <div className="mt-6">
                            <p className="mb-3 text-sm font-bold text-gray-900">
                              What to do
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                              {step.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-start gap-3 rounded-xl bg-[#F6FBF7] p-3"
                                >
                                  <CheckCircle2
                                    size={18}
                                    className="mt-0.5 shrink-0 text-[#2E9B59]"
                                  />

                                  <span className="text-sm leading-5 text-gray-600">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Step Visual */}
                        <div className="hidden lg:block">
                          <div className="h-full min-h-[230px] rounded-3xl border border-[#DCEDE1] bg-[#F6FBF7] p-5">
                            <div className="flex h-full flex-col justify-between">
                              <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2E9B59] shadow-sm">
                                  <Icon size={23} />
                                </div>

                                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                                  Withdrawal Process
                                </p>

                                <h4 className="mt-2 text-lg font-bold text-gray-900">
                                  {step.title}
                                </h4>
                              </div>

                              <div className="mt-8 rounded-2xl bg-white p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium text-gray-500">
                                    Progress
                                  </span>

                                  <span className="text-xs font-bold text-[#2E9B59]">
                                    {step.number} / 07
                                  </span>
                                </div>

                                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#DCEDE1]">
                                  <div
                                    className="h-full rounded-full bg-[#2E9B59]"
                                    style={{
                                      width: `${(index + 1) * (100 / 7)}%`,
                                    }}
                                  />
                                </div>

                                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                                  <CheckCircle2
                                    size={14}
                                    className="text-[#2E9B59]"
                                  />
                                  Review this step before continuing
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* IMPORTANT REMINDER */}
          <section className="mb-8 rounded-3xl bg-[#176B38] p-6 text-white shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Info size={22} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#BFE2CA]">
                  Important Reminder
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Make sure your withdrawal is officially processed
                </h2>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-white/80">
                  Withdrawal requirements, deadlines, clearance procedures,
                  accountabilities, and academic record policies may vary
                  depending on the current JHCSC rules and your academic
                  circumstances. Always confirm the latest requirements with
                  the appropriate JHCSC office. Do not assume that your
                  enrollment has been withdrawn until official confirmation is
                  provided.
                </p>
              </div>
            </div>
          </section>

          {/* COMPLETION CARD */}
          <section className="rounded-3xl border border-[#DCEDE1] bg-white p-7 text-center shadow-sm sm:p-9">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
              <CheckCircle2 size={30} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Withdrawal Guide Complete
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              Once your withdrawal has been officially processed, keep your
              confirmation, clearance documents, and other relevant academic
              records for future reference.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EAF7EE] px-5 py-2.5 text-sm font-semibold text-[#2E9B59]">
              <ShieldCheck size={17} />
              Keep your official records
              <ArrowRight size={16} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WithdrawalOfEnrollment;

