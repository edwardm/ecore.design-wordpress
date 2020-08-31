<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<main role="main"
	style="background-image: url('https://www.ecore.design/wp-content/uploads/2020/03/ecore-bg-hex-down-center.svg'); background-position: bottom center; background-repeat: no-repeat; background-size: cover; min-height: 650px;">
	<section>
		<div class="elementor-container elementor-column-gap-default">
			<div class="elementor-row">
				<div style="margin: 50px auto 0 auto;">

					<?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>

					<h1 class="entry-title"
						style="float: none; display: block; width: 100%; position: static; text-align: center;">
						<?php esc_html_e( 'Oops, nothing here', 'hello-elementor' ); ?></h1>

					<?php endif; ?>
					<div class="page-content">
						<p class="text-dark" style="text-align: center;">
							<strong><?php esc_html_e( 'Like nothing was found at this location', 'hello-elementor' ); ?></strong>
						</p>
					</div>

				</div>
			</div>
		</div>
	</section>

</main>