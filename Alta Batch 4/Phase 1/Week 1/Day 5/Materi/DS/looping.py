fruit = ['apple', 'orange', 'manggo']
fruit = ['orange', 'apple', 'manggo']

for x in range(len(fruit)):
        print(x,fruit[x])

for x in fruit:
        print(x)


student={
        "name":"ana",
        "age":13,
    }
student={
    "age":13,
    "name":["ana"],
}
student['name'].append('anna')
print(student)

for x,y in student.items():
        print(x,y)


fruit = [
    ['apple', 'orange', 'manggo'],
    ['papaya', 'cherry', 'banana'],
    ['melon', 'watermelon']
]


for x in fruit:
    for y in x :
        print(y)

for x in fruit:
    if 'apple' in x :
        print('yes')
    else:
        print('no') 


students={
    "student1":{
        "name":"ana",
        "age":13,
    },
    "student2":{
        "name":"ani",
        "age":14,
    },
    "student3":{
        "name":"ane",
        "age":15,
    }
}


for y in students:
    for x in students[y]:
        print(students[y][x])

for studet in students.items():
    print(student)