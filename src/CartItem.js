import React from 'react';


class CartItem extends React.Component{
    render(){
        return (
            <div className='cart-item'>
                <div style={styles.image} className='left-block'>

                </div>
                <div className='right-block'>
                    <div style={{fontSize:40}}>Phone</div>
                    <div style = {{fontSize:20,color:'grey'}}>Rs 999</div>
                    <div style = {{fontSize:20,color:'grey'}}>Qty: 1</div>
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