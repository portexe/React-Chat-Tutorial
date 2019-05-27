import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatViewComponent extends React.Component {

  componentDidMount = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }
  componentDidUpdate = () => {
    const container = document.getElementById('chatview-container');
    if(container)
      container.scrollTo(0, container.scrollHeight);
  }

  render() {

    const { classes } = this.props;

    if(this.props.chat === undefined) {
      return(<main className={classes.content}></main>);
    } else if(this.props.chat !== undefined) {
      return(
        <div>
          <div className={classes.chatHeader}>
            Your conversation with {this.props.chat.users.filter(_usr => _usr !== this.props.user)[0]}
          </div>
          <main id='chatview-container' className={classes.content}>
            {
              this.props.chat.messages.map((_msg, _index) => {
                return(
                <div key={_index} className={_msg.sender === this.props.user ? classes.userSent : classes.friendSent}>
                  {_msg.message}
                </div>
                )
              })
            }
          </main>
        </div>
      );
    } else {
      return (<div className='chatview-container'>Loading...</div>);
    }
  }
}

export default withStyles(styles)(ChatViewComponent);