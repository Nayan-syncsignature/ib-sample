 import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import {
  Bold,
  Italic,
  Underline,
  Type,
  Palette,
  Highlighter,
  Eye,
  AlignLeft,
  AlignCenter,
  AlignRight,
  RotateCcw,
  RotateCw,
} from "lucide-react";

// Type definitions
interface EnhancedRichTextEditorProps {
  initialContent?: string;
  onContentChange?: (content: string, fieldName: string) => void;
  fieldName?: string;
  label?: string;
  height?: string;
  showPreviewByDefault?: boolean;
}

interface HighlightColor {
  name: string;
  color: string;
}

interface StyledHighlight {
  name: string;
  style: string;
  extraClass?: string;
}

// Enhanced RichTextEditor with prop support for external state management
const RichTextEditor = ({
  initialContent = "<div>Your text here</div>",
  onContentChange,
  fieldName = "",
  label = "Rich Text Editor",
  height = "200px",
  showPreviewByDefault = true,
}: EnhancedRichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editorContent, setEditorContent] = useState<string>(initialContent);
  const [showPreview, setShowPreview] = useState<boolean>(showPreviewByDefault);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isUndoRedo, setIsUndoRedo] = useState<boolean>(false);

  const [currentFontFamily, setCurrentFontFamily] = useState<string>("Arial");
  const [currentFontSize, setCurrentFontSize] = useState<string>("24px");
  const [currentTextColor, setCurrentTextColor] = useState<string>("#000000");
  const [currentHighlightColor, setCurrentHighlightColor] =
    useState<string>("transparent");

  // Text colors
  const colors: string[] = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#8B4513",
  ];

  // Basic highlight colors
  const highlightColors: HighlightColor[] = [
    { name: "Yellow", color: "#FFFF00" },
    { name: "Pink", color: "#FFACAC" },
    { name: "Green", color: "#ACFFAC" },
    { name: "Blue", color: "#ACACFF" },
    { name: "Orange", color: "#FFCC99" },
    { name: "Purple", color: "#E6ACFF" },
  ];

  // Styled highlights
  const styledHighlights: StyledHighlight[] = [
    {
      name: "Gradient",
      style:
        "linear-gradient(to right, rgba(255,255,0,0.3), rgba(255,255,0,0.7))",
    },
    {
      name: "Rounded",
      style: "rgba(255,172,172,0.5)",
      extraClass: "rounded-md",
    },
    {
      name: "Underline",
      style: "transparent",
      extraClass: "border-b-4 border-green-400",
    },
    {
      name: "Box",
      style: "transparent",
      extraClass: "border-2 border-blue-400 rounded-md",
    },
    { name: "Marker", style: "linear-gradient(transparent 60%, #ffff00 40%)" },
  ];

  const fontSizes: string[] = [
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
    "28px",
    "32px",
    "36px",
    "48px",
  ];

  const fontFamilies: string[] = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Tahoma",
  ];

  // Save current state to history
  const saveToHistory = (): void => {
    if (editorRef.current && !isUndoRedo) {
      const newContent = editorRef.current.innerHTML;

      // Only save if content has changed
      if (historyIndex === -1 || newContent !== history[historyIndex]) {
        // Truncate history if we're not at the end
        const newHistory = history.slice(0, historyIndex + 1);

        // Add new state to history
        newHistory.push(newContent);

        // Update history state
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
      }
    }
  };

  // Update the editor content and preview
  const updateEditorContent = (): void => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      setEditorContent(content);

      // Call external onChange handler if provided
      if (onContentChange) {
        onContentChange(content, fieldName);
      }
    }
  };

  // Handle undo
  const handleUndo = (): void => {
    if (historyIndex > 0) {
      setIsUndoRedo(true);
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);

      if (editorRef.current && history[newIndex]) {
        editorRef.current.innerHTML = history[newIndex];
        updateEditorContent();
      }

      setTimeout(() => setIsUndoRedo(false), 0);
    }
  };

  // Handle redo
  const handleRedo = (): void => {
    if (historyIndex < history.length - 1) {
      setIsUndoRedo(true);
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);

      if (editorRef.current && history[newIndex]) {
        editorRef.current.innerHTML = history[newIndex];
        updateEditorContent();
      }

      setTimeout(() => setIsUndoRedo(false), 0);
    }
  };

  // Apply formatting command
  const execFormatCommand = (
    command: string,
    value: string | null = null
  ): void => {
    if (editorRef.current) {
      // Focus the editor
      editorRef.current.focus();

      // Save current state before making changes
      saveToHistory();

      // Execute command
      document.execCommand(command, false, value ?? "");

      // Update preview
      updateEditorContent();
    }
  };

  // Simple formatting functions
  const applyBold = (): void => execFormatCommand("bold");
  const applyItalic = (): void => execFormatCommand("italic");
  const applyUnderline = (): void => execFormatCommand("underline");
  const applyAlignLeft = (): void => execFormatCommand("justifyLeft");
  const applyAlignCenter = (): void => execFormatCommand("justifyCenter");
  const applyAlignRight = (): void => execFormatCommand("justifyRight");

  // Apply text color
  const applyTextColor = (color: string): void => {
    setCurrentTextColor(color);
    execFormatCommand("foreColor", color);
  };

  // Apply font family
  const applyFontFamily = (e: ChangeEvent<HTMLSelectElement>): void => {
    const fontFamily = e.target.value;
    setCurrentFontFamily(fontFamily);
    execFormatCommand("fontName", fontFamily);
  };

  // Apply font size
  const applyFontSize = (e: ChangeEvent<HTMLSelectElement>): void => {
    const fontSize = e.target.value;
    setCurrentFontSize(fontSize);

    // Map px sizes to fontSize command values (1-7)
    let sizeIndex = 3; // default
    if (fontSize === "12px") sizeIndex = 1;
    else if (fontSize === "14px") sizeIndex = 2;
    else if (fontSize === "16px") sizeIndex = 3;
    else if (fontSize === "18px") sizeIndex = 4;
    else if (fontSize === "24px") sizeIndex = 5;
    else if (fontSize === "32px") sizeIndex = 6;
    else if (fontSize === "48px") sizeIndex = 7;

    execFormatCommand("fontSize", sizeIndex.toString());
  };

  interface SelectionInfo {
    selection: Selection;
    range: Range;
  }

  // Get selection and range
  const getSelectionInfo = (): SelectionInfo | null => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);

    return { selection, range };
  };

  // Find highlight parent of a node
  const findHighlightParent = (node: Node): HTMLElement | null => {
    let current: Node | null = node;

    while (current && current !== editorRef.current) {
      if (
        current.nodeType === 1 &&
        (current as HTMLElement).tagName === "SPAN" &&
        (current as HTMLElement).hasAttribute("data-highlight")
      ) {
        return current as HTMLElement;
      }
      current = current.parentNode;
    }

    return null;
  };

  // Apply basic highlight
  const applyHighlight = (color: string): void => {
    const selInfo = getSelectionInfo();
    if (!selInfo) return;

    const { selection, range } = selInfo;

    // Focus editor
    if (editorRef.current) {
      editorRef.current.focus();
    }

    // Save current state
    saveToHistory();

    // Update UI state
    setCurrentHighlightColor(color);

    // Capture the selection and surroundings
    const startNode = range.startContainer;
    const endNode = range.endContainer;

    // Check if selection is inside a highlight span
    const startHighlightParent = findHighlightParent(startNode);
    const endHighlightParent = findHighlightParent(endNode);

    // If both start and end are in the same highlight
    if (startHighlightParent && startHighlightParent === endHighlightParent) {
      // Remove the existing highlight and create a new range
      // that contains the same text
      const parent = startHighlightParent.parentNode;

      // Get the text content before removing the highlight
      const textContent = startHighlightParent.textContent;

      // Replace the highlight span with its text content
      const textNode = document.createTextNode(textContent || "");
      if (parent) {
        parent.replaceChild(textNode, startHighlightParent);
      }

      // Create a new range covering the text
      const newRange = document.createRange();
      newRange.setStart(textNode, 0);
      newRange.setEnd(textNode, textContent?.length || 0);

      // Select the text
      selection.removeAllRanges();
      selection.addRange(newRange);
    }

    // Use execCommand for highlighting if the color is a simple color
    execFormatCommand("hiliteColor", color);

    // Update editor content
    updateEditorContent();
  };

  // Apply styled highlight
  const applyStyledHighlight = (style: StyledHighlight): void => {
    const selInfo = getSelectionInfo();
    if (!selInfo) return;

    const { selection, range } = selInfo;

    // Focus the editor
    if (editorRef.current) {
      editorRef.current.focus();
    }

    // Save current state
    saveToHistory();

    // Update UI state
    setCurrentHighlightColor(style.style);

    // First remove any existing highlight
    // Same logic as in applyHighlight
    const startNode = range.startContainer;
    const startHighlightParent = findHighlightParent(startNode);

    if (startHighlightParent) {
      // Remove the existing highlight
      const parent = startHighlightParent.parentNode;
      const textContent = startHighlightParent.textContent;
      const textNode = document.createTextNode(textContent || "");
      if (parent) {
        parent.replaceChild(textNode, startHighlightParent);
      }

      // Create a new range covering the text
      const newRange = document.createRange();
      newRange.setStart(textNode, 0);
      newRange.setEnd(textNode, textContent?.length || 0);

      // Select the text
      selection.removeAllRanges();
      selection.addRange(newRange);

      // Get updated selection and range
      const updatedSelection = window.getSelection();
      const updatedRange = updatedSelection?.getRangeAt(0);

      if (updatedRange) {
        // Create styled span
        const span = document.createElement("span");
        span.setAttribute("data-highlight", "true");
        span.style.background = style.style;
        span.style.padding = "0 4px";

        // Add extra classes if any
        if (style.extraClass) {
          // Handle Tailwind-like classes manually
          const classes = style.extraClass.split(" ");
          classes.forEach((cls: string) => {
            if (cls.includes("rounded")) {
              span.style.borderRadius = "0.375rem";
            } else if (cls.includes("border-b-4")) {
              span.style.borderBottom = "4px solid";
            } else if (cls.includes("border-2")) {
              span.style.border = "2px solid";
            } else if (cls.includes("border-green-400")) {
              span.style.borderColor = "#4ade80";
            } else if (cls.includes("border-blue-400")) {
              span.style.borderColor = "#60a5fa";
            }
          });
        }

        // Extract the content and put it in the span
        const fragment = updatedRange.extractContents();
        span.appendChild(fragment);
        updatedRange.insertNode(span);

        // Clear selection
        selection.removeAllRanges();
      }
    } else {
      // No existing highlight, apply new one
      // Create styled span
      const span = document.createElement("span");
      span.setAttribute("data-highlight", "true");
      span.style.background = style.style;
      span.style.padding = "0 4px";

      // Add extra classes if any
      if (style.extraClass) {
        // Handle Tailwind-like classes manually
        const classes = style.extraClass.split(" ");
        classes.forEach((cls: string) => {
          if (cls.includes("rounded")) {
            span.style.borderRadius = "0.375rem";
          } else if (cls.includes("border-b-4")) {
            span.style.borderBottom = "4px solid";
          } else if (cls.includes("border-2")) {
            span.style.border = "2px solid";
          } else if (cls.includes("border-green-400")) {
            span.style.borderColor = "#4ade80";
          } else if (cls.includes("border-blue-400")) {
            span.style.borderColor = "#60a5fa";
          }
        });
      }

      // Extract the content and put it in the span
      const fragment = range.extractContents();
      span.appendChild(fragment);
      range.insertNode(span);

      // Clear selection
      selection.removeAllRanges();
    }

    // Update editor content
    updateEditorContent();
  };

  // Remove highlight
  const removeHighlight = (): void => {
    const selInfo = getSelectionInfo();
    if (!selInfo) return;

    const { selection, range } = selInfo;

    // Focus editor
    if (editorRef.current) {
      editorRef.current.focus();
    }

    // Save current state
    saveToHistory();

    // Update UI state
    setCurrentHighlightColor("transparent");

    // Check if selection is inside a highlight span
    const startNode = range.startContainer;
    const startHighlightParent = findHighlightParent(startNode);

    if (startHighlightParent) {
      // Remove the existing highlight
      const parent = startHighlightParent.parentNode;
      const textContent = startHighlightParent.textContent;
      const textNode = document.createTextNode(textContent || "");
      if (parent) {
        parent.replaceChild(textNode, startHighlightParent);
      }

      // Update editor content
      updateEditorContent();

      // Clear selection
      selection.removeAllRanges();
    } else {
      // If not in a highlight span, use execCommand
      execFormatCommand("hiliteColor", "transparent");
    }
  };

  // Handle editor input
  const handleEditorInput = (): void => {
    // Save to history and update preview
    saveToHistory();
    updateEditorContent();
  };

  // Toggle preview
  const handleTogglePreview = (): void => {
    setShowPreview(!showPreview);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: KeyboardEvent): void => {
    // Check for Ctrl/Cmd+Z (Undo)
    if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
      e.preventDefault();
      handleUndo();
    }

    // Check for Ctrl/Cmd+Y or Ctrl/Cmd+Shift+Z (Redo)
    if (
      ((e.ctrlKey || e.metaKey) && e.key === "y") ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "z")
    ) {
      e.preventDefault();
      handleRedo();
    }
  };

  // Initialize editor with content if it changes externally
  useEffect(() => {
    if (editorRef.current && initialContent !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = initialContent;
      setEditorContent(initialContent);

      // Reset history when content is set from props
      setHistory([initialContent]);
      setHistoryIndex(0);
    }
  }, [initialContent]);

  // Initialize editor
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialContent;

      // Add to history
      setHistory([initialContent]);
      setHistoryIndex(0);

      // Add event listeners
      editorRef.current.addEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    }

    // Cleanup
    return () => {
      if (editorRef.current) {
        editorRef.current.removeEventListener(
          "keydown",
          handleKeyDown as unknown as EventListener
        );
      }
    };
  }, []);

  return (
    <div className="w-full mx-auto bg-white rounded-lg">
      <div className="mb-3">
        {label && (
          <div className="mb-2 text-sm font-medium text-gray-700">{label}</div>
        )}

        {/* Main Toolbar */}
        <div className="flex flex-wrap gap-2 mb-2 p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
          {/* Undo/Redo section */}
          <div className="flex items-center space-x-1 mr-2 bg-white p-1 rounded-md shadow-sm">
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={handleUndo}
              title="Undo (Ctrl+Z)"
              disabled={historyIndex <= 0}
            >
              <RotateCcw
                size={16}
                className={historyIndex <= 0 ? "text-gray-300" : ""}
              />
            </button>
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={handleRedo}
              title="Redo (Ctrl+Y)"
              disabled={historyIndex >= history.length - 1}
            >
              <RotateCw
                size={16}
                className={
                  historyIndex >= history.length - 1 ? "text-gray-300" : ""
                }
              />
            </button>
          </div>

          {/* Text formatting section */}
          <div className="flex items-center space-x-1 mr-2 bg-white p-1 rounded-md shadow-sm">
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={applyBold}
              title="Bold"
            >
              <Bold size={16} />
            </button>
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={applyItalic}
              title="Italic"
            >
              <Italic size={16} />
            </button>
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={applyUnderline}
              title="Underline"
            >
              <Underline size={16} />
            </button>
          </div>

          {/* Alignment section */}
          <div className="flex items-center space-x-1 mr-2 bg-white p-1 rounded-md shadow-sm">
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={applyAlignLeft}
              title="Align Left"
            >
              <AlignLeft size={16} />
            </button>
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={applyAlignCenter}
              title="Align Center"
            >
              <AlignCenter size={16} />
            </button>
            <button
              className="p-1 rounded hover:bg-blue-100 transition-colors"
              onClick={applyAlignRight}
              title="Align Right"
            >
              <AlignRight size={16} />
            </button>
          </div>

          {/* Font controls */}
          <div className="flex items-center space-x-2 mr-2 bg-white p-1 rounded-md shadow-sm">
            <div className="flex items-center">
              <Type size={16} className="mr-1" />
              <select
                className="p-1 border border-gray-200 rounded text-sm"
                value={currentFontFamily}
                onChange={applyFontFamily}
                title="Font Family"
              >
                {fontFamilies.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-xs mr-1">Size</span>
              <select
                className="p-1 border border-gray-200 rounded text-sm"
                value={currentFontSize}
                onChange={applyFontSize}
                title="Font Size"
              >
                {fontSizes.map((size) => (
                  <option key={size} value={size}>
                    {size.replace("px", "")}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Toggle preview */}
          <button
            className={`p-1 rounded ${
              showPreview ? "bg-blue-100" : "bg-white"
            } hover:bg-blue-200 transition-colors shadow-sm ml-auto`}
            onClick={handleTogglePreview}
            title={showPreview ? "Hide Preview" : "Show Preview"}
          >
            <Eye size={16} />
          </button>
        </div>

        {/* Color and Highlight Toolbar */}
        <div className="flex flex-wrap gap-2 mb-2 p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
          {/* Text color section */}
          <div className="flex flex-col mr-4">
            <div className="flex items-center mb-1">
              <Palette size={14} className="mr-1" />
              <span className="text-xs font-medium">Text Color</span>
            </div>
            <div className="flex flex-wrap gap-1 max-w-xs">
              {colors.map((color) => (
                <button
                  key={color}
                  className="w-5 h-5 rounded-full cursor-pointer border border-gray-300 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: color,
                    boxShadow:
                      currentTextColor === color
                        ? "0 0 0 2px rgba(59, 130, 246, 0.5)"
                        : "none",
                  }}
                  onClick={() => applyTextColor(color)}
                  title={`Text Color: ${color}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Basic highlight section */}
          <div className="flex flex-col mr-4">
            <div className="flex items-center mb-1">
              <Highlighter size={14} className="mr-1" />
              <span className="text-xs font-medium">Basic Highlight</span>
            </div>
            <div className="flex flex-wrap gap-1 max-w-xs">
              <button
                className="w-5 h-5 rounded cursor-pointer border border-gray-300 flex items-center justify-center transition-transform hover:scale-110"
                onClick={removeHighlight}
                title="No Highlight"
              >
                <span className="text-xs">✕</span>
              </button>
              {highlightColors.map((highlight) => (
                <button
                  key={highlight.name}
                  className="w-5 h-5 rounded cursor-pointer border border-gray-300 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: highlight.color,
                    boxShadow:
                      currentHighlightColor === highlight.color
                        ? "0 0 0 2px rgba(59, 130, 246, 0.5)"
                        : "none",
                  }}
                  onClick={() => applyHighlight(highlight.color)}
                  title={`Highlight: ${highlight.name}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Styled highlight section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <Highlighter size={14} className="mr-1" />
              <span className="text-xs font-medium">Styled Highlight</span>
            </div>
            <div className="flex flex-wrap gap-1 max-w-xs">
              {styledHighlights.map((style, index) => (
                <button
                  key={index}
                  className="px-1 py-0.5 rounded cursor-pointer border border-gray-300 text-xs transition-all hover:shadow-md"
                  style={{
                    background: style.style,
                    ...(style.name === "Underline" && {
                      borderBottom: "4px solid #4ade80",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }),
                    ...(style.name === "Box" && {
                      border: "2px solid #60a5fa",
                      borderRadius: "4px",
                    }),
                    ...(style.name === "Rounded" && {
                      backgroundColor: "rgba(255,172,172,0.5)",
                      borderRadius: "4px",
                    }),
                    boxShadow:
                      currentHighlightColor === style.style
                        ? "0 0 0 2px rgba(59, 130, 246, 0.5)"
                        : "none",
                  }}
                  onClick={() => applyStyledHighlight(style)}
                  title={`Style: ${style.name}`}
                >
                  Aa
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Text editor */}
        <div
          ref={editorRef}
          className="w-full p-3 border border-gray-300 rounded-lg font-sans outline-none shadow-inner bg-white"
          style={{ minHeight: height }}
          contentEditable="true"
          onInput={handleEditorInput}
          onBlur={updateEditorContent}
          suppressContentEditableWarning={true}
        ></div>
      </div>

      {/* Preview */}
      {showPreview && (
        <div className="mb-3">
          <h3 className="text-sm font-medium mb-1 text-gray-700">Preview</h3>
          <div className="w-full p-3 border border-gray-200 rounded-lg min-h-16 flex items-center justify-center bg-white shadow-sm">
            <div
              className="preview-content max-w-full"
              dangerouslySetInnerHTML={{ __html: editorContent }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
