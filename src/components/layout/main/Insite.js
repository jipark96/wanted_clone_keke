function Insite (props) {
    return (
      <>
      <li className="mainInsite_li2">
            <img
              src={props.insite.img}
              className="mainInsite_li"
              alt=""
            />
            <div className="mainInsite_li_div">
              <div className="mainInsite_li_div1">{props.insite.title}</div>
              <div className="mainInsite_li_div2">{props.insite.content}</div>
              <div>
                <img
                  src={props.insite.img2}
                  className="mainInsite_li_div3"
                  alt=""
                ></img>
                <span className="mainInsite_li_span">{props.insite.name}</span>
              </div>
            </div>
          </li>
          </>
    )
  }
  export default Insite;