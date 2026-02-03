export type DialogueOption = {
  text: string;
  nextNodeId?: string;
};

export type DialogueNode = {
  id: string;
  options: DialogueOption[];
};

export class DialogueSystem {
  private currentNode: DialogueNode;

  constructor(startNode: DialogueNode) {
    if (!startNode.options || startNode.options.length === 0) {
      throw new Error('Dialogue node must have at least one option');
    }

    this.currentNode = startNode;
  }

  chooseOption(index: number): string | null {
    if (index < 0 || index >= this.currentNode.options.length) {
      throw new Error('Invalid dialogue option index');
    }

    const option = this.currentNode.options[index];
    return option.nextNodeId ?? null;
  }
}
