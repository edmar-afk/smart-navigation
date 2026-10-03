import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  FileText,
  GraduationCap,
  Info,
  Send,
  Upload,
  UserPlus,
  ShieldCheck,
} from "lucide-react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

function EnrollmentProcess() {
  const enrollmentSteps = [
    {
      number: "01",
      title: "Prepare",
      subtitle: "Get your requirements ready",
      description:
        "Before starting your enrollment, prepare the documents and information required for your application.",
      icon: ClipboardCheck,
      items: [
        "Valid identification or school ID",
        "Required academic records",
        "Birth certificate or equivalent document",
        "Recent ID picture",
        "Other required enrollment documents",
      ],
    },
    {
      number: "02",
      title: "Access",
      subtitle: "Create or access your account",
      description:
        "Access the official JHCSC enrollment portal and use your account to begin your enrollment application.",
      icon: UserPlus,
      items: [
        "Open the official enrollment portal",
        "Register if you are a new student",
        "Log in if you already have an account",
        "Keep your account credentials secure",
      ],
    },
    {
      number: "03",
      title: "Complete",
      subtitle: "Provide your student information",
      description:
        "Enter your personal, contact, and academic information carefully and make sure all details are accurate.",
      icon: FileText,
      items: [
        "Complete all required fields",
        "Check your personal information",
        "Enter correct contact details",
        "Provide the appropriate academic information",
      ],
    },
    {
      number: "04",
      title: "Upload",
      subtitle: "Submit your required documents",
      description:
        "Upload clear and readable copies of the required documents according to the portal's file requirements.",
      icon: Upload,
      items: [
        "Use clear document scans or photos",
        "Follow the required file format",
        "Make sure documents are not cropped",
        "Review uploaded files before continuing",
      ],
    },
    {
      number: "05",
      title: "Review",
      subtitle: "Check your enrollment details",
      description:
        "Carefully review your information and uploaded documents before submitting your enrollment application.",
      icon: FileCheck2,
      items: [
        "Check your name and personal information",
        "Verify your selected program",
        "Review uploaded documents",
        "Correct errors before submission",
      ],
    },
    {
      number: "06",
      title: "Submit",
      subtitle: "Send your enrollment application",
      description:
        "Once everything is complete and accurate, submit your enrollment application through the official portal.",
      icon: Send,
      items: [
        "Confirm all required fields are complete",
        "Submit your enrollment application",
        "Wait for the confirmation message",
        "Save your reference number",
      ],
    },
    {
      number: "07",
      title: "Finalize",
      subtitle: "Complete payment and enrollment",
      description:
        "Follow the official instructions for payment and final enrollment confirmation when applicable.",
      icon: CreditCard,
      items: [
        "Follow the official payment instructions",
        "Keep your payment receipt",
        "Check your enrollment status",
        "Complete any remaining requirements",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />

      <main className="min-h-screen bg-[#F5FAF6] ml-0 md:ml-72 px-4 pb-12 pt-32 md:px-8 md:pt-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* HERO */}
          <section className="relative mb-8 overflow-hidden rounded-[32px] bg-[#238B4E] shadow-lg">
            {/* Decorative shapes */}
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-1/2 h-40 w-40 rounded-full bg-[#48B96D]/20" />

            <div className="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_300px] lg:items-center lg:px-12 lg:py-12">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                  <GraduationCap size={16} />
                  Student Services Guide
                </div>

                <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Enrollment
                  <span className="block text-[#BDF0CC]">
                    Process & Procedures
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Follow this guide to prepare your requirements, complete your
                  student information, submit your application, and finalize
                  your enrollment.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#238B4E]">
                    <ClipboardCheck size={17} />7 Enrollment Steps
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur">
                    <ShieldCheck size={17} />
                    Review Before Submission
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="hidden lg:block">
                <div className="rotate-2 rounded-3xl bg-white p-5 shadow-2xl">
                  <div className="rounded-2xl border border-[#DCEDE1] bg-[#F7FCF8] p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                        <GraduationCap size={22} />
                      </div>

                      <span className="rounded-full bg-[#EAF7EE] px-3 py-1 text-xs font-bold text-[#2E9B59]">
                        ENROLLMENT
                      </span>
                    </div>

                    <div className="mt-7 space-y-4">
                      {[
                        "Requirements",
                        "Student Information",
                        "Documents",
                        "Review & Submit",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2E9B59] text-white">
                            <CheckCircle2 size={15} />
                          </div>

                          <div className="h-2 flex-1 rounded-full bg-[#DCEDE1]">
                            <div
                              className="h-2 rounded-full bg-[#48B96D]"
                              style={{
                                width:
                                  index === 0
                                    ? "100%"
                                    : index === 1
                                      ? "80%"
                                      : index === 2
                                        ? "60%"
                                        : "40%",
                              }}
                            />
                          </div>

                          <span className="text-[10px] font-semibold text-gray-500">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#2E9B59]">
                      <CheckCircle2 size={16} />
                      Ready for enrollment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BEFORE YOU BEGIN */}
          <section className="mb-8 grid gap-5 lg:grid-cols-[1fr_340px]">
            <div className="rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
                  <Info size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                    Before You Begin
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Prepare everything before starting
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Make sure your documents are ready and that the information
                    you will provide is accurate. Keep copies of important
                    enrollment records and follow the latest official JHCSC
                    instructions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#EAF7EE] p-6">
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-[#2E9B59]" />

                <p className="text-sm font-bold text-[#176B38]">
                  Enrollment Tip
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#39714D]">
                Review your information carefully before submitting. Errors in
                personal or academic information may require correction.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#2E9B59]">
                <ArrowRight size={15} />
                Check your details before submission
              </div>
            </div>
          </section>

          {/* QUICK CHECKLIST */}
          <section className="mb-10 rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                  Quick Checklist
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  What You Should Have Ready
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                <ClipboardCheck size={21} />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Valid identification",
                "Academic records",
                "Recent ID picture",
                "Required documents",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-[#E0EEE4] bg-[#F8FCF9] p-4"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#2E9B59]" />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS INDICATOR */}
          <section className="mb-10">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                Enrollment Process
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                From Preparation to Finalization
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Follow each stage in order to help make your enrollment process
                organized and complete.
              </p>
            </div>

            {/* Desktop */}
            <div className="relative hidden lg:block">
              <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-[#D8EADF]" />

              <div className="grid grid-cols-7 gap-3">
                {enrollmentSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number} className="relative">
                      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#F5FAF6] bg-[#2E9B59] text-white shadow-md">
                        <Icon size={21} />
                      </div>

                      <div className="mt-5 text-center">
                        <span className="text-xs font-bold text-[#2E9B59]">
                          {step.number}
                        </span>

                        <h3 className="mt-1 text-sm font-bold text-gray-900">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet */}
            <div className="grid gap-4 md:grid-cols-2 lg:hidden">
              {enrollmentSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-3xl border border-[#DCEDE1] bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E9B59] text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <span className="text-xs font-bold text-[#2E9B59]">
                          STEP {step.number}
                        </span>

                        <h3 className="font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* DETAILED STEPS */}
          <section className="mb-10 space-y-5">
            {enrollmentSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group overflow-hidden rounded-3xl border border-[#DCEDE1] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="grid lg:grid-cols-[110px_1fr]">
                    {/* Number */}
                    <div className="flex items-center justify-center bg-[#EAF7EE] p-6 lg:p-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E9B59] text-xl font-extrabold text-white shadow-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <div className="grid gap-7 lg:grid-cols-[1fr_350px]">
                        <div>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                              <Icon size={19} />
                            </div>

                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                                Step {step.number}
                              </p>

                              <h3 className="text-xl font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-6 text-gray-600">
                            {step.description}
                          </p>

                          <div className="mt-6">
                            <p className="mb-3 text-sm font-bold text-gray-900">
                              Checklist
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                              {step.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-start gap-2.5"
                                >
                                  <CheckCircle2
                                    size={17}
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

                        {/* Visual panel */}
                        <div className="relative overflow-hidden rounded-2xl bg-[#F6FBF7] p-6">
                          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DDF2E3]" />

                          <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2E9B59] shadow-sm">
                              <Icon size={22} />
                            </div>

                            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                              {step.subtitle}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                              Complete this stage before proceeding to the next
                              step.
                            </p>

                            {index < enrollmentSteps.length - 1 && (
                              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#2E9B59]">
                                Next step
                                <ArrowRight size={14} />
                              </div>
                            )}

                            {index === enrollmentSteps.length - 1 && (
                              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#2E9B59]">
                                Enrollment completed
                                <CheckCircle2 size={15} />
                              </div>
                            )}
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
          <section className="mb-8 overflow-hidden rounded-3xl bg-[#176B38] p-6 text-white sm:p-8">
            <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Info size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#BDF0CC]">
                  Important Reminder
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Always check the latest enrollment instructions
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80">
                  Enrollment requirements, schedules, fees, available programs,
                  and procedures may change depending on the enrollment period.
                  Follow the latest official instructions provided by JHCSC.
                </p>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#176B38] md:flex">
                <ShieldCheck size={23} />
              </div>
            </div>
          </section>

          {/* COMPLETION CARD */}
          <section className="rounded-3xl border border-[#DCEDE1] bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
              <GraduationCap size={30} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
              Student Enrollment Guide
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Ready to Complete Your Enrollment?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              Prepare your requirements, complete your information, upload the
              necessary documents, review everything carefully, and follow the
              official instructions to finalize your enrollment.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EAF7EE] px-5 py-2.5 text-sm font-bold text-[#2E9B59]">
              <CheckCircle2 size={17} />
              Follow each step carefully
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default EnrollmentProcess;
