import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/login-and-logout/login-and-logout.component.jsx'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import { auth,createUserProfileDocument } from './firebase/firebase.utils.js'


// belos React.Component without ()!!!
class App extends React.Component{
  constructor() {
    super()
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    //  which is always called when the authentication state changes. 
    // auth.onAuthStateChanged is a event listener
    // Your onAuthStateChanged callback will be called with the current state when the page loads, and then with every stage change. 
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
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
        
      }else {
        this.setState({currentUser:userAuth})
      }
      
    })
  }
  componentWillUnmount(){
    //  to a remove auth state change listener.
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>


      </div>
    );
  }

}

export default App;
