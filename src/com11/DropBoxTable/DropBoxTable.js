import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DropBoxTable.css';


class DropBoxTable extends Component {

    state={
        show:false
    }

    handleChange = (font) => () => {
        this.setState({ value: font, show: false });
      }
      
      handleToggle = () => {
        this.setState({ show: !this.state.show });
      }
      
      handleBlur = (e) => {
        if (this.state.show && !(this.input === e.target || this.list === e.target)) {
         /*  timer = setTimeout(() => {
            this.setState({ show: false });
          }, 200); */
        }
      }
      
  
      componentDidMount () {
        document.addEventListener('mousedown', this.handleBlur);
      }

      componentWillUnmount () {
        /* clearTimeout(timer); */
        document.removeEventListener('mousedown', this.handleBlur);
      }
      render () {
        const { data } = this.props;
        const {  handleBlur, handleToggle, handleChange } = this;
        const { show } = this.state;
        return(
            <div className="dropdown-container">
            <label className="arrow">
              <input
                type="button"
                /* value={value} */
                className="dropdown-btn"
                /* style={{ fontFamily: value }} */
                onClick={handleToggle}
                ref={input => {this.input = input;}}
              />
            </label>
            <ul className="dropdown-list" hidden={!show} ref={list => {this.list = list}}>
              {data.map((dd) => (
                <li
                  className="option"
                  /* onClick={handleChange(font)} */
                >
                  {dd.name}
                </li>
              ))}
            </ul>
          </div>
        )
      }
}



export default DropBoxTable;