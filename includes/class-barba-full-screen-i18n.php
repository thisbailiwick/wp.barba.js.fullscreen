<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       roundhex.com
 * @since      1.0.0
 *
 * @package    Barba_Full_Screen
 * @subpackage Barba_Full_Screen/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Barba_Full_Screen
 * @subpackage Barba_Full_Screen/includes
 * @author     Kevin Clark <kevin@roundhex.com>
 */
class Barba_Full_Screen_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'barba-full-screen',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
