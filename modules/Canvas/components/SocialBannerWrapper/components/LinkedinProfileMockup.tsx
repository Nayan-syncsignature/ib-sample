import { Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CommonComponetProps } from "@/components/types";
import SocialBannerTemplate1 from "@/components/instant-branding/banner/template-1";

export default function LinkedInProfileMockup({
  data,
  commonConfig,
  brandConfig,
}: CommonComponetProps) {
  return (
    <div className="font-sans bg-[#f3f2ef] min-h-screen">
      {/* Profile Card */}
      <div className="bg-white rounded shadow mb-2 overflow-hidden">
        {/* Banner Section */}
        <div className="relative">
          {/* Using the SocialBanner component as in the original code */}
          <SocialBannerTemplate1
            data={data}
            commonConfig={commonConfig}
            brandConfig={brandConfig}
          />

          <div className="relative">
            {/* <div className="h-48 bg-gradient-to-r from-blue-900 to-purple-600">
              <div className="absolute inset-0 flex flex-col justify-center items-end p-8 text-white">
                <h1 className="text-3xl font-bold mb-1">Creative Solutions</h1>
                <p className="text-lg">
                  Innovative{" "}
                  <span className="bg-yellow-300 text-black px-1">
                    ideas deserve beautiful
                  </span>{" "}
                  presentation.
                </p>
                <Link href="#" className="text-sm mt-2 hover:underline">
                  Let's Create
                </Link>
              </div>
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </button>
            </div> */}

            {/* Profile Picture */}
            <div className="absolute -bottom-12 left-8">
              <div className="w-32 h-32 rounded-full bg-orange-500 border-4 border-white flex items-center justify-center text-white text-5xl font-bold">
                M
              </div>
            </div>
          </div>

          {/* Edit button at top right */}
          {/* <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </button> */}

          {/* Profile Picture */}
          {/* <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 rounded-full bg-orange-500 border-4 border-white flex items-center justify-center text-white text-5xl font-bold">
              M
            </div>
          </div> */}
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-8 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Mehul Rana</h2>
                <button className="text-blue-600 border border-blue-600 rounded-md px-2 py-1 text-xs flex items-center gap-1">
                  <Check className="w-3 h-3" /> Add verification badge
                </button>
              </div>
              <p className="text-gray-700 mt-1">
                Full-stack Developer at SyncSignature
              </p>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <span>Surat, Gujarat, India</span>
                <span>•</span>
                <Link href="#" className="text-blue-600 hover:underline">
                  Contact info
                </Link>
              </div>
              <p className="text-blue-600 text-sm mt-1 hover:underline cursor-pointer">
                8 connections
              </p>
            </div>

            <div className="flex items-center">
              <div className="bg-purple-600 w-10 h-10 rounded flex items-center justify-center text-white font-bold mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <span className="font-medium">SyncSignature</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
              Open to
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              Add profile section
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              Enhance profile
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
            >
              More
            </Button>
          </div>

          {/* Notification Cards */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-300 rounded-lg p-4 relative">
              <button className="absolute top-2 right-2 text-gray-500 hover:bg-gray-100 rounded-full p-1">
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-medium">
                Show recruiters you're open to work
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                — you control who sees this.
              </p>
              <Link
                href="#"
                className="text-blue-600 text-sm font-medium mt-2 block hover:underline"
              >
                Get started
              </Link>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 relative">
              <button className="absolute top-2 right-2 text-gray-500 hover:bg-gray-100 rounded-full p-1">
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-medium">Share that you're hiring</h3>
              <p className="text-sm text-gray-600 mt-1">
                and attract qualified candidates.
              </p>
              <Link
                href="#"
                className="text-blue-600 text-sm font-medium mt-2 block hover:underline"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
