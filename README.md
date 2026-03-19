# Chatlog Editor

Chatlog Editor, converts MTA-SA/SA-MP logs into images, making screenshot editing easier.

## Features

* Removes timestamps from screenshots. 

* If available, it detects and adjusts hexadecimal color codes within curly brackets.

* It automatically detects whispering status and emotes in the chat and adjusts the line color accordingly.

## Examples
### Input

```
John Doe mondja: Szép jó napot.
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
##### Resulting image

![emote example](https://i.imgur.com/MOfBA6o.png)

***
#### Credits
This project is based on [Chatlog Magician](https://github.com/ulasbayraktar/chatlog-magician) by [@ulasbayraktar](https://github.com/ulasbayraktar).
