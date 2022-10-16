import Node from './node'

describe('Node', () => {
  let node: Node

  beforeEach(() => {
    node = new Node('foo')
  })

  it('should create a new node', () => {
    expect(node).toBeDefined()
    expect(node.data).toBe('foo')
    expect(node.next).toBeNull()
    expect(node.prev).toBeNull()
  })

  it('should link nodes together', () => {
    const nextNode = new Node('bar')
    const prevNode = new Node('baz')

    node.setNextNode(nextNode)
    node.setPreviousNode(prevNode)

    expect(node.getNextNode()).toBe(nextNode)
    expect(node.getPreviousNode()).toBe(prevNode)
  })

  it('should throw an error when setting next node to a non-Node value', () => {
    const nextNode = 'bar'

    expect(() => node.setNextNode(nextNode as any)).toThrow()
  })

  it('should throw an error when setting previous node to a non-Node value', () => {
    const prevNode = 'baz'

    expect(() => node.setPreviousNode(prevNode as any)).toThrow()
  })
})
