var ByteBuffer = require("../ByteBuffer.js");

console.log("dcodeIO.ByteBuffer Examples & Tests");
console.log("===================================\n");

console.log("Creating ByteBuffer with capacity=10");
var bb = new ByteBuffer(10);
bb.writeUint32(0x1FFF2FFF);
bb.printDebug();

console.log("Ensuring a capacity=12 (should result in 20)");
bb.ensureCapacity(12);
bb.printDebug();

console.log("Flipping");
bb.flip();
bb.printDebug();

console.log("Compacting");
bb = ByteBuffer.wrap(bb.compact());
bb.printDebug();

console.log("Compacting with implicit flip");
bb.offset = 4;
bb.length = 0;
bb = ByteBuffer.wrap(bb.compact());
bb.printDebug();

console.log("Compacting with offset=1, length=3");
bb.offset = 1;
bb.length = 3;
bb = ByteBuffer.wrap(bb.compact());
bb.printDebug();

console.log("Resizing explicitly to capacity=4");
bb.resize(4);
bb.printDebug();

console.log("Destroying");
bb.destroy();
bb.printDebug();

console.log("Reinitializing with a string");
bb.writeUTF8String("Hello world!");
bb.printDebug();

console.log("Reading back string after flip");
bb.flip();
var s = bb.readUTF8String();
bb.printDebug();
console.log("Result: "+s);