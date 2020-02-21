# Initialisation
data =  {"apple", "banana", "cherry"}
data =  set(["apple", "banana", "cherry"])
print('data',data)

# Update
print('______UPDATE______')
data.add('watermelon')
print('add',data)

data.update(['mango','melon','apple'])
print('update',data)









# Initialisation
data =  {"apple", "banana", "cherry"}
print('data',data)

# Delete
print('______DELETE______')
data.remove('banana')
print('remove',data)

data.remove('orange')
print('remove',data)
data.discard('orange')
print('discard',data)

data.pop()
print('pop',data)

del data
print('delete',data)

data.clear()
print('clear',data)









# Initialisation
fruit1 = {'apple','banana','orange','papaya', 'avocado'}
print('fruit1',fruit1)
fruit2 = {'papaya', 'melon'}
print('fruit2',fruit1)


# Other
print('____________')
mixFruit=fruit1.union(fruit2)
print('union',mixFruit)

mixFruit=fruit1.issuperset(fruit2)
print('issuperset',mixFruit)

mixFruit=fruit1.intersection(fruit2)
print('intersection',mixFruit)

mixFruit=fruit1.difference(fruit2)
print('difference',mixFruit)

fruit1.update(fruit2)
print('update',fruit1)





