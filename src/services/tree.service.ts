// src/app/tree.service.ts

import { Injectable } from '@angular/core';
import { TreeNode } from '../../src/app/tree-node.model';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private treeData: TreeNode[] = [];

  constructor() { }

  getAllNodes(): TreeNode[] {
    return this.treeData;
  }

  createNode(node: TreeNode): void {
    this.treeData.push(node);
  }

  updateNode(updatedNode: TreeNode): void {
    const index = this.treeData.findIndex(node => node.id === updatedNode.id);
    if (index !== -1) {
      this.treeData[index] = updatedNode;
    }
  }

  deleteNode(id: number): void {
    this.treeData = this.treeData.filter(node => node.id !== id);
  }
}
