# def findMissingNumbers(numbers):
#     # Write your code here
#     final=[]
#     def max_dalam_list(numbers):
#         maks=float('-inf')
#         for i in numbers:
#             if i > maks:
#                 maks=i
#         return maks
#     for j in range(1,max_dalam_list(numbers)+1):
#         if j not in numbers:
#             final.append(j)
#     return final

# print(findMissingNumbers([1,5,10,7,6]))

# def dominoCard(cards, deck):
#     # Write your code here
#     maks=float('-inf')
#     sama=[]
#     maks_index=float('inf')
#     output=[]
#     for i in cards:
#         if i[0] == deck[0] or i[0] == deck[2]:
#             sama.append(i)
#         elif i[2] == deck[0] or i[2] == deck[2]:
#             sama.append(i)
#     for hand in sama:
#         if int(hand[0]) > maks and int(hand[0])>int(hand[2]):
#             maks = int(hand[0])
#             maks_index=cards.index(hand)
#         elif int(hand[2]) > maks and int(hand[2]) > int(hand[0]):
#             maks = cards[2]
#             maks_index=cards.index(hand)
#     if maks_index != float('inf'):
#         output.append(cards[maks_index])
#     if output != []:
#         return 'keluarkan kartu {}'.format(output[0])
#     else :
#         return 'tutup 1 kartu'

# # print(dominoCard(['3:3','6:5','3:4','2:1'],'3,5'))
# print(dominoCard(['2:4','6:6','3:6'],'1,5'))

# def recursiveFormatDuration(seconds):
#     # Write your code here
#     list_of_time=[3600, 60]
#     jam=0
#     menit=0
#     detik=0
#     if seconds > 3600 :
#         jam+=1
#         seconds -= 3600
#     elif seconds > 60 :
#         menit +=1
#         seconds -= 60
#     else :
#         return '{} jam {} menit {} detik'.format(jam,menit,seconds) 
        
#     recursiveFormatDuration(seconds)

def generateBorderBox(number):
    # Write your code here
    hasil=[]
    for i in range(number):
        if i == 0 or i == number-1:
            hasil.append('I'*number+'\n')
        elif i == 1 or i == number - 2 :
            hasil.append('I'+' '*(number-2)+'I'+'\n')
        elif i == 2 or i == number - 3 :
            hasil.append('I'+' '+'I'*(number-4)+' '+'I'+'\n')
        elif i == (int(number/2)):
            hasil.append('I I'+' '*int((number-7)/2)+'*'+' '*int((number-7)/2)+'I I'+'\n')
        else :
            hasil.append('I I'+' '*int(number-6)+'I I'+'\n') 
    hasil=''.join(hasil)
    return hasil
print(generateBorderBox(9))
print(' ')
print(generateBorderBox(13))
