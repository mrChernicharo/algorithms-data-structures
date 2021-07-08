// Hash tables or Hash

// Hash tables store key/value pairs
// they are like arrays, but unordered

// JS - like pretty much every programming language - has it's on implementation for free
// Phyton  ->  Dictionaries
// JS  -> Objects and Maps
// Java, Go and Scala  ->  Maps
// Ruby  ->  Hashes

// *Objects are hash tables with the limitation that their keys must be strings

// hash tables are something like key/value pairs stored in an array

// to select an item you must do it referring to the index in the array
// but to get that index your value must go through a HASHING FUNCTION

// hashing function is a function that will take different sized inputs
// and return same-sized outputs

// Hash funcs need to be deterministic
// same input must produce same value

// ex:

//          INPUT            |               OUTPUT

// 'hello!'           == hashing func =>  03928475620
// 'Hello!'           == hashing func =>  98376221104
// 'a'                == hashing func =>  74389234716
// '02&839a394awq'    == hashing func =>  34321039480
