// Hash tables or Hash

// Hash tables store key/value pairs
// they are like arrays, but unordered

// JS - like pretty much every programming language - has it's on implementation for free
// Phyton  ->  Dictionaries
// JS  -> Objects and Maps
// Java, Go and Scala  ->  Maps
// Ruby  ->  Hashes

// *Objects are hash tables with the limitation that their keys must be strings

// ------------------------------------------------------------------

// hash tables are something like key/value pairs stored in an array

// to select an item you must do it referring to the index in the array
// but to get that index your value must go through a HASHING FUNCTION

// A Basic hash function

// hashing function is a function that will take different sized inputs
// and return same-sized outputs

// typically they must produce a return withib a [0 ...n] range

// Hash funcs need to be deterministic, that is:
// same input produces same value

// ex:

//          INPUT            |               OUTPUT

// 'hello!'           == hashing func =>  03928475620
// 'Hello!'           == hashing func =>  98376221104
// 'a'                == hashing func =>  74389234716
// '02&839a394awq'    == hashing func =>  34321039480

// better hash functions...

// must be fast

// must have better distribution of outcomes (less clustering)
// and therefore, producing the minimum collisions

// must handle collisions

// -----------------------------------------------------------

// there are 2 approaches for handling collisions
// Separate Chaining X Linear Probe

// Separate Chaining -> indexes are buckets
// Linear Probe -> if collides, place it in the next free slot
