import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileSearch,
  GraduationCap,
  Info,
  MessageSquareText,
  RefreshCw,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

function ShiftingPrograms() {
  const shiftingSteps = [
    {
      number: "01",
      title: "Understand",
      fullTitle: "Understand the Shifting Requirements",
      description:
        "Before requesting to shift programs, understand the requirements, qualifications, and policies that apply to your intended academic program.",
      icon: Info,
      items: [
        "Identify your current academic program",
        "Identify the program you want to shift into",
        "Check the qualifications and requirements of the target program",
        "Review applicable academic or institutional policies",
        "Confirm whether the target program is accepting shifters",
      ],
    },
    {
      number: "02",
      title: "Consult",
      fullTitle: "Consult the Appropriate Office or Adviser",
      description:
        "Discuss your plans with your academic adviser, department, program coordinator, or the appropriate JHCSC office before submitting your request.",
      icon: MessageSquareText,
      items: [
        "Discuss your reason for shifting",
        "Ask about the current requirements and procedure",
        "Confirm available slots in the target program",
        "Ask how previously completed subjects may be evaluated",
        "Take note of deadlines and instructions",
      ],
    },
    {
      number: "03",
      title: "Prepare",
      fullTitle: "Prepare the Required Documents",
      description:
        "Gather all documents needed for your shifting request and make sure your records are complete, accurate, and readable.",
      icon: ClipboardList,
      items: [
        "Prepare your student identification information",
        "Prepare your academic records or grades",
        "Complete the required shifting or change-of-program form",
        "Prepare supporting documents requested by the office",
        "Keep copies of submitted documents for your records",
      ],
    },
    {
      number: "04",
      title: "Submit",
      fullTitle: "Submit Your Shifting Request",
      description:
        "Complete the required information and submit your shifting application through the process provided by the appropriate JHCSC office.",
      icon: Send,
      items: [
        "Complete all required information",
        "Indicate your current program",
        "Indicate your intended program",
        "Attach all required documents",
        "Submit the request to the designated office or authorized personnel",
      ],
    },
    {
      number: "05",
      title: "Evaluate",
      fullTitle: "Wait for Evaluation and Approval",
      description:
        "Your request may need to be evaluated by the appropriate academic personnel or office before the program shift can be officially approved.",
      icon: FileSearch,
      items: [
        "Wait for the official evaluation of your request",
        "Respond to additional requirements if requested",
        "Check your request status when instructed",
        "Follow any additional instructions provided",
        "Wait for official confirmation before considering the shift final",
      ],
    },
    {
      number: "06",
      title: "Adjust",
      fullTitle: "Review Subject and Academic Adjustments",
      description:
        "After approval, review your new curriculum and understand how previously completed subjects may apply to your new academic program.",
      icon: RefreshCw,
      items: [
        "Review your new curriculum",
        "Check which completed subjects may be credited",
        "Identify subjects that you still need to complete",
        "Confirm your updated year level or academic standing",
        "Ask your adviser about your recommended subjects",
      ],
    },
    {
      number: "07",
      title: "Finalize",
      fullTitle: "Complete Your New Program Enrollment",
      description:
        "Once the shift has been officially approved, complete the enrollment or registration requirements for your new academic program.",
      icon: GraduationCap,
      items: [
        "Confirm your new program in the student records",
        "Follow the enrollment instructions provided",
        "Register for assigned or recommended subjects",
        "Complete any remaining requirements",
        "Keep your approval and enrollment records",
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
                  <RefreshCw size={17} />
                  JHCSC Student Services Guide
                </div>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Shifting Programs
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                  A clear step-by-step guide for students who are planning to
                  shift from their current academic program to another program
                  at JHCSC.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <ClipboardCheck size={16} />
                    7 Shifting Steps
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <ShieldCheck size={16} />
                    Review Before Submission
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="hidden lg:block">
                <div className="relative mx-auto h-64 w-full max-w-[330px] rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
                  <div className="rounded-2xl bg-white p-5 text-gray-900 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                        <RefreshCw size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2E9B59]">
                          Student Request
                        </p>
                        <p className="font-bold">Program Shift</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl bg-[#F6FBF7] p-3">
                        <CheckCircle2
                          size={18}
                          className="text-[#2E9B59]"
                        />
                        <span className="text-sm font-medium">
                          Current Program
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[#F6FBF7] p-3">
                        <ArrowRight
                          size={18}
                          className="text-[#2E9B59]"
                        />
                        <span className="text-sm font-medium">
                          Target Program
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[#EAF7EE] p-3">
                        <ShieldCheck
                          size={18}
                          className="text-[#2E9B59]"
                        />
                        <span className="text-sm font-semibold text-[#176B38]">
                          Official Approval
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
                    Understand the program you want to enter
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Program shifting may involve qualifications, available
                    slots, academic evaluation, and approval from the
                    appropriate office. Review the requirements and consult
                    your adviser before submitting a request.
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
                    Shifting Tip
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#176B38]">
                    Ask before you apply
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#39714D]">
                    Your adviser or designated office can clarify requirements,
                    available slots, deadlines, and the applicable procedure.
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
                Prepare Before Requesting a Shift
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Having these items ready can make the shifting process easier
                to understand and complete.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Current Program",
                  text: "Know your current academic program and status.",
                },
                {
                  icon: FileCheck2,
                  title: "Target Program",
                  text: "Review the program you want to shift into.",
                },
                {
                  icon: ClipboardList,
                  title: "Documents",
                  text: "Prepare records and required forms.",
                },
                {
                  icon: UserCheck,
                  title: "Academic Adviser",
                  text: "Consult the appropriate adviser or office.",
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
                How to Shift Programs
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Follow the general sequence below and confirm the exact
                requirements with the appropriate JHCSC office or academic
                adviser.
              </p>
            </div>

            {/* Desktop process indicator */}
            <div className="hidden overflow-hidden rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm lg:block">
              <div className="flex items-start">
                {shiftingSteps.map((step, index) => {
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

                      {index !== shiftingSteps.length - 1 && (
                        <div className="mt-6 h-px flex-1 bg-[#CFE7D6]" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Mobile / tablet process indicator */}
            <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
              {shiftingSteps.map((step) => {
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
            {shiftingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group overflow-hidden rounded-3xl border border-[#DCEDE1] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="grid lg:grid-cols-[100px_1fr]">
                    {/* Number panel */}
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

                        {/* Step visual */}
                        <div className="hidden lg:block">
                          <div className="h-full min-h-[230px] rounded-3xl border border-[#DCEDE1] bg-[#F6FBF7] p-5">
                            <div className="flex h-full flex-col justify-between">
                              <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2E9B59] shadow-sm">
                                  <Icon size={23} />
                                </div>

                                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                                  Shifting Process
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
                  Confirm your shift before enrolling
                </h2>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-white/80">
                  Program shifting requirements, qualifications, available
                  slots, deadlines, and approval procedures may vary depending
                  on the academic program and current JHCSC policies. Always
                  confirm the latest information with the appropriate JHCSC
                  office or academic adviser. Do not assume that a request has
                  been approved until official confirmation is provided.
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
              Ready to Complete Your Program Shift?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              Make sure your request has been properly evaluated and officially
              approved before proceeding with enrollment under your new
              academic program.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EAF7EE] px-5 py-2.5 text-sm font-semibold text-[#2E9B59]">
              <ShieldCheck size={17} />
              Follow each step carefully
              <ArrowRight size={16} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ShiftingPrograms;

