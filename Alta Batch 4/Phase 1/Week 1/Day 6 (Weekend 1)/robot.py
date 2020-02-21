def findWords(words):
    final=[]
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
    for i in words:
        print(i)
        if checkdalamsaturow(i)==True:
            final.append(i)
            print(i)
    return final

print(findWords(["Hello", "Alaska", "Dad", "Peace"]))