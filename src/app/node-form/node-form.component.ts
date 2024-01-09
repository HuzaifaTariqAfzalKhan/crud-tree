// src/app/node-form/node-form.component.ts

import { Component } from '@angular/core';
import { TreeNode } from '../tree-node.model';
import { TreeService } from '../../services/tree.service';

@Component({
  selector: 'app-node-form',
  templateUrl: './node-form.component.html',
  styleUrls: ['./node-form.component.css']
})
export class NodeFormComponent {
  newNode: TreeNode = { id: 0, name: '' };

  constructor(private treeService: TreeService) { }

  createNode(): void {
    // Generate a unique ID (you may want to handle this differently in a real app)
    this.newNode.id = new Date().getTime();
    this.treeService.createNode(this.newNode);
    this.newNode = { id: 0, name: '' }; // Clear the form
  }
}
