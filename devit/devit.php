<?php
/**
 * Plugin Name:       DevIT blocks
 * Version:           0.0.1
 * Text Domain:       devit-plugin-blocks
 *
 * @package           devit-blocks
 */

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
}
add_action( 'init', 'create_block_example_plugin_block_init' );

function render_accordion_block( $attributes, $inner_block_content, $block ) {

	$title = isset( $attributes['title'] ) ? $attributes['title'] : '';
	ob_start();
	?>
	<div>
		<h3><?php echo esc_html( $title );?></h3>
		<ul>
			<?php echo wp_kses_post($inner_block_content) ?>
		</ul>
	</div>
	<?php
	return ob_get_clean();
}

function render_accordion_item_block( $attributes, $content, $block ) {
	$title   = isset( $attributes['title'] ) ? $attributes['title'] : '';
	$content = isset( $attributes['content'] ) ? $attributes['content'] : '';
	ob_start();
	?>
		<li>
			<h4><?php echo esc_html( $title );?></h4>
			<p><?php echo wp_kses_post( $content );?></p>
		</li>
	<?php
	return ob_get_clean();
}
