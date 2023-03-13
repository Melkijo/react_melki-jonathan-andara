# (15) Event handling #
## Stateful Component vs Stateless Component ##
### Stateful Component / smart component / container component ###
artiannya adalah memiliki sebuah state, component ini dibuat dengan class, kelebihan dari class component adalah memiliki lifecycle.
### Stateless Component / dump component / presentational component ###
Adalah componenet yang tidak memiliki state hanya props, umumnya component ini dibuat dengan function.
### Perbedaan ###
| Stateless | Stateful | 
|-----------|----------|
| Tidak Tahu tentang aplikasi | Mengerti tentang aplikasi   |
| Tidak melakukan data fething | melakukan data fetching |
| Tujuan untuk visualisasi | Berinteraksi dengan aplikasi | 
| reusable | Tidak dapat digunakan kembali | 
| Hanya komunikasi dengan parent | meneruskan status dan data ke child |
