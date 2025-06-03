import PropTypes from 'prop-types'
import React from 'react'

const Button = ({buttonVitrakoContent, arkocontent}) => {
  return (
    <>
      <button>{buttonVitrakoContent}</button>
      <button>{arkocontent}</button>
    </>
  );
};
Button.defaultProps = {
    buttonVitrakoContent : "yodefaultpropsho",
    arkocontent : "ii"

}
// Button.propTypes = {
//     arkocontent : PropTypes.string
// }
export default Button
