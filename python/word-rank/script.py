# coding=utf-8

# input: array with multiple strings
# expected output: rank of the 3 most often repeated words in given set of strings and number of times they occured, case insensitive

sentences = [
    'Taki mamy klimat',
    'Wszędzie dobrze ale w domu najlepiej',
    'Wyskoczył jak Filip z konopii',
    'Gdzie kucharek sześć tam nie ma co jeść',
    'Nie ma to jak w domu',
    'Konduktorze łaskawy zabierz nas do Warszawy',
    'Jeżeli nie zjesz obiadu to nie dostaniesz deseru',
    'Bez pracy nie ma kołaczy',
    'Kto sieje wiatr ten zbiera burzę',
    'Być szybkim jak wiatr',
    'Kopać pod kimś dołki',
    'Gdzie raki zimują',
    'Gdzie pieprz rośnie',
    'Swoją drogą to gdzie rośnie pieprz?',
    'Mam nadzieję, że poradzisz sobie z tym zadaniem bez problemu',
    'Nie powinno sprawić żadnego problemu, bo Google jest dozwolony',
]

# Example result:
# 1. "mam" - 12
# 2. "tak" - 5
# 3. "z" - 2


# Good luck! You can write all the code in this file.

# My solution:

# 1. Create a dictionary with words as keys and number of occurences as values
words = {}
for sentence in sentences:
    for word in sentence.split():
        word = word.lower()
        if word in words:
            words[word] += 1
        else:
            words[word] = 1
# 2. Sort the dictionary by values
sorted_words = sorted(words.items(), key=lambda x: x[1], reverse=True)
# 3. Print the result
for i in range(3):
    print(f"{i+1}. {sorted_words[i][0]} - {sorted_words[i][1]}")