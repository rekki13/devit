import {__} from '@wordpress/i18n';

import {useBlockProps} from '@wordpress/block-editor';

export default function save() {
    // const {attributes} = props;

    // const {blockId} = attributes;
    // console.log(blockId);
    return (
        <p {...useBlockProps.save()}>
            {__(
                'Example Plugin – hello from the saved content!',
                'devit-block'
            )}
        </p>
    );
}
