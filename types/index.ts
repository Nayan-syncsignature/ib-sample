// types/index.ts

// Define the structure for style properties
export interface ElementStyles {
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    padding?: string;
    // Add more style properties as needed
}

// Define the structure for template properties
export interface TemplateProperties {
    text?: string;
    imageUrl?: string;
    // Add more specific properties based on template type
}

// Define the main template structure
export interface Template {
    id: string;
    name: string;
    type: 'banner' | 'post' | 'textBlock'; // Example types
    properties: TemplateProperties;
    styles: ElementStyles;
} 


