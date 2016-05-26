  
    function change() {
        var selectObj = document.getElementById('class');
        var selectvalue = selectObj.value;
        /*var selecttext = selectObj.options[selectvalue-1].text;*/
        //alert("You have chose "+selectvalue+ selecttext);
        var bulid = selectvalue;
        return bulid;
    }
    
    function changeweek() {
        var selectObj = document.getElementById('classOne');
        var selectvalue = selectObj.value;
        var selecttext = selectObj.options[selectvalue-1].text;
        //alert("You have chose "+selectvalue+ selecttext);
        var res = selectvalue;
        return res;
    }
    
    function changeday() {
        var selectObj = document.getElementById('classTwo');
        var selectvalue = selectObj.value;
        var selecttext = selectObj.options[selectvalue-1].text;
        var resa = changeweek();
        //alert("You have chose "+ resa + selecttext);
        return resa;
    }
    
    
    /*判断年份是否为润年 */
    function isLeapYear(year) {
        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }
    /* 获取某一年份的某一月份的天数*/
    function getMonthDays(year, month) {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
    }26 
    /*获取某年的某天是第几周*/
    function getWeekNumber(y, m, d) {
        var now = new Date(y, m - 1, d),
            year = now.getFullYear(),
            month = now.getMonth(),
            days = now.getDate();
        //那一天是那一年中的第多少天
        for (var i = 0; i < month; i++) {
            days += getMonthDays(year, i);
        }

        //那一年第一天是星期几
        var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

        var week = null;
        if (yearFirstDay == 1) {
            week = Math.ceil(days / yearFirstDay);
        } else {
            days -= (7 - yearFirstDay + 1);
            week = Math.ceil(days / 7) + 1;
        }
        return (week-9);
    }

    $("#button").bind("click",subclickalert)
    
    $("#button").bind("click",function (){
        var Week = $("#classOne").val();
        var Day = $("#classTwo").val();
        var Bulid=change;
        $.ajax({
            type: "GET",
            url: "http://jeason.abowloflrf.com/ecq/main.php", //这里写的是 php 文件的 url
            data: {
                week : "1",
                day : "2",
                buliding : "3"
            },//要发送的数据（参数）
            dataType: "JSON",
            success: function (data){
                alert("U Success!");
                
            },
            error: function(){
                alert("Some error!");
            },
            complete: function(){
                window.open("http://jeason.abowloflrf.com/ecq/results.html");
            }
        });
    });
    
    function subclickalert() {          //点确定是弹窗测试
        var week = $("#classOne").val();
        var day = $("#classTwo").val();
        var bulid = change();
        alert("你选的时间是第" + week + "周的周" + day + "，你选择的楼是" + bulid + "BULIDING");
    }
    
    $(document).ready(              //页面加载时自动选择当天
        function ChangeTimeWhenReady() {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth();
        var days = myDate.getDate();
        var day = year+"-"+(month+1)+"-"+days;
        var weekday = myDate.getDay();
        var weekforyear = getWeekNumber(year, month+1, days);
        $("#classOne").val(weekforyear);
        $("#classTwo").val(weekday);
    });
    
    