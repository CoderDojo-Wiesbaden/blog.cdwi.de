---
layout: post
title: Wir haben einen neuen Blog
permalink: /neuanfang
tags: [Neu, Änderung, Blog, Web, Projekt, Design]
author: Florian
---

Als wir Anfang des Jahres von Squarespace als CMS und Hoster zu Firebase als Hoster und einer statischen Website umgezogen sind, mussten wir leider unseren Blog enden lassen.

**Die Zeit ohne Blog ist jetzt aber vorbei 😀**

<!--break-->

Diese wunderschöne, auf [Jekyll](https://jekyllrb.com) basierende Website nimmt ab sofort parallel [zu unserer komplett statischen Seite](https://coderdojo-wiesbaden.de) ihre Arbeit als Blog auf.

Ein großer Vorteil von Jekyll ist, die schnelle Reaktionszeit durch statische Seiten, die dann bei der Erstellung eines Beitrages oder der Änderung der Konfiguration neu erstellt werden.

Wenn du einen eigenen Blog oder eine Website basierend auf Jekyll erstellen möchtest, helfen wir dir im CoderDojo gerne weiter! [Hier geht es zur Anmeldung](https://coderdojo-wiesbaden.de/anmeldung).

---

Wenn du einen Beitrag auf diesem Blog verfassen möchtest, musst du in unserer GitHub-Organisation sein. Frag einfach an, wir fügen dich hinzu.
Erstelle dann im Ordner `_posts` eine Markdown-Datei mit einem Namen nach dem Schema `Jahr-Monat-Tag-Name.md` (z.B. *`2018-07-12-ein-post.md`*).
Ganz oben muss die Datei die folgenden Zeilen aufweisen:
```yml
---
layout: post
title: #Der angezeigte Name (z.B. Ein Beitrag)
permalink: #Ein möglichst kurzer, lesbarer link (z.B. /neuanfang)
tags: #Die Tags, die mit Beitrag zusammenhängen (z.B. Beitrag Hilfe Anleitung)
author: #Wenn du möchtest, kannst du dich hier als Autor hinzufügen.
---
```
Danach kannst du deinen Beitrag schreiben und Markdown nutzen. [Hier ist eine Auflistung vieler Markdown-Funktionen](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Damit die Startseite nicht durch lange Beiträge unübersichtlich wird, kannst du angeben, an welcher Stelle dein Beitrag unterbrochen werden soll.
Füge `<!--break-->` ein, um einen Weiterlesen-Link hinzuzufügen.
Falls du diese Unterbrechung mitten in einem Paragraphen setzt, verwende bitte `<!--break--><!--n-->`.

Tipp: Wenn du im Dateinamen ein Datum in der Zukunft wählst, wird dein Beitrag erst an diesem Datum veröffentlicht.