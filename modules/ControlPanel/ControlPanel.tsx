// BEFORE: import debounce from "lodash";
// AFTER:
import debounce from "lodash/debounce"; // Import debounce specifically

import { filterDimensionsByType } from "@/common/constants/platforms-dimensions-map";
import React, { useEffect, useRef, useCallback } from "react";
import { CanvasProps } from "../Canvas/Canvas";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Type,
  FileText,
  ImageIcon,
  MousePointer,
  Users,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// Button import might be unused now, but keep it if needed elsewhere
// import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCommonConfig } from "@/lib/redux/hooks/useCommonConfig";
import { useDataConfig } from "@/lib/redux/hooks/useDataConfig";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define Zod schema for form validation (remains the same)
const formSchema = z.object({
  heading: z
    .string()
    .min(1, "Heading is required")
    .max(100, "Heading must be less than 100 characters"),
  subHeading: z
    .string()
    .max(200, "Sub-heading must be less than 200 characters")
    .optional()
    .nullable(), // Consider nullable if the value can be null from backend/reset
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional()
    .nullable(),
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")) // Allow empty string
    .nullable(),
  imageAlt: z
    .string()
    .max(100, "Image alt text must be less than 100 characters")
    .optional()
    .nullable(),
  buttonText: z
    .string()
    .max(50, "Button text must be less than 50 characters")
    .optional()
    .nullable(),
  communityButtonText: z
    .string()
    .max(50, "Community button text must be less than 50 characters")
    .optional()
    .nullable(),
  ctaButtonText: z
    .string()
    .max(50, "CTA button text must be less than 50 characters")
    .optional()
    .nullable(),
});

type FormValues = z.infer<typeof formSchema>;

const DEBOUNCE_DELAY = 1; // Debounce updates by 300ms

const ControlPanel = ({ type }: CanvasProps) => {
  const {
    updateConfig, // updateWidth/Height might be redundant if updateConfig handles them
    width,
    height,
  } = useCommonConfig();

  const { data, updateContent } = useDataConfig();

  const filteredDimensions = filterDimensionsByType(type);

  const defaultPlatform =
    filteredDimensions.find(
      (dim) => dim.width === width && dim.height === height
    )?.platform || filteredDimensions[0]?.platform;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Ensure defaultValues align with potential nulls if added to schema
      heading: data.heading || "",
      subHeading: data.subHeading || "",
      description: data.description || "",
      imageUrl: data.imageUrl || "",
      imageAlt: data.imageAlt || "",
      buttonText: data.buttonText || "",
      communityButtonText: data.communityButtonText || "",
      ctaButtonText: data.ctaButtonText || "",
    },
  });

  const watchedValues = useWatch({ control: form.control });
  const isInitialMount = useRef(true);

  // Debounced update function
  // Use useCallback to memoize the debounced function itself.
  // The dependency array should include `updateContent` because it's used inside.
  const debouncedUpdateContent = useCallback(
    debounce((values: FormValues) => {
      // console.log("Debounced Update:", values);
      // Ensure we don't pass undefined where strings are expected by updateContent
      const validatedValues = formSchema.safeParse(values);
      if (validatedValues.success) {
        updateContent(validatedValues.data); // Send validated/cleaned data
      } else {
        // Handle validation error if needed, though RHF usually prevents this stage
        console.error(
          "Debounce validation failed (should be rare):",
          validatedValues.error
        );
      }
    }, DEBOUNCE_DELAY),
    [updateContent, formSchema] // updateContent is the external dependency used inside debounce
    // formSchema added if used inside for validation
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Check if watchedValues are actually valid before debouncing
    // This prevents sending partially invalid state during rapid typing if validation fails momentarily
    const result = formSchema.safeParse(watchedValues);
    if (result.success) {
      debouncedUpdateContent(result.data);
    }
    // If not successful, RHF validation messages should handle user feedback

    return () => {
      // This cancel method exists on the function returned by lodash debounce
      debouncedUpdateContent.cancel();
    };
    // Add formSchema if used inside the effect/debounce directly
  }, [watchedValues, debouncedUpdateContent, formSchema]);

  useEffect(() => {
    const currentPlatform = filteredDimensions.find(
      (dim) => dim.width === width && dim.height === height
    );
    if (!currentPlatform && defaultPlatform) {
      const defaultDim = filteredDimensions.find(
        (d) => d.platform === defaultPlatform
      );
      if (defaultDim) {
        updateConfig({ width: defaultDim.width, height: defaultDim.height });
      }
    }
    // Removed width, height from deps to avoid loop if updateConfig causes re-render
    // Check if type/defaultPlatform are sufficient triggers
  }, [type, defaultPlatform, filteredDimensions, updateConfig]);

  useEffect(() => {
    // Use form's internal state vs Redux data for comparison
    const currentFormValues = form.getValues();
    // Basic stringify comparison (consider deep comparison library for complex objects if needed)
    if (JSON.stringify(currentFormValues) !== JSON.stringify(data)) {
      // console.log("External data change detected, resetting form.", data);
      form.reset(
        {
          // Reset with data, ensuring fallback for null/undefined
          heading: data.heading || "",
          subHeading: data.subHeading || "",
          description: data.description || "",
          imageUrl: data.imageUrl || "",
          imageAlt: data.imageAlt || "",
          buttonText: data.buttonText || "",
          communityButtonText: data.communityButtonText || "",
          ctaButtonText: data.ctaButtonText || "",
        },
        {
          // Keep state options if needed, e.g., keep errors, keep dirty state etc.
          // keepValues: false // default, replaces all values
        }
      );
    }
    // form.reset is stable, data is the dependency
  }, [data, form]); // form object itself is stable, form.reset is stable

  const handlePlatformChange = (platformName: string) => {
    const selectedPlatform = filteredDimensions.find(
      (dim) => dim.platform === platformName
    );

    if (selectedPlatform) {
      updateConfig({
        width: selectedPlatform.width,
        height: selectedPlatform.height,
      });
    }
  };

  return (
    <div className="flex flex-col h-full border-l border-gray-200 bg-white">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <Settings size={18} />
          Control Panel
        </h3>
        <div className="text-sm text-gray-500">
          {width || "-"} × {height || "-"}px{" "}
          {/* Handle initial undefined state */}
        </div>
      </div>

      <div className="overflow-y-auto p-4 space-y-6 h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Platform selection */}
        <div className="space-y-2">
          <Label
            htmlFor="platform-select"
            className="text-sm font-medium text-gray-700"
          >
            Platform Size
          </Label>

          <Select
            value={defaultPlatform || ""} // Controlled component needs a valid value
            onValueChange={handlePlatformChange}
          >
            <SelectTrigger className="w-full bg-white" id="platform-select">
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

        <Form {...form}>
          {/* No explicit form tag or onSubmit needed for real-time updates */}
          <div className="space-y-4">
            {/* Heading Field */}
            <Card className="border rounded-md shadow-sm overflow-hidden">
              <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
                <div className="flex items-center gap-2">
                  <Type size={16} className="text-gray-600" />
                  <span className="font-medium">Heading</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <FormField
                  control={form.control}
                  name="heading"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none border rounded-md"
                          placeholder="Enter heading text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Sub-Heading Field */}
            <Card className="border rounded-md shadow-sm overflow-hidden">
              <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
                <div className="flex items-center gap-2">
                  <Type size={16} className="text-gray-600" />
                  <span className="font-medium">Sub-Heading</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <FormField
                  control={form.control}
                  name="subHeading"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          // Handle potential null/undefined from RHF state
                          // RHF usually ensures it's a string or undefined based on schema
                          // Adding || '' ensures it's always a string for the textarea prop
                          value={field.value ?? ""}
                          className="resize-none border rounded-md"
                          placeholder="Enter sub-heading text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Description Field */}
            <Card className="border rounded-md shadow-sm overflow-hidden">
              <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-gray-600" />
                  <span className="font-medium">Description</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          value={field.value ?? ""}
                          className="resize-none border rounded-md"
                          placeholder="Enter description text"
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Image URL Field */}
            <Card className="border rounded-md shadow-sm overflow-hidden">
              <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
                <div className="flex items-center gap-2">
                  <ImageIcon size={16} className="text-gray-600" />
                  <span className="font-medium">Image</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 space-y-4">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="https://example.com/image.jpg"
                          className="border rounded-md"
                          type="url" // Use type url for basic browser validation
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="imageAlt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image Alt Text</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="Descriptive text for the image"
                          className="border rounded-md"
                        />
                      </FormControl>
                      <FormDescription>
                        Alternative text for accessibility
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Buttons Field */}
            <Card className="border rounded-md shadow-sm overflow-hidden">
              <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gray-50">
                <div className="flex items-center gap-2">
                  <MousePointer size={16} className="text-gray-600" />
                  <span className="font-medium">Buttons</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 space-y-4">
                <FormField
                  control={form.control}
                  name="buttonText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Button Text</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="Get Started"
                          className="border rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="communityButtonText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>Community Button Text</span>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="Join Community"
                          className="border rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ctaButtonText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex items-center gap-1">
                          <ExternalLink size={14} />
                          <span>CTA Button Text</span>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="Learn More"
                          className="border rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Save/Reset buttons remain commented out */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ControlPanel;
