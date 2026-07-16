<?php
/**
 * Registers the Hero block with WordPress.
 */

function elektro_hero_register_blocks() {
    // Register block type
    register_block_type( __DIR__ . '/../blocks/hero/block.json' );
}

// Hook to register blocks
add_action( 'init', 'elektro_hero_register_blocks' );
?>