<?php
/**
 * Plugin Name: Elektro Hero Plugin
 * Description: A Gutenberg block plugin for creating a customizable hero component with inline text editing and background image support.
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL2
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define plugin directory.
define( 'ELEKTRO_HERO_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

// Include block registration.
require_once ELEKTRO_HERO_PLUGIN_DIR . 'includes/register-blocks.php';

// Load translation files.
function elektro_hero_plugin_load_textdomain() {
    load_plugin_textdomain( 'elektro-hero-plugin', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'elektro_hero_plugin_load_textdomain' );
?>