( function( blocks, blockEditor, components, element, i18n ) {
    var el = element.createElement;
    var __ = i18n.__;
    var useBlockProps = blockEditor.useBlockProps;
    var RichText = blockEditor.RichText;
    var MediaUpload = blockEditor.MediaUpload;
    var MediaUploadCheck = blockEditor.MediaUploadCheck;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var Button = components.Button;

    blocks.registerBlockType( 'elektro/hero', {
        edit: function( props ) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;
            var backgroundImage = attributes.backgroundImage;
            var title = attributes.title;
            var description = attributes.description;

            var blockProps = useBlockProps( {
                className: 'wp-block-elektro-hero',
            } );

            return el(
                element.Fragment,
                null,
                el(
                    InspectorControls,
                    null,
                    el(
                        PanelBody,
                        {
                            title: __( 'Background image', 'elektro-hero-plugin' ),
                            initialOpen: true,
                        },
                        el( MediaUploadCheck, null, el( MediaUpload, {
                            onSelect: function( media ) {
                                setAttributes( { backgroundImage: media && media.url ? media.url : '' } );
                            },
                            allowedTypes: [ 'image' ],
                            value: backgroundImage,
                            render: function( mediaRenderProps ) {
                                return el(
                                    Button,
                                    {
                                        variant: 'secondary',
                                        onClick: mediaRenderProps.open,
                                        style: { marginRight: '8px' },
                                    },
                                    backgroundImage ? __( 'Replace image', 'elektro-hero-plugin' ) : __( 'Choose image', 'elektro-hero-plugin' )
                                );
                            },
                        } ) ),
                        backgroundImage
                            ? el(
                                Button,
                                {
                                    variant: 'tertiary',
                                    onClick: function() {
                                        setAttributes( { backgroundImage: '' } );
                                    },
                                },
                                __( 'Remove image', 'elektro-hero-plugin' )
                            )
                            : null
                    )
                ),
                el(
                    'div',
                    blockProps,
                    backgroundImage
                        ? el( 'img', {
                            className: 'wp-block-elektro-hero__background',
                            src: backgroundImage,
                            alt: '',
                        } )
                        : null,
                    el( 'span', {
                        className: 'wp-block-elektro-hero__overlay',
                        'aria-hidden': 'true',
                    } ),
                    el(
                        'div',
                        { className: 'wp-block-elektro-hero__content' },
                        el( RichText, {
                            tagName: 'h1',
                            className: 'wp-block-elektro-hero__title',
                            value: title,
                            allowedFormats: [],
                            placeholder: __( 'Write heading...', 'elektro-hero-plugin' ),
                            onChange: function( value ) {
                                setAttributes( { title: value } );
                            },
                        } ),
                        el( RichText, {
                            tagName: 'p',
                            className: 'wp-block-elektro-hero__description',
                            value: description,
                            allowedFormats: [ 'core/bold', 'core/italic' ],
                            placeholder: __( 'Write description...', 'elektro-hero-plugin' ),
                            onChange: function( value ) {
                                setAttributes( { description: value } );
                            },
                        } )
                    )
                )
            );
        },
        save: function( props ) {
            var attributes = props.attributes;
            var backgroundImage = attributes.backgroundImage;
            var title = attributes.title;
            var description = attributes.description;
            var blockProps = blockEditor.useBlockProps.save( {
                className: 'wp-block-elektro-hero',
            } );

            return el(
                'div',
                blockProps,
                backgroundImage
                    ? el( 'img', {
                        className: 'wp-block-elektro-hero__background',
                        src: backgroundImage,
                        alt: '',
                    } )
                    : null,
                el( 'span', {
                    className: 'wp-block-elektro-hero__overlay',
                    'aria-hidden': 'true',
                } ),
                el(
                    'div',
                    { className: 'wp-block-elektro-hero__content' },
                    el( RichText.Content, {
                        tagName: 'h1',
                        className: 'wp-block-elektro-hero__title',
                        value: title,
                    } ),
                    el( RichText.Content, {
                        tagName: 'p',
                        className: 'wp-block-elektro-hero__description',
                        value: description,
                    } )
                )
            );
        },
    } );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.components, window.wp.element, window.wp.i18n );