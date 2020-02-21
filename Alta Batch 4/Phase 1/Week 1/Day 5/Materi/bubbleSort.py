array = [1, 4, 2, 3, 9, 10, 12, 31]

swapped = True
while swapped :
  swapped = False
  maxIter = len(array) - 1
  for i in range(maxIter) :
    val1 = array[i]
    val2 = array[i + 1]
    if val1 > val2 :
      array[i] = val2
      array[i + 1] = val1
      swapped = True
print(array)