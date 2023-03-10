import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';

import {RichText, useBlockProps} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({clientId, setAttributes, attributes: {title, content}, isSelected}) {
	return (
        <div {...useBlockProps({className: "accordionItem"})} {...setAttributes({blockId: clientId})} >
            {(isSelected || title) && (
                <RichText
                    tagName="h4"
                    value={title}
                    allowedFormats={[]}
                    placeholder={__('Accordion item title', 'devit')}
                    onChange={(newTitle) => setAttributes({title: newTitle})}
                />
            )}
            {isSelected && (
                <RichText
                    tagName="p"
                    value={content}
                    placeholder={__('Accordion item content', 'devit')}
                    onChange={(newContent) =>
                        setAttributes({content: newContent})
                    }
                />
            )}
        </div>
    );
}
