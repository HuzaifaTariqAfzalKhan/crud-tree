// tree-view.component.ts

import { Component, Input } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { TreeService } from 'src/services/tree.service';
import { TreeNode } from '../tree-node.model';

// Your TreeNode interface and TreeService imports here

interface TreeNodeFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  @Input() treeData: any;
  treeControl = new FlatTreeControl<TreeNodeFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  node!: TreeNode;

  constructor(private treeService: TreeService) {
    // Fetch your tree data from the service and set it as the data source
    const data = this.treeService.getAllNodes();

    // Assuming data is of type TreeNodeFlatNode[], assign it to dataSource.data
    this.dataSource.data = data;
  }


  transformer(node: TreeNode, level: number) {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  getChildren(node: TreeNode): TreeNode[] | undefined {
    return node.children;
  }

  hasChild(_: number, nodeData: TreeNodeFlatNode): boolean {
    return nodeData.expandable;
  }

  editNode(node: TreeNode): void {
    // Handle edit action
  }

  deleteNode(node: TreeNode): void {
    // Handle delete action
  }
}
