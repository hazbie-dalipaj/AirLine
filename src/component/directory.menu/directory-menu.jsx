import React from 'react';
import MenuItem from '../menu.item/menu.item';
import './directory-menu.css';

class DirectoryMenu extends React.Component{
    constructor(){
        super();
        this.state={
            choises:[
                {
                    title: 'Canada',
                    imageUrl: 'https://static.grainger.com/rp/s/is/image/Grainger/5JFV2_AL01?$zmmain$',
                    id: 1
                  },
                  {
                    title: 'China',
                    imageUrl: 'https://www.interflag.gr/1786-thickbox_default/china-flag.jpg',
                    id: 2
                  },
                  {
                    title: 'England',
                    imageUrl: 'https://cdn3.vectorstock.com/i/1000x1000/98/97/england-flag-isolated-icon-design-vector-9619897.jpg',
                    id: 3
                  },
                  {
                    title: 'Germany',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/21VUax%2BPBhL.jpg',
                    id: 4
                  },
                  {
                    title: 'Italy',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41Jx9i-EiNL._SX425_.jpg',
                    id: 5
                  },
                  {
                    title: 'Portugal',
                    imageUrl: 'http://cliparts101.com/files/398/2B030070E0C85066EEDD006A43D5A2E7/Portugal_1.png',
                    id: 6
                  }
            ]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {this.state.choises.map(({title, imageUrl, id}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu;