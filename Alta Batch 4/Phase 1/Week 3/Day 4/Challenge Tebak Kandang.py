# Guess the Right Challenge Code

import os, sys, random

class Variabel:
    def __init__(self):
        self.save = []        
        self.temp = []
        self.pilih = 0 #input pilih menu
        self.banyak_kandang = 0 #input banyak kandang
        self.pilih_kandang = 0 #input pilih kandan
        self.count = 0
        self.tebakan = "" #input tebakan
        self.tebak_random = ""

class Game(Variabel):
    def __init__(self):
        super().__init__()

    def awal(self):
        print("===========================")
        print("       Tebak Kandang       ")
        print("===========================")
        print("1: Jumlah Kandang")
        print("99: Exit")
        self.pilih = input("Pilihan menu : ")
        if self.pilih == '1':
            main.pilihan()
        elif self.pilih == '99':
            print("Terima kasih telah bermain di game tebak kandang sederhana ini")
        else:
            print("Maaf, anda memasukkan input yang tidak ada dalam menu.")

    def pilihan(self):
        os.system("clear")
        self.banyak_kandang = int(input("Masukkan jumlah kandang : "))
        main.play()
    
    def play(self):
        os.system("clear")
        print("Masukkan jumlah kandang : " + str(self.banyak_kandang))
        for i in range (1,self.banyak_kandang+1):
            self.save.append(str(i))
        for i in range(0,self.banyak_kandang):
            print("|||\n|"+self.save[i]+"|\n|||\n")
        main.loop() 
        
    def loop(self):
        self.pilih_kandang = int(input("Pilih kandang yang ingin dibuka: "))
        print("=======PILIHAN=======")
        print("B: Bebek")
        print("K: Kambing")
        print("Z: Zebra")
        print("")
        self.tebakan = input("Masukkan tebakan: ").upper()
        main.akhir()

    def akhir(self):
        self.tebak_random = random.choice(['B','K','Z'])
        self.temp = self.save.copy()
        self.temp[self.pilih_kandang-1] = self.tebakan
        
        print("PERCOBAAN BUKA")
        for i in range(0,self.banyak_kandang):
            print("|||\n|"+self.save[i]+"|\n|||\n")
        if self.tebak_random == self.tebakan:
            self.save = self.temp.copy()
            self.count = self.count + 1
            print("TEBAKAN BENAR!")
            for i in range(0,self.banyak_kandang):
                print("|||\n|"+self.temp[i]+"|\n|||\n")
        else:
            print("TEBAKAN SALAH!")
            for i in range(0,self.banyak_kandang):
                print("|||\n|"+self.save[i]+"|\n|||\n")        
            # if(ord(self.save[i])<97):
        if self.count != self.banyak_kandang:
            self.loop()
        else:
            print("Terima Kasih")

main = Game()
main.awal()
