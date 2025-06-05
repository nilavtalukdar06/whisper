"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function CTA() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-6">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Whisper - Secure Anonymous Messaging
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Experience the power of anonymous communication with real-time
            message delivery, AI-powered processing, and complete privacy
            protection.
          </p>
        </div>
        <img
          src="/banner.png"
          width={500}
          height={500}
          alt="Whisper messaging interface"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Smart Features
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Intelligent message analysis, sentiment detection, and smart response
          suggestions to enhance your communication experience.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Start Messaging Anonymously Today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Join thousands of users who trust Whisper for secure, private
            communication. Experience real-time messaging with complete privacy
            and peace of mind.
          </p>
        </div>
        <img
          src="/banner.png"
          width={500}
          height={500}
          alt="Whisper security features"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
