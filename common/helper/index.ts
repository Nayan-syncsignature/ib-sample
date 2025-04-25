// backgroundUtils.ts
export const generateBackground = (
  style: { type: "solid" | "radial" | "linear"; config?: any },
  primaryColor: string,
  secondaryColor: string
): string => {
  if (!style || style.type === "solid") {
    return primaryColor;
  }

  if (style.type === "radial") {
    const circles = style.config?.circles || [
      { position: "top right", size: "600px", opacity: "2%" },
      { position: "bottom left", size: "600px", opacity: "2%" },
    ];

    let gradients = "";

    circles.forEach((circle: any, index: number) => {
      gradients += `radial-gradient(circle ${circle.size} at ${circle.position}, ${secondaryColor} ${circle.opacity}, transparent 60%)`;
      if (index < circles.length - 1) {
        gradients += ", ";
      }
    });

    return `${gradients}, ${primaryColor}`;
  }

  if (style.type === "linear") {
    const direction = style.config?.direction || "135deg";
    const stops = style.config?.stops || [
      { position: "0%", opacity: "100%" },
      { position: "100%", opacity: "70%" },
    ];

    let gradientStops = "";

    stops.forEach((stop: any, index: number) => {
      // Use secondaryColor at start, primaryColor at end
      const color = index === 0 ? secondaryColor : primaryColor;

      // Apply opacity to the color
      const opacityValue = parseInt(stop.opacity.replace("%", "")) / 100;
      let colorWithOpacity;

      // If color is hex, convert to rgba
      if (color.startsWith("#")) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        colorWithOpacity = `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
      } else {
        // For other color formats
        colorWithOpacity =
          stop.opacity === "100%" ? color : `${color}${opacityValue}`;
      }

      // Correctly format the gradient stop
      gradientStops += `${colorWithOpacity} ${stop.position}`;
      if (index < stops.length - 1) {
        gradientStops += ", ";
      }
    });

    return `linear-gradient(${direction}, ${gradientStops})`;
  }

  // Default fallback
  return primaryColor;
};

export type ButtonStyle = 'normal' | 'rounded' | 'bordered';
export type ButtonColor = string;
export type FontColor = string;
export type BorderRadius = string;


export const getButtonClasses = (
  style: ButtonStyle,
  color: string,
  fontColor: string,
  radius: string,
) => {
  // Tailwind classes for layout and non-color styling
  const baseClasses = '';
  
  // Add border radius based on style
  const styleClass = style === 'rounded' ? 'rounded-full' : '';
  
  // Dynamic styles that will be applied inline
  const styles = style === 'bordered' 
    ? {
        backgroundColor: 'transparent',
        color: color,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: color,
        borderRadius: radius,
      }
    : {
        backgroundColor: color,
        color: fontColor,
        border: 'none',
        borderRadius: radius,
      };
  
  return {
    className: `${baseClasses} ${styleClass}`,
    style: styles
  };
};