(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{Nu5y:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/PHP/php-cheat-sheet.md"}});var o={_frontmatter:s},l=a.a;function c(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["components"]);return Object(r.b)(l,i({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"php-help-sheet"},"PHP Help Sheet"),Object(r.b)("h2",{id:"treehouse-php-classes"},"Treehouse PHP Classes"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"PHP OOP\nclasses\nrecipe.php\ncookbook.php")),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),'// recipe.php\n\n<?php\n\nclass Recipe\n{\n    private $title;\n    public $ingredients = array();\n    public $instruction = array();\n    public $yield;\n    public $tag = array();\n    public $source = \'Alena Holligan\';\n\n    private $measurements = array(\n        "tsp",\n        "tbsp",\n        "cup",\n        "oz",\n        "lb",\n        "fl oz",\n        "pint",\n        "quart",\n        "gallon"\n    );\n\n    public function displayRecipe()\n    {\n        return $this->title . "by" . $this->source;\n    }\n\n    public function addIngredient($item, $amount = null, $measure=null)\n    {\n        if ($amount != null && !is_float($amount) && !is_int($amount)) {\n            exit("The amount must be a float: ") . gettype($amount) . " $amount given");\n        }\n\n        if ($measure != null && !in_array(strtolower($measure), $this->measurements)) {\n            exit("Please enter a valid measurement: " . implode(", ", $this->measurements));\n        }\n\n        $this->ingredients[] = array (\n            "item" => ucwords($item),\n            "amount" => $amount,\n            "measure" => strtolower($measure)\n        );\n    }\n\n    public function getIngredients()\n    {\n        return $this->ingredients;\n    }\n\n    public function setTitle($title)\n    {\n        $this->title = ucword($title);\n    }\n\n    public function getTitle()\n    {\n        return $this->title;\n    }\n\n}\n\n?>\n\n// cookbook.php\n\n<?php\n\ninclude "classes/recipes.php";\n\n$recipe1 = new Recipe();\necho $recipe1->source;\n$recipe1->source("Grandma Holligan");\necho $recipe1->source;\n$recipe1->setTitle("My first recipe");\n$recipe1->getTitle();\n\n$recipe1->addIngredient("egg",1);\n$recipe1->addIngredient("flour",2,"cup");\n\n$recipe2 = new Recipe();\n$recipe2->source = "Betty Crocker";\n$recipe1->setTitle = "My second recipe";\n\necho $recipe1->source;\necho $recipe2->source;\n\necho $recipe1->displayRecipe();\necho $recipe2->displayRecipe();\n\nforeach ($recipe1->getIngredients() as $ing) {\n    echo "\\n" . $ing["amount"] . " " . $ing["measure"] . " " . $ing["item"];\n}\n\nvar_dump($recipe1);\n\n?>\n')),Object(r.b)("h2",{id:"php-access-modifiers"},"PHP Access Modifiers"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),'<?php\n\nclass Render {\n\n  public static function displayDimensions($size) {\n      return $size[0] . " x " . $size[1];\n  }\n\n  public static function detailsKitchen($room) {\n       return "Kitchen Dimensions: " . self::displayDimensions($room->getDimensions());\n  }\n\n}\n\n?>\n')),Object(r.b)("h2",{id:"php-magic-methods-and-constants"},"PHP Magic Methods and Constants"),Object(r.b)("p",null,"Some magic constants:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"CLASS"),"\n",Object(r.b)("strong",{parentName:"p"},"FILE")),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),'<?php\nclass Example\n{\n\n    public function __construct($title = null)\n    {\n        $this->setTitle($title);\n    }\n\n    public function __toString()\n    {\n        $output = "You are calling a " . __CLASS__ . " object with the title \\"";\n        $output .= $this->getTitle() . "\\"";\n        $output .= "\\nIt is stored in " . basename(__FILE__) . " at " . __DIR__ . ".";\n        $output .= "\\nThis display is from line " . __LINE__ . " in method " . __METHOD__;\n        $output .= "\\nThe following methods are available for objects of this class: \\n";\n        $output .= implode("\\n", get_class_methods(__CLASS__));\n        return $output;\n    }\n}\n\nclass Render\n{\n\n    public function __toString()\n    {\n        $output = "The following methods are available for " . __CLASS__ . " objects: \\n";\n        $output .= implode("\\n", get_class_methods(__CLASS__));\n        return $output;\n    }\n}\n\n$example = new Example("Name");\necho $example;\n\n?>\n\n<?php\n\nclass Fish\n{\n    public $common_name;\n    public $flavor;\n    public $record_weight;\n\n    public function __construct($name, $flavor, $record) {\n      $this->common_name = $name;\n      $this->flavor = $flavor;\n      $this->record_weight = $record;\n    }\n\n    public function getInfo() {\n      return "A {$this->common_name} is an {$this->flavor} flavored fish. The world record weight is {$this->record_weight}.";\n    }\n}\n\n$bass = new Fish("Largemouth Bass", "Excellent", "22 pounds 5 ounces");\n\n?>\n')),Object(r.b)("h2",{id:"php-collections"},"PHP Collections"),Object(r.b)("p",null,"recipecollection.php"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),"<?\n\nclass RecipeCollection\n{\n    private $title;\n    private $recipes = array();\n\n    // has constructor here and setter and getters\n\n    public function addRecipe($recipe) {\n        $this->recipes[] = $recipe;\n    }\n\n    public function getRecipe() {\n        return $this->recipes;\n    }\n}\n\n?>\n")),Object(r.b)("h2",{id:"php-arrays"},"PHP Arrays"),Object(r.b)("p",null,"Create\n$myArray = array();"),Object(r.b)("p",null,'Push into\n$myArray[] = "­Som­eth­ing­";'),Object(r.b)("p",null,"Push to associ­ative\n$myArr­ay","[­'key']",' = "­Val­ue";'),Object(r.b)("p",null,"Create numeric\n$myArray = array(­'va­lue', 'value2');"),Object(r.b)("p",null,"Create associ­ative\n$a = array(­'ke­y'=­>'v­al');"),Object(r.b)("p",null,"Print from numeric\necho $myArr­ay","[0]",";"),Object(r.b)("p",null,"Print from associ­ative\necho $myArr­ay","[­'key']",";"),Object(r.b)("p",null,"Associ­ative arrays\nKeys are strings"),Object(r.b)("p",null,"Numeric arrays\nKeys are numbers: 0,1,2,3,4"),Object(r.b)("h2",{id:"php-array-functions"},"PHP Array Functions"),Object(r.b)("p",null,"array_diff (arr1, arr2 ...)\narray_filter (arr, function)\narray_flip (arr)\narray_intersect (arr1, arr2 ...)\narray_merge (arr1, arr2 ...)\narray_pop (arr)\narray_push (arr, var1, var2 ...)\narray_reverse (arr)\narray_keys(array $array [, mixed $search_value = null ","[, bool $strict = false ]","] )\narray_search (needle, arr)\narray_walk (arr, function)\ncount (count)\nin_array (needle, haystack)"),Object(r.b)("p",null,"// ARRAY EXAMPLES"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),'<?php\n    // add code below this comment\nclass Subdivision\n{\n  public $houses = array();\n\n  public function filterHouseColor($color)\n  {\n    $return = array();\n    foreach ($this->houses as $house) {\n      if ($house->roof_color == $color || $house->wall_color == $color) {\n        $return[] = $house;\n      }\n    }\n    return $return;\n  }\n}\n\n?>\n\n<? php\n\npublic function getCombinedIngredients()\n{\n    $ingredients = array();\n    foreach ($this->recipes as $recipe) {\n        foreach($recipe->getIngredients() as $ing) {\n            $item = $ing["item"];\n\n            if (strpos($item, ",")) {\n                $item = strstr($item, ",", true);\n            }\n\n            if (in_array($item."s", $ingredients)) {\n                $item.="s";\n            } else if (in_array(substr($item, 0, -1), $ingredients)) {\n                $item = substr($item, 0, -1);\n            }\n\n            $ingredients[$item] = array (\n                $ing["amount"],\n                $ing["measure"]\n            );\n        }\n    }\n\n    return $ingredients;\n}\n\n?>\n')),Object(r.b)("h2",{id:"php-control-flow-logic"},"PHP Control Flow Logic"),Object(r.b)("p",null,"if (condi­tion) {\n... }\nelseif (condi­tion) {\n... }\nelse {\n... }"),Object(r.b)("p",null,"FOR loop\nfor (initi­alize; condition; update) { ... }"),Object(r.b)("p",null,"WHILE loop\nwhile (condi­tion) { ... }"),Object(r.b)("p",null,"FOREACH loop\nforeach ($array as $value) { ... }"),Object(r.b)("p",null,"DO WHILE\ndo { ... ;} while (condi­tion)"),Object(r.b)("p",null,"SWITCH ($s) {\ncase 1:\n...\nbreak;\ncase 2:\n...\nbreak;\ndefault:\n...\n}"),Object(r.b)("h2",{id:"php-ifelseif-statements-within-a-web-document"},"PHP if/elseif statements within a web document"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),'<?php\n\n$bool = false;\n\n?>\n\n<?php if ($bool) : ?>\n\n    <div>\n        <p><?php echo "Bool is true"?></p>\n    </div>\n\n<?php elseif (!$bool) : ?>\n\n    <div>\n        <p><?php echo "Elseif works"?></p>\n    </div>\n\n<?php else : ?>\n\n    <div>\n        <p><?php echo "Bool is false"?></p>\n    </div>\n\n<?php endif; ?>\n')),Object(r.b)("h2",{id:"php-general-functions"},"PHP General Functions"),Object(r.b)("p",null,"isset()\ntest for variable exists\nempty()\ntest for empty variable\nmail($to, $subject, $msg, 'From: ' . $email)\nmail function\nmysqli­",Object(r.b)("em",{parentName:"p"},"fe­tch­_ar­ray­($r­esult)\nfetch each row of a query (in $result)\nheader()\nsend a header from the server\nis_num­eric()\ntest to see if a value is number\nexit()\ncauses script to stop immedi­ately\ntrim($­string)\ntrims leading and trailing spaces\nmysqli­_re­al"),"­esc­ape­_st­rin­g($­string)\nescapes special characters\nstr_re­pla­ce('a', 'b', $string)\nreplace a with b in a string\nexplode(', ' , $string)\nmake string into array\nimplode(', \" $string)\nmake array into string\nsubstr ($string, start, len)\ngrabs a substring\npreg_m­atc­h('­regex', $string)\nmatches regular expres­sions\npreg_r­epl­ace­('r­egex', $replace, $string)\nreplaces characters in a string by regex"),Object(r.b)("h2",{id:"php-regex-functions"},"PHP Regex Functions"),Object(r.b)("p",null,"ereg (pattern, str)\nsplit (pattern, str)\nereg_replace (pattern, replace, str)\npreg_grep (pattern, arr)\npreg_match (pattern, str)\npreg_match_all (pattern, str, arr)\npreg_replace (pattern, replace, str)\npreg_split (pattern, str)"),Object(r.b)("h2",{id:"php-string-functions"},"PHP String Functions"),Object(r.b)("p",null,"crypt (str, salt)\nexplode (sep, str)\nimplode (glue, arr)\nnl2br (str)\nsprintf (frmt, args)\nstrip_tags (str, allowed_tags)\nstr_replace (search, replace, str)\nstrpos (str, needle)\nstrrev (str)\nstrstr (str, needle)\nstrtolower (str)\nstrtoupper (str)\nsubstr (string, start, len)"),Object(r.b)("h2",{id:"php-file-system-functions"},"PHP File System Functions"),Object(r.b)("p",null,"clearstatcache ()\ncopy (source, dest)\nfclose (handle)\nfgets (handle, len)\nfile (file)\nfilemtime (file)\nfilesize (file)\nfile_exists (file)\nfopen (file, mode)\nfread (handle, len)\nfwrite (handle, str)\nreadfile (file)clearstatcache ()\ncopy (source, dest)\nfclose (handle)\nfgets (handle, len)\nfile (file)\nfilemtime (file)\nfilesize (file)\nfile_exists (file)\nfopen (file, mode)\nfread (handle, len)\nfwrite (handle, str)\nreadfile (file)"),Object(r.b)("h2",{id:"php-datetime-functions"},"PHP Date/Time Functions"),Object(r.b)("p",null,"checkdate (month, day, year)\ndate (format, timestamp)\ngetdate (timestamp)\nmktime (hr, min, sec, month, day, yr)\nstrftime (formatstring, timestamp)\nstrtotime (str)\ntime ()"),Object(r.b)("h2",{id:"php-date-formatting"},"PHP Date Formatting"),Object(r.b)("p",null,"Y\n4 digit year (2008)\ny\n2 digit year (08)\nF\nLong month (January)\nM\nShort month (Jan)\nm\nMonth ⁴ (01 to 12)\nn\nMonth (1 to 12)\nD\nShort day name (Mon)\nl\nLong day name (Monday) (lowercase L)\nd\nDay ⁴ (01 to 31)\nj\nDay (1 to 31)"),Object(r.b)("p",null,"h\n12 Hour ⁴ (01 to 12)\ng\n12 Hour (1 to 12)\nH\n24 Hour ⁴ (00 to 23)\nG\n24 Hour (0 to 23)\ni\nMinutes ⁴ (00 to 59)\ns\nSeconds ⁴ (00 to 59)"),Object(r.b)("p",null,"w\nDay of week ¹ (0 to 6)\nz\nDay of year (0 to 365)\nW\nWeek of year ² (1 to 53)\nt\nDays in month (28 to 31)"),Object(r.b)("p",null,"a\nam or pm\nA\nAM or PM\nB\nSwatch Internet Time (000 to 999)\nS\nOrdinal Suffix (st, nd, rd, th)"),Object(r.b)("p",null,"T\nTimezone of machine (GMT)\nZ\nTimezone offset (seconds)\nO\nGMT offset (hours) (+0200)\nI\nDaylight saving (1 or 0)\nL\nLeap year (1 or 0)"),Object(r.b)("p",null,"U\nSeconds since Epoch ³\nc\nISO 8601 (PHP 5) (2008-­07-­31T­18:­30:­13+­01:00)\nr\nRFC 2822 (Thu, 31 Jul 2008 18:30:13 +0100)"),Object(r.b)("h2",{id:"accessing-deep-arrays-to-find-values"},"Accessing deep arrays to find values"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-php"}),'$locations = Timber::get_terms(\'locations\');\n\n        $data = [];\n        $exclusion = [];\n\n        foreach($locations as $location) {\n            $data[] = [\n                "location" => $location,\n                "posts" => Locations::getPostsForLocation($location,$count,$exclusion)\n            ];\n\n            // add posts with current ids to array to check against\n            foreach ($data as $key => $value) {\n                if ($value["posts"]) {\n                    $posts = $value["posts"];\n                    foreach($posts as $key => $value) {\n                        if (in_array($value->id, $exclusion)) {\n                            unset($posts[$key]);\n                        } else {\n                            array_push($exclusion, $value->id);\n                        }\n                    }\n                }\n            }\n        }\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/PHP/php-cheat-sheet.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-php-php-cheat-sheet-md-4ebfe03d9a860ae3796e.js.map