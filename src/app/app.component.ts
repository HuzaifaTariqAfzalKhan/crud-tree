import { Component } from '@angular/core';
import { TreeNode } from './tree-node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-api';
  treeData1: TreeNodeFlatNode[] = [];

  constructor() {
    // Populate treeData1 with your tree data as needed
  }
}
