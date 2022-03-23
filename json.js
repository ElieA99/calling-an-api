fetch('https://apipracticee.herokuapp.com/data')
.then(Response=>Response.json())
.then(json=>{
    var dta = document.getElementById('dta');
    var org = ` <div>
    <div class="icon"><i class="icn"></i></div>
    <h4 class="title"><a href="">ttl</a></h4>
    <p class="description">dscr</p>
  </div>`;

  for(var i=0;i<json.length;i++)
  {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('ttl',json[i].title);
      ccontent = ccontent.replace('icn',json[i].icon);
      ccontent = ccontent.replace('dscr',json[i].description);
      content.className='col-lg-4 col-md-6 icon-box'
      content.innerHTML=ccontent;
      dta.appendChild(content);
  }
})