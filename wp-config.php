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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\wp-tmdt\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'wp-tmdt' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         '3hGyx&n*z ~GgE.hm/F?4$)4Z#EFRj[aQT6UIa d]dalCp^Ek,_Akdq6oEoqEJ-<' );
define( 'SECURE_AUTH_KEY',  'tW#VmXMqy2dG0LI7V6Im@&zJ%*A5>#>I!]!jjW/s{V*NJ=:$cs8.8=&S0{iG58k9' );
define( 'LOGGED_IN_KEY',    'Ad},5P>szvJAV:;pV-2/|O&+d>aA8E`:lsKU`0 |%}>:$@(j!QG;bL5:A`x!]B6:' );
define( 'NONCE_KEY',        'sifDLgmO,N1iBqUg3l30QYwa-zBV  gTDDxP;z1U~Krw=D+Dr?3<:[;0O4Z7w>x>' );
define( 'AUTH_SALT',        '$;PD{=e3U#v$Wx+R;H(7E>e)m+F4?{cM=O<WH$/$vp3zqY?f*PCIR7FiIm.yNS6p' );
define( 'SECURE_AUTH_SALT', 'mmsSLoD,6s(?_>=k97Khc#,(>84K?scykITW|TH|d3GeaQ<>uhad@)UA-d8U-2ph' );
define( 'LOGGED_IN_SALT',   '/WS@+JnogkyJQ>M*hf:=oJ^iWc$QoIsVmDwAa*:zc5u70G5>>$e86HH4PWltrmV`' );
define( 'NONCE_SALT',       '[N5As]=53~^ZHKXz^AU{3&QT&h^SjGY!DA~b%=S0:diu4JZ?&#*J=)rc;:=OouhM' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
