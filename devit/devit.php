<?php
/**
 * Plugin Name:       DevIT blocks
 * Version:           0.0.1
 * Text Domain:       devit-plugin-blocks
 *
 * @package           devit-blocks
 */

@define( 'DEVIT_VER', '0.0.1' );

function create_block_example_plugin_block_init() {

	$blocks = array(
		'accordion',
		'accordion-item'
	);

	foreach ( $blocks as $block ) {
		$callback = str_replace( '-', '_', $block );
		register_block_type(
			plugin_dir_path( __FILE__ ) . 'src/blocks/' . $block . '/',
			array( 'render_callback' => "render_{$callback }_block" )
		);
	}

	wp_enqueue_style( 'add_google_fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
		false );

	wp_enqueue_script(
		'accordion-script',
		plugin_dir_url( __FILE__ ) . '/assets/devit-script.js',
		array(),
		DEVIT_VER,
		true
	);
}

add_action( 'init', 'create_block_example_plugin_block_init' );

function render_accordion_block( $attributes, $inner_block_content, $block ) {

	$title = isset( $attributes['title'] ) ? $attributes['title'] : '';
	ob_start();
	?>
    <div class="accordion-wrapper">
        <h3><?php echo esc_html( $title ); ?></h3>
        <div class="accordionBody">
			<?php echo wp_kses_post( $inner_block_content ) ?>
        </div>

    </div>
	<?php
	return ob_get_clean();
}

function render_accordion_item_block( $attributes, $content, $block ) {
	$title   = isset( $attributes['title'] ) ? $attributes['title'] : '';
	$content = isset( $attributes['content'] ) ? $attributes['content'] : '';
	$icon    = plugin_dir_url( __FILE__ ) . 'assets/icons/cross.svg';
	ob_start();
	?>
    <div class="accordionItem">
        <h4 class="accordionItem__counter"></h4>
        <div class="accordionItem__content">

            <h4 class="accordionItem__content-title"><?php echo esc_html( $title ); ?></h4>
            <div class="accordionItem__content-text">
                <p><?php echo wp_kses_post( $content ); ?></p>
            </div>
        </div>
        <div class="accordionItem__cross"></div>

    </div>

	<?php
	return ob_get_clean();
}
