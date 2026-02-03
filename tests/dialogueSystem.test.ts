import { describe, it, expect } from 'vitest';
import { DialogueSystem } from '../src/systems/dialogueSystem';

describe('DialogueSystem', () => {
  it('returns next node id when a valid option is selected', () => {
    const startNode = {
      id: 'start',
      options: [
        { text: 'Hello', nextNodeId: 'greeting' }
      ]
    };

    const dialogue = new DialogueSystem(startNode);
    expect(dialogue.chooseOption(0)).toBe('greeting');
  });

  it('returns null when option ends the conversation', () => {
    const startNode = {
      id: 'start',
      options: [
        { text: 'Goodbye' }
      ]
    };

    const dialogue = new DialogueSystem(startNode);
    expect(dialogue.chooseOption(0)).toBeNull();
  });

  it('throws error for invalid option index', () => {
    const startNode = {
      id: 'start',
      options: [
        { text: 'Only option' }
      ]
    };

    const dialogue = new DialogueSystem(startNode);
    expect(() => dialogue.chooseOption(5)).toThrow();
  });

  it('throws error if dialogue node has no options', () => {
    const invalidNode = {
      id: 'start',
      options: []
    };

    expect(() => new DialogueSystem(invalidNode)).toThrow();
  });
});
