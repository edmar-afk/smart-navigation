import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  GraduationCap,
  Info,
  MapPin,
  Search,
  Send,
  ShieldCheck,
} from "lucide-react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

function ReleasingTOR() {
  const steps = [
    {
      number: "01",
      title: "Prepare",
      subtitle: "Get your requirements ready",
      description:
        "Prepare the information and documents needed before submitting your Transcript of Records request.",
      icon: ClipboardCheck,
      items: [
        "Valid identification",
        "Complete student information",
        "Purpose of the TOR request",
        "Other documents required by the office",
      ],
    },
    {
      number: "02",
      title: "Request",
      subtitle: "Submit your TOR application",
      description:
        "Complete the required request form and submit it through the designated JHCSC office or official process.",
      icon: Send,
      items: [
        "Complete the request form",
        "Provide accurate information",
        "Specify the purpose of the request",
        "Submit the required documents",
      ],
    },
    {
      number: "03",
      title: "Verify",
      subtitle: "Records are checked",
      description:
        "The appropriate office verifies your student information and academic records before processing the document.",
      icon: Search,
      items: [
        "Student information is verified",
        "Academic records are checked",
        "Discrepancies may need clarification",
        "Additional requirements may be requested",
      ],
    },
    {
      number: "04",
      title: "Process",
      subtitle: "Wait for document preparation",
      description:
        "Once your request has been accepted, the office processes and prepares your Transcript of Records.",
      icon: Clock3,
      items: [
        "Keep your request reference",
        "Take note of the processing schedule",
        "Monitor your request when applicable",
        "Wait for the official release notice",
      ],
    },
    {
      number: "05",
      title: "Claim",
      subtitle: "Receive your TOR",
      description:
        "Once your TOR is ready, follow the official instructions for claiming or receiving your document.",
      icon: FileCheck2,
      items: [
        "Bring your valid identification",
        "Present your receipt or reference if required",
        "Follow the designated release procedure",
        "Receive your Transcript of Records",
      ],
    },
    {
      number: "06",
      title: "Check",
      subtitle: "Review your document",
      description:
        "Before completing the transaction, carefully review the released document and verify that your information is correct.",
      icon: ShieldCheck,
      items: [
        "Check your name",
        "Check your student information",
        "Review academic records",
        "Report discrepancies to the appropriate office",
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
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 right-24 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-1/2 h-40 w-40 rounded-full bg-[#48B96D]/20" />

            <div className="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_300px] lg:items-center lg:px-12 lg:py-12">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                  <GraduationCap size={16} />
                  Student Services Guide
                </div>

                <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Transcript of Records
                  <span className="block text-[#BDF0CC]">
                    Request & Release
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  A simple guide to help students understand the general steps
                  involved in requesting, processing, and receiving their
                  Transcript of Records.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#238B4E]">
                    <FileText size={17} />
                    Document Request
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur">
                    <Clock3 size={17} />
                    Follow Official Schedule
                  </div>
                </div>
              </div>

              {/* Hero document card */}
              <div className="hidden lg:block">
                <div className="rotate-2 rounded-3xl bg-white p-5 shadow-2xl">
                  <div className="rounded-2xl border border-[#DCEDE1] bg-[#F7FCF8] p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                        <FileText size={22} />
                      </div>

                      <span className="rounded-full bg-[#EAF7EE] px-3 py-1 text-xs font-bold text-[#2E9B59]">
                        TOR
                      </span>
                    </div>

                    <div className="mt-7 space-y-3">
                      <div className="h-2 w-4/5 rounded-full bg-[#CFE7D6]" />
                      <div className="h-2 w-full rounded-full bg-[#E4F0E7]" />
                      <div className="h-2 w-11/12 rounded-full bg-[#E4F0E7]" />
                      <div className="h-2 w-3/5 rounded-full bg-[#E4F0E7]" />
                    </div>

                    <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#2E9B59]">
                      <CheckCircle2 size={16} />
                      Academic Record
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTRO / NOTICE */}
          <section className="mb-8 grid gap-5 lg:grid-cols-[1fr_340px]">
            <div className="rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
                  <Info size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                    Before You Start
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-gray-900">
                    Know what you need before requesting your TOR
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Requirements, fees, processing times, and release procedures
                    may vary. Confirm the current instructions with the
                    appropriate JHCSC office before submitting your request.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#EAF7EE] p-6">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#2E9B59]" />

                <p className="text-sm font-bold text-[#176B38]">
                  Where to Start?
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#39714D]">
                Follow the designated JHCSC student records or registrar
                procedure for submitting your request.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#2E9B59]">
                <ArrowRight size={15} />
                Ask the appropriate office for current instructions
              </div>
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="mb-10 rounded-3xl border border-[#DCEDE1] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                  Quick Checklist
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  Prepare These Before Your Request
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                <ClipboardCheck size={21} />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Valid identification",
                "Student information",
                "TOR request details",
                "Required supporting documents",
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

          {/* PROCESS */}
          <section className="mb-10">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
                Request Process
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                From Request to Release
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Use the process below as a general guide. Always follow the
                latest instructions provided by JHCSC.
              </p>
            </div>

            {/* Desktop process line */}
            <div className="relative hidden lg:block">
              <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-[#D8EADF]" />

              <div className="grid grid-cols-6 gap-4">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number} className="relative">
                      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#F5FAF6] bg-[#2E9B59] text-white shadow-md">
                        <Icon size={22} />
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

            {/* Mobile / tablet cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:hidden">
              {steps.map((step) => {
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
            {steps.map((step, index) => {
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

                            {index === steps.length - 1 && (
                              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#2E9B59]">
                                Request completed
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
                  Always verify the latest TOR procedures
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80">
                  Processing requirements, fees, schedules, authorized
                  representatives, and release procedures may change. Confirm
                  the latest information with the appropriate JHCSC office
                  before making a request.
                </p>
              </div>

              <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#176B38]">
                <ShieldCheck size={23} />
              </div>
            </div>
          </section>

          {/* COMPLETION CARD */}
          <section className="rounded-3xl border border-[#DCEDE1] bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
              <FileCheck2 size={30} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#2E9B59]">
              Student Document Guide
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Your TOR Request Journey
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              Prepare your requirements, submit your request, complete the
              necessary verification and processing, then follow the official
              instructions for claiming your Transcript of Records.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EAF7EE] px-5 py-2.5 text-sm font-bold text-[#2E9B59]">
              <CheckCircle2 size={17} />
              Keep your records and receipts safe
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ReleasingTOR;
