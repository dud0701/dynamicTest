import React from 'react';

const PropertiesTemplate = ({head, body}) => {
    return (
        <main className = "properties-template">
            <section className = "head-wrapper">
                {head}
            </section>
            <section className = "body-wrapper">
                {body}
            </section>
        </main>
    );
};

export default PropertiesTemplate;