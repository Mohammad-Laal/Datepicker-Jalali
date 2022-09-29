let selected_date = document.querySelector(".selected-date")
let month = document.querySelector(".month")
let state_month = document.querySelector(".state-month")
let prev_month = document.querySelector(".prev-month")
let next_month = document.querySelector(".next-month")
let days_container = document.querySelector(".days-container")
let day_week = document.querySelector(".day-week")
selected_date.addEventListener("click" , e=>{
month.style = "display:flex ; justify-content:center;"
days_container.style = " display: grid; grid-template-columns: repeat(7 , 1fr);"
day_week.style="display : block ;"
})

let Month = ["دی" ,"بهمن", "اسفند" ,"فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور" ,"مهر", "آبان", "آذر"]
selected_date.textContent= "تقویم شمسی"
let date = new Date()
let day = date.getDay()
let year = date.getFullYear()
let month1 = date.getMonth()
state_month.textContent = year-621 + " " + Month[month1] + " "
specificDays()
prev_month.addEventListener("click" , e=> {
     month1--
  if (month1==2) {
    year--
  }
  if (month1 < 0) {
      month1=11
}
  state_month.textContent = year-621 + " " + Month[month1] + " "
  specificDays()
})

next_month.addEventListener("click" , e=> {
   month1++ 
   if(month1===3 ) {
     year++
   }
   if (month1 > 11) {
      month1=0

   }
   state_month.textContent = year-621 + " " + Month[month1] + " "
   specificDays()
})

  function specificDays() {
     days_container.innerHTML=""
     let total_days ;

     if ( month1 > 2 && month1 < 9  ) {

      total_days = 31
     }

     else if (year===2021 && month1===2 || year===2022 && month1===2 || year===2023 && month1===2 ) {
    
      total_days =29
     }

     else {

      total_days=30
     }
    
     for (let i = 0 ; i<total_days ; i++) {
    let day_element = document.createElement("div")
    day_element.classList.add("day")
    day_element.textContent = i + 1 ;
    day_element.style="cursor: pointer;"
    day_element.classList.add("show")
    day_element.addEventListener("click" , e=>{
    selected_date.textContent =  DateTransform(year, (month1+1) , (i+1))
    
    function DateTransform(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = (355666 - 9) + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * ~~(days / 12053));
    days %= 12053;
    jy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + (days % 31);
    } else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }

    if (month1===0 || month1===1 ||month1===2) {
      jy+=1
    }

   if(month1===0 && (i+1)== 30) {
    jm = 10
   }

   if(month1===1 && (i+1)== 29 || month1===1 && (i+1) == 30) {
    jm = 11
   }
   if(month1===2 && (i+1)== 30 ) {
    jm = 12
    jy--
   }
   if(month1===3 && (i+1)== 30||month1===3 && (i+1)== 31 ) {
    jm = 1
   }
   if(month1===4 && (i+1)== 31) {
    jm = 2
   }
   if(month1===5 && (i+1)== 31) {
    jm = 3
   }
    return [jy + '/' + jm  + '/' + (i+1)];
}
})     
      days_container.appendChild(day_element)
      if ( year===2021 && month1===3) {
        days_container.firstChild.style = "grid-column-start : 2 ;"
      }
      if ( year===2021 && month1===4) {
        days_container.firstChild.style = "grid-column-start : 5 ;"
      }
      if ( year===2021 && month1===6) {
        days_container.firstChild.style = "grid-column-start : 4 ;"
      }
      if ( year===2021 && month1===7) {
        days_container.firstChild.style = "grid-column-start : 7 ;"
      }
      if ( year===2021 && month1===8) {
        days_container.firstChild.style = "grid-column-start : 3 ;"
      }
      if ( year===2021 && month1===9) {
        days_container.firstChild.style = "grid-column-start : 6 ;"
      }
      if ( year===2021 && month1===11) {
        days_container.firstChild.style = "grid-column-start : 3 ;"
      }
      if ( year===2021 && month1===0) {
        days_container.firstChild.style = "grid-column-start : 5 ;"
      }
      if ( year===2021 && month1===1) {
        days_container.firstChild.style = "grid-column-start : 7 ;"
      }
      if ( year===2021 && month1===2) {
        days_container.firstChild.style = "grid-column-start : 2 ;"
      }
      if ( year===2022 && month1===3) {
        days_container.firstChild.style = "grid-column-start : 3 ;"
      }
      if ( year===2022 && month1===4) {
        days_container.firstChild.style = "grid-column-start : 6 ;"
      }
      if ( year===2022 && month1===5) {
        days_container.firstChild.style = "grid-column-start : 2 ;"
      }
      if ( year===2022 && month1===6) {
        days_container.firstChild.style = "grid-column-start : 5 ;"
      }
      if ( year===2022 && month1===8) {
        days_container.firstChild.style = "grid-column-start : 4 ;"
      }
      if ( year===2022 && month1===9) {
        days_container.firstChild.style = "grid-column-start : 7 ;"
      }
      if ( year===2022 && month1===10) {
        days_container.firstChild.style = "grid-column-start : 2 ;"
      }
      if ( year===2022 && month1===11) {
        days_container.firstChild.style = "grid-column-start : 4 ;"
      }
      if ( year===2022 && month1===0) {
        days_container.firstChild.style = "grid-column-start : 6 ;"
      }
      if ( year===2022 && month1===2) {
        days_container.firstChild.style = "grid-column-start : 3 ;"
      }
      if ( year===2023 && month1===3) {
        days_container.firstChild.style = "grid-column-start : 4 ;"
      }
      if ( year===2023 && month1===4) {
        days_container.firstChild.style = "grid-column-start : 7 ;"
      }
      if ( year===2023 && month1===5) {
        days_container.firstChild.style = "grid-column-start : 3 ;"
      }
      if ( year===2023 && month1===6) {
        days_container.firstChild.style = "grid-column-start : 6 ;"
      }
      if ( year===2023 && month1===7) {
        days_container.firstChild.style = "grid-column-start : 2 ;"
      }
      if ( year===2023 && month1===8) {
        days_container.firstChild.style = "grid-column-start : 5 ;"
      }
      if ( year===2023 && month1===10) {
        days_container.firstChild.style = "grid-column-start : 3 ;"
      }
      if ( year===2023 && month1===11) {
        days_container.firstChild.style = "grid-column-start : 5 ;"
      }
      if ( year===2023 && month1===0) {
        days_container.firstChild.style = "grid-column-start : 7 ;"
      }
      if ( year===2023 && month1===1) {
        days_container.firstChild.style = "grid-column-start : 2 ;"
      }
      if ( year===2023 && month1===2) {
        days_container.firstChild.style = "grid-column-start : 4 ;"
      }
      if ( year===2024 && month1===3) {
        days_container.firstChild.style = "grid-column-start : 5 ;"
      }
  }
}