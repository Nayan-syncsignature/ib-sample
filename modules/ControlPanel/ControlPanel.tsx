import { filterDimensionsByType } from "@/common/constants/platforms-dimensions-map";
import useCanvasDimensions from "@/lib/redux/hooks/useCanvasDimensions";
import React, { useEffect, useState } from "react";
import { CanvasProps } from "../Canvas/Canvas";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Check, ChevronDown, Type, FileText, MousePointer, Italic, Settings } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const ControlPanel = ({ type }: CanvasProps) => {
  const { updateDimensions, updateWidth, updateHeight, width, height } = useCanvasDimensions();
  const filteredDimensions = filterDimensionsByType(type);
  
  // Find default platform based on current dimensions
  const defaultPlatform = filteredDimensions[0]?.platform;
  const defaultdimentions = filteredDimensions.find(dim => dim.platform === defaultPlatform);

  useEffect(() => {
    if (defaultdimentions) {
      updateDimensions({
        width: defaultdimentions?.width,
        height: defaultdimentions?.height
      });
    }
  }, []);

  // Form field states
  const [title, setTitle] = useState("Users read this first. Make it count.");
  const [subtitle, setSubTitle] = useState("This is a sub title");
  const [description, setDescription] = useState("They will read this second. Keep things interesting.");
  const [cta, setCta] = useState("Call them to action");
  
  // Checkbox states
  const [titleEnabled, setTitleEnabled] = useState(true);
  const [descriptionEnabled, setDescriptionEnabled] = useState(true);
  const [ctaEnabled, setCtaEnabled] = useState(true);
  const [subtitleEnabled, setSubTitleEnabled] = useState(true);


  const handlePlatformChange = (platformName: string) => {
    const selectedPlatform = filteredDimensions.find(
      (dim) => dim.platform === platformName
    );
    
    if (selectedPlatform) {
      updateDimensions({
        width: selectedPlatform.width,
        height: selectedPlatform.height
      });

      updateWidth(selectedPlatform.width);
      updateHeight(selectedPlatform.height)
    }
  };

  const handleTitleChange = () => {

  }

  const handleDescriptionChange = () => {
    
  }

  const handleCTAChange = () => {
    
  }

  const handleSubtitleChange = () => {
    
  }
  

  return (
    <div className="flex flex-col h-full border-l border-gray-200">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <Settings size={18} />
          Control Panel
        </h3>
        <div className="text-sm text-gray-500">
          {width} × {height}px
        </div>
      </div>
      
      <div className="overflow-y-auto p-4 space-y-6 h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Platform selection */}
        <div className="space-y-2">
          <Label htmlFor="platform-select" className="text-sm font-medium text-gray-700">
            Platform Size
          </Label>
          
          <Select 
            defaultValue={defaultPlatform} 
            onValueChange={handlePlatformChange}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select platform dimensions" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Platform Dimensions</SelectLabel>
                {filteredDimensions.map((dim) => (
                  <SelectItem key={dim.platform} value={dim.platform}>
                    {dim.platform} ({dim.dimensions})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <Separator className="my-4" />
        
        {/* Content Fields */}
        <div className="space-y-4">
          {/* Title Field */}
          <Card className="border rounded-md shadow-sm overflow-hidden">
            <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <Type size={16} className="text-gray-600" />
                <span className="font-medium">Title</span>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="title-enabled" 
                  checked={titleEnabled}
                  onCheckedChange={setTitleEnabled}
                />
              </div>
            </CardHeader>
            <CardContent className={`p-3 space-y-3 ${!titleEnabled ? 'opacity-50 pointer-events-none' : ''}`}>
              <Textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="resize-none border rounded-md"
                placeholder="Enter title text"
              />
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Italic size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sub-Title Field */}
          <Card className="border rounded-md shadow-sm overflow-hidden">
            <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <Type size={16} className="text-gray-600" />
                <span className="font-medium">Sub-Title</span>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="title-enabled" 
                  checked={subtitleEnabled}
                  onCheckedChange={setSubTitleEnabled}
                />
              </div>
            </CardHeader>
            <CardContent className={`p-3 space-y-3 ${!subtitleEnabled ? 'opacity-50 pointer-events-none' : ''}`}>
              <Textarea
                value={title}
                onChange={(e) => setSubTitle(e.target.value)}
                className="resize-none border rounded-md"
                placeholder="Enter title text"
              />
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Italic size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Description Field */}
          <Card className="border rounded-md shadow-sm overflow-hidden">
            <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-gray-600" />
                <span className="font-medium">Description</span>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="description-enabled" 
                  checked={descriptionEnabled}
                  onCheckedChange={setDescriptionEnabled}
                />
              </div>
            </CardHeader>
            <CardContent className={`p-3 space-y-3 ${!descriptionEnabled ? 'opacity-50 pointer-events-none' : ''}`}>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none border rounded-md"
                placeholder="Enter description text"
                rows={3}
              />
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Italic size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA Field */}
          <Card className="border rounded-md shadow-sm overflow-hidden">
            <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <MousePointer size={16} className="text-gray-600" />
                <span className="font-medium">CTA</span>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="cta-enabled" 
                  checked={ctaEnabled}
                  onCheckedChange={setCtaEnabled}
                />
              </div>
            </CardHeader>
            <CardContent className={`p-3 ${!ctaEnabled ? 'opacity-50 pointer-events-none' : ''}`}>
              <Input
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                placeholder="Enter call to action text"
                className="border rounded-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;