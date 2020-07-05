import React from 'react'
// 导入外部数据
// import SHOP_DATA from '../../redux/cart/shop/shop.data.js'
import CollectionPreview from '../preview-collection/preview-collection.component.jsx'
//  connect the component with redux
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors.js'
import './collections-overview.styles.scss'



const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)