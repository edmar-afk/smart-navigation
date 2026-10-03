import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileEdit,
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

function AddingDroppingChangingSubject() {
  const subjectSteps = [
    {
      number: "01",
      title: "Review",
      fullTitle: "Review Your Current Enrollment",
      description:
        "Before requesting to add, drop, or change a subject, review your current enrollment, registered subjects, schedule, and academic requirements.",
      icon: ClipboardCheck,
      items: [
        "Review your currently enrolled subjects",
        "Check your class schedule and subject sections",
        "Identify the subject you want to add, drop, or change",
        "Review your curriculum and academic requirements",
        "Check the applicable deadline for subject adjustments",
      ],
    },
    {
      number: "02",
      title: "Consult",
      fullTitle: "Consult Your Academic Adviser",
      description:
        "Discuss your proposed subject adjustment with your academic adviser, program coordinator, or the appropriate academic office before submitting a request.",
      icon: MessageSquareText,
      items: [
        "Explain the reason for the subject adjustment",
        "Ask whether the requested change is academically appropriate",
        "Confirm available sections or subject alternatives",
        "Check possible effects on your curriculum",
        "Take note of any instructions or required approvals",
      ],
    },
    {
      number: "03",
      title: "Prepare",
      fullTitle: "Prepare the Required Information",
      description:
        "Prepare the student information and documents needed to process your request. Make sure the details you provide are accurate and complete.",
      icon: ClipboardList,
      items: [
        "Prepare your student identification information",
        "Prepare your current enrollment details",
        "Identify the subject code and subject title",
        "Prepare the required add/drop/change form if applicable",
        "Keep copies or records of your submitted request",
      ],
    },
    {
      number: "04",
      title: "Request",
      fullTitle: "Submit Your Subject Adjustment Request",
      description:
        "Complete the appropriate request and submit it through the designated process of JHCSC or the responsible academic office.",
      icon: Send,
      items: [
        "Select the appropriate subject adjustment",
        "Indicate the subject to be added, dropped, or changed",
        "Provide the required reason or supporting information",
        "Attach required documents or approvals",
        "Submit the request to the designated office or authorized personnel",
      ],
    },
    {
      number: "05",
      title: "Evaluate",
      fullTitle: "Wait for Evaluation and Approval",
      description:
        "Your request may require evaluation and approval by the appropriate academic personnel before the adjustment can be reflected in your official enrollment record.",
      icon: FileCheck2,
      items: [
        "Wait for the request to be reviewed",
        "Respond to additional requirements if requested",
        "Check your request status when instructed",
        "Follow any additional instructions from the academic office",
        "Do not assume the adjustment is final until officially confirmed",
      ],
    },
    {
      number: "06",
      title: "Verify",
      fullTitle: "Verify Your Updated Enrollment",
      description:
        "After your request has been approved, verify that the correct subject adjustment has been reflected in your enrollment information.",
      icon: RefreshCw,
      items: [
        "Check your updated list of enrolled subjects",
        "Confirm the correct subject and section",
        "Review your updated class schedule",
        "Check for possible schedule conflicts",
        "Report discrepancies to the appropriate office promptly",
      ],
    },
    {
      number: "07",
      title: "Finalize",
      fullTitle: "Keep Your Updated Academic Records",
      description:
        "Once the subject adjustment has been completed, keep a copy of the updated enrollment information and any approval or transaction records.",
      icon: GraduationCap,
      items: [
        "Keep your updated enrollment record",
        "Keep copies of approved forms or requests",
        "Follow the updated class schedule",
        "Attend the correct subject and section",
        "Keep your records for future academic transactions",
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
                  <FileEdit size={17} />
                  JHCSC Student Services Guide
                </div>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Adding, Dropping & Changing Subjects
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                  A step-by-step guide for students who need to add a subject,
                  drop an enrolled subject, or request a change in their
                  registered subject or section.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <ClipboardCheck size={16} />
                    7 Adjustment Steps
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                    <ShieldCheck size={16} />
                    Approval Required
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="hidden lg:block">
                <div className="relative mx-auto h-64 w-full max-w-[330px] rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
                  <div className="rounded-2xl bg-white p-5 text-gray-900 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                        <FileEdit size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#2E9B59]">
                          Academic Adjustment
                        </p>

                        <p className="font-bold">Subject Request</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-3 rounded-xl bg-[#F6FBF7] p-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#2E9B59]">
                          <ArrowRight size={15} />
                        </div>

                        <span className="text-sm font-medium">
                          Add Subject
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[#F6FBF7] p-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#2E9B59]">
                          <RefreshCw size={15} />
                        </div>

                        <span className="text-sm font-medium">
                          Change Subject
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[#EAF7EE] p-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2E9B59] text-white">
                          <CheckCircle2 size={15} />
                        </div>

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
                    Review your enrollment before making changes
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Adding, dropping, or changing a subject may affect your
                    schedule, curriculum, academic load, and enrollment record.
                    Review your current subjects and consult the appropriate
                    academic adviser before submitting a request.
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
                    Academic Tip
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#176B38]">
                    Consult before changing subjects
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#39714D]">
                    Your adviser can help you determine whether the requested
                    subject adjustment fits your curriculum and academic plan.
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
                Prepare Before Requesting a Subject Change
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review these items before submitting an add, drop, or change
                request.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Current Subjects",
                  text: "Know which subjects you are currently enrolled in.",
                },
                {
                  icon: FileCheck2,
                  title: "Subject Details",
                  text: "Prepare the subject code, title, and section.",
                },
                {
                  icon: ClipboardList,
                  title: "Required Forms",
                  text: "Prepare the appropriate request form if applicable.",
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
                How to Add, Drop, or Change a Subject
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Follow the general process below and confirm the exact
                requirements, deadlines, and approval procedure with the
                appropriate JHCSC office.
              </p>
            </div>

            {/* Desktop Process Indicator */}
            <div className="hidden overflow-hidden rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm lg:block">
              <div className="flex items-start">
                {subjectSteps.map((step, index) => {
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

                      {index !== subjectSteps.length - 1 && (
                        <div className="mt-6 h-px flex-1 bg-[#CFE7D6]" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet Process Indicator */}
            <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
              {subjectSteps.map((step) => {
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
            {subjectSteps.map((step, index) => {
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
                                  Academic Adjustment
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
                  Confirm your subject adjustment before relying on it
                </h2>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-white/80">
                  Requirements, deadlines, available sections, approval
                  procedures, and rules for adding, dropping, or changing
                  subjects may vary depending on the academic program and
                  current JHCSC policies. Always confirm the latest procedure
                  with the appropriate academic office or adviser. Do not
                  assume that your request has been completed until the updated
                  enrollment record has been officially confirmed.
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
              Subject Adjustment Guide Complete
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              After your request has been approved, verify your updated
              enrollment record and make sure your subject, section, and class
              schedule are correct.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EAF7EE] px-5 py-2.5 text-sm font-semibold text-[#2E9B59]">
              <ShieldCheck size={17} />
              Review your updated enrollment
              <ArrowRight size={16} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AddingDroppingChangingSubject;

