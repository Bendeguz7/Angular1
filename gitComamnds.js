/* check your settings
$ git config --list
$ git config user.name
*/
/* help
$ git help .... pl:
$ git help config
*/
/* melyik directoryban vagyunk?
$ pwd
*/
/* directory váltás
$ cd /e/San/Work/Gits/BootStrap 
*/
/* egy létező könyvtárba létesíteni repositoryt
$ cd célkönyvtár
$ git init
ez létrehoz egy .git könyvtárat  a szükséges repo fájlokkal
$ ls -F1
megmuatja, hogy milyen fájlok vannak a repoban
*/
/* megadni, hogy melyik fájlt kövesse, tegye be a git adatbázisba, commit-elje
$ git add *.js
*/
/* berakni a git adatbázisba, commit-elés:
$ git commit -m ' megjegyzés: pl első verzió'
*/
/* módosítás után teendő: ujra stagelni kell
$ git add first.html majd comitt
ha comitt előtt megint változtatás van újra kell add!!!!!!!
*/
/* rövid status
$ git status -s 
A: stage fázisban van = committra vár
??: nem trackelt
M: modified
*/
/* .gitignore  amit soha ne trackeljen, ne kerüljön be a git db-be
*.[oa]   file ami .o  vagy .a-ra végződik
*~  file ami ~ - re végződik: a git szerkesztők temporary file-ként kezelik
*/
/* commitmél megnézni mi változott:
$ git commit -v

*/
/* commitnél uzenetet beirni
$ git commit -m 'uzenet'
*/
/* ha ugyanazokat a filokat kell committelni mint eddig az add (stage) kihagyható:
$ git commit -a 
 */
/* history  
$ git log 
van egy sor opciója a git log-nak pl:
$ git log -p -2
*/
/* get remote URL
$ git remote -v
*/
/* push a szerverre
commit után GitHub program sync funkció a bal felső sarokban
ezután már az internetes github haonlapon is megjelenik 
*/
