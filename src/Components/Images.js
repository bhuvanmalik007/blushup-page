import React from 'react';
import Sample from '../static/sampleImg.png';
import './images.scss';

export default () => <div className="images">
    <img src={Sample} alt="sample" />
    <div className="dots">{[1, 2, 3].map(x => <div className={x === 1 && 'first'}>&middot;</div>)}</div>
    <div className="heart"><i class="heart outline icon"></i></div>
</div>;