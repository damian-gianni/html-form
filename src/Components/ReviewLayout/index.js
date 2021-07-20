import React from 'react';

import ImageReview from '../ImageReview';
import TitleReview from '../TitleReview';
import ComponentReview from '../ComponentReview';
const ReviewLayout = ({ steps }) => (
    <div className='steps-group' style={{ width: `calc(100vw * ${steps.length})` }}>
        {steps.map(({ image, title, components }, index) => {
            const nStep = index + 1;
            return (
                <div id={`step-${nStep}`} className='step'>
                    {image && <ImageReview {...image}></ImageReview>}
                    {title && <TitleReview {...title}></TitleReview>}
                    {components && <ComponentReview {...components}></ComponentReview>}
                    <div className='actions'>
                        {index > 0 && <a className='back' href={`#step-${nStep - 1}`}>Volver</a>}
                        {steps[nStep] && <a className='next' href={`#step-${nStep + 1}`}>Continuar</a>}
                    </div>
                </div>
            )
        })}
    </div>
);
export default ReviewLayout