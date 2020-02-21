# Function
def my_function():
    print("Hello From My Function")

def my_function_with_args(username, greeting):
    print("hello, %s, from my function, i wish you %s"%(username, greeting))

def sum_two_number(a,b):
    return a + b

# # call function sum
# print(sum_two_number(5,4))

# # String Formating
# age = 20
# name = 'Swaroop'
# alist = ['john', 20]

# print('{} was {} years old when he wrote this book'. format(name, age))
# print('{} was {} years old when he wrote this book'. format(alist[0], alist[1]))
# print('{0} was {1} years old when he wrote this book'. format(name, age))
# print('{name_keyword} was {age_keyword} years old when he wrote this book'. format(age_keyword = age, name_keyword = name))
# print(f'{name} was {age} years old when he wrote this book')
# print('%s was %.2f years old when he wrote this book' %(name, age))
# print(name,'was', age, 'years old when he wrote this book')

astring = "hello world"

# # legth of string
# print(len(astring))

# # Index of letter
# print(astring.index('hello')) # jika tidak menemukan, akan error
# print(type(astring.index('hello')))
# print(astring.find('hello')) # jika tidak menemukan, akan mengeluarkan output -1
# print(astring.find('o',7)) # mencari 'o' dengan start point pada index ke-7

# # Count
# print(astring.count('l'))
# print(astring.count('w'))
# print(astring.count('hello'))

# print(" "*50+"S L I C I N G"+" "*40)
# # Slicing
# print(astring[0])
# print(astring[0:5])
# print(astring[0:5:2])
# print(astring[-2])
# print(astring[::-1])
# print(astring[:-5:-1])

# print(" "*50+"UPPER & LOWER"+" "*40)

# # Upper
# print(astring.upper())

# # Lower
# print(astring.lower())

# # Capitalized
# print(astring.capitalize()) # hanya huruf awal kalimat yang kapital

# # Title
# print(astring.title()) # Setiap huruf pada awal kata akan menjadi kapital

# # Basic String Operation
# print(astring.startswith("hello"))
# print(astring.endswith("sdafafsaf"))

# gstring = 'Hello world, john doe!'
# afewwords = gstring.split('world')
# # print(afewwords)
# # print(''.join(afewwords))

# for index,val in enumerate(afewwords):
#     print(f'index :{index}, value : {val}')

# print()
# print("===========================")

# for i in range (0, len(afewwords)):
#     print(f'index : {i}, value : {afewwords[i]}')

a = ['a','b','c']
b = a.copy() # atau b = a[:]
print(a)
print(b)

for index,_ in enumerate(a):
    print(index)