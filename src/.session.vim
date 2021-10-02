let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/react/sfi/studentportal/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +15 pages/index.js
badd +2 components/Header.js
badd +27 pages/PostCreator.js
badd +7 styles/Colors.js
badd +21 styles/global.css
badd +34 components/home/HomeText.js
badd +2 components/home/OurServices.js
badd +62 styles/Typography.js
badd +46 components/home/HomeMain.js
badd +34 components/home/AboutUs.js
badd +1 components/home/Departments.js
badd +35 hooks/useDeviceType.js
badd +11 Utility.js
argglobal
%argdel
edit pages/index.js
argglobal
balt components/Header.js
let s:l = 8 - ((7 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 08|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
