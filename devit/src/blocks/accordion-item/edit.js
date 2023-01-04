import { __ } from '@wordpress/i18n';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({
	setAttributes,
	attributes: { title, content },
	isSelected,
}) {
	return (
		<li {...useBlockProps()}>
			{(isSelected || title) && (
				<RichText
					tagName="h4"
					value={title}
					allowedFormats={[]}
					placeholder={__('Item title', 'devit')}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
				/>
			)}
			{isSelected && (
				<RichText
					tagName="p"
					value={content}
					placeholder={__('Item content', 'devit')}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
				/>
			)}
		</li>
	);
}
