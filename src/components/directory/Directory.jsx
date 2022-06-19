import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://threadcurve.com/wp-content/uploads/2020/06/man-woman-wearing-hat-dec14.jpg.webp',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://www.hellyhansen.com/media/wysiwyg/SS22_Crew_Collection_Mens_Secondary_1166x700.jpg',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://www.economy.pk/wp-content/uploads/2020/11/Fashion-Icon.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens',
                imageSize: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://media.istockphoto.com/photos/handsome-man-shopping-for-new-clothes-in-store-picture-id1189091313?k=20&m=1189091313&s=612x612&w=0&h=8zBj4HJMAaCLzmRKfoHvfMueqa7FFPA3zHttnoFnp9Y=',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens',
                imageSize: 'large'
            }]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, imageSize }) => (
                        <MenuItem title={title} imageUrl={imageUrl} key={id} size={imageSize} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;