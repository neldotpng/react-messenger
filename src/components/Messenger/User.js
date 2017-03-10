import React, { Component } from 'react'

class User extends Component {
  render() {
    const show = this.props.show
    return (
      <div>
        {show &&
          <div
            className="Message-user"
          >
            <div className="Avatar">
              <img
                src={this.props.avatar}
                role="presentation"
              />
            </div>
            <div>
              {this.props.username} <span className="Message-date">{this.props.date.toTimeString().substr(0,8)}</span>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default User