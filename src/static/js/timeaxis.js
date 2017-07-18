// window.onload=function () {
//     var oDiv=document.getElementById('scrollbar');
//     var aA=oDiv.getElementsByTagName('a');
//     var oTimecontainer=document.getElementById('timecontainer');
//     var oTimeaxis=document.getElementById('timeaxis');

//     for (var i = 0; i < aA.length; i++) {
//         aA[i].index=i;
//         aA[i].onclick=function () {
//             for (var i = 0; i < aA.length; i++) {
//                 aA[i].className="scrollcolor2";
//             }
//             this.className='scrollcolor1';
//         };
//     }
// }
window.onload=function () {
    var oBtn1=document.getElementById('btn1');
    var oBtn2=document.getElementById('btn2');
    var oTimeaxis=document.getElementById('timeaxis');

    oBtn1.onclick=function () {
        oBtn1.className="scrollcolor1";
        oBtn2.className="scrollcolor2";
        // clearInterval(timer);
        // timer=setInterval(function () {
        //      var speed=(0-oTimeaxis.offsetLeft)/8;
        //         speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //     oTimeaxis.style.left=oTimeaxis.offsetLeft+2+'px';
        // },30);
    };
    oBtn2.onclick=function () {
        oBtn1.className="scrollcolor2";
        oBtn2.className="scrollcolor1";
    }
        // clearInterval(timer);
        // timer=setInterval(function () {
        //      var speed=(-1244-oTimeaxis.offsetLeft)/8;
        //         speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //     oTimeaxis.style.left=oTimeaxis.offsetLeft+speed+'px';
        // },30);

}

