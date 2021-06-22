// RadixSort is a special sorting algorithm that works on lists of numbers
// It never uses comparisons to perform sort!
// Instead, it puts numbers in buckets
// taking advantage that numbers with more digits are greater than numbers with fewer digits

// the algorithm needs to run x times the x number of digits of the greatest number in the array

// ex: [403, 9, 1002, 23, 985, 3413, 83, 782, 1370,  221 ]

// we fit numbers in the buckets considering their rightmost digit
// at each iteration, we pass to the next digit to the left

//1. LOOKING AT LAST DIGIT ---------------------------------------------------------------
// |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |

//   1370    221     1002     403             985                              9
//                    782     23
//                            3413
//                            83

// [1370, 221, 1002, 782, 403, 23, 3413, 83, 985, 9]

//2. LOOKING AT 2nd LAST------------------------------------------------------------------------
// |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |

//   1002     3413    221                                     1370    782
//    403              23                                              83
//     09                                                             985

// [1002, 403, 9, 3413, 221, 23, 1370, 782, 83, 985]

//3. LOOKING AT 3rd LAST
//...
//4. LOOKING AT 4th LAST
//...
