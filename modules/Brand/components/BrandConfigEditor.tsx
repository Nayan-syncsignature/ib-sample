// src/components/BrandConfigEditor.tsx
"use client";

import ColorPickerPopup from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import { useBrandConfig } from "@/store/hooks/useBrandConfig";
import { useRouter } from "next/navigation";
import React from "react";

const BrandConfigEditor: React.FC = () => {
  const router = useRouter();
  const {
    primaryColor,
    secondaryColor,
    highlightColor,
    primaryFont,
    secondaryFont,
    highlightFont,
    brandConfig,
    setPrimaryColor,
    setSecondaryColor,
    setHighlightColor,
    setPrimaryFont,
    setSecondaryFont,
    setHighlightFont,
    setBrandConfig,
  } = useBrandConfig();

  const handleNext = () => {
    router.push("/select-type ");
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow">
      <h2 className="text-2xl font-bold mb-6">Brand Configuration</h2>

      <div className="space-y-6">
        {/* Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Colors</h3>

          <div className="flex items-center gap-4">
            <label className="min-w-32">Primary Color:</label>
            <ColorPickerPopup
              color={primaryColor}
              setColor={setPrimaryColor}
              label="Primary"
            />
            <span className="ml-2">{primaryColor}</span>
          </div>

          <div className="flex items-center gap-4">
            <label className="min-w-32">Secondary Color:</label>
            <ColorPickerPopup
              color={secondaryColor}
              setColor={setSecondaryColor}
              label="Secondary"
            />
            <span className="ml-2">{secondaryColor}</span>
          </div>

          <div className="flex items-center gap-4">
            <label className="min-w-32">Highlight Color:</label>
            <ColorPickerPopup
              color={highlightColor}
              setColor={setHighlightColor}
              label="Highlight"
            />
            <span className="ml-2">{highlightColor}</span>
          </div>
        </div>

        {/* Fonts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Fonts</h3>

          <div className="flex items-center gap-4">
            <label htmlFor="primaryFont" className="min-w-32">
              Primary Font:
            </label>
            <select
              id="primaryFont"
              value={primaryFont}
              onChange={(e) => setPrimaryFont(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Lato">Lato</option>
              <option value="DM Sans">DM Sans</option>
              <option value="Public Sans">Public Sans</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="secondaryFont" className="min-w-32">
              Secondary Font:
            </label>
            <select
              id="secondaryFont"
              value={secondaryFont}
              onChange={(e) => setSecondaryFont(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Lato">Lato</option>
              <option value="DM Sans">DM Sans</option>
              <option value="Public Sans">Public Sans</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="highlightFont" className="min-w-32">
              Highlight Font:
            </label>
            <select
              id="highlightFont"
              value={highlightFont}
              onChange={(e) => setHighlightFont(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="Inter">Inter</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Lato">Lato</option>
              <option value="DM Sans">DM Sans</option>
              <option value="Public Sans">Public Sans</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button
          onClick={handleNext}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Next
        </Button>
      </div>

      {/* Preview */}
      <div className="mt-8 p-4 border rounded-md">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <div
          style={{
            backgroundColor: secondaryColor,
            padding: "20px",
            borderRadius: "8px",
            color: primaryColor,
            fontFamily: primaryFont,
          }}
        >
          <h4 style={{ fontFamily: highlightFont, color: highlightColor }}>
            Sample Heading
          </h4>
          <p style={{ fontFamily: secondaryFont }}>
            This is a preview of your brand configuration settings. The
            background uses the secondary color, the text uses the primary color
            and primary font, while this paragraph uses the secondary font.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandConfigEditor;
