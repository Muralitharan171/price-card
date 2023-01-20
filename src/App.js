
import './App.css';

function App() {
  let data=[{
    type:"FREE",
    amount:"$0",
    user:"✔ Single User",
    storage:"✔ 5GB Storage",
    public:"✔ Unlimited Public Projects",
    community:"✔ Community Access",
    privates:"✖ Unlimited Private Projects",
    phones:"✖ Dedicated Phone Support",
    subdomains:"✖ Free Subdomain",
    statuss:"✖ Monthly Status Report"
  },
  {
    type:"PLUS",
    amount:"$9",
    users:"✔ 5 Users",
    storage:"✔ 50GB Storage",
    public:"✔ Unlimited Public Projects",
    community:"✔ Community Access",
    private:"✔ Unlimited Private Projects",
    phone:"✔ Dedicated Phone Support",
    subdomain:"✔ Free Subdomain",
    statuss:"✖ Monthly Status Report"
  
  },
  {
    type:"PRO",
    amount:"$49",
    users:"✔ Unlimited User",
    storage:"✔ 150GB Storage",
    public:"✔ Unlimited Public Projects",
    community:"✔ Community Access",
    private:"✔ Unlimited Private Projects",
    phone:"✔ Dedicated Phone Support",
    subdomain:"✔ Unlimited Free Subdomain",
    status:"✔ Monthly Status Report"
  }
]
  return (
    <div className="App">
     {data.map((item,idx)=>(
      <SampleCard
      key={idx}
      type={item.type}
      amount={item.amount}
      user={item.user}
      users={item.users}
      storage={item.storage}
      public={item.public}
      community={item.community}
      private={item.private}
      privates={item.privates}
      phone={item.phone}
      phones={item.phones}
      subdomain={item.subdomain}
      subdomains={item.subdomains}
      status={item.status}
      statuss={item.statuss}
      

      />
     ))}
    </div>
  );
}

export default App;

function SampleCard(props){
  return(
    <div className='pricing'>
      <div className='card'>
        <div className='card-body'>
        <div className='head'>{props.type}</div>
          <div className='head amount'>{props.amount}<span className='head month'>/month</span></div>
      <hr className='line'></hr>
     
      <ul>
      <li>{props.user}<b>{props.users}</b></li>
      <li>{props.storage}</li>
      <li>{props.public}</li>
      <li>{props.community}</li>
      <li>{props.private}<p Style="opacity: 0.4;">{props.privates}</p></li>
      <li>{props.phone}<p Style="opacity: 0.4;">{props.phones}</p></li>
      <li>{props.subdomain}<p Style="opacity: 0.4;">{props.subdomains}</p></li>
      <li>{props.status}<p Style="opacity: 0.4;">{props.statuss}</p></li>
      </ul>
     <div className='btn'>BUTTON</div>
     </div>
     </div>
    </div>
  )
}
