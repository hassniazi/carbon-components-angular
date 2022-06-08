import { storiesOf, moduleMetadata } from "@storybook/angular";

import { LayerModule } from "../layer/index";
import { ThemeModule } from ".";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Theme", module).addDecorator(
	moduleMetadata({
		imports: [ThemeModule, LayerModule, DocumentationModule]
	}))
	.add("Basic", () => ({
		template: `
			<div ibmTheme>
				<div class="theme-section">
					<p>White theme</p>
				</div>
			</div>
			<div ibmTheme="g10">
				<div class="theme-section">
					<p>G10 theme</p>
				</div>
			</div>
			<div ibmTheme="g90">
				<div class="theme-section">
					<p>G90 theme</p>
				</div>
			</div>
			<div ibmTheme="g100">
				<div class="theme-section">
					<p>G100 theme</p>
				</div>
			</div>
		`,
		styles: [
			`.theme-section {
				padding: 1rem;
				background: var(--cds-background);
				color: var(--cds-text-primary);
			}`
		]
	}))
	.add("With layer", () => ({
		template: `
			<div ibmTheme>
				<article class="theme-layer-example">
					<header class="theme-layer-header">White theme</header>
					<div class="theme-with-layer">Layer one</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer two</div>
						<div ibmLayer>
							<div class="theme-with-layer">Layer three</div>
						</div>
					</div>
				</article>
			</div>

			<div ibmTheme="g10">
				<article class="theme-layer-example">
					<header class="theme-layer-header">G10 theme</header>
					<div class="theme-with-layer">Layer one</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer two</div>
						<div ibmLayer>
							<div class="theme-with-layer">Layer three</div>
						</div>
					</div>
				</article>
			</div>

			<div ibmTheme="g90">
				<article class="theme-layer-example">
					<header class="theme-layer-header">G90 theme</header>
					<div class="theme-with-layer">Layer one</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer two</div>
						<div ibmLayer>
							<div class="theme-with-layer">Layer three</div>
						</div>
					</div>
				</article>
			</div>

			<div ibmTheme="g100">
				<article class="theme-layer-example">
					<header class="theme-layer-header">G100 theme</header>
					<div class="theme-with-layer">Layer one</div>
					<div ibmLayer>
						<div class="theme-with-layer">Layer two</div>
						<div ibmLayer>
							<div class="theme-with-layer">Layer three</div>
						</div>
					</div>
				</article>
			</div>
		`,
		styles: [
			`.theme-layer-example {
				padding: 1rem;
				background: var(--cds-background);
				color: var(--cds-text-primary);
			}

			.theme-layer-header {
				margin-bottom: 1rem;
			}

			.theme-with-layer {
				padding: 1rem;
				background: var(--cds-layer);
				color: var(--cds-text-primary);
			}`
		]
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_theme.theme.html"></ibm-documentation>
		`
	}));