import React, { useState } from "react";
import AIAutomationHero from "../components/ai-automation/AIAutomationHero";
import AIAutomationFeatures from "../components/ai-automation/AIAutomationFeatures";
import AIAutomationBenefits from "../components/ai-automation/AIAutomationBenefits";
import AIAutomationUseCases from "../components/ai-automation/AIAutomationUseCases";
import AIAutomationIntegration from "../components/ai-automation/AIAutomationIntegration";

const AIAutomation = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-slate-50 overflow-hidden"
    >
      <div className="relative z-10">
        <AIAutomationHero />
        <AIAutomationFeatures />
        <AIAutomationUseCases />
        <AIAutomationBenefits />
        <AIAutomationIntegration />
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(236, 72, 153, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(236, 72, 153, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full bg-pink-400/20 blur-[80px] transition-transform duration-75 ease-out"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default AIAutomation;

