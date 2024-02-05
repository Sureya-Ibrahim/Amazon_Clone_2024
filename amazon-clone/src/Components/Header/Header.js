import React from "react";
import classes from "./header.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

            <div className={classes.delivery}>
              <span>
                <IoLocationOutline/>
              </span>
              <div>
                <p>Deliver to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* other section */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/1024px-US_flag_51_stars.svg.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Hello,sign in</p>
              <span>Account & Lists</span>
            </a>

            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
};

export default Header;
