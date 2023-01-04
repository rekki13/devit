import {useSelect} from '@wordpress/data';
import {RichText, useBlockProps, InnerBlocks} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
    const {
        setAttributes,
        attributes: {title},
        clientId,
    } = props;


    return (
        <div {...useBlockProps()}>
            <RichText
                tagName="h3"
                placeholder="Accordion Title"
                value={title}
                allowedFormats={['core/bold']}
                onChange={(newText) => setAttributes({title: newText})}
            />
            <div className="accordionBody">
                <InnerBlocks
                    allowedBlocks={['devit/accordion-item']}
                    template={[['devit/accordion-item']]}

                />
            </div>
        </div>
    );
}
