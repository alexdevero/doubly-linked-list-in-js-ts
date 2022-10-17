import DoublyLinkedList from './doubly-linked-list'

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList

  beforeEach(() => {
    list = new DoublyLinkedList()
  })

  it('should create a new list', () => {
    expect(list).toBeDefined()
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  it('should add a node to the head of the list', () => {
    list.addToHead('foo')

    expect(list.head).toBeDefined()
    expect(list.head!.data).toBe('foo')
    expect(list.tail).toBeDefined()
    expect(list.tail!.data).toBe('foo')
  })

  it('should add a node to the tail of the list', () => {
    list.addToTail('foo')

    expect(list.head).toBeDefined()
    expect(list.head!.data).toBe('foo')
    expect(list.tail).toBeDefined()
    expect(list.tail!.data).toBe('foo')
  })

  it('should remove the head of the list', () => {
    list.addToHead('foo')
    list.addToHead('bar')

    const removedHead = list.removeHead()

    expect(removedHead).toBe('bar')
    expect(list.head).toBeDefined()
    expect(list.head!.data).toBe('foo')
    expect(list.tail).toBeDefined()
    expect(list.tail!.data).toBe('foo')
  })

  it('should remove the tail of the list', () => {
    list.addToHead('foo')
    list.addToHead('bar')

    const removedTail = list.removeTail()

    expect(removedTail).toBe('foo')
    expect(list.head).toBeDefined()
    expect(list.head!.data).toBe('bar')
    expect(list.tail).toBeDefined()
    expect(list.tail!.data).toBe('bar')
  })

  it('should remove the head and tail of the list', () => {
    list.addToHead('foo')

    const removedHead = list.removeHead()
    const removedTail = list.removeTail()

    expect(removedHead).toBe('foo')
    expect(removedTail).toBe(undefined)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  it('should remove the head and tail of the list when there is only one node', () => {
    list.addToHead('foo')

    const removedHead = list.removeHead()
    const removedTail = list.removeTail()

    expect(removedHead).toBe('foo')
    expect(removedTail).toBe(undefined)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  it('should remove a node from the list', () => {
    list.addToHead('foo')
    list.addToHead('bar')
    list.addToHead('baz')

    list.removeByData('bar')

    expect(list.head).toBeDefined()
    expect(list.head!.data).toBe('baz')
    expect(list.tail).toBeDefined()
    expect(list.tail!.data).toBe('foo')
  })

  it('should remove the head when removing the only node in the list', () => {
    list.addToHead('foo')

    list.removeByData('foo')

    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
  })

  it('has a method printList that prints the list to the console', () => {
    list.addToHead('foo')
    list.addToHead('bar')
    list.addToHead('baz')

    const spy = jest.spyOn(console, 'log')

    list.printList()

    expect(spy).toHaveBeenCalledWith('<head> baz bar foo <tail>')
  })

  it('should remove a node from the list starting from the tail', () => {
    list.addToHead('foo')
    list.addToHead('bar')
    list.addToHead('baz')

    list.removeByDataFromTail('bar')

    expect(list.head).toBeDefined()
    expect(list.head!.data).toBe('baz')
    expect(list.tail).toBeDefined()
    expect(list.tail!.data).toBe('foo')
  })
})
