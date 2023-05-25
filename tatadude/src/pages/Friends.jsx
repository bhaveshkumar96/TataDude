import "../styles/Friends.css";

const Friends = () => {
  return (

    <div>
      <p style={{textAlign:"start",marginLeft:"30px"}}>UI/UX > Refer & Earn > Friends Referred </p>
    <div id="container">
      <div id="div-1">
        <h1>Your Referral Code</h1>
        <div className="edch">EDCH54</div>
      </div>

      <div id="div-2">
        <h2 className="wallet-balance">Wallet Balance</h2>
        <h3>₹ 500</h3>
      </div>
    </div>
<div>
  <h2 className="friends-who">Friends who enrolled(3)</h2>
</div>

<div id="cards">
<div id="card-container">
<div id="name-date">
  <h4>Dhiraj Saxsena</h4>
  <p>14 Sep, 2022</p>
</div>
<div className="courses-en">Courses Enrolled(6)</div>
<div id="skills">
  <div>UI/UX</div>
  <div>Photoshop</div>
  <div>Illustrator</div>
  <div>Python</div>
  <div>MERN</div>
  <div>Java</div>
</div>
<div id="refferal-amount">Referral Amount<span style={{fontSize:"24px",paddingLeft:"10px"}}>₹185</span></div>
    </div>
    <div id="card-container">   
<div id="name-date">
  <h4>Subhash Mishra</h4>
  <p>15 Sep, 2022</p>
</div>
<div className="courses-en">Courses Enrolled(23)</div>
<div id="skills">
  <div>UI/UX</div>
  <div>Photoshop</div>
  <div>Illustrator</div>
  <div>Python</div>
  <div>MERN</div>
  <div>Java</div>
</div>
<div id="refferal-amount">Referral Amount<span style={{fontSize:"24px",paddingLeft:"10px"}}>₹485</span></div>
    </div>
    <div id="card-container">
<div id="name-date">
  <h4>Prafull Kumar</h4>
  <p>14 Sep, 2022</p>
</div>
<div className="courses-en">Courses Enrolled(6)</div>
<div id="skills">
  <div>UI/UX</div>
  <div>Photoshop</div>
  <div>Illustrator</div>
  <div>Python</div>
  <div>MERN</div>
  <div>Java</div>
</div>
<div id="refferal-amount">Referral Amount<span style={{fontSize:"24px",paddingLeft:"10px"}}>₹185</span></div>
    </div>

</div>

    <h6 style={{display:"flex",marginLeft:"130px",marginTop:"50px"}}>Terms & Conditions</h6>
    </div>
  );
};

export default Friends;
