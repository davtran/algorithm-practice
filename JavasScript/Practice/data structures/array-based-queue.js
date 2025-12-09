// also known as a buffer
// First in, first out

const queue = [];

// add to the end
// ['first', 'second', 'third']
queue.push('first');
queue.push('second');
queue.push('third');

queue.shift(); // removes first
queue.shift(); // removes second
queue.shift();  // removes third

// add to the beginning
// ['third', 'second', 'first']
queue.unshift('first');
queue.unshift('second');
queue.unshift('third');

queue.pop();  // removes first
queue.pop();  // removes second
queue.pop();  // removes third