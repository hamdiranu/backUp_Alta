import os, sys, random

if sys.platform.lower() == "win32":
    os.system('color')

# Group of Different functions for different styles
class style():
    RED = lambda x: '\033[31m' + str(x)
    YELLOW = lambda x: '\033[33m' + str(x)
    BLUE = lambda x: '\033[34m' + str(x)
    WHITE = lambda x: '\033[37m' + str(x)
    MAGENTA = lambda x: '\033[35m' + str(x)
    CYAN = lambda x: '\033[36m' + str(x)
    GREEN = lambda x: '\033[32m' + str(x)
    RESET = lambda x: '\033[0m' + str(x)

# print(style.YELLOW("Hello, ") + style.RESET("World!"))

class Cell():
    def __init__(self, silang, nilai, status):
        self.silang = silang
        self.nilai = nilai
        self.status = status

    def tampilan_nilai_silang(self):
        if self.status == 'Buka':
            return('{}'.format(self.nilai)+style.RESET('')) # dibutuhkan 'reset' agar str stelah self.nilai tidak bewarna
        else :
            return('{}'.format(self.silang))

    def ganti_status_buka(self):
        self.status = 'Buka'

    def nilai_pada_cell(self):
        return self.nilai

class Reguler(Cell):
    def __init__(self, silang):
        super().__init__(silang, style.BLUE(' '), 'Tutup')

class Bomb(Cell):
    def __init__(self, silang):
        super().__init__(silang, style.RED('!'), 'Tutup')

class Bonus(Cell):
    def __init__(self, silang):
        super().__init__(silang, style.YELLOW('$'), 'Tutup')

# Sistem Game
class Board:
    pilihan_kolom = 0
    pilihan_baris = 0
    hasil = 0 # berguna agar untuk mengetahui kapan permainan harus berhenti nantinya
    score = 0
    cek_mulai = 0
    def __init__(self, hasil, score, pilihan_baris, pilihan_kolom, cek_mulai):
        self.hasil = hasil
        self.score = score
        self.pilihan_baris = pilihan_baris
        self.pilihan_kolom = pilihan_kolom
        self.cek_mulai = cek_mulai
    # =========================== Opening ===========================
    def run(self):
        os.system('clear')
        self.hasil = 0
        self.score = 0
        print('\n=====================================\n'+'||'+' '*10+style.YELLOW('Guess Games')+' '*10+style.RESET('||\n====================================='))
        print('1. Board Size \n2: Choose Cell\n98: Refresh Board\n99: Exit\n=====================================')
        kolom = 0
        baris = 0
        isi_cell = []
        self.Master_choice()

    # ============================= Menu ==================================
    def Master_choice(self):
        input1=int(input('Masukkan Pilihan Anda: '))
        if input1 == 1 :
            self.Board_Size()
        elif input1 == 2 :
            if self.cek_mulai==0:
                print('Mohon gamenya dimulai terlebih dahulu')
                self.run()
            else :
                self.pilihan_cell()
        elif input1 == 98 :
            self.Refresh_Board()
        elif input1 == 99:
            print('\n           Terima Kasih telah menggunakan program kami :)\n')
        else:
            print('\nMohon masukkan pilihan yang sesuai')
            self.run()

    # ====================== Setting Table Games ==========================
    def Board_Size(self):
        kolom=int(input('Masukkan Jumlah Kolom: '))
        baris=int(input('Masukkan Jumlah Baris: '))
        self.buat_table(kolom, baris)

    # ========================== Buat cell ===============================
    def buat_table(self, kolom, baris):
        jmlh_cell = kolom * baris
        isi_cell = []
        for i in range(0,jmlh_cell):
            index_list_nilai=random.choice([' ','!','$'])
            if index_list_nilai == ' ':
                isi_cell.append(Reguler('X'))
            elif index_list_nilai == '!':
                isi_cell.append(Bomb('X'))
            elif index_list_nilai == '$':
                isi_cell.append(Bonus('X'))
        self.tampilan_cell(kolom, baris, isi_cell)
    
    # ========================== Tampilan cell ============================== 
    def tampilan_cell(self, kolom, baris, isi_cell):
        print('\nScore : {}\n'.format(self.score))
        count=0
        i = 1
        b=[]
        f=[' ']
        for i in range(kolom):
            f.append('{}'.format(style.GREEN(str(i+1))+style.RESET('')))
        d=''.join(f)
        print(d)
        i=1
        while i < baris+1:
            b.append(style.GREEN(str(i))+style.RESET(''))
            for j in range(0,kolom):
                j += count
                b.append(isi_cell[j].tampilan_nilai_silang())
            c=''.join(b)
            print(c)
            i += 1
            b=[]
            count += kolom
        self.pilihan_cell(kolom, baris, isi_cell)

    # ========================== Pilihan Cell ============================
    def pilihan_cell(self,kolom, baris, isi_cell):
        self.cek_mulai += 1
        pilihan_kolom = 0
        pilihan_cell = 0
        cek_input_kolom = []
        cek_input_baris = []
        input3 = input('\nMsukkan Kolom yang ingin dibuka: ')
        input4 = input('Msukkan Baris yang ingin dibuka: ')
        for i in range(1,kolom+1):
            cek_input_kolom.append(str(i))
        for i in range(1,baris+1):
            cek_input_baris.append(str(i))
        if input3 in cek_input_kolom and input4 in cek_input_baris :
            self.pilihan_kolom = int(input3)
            self.pilihan_baris = int(input4)
            self.buka_cell(kolom, baris, isi_cell) 
        else:
            print('\nMohon masukkan input yang sesuai\n')
            self.Master_choice(kolom , baris, isi_cell)

    # =========================== Buka Cell =========================
    def buka_cell(self, kolom, baris, isi_cell):
        posisi = (kolom*(self.pilihan_baris-1))+(self.pilihan_kolom-1)
        if style.BLUE(' ') == isi_cell[posisi].nilai_pada_cell() :
            isi_cell[posisi].ganti_status_buka()
            self.hasil = self.hasil + 1
            self.score += 0
            os.system('clear')
            print('\n=====================================\n'+'||'+' '*10+style.YELLOW('Guess Games')+' '*10+style.RESET('||\n====================================='))
            print('1. Board Size \n2: Choose Cell\n98: Refresh Board\n99: Exit\n=====================================')
            print(style.MAGENTA('Regular Cell - Not Bad')+style.RESET(''))

        elif style.YELLOW('$') == isi_cell[posisi].nilai_pada_cell() :
            isi_cell[posisi].ganti_status_buka()
            self.hasil = self.hasil + 1
            self.score += 10
            os.system('clear')
            print('\n=====================================\n'+'||'+' '*10+style.YELLOW('Guess Games')+' '*10+style.RESET('||\n====================================='))
            print('1. Board Size \n2: Choose Cell\n98: Refresh Board\n99: Exit\n=====================================')
            print(style.YELLOW('Bonus Cell - Woow Congrats !!!')+style.RESET(''))

        elif style.RED('!') == isi_cell[posisi].nilai_pada_cell() :
            isi_cell[posisi].ganti_status_buka()
            self.hasil = self.hasil + 1
            self.score += -10
            os.system('clear')
            print('\n=====================================\n'+'||'+' '*10+style.YELLOW('Guess Games')+' '*10+style.RESET('||\n====================================='))
            print('1. Board Size \n2: Choose Cell\n98: Refresh Board\n99: Exit\n=====================================')
            print(style.RED('Bomb Cell - Sorry :(')+style.RESET(''))

        self.cek_hasil(kolom, baris, isi_cell)
        
    # ================ Pengecekan apakah semua kandang telah dibuka ==============
    def cek_hasil(self, kolom, baris, isi_cell):
        if self.hasil==kolom*baris :
            print('Score : {}'.format(self.score))
            count=0
            i = 1
            b=[]
            f=[' ']
            for i in range(kolom):
                f.append('{}'.format(style.GREEN(str(i+1))+style.RESET('')))
            d=''.join(f)
            print(d)
            i=1
            while i < baris+1:
                b.append(style.GREEN(str(i))+style.RESET(''))
                for j in range(0,kolom):
                    j += count
                    b.append(isi_cell[j].tampilan_nilai_silang())
                c=''.join(b)
                print(c)
                i += 1
                b=[]
                count += kolom
            print(style.RED('\nGAME OVER!!!')+style.RESET('\n'))
            self.Bye()
        else:
            self.tampilan_cell(kolom, baris, isi_cell)

    # ============================ Refresh Board =================================
    def Refresh_Board(self):
        os.system('clear')
        self.run()

    # ================================== OUT =====================================
    def Bye(self):
        input5=input('Apakah anda ingin mengulangi permainan? (Y/N) :')
        if input5 == "Y" or input5 == "y":
            self.run()
        elif input5 == "N" or input5 == "n":
            print('\n+-+-+-+-+-+-+-+-+-Terima Kasih telah menggunakan program kami :)+-+-+-+-+-+-+-+-+-+\n| '+' '*80+'|\n+-+-+-+-+-+-+-+-+-+-+-+-+ Created By : Hamdi R. +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n')
        else:
            print('\nMohon masukkan pilihan yang sesuai\n')
            self.Bye()

Board_object=Board(0,0,0,0,0)
Board_object.run()