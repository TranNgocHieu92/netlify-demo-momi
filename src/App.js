import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';

import data from './data';
import Menu from './Menu';
import Catergory from './Catergory';
import Slide from './Slide';
import banner from './banner';
import Hotsales from './Hotsales'
import Feedback from './Feedback';
import Header from './Header'
import Footer from './Footer'
function App() {
  /// danh sach san pham theo dieu cate
  const [memuItems, setMenuItems] = useState(data.product)
  console.log(data.product)
  // danh sach san pham ban chay hotsales
  const hosItems = data.product.sort(function(a,b){
    if(a.amount > b.amount) {
      return -1
    }
    if(a.amount < b.amount) {
      return 1
    }
    return 0
  })
  const [hotItem, setHotItems] = useState(hosItems)
  const [changeSlide, setChangeSlide] = useState(banner[0])

  const selectCategory = (cate)=>{
    if(cate === "all") {
      setMenuItems(data.product)
      return
    }
    const fillter = data.product.filter(item=> item.catergory === cate)
    setMenuItems(fillter)
  }
  // danh sach feefback
  const [feedBackBase, setFeedBack] = useState(data.feedback)
  // footer
  const [fooTer, setFooTer] = useState(data.footerInfo)
  return (
    <div className="App">
      <Header />
      <Slide changeSlide={changeSlide} />
      <Catergory selectCategory={selectCategory}/>
      <div className="product row">
        <Menu memuItems={memuItems}/>
        <Hotsales hotItem={hotItem} />
        <Feedback feedBackBase={feedBackBase} />
      </div>
      <Footer fooTer={fooTer} width="800" height="600" />
    </div>
  );
}

export default App;
