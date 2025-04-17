import { filterDimensionsByType } from "@/common/constants/platforms-dimensions-map";
import React, { useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCommonConfig } from "@/lib/redux/hooks/useCommonConfig";
import { useDataConfig } from "@/lib/redux/hooks/useDataConfig";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Data } from "@/components/types";

// Define Zod schema for form validation
const formSchema = z.object({
  heading: z
    .string()
    .min(1, "Heading is required")
    .max(100, "Heading must be less than 100 characters"),
  subHeading: z
    .string()
    .max(200, "Sub-heading must be less than 200 characters")
    .optional(),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  imageAlt: z
    .string()
    .max(100, "Image alt text must be less than 100 characters")
    .optional(),
  buttonText: z
    .string()
    .max(50, "Button text must be less than 50 characters")
    .optional(),
  communityButtonText: z
    .string()
    .max(50, "Community button text must be less than 50 characters")
    .optional(),
  ctaButtonText: z
    .string()
    .max(50, "CTA button text must be less than 50 characters")
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ControlPanel = ({ type }: CanvasProps) => {
  const {
    commonConfig,
    updateConfig,
    updateWidth,
    updateHeight,
    width,
    height,
  } = useCommonConfig();

  const { data, updateContent } = useDataConfig();

  const filteredDimensions = filterDimensionsByType(type);

  // Find default platform based on current dimensions
  const defaultPlatform = filteredDimensions[0]?.platform;
  const defaultDimensions = filteredDimensions.find(
    (dim) => dim.platform === defaultPlatform
  );

  const defaultValues = {
    heading: data.heading || "",
    subHeading: data.subHeading || "",
    description: data.description || "",
    imageUrl: data.imageUrl || "",
    imageAlt: data.imageAlt || "",
    buttonText: data.buttonText || "",
    communityButtonText: data.communityButtonText || "",
    ctaButtonText: data.ctaButtonText || "",
  };

  // Initialize form with React Hook Form + Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Handle form value changes to update content
  useEffect(() => {
    // Create a handler function for form changes
    const handleFormChange = (values: Data) => {
      if (values) {
        updateContent(values as FormValues);
      }
    };

    // Setup the subscription
    const subscription = form.watch(handleFormChange);

    // Clean up subscription on unmount
    return () => subscription.unsubscribe();
  }, [form, updateContent]);

  // Handle external data changes
  useEffect(() => {
    // Compare current form values with data
    const currentValues = form.getValues();
    const dataStr = JSON.stringify(data);
    const valuesStr = JSON.stringify(currentValues);

    // Only reset form if data actually changed and form isn't being edited
    if (dataStr !== valuesStr && !form.formState.isDirty) {
      form.reset({
        heading: data.heading || "",
        subHeading: data.subHeading || "",
        description: data.description || "",
        imageUrl: data.imageUrl || "",
        imageAlt: data.imageAlt || "",
        buttonText: data.buttonText || "",
        communityButtonText: data.communityButtonText || "",
        ctaButtonText: data.ctaButtonText || "",
      });
    }
  }, [data, form, defaultValues]);

  useEffect(() => {
    if (defaultDimensions) {
      updateConfig({
        width: defaultDimensions?.width,
        height: defaultDimensions?.height,
      });
    }
  }, []);

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

  const onSubmit = (values: FormValues) => {
    updateContent(values);
  };

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
          <Label
            htmlFor="platform-select"
            className="text-sm font-medium text-gray-700"
          >
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

        {/* Content Fields Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                          placeholder="https://example.com/image.jpg"
                          className="border rounded-md"
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

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ControlPanel;
