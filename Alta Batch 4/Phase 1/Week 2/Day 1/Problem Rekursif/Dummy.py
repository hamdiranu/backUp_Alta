# import re

# # nomor = 'Transaction #14879'
# # pattern = '#(\d+)'
# # hasil=re.search(pattern,nomor)
# # if re.search(pattern,nomor):
# #     print(hasil.group(1))

# # patternemail = '([a-zA-Z_]+@[a-z]+\.[a-zA-Z]{2,3})'
# # email='johndoe@yahoo.co.id'

# # if re.search(patternemail,email):
# #     print("Ya")

# a= '1992-06-56'

# print('ini')
# print(a[-2:])
# if int(a[-2:]) <= 30 :
#     pattern = '([19|20][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])'
#     if re.search(pattern,a):
#         print('valid')
#     else :
#         print('invalid')
# elif int(a[-2:]) == 31 :
#     pattern = '([19|20][0-9][0-9])-(0[1|3|5|7|8]|1[0|2])-(31)'
#     if re.search(pattern,a):
#         print('valid')
#     else :
#         print('invalid')
# else :
#     print('invalid')


# # (0[1-9]|[1-2][0-9]|30|31)
# # if 
#   # for i in arr :
#   #   output['tgl_lahir']=i['tgl_lahir']
#   #   output['nama'] = i['nama']
#   #   print(output)
#   #   if tahunKabisat(int(i['tgl_lahir'][0:4])) == True :
#   #     if i['tgl_lahir'][-5:-3] == '02' :
#   #       pattern = '[19|20][0-9][0-9]+-02+-(0[1-9])|([1-2][0-9])'
#   #       if re.search(pattern,i['tgl_lahir']):
#   #         status = True
#   #       else :
#   #         output['alasan']=['penunjuk hari dalam bulan terkait tidak valid (cek aturan tahun kabisat)'] 
#   #     else :
#   #       if int(i['tgl_lahir'][-2:]) <= 30 :
#   #         pattern = '[19|20][0-9][0-9]]+-(0[1-9])|(1[0-2])+-(0[1-9])|([1-2][0-9])|30'
#   #         if re.search(pattern,i['tgl_lahir']):
#   #           status = True
#   #         else :
#   #           output['alasan'] = ['hari di luar batas yang ditentukan']
#   #       elif int(i['tgl_lahir'][-2:]) == 31 :
#   #         pattern = '[19|20][0-9][0-9]]+-(0[1|3|5|7|8])|1[0|2]+-31'
#   #         if re.search(pattern,i['tgl_lahir']):
#   #           status = True
#   #         else :
#   #           output['alasan'] = ['hari di luar batas yang ditentukan']
#   #       else :
#   #         output['alasan'] = ['hari di luar batas yang ditentukan']







#   #     else :
#   #       if int(i['tgl_lahir'][-2:]) <= 30 :
#   #         pattern = '[19|20][0-9][0-9]]+-(0[1-9])|1[0-2]+-(0[1-9])|([1-2][0-9])|30'
#   #         if re.search(pattern,i['tgl_lahir']):
#   #           status = True
#   #         else :
#   #           output['alasan'] = ['hari di luar batas yang ditentukan']
#   #       elif int(i['tgl_lahir'][-2:]) == 31 :
#   #         pattern = '[19|20][0-9][0-9]]+-(0[1|3|5|7|8])|1[0|2]+-31'
#   #         if re.search(pattern,i['tgl_lahir']):
#   #           status = True
#   #         else :
#   #           output['alasan'] = ['hari di luar batas yang ditentukan']
#   #       else :
#   #         output['alasan'] = ['hari di luar batas yang ditentukan']
#   #   else :
#   #     if int(i['tgl_lahir'][-2:]) <= 30 :
#   #       pattern = '[19|20][0-9][0-9]]+-(0[1-9])|1[0-2]+-(0[1-9])|([1-2][0-9])|30'
#   #       if re.search(pattern,i['tgl_lahir']):
#   #         status = True
#   #       else :
#   #         output['alasan'] = ['hari di luar batas yang ditentukan']
#   #     elif int(i['tgl_lahir'][-2:]) == 31 :
#   #       pattern = '[19|20][0-9][0-9]]+-(0[1|3|5|7|8])|1[0|2]+-31'
#   #       if re.search(pattern,i['tgl_lahir']):
#   #         status = True
#   #       else :
#   #         output['alasan'] = ['hari di luar batas yang ditentukan']
#   #     else :
#   #       output['alasan'] = ['hari di luar batas yang ditentukan']

#   #   if status == True :
#   #     final['valid'].append(output)
#   #   else :
#   #     final['invalid'].append(output)
#   # return final
# def showPrim(numberX):
#     lst=[]
#     faktor = 0 # initial value untuk jumlah faktor
#     for i in range(2,30):
#         hasil=[]
#         for j in range(1, i+1):
#             if i % j == 0 :
#                 faktor += 1
#                 hasil.append(j)
#         if len(hasil)==2:
#             lst.append(i)
#     if numberX in lst:
#         print(lst.index(numberX)+1)
# print(showPrim(2))
def checkUnik(number):
    out=number
    while number > 1 :
        if number % 2 == 0 :
            number = number/2
        else :
            if number% 3 == 0 :
                number = number / 3
            else :
                if number % 5 == 0:
                    number = number / 5
                else :
                   break
    if number == 1:
        return ('Ya')
    else :
        return ('Tidak')

print(checkUnik(0))
print(checkUnik(1))
print(checkUnik(7))
print(checkUnik(8))
print(checkUnik(9))