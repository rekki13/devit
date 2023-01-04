
import { useSelect } from '@wordpress/data';
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
	const {
		setAttributes,
		attributes: { title },
		clientId,
	} = props;

	const innerBlockCount = useSelect(
		(select) => select('core/block-editor').getBlock(clientId).innerBlocks
	);

	const appenderToUse = () => {
		if (innerBlockCount.length < 10) {
			return <InnerBlocks.DefaultBlockAppender />;
		}
		return false;
	};
	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="h3"
				placeholder="Accordion Title"
				value={title}
				allowedFormats={['core/bold']}
				onChange={(newText) => setAttributes({ title: newText })}
			/>
			<ul className="inner-content">
				<InnerBlocks
					allowedBlocks={['devit/accordion-item']}
					template={[['devit/accordion-item']]}
					renderAppender={() => appenderToUse()}
				/>
			</ul>
		</div>
	);
}
