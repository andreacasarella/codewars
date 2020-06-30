# Learning TypeScript. Mixins

https://www.codewars.com/kata/597277844998c50c9a000051

You're required to implement mixin Serializable which should contain:

method public serialize(): string - this method must serialize all properties of the object (i.e. return object converted to string).
method public deserialize(source: string): void - this is the opposite method, that converts string to object properties and assigns them to current object.
For simplicity's sake let's consider that objects won't contain any circular references. The function applyMixins is defined in tests and you don't need to change it.
