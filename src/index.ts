import DoublyLinkedList from './doubly-linked-list'

const subway = new DoublyLinkedList()

subway.addToHead('Times Square')
subway.addToHead('Grand Central')
subway.addToHead('Central Park')

subway.addToTail('Penn Station')
subway.addToTail('Wall Street')
subway.addToTail('Brooklyn Bridge')

subway.printList()

// Remove some stations closed for whatever reason.

subway.removeHead()
subway.removeTail()

subway.printList()

// Remove one more stations closed for whatever reason.

subway.removeByData('Times Square')

subway.printList()
