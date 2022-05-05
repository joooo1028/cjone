// main2.js
var devWidth;
var limitsize=768;

window.addEventListener('load',function(){
    devWidth = this.document.querySelector("body").offsetWidth;
    console.log(devWidth);

    window.addEventListener('resize',function(){
        devWidth = this.document.querySelector("body").offsetWidth;
        console.log(devWidth);
    });

    // 햄버거 버튼 클릭
    var mobBtn = document.querySelector('div.mobBtn');
    var mob = document.querySelector('div.mob');
    var mobBtnClose = document.querySelector('div.mobBtn_close');
    var body = document.querySelector('body');
    var bg = document.querySelector('div.bg')

    mobBtn.addEventListener('click',function(){
        mob.classList.add("on");
        mobBtnClose.classList.add("on");
        body.classList.add("on");
        bg.classList.add("on");
        this.style.display = "none";
    });
    mobBtnClose.addEventListener('click',function(){
        mob.classList.remove("on");
        mobBtnClose.classList.remove("on");
        body.classList.remove("on");
        bg.classList.remove("on");
        mobBtn.style.display = "block";
    });

    // 주메뉴
    var gnb = document.querySelector('.gnb');
    var gnbMenu = document.querySelectorAll('.gnb>ul>li');
    var srch = document.querySelector('form.srch');
    var srchOpen = document.querySelector('.srch_open');
    var topMenu = document.querySelectorAll('dl.topMenu > dd');
    var headerWrap = document.querySelector('.header_wrap');
    var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

    for(var i=0; i< gnbMenu.length;i++){
        gnbMenu[i].addEventListener('mouseover',function(){
            if(devWidth < limitsize) return false;
    
            if(srch.offsetWidth > 0 && srch.offsetHeight){
                srch.classList.remove("on");
                srchOpen.classList.remove("on");
            }
    
            if(topMenu[4].classList.contains("on")){
                topMenu[4].classList.remove("on");
            }
            
            headerWrap.classList.add("on");

            subMenu.forEach(function(item){
                item.classList.add("on");
            })
        });//mouseover
        gnb.addEventListener('mouseout',function(){
            if(devWidth < limitsize) return false;

            headerWrap.classList.remove("on");

            subMenu.forEach(function(item){
                item.classList.remove("on");
            })
        });//mouseout
    }//for

    // 로그인이미지
    var appear="";
    for(var i=0; i<57; i++){
        if(i<10){
            appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼"+i+"' />";
        }else{
            appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼"+i+"' />";
        }
        
    };

    document.querySelector("a.appear").innerHTML = appear;

    var loop="";
    for(var i=0; i<82; i++){
        if(i<10){
            loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼"+i+"' />";
        }else{
            loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼"+i+"' />";
        }
    }
    document.querySelector("a.loop").innerHTML = loop;

    // 로그인 애니메이션
    var appearImg = document.querySelectorAll(".appear > img");
    for(var k=0;k<57;k++){
        appearImg[k].style.animation = "ani 2.75s linear "+(k*0.05)+"s 1 normal";
    }

    var loopImg = document.querySelectorAll(".loop > img");
    for(var j=0;j<82;j++){
        loopImg[j].style.animation = "ani 4.1s linear "+(2.85+0.05*j)+"s infinite normal";
    }

    // 퀵메뉴 이미지
    var quick1="";
    for(var i=0; i<20; i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000"+i+".png' alt='카드등록"+i+"' />";
        }else{
            quick1 += "<img src='images/quick01/quick01_000"+i+".png' alt='카드등록"+i+"' />";
        }
        
    };
    document.querySelector(".quick1").innerHTML = quick1;

    var quick2="";
    for(var i=0; i<20; i++){
        if(i<10){
            quick2 += "<img src='images/quick02/quick02_0000"+i+".png' alt='포인트적립"+i+"' />";
        }else{
            quick2 += "<img src='images/quick02/quick02_000"+i+".png' alt='포인트적립"+i+"' />";
        }
        
    };

    document.querySelector(".quick2").innerHTML = quick2;

    var quick3="";
    for(var i=0; i<20; i++){
        if(i<10){
            quick3 += "<img src='images/quick03/quick03_0000"+i+".png' alt='보너스포인트"+i+"' />";
        }else{
            quick3 += "<img src='images/quick03/quick03_000"+i+".png' alt='보너스포인트"+i+"' />";
        }
        
    };
    document.querySelector(".quick3").innerHTML = quick3;

    var quick4="";
    for(var i=0; i<20; i++){
        if(i<10){
            quick4 += "<img src='images/quick04/quick04_0000"+i+".png' alt='쿠폰혜택"+i+"' />";
        }else{
            quick4 += "<img src='images/quick04/quick04_000"+i+".png' alt='쿠폰혜택"+i+"' />";
        }
        
    };
    document.querySelector(".quick4").innerHTML = quick4;

    // 마우스를 올렸을 때
    var content1li = document.querySelectorAll('.content1 > ul > li ');
    content1li.forEach(function(item){
        item.addEventListener('mouseover',function(){
            //마우스를 올렸을때
            for(var k=0;k<20;k++){
                var imgLi = this.children[0].children[0].children;
                imgLi[k].style.animation = "ani 1s linear "+(k*0.05)+"s 1 normal";
            }
        });
    });
    content1li.forEach(function(item){
        //마우스를 뗏을때
        item.addEventListener('mouseout',function(){
            for(var k=0; k<20; k++){
                var imgLi = this.children[0].children[0].children;
                imgLi[k].style.animation = "none";
            }
    });
    });

    // 검색열기
    srchOpen.addEventListener('click',function(){
        this.classList.toggle("on");
        srch.classList.toggle("on");

        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","검색입력서식 닫기");
        }else{
            this.children[0].setAttribute("title","검색입력서식 열기");
        }

    });

    //고객센터
    topMenu[4].addEventListener('click',function(){
        this.classList.toggle("on");
        console.log(this);
        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","고객센터 닫기");
        }else{
            this.children[0].setAttribute("title","고객센터 열기");
        }
    });

    // 모바일 고객센터
    var mobTopMenu = document.querySelectorAll("dl.mob_topMenu > dd");
    mobTopMenu[4].addEventListener('click',function(){
        this.classList.toggle("on");
        console.log(this);
        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","고객센터 닫기");
        }else{
            this.children[0].setAttribute("title","고객센터 열기");
        }
    });

    // 모바일주메뉴 
    var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li ");
    for(i=0; i < mobGnbLi.length; i++){
        mobGnbLi[i].addEventListener('click',function(){
            //siblings() 함수로 만들어서 해야함 
            mobGnbLi.forEach(function(item){
                item.classList.remove("on");
            })
            this.classList.toggle("on");
        });

        }

    // 배너
    var bnnNum=0;
    var lastNum=document.querySelectorAll(".banner_frame > section").length-1;
    var banner_w=document.querySelector('body > section').offsetWidth;
    // 리사이즈
    window.addEventListener('resize',function(){
        banner_w= document.querySelector('body > section').offsetWidth;
    });

    var bnnsection = document.querySelectorAll('.banner_frame > section');
    var prev = document.querySelector('.prev');        
    var next = document.querySelector('.next');
    var bnnFarme = document.querySelector('.banner_frame');
    var arrowA = document.querySelectorAll('.arrow a');
    var rollingA = document.querySelectorAll('.rolling a');
    var banner_rollA = document.querySelectorAll('.banner_roll a');

    // 다음
    next.addEventListener('click',function(){
        bnnNum++;
        if(bnnNum> lastNum) bnnNum=0;
        bnnFarme.style.left = bnnNum * -banner_w + "px";

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            });
            rollingA.forEach(function(item){
                item.classList.add('white');
            });
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            });
            rollingA.forEach(function(item){
                item.classList.remove('white');
            });
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        });
        banner_rollA[bnnNum].classList.add('on');

    });

    //이전 
    prev.addEventListener('click',function(){
        bnnNum--;
        if(bnnNum< 0) bnnNum=lastNum;
        bnnFarme.style.left = bnnNum * -banner_w + "px";

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            });
            rollingA.forEach(function(item){
                item.classList.add('white');
            });
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            });
            rollingA.forEach(function(item){
                item.classList.remove('white');
            });
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        });
        banner_rollA[bnnNum].classList.add('on');

    });
        // 오토배너
    function autoBanner(){
        bnnNum++;
        if(bnnNum> lastNum) bnnNum=0;
        bnnFarme.style.left = bnnNum*-banner_w + "px";

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            });
            rollingA.forEach(function(item){
                item.classList.add('white');
            });
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            });
            rollingA.forEach(function(item){
                item.classList.remove('white');
            });
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        });
        banner_rollA[bnnNum].classList.add('on');
    };

    //일정산 시간동안 계속 반복
    var autoBnn = setInterval(autoBanner,5000);

    // 재생멈춤
    var flag=true;
    var play = document.querySelector('a.play');
    play.addEventListener('click',function(){
        if(flag){
            //멈춰라
            clearInterval(autoBnn);
            this.classList.add('pause');
            flag = false;
        }else{
            //재생
            autoBnn = setInterval(autoBanner,5000);
            this.classList.remove('pause');
            flag = true;
        }
    });
    

    // 롤링클릭
    var banner_roll = document.querySelectorAll('.banner_roll li')
    banner_roll.forEach(function(item){
        item.addEventListener('click',rollAction);
    });
    function rollAction(item){
        curRoll = item.currentTarget; // 클릭이벤트가 전달된 엘리먼트
        parentRoll = curRoll.parentElement;//연결된 엘리먼트의 부모
        childRoll = parentRoll.children;//부모 엘리먼트의 자식 엘리먼트들
        bnnNum = Array.from(childRoll).indexOf(curRoll);//연결된 엘리먼트의 인덱스

        bnnFarme.style.left = bnnNum*-banner_w + "px";

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            });
            rollingA.forEach(function(item){
                item.classList.add('white');
            });
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            });
            rollingA.forEach(function(item){
                item.classList.remove('white');
            });
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        });
        banner_rollA[bnnNum].classList.add('on');

        //bnnNum = curIdx;

    }

    // content3
    // 마우스 올렸을때
    var all = document.querySelectorAll('.content3_inner > div > ul > li');
    all.forEach(function(item){
        item.addEventListener('mouseover',function(){
            this.classList.add('on');
        });
        item.addEventListener('mouseout',function(){
            this.classList.remove('on');
        });
        
    });

    //대분류 
    var group = document.querySelectorAll('.content3_inner > ul > li > a ');
    var all = document.querySelectorAll('.content3_inner > div > ul > li');
    var ent = document.querySelectorAll('.content3_inner > div > ul > li.ent');
    var shop = document.querySelectorAll('.content3_inner > div > ul > li.shop');
    var diner = document.querySelectorAll('.content3_inner > div > ul > li.diner');
    var box = document.querySelectorAll('.content3_inner > div > ul > li.box');

    for(var k=0; k<group.length;k++){
        group[k].addEventListener('click',function(event){
            event.preventDefault();

            group.forEach(function(idx){
                idx.classList.remove('on');
            });
            this.classList.add('on');

            var className = this.parentElement.getAttribute("class");
            //getAttribute class값을 가지고 올수있다. 

            all.forEach(function(item){
                item.style.display = "none";
            });

            switch(className){
                case "ent":
                    ent.forEach(function(item){
                        item.style.display = "block";
                    });
                break;
        
                case "shop":
                    shop.forEach(function(item){
                        item.style.display = "block";
                    });
                break;
        
                case "diner":
                    diner.forEach(function(item){
                        item.style.display = "block";
                    });
                break;
        
                case "box":
                    box.forEach(function(item){
                        item.style.display = "block";
                    });
                break;
        
                default:
                    all.forEach(function(item){
                        item.style.display = "block";
                    });
            }

        });//click
    }

    //패밀리 사이트 
    var family = document.querySelector('.family_site');
    family.addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('on');

        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","닫기");
        }else{
            this.children[0].setAttribute("title","열기");
        }
    });

    // 스크롤이벤트 
    var top = document.querySelector('.top');
    var dnLeftL = document.querySelector('.doughnut_Left_L');
    var dnLefts = document.querySelector('.doughnut_Left_L');
    var dnCenterM = document.querySelector('.doughnut_Center_M');
    var dnCenters = document.querySelector('.doughnut_Center_s');
    var dnRightM = document.querySelector('.doughnut_right_M');
    var dnRights = document.querySelector('.doughnut_right_s');
    var combineLeft = document.querySelector('.combine_Left');
    var combineright = document.querySelector('.combine_right');

    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('html').scrollTop;
        console.log(scroll);

        //top버튼
        if(scroll < 200){
            top.classList.remove('on','ab');
        }
        if(scroll >= 200 && scroll < 2000){
            top.classList.remove("ab");
            top.classList.add("on");
        }
        if(scroll >= 2000){
            top.classList.add("ab");
        }
        
        //도넛
        dnLeftL.style.top = 71+scroll*0.5 + "px";
        dnLefts.style.top = 796+scroll*1.1 + "px";
        combineLeft.style.top = 1726-scroll*0.1 + "px";

        dnCenterM.style.top = 772+scroll*0.1 + "px";
        dnCenters.style.top = 991+scroll*1.1 + "px";

        dnRightM.style.top = 365+scroll*0.5 + "px";
        dnRights.style.top = 947+scroll*0.1 + "px";
        combineright.style.top = -300+scroll*0.7 + "px";

    });
    });
    
    top.addEventListener('click',function(e){
        e.preventDefault();
        window.scroll({
            top:0,
            left:0,
            behavior : 'smooth'
        });

    //box.style.backgroundColor = "red"; -> background-color의 경우 - 다음의 글자를 대문자로해서 붙여써주면된다
    //box.style.cssTexs = "color : #000; background-color : red" css를 여러개 쓸경우 사용
    //element.textContent = "Text" 선택자의 특정한 글자를 저장하거나 가져올때 사용 

    
});