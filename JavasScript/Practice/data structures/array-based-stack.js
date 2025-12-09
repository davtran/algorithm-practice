// last in, first out
const stack = [];

// adding and removing from the end
// don't need to reindex the array
stack.push('google');
stack.push('instagram');
stack.push('youtube');

stack.pop();

// adding and removing from the beginning
// will need to reindex everything though
stack.unshift('create new file');
stack.unshift('resized file');
stack.unshift('cloned out wrinkle');

stack.shift();