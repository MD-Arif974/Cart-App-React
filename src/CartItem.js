import React from 'react';


class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:1999,
            title:'Phone',
            qty:2,
            img:''
        }
    }

    increaseQuantiy = () =>{
          console.log("this.state", this.state);
    }
    render(){
        const {price,title,qty} = this.state;
        return (
            <div className='cart-item'>
                <div style={styles.image} className='left-block'>

                </div>
                <div className='right-block'>
                    <div style={{fontSize:40}}>{title}</div>
                    <div style = {{fontSize:20,color:'grey'}}>Rs {price}</div>
                    <div style = {{fontSize:20,color:'grey'}}>Qty: {qty}</div>

                    <div className='cart-item-actions'>
                            <img  
                                alt = "decrease" 
                                className='action-icons' 
                                src = "https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                          
                            <img  
                                alt = "increase" 
                                className='action-icons' 
                                src = "https://cdn-icons-png.flaticon.com/512/992/992651.png"
                                onClick = {this.increaseQuantiy}
                                />
                               
                            <img  
                                alt = "delete" 
                                className='action-icons'
                                src = "https://cdn-icons-png.flaticon.com/512/484/484611.png"/>
                    </div>
                </div>
    
            </div>
        )
    }
    
}

const styles = {
    image:{
        height:110,
        width:110,
        backgroundColor:'#ccc',
        border:'4px solid rgb(0,255,255)'
    }
}

export default CartItem;