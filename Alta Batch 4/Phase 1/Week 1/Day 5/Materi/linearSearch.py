anakKos = [
  {"nama" : "karyadi", "kamar": "B1"},
  {"nama" : "fajri", "kamar": "B2"},
  {"nama" : "pajar", "kamar": "B3"},
  {"nama" : "diar", "kamar": "B4"},
  {"nama" : "fahmi", "kamar": "A1"},
  {"nama" : "ilham", "kamar": "A2"},
  {"nama" : "angga", "kamar": "A3"}
]

# Mencari anak kosan yang namanya angga
for item in anakKos :
  if item["nama"] == "angga" :
    print("ini orangnya")

# Anak kosan yang namanya angga ada di kamar mana?
for index, value in enumerate(anakKos) :
  if value["nama"] == "angga" :
    kamar = anakKos[index]["kamar"]
    print("dia kamar {0}".format(kamar))

# Siapa aja sih anak kosan yang nama nya ada huruf "d" nya
penyandangD = 0
for item in anakKos :
  if "d" in item["nama"] :
    penyandangD += 1

print("penyandang D ada {0}".format(penyandangD))