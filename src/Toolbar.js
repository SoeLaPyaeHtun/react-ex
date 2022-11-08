import React from "react";
import './Toolbar.css';

const styles = {
    toolbar: {
        marginBottom: 20,
        border: '1px solid red',
    },
    dark:{
        background: 'purple',
        color: 'black',
    }
}


class Toolbar extends React.Component{

   

    render(){
        return (
            <div style={styles.toolbar, styles.dark}>
               {this.props.children}
            </div>
        )
    }
}
export default Toolbar;