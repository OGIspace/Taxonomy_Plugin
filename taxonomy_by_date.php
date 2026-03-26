<?php
/**
 * Plugin Name: Posts By Date
 * Description: Display posts
 */

if (!defined('ABSPATH')) exit;
class Posts_By_Date {
    public function __construct() {
        add_shortcode('taxonomy_by_date', [$this, 'render_shortcode']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
    }

    public function enqueue_assets() {
        if (is_admin()) {
            return;
        }

        $base = plugin_dir_url(__FILE__) . 'dist/';
        $dir  = plugin_dir_path(__FILE__) . 'dist/';

        $css_path = $dir . 'style.css';
        $js_path  = $dir . 'bundle.js';

        if (is_readable($css_path)) {
            wp_enqueue_style(
                'taxonomy-by-date',
                $base . 'style.css',
                [],
                (string) filemtime($css_path)
            );
        }

        if (is_readable($js_path)) {
            wp_enqueue_script(
                'taxonomy-by-date',
                $base . 'bundle.js',
                [],
                (string) filemtime($js_path),
                true
            );
        }
    }

    public function render_shortcode($atts) {

        $atts = shortcode_atts([
            'from' => '',
            'to'   => ''
        ], $atts);
    
        $from = sanitize_text_field($atts['from']);
        $to   = sanitize_text_field($atts['to']);
    
        $date_query = [];
    
        if (!empty($from)) {
            $date_query['after'] = $from;
        }
    
        if (!empty($to)) {
            $date_query['before'] = $to;
        }
    
        if (!empty($date_query)) {
            $date_query['inclusive'] = true;
        }
    
        $args = [
            'post_type'      => 'post',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
        ];
    
        if (!empty($date_query)) {
            $args['date_query'][] = $date_query;
        }
    
        $query = new WP_Query($args);

        ob_start();

        echo '<div class="posts-by-date">';

        if ($query->have_posts()) {

            echo '<div class="posts-grid">';
    
            while ($query->have_posts()) {
                $query->the_post();
                $title   = get_the_title();
                $date    = get_the_date('d.m.Y');
                $image   = get_the_post_thumbnail_url(get_the_ID(), 'medium');
                $excerpt = get_the_excerpt();
                $link    = get_permalink();
                $slug    = get_post_field('post_name', get_the_ID());
                ?>
                <div 
                    class="post-card"
                    data-title="<?php echo esc_attr($title); ?>"
                    data-thumbnail="<?php echo esc_url($image); ?>"
                    data-excerpt="<?php echo esc_attr($excerpt); ?>"
                    data-link="<?php echo esc_url($link); ?>"
                    data-date="<?php echo esc_attr($date); ?>"
                    data-slug="<?php echo esc_attr($slug); ?>"
                >
    
                    <?php if ($image): ?>
                        <img src="<?php echo esc_url($image); ?>" alt="">
                    <?php endif; ?>
    
                    <div class="content">
                        <span class="date"><?php echo esc_html($date); ?></span>
                        <h3><?php echo esc_html($title); ?></h3>
                    </div>
                </div>
                <?php
            }
            echo '</div>';
            ?>
            <div class="post-modal" data-post-modal hidden>
                <div class="post-modal__overlay" data-post-modal-close></div>
                <div class="post-modal__dialog" role="dialog" aria-modal="true" aria-label="Post details">
                    <button type="button" class="post-modal__close" data-post-modal-close aria-label="Close">x</button>
                    <img class="post-modal__thumbnail" data-post-modal-thumbnail src="" alt="">
                    <div class="post-modal__meta">
                        <p class="post-modal__date" data-post-modal-date></p>
                        <p class="post-modal__slug" data-post-modal-slug></p>
                    </div>
                    <h3 class="post-modal__title" data-post-modal-title></h3>
                    <p class="post-modal__excerpt" data-post-modal-excerpt></p>
                    <a class="post-modal__link" data-post-modal-link href="#" target="_blank" rel="noopener noreferrer">Read me more</a>
                </div>
            </div>
            <?php

        } else {
            echo '<p class="taxonomy-by-date-empty">No available posts</p>';
        }

        echo '</div>';

        wp_reset_postdata();

        return ob_get_clean();
    }
}

new Posts_By_Date();