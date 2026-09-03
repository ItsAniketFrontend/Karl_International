export type EditableBlock = {
  _key: string;
  style: "normal" | "h2" | "h3" | "blockquote";
  listItem?: "bullet" | "number";
  text: string;
};

export type PortableTextBlock = {
  _type: "block";
  _key: string;
  style: string;
  listItem?: string;
  markDefs: unknown[];
  children: { _type: "span"; _key: string; text: string; marks: string[] }[];
};
