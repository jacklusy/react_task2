import React from "react";
import Message from './data';
import GroupExample from "./card_component";



class Main extends React.Component {
    render() {
         

          return  <div>
                {/* {Message.map((book)=>{
                  return  <GroupExample {...book} />
                })} */}

                <GroupExample book={this.props.Message} />

            </div>
        
    }
}

export default Main 
