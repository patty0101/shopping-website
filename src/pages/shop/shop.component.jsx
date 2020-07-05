import React from 'react'
// 导入外部数据
// import SHOP_DATA from '../../redux/cart/shop/shop.data.js'
// import CollectionPreview from '../../components/preview-collection/preview-collection.component.jsx'
//  connect the component with redux
// import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect'
// import {selectCollections} from '../../redux/shop/shop.selectors.js'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'


// class ShopPage extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }

//     render(){
//         const {collections} = this.state
//         return (
//             <div className ='shop-page'> 
//                 {
//                     collections.map(({id,...otherCollectionProps}) =>(
//                         <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
//                     ))
//                 }
//             </div>
//         )
//     }
// }

//  
// const ShopPage = ({collections}) => (
//     <div className='shop-page'>
//         {
//             collections.map(({ id, ...otherCollectionProps }) => (
//                 <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
//             ))
//         }
//     </div>
// )
// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })
// export default connect(mapStateToProps)(ShopPage)

//  here we have access to the match object, because inside of our app.js are shop page is being nested in a root and root
// automatically passes those three object in to our component as props we get match, location,history
const ShopPage = ({match}) => (
    <div className='shop-page'>
        {/*  here we want to display the current path that we're on, because our shop page is also a rooted component
        attention: outside `${match.path}`, should have {}!! 
        math.path is /shop*/}
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        {/* /shop:collectionId allow us to access this category ID as a parameter on the match object when we're inside of our category */}
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route>


    </div>
)

export default ShopPage