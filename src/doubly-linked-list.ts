import Node from './node'

class DoublyLinkedList {
  head: Node | null
  tail: Node | null

  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(data: any) {
    const newHead = new Node(data)
    const currentHead = this.head

    if (currentHead) {
      currentHead.setPreviousNode(newHead)
      newHead.setNextNode(currentHead)
    }

    this.head = newHead

    if (!this.tail) {
      this.tail = newHead
    }
  }

  addToTail(data: any) {
    const newTail = new Node(data)
    const currentTail = this.tail

    if (currentTail) {
      currentTail.setNextNode(newTail)
      newTail.setPreviousNode(currentTail)
    } else {
      this.head = newTail
    }

    this.tail = newTail
  }

  removeHead() {
    const removeHead = this.head

    if (!removeHead) return

    this.head = removeHead.getNextNode()

    if (this.head) {
      this.head.setPreviousNode(null)
    }

    if (removeHead === this.tail) {
      this.removeTail()
    }

    return removeHead.data
  }

  removeTail() {
    const removedTail = this.tail

    if (!removedTail) return

    this.tail = removedTail.getPreviousNode()

    if (this.tail) {
      this.tail.setNextNode(null)
    }

    if (removedTail === this.head) {
      this.removeHead()
    }

    return removedTail.data
  }

  removeByData(data: any) {
    let nodeToRemove: Node | null = null
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode
        break
      }

      currentNode = currentNode.getNextNode()
    }

    if (!nodeToRemove) return null

    if (nodeToRemove === this.head) {
      this.removeHead()
    } else if (nodeToRemove === this.tail) {
      this.removeTail()
    } else {
      const nextNode = nodeToRemove.getNextNode()
      const previousNode = nodeToRemove.getPreviousNode()

      if (nextNode && previousNode) {
        nextNode.setPreviousNode(previousNode)
        previousNode.setNextNode(nextNode)
      }
    }

    return nodeToRemove
  }

  removeByDataFromTail(data: any) {
    let nodeToRemove: Node | null = null
    let currentNode = this.tail

    while (currentNode) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode
        break
      }

      currentNode = currentNode.getPreviousNode()
    }

    if (!nodeToRemove) return null

    if (nodeToRemove === this.tail) {
      this.removeTail()
    } else if (nodeToRemove === this.head) {
      this.removeHead()
    } else {
      const nextNode = nodeToRemove.getNextNode()
      const previousNode = nodeToRemove.getPreviousNode()

      if (nextNode && previousNode) {
        nextNode.setPreviousNode(previousNode)
        previousNode.setNextNode(nextNode)
      }
    }

    return nodeToRemove
  }

  printList() {
    let currentNode = this.head
    let output = '<head> '

    while (currentNode) {
      output += `${currentNode.data} `
      currentNode = currentNode.getNextNode()
    }

    output += '<tail>'
    console.log(output)
  }
}

export default DoublyLinkedList
