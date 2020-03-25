(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{"./manual/WordPress/WordPress-Cheat-Sheet.md":function(e,t,s){"use strict";s.r(t),s.d(t,"default",function(){return r});var n=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(s("./node_modules/react/index.js"),s("./node_modules/@mdx-js/react/dist/index.es.js")),i={},a="wrapper";function r(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)(a,Object.assign({},i,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"wordpress-help"},"WordPress Help"),Object(o.b)("p",null,"REFERNCES"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Red Bull Weekender Website")),Object(o.b)("h2",{id:"wordpress-theme-files"},"WordPress Theme Files"),Object(o.b)("p",null,"style.css \u2013 This is your theme\u2019s stylesheet file."),Object(o.b)("p",null,"index.php \u2013 This is the main body template for your theme. Its job is to bring together all the information in the other theme files using template tags."),Object(o.b)("p",null,"header.php \u2013 This file contains the header information that appears with the ",Object(o.b)("inlineCode",{parentName:"p"},"<head>")," section of your site, stuff like metadata and the link to your stylesheet."),Object(o.b)("p",null,"sidebar.php \u2013 Everything in you sidebar goes in this file, like widgets, categories, additional menus, search form, etc."),Object(o.b)("p",null,"footer.php \u2013 This file contains your footer information, such as copyright details, widgets, and social icons."),Object(o.b)("p",null,"single.php \u2013 This file displays just one post."),Object(o.b)("p",null,"page.php \u2013 When you create a page on your site, this is the template responsible."),Object(o.b)("p",null,"comments.php \u2013 This file is responsible for displaying comments."),Object(o.b)("p",null,"404.php \u2013 When visitors try to visit a page on your site that doesn\u2019t exist, this file will general an error page."),Object(o.b)("p",null,"functions.php \u2013 This file is where you can place special functions. We always recommend creating a child theme rather than edit this file directly."),Object(o.b)("p",null,"archive.php \u2013 Display an archive with this file so visitors to your site can go way back when and read your Hello World! post."),Object(o.b)("p",null,"search.php \u2013 Help your visitors search your site with this page.\nsearchform.php \u2013 Display a search form for your visitors with this template file."),Object(o.b)("h2",{id:"define-new-theme"},"Define new theme"),Object(o.b)("p",null,"This information goes at the top of your stylesheet.css file."),Object(o.b)("p",null,"/","*","\nTheme Name: Twenty Sixteen\nTheme URI: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://wordpress.org/themes/twentysixteen/"}),"https://wordpress.org/themes/twentysixteen/"),"\nAuthor: the WordPress team\nAuthor URI: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://wordpress.org/"}),"https://wordpress.org/"),"\nDescription: Twenty Sixteen is a modernized take on an ever-popular WordPress layout \u2014 the horizontal masthead with an optional right sidebar that works perfectly for blogs and websites. It has custom color options with beautiful default color schemes, a harmonious fluid grid using a mobile-first approach, and impeccable polish in every detail. Twenty Sixteen will make your WordPress look beautiful everywhere.\nVersion: 1.2\nLicense: GNU General Public License v2 or later\nLicense URI: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"http://www.gnu.org/licenses/gpl-2.0.html"}),"http://www.gnu.org/licenses/gpl-2.0.html"),"\nTags: black, blue, gray, red, white, yellow, dark, light, one-column, two-columns, right-sidebar, fixed-layout, responsive-layout, accessibility-ready, custom-background, custom-colors, custom-header, custom-menu, editor-style, featured-images, flexible-header, microformats, post-formats, rtl-language-support, sticky-post, threaded-comments, translation-ready\nText Domain: twentysixteen"),Object(o.b)("p",null,"This theme, like WordPress, is licensed under the GPL.\nUse it to make something cool, have fun, and share what you've learned with others.\n","*","/"),Object(o.b)("h2",{id:"template-include-tags"},"Template include tags"),Object(o.b)("p",null,"Template include tags are used within one template file (for example index.php) to include (or call) the HTML and PHP found in another template file (for example header.php). While PHP has its own built-in include() statement to do this, these WordPress-specific tags make life much easier:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-php"}),"<?php get_header(); ?> \u2013 Includes the header.php file\n<?php get_sidebar(); ?> \u2013 Includes the sidebar.php file\n<?php get_footer(); ?> \u2013 Includes the footer.php file\n<?php comments_template(); ?> \u2013 Includes your comments\n\n//\n//\n// WORDPRESS HEADER/BLOG INFO TAGS\n//\n//\n\nThese are functions you\u2019ll find in your theme\u2019s header.php file, though you\u2019ll also find them in other theme files:\n\n<?php bloginfo('name'); ?> \u2013 The title of your site, or blog name\n<?php bloginfo('url'); ?> \u2013 Your site\u2019s URL\n<?php bloginfo('stylesheet_url'); ?> \u2013 Link to your themes\u2019s stylesheet file\n<?php bloginfo('template_url'); ?> \u2013 Location of your site\u2019s theme file\n<?php bloginfo('description'); ?> \u2013 Displays the tagline of your blog as set in Settings > General.\n<?php bloginfo('atom_url'); ?> \u2013 Link to your site\u2019s atom URL\n<?php bloginfo('rss2_url'); ?> \u2013 RSS feed URL for your site\n<?php bloginfo('pingback_url'); ?> \u2013 Pingback URL for your site\n<?php bloginfo('version'); ?> \u2013 WordPress version number\n<?php bloginfo('html_type'); ?> \u2013 The HTML version your site is using\n<?php site_url(); ?> \u2013 The root URL for your site\n<?php get_stylesheet_directory(); ?> \u2013 Location of your stylesheet folder\n<?php wp_title(); ?> \u2013 Title of a specific page\n")),Object(o.b)("h2",{id:"other-template-tags"},"Other template tags"),Object(o.b)("p",null,"These tags can be used across all of your template files, such as index.php or page.php, making it easy to display specific information anywhere you want on your site:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-php"}),"<?php the_content(); ?> \u2013 Displays the content of a post\n<?php the_excerpt(); ?> \u2013 Displays the excerpt used in posts\n<?php the_title(); ?> \u2013 Title of the specific post\n<?php the_permalink() ?> \u2013 Link of a specific post\n<?php the_category(', ') ?> \u2013 Category of a specific post\n<?php the_author(); ?> \u2013 Author of a specific post\n<?php the_ID(); ?> \u2013 ID of a specific post\n<?php edit_post_link(); ?> \u2013 Edit link for a post\n<?php next_post_link(' %link ') ?> \u2013 URL of the next page\n<?php previous_post_link('%link') ?> \u2013 URL of the previous page\n<?php get_links_list(); ?> \u2013 Lists all links in blogroll\n<?php wp_list_pages(); ?> \u2013 Lists all pages\n<?php wp_get_archives() ?> \u2013 List archive for the site\n<?php wp_list_cats(); ?> \u2013 Lists all categories\n<?php get_calendar(); ?> \u2013 Displays the built-in calendar\n<?php wp_register(); ?> \u2013 Displays register link\n<?php wp_loginout(); ?> \u2013 Displays login/logout link only to registered users\n")),Object(o.b)("h2",{id:"other-loops"},"Other loops"),Object(o.b)("p",null,"The Loop is the default mechanism in WordPress for displaying all of your posts. Exactly how many posts are retrieved is determined by the number of posts you\u2019ve chosen to display in the \u201cReading\u201d settings in your WordPress dashboard."),Object(o.b)("p",null,"Within the Loop, WordPress loops through each post retrieved for the current page one at a time and formats it according to your theme\u2019s instructions."),Object(o.b)("p",null,"You can use the Loop to do a lot of useful stuff, like:"),Object(o.b)("p",null,"Display post titles and excerpts on your homepage;\nDisplay the content and comments on a single post;\nDisplay the content on an individual page using template tags; and\nDisplay data from custom post types and custom fields."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-php"}),"<?php\n    if ( have_posts() ) :\n        while ( have_posts() ) :\n            the_post();\n            //\n            // Post Content here\n            //\n        endwhile; // end while\n    endif; // end if\n?>\n")),Object(o.b)("p",null,"The Loop can display lots of different element for each post. Some of the most common template tags used in themes (according to the WordPress Theme Handbook) are:"),Object(o.b)("p",null,"next_post_link() \u2013 A link to the post published chronologically after the current post\nprevious_post_link() \u2013 A link to the post published chronologically before the current post\nthe_category() \u2013 The category or categories associated with the post or page being viewed\nthe_author() \u2013 The author of the post or page\nthe_content() \u2013 The main content for a post or page\nthe_excerpt() \u2013 The first 55 words of a post\u2019s main content followed by an ellipsis (\u2026) or read more link that goes to the full post. You may also use the \u201cExcerpt\u201d field of a post to customize the length of a particular excerpt.\nthe_ID() \u2013 The ID for the post or page\nthe_meta() \u2013 The custom fields associated with the post or page\nthe_shortlink() \u2013 A link to the page or post using the URL of the site and the ID of the post or page\nthe_tags() \u2013 The tag or tags associated with the post\nthe_title() \u2013 The title of the post or page\nthe_time() \u2013 The time or date for the post or page. This can be customized using standard php date function formatting."),Object(o.b)("p",null,"You can also use conditional tags, such as:"),Object(o.b)("p",null,"is_home() \u2013 Returns true if the current page is the homepage\nis_admin() \u2013 Returns true if an administrator is logged in and visiting the site\nis_single() \u2013 Returns true if the page is currently displaying a single post\nis_page() \u2013 Returns true if the page is currently displaying a single page\nis_page_template() \u2013 Can be used to determine if a page is using a specific template, for example: is_page_template('about-page.php')\nis_category() \u2013 Returns true if page or post has the specified category, for example is_category('news')\nis_tag() \u2013 Returns true if a page or post has the specified tag\nis_author() \u2013 Returns true if a specific author is logged in and visiting the site\nis_search() \u2013 Returns true if the current page is a search results page\nis_404() \u2013 Returns true if the current page does not exist\nhas_excerpt() \u2013 Returns true if the post or page has an excerpt"),Object(o.b)("h2",{id:"treehouse-theme-dev"},"TreeHouse Theme Dev"),Object(o.b)("p",null,"Themes are within the wp-content hierarchy."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can manually move a folder into there.")),Object(o.b)("p",null,"// template hierarchy"),Object(o.b)("p",null,"wphierarchy.com"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"left hand side shows the different types of pages"),Object(o.b)("li",{parentName:"ul"},"different types of pages towards the right that you can create"),Object(o.b)("li",{parentName:"ul"},"TH course designated for this")),Object(o.b)("p",null,"// setting up the folder"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"in the themes folder\ncreate themes > treehouse-portfolio")),Object(o.b)("p",null,"...then"),Object(o.b)("p",null,"themes > treehouse-portfolio > index.php\nthemes > treehouse-portfolio > style.css\nthemes > treehouse-portfolio > functions.php"),Object(o.b)("p",null,"Example setup: in style.css (from website)"),Object(o.b)("p",null,"/","*","\nTheme Name: Twenty Thirteen\nTheme URI: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"http://wordpress.org/themes/twentythirteen"}),"http://wordpress.org/themes/twentythirteen"),"\nAuthor: the WordPress team\nAuthor URI: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"http://wordpress.org/"}),"http://wordpress.org/"),"\nDescription: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, each displayed beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matching header images, beautiful typography and icons, and a flexible layout that looks great on any device, big or small.\nVersion: 1.0\nLicense: GNU General Public License v2 or later\nLicense URI: ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"http://www.gnu.org/licenses/gpl-2.0.html"}),"http://www.gnu.org/licenses/gpl-2.0.html"),"\nTags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-width, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready\nText Domain: twentythirteen"),Object(o.b)("p",null,"This theme, like WordPress, is licensed under the GPL.\nUse it to make something cool, have fun, and share what you've learned with others.\n","*","/"),Object(o.b)("p",null,"After this, it should show up!"),Object(o.b)("p",null,"To fix the blank thumbnail, you can use a screenshot.png file that is 880 x 660"),Object(o.b)("p",null,"// broken themes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'this will show up in the CMS under "appearance"'),Object(o.b)("li",{parentName:"ul"},"gives insight into issues for themes that don't appear")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/WordPress/WordPress-Cheat-Sheet.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-word-press-word-press-cheat-sheet.101a1afd2417ec7a4a77.js.map