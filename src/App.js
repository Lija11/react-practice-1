
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const languageName=['Javascript', 'Python', 'C++', 'Java']
const products=[{name:'Photoshop', price:'$128'},
              {name:'Illustrator', price:'$100'},
              {name:'PDF Reader', price:'$50'},
              {name:'Premium', price:'$80'}
]

// const pro=product.map(productss=>productss.price);
// console.log(pro);
// const lang=languageName.map(langName=>langName);
// console.log(lang)

function App() {
  const person={name:"Lija",age:21}
  return (
    <div className="App">
      <h1>REACT PRACTICE</h1>
      <Count></Count>
      <User></User>
      {/* <ul>
        {languageName.map(lang=><li>{lang}</li>)};
       {product.map(pro=><li>{pro.name}</li>)};
        <li>{languageName[0]}</li>
        <li>{languageName[1]}</li>
        <li>{languageName[2]}</li>
        <li>{languageName[3]}</li>
      </ul> */}
{
  products.map(product=><Product productItem={product}></Product>)
}
     {/* <Product productItem={products[0]}></Product>
     <Product productItem={products[1]}></Product> */}
    
     {/* <Person language={languageName[1]} name="css"></Person>
     <Person language={languageName[0]} name="Sass"></Person>
      */}

    </div>
  );
}

function Count(){
  const [count, setCount]=useState(5);
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function User(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
   

  return (
    <div>
        <h2>dynamic users {user.length}</h2>
      {
        
        user.map(userInfo=> <h4>{userInfo.email}</h4>)
      }
    </div>
  )
}

const design={
  color:'white',
backgroundColor:'black',
border:'3px solid red',
margin:'15px'
}

function Person(props){
  return( <div style={design}>
    <h1>{props.language} is the most popular language</h1>
    <h3>{props.name} Practice</h3>
  </div>)
}

function Product(props){
const productDesign={
  color:'red',
  backgroundColor:'yellow',
  border:'3px solid black',
  width:'200px',
  height:'300px',
  borderRadius:'10px',
  float:'center',
  margin:'10px',
}
const {name, price} = props.productItem;
return (
  <div style={productDesign}>
    <h2>{name}</h2>
    <p>{price}</p>
    <button>Buy Now</button>
  </div>
)
}

export default App;
