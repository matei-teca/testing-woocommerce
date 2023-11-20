<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'mKxNZ,o*#:R.~|hbGP%hq~n$Eae=]nN ury:$kRDI~.<|+.%O^zzD[FhZ.ouZ[cv' );
define( 'SECURE_AUTH_KEY',   ':J<BrfyFH6d7-W$5d7H!Z.vR@87B8RYf>U W/)ga4!J~oi&oJ[6,f#YTi}:(ll{6' );
define( 'LOGGED_IN_KEY',     '|dUcCCf#tyM<j m18bMI:|]-e+.47}#=|A5X;A~R1]oOJh<@gBz[<60EF;Lz{5 u' );
define( 'NONCE_KEY',         '/:ZPveS7[w!2/04U9o3lF?Yn1W_$P^C~b+IvYtXo^0r7,Kc(-i.R<>i~#_QR2=Z-' );
define( 'AUTH_SALT',         'Hx{LVm=+eiz{7sY#oP}d0_7wo9W0Gr=+?A?1*e*JuvWcD)Z%_fXCT;s7?(znK[Y:' );
define( 'SECURE_AUTH_SALT',  'V_J.-tY<FA%xDLZ!rdM XtP^BDIdt!`fK&UWOBu8|8z265Eu4c[ $@Oyud-t`lZ3' );
define( 'LOGGED_IN_SALT',    'Ana %$_1Twh/6=)A>R: }w;|<H.zV!]`j&cV$+;B#.OtP(~VC9s2:Q^ph|J(F6MJ' );
define( 'NONCE_SALT',        'SWNK|pbW?77i;^FutKS`@bqb;La<)F@uNxZ6rSlb4cXG<%*_W `AHY&q8Gn83/>>' );
define( 'WP_CACHE_KEY_SALT', 'v4fCx:J}%_Y?-JJAzX+FL{% 4 Ji(^iO}pDfuUn)_Z@(UzMOAKAr6N6s4vyh<GnE' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
