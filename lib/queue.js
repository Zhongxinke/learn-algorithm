class Queue {
  constructor () {
    this.queue = []
  }
  isEmpty () {
    return this.queue.length === 0
  }
  enqueue (value) {
    this.queue.push(value)
  }
  dequeue () {
    if (this.isEmpty()) {
      console.log('the queue is empty')
      return null
    }
    return this.queue.shift()
  }
  front () {
    return this.queue[0]
  }
  clear () {
    this.queue = []
  }
  size () {
    return this.queue.length
  }
  print () {
    this.queue.forEach(item => {
      console.log(item)
    })
  }
}