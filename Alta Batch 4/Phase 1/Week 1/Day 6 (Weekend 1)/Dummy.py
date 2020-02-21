def ubahbentuk(kata):
    output=[]
    for i in kata:
        if i in 'qwertyuiop':
            output.append('q')
        elif i in 'asdfghjkl':
            output.append('a')
        else :
            output.append('z')
    return output

def checkdalamsaturow(kata):
    def ubahbentuk(kata):
        output=[]
        kata=kata.lower()
        for i in kata:
            if i in 'qwertyuiop':
                output.append('q')
            elif i in 'asdfghjkl':
                output.append('a')
            else :
                output.append('z')
        return output
    out1=ubahbentuk(kata)

    if out1.count(out1[0])==len(kata):
        return True
    else :
        return False

# print(ubahbentuk('dad'))
print(checkdalamsaturow('Alaska'))