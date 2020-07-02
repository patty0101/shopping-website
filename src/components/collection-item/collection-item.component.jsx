import React from 'react';
import './collection-item.styles.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item
    console.log(item)
    return(
        <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        >
        </div>
        <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
        </div>
        {/* below is ()=>addItem(item) should not be (item)=>addItem(item) !!! why?*/}
        <CustomButton inverted className='custom-button' onClick={()=>addItem(item)}>Add to cart</CustomButton>
    </div>
    )
    
    }
const mapDispatchToProps = dispatch => ({
    // dispatch(addItem(item)) is call action addItem
    // addItem as property that will go into our collectionitem as props ,which as the function (item)=>dispatch(addItem(item)) that we need to leverage
    // whenever we dispatch or call this function((item)=>dispatch(addItem(item))),this function will receive the item as the property pass it into our addItem()
    // action creator which gives us back that object where the type is equal to additem and payload is equal to the item . they got passed in and then we will dispatch that new object inot our 
    // store and it go through our redux flow .

    addItem: item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)