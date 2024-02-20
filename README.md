# testing-woocommerce

I started to build a Wordpress theme project with underscores, bootstrap and woocommerce in order to study it and test its features.
By following this tutorial https://www.youtube.com/watch?v=8uYSLxJbPEY&t=11046s

## The initial commit is: </br>
Project created with https://localwp.com/ installed </br>
Theme "testing_underscores" generated with https://underscores.me/ </br>
Plugin Woocommerce added from admin dashbord </br>

Directory created "testing_underscores/css" </br>
Bootstrap folder added to "testing_underscores/css" </br> 
main.scss file created </br>
VSCode Live Sass Compiler used to generate main.css and main.css.map </br>

### Lines added to functions.php 

```
wp_enqueue_style( 'testing_underscores-main', get_template_directory_uri() . '/css/main.css');
wp_enqueue_style( 'bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');

/**
 * Custom Fonts
 * font-family: 'Nunito', sans-serif;
*/

function enqueue_custom_fonts() {
	if(!is_admin()) {
		wp_register_style('source_sans_pro', 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,600&display=swap');
		wp_register_style('nunito', 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

		wp_enqueue_style('source_sans_pro');
		wp_enqueue_style('nunito');
	}
}

add_action('wp_enqueue_scripts', 'enqueue_custom_fonts');
```

### Finally

front-page.php created idetical to page.php in order to start customize it 
