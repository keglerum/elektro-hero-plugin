const { useBlockProps } = wp.blockEditor;

const HeroSave = ( { attributes } ) => {
    const { backgroundImage, title, description } = attributes;

    const blockProps = useBlockProps.save({
        style: {
            backgroundImage: `url(${backgroundImage})`,
        },
    });

    return (
        <div { ...blockProps } className="hero-block">
            <h1 className="hero-title">{ title }</h1>
            <p className="hero-description">{ description }</p>
        </div>
    );
};

export default HeroSave;