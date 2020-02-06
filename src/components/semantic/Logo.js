import React from 'react';
import {Reveal, Image} from "semantic-ui-react";


const Logo = () => {
    return (
        <div>
            <Reveal animated='small fade'>
                <Reveal.Content visible>
                    <Image src={'https://betanews.com/wp-content/uploads/2017/04/IOT_Internet_of_Things_2017.jpg'}
                           size='medium' centered style={{width: 400}}/>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src='https://telko.id/wp-content/uploads/2015/09/IoT.png' size='medium' centered
                           style={{height: 210}}/>
                </Reveal.Content>
            </Reveal>
        </div>);
};


export default Logo;