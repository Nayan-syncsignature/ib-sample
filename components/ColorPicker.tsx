/* eslint-disable react/no-array-index-key */
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PaintBucket, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { ColorResult, SketchPicker } from "react-color";

const solidColors: string[] = [
  "#D3D3D3",
  "#808080",
  "#FF6347",
  "#FF69B4",
  "#FFA500",
  "#FFFF00",
  "#90EE90",
  "#00FFFF",
  "#20B2AA",
  "#87CEFA",
  "#0000FF",
  "#8A2BE2",
  "#4B0082",
  "#FF00FF",
  "#800080",
  "#000000",
];

interface ColorPickerPopupProps {
  color: string;
  setColor: (color: string) => void;
  label?: string;
}

const ColorPickerPopup: React.FC<ColorPickerPopupProps> = ({
  color,
  setColor,
  label,
}) => {
  const handleColorChange = (colorValue: string): void => {
    setColor(colorValue); // Update selected color
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="relative flex items-center justify-center gap-2 px-4 py-2 text-white font-bold hover:bg-white-0 active:bg-white-0 rounded-full">
          <div className="w-3 h-3 rounded-full" style={{ background: color }} />
          {label}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[320px] p-4 flex flex-col items-center justify-center rounded-lg shadow-md">
        <div className="w-full">
          {/* Solid Color Palette */}
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-medium text-gray-700">
              Solid color
            </h3>
            <div className="grid grid-cols-6 gap-2">
              {solidColors.map((solidColor) => (
                <Button
                  key={solidColor}
                  className="w-8 h-8 rounded-full p-0 border-2 border-transparent hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                  style={{ background: solidColor }}
                  onClick={() => handleColorChange(solidColor)}
                />
              ))}
            </div>
          </div>

          {/* Custom Color Picker */}
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-medium text-gray-700 flex items-center">
              <PaintBucket size={16} className="mr-1" />
              Custom color
            </h3>
            <SketchPicker
              color={color}
              onChange={(colorResult: ColorResult) =>
                handleColorChange(colorResult.hex)
              }
              disableAlpha
              presetColors={[]}
              styles={{
                default: {
                  picker: {
                    width: "100%",
                    padding: "0px",
                    boxShadow: "none",
                    borderRadius: "0",
                  },
                  saturation: {
                    borderRadius: "8px",
                  },
                  hue: {
                    height: "10px",
                    position: "relative",
                    marginBottom: "8px",
                  },
                },
              }}
            />
          </div>

          {/* Reset Button */}
          <Button
            onClick={() => setColor("#000000")}
            className="w-full text-sm font-medium rounded-lg py-2 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPickerPopup;
