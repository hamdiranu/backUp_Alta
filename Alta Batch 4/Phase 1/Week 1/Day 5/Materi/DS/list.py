# Initialisation
fruit = ['apple','banana','orange']
print('fruit',fruit)

# Read
print('______READ______')

print(fruit[0])
print(fruit[-1])
print('fruit',fruit[0:2])
print(fruit.index('apple'))






# Initialisation
fruit = ['apple','banana','orange']
print('initial',fruit)

# Update
print('______UPDATE______')
fruit[0]="mango"
print('use index',fruit)

# insert
fruit.append('watermelon')
print('append',fruit)

fruit.insert(7,'melon')
print('insert',fruit)

fruit2 = ['papaya', 'avocado']
fruit.append(fruit2)
print('extend',fruit)





# Initialisation
fruit = ['apple','banana','orange','papaya', 'avocado','orange']
print('initial',fruit)

# Delete
print('______DELETE______')
print(fruit.remove('orange'))
print('remove',fruit)

print(fruit.pop())
print('pop',fruit)

fruit.pop(12)
print('pop by index',fruit)

del fruit[1]
print('delete',fruit)
# del fruit
# print('delete',fruit)

fruit.clear()
print('clear',fruit)







# Initialisation
fruit = ['apple','banana','orange','papaya', 'avocado']
print('initial',fruit)

# Other
print('______OTHER______')
fruit.reverse()
print('reverse',fruit)

fruit.sort()
print('sort   ',fruit)





# Initialisation
fruit = ['apple','banana','orange','papaya', 'avocado']
print('fruit',fruit)

print('______COPY______')
newFruit=fruit.copy()
newFruit[0]='watermelon'
print('newFruit',newFruit)
print('fruit',fruit)
