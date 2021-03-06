import React from "react";
import CustomButton from "../../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";


const CartDropdown = ({ cartItems, dispatch }) => {
    const history = useHistory();
    // console.log(cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        (
                            cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                        )
                        : (
                            <span className="empty-message">Your cart is empty</span>
                        )
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown));