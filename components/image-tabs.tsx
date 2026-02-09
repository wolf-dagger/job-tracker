"use client";

import Image from "next/image";

import { useState } from "react";
import { Button } from "./ui/button";

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState("Organize");
  return (
    <>
      <section className="border-t bg-white py-5">
        <div className="container mx-auto px-4">
          <div className=" mx-auto max-w-6xl">
            {/* tabs */}
            <div className="flex gap-2 justify-center mb-8">
              <Button
                onClick={() => setActiveTab("Organize")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Organize" ? "bg-pink-500 text-white" : "bg-gray-700"}`}
              >
                Organize Application
              </Button>
              <Button
                onClick={() => setActiveTab("Hired")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Hired" ? "bg-pink-500 text-white" : "bg-gray-700"}`}
              >
                Get Hired
              </Button>
              <Button
                onClick={() => setActiveTab("Boards")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Boards" ? "bg-pink-500 text-white" : "bg-gray-700"}`}
              >
                Manage Boards
              </Button>
            </div>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200">
              {activeTab === "Organize" && (
                <Image
                  src={"/hero-images/hero1.png"}
                  alt="Organize Application"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Hired" && (
                <Image
                  src={"/hero-images/hero2.png"}
                  alt="Organize Application"
                  width={1200}
                  height={800}
                />
              )}

              {activeTab === "Boards" && (
                <Image
                  src={"/hero-images/hero3.png"}
                  alt="Organize Application"
                  width={1200}
                  height={800}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageTabs;
