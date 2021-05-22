import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HomeLand.scss';

function HomeLand() {
    return (
        <div className='home-container'>
            <h1>DESCRIERE WEBSITE</h1>
            <p>Cauti un mester de treaba si priceput?</p>
            <div className='home-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    SERVICII
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    MESTERI 
                </Button>
            </div>
        </div>
    )
}

export default HomeLand;
