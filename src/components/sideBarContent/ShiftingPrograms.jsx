import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  GraduationCap,
  Info,
  MessageSquareText,
  Send,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import Header from "../Header";
import Sidebar from "../Sidebar";

function ShiftingPrograms() {
  const shiftingSteps = [
    {
      number: "01",
      title: "Understand the Shifting Requirements",
      description:
        "Before requesting to shift programs, make sure you understand the requirements, qualifications, and policies that apply to your intended program.",
      icon: Info,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Shifting+Requirements",
      requirements: [
        "Identify the program you currently belong to",
        "Identify the program you want to shift into",
        "Check the qualifications and requirements of the target program",
        "Review any applicable academic or institutional policies",
        "Confirm whether the target program is accepting shifters",
      ],
    },
    {
      number: "02",
      title: "Consult the Appropriate Office or Adviser",
      description:
        "Talk to your academic adviser, department, program coordinator, or the appropriate JHCSC office before submitting a shifting request.",
      icon: MessageSquareText,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Academic+Consultation",
      requirements: [
        "Discuss your reason for shifting",
        "Ask about the requirements and procedure",
        "Confirm available slots in the target program",
        "Ask how previously completed subjects may be evaluated",
        "Take note of important deadlines and instructions",
      ],
    },
    {
      number: "03",
      title: "Prepare the Required Documents",
      description:
        "Gather the documents needed for your shifting request. Make sure all records are complete, accurate, and readable.",
      icon: ClipboardList,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Required+Documents",
      requirements: [
        "Prepare your student identification information",
        "Prepare your academic records or grades",
        "Complete the required shifting or change-of-program form",
        "Prepare any supporting documents requested by the office",
        "Keep photocopies or digital copies of submitted documents",
      ],
    },
    {
      number: "04",
      title: "Submit Your Shifting Request",
      description:
        "Complete and submit the required shifting application through the process provided by JHCSC.",
      icon: Send,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Submit+Shifting+Request",
      requirements: [
        "Complete all required information on the application",
        "Indicate your current program",
        "Indicate your intended program",
        "Attach all required documents",
        "Submit the request to the designated office or authorized personnel",
      ],
    },
    {
      number: "05",
      title: "Wait for Evaluation and Approval",
      description:
        "Your request may need to be evaluated by the appropriate academic personnel or office before the shift can be approved.",
      icon: FileSearch,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Evaluation+and+Approval",
      requirements: [
        "Wait for the official evaluation of your request",
        "Respond to additional requirements if requested",
        "Check your application or request status when instructed",
        "Do not assume the shift is approved until officially confirmed",
      ],
    },
    {
      number: "06",
      title: "Review Subject and Academic Adjustments",
      description:
        "Once your shifting request is approved, review how your academic records and previously completed subjects apply to your new program.",
      icon: RefreshCw,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Academic+Adjustment",
      requirements: [
        "Review your new curriculum",
        "Check which completed subjects may be credited",
        "Identify subjects that you still need to complete",
        "Confirm your updated year level or academic standing",
        "Ask your adviser about your recommended subjects",
      ],
    },
    {
      number: "07",
      title: "Complete Your New Program Enrollment",
      description:
        "After your shift has been officially approved, complete the enrollment or registration requirements for your new program.",
      icon: GraduationCap,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=New+Program+Enrollment",
      requirements: [
        "Confirm your new program in the student records",
        "Follow the enrollment instructions provided",
        "Register for the subjects assigned or recommended",
        "Complete any remaining requirements",
        "Keep your approval and enrollment records for future reference",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />

      <div className="min-h-screen bg-[#F6FBF7] px-4 py-8 sm:px-6 lg:px-10 ml-0 md:ml-72 p-6 pt-32 md:pt-24">
        <div className="mx-auto max-w-full">
          {/* Header */}
          <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#238B4E] via-[#2E9B59] to-[#48B96D] px-6 py-10 text-white shadow-lg sm:px-10">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                <RefreshCw size={18} />
                JHCSC Student Guide
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Shifting Programs
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
                A step-by-step guide for students who are planning to shift
                from their current academic program to another program at
                JHCSC.
              </p>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="mb-10 rounded-2xl border border-[#D8EEDF] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                <Info size={22} />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Before You Request a Program Shift
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Make sure you understand the requirements and policies
                  applicable to your intended program. Consult the appropriate
                  academic office or adviser before submitting a shifting
                  request, since requirements, available slots, and procedures
                  may vary by program.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information Cards */}
          <div className="mb-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#DCEDE1] bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                <GraduationCap size={21} />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Know Your Target Program
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Learn about the curriculum, qualifications, and requirements
                of the program you want to enter.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEDE1] bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                <MessageSquareText size={21} />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Ask Before Applying
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Consult your adviser or the appropriate office to clarify the
                shifting process before submitting your request.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEDE1] bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7EE] text-[#2E9B59]">
                <FileSearch size={21} />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Wait for Official Approval
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Do not consider the program shift final until it has been
                officially evaluated and approved.
              </p>
            </div>
          </div>

          {/* Process Overview */}
          <div className="mb-12">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2E9B59]">
                Step-by-Step Guide
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                How to Shift Programs
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Follow these general steps when requesting to shift to another
                academic program.
              </p>
            </div>

            <div className="space-y-8">
              {shiftingSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative">
                    {/* Connector */}
                    {index !== shiftingSteps.length - 1 && (
                      <div className="absolute left-6 top-16 hidden h-[calc(100%+2rem)] w-px bg-[#CFE7D6] lg:block" />
                    )}

                    <div className="relative grid gap-6 rounded-3xl border border-[#DCEDE1] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 lg:grid-cols-[90px_1fr] lg:p-7">
                      {/* Step Number */}
                      <div className="relative z-10 flex lg:justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E9B59] text-lg font-bold text-white shadow-sm">
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="grid gap-7 lg:grid-cols-[1fr_420px]">
                          {/* Text */}
                          <div>
                            <div className="mb-3 flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF7EE] text-[#2E9B59]">
                                <Icon size={19} />
                              </div>

                              <span className="text-xs font-bold uppercase tracking-wider text-[#2E9B59]">
                                Step {step.number}
                              </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                              {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-600">
                              {step.description}
                            </p>

                            {/* Checklist */}
                            <div className="mt-6">
                              <p className="mb-3 text-sm font-semibold text-gray-900">
                                What to do:
                              </p>

                              <div className="space-y-3">
                                {step.requirements.map((item, itemIndex) => (
                                  <div
                                    key={itemIndex}
                                    className="flex items-start gap-3"
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

                          {/* Image */}
                          <div className="overflow-hidden rounded-2xl border border-[#DCEDE1] bg-[#F6FBF7]">
                            <a
                              href={step.image}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block"
                            >
                              <div className="relative aspect-video overflow-hidden">
                                <img
                                  src={step.image}
                                  alt={`${step.title} illustration`}
                                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                                  <div className="flex w-full items-center justify-between p-4 text-white">
                                    <span className="text-xs font-medium">
                                      View Image
                                    </span>

                                    <ArrowRight size={17} />
                                  </div>
                                </div>
                              </div>
                            </a>

                            <div className="px-4 py-3">
                              <p className="text-xs text-gray-500">
                                Program shifting guide image
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Reminder */}
          <div className="mb-8 rounded-3xl border border-[#BFE2CA] bg-[#EAF7EE] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2E9B59] text-white">
                <Info size={21} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#176B38]">
                  Important Reminder
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#39714D]">
                  Program shifting requirements, qualifications, available
                  slots, deadlines, and approval procedures may differ
                  depending on the academic program and current JHCSC
                  policies. Always confirm the latest requirements with the
                  appropriate JHCSC office or academic adviser.
                </p>
              </div>
            </div>
          </div>

          {/* Finish Card */}
          <div className="rounded-3xl bg-white p-6 text-center shadow-sm sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7EE] text-[#2E9B59]">
              <CheckCircle2 size={28} />
            </div>

            <h2 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
              Program Shifting Guide Complete
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
              Make sure your shifting request has been properly evaluated and
              officially approved before proceeding with enrollment under your
              new academic program.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2E9B59]">
              <span>Follow each step carefully</span>
              <ChevronRight size={17} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShiftingPrograms;
