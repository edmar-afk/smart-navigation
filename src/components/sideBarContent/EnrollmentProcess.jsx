import React from "react";
import {
  ClipboardList,
  UserPlus,
  FileText,
  Upload,
  CheckCircle2,
  CreditCard,
  GraduationCap,
  ArrowRight,
  Info,
  ChevronRight,
} from "lucide-react";
import Header from "../Header";
import Sidebar from "../Sidebar";

function EnrollmentProcess() {
  const enrollmentSteps = [
    {
      number: "01",
      title: "Prepare Your Requirements",
      description:
        "Before starting the enrollment process, make sure you have all the required documents and information ready.",
      icon: ClipboardList,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Enrollment+Requirements",
      requirements: [
        "Valid identification or school ID",
        "Required academic records",
        "Birth certificate or equivalent document",
        "Recent ID picture",
        "Other documents required by the institution",
      ],
    },
    {
      number: "02",
      title: "Create or Access Your Account",
      description:
        "Access the JHCSC enrollment portal and use your account credentials to begin your enrollment.",
      icon: UserPlus,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Login+%2F+Create+Account",
      requirements: [
        "Open the official enrollment portal",
        "Register if you are a new student",
        "Log in if you already have an account",
        "Keep your username and password secure",
      ],
    },
    {
      number: "03",
      title: "Complete Your Student Information",
      description:
        "Fill out the required personal, contact, and academic information carefully. Make sure all information is correct before proceeding.",
      icon: FileText,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Student+Information",
      requirements: [
        "Complete all required fields",
        "Check your personal information",
        "Enter your correct contact details",
        "Select the appropriate academic information",
      ],
    },
    {
      number: "04",
      title: "Upload Required Documents",
      description:
        "Upload clear and readable copies of the required documents. Make sure each file follows the portal's requirements.",
      icon: Upload,
      image: "https://placehold.co/900x500/EAF7EE/2E9B59?text=Document+Upload",
      requirements: [
        "Use clear and readable document scans",
        "Check the required file format",
        "Make sure documents are not cropped",
        "Review uploaded files before submitting",
      ],
    },
    {
      number: "05",
      title: "Review Your Enrollment Details",
      description:
        "Carefully review all the information you entered before submitting your enrollment application.",
      icon: CheckCircle2,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Review+Information",
      requirements: [
        "Check your name and personal information",
        "Verify your selected program or course",
        "Review uploaded documents",
        "Correct any errors before submission",
      ],
    },
    {
      number: "06",
      title: "Submit Your Enrollment",
      description:
        "Once everything is complete and accurate, submit your enrollment application through the portal.",
      icon: GraduationCap,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Submit+Enrollment",
      requirements: [
        "Confirm that all required fields are completed",
        "Submit your enrollment application",
        "Wait for the confirmation message",
        "Save or screenshot your reference number",
      ],
    },
    {
      number: "07",
      title: "Complete Payment / Finalization",
      description:
        "Follow the instructions provided by JHCSC for payment and final enrollment confirmation, when applicable.",
      icon: CreditCard,
      image:
        "https://placehold.co/900x500/EAF7EE/2E9B59?text=Payment+%2F+Finalization",
      requirements: [
        "Follow the official payment instructions",
        "Keep your payment receipt",
        "Check your enrollment status",
        "Complete any remaining requirements",
      ],
    },
  ];

  return (
    <>
    <Header/>
    <Sidebar/>

      <div className="min-h-screen bg-[#F6FBF7] px-4 py-8 sm:px-6 lg:px-10 ml-0 md:ml-72 p-6 pt-32 md:pt-24">
        <div className="mx-auto max-w-full">
          {/* Header */}
          <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#238B4E] via-[#2E9B59] to-[#48B96D] px-6 py-10 text-white shadow-lg sm:px-10">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                <GraduationCap size={18} />
                JHCSC Student Guide
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Enrollment Process/Procedures
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
                Follow this step-by-step guide to complete your enrollment
                process. Prepare your requirements, provide the necessary
                information, and review your application before submitting.
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
                <h2 className="font-bold text-gray-900">Before You Begin</h2>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Prepare your documents and make sure the information you will
                  enter is accurate. Follow the official instructions provided
                  by JHCSC and keep copies of important enrollment records.
                </p>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="mb-12">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2E9B59]">
                Step-by-Step Guide
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                How to Enroll
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Complete each step in order to help ensure a smooth enrollment
                process.
              </p>
            </div>

            <div className="space-y-8">
              {enrollmentSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative">
                    {/* Connector */}
                    {index !== enrollmentSteps.length - 1 && (
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
                                Enrollment guide image
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
                  Always follow the latest enrollment instructions and
                  requirements officially provided by JHCSC. Requirements,
                  schedules, fees, and procedures may change depending on the
                  enrollment period.
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
              Enrollment Guide Complete
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
              Make sure you have completed all required steps and submitted the
              necessary documents before considering your enrollment complete.
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

export default EnrollmentProcess;
