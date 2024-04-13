import { any } from "zod";
import { EditorCanvasCardType } from "./types";

export const onDragStart = (
  event: any,
  nodeType: EditorCanvasCardType["type"]
) => {
  event.dataTransfer.setData("application/reactflow", nodeType); // when we drop an event we get exceess to nodeType
  event.dataTransfer.effectAllowed = "move";
};
