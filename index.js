const greeting = `Hello ${"world"}`;
const multiline = `This is
a multiline
string with ${1 + 2} expressions`;
console.log(greeting);
console.log(multiline);

class ConceptMapper {
  constructor() {
    this.concepts = new Map();
  }
  add(name, desc) {
    this.concepts.set(name, { description: desc, links: [] });
    return `Added concept: ${name}`;
  }
  link(from, to) {
    const c = this.concepts.get(from);
    if (c) c.links.push(to);
  }
  toJSON() {
    return JSON.stringify([...this.concepts.entries()]);
  }
}

module.exports = { ConceptMapper };