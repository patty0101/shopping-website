import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/login-and-logout/login-and-logout.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component'
import { Switch, Route,Redirect } from 'react-router-dom'
import {connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Header from './components/header/header.component.jsx'
import { auth,createUserProfileDocument } from './firebase/firebase.utils.js'
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'


// belos React.Component without ()!!!
class App extends React.Component{
  // constructor() {
  //   super()
  //   this.state = {
  //     currentUser:null
  //   }
  // }

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    //  which is always called when the authentication state changes. 
    // auth.onAuthStateChanged is a event listener
    // Your onAuthStateChanged callback will be called with the current state when the page loads, and then with every stage change. 
    // we get back a function that lets us unsubscribe from the listener we just instantiated.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:user});
      // console.log(user)
      if(userAuth){
        console.log(userAuth)
        // if there is userAuth , to check to create data in firestore, and return queryReference
        // The queryReference object does not have the actual data of the collection or document. 
        // It instead has properties that tell us details about it, 
        // or the method to get the Snapshot object which gives us the data we are looking for.
        const userRef = await createUserProfileDocument(userAuth)
        console.log(userRef)
        //  use userRef.onSnapshotz() to get documentsnapshot
        userRef.onSnapshot(snapShot =>{
          // put data into state
          console.log("111")
          //  whenever our user snapshot updates we are seting the user reduce or value with our new object
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
          console.log(this.state)
        })
        
      }else {
        setCurrentUser(userAuth)
      }
      
    })
  }
  componentWillUnmount(){
    //  to a remove auth state change listener.
    //  to make sure we do not get any memory leak in our application related to listener still being open 
    // even if the component that cares about the listener is no longer on the page.
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route exact path='/signin' render={()=>
          // if has sign up or sign in the signin page will redirect to home page 
          this.props.currentUser? (
          <Redirect to='/' />
          ):(
            <SignInAndSignUpPage/>
            )}
            />
        </Switch>


      </div>
    );
  }

}
// here user is destructed from the root reducer
// const mapStateToProps= ({user}) => ({
//   currentUser: user.currentUser
// })

//  replace with selector
const mapStateToProps= createStructuredSelector ({
  currentUser: selectCurrentUser
})


// store.dispatch(action) -> reducer(state, action) -> store.getState()

const mapDispatchToProps = dispatch => ({
  //  goes to a function that gets the user object and then calls dispatch and what dispatches is 
  // dispatch is a way for redux to know that whatever you're passing me,whatever object you're passong me is going to be 
  // an action object that i'm going to pass to every producer .
  // so our user action is a function that gets the user but return an action object
  // setCurrentUser is a action and is a function. invoking setCurrentUser(user) with user that return a object and  payload equals to user, 
  //  store.dispatch接受一个 Action 对象作为参数，将它发送出去
//  key is setCurrentUser and value is a function !!!!
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
// current user outside of passing it into our header it only sets it but it doesn't do anything with the current
// user value in its component istself
//  the first argument is mapstatetoprops but our app does not need current user anymore because outside of passing it into our header it only sets it but it does not do anything with 
// the current user value in its component itself
// pass in null as the first argument because we do not need any state or props from our reducer
//  the second argument will be our mapdispacth props which is a  function that gets this dispatch property 
//  and similarly will return an object where the proper name will be whatever prop we want to pass
export default connect(mapStateToProps,mapDispatchToProps)(App);
