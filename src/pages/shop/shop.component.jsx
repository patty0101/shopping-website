import React from 'react'
// 导入外部数据
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/preview-collection/preview-collection.component.jsx'


class ShopPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return (
            <div className ='shop-page'> 
                {
                    collections.map(({id,...otherCollectionProps}) =>(
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}
export default ShopPage