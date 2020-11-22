import React from 'react';

import Card from '../components/card'

const products = () => {
    return (
        <div class="home">
            <h1>Search Page</h1>
            <Card title= "Dr. Xiao's choice" price="$3.50/lb" imageSource="https://www.uakron.edu/contentAsset/image/1c5c9d78-d829-4a80-ba2a-32f1f70b9944/fileAsset/byInode/1/filter/Resize/resize_w/140" description= "Parsley is widely used in Middle Eastern, Mediterranean, Brazilian, and American cuisine. Curly leaf parsley is used often as a garnish. Green parsley is used frequently as a garnish on potato dishes (boiled or mashed potatoes), on rice dishes (risotto or pilaf), on fish, fried chicken, lamb, goose, and steaks, as well in meat or vegetable stews (including shrimp creole, beef bourguignon, goulash, or chicken paprikash)" />
        </div>
    )
}

export default products