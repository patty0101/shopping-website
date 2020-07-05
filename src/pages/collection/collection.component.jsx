import React from 'react';
import {selectCollection} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { connect } from 'react-redux'
// import {createStructuredSelector} from 'reslect'
import './collection.styles.scss'

//  we have access to match because matches root is what our collection page is being put into a row
const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item}></CollectionItem>)
                }
            </div>


        </div>
    )

}

// const createStateToProps = createStructuredSelector({
//     collection: selectCollection
// })
// the second argument is called ownprops which is the props of the component that we're wrapping
//  ownProps gives us all of the props that we're getting on our collection page component including our match
// selectCollection unlike other selectors, this selector needs a part of the state depending on the URL parameter!!
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)