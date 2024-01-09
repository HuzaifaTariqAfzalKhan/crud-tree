// src/app/tree-node.model.ts

export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}
