(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{zXmt:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return m}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var l=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Vim/Neovim.md"}});var o={_frontmatter:r},u=a.a;function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(l.b)(u,i({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"neovim"},"Neovim"),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"On Mac, use brew: ",Object(l.b)("inlineCode",{parentName:"p"},"brew install vim")),Object(l.b)("h2",{id:"settings"},"Settings"),Object(l.b)("p",null,"Install ",Object(l.b)("a",i({parentName:"p"},{href:"https://github.com/junegunn/vim-plug"}),"Vim Plug")," for plugins and check personal Gist for useful plugins."),Object(l.b)("p",null,"Some of the plugins include:"),Object(l.b)("pre",null,Object(l.b)("code",i({parentName:"pre"},{className:"language-shell"}),"call plug#begin('~/.local/share/nvim/plugged')\n\nPlug 'Yggdroot/indentLine'\nPlug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }\nPlug 'junegunn/fzf.vim'\nPlug 'morhetz/gruvbox'\nPlug 'mattn/emmet-vim'\nPlug 'tpope/vim-surround'\nPlug 'tpope/vim-commentary'\nPlug 'tpope/vim-repeat'\nPlug 'sheerun/vim-polyglot'\nPlug 'fatih/vim-go'\nPlug 'scrooloose/nerdtree'\nPlug 'jlanzarotta/bufexplorer'\n\" Plug 'Numkil/ag.nvim'\nPlug 'mhinz/vim-grepper'\nPlug 'vim-airline/vim-airline'\nPlug 'vim-airline/vim-airline-themes'\nPlug 'tpope/vim-fugitive'\nPlug 'dense-analysis/ale'\nPlug 'tpope/vim-sleuth' \" automaticlly guess indentation settings\n\n\" Plug 'kien/ctrlp.vim'\n\" Plug 'ivalkeen/vim-ctrlp-tjump'\n\n\" Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }\n\nPlug 'pangloss/vim-javascript'\n\" Plug 'leafgarland/typescript-vim'\n\" Plug 'peitalin/vim-jsx-typescript'\n\" Plug 'mhartington/nvim-typescript', {'for': ['typescript', 'typescript.tsx'], 'do': './install.sh' }\nPlug 'flowtype/vim-flow'\n\" Plug 'amdeus/vim-xml'\nPlug 'amadeus/vim-jsx'\n\nPlug 'leafgarland/typescript-vim'\nPlug 'peitalin/vim-jsx-typescript'\n\nPlug 'elixir-editors/vim-elixir'\n\n\" Plug 'neoclide/coc.nvim', {'do': { -> coc#util#install()}}\n\n\" Typescript\n\" Plug 'HerringtonDarkholme/yats.vim'\n\" \" For async completion\n\" Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }\n\" \" For Denite features\n\" Plug 'Shougo/denite.nvim'\n\n\nPlug 'elmcast/elm-vim'\n\nPlug 'tpope/vim-commentary'\n\n\" Plug 'fatih/vim-go', { 'for': 'go' }\n\" Plug 'zchee/deoplete-go', { 'for': 'go', 'do': 'make'}\n\nPlug 'nanotech/jellybeans.vim'\nPlug '~/dev/jellybeans_pda'\n\n\" Plug 'chriskempson/base16-vim'sh\n\" Plug 'joshdick/onedark.vim'\n\nPlug 'ludovicchabant/vim-gutentags'\n\nPlug 'RRethy/vim-hexokinase'\n\ncall plug#end()\n")),Object(l.b)("h2",{id:"text-objects"},"Text Objects"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",i({parentName:"tr"},{align:null}),"Keys"),Object(l.b)("th",i({parentName:"tr"},{align:null}),"Definition"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",i({parentName:"tr"},{align:null}),"ciw"),Object(l.b)("td",i({parentName:"tr"},{align:null}),"Change inside word")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",i({parentName:"tr"},{align:null}),"ci("),Object(l.b)("td",i({parentName:"tr"},{align:null}),"Change inside parenthesis")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",i({parentName:"tr"},{align:null}),'ca"'),Object(l.b)("td",i({parentName:"tr"},{align:null}),"Change around quotes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",i({parentName:"tr"},{align:null}),"cat"),Object(l.b)("td",i({parentName:"tr"},{align:null}),"Change around HTML tags")))))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Vim/Neovim.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-vim-neovim-md-dc66fb985ff7af3bcc98.js.map