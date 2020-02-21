# Initialisation
data = {"firstName":"Jhon","lastName":"Doe",'age':30}
# # print("initial",data)

# # Read
# print('______READ______')

# print(data['firstName'])
# print(data.get('firstName'))
# # print(data['height'])
# # print(data.get('height'))
# print(data.items())
# print(data.keys())
# print(data.values())







# # Initialisation
# data = {"firstName":"Jhon","lastName":"Doe",'age':30}
# print("initial",data)

# # Update
# print('______UPDATE______')
# data['age']=33
# print('data',data)

# # insert
# data['height']=177
# print('data',data)

# data.update({'weight':60,'height':122})
# print('update',data)







# # Initialisation
# data = {"firstName":"Jhon","lastName":"Doe",'age':30, 'height':177}
# print("initial",data)

# # Delete
# print('______DELETE______')
# data.pop('lastName')
# print('pop',data)

# data['lastName'] = None
# print('test',data)

data.popitem()
print('popitem',data)

# del data['firstName']
# print('delete',data)
# # del data
# # print('delete',data)

# data.clear()
# print('clear',data)







# # Initialisation
# data = {"firstName":"Jhon","lastName":"Doe",'age':30}
# print('data',data)

# print('______COPY______')
# newData=data.copy()
# # newData=dict(data)
# print('newData',newData)
# newData['height']=175
# print('newData',newData)
# print('data',data)
