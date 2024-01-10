import { Component } from 'react';
import NavHeader from './components/NavHeader'
import MenuPopUp from './components/MenuPopUp'
import MenuToggoleContext from './contexts/MenuToggoleContext'
import About from './components/About';
import './App.css'
import PopularCity from './components/PopularCity';
import Partners from './components/Partners';
// 1/7 part is done
class App extends Component{
  state={
    isMenuToggoled:false
  }

  onMenuToggoling=()=>{
    this.setState(prev=>({isMenuToggoled:!prev.isMenuToggoled}))
  }

  render(){
    const {isMenuToggoled}=this.state
    console.log("In App.js: ",{isMenuToggoled})
    return (
      <MenuToggoleContext.Provider value={{isMenuToggoled,onMenuToggling:this.onMenuToggoling}}>
        <div className="main-bg">
          {isMenuToggoled?<MenuPopUp/>:<>
          <NavHeader/>
          <About/>
          <PopularCity/>
          <Partners/>
          </>}
        </div>
      </MenuToggoleContext.Provider>
    );
  }
}

export default App
