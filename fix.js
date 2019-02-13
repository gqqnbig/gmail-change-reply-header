(()=>{
let element = document.querySelector(".editable .gmail_quote .gmail_attr");
let s=element.textContent;
let authorPattern=/^.+(?=于\d\d\d\d)/
let authorAndEmail= s.match(authorPattern)[0];
let datePattern=/于(\d{4})年(\d{1,2})月(\d{1,2})日(周.+?) (上午|下午)(\d{1,2}):(\d{1,2})写道/;
let m=s.match(datePattern);
let year=m[1];
let month=m[2];
let day=m[3];
let weekOfDay = m[4];
let morningOrAfternoon = m[5];
let hour=m[6];
let minute=m[7];

let d=new Date(year,month-1,day, hour, minute);
let dateString = d.toLocaleString('en-US', {weekday:"short",year: 'numeric', month: 'short', day: 'numeric' });
let timeString= d.toLocaleString('en-US', {hour:'numeric', minute:'numeric' })

let fullString = "On " + dateString + " at " + timeString +" "+ authorAndEmail + " wrote:";
element.textContent=fullString;
})()
