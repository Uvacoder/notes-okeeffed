(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{"O2U/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),b=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Git/Git-In-Depth.md"}});var i={_frontmatter:r},o=b.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(o,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"git-indepth-course"},"Git Indepth Course"),Object(n.b)("p",null,"These are notes taken from the Front End Masters course."),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://frontendmasters.com/courses/git-in-depth/"}),"Course online")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",l({parentName:"li"},{href:"https://gist.github.com/Chaser324/ce0505fbed06b947d962"}),"Contributing from a fork GitHub workflow"))),Object(n.b)("h2",{id:"git-foundations"},"Git Foundations"),Object(n.b)("h3",{id:"data-storage"},"Data Storage"),Object(n.b)("p",null,"Git is analagous to a key value store. The key is essentially a hash while the value is the file data."),Object(n.b)("p",null,"The key is a ",Object(n.b)("inlineCode",{parentName:"p"},"SHA1")," crypto hash function (40-digit hexidecimal number)."),Object(n.b)("p",null,"This value will be the same if the given input is the same."),Object(n.b)("p",null,"Also known as a ",Object(n.b)("inlineCode",{parentName:"p"},"content-addressable system")," as the content can be used to generate the key."),Object(n.b)("h3",{id:"git-blobs"},"Git Blobs"),Object(n.b)("p",null,"Git stores compressed data in blobs, along with metadata in a header. This comprises of:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The identifier blob"),Object(n.b)("li",{parentName:"ol"},"The size of the content"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"\\0")," delimiter"),Object(n.b)("li",{parentName:"ol"},"Content")),Object(n.b)("h3",{id:"asking-git-for-hash-object"},"Asking Git for Hash-Object"),Object(n.b)("p",null,"Generating a SHA1 with the content:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"echo 'Hello, World!' | git hash-object --stdin")),Object(n.b)("p",null,"You can then generate the SHA1 of the contentd with the metadata:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"echo 'blob 14\\0Hello, World!' | openssl sha1")),Object(n.b)("p",null,"This generated hash gives a blob, the size and the content and you'll notice that BOTH of the above end up with the same hash! Because of this, the likelyhood of a collision are infinitely small."),Object(n.b)("p",null,"Note that all this data is stored in the ",Object(n.b)("inlineCode",{parentName:"p"},".git")," directory."),Object(n.b)("p",null,"To know where we write it, we can use the hash and tell git to write it:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"echo 'Hello, World!' | git hash-object -w --stdin")),Object(n.b)("p",null,"If you tree through the ",Object(n.b)("inlineCode",{parentName:"p"},".git")," folder afterwards (in a clean enough directory), you'll see that the blob stored in an ",Object(n.b)("inlineCode",{parentName:"p"},"objects")," folder."),Object(n.b)("p",null,"The directory it is stored in begins with the first two chars of the hash and the file is the rest of the characters."),Object(n.b)("p",null,"The blob itself is missing the ",Object(n.b)("inlineCode",{parentName:"p"},"filenames")," and the ",Object(n.b)("inlineCode",{parentName:"p"},"directory structures"),". Git stores this information in trees."),Object(n.b)("h3",{id:"git-trees"},"Git Trees"),Object(n.b)("p",null,"A tree contains pointers (using SHA1) to blobs and other trees as a directed graph."),Object(n.b)("p",null,"It also contains metadata:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Type of pointer"),Object(n.b)("li",{parentName:"ol"},"Filename or directory name"),Object(n.b)("li",{parentName:"ol"},"Mode (executable, symbolic link etc)")),Object(n.b)("p",null,"As we commit, if the blob or tree has not changed, we will just point to the same copy."),Object(n.b)("h3",{id:"other-optimisations"},"Other optimisations"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Git objects are compressed"),Object(n.b)("li",{parentName:"ol"},"As files change, their contents remain mostly similar"),Object(n.b)("li",{parentName:"ol"},"Git optimizes for this by compressing these files together into a ",Object(n.b)("inlineCode",{parentName:"li"},"Packfile")),Object(n.b)("li",{parentName:"ol"},'The Packfile stores the object, and "deltas", or the differences between one version of the file and the next'),Object(n.b)("li",{parentName:"ol"},"Packfiles are generated when you have too many object, during ",Object(n.b)("inlineCode",{parentName:"li"},"garbage collection"),", or during a push to remote")),Object(n.b)("h3",{id:"bonus-navigating-less-tips"},"Bonus: Navigating less tips"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Key"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"f"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Navigate to next page")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"b"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Navigate to previous page")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"/query"),Object(n.b)("td",l({parentName:"tr"},{align:null}),'Query for "query"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"n"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Next match")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"p"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Previous match")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"q"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Quit")))),Object(n.b)("h2",{id:"git-areas-and-stashing"},"Git Areas and Stashing"),Object(n.b)("h3",{id:"working-area-staging-area--repository"},"Working Area, Staging Area + Repository"),Object(n.b)("p",null,'These are the three areas where code lives. Note that the staging area is also sometimes called the "cache" or the "index".'),Object(n.b)("h3",{id:"the-working-area"},"The Working Area"),Object(n.b)("p",null,"The files in your working area that are also not in the staging area not handled by git (untracked files)."),Object(n.b)("h3",{id:"the-staging-area"},"The Staging Area"),Object(n.b)("p",null,"Files part of the next commit. Helps Git know what will change between this commit and the next."),Object(n.b)("p",null,'A "clean" staging area isn\'t empty! Consider the baseline staging area as being an exact copy of the last commit.'),Object(n.b)("p",null,"Git knows about modifications thanks to the SHA1 in the repository."),Object(n.b)("p",null,"We can use plumbing command to look at the index ",Object(n.b)("inlineCode",{parentName:"p"},"git ls-files -s"),". This shows the mode, then the SHA, the number of copies in the repository of the SHA and then the file name."),Object(n.b)("p",null,"Moving files in and out of the staging area:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git add ",Object(n.b)("inlineCode",{parentName:"td"},"file")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Add file to next commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git rm ",Object(n.b)("inlineCode",{parentName:"td"},"file")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Delete file in next commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git mv ",Object(n.b)("inlineCode",{parentName:"td"},"file")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Rename a file in the next commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git add -p"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Stage by chunks")))),Object(n.b)("p",null,"When you ",Object(n.b)("inlineCode",{parentName:"p"},"git rm")," a file, you are actually just replacing what is in the staging with what it currently in the repository."),Object(n.b)("h3",{id:"the-repository"},"The Repository"),Object(n.b)("p",null,"The files git know about - contains all your commits."),Object(n.b)("h3",{id:"git-stash"},"Git Stash"),Object(n.b)("p",null,"One more place where git stores changes to the code."),Object(n.b)("p",null,"It saves uncommitted work and is safe from destructive operations."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Stash changes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash list"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"List changes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash show stash@{0}"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Show contents")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash apply"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Apply last stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash apply stash@{0}"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Apply specific stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash --include-untracked"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Include untracked changes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash --all"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Keep even ignored files!")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),'git stash save "WIP: whatever"'),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Name stashes for easy reference")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash branch ",Object(n.b)("inlineCode",{parentName:"td"},"<opt branch name>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Start a branch from a stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git checkout ",Object(n.b)("inlineCode",{parentName:"td"},"<stash name>")," -- ",Object(n.b)("inlineCode",{parentName:"td"},"<filename>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Grab a single file from a stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash pop"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Remove the last stash and apply")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash drop"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Drop last stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash drop@{n}"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Drop nth stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash clear"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Remove all stashes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash show stash@{n}"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Show files in stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git stash -p"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Selectively stash changes")))),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"0")," is an index, above could instead be another reference."),Object(n.b)("h2",{id:"references-commits-branches"},"References, Commits, Branches"),Object(n.b)("p",null,"References are pointers to commits."),Object(n.b)("p",null,"Three types of references:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Tags"),Object(n.b)("li",{parentName:"ol"},"Annotated Tags"),Object(n.b)("li",{parentName:"ol"},"HEAD")),Object(n.b)("h3",{id:"what-is-a-branch"},"What is a branch?"),Object(n.b)("p",null,"A branch is just a pointer to a particular commit."),Object(n.b)("h3",{id:"what-is-head"},"What is HEAD?"),Object(n.b)("p",null,"HEAD is how git knowns what branch you're currently on and what the next parent will be."),Object(n.b)("p",null,"It is a pointer and normally points to the name of the current branch."),Object(n.b)("p",null,"It can also point at a commit too (detached HEAD)."),Object(n.b)("p",null,"It moves when:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"You make a commit in the currently active branch"),Object(n.b)("li",{parentName:"ol"},"When you checkout a new branch")),Object(n.b)("p",null,"You can ",Object(n.b)("inlineCode",{parentName:"p"},"cat .git/HEAD")," to see where the reference is currently at."),Object(n.b)("h3",{id:"tags-and-annotated-tags"},"Tags and Annotated Tags"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Lightweight tags are just a simple pointer to a commit"),Object(n.b)("li",{parentName:"ul"},"When you create a tag with no arguments, it captures the value in HEAD ",Object(n.b)("inlineCode",{parentName:"li"},"git tag my-first-tag")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'git tag -a v1.0 -m "Version 1.0 of blog"'))),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git tag"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"List tags")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git show-ref --tags"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"List tags and commit they're pointing to")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git tag --points-at ",Object(n.b)("inlineCode",{parentName:"td"},"<commit>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"List all tags pointing to a commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git show ",Object(n.b)("inlineCode",{parentName:"td"},"<tag-name>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Shows info on annotated tag ",Object(n.b)("inlineCode",{parentName:"td"},"tag-name"))))),Object(n.b)("p",null,"For what it is worth, lightweight tags are not really used."),Object(n.b)("h3",{id:"detached-head--dangling-commits"},"Detached Head & Dangling Commits"),Object(n.b)("p",null,"Sometimes you need to checkout a specific commit (or tag) instead of a branch."),Object(n.b)("p",null,"Git moves that HEAD pointer to that commit. As soon as you checkout a different branch or commit, the value of HEAD will point to the new SHA."),Object(n.b)("p",null,"The is no reference pointing to the commits you made in a detached state."),Object(n.b)("p",null,"If you don't do anything with changes in a detatched state, consider them lost."),Object(n.b)("p",null,"If you want to save your work from a detached HEAD state:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create new branch ",Object(n.b)("inlineCode",{parentName:"li"},"git branch <new-branch-name> <commit>"))),Object(n.b)("h3",{id:"dangling-commits"},"Dangling Commits"),Object(n.b)("p",null,"If you don't point a new branch at those commits from the detatched state, they will no longer be referenced in git (dangling commits)."),Object(n.b)("p",null,"Eventually, they will be garbage collected (either manually or automatically every few weeks)."),Object(n.b)("p",null,"If garbage collection hasn't run, you can use the ",Object(n.b)("inlineCode",{parentName:"p"},"reflog")," to collect them (explored later)."),Object(n.b)("p",null,"You can see a list of references for the heads by running ",Object(n.b)("inlineCode",{parentName:"p"},"git show-ref --heads"),"."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git cat-file -p <short-commit-hash>")," will show us more information on that commit."),Object(n.b)("p",null,"You can also use ",Object(n.b)("inlineCode",{parentName:"p"},"git show-ref --tags")," to check where the tags are pointing at."),Object(n.b)("h2",{id:"merging-and-rebasing"},"Merging and Rebasing"),Object(n.b)("p",null,"Under the hood, merge commits are just commits that have more than one parent. You can verify this on a merged commit by running ",Object(n.b)("inlineCode",{parentName:"p"},"git cat-file -p <short-commit-hash>")," and seeing more than one parent."),Object(n.b)("h3",{id:"what-is-a-fast-forward"},"What is a Fast-Forward?"),Object(n.b)("p",null,"Example: say we create a feature branch, then there are no more commits made to master when that feature branch is merged back in. This means we just fast-forward the master pointer to the current HEAD. This means it maintains all the commits that you had made on the feature branch."),Object(n.b)("p",null,"If you don't want to fast forward and retain a history of the merge commit (even if there are no changes to base branch) you can use ",Object(n.b)("inlineCode",{parentName:"p"},"git merge --no-ff")," which will force a merge commit, even when one is not necessary."),Object(n.b)("h3",{id:"merge-conflicts"},"Merge Conflicts"),Object(n.b)("p",null,"When merging in is not compatible. Git will create a new file that will include those conflicts."),Object(n.b)("p",null,"You can use a tool call ",Object(n.b)("inlineCode",{parentName:"p"},"Git ReReRe (Reuse Recorded Resolution)")," that saves how you resolved a conflict, and on the next conflict uses the same solution."),Object(n.b)("p",null,"Useful for long lived feature branches (like refactor) or rebasing."),Object(n.b)("p",null,"To enable ",Object(n.b)("inlineCode",{parentName:"p"},"rerere"),", we can use ",Object(n.b)("inlineCode",{parentName:"p"},"git config rerere.enabled true")," and add the ",Object(n.b)("inlineCode",{parentName:"p"},"--global")," flag to enable for all projects."),Object(n.b)("h2",{id:"history-and-diffs"},"History and Diffs"),Object(n.b)("h3",{id:"commits-messages"},"Commits Messages"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Should encapsulate one logical idea per commit")),Object(n.b)("h3",{id:"git-log"},"Git Log"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),'git log --since="yesterday"'),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Check log since yesterday")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),'git log --since="2 weeks ago"'),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Check log since two weeks ago")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git log --name-status --follow -- ",Object(n.b)("inlineCode",{parentName:"td"},"<file>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Files that have been moved or renamed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),'git log --grep="regex"'),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Search using Regex")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),'git log --author="Nina"'),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Check files by Nina")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git log --diff-filter=R --stat"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Check renamed diff. Can use A, D, M etc")))),Object(n.b)("h3",{id:"referencing-commits"},"Referencing Commits"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"^")," or ",Object(n.b)("inlineCode",{parentName:"p"},"^n"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"no args (^1): the first parent commit"),Object(n.b)("li",{parentName:"ul"},"n: nth parent")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"~")," or ",Object(n.b)("inlineCode",{parentName:"p"},"~n"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"no args: first commit back, following 1st parent"),Object(n.b)("li",{parentName:"ul"},"n: number of commits back, following only 1st parent")),Object(n.b)("p",null,"Given the following commit graphs:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-s"}),"D E F\n|/_/|\nB   C\n| /\nA <= (HEAD)\n")),Object(n.b)("p",null,"How can we reference the above?"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Node"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Reference"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"A"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A^0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"B"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A^, A^1, A~1")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"C"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A^2 (second parent)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"D"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A^^, A^1^1, A~2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"E"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A^^2, A~^2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"F"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A^2^ (some others too)")))),Object(n.b)("h3",{id:"git-show-and-diffs"},"Git Show and Diffs"),Object(n.b)("p",null,"Git show commands:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git show ",Object(n.b)("inlineCode",{parentName:"td"},"<commit>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Show commit + contents")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git show ",Object(n.b)("inlineCode",{parentName:"td"},"<commits>")," --stat"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Show files changed in commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git show ",Object(n.b)("inlineCode",{parentName:"td"},"<commit>"),":",Object(n.b)("inlineCode",{parentName:"td"},"<file>")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Look at file from another commit")))),Object(n.b)("p",null,"Git diff commands"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git diff"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Changes in unstaged files")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git diff --staged"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Changes in staged files")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git diff A B"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Shows changes on branch B not on A")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git diff A..B"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Diff between files")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git branch --merged master"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Which branches are merged w/ master")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git branch --no-merged master"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Which branches are not yet merged")))),Object(n.b)("h2",{id:"fixing-mistakes"},"Fixing Mistakes"),Object(n.b)("p",null,"We use checkout, reset, revert and clean. This section will explains the differences."),Object(n.b)("p",null,"You need to understand the 3 working areas well to understand this."),Object(n.b)("h3",{id:"git-checkout"},"Git Checkout"),Object(n.b)("p",null,"Restore working tree files or switch branches. When running, it:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Changes HEAD to point to the new branch"),Object(n.b)("li",{parentName:"ol"},"Copies the commit snapshot to the staging area"),Object(n.b)("li",{parentName:"ol"},"Working area is kept, and stages are kept unless there is a conflict")),Object(n.b)("p",null,"Use this command to also clean up a file from the working area (",Object(n.b)("inlineCode",{parentName:"p"},"git checkout -- file"),"). This just overwrites the working area with the staging area version from last commit."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git checkout <commit> -- file")," will overwrite what is in the staging area, and then the working area."),Object(n.b)("h3",{id:"git-clean"},"Git Clean"),Object(n.b)("p",null,"Cleans up the working area by deleting untracked files."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git clean --dry-run"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"See what will be deleting")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git clean -f"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Do the deletion")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"git clean -d"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Clean directories as well")))),Object(n.b)("h3",{id:"git-reset"},"Git Reset"),Object(n.b)("p",null,"Performs different actions based on arguments. By default, git performs a ",Object(n.b)("inlineCode",{parentName:"p"},"git reset --mixed"),"."),Object(n.b)("p",null,"Git reset for commits moves the HEAD pointer and optionally modifies files. For files, it does not move the HEAD pointer and modifies files."),Object(n.b)("p",null,"You have ",Object(n.b)("inlineCode",{parentName:"p"},"--soft"),", ",Object(n.b)("inlineCode",{parentName:"p"},"--mixed")," and ",Object(n.b)("inlineCode",{parentName:"p"},"--hard"),". The cheat sheet:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Move HEAD and current branch"),Object(n.b)("li",{parentName:"ol"},"Reset the staging area"),Object(n.b)("li",{parentName:"ol"},"Reset the working area")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All soft does is move the HEAD pointer. (1)"),Object(n.b)("li",{parentName:"ul"},"Mixed moves the HEAD and and then copies the repo file at the new commit to the staging area. (1) + (2)"),Object(n.b)("li",{parentName:"ul"},"Hard does the above but also copies the file to the working area on top. It is destructive and cannot be undone. (1) + (2) + (3)"),Object(n.b)("li",{parentName:"ul"},"Git reset file will not move the HEAD but will move the files from the repo to the staging area. (2 only)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git reset ORIG_HEAD")," takes you back to original changes (Git keeps track of previous HEAD at ORIG_HEAD).")),Object(n.b)("h3",{id:"git-revert"},"Git Revert"),Object(n.b)("p",null,'The "safe" reset. It creates a new commit that introduces the opposite changes from the specified commit. The original commit stays in the repo. Use revert if you\'re undoing a commit that has already been shared. It does not change history.'),Object(n.b)("h2",{id:"rebase-and-amend"},"Rebase and Amend"),Object(n.b)("h3",{id:"amending-a-commit"},"Amending a commit"),Object(n.b)("p",null,"A quick and easy shortcut to makes changes to the previous commit."),Object(n.b)("p",null,"Example: say you made a commmit but forgot a file. You can stage that commit and amend it."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-shell"}),"git add path/to/missing/file.txt\ngit commit --amend\n")),Object(n.b)("p",null,"Because commits cannot be amending, this creates a commit with a new SHA1."),Object(n.b)("h3",{id:"rebasing"},"Rebasing"),Object(n.b)("p",null,"This allows us to apply our commits cleanly on top of a new parent."),Object(n.b)("p",null,"First, it rewinds the head, then slowly applies the new commits."),Object(n.b)("p",null,'The power of rebasing comes from replaying commits. Commits can be edited, removed, combined, re-ordered, inserted before they are "replayed" on top of the new HEAD.'),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git rebase -i <name-of-commit-to-fix>^")," is a nice shortcut to update and replay from the parent of an issue commit."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Option"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"pick"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Keep this commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"reword"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Keep commit but change message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"edit"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Keep commit but stop to edit more than the message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"squash"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Combine this commit with the previous one, stop to edit message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"fixup"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Combine this with prev commit, and keep prev commit message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"exec"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Run the command on this line after picking the prev commit")))),Object(n.b)("p",null,"A worthwhile tip is to create a branch prior to any rebase."),Object(n.b)("h2",{id:"forks-and-remotes"},"Forks and Remotes"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Term"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Fork"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A copy of a GitHub repo that is kept in your repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Pull Request"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A request to merge your changes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"Upstream"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"A base repository that enables you to keep your fork up to date")))),Object(n.b)("p",null,'It generally follows the "triangular workflow".'),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git branch -vv")," will show you which upstream or remote branch you are tracking on your local branch."),Object(n.b)("p",null,"Git fetch is important to keep local up to date and pulls all the changes. Git pull will do a fetch and then a merge."),Object(n.b)("p",null,"To see which commits haven't been pushed to upstream yet, use ",Object(n.b)("inlineCode",{parentName:"p"},"git cherry -v"),"."),Object(n.b)("p",null,"For information on the general workflow for forking, working and then submitted a PR, checkout this ",Object(n.b)("a",l({parentName:"p"},{href:"https://gist.github.com/Chaser324/ce0505fbed06b947d962"}),"GitHub resource"),"."),Object(n.b)("h2",{id:"github"},"GitHub"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Shortcut"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"gc"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Go to code")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"gi"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Go to issues")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"gp"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Go to PRs")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Go to projects")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"gw"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Go to Wiki")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"t"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Activates the file finder")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"l"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Jump to line")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"w"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Switch branch/tag")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"y"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Expand URL to canonical form")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),"i"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Show/hide inline notes")))))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Git/Git-In-Depth.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-git-git-in-depth-md-d42ae62ee7bd425b6ce1.js.map