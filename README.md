# Chatlog Editor

Chatlog Editor, MTA:SA logokat átalakít képekké átlátszó háttérrel, megkönnyítve az élménykép készítést.
## Funkciók

* Kitörli a logban szereplő felesleges adatokat sor elején, ha jelen vannak.

* {} között lévő HEX színeket felhasználja.

* Automatikusan érzékel több fajta formátumot (/me, /do, /ame).

## Példák
### Bemenet

```
[2026-03-19 08:00:00] [Output] : John Doe mondja: Szép jó napot.
*** John Doe leül a földre.
>> John Doe egy 25 éves férfi, 170 cm magas.
John Doe mondja rádióba: Jó napot.
* A földön egy boombox található.
John Doe suttogja: Szevasz.
John Doe suttogva: Szevasz.
John Doe mondja (telefon): Üdv eladó.
John Doe mondja a megafonba: Ez itt az LSPD!
((John Doe)) megaphone: Ez itt az LSPD!
John Doe mondja: Jó napot.*megemeli kalapját* 
```
##### Eredmény kép

![emote example](https://i.imgur.com/H8mi5Wq.png)

***
#### Credits
This project is based on [Chatlog Magician](https://github.com/ulasbayraktar/chatlog-magician) by [@ulasbayraktar](https://github.com/ulasbayraktar).
