import {useState} from 'react'
import Card from './Card.js'
function Cards(){
    const [items, setItems] = useState([
        {id:1, img:'/images/cacke.png', stat:""},
        {id:1, img:'/images/cacke.png', stat:""},
        {id:2, img:'/images/taco.png', stat:""},
        {id:2, img:'/images/taco.png', stat:""},
        {id:3, img:'/images/egg.jpg', stat:""},
        {id:3, img:'/images/egg.jpg', stat:""},
        {id:4, img:'/images/pizza.jpg', stat:""},
        {id:4, img:'/images/pizza.jpg', stat:""},
        {id:5, img:'/images/pancake.png', stat:""},
        {id:5, img:'/images/pancake.png', stat:""},
        {id:6, img:'/images/icecream.jpg', stat:""},
        {id:6, img:'/images/icecream.jpg', stat:""},
        {id:7, img:'/images/hotdog.png', stat:""},
        {id:7, img:'/images/hotdog.png', stat:""},
        {id:8, img:'/images/hamburger.jpg', stat:""},
        {id:8, img:'/images/hamburger.jpg', stat:""},

    ].sort(()=> Math.random() - 0.5))
    
    const [prev, setPrev] = useState(-1)

    function check(current){
        if (items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }
        else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 500)
        }
    }

    function handleClick(id){
        if(prev == -1){
            items[id].stat = " active "
            setItems([...items])
            setPrev(id)
        }
        else{
            check(id)
        }
    }
    

    return (
        <div className="container">
            {items.map((item, index) =>(
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ) )}
        </div>
    )
}
export default Cards;