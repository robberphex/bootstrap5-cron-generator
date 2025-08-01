﻿(function ($) {
  var inputElement;
  var displayElement;
  $.fn.extend({
    cronGen: function (options) {
      if (options == null) {
        options = {};
      }
      options = $.extend({}, $.fn.cronGen.defaultOptions, options);
      //create top menu
      var cronContainer = $("<div/>", { id: "CronContainer", style: "display:none;width:300px;height:300px;" });
      var mainDiv = $("<div/>", { id: "CronGenMainDiv" });
      var topMenu = $("<ul/>", { "class": "nav nav-tabs", id: "CronGenTabs" });
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="SecondlyTab" class="nav-link active" href="#Secondly">秒</a>')).appendTo(topMenu);
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="MinutesTab" class="nav-link" href="#Minutes">分钟</a>')).appendTo(topMenu);
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="HourlyTab" class="nav-link" href="#Hourly">小时</a>')).appendTo(topMenu);
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="DailyTab" class="nav-link" href="#Daily">日</a>')).appendTo(topMenu);
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="MonthlyTab" class="nav-link" href="#Monthly">月</a>')).appendTo(topMenu);
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="WeeklyTab" class="nav-link" href="#Weekly">周</a>')).appendTo(topMenu);
      $('<li/>', { 'class': 'nav-item' }).html($('<a id="YearlyTab" class="nav-link" href="#Yearly">年</a>')).appendTo(topMenu);
      $(topMenu).appendTo(mainDiv);

      //create what's inside the tabs
      var container = $("<div/>", { "class": "container-fluid", "style": "margin-top: 20px;margin-left: -14px;" });
      var row = $("<div/>", { "class": "row-fluid" });
      var span12 = $("<div/>", { "class": "span12" });
      var tabContent = $("<div/>", { "class": "tab-content", "style": "border:0px; margin-top:-10px;" });


      //creating the secondsTab
      var secondsTab = $("<div/>", { "class": "tab-pane active", id: "Secondly" });
      var seconds1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "second" }).appendTo(seconds1);
      $(seconds1).append("每秒 允许的通配符[, - * /]");
      $(seconds1).appendTo(secondsTab);

      var seconds2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "second" }).appendTo(seconds2);
      $(seconds2).append("周期 从");
      $("<input/>", { type: "text", id: "secondStart_0", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(seconds2);
      $(seconds2).append("-");
      $("<input/>", { type: "text", id: "secondEnd_0", value: "2", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(seconds2);
      $(seconds2).append("秒");
      $(seconds2).appendTo(secondsTab);

      var seconds3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "second" }).appendTo(seconds3);
      $(seconds3).append("从");
      $("<input/>", { type: "text", id: "secondStart_1", value: "0", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(seconds3);
      $(seconds3).append("秒开始,每");
      $("<input/>", { type: "text", id: "secondEnd_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(seconds3);
      $(seconds3).append("秒执行一次");
      $(seconds3).appendTo(secondsTab);

      var seconds4 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "4", name: "second", id: "sencond_appoint" }).appendTo(seconds4);
      $(seconds4).append("指定");
      $(seconds4).appendTo(secondsTab);

      let seconds4_1 = $("<div/>", { "class": "line row text-nowrap" });
      let seconds4_1_1 = $("<span/>");
      for (let i = 0; i < 60; i++) {
        if (i !== 0 && i % 10 === 0) {
          $(seconds4_1_1).append("<br/>");
        }
        let paddedNumber = i.toString().padStart(2, '0');
        $(seconds4_1_1).append(
          `<span>
                          <span class="imp secondList">
                            <input type="checkbox" disabled="disabled" style="margin-left: 5px" value="${i}">
                            <span class="font-monospace">${paddedNumber}</span>
                          </span>
                        </span>`
        );
      }
      $(seconds4_1).append(seconds4_1_1);
      $(secondsTab).append(seconds4_1);
      $("<input/>", { type: "hidden", id: "secondHidden" }).appendTo(secondsTab);
      $(secondsTab).appendTo(tabContent);

      //creating the minutesTab
      var minutesTab = $("<div/>", { "class": "tab-pane", id: "Minutes" });

      var minutes1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "min" }).appendTo(minutes1);
      $(minutes1).append("每分钟 允许的通配符[, - * /]");
      $(minutes1).appendTo(minutesTab);

      var minutes2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "min" }).appendTo(minutes2);
      $(minutes2).append("周期 从");
      $("<input/>", { type: "text", id: "minStart_0", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(minutes2);
      $(minutes2).append("-");
      $("<input/>", { type: "text", id: "minEnd_0", value: "2", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(minutes2);
      $(minutes2).append("分钟");
      $(minutes2).appendTo(minutesTab);

      var minutes3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "min" }).appendTo(minutes3);
      $(minutes3).append("从");
      $("<input/>", { type: "text", id: "minStart_1", value: "0", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(minutes3);
      $(minutes3).append("分钟开始,每");
      $("<input/>", { type: "text", id: "minEnd_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(minutes3);
      $(minutes3).append("分钟执行一次");
      $(minutes3).appendTo(minutesTab);

      var minutes4 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "4", name: "min", id: "min_appoint" }).appendTo(minutes4);
      $(minutes4).append("指定");
      $(minutes4).appendTo(minutesTab);

      let minutes4_1 = $("<div/>", { "class": "line row text-nowrap" });
      let minutes4_1_1 = $("<span/>");
      for (let i = 0; i < 60; i++) {
        if (i !== 0 && i % 10 === 0) {
          $(minutes4_1_1).append("<br/>");
        }
        let paddedNumber = i.toString().padStart(2, '0');
        $(minutes4_1_1).append(
          `<span>
                          <span class="imp minList">
                            <input type="checkbox" disabled="disabled" style="margin-left: 5px" value="${i}">
                            <span class="font-monospace">${paddedNumber}</span>
                          </span>
                        </span>`
        );
      }
      $(minutes4_1).append(minutes4_1_1);
      $(minutesTab).append(minutes4_1);
      $("<input/>", { type: "hidden", id: "minHidden" }).appendTo(minutesTab);
      $(minutesTab).appendTo(tabContent);

      //creating the hourlyTab
      var hourlyTab = $("<div/>", { "class": "tab-pane", id: "Hourly" });

      var hourly1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "hour" }).appendTo(hourly1);
      $(hourly1).append("每小时 允许的通配符[, - * /]");
      $(hourly1).appendTo(hourlyTab);

      var hourly2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "hour" }).appendTo(hourly2);
      $(hourly2).append("周期 从");
      $("<input/>", { type: "text", id: "hourStart_0", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(hourly2);
      $(hourly2).append("-");
      $("<input/>", { type: "text", id: "hourEnd_0", value: "2", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(hourly2);
      $(hourly2).append("小时");
      $(hourly2).appendTo(hourlyTab);

      var hourly3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "hour" }).appendTo(hourly3);
      $(hourly3).append("从");
      $("<input/>", { type: "text", id: "hourStart_1", value: "0", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(hourly3);
      $(hourly3).append("小时开始,每");
      $("<input/>", { type: "text", id: "hourEnd_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(hourly3);
      $(hourly3).append("小时执行一次");
      $(hourly3).appendTo(hourlyTab);

      var hourly4 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "4", name: "hour", id: "hour_appoint" }).appendTo(hourly4);
      $(hourly4).append("指定");
      $(hourly4).appendTo(hourlyTab);

      let hourly4_1 = $("<div/>", { "class": "line row text-nowrap" });
      let hourly4_1_1 = $("<span/>");
      for (let i = 0; i < 24; i++) {
        if (i !== 0 && i % 6 === 0) {
          $(hourly4_1_1).append("<br/>");
        }
        let paddedNumber = i.toString().padStart(2, '0');
        $(hourly4_1_1).append(
          `<span>
                          <span class="imp hourList">
                            <input type="checkbox" disabled="disabled" style="margin-left: 5px" value="${i}">
                            <span class="font-monospace">${paddedNumber}</span>
                          </span>
                        </span>`
        );
      }
      $(hourly4_1).append(hourly4_1_1);
      $(hourlyTab).append(hourly4_1);
      $("<input/>", { type: "hidden", id: "hourHidden" }).appendTo(hourlyTab);
      $(hourlyTab).appendTo(tabContent);

      //creating the dailyTab
      var dailyTab = $("<div/>", { "class": "tab-pane", id: "Daily" });

      var daily1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "day" }).appendTo(daily1);
      $(daily1).append("每天 允许的通配符[, - * / L W]");
      $(daily1).appendTo(dailyTab);

      var daily5 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "day" }).appendTo(daily5);
      $(daily5).append("不指定");
      $(daily5).appendTo(dailyTab);

      var daily2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "day" }).appendTo(daily2);
      $(daily2).append("周期 从");
      $("<input/>", { type: "text", id: "dayStart_0", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(daily2);
      $(daily2).append("-");
      $("<input/>", { type: "text", id: "dayEnd_0", value: "2", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(daily2);
      $(daily2).append("日");
      $(daily2).appendTo(dailyTab);

      var daily3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "4", name: "day" }).appendTo(daily3);
      $(daily3).append("从");
      $("<input/>", { type: "text", id: "dayStart_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(daily3);
      $(daily3).append("日开始,每");
      $("<input/>", { type: "text", id: "dayEnd_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(daily3);
      $(daily3).append("天执行一次");
      $(daily3).appendTo(dailyTab);

      var daily6 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "5", name: "day" }).appendTo(daily6);
      $(daily6).append("每月");
      $("<input/>", { type: "text", id: "dayStart_2", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(daily6);
      $(daily6).append("号最近的那个工作日");
      $(daily6).appendTo(dailyTab);

      var daily7 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "6", name: "day" }).appendTo(daily7);
      $(daily7).append("本月最后一天");
      $(daily7).appendTo(dailyTab);

      var daily4 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "7", name: "day", id: "day_appoint" }).appendTo(daily4);
      $(daily4).append("指定");
      $(daily4).appendTo(dailyTab);

      let daily4_1 = $("<div/>", { "class": "line row text-nowrap" });
      let daily4_1_1 = $("<span/>");
      for (let i = 1; i <= 31; i++) {
        let paddedNumber = i.toString().padStart(2, '0');
        $(daily4_1_1).append(
          `<span>
                          <span class="imp dayList">
                            <input type="checkbox" disabled="disabled" style="margin-left: 5px" value="${i}">
                            <span class="font-monospace">${paddedNumber}</span>
                          </span>
                        </span>`
        );
        if (i % 10 === 0) {
          $(daily4_1_1).append("<br/>");
        }
      }
      $(daily4_1).append(daily4_1_1);
      $(dailyTab).append(daily4_1);
      $("<input/>", { type: "hidden", id: "dayHidden" }).appendTo(dailyTab);
      $(dailyTab).appendTo(tabContent);

      //creating the monthlyTab
      var monthlyTab = $("<div/>", { "class": "tab-pane", id: "Monthly" });

      var monthly1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "month" }).appendTo(monthly1);
      $(monthly1).append("每月 允许的通配符[, - * /]");
      $(monthly1).appendTo(monthlyTab);

      var monthly2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "month" }).appendTo(monthly2);
      $(monthly2).append("不指定");
      $(monthly2).appendTo(monthlyTab);

      var monthly3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "month" }).appendTo(monthly3);
      $(monthly3).append("周期 从");
      $("<input/>", { type: "text", id: "monthStart_0", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(monthly3);
      $(monthly3).append("-");
      $("<input/>", { type: "text", id: "monthEnd_0", value: "2", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(monthly3);
      $(monthly3).append("月");
      $(monthly3).appendTo(monthlyTab);

      var monthly4 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "4", name: "month" }).appendTo(monthly4);
      $(monthly4).append("从");
      $("<input/>", { type: "text", id: "monthStart_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(monthly4);
      $(monthly4).append("日开始,每");
      $("<input/>", { type: "text", id: "monthEnd_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(monthly4);
      $(monthly4).append("月执行一次");
      $(monthly4).appendTo(monthlyTab);

      var monthly5 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "5", name: "month", id: "month_appoint" }).appendTo(monthly5);
      $(monthly5).append("指定");
      $(monthly5).appendTo(monthlyTab);

      let monthly5_1 = $("<div/>", { "class": "line row text-nowrap" });
      let monthly5_1_1 = $("<span/>");
      for (let i = 1; i <= 12; i++) {
        let paddedNumber = i.toString().padStart(2, '0');
        $(monthly5_1_1).append(
          `<span>
                          <span class="imp monthList">
                            <input type="checkbox" disabled="disabled" style="margin-left: 5px" value="${i}">
                            <span class="font-monospace">${paddedNumber}</span>
                          </span>
                        </span>`
        );
        if (i !== 12 && i % 6 === 0) {
          $(monthly5_1_1).append("<br/>");
        }
      }
      $(monthly5_1).append(monthly5_1_1);
      $(monthlyTab).append(monthly5_1);
      $("<input/>", { type: "hidden", id: "monthHidden" }).appendTo(monthlyTab);
      $(monthlyTab).appendTo(tabContent);

      //creating the weeklyTab
      var weeklyTab = $("<div/>", { "class": "tab-pane", id: "Weekly" });

      var weekly1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "week" }).appendTo(weekly1);
      $(weekly1).append("每周 允许的通配符[, - * / L #]");
      $(weekly1).appendTo(weeklyTab);

      var weekly2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "week" }).appendTo(weekly2);
      $(weekly2).append("不指定");
      $(weekly2).appendTo(weeklyTab);

      var weekly3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "week" }).appendTo(weekly3);
      $(weekly3).append("周期 从星期");
      $("<input/>", { type: "text", id: "weekStart_0", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(weekly3);
      $(weekly3).append("-");
      $("<input/>", { type: "text", id: "weekEnd_0", value: "2", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(weekly3);
      $(weekly3).appendTo(weeklyTab);

      var weekly4 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "4", name: "week" }).appendTo(weekly4);
      $(weekly4).append("第");
      $("<input/>", { type: "text", id: "weekStart_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(weekly4);
      $(weekly4).append("周的星期");
      $("<input/>", { type: "text", id: "weekEnd_1", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(weekly4);
      $(weekly4).appendTo(weeklyTab);

      var weekly5 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "5", name: "week" }).appendTo(weekly5);
      $(weekly5).append("本月最后一个星期");
      $("<input/>", { type: "text", id: "weekStart_2", value: "1", style: "width:35px; height:20px; text-align: center; margin: 0 3px;" }).appendTo(weekly5);
      $(weekly5).appendTo(weeklyTab);

      var weekly6 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "6", name: "week", id: "week_appoint" }).appendTo(weekly6);
      $(weekly6).append("指定周几");
      $(weekly6).appendTo(weeklyTab);


      let weekly6_1 = $("<div/>", { "class": "line row text-nowrap" });
      let weekly6_1_1 = $("<span/>");
      for (let i = 1; i <= 7; i++) {
        let paddedNumber = i.toString().padStart(1, '0');
        $(weekly6_1_1).append(
          `<span>
                          <span class="imp weekList">
                            <input type="checkbox" disabled="disabled" style="margin-left: 5px" value="${i}">
                            <span class="font-monospace">${paddedNumber}</span>
                          </span>
                        </span>`
        );
      }
      $(weekly6_1).append(weekly6_1_1);
      $(weeklyTab).append(weekly6_1);
      $("<input/>", { type: "hidden", id: "weekHidden" }).appendTo(weeklyTab);
      $(weeklyTab).appendTo(tabContent);

      //creating the yearlyTab
      var yearlyTab = $("<div/>", { "class": "tab-pane", id: "Yearly" });

      var yearly1 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "1", name: "year" }).appendTo(yearly1);
      $(yearly1).append("不指定 允许的通配符[, - * /] 非必填");
      $(yearly1).appendTo(yearlyTab);

      var yearly3 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "2", name: "year" }).appendTo(yearly3);
      $(yearly3).append("每年");
      $(yearly3).appendTo(yearlyTab);

      var yearly2 = $("<div/>", { "class": "line" });
      $("<input/>", { type: "radio", value: "3", name: "year" }).appendTo(yearly2);
      $(yearly2).append("周期从");
      $("<input/>", { type: "text", id: "yearStart_0", value: "2016", style: "width:45px; height:20px;" }).appendTo(yearly2);
      $(yearly2).append("-");
      $("<input/>", { type: "text", id: "yearEnd_0", value: "2017", style: "width:45px; height:20px;" }).appendTo(yearly2);
      $(yearly2).append("年");
      $(yearly2).appendTo(yearlyTab);
      $("<input/>", { type: "hidden", id: "yearHidden" }).appendTo(yearlyTab);
      $(yearlyTab).appendTo(tabContent);

      $(tabContent).appendTo(span12);
      $(span12).appendTo(row);
      $(row).appendTo(container);
      $(container).appendTo(mainDiv);
      $(cronContainer).append(mainDiv);

      var that = $(this);

      // Hide the original input
      that.hide();

      // Replace the input with an input group
      var $g = $("<div>").addClass("input-group");
      // Add an input
      var $i = $("<input>", { type: 'text', placeholder: 'cron表达式...' })
        .addClass("form-control")
        .addClass("cronGen-display-input")
        .val($(that).val());
      $i.change(function () {
        that.val($i.val());
      });
      $i.appendTo($g);
      // Add the button
      var $b = $(`<button class="btn btn-outline-secondary"><i class="fa fa-edit"></i></button>`);
      // Put button inside span
      var $s = $("<span>").addClass("input-group-btn");
      $b.appendTo($s);
      $s.appendTo($g);

      $(this).before($g);

      inputElement = that;
      displayElement = $i;

      $b.popover({
        html: true,
        sanitize: false,
        content: function () {
          return $(cronContainer).html();
        },
        placement: options.direction,
        customClass: 'cronGen-popover',
      }).on('click', function (e) {
        e.preventDefault();

        //fillDataOfMinutesAndHoursSelectOptions();
        //fillDayWeekInMonth();
        //fillInWeekDays();
        //fillInMonths();

        $.fn.cronGen.tools.cronParse(inputElement.val());

        //绑定指定事件
        $.fn.cronGen.tools.initChangeEvent();


        $('#CronGenTabs a').click(function (e) {
          e.preventDefault();
          $(this).tab('show');
          //generate();
        });
        $("#CronGenMainDiv select,#CronGenMainDiv input").change(function (e) {
          generate();
        });
        $("#CronGenMainDiv input").focus(function (e) {
          generate();
        });
        //generate();
      });
      return;
    }
  });


  var fillInMonths = function () {
    var days = [
      { text: "一月", val: "1" },
      { text: "二月", val: "2" },
      { text: "三月", val: "3" },
      { text: "四月", val: "4" },
      { text: "五月", val: "5" },
      { text: "六月", val: "6" },
      { text: "七月", val: "7" },
      { text: "八月", val: "8" },
      { text: "九月", val: "9" },
      { text: "十月", val: "10" },
      { text: "十一月", val: "11" },
      { text: "十二月", val: "12" }
    ];
    $(".months").each(function () {
      fillOptions(this, days);
    });
  };

  var fillOptions = function (elements, options) {
    for (var i = 0; i < options.length; i++)
      $(elements).append("<option value='" + options[i].val + "'>" + options[i].text + "</option>");
  };
  var fillDataOfMinutesAndHoursSelectOptions = function () {
    for (var i = 0; i < 60; i++) {
      if (i < 24) {
        $(".hours").each(function () { $(this).append(timeSelectOption(i)); });
      }
      $(".minutes").each(function () { $(this).append(timeSelectOption(i)); });
    }
  };
  var fillInWeekDays = function () {
    var days = [
      { text: "周一", val: "2" },
      { text: "周二", val: "3" },
      { text: "周三", val: "4" },
      { text: "周四", val: "5" },
      { text: "周五", val: "6" },
      { text: "周六", val: "7" },
      { text: "周天", val: "1" }
    ];
    $(".week-days").each(function () {
      fillOptions(this, days);
    });

  };
  var fillDayWeekInMonth = function () {
    var days = [
      { text: "第一个", val: "1" },
      { text: "第二个", val: "2" },
      { text: "第三个", val: "3" },
      { text: "第四个", val: "4" }
    ];
    $(".day-order-in-month").each(function () {
      fillOptions(this, days);
    });
  };
  var displayTimeUnit = function (unit) {
    if (unit.toString().length == 1)
      return "0" + unit;
    return unit;
  };
  var timeSelectOption = function (i) {
    return "<option id='" + i + "'>" + displayTimeUnit(i) + "</option>";
  };

  var generate = function () {

    var activeTab = $("ul#CronGenTabs li a.active").prop("id");
    var results = "";
    switch (activeTab) {
      case "SecondlyTab":
        switch ($("input:radio[name=second]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.everyTime("second");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.cycle("second");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.startOn("second");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "4":
            $.fn.cronGen.tools.initCheckBox("second");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
      case "MinutesTab":
        switch ($("input:radio[name=min]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.everyTime("min");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.cycle("min");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.startOn("min");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "4":
            $.fn.cronGen.tools.initCheckBox("min");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
      case "HourlyTab":
        switch ($("input:radio[name=hour]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.everyTime("hour");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.cycle("hour");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.startOn("hour");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "4":
            $.fn.cronGen.tools.initCheckBox("hour");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
      case "DailyTab":
        switch ($("input:radio[name=day]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.everyTime("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.unAppoint("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.cycle("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "4":
            $.fn.cronGen.tools.startOn("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "5":
            $.fn.cronGen.tools.workDay("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "6":
            $.fn.cronGen.tools.lastDay("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "7":
            $.fn.cronGen.tools.initCheckBox("day");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
      case "WeeklyTab":
        switch ($("input:radio[name=week]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.everyTime("week");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.unAppoint("week");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.cycle("week");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "4":
            $.fn.cronGen.tools.startOn("week");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "5":
            $.fn.cronGen.tools.lastWeek("week");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "6":
            $.fn.cronGen.tools.initCheckBox("week");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
      case "MonthlyTab":
        switch ($("input:radio[name=month]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.everyTime("month");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.unAppoint("month");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.cycle("month");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "4":
            $.fn.cronGen.tools.startOn("month");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "5":
            $.fn.cronGen.tools.initCheckBox("month");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
      case "YearlyTab":
        switch ($("input:radio[name=year]:checked").val()) {
          case "1":
            $.fn.cronGen.tools.unAppoint("year");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "2":
            $.fn.cronGen.tools.everyTime("year");
            results = $.fn.cronGen.tools.cronResult();
            break;
          case "3":
            $.fn.cronGen.tools.cycle("year");
            results = $.fn.cronGen.tools.cronResult();
            break;
        }
        break;
    }

    // Update original control
    inputElement.val(results);
    // Update display
    displayElement.val(results);
  };

})(jQuery);

(function ($) {
  $.fn.cronGen.defaultOptions = {
    direction: 'bottom'
  };
  $.fn.cronGen.tools = {
    /**
     * 每周期
     */
    everyTime: function (dom) {
      $("#" + dom + "Hidden").val("*");
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 不指定
     */
    unAppoint: function (dom) {
      var val = "?";
      if (dom == "year") {
        val = "";
      }
      $("#" + dom + "Hidden").val(val);
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 周期
     */
    cycle: function (dom) {
      var start = $("#" + dom + "Start_0").val();
      var end = $("#" + dom + "End_0").val();
      $("#" + dom + "Hidden").val(start + "-" + end);
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 从开始
     */
    startOn: function (dom) {
      var start = $("#" + dom + "Start_1").val();
      var end = $("#" + dom + "End_1").val();
      $("#" + dom + "Hidden").val(start + "/" + end);
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 最后一天
     */
    lastDay: function (dom) {
      $("#" + dom + "Hidden").val("L");
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 每周的某一天
     */
    weekOfDay: function (dom) {
      var start = $("#" + dom + "Start_0").val();
      var end = $("#" + dom + "End_0").val();
      $("#" + dom + "Hidden").val(start + "#" + end);
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 最后一周
     */
    lastWeek: function (dom) {
      var start = $("#" + dom + "Start_2").val();
      $("#" + dom + "Hidden").val(start + "L");
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    /**
     * 工作日
     */
    workDay: function (dom) {
      var start = $("#" + dom + "Start_2").val();
      $("#" + dom + "Hidden").val(start + "W");
      $.fn.cronGen.tools.clearCheckbox(dom);
    },
    initChangeEvent: function () {
      var secondList = $(".secondList").children();
      $("#sencond_appoint").click(function () {
        if (this.checked) {
          if ($(secondList).filter(":checked").length == 0) {
            $(secondList.eq(0)).attr("checked", true);
          }
          secondList.eq(0).change();
        }
      });

      secondList.change(function () {
        var sencond_appoint = $("#sencond_appoint").prop("checked");
        if (sencond_appoint) {
          var vals = [];
          secondList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          var val = "?";
          if (vals.length > 0 && vals.length < 59) {
            val = vals.join(",");
          } else if (vals.length == 59) {
            val = "*";
          }
          $("#secondHidden").val(val);
        }
      });

      var minList = $(".minList").children();
      $("#min_appoint").click(function () {
        if (this.checked) {
          if ($(minList).filter(":checked").length == 0) {
            $(minList.eq(0)).attr("checked", true);
          }
          minList.eq(0).change();
        }
      });

      minList.change(function () {
        var min_appoint = $("#min_appoint").prop("checked");
        if (min_appoint) {
          var vals = [];
          minList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          var val = "?";
          if (vals.length > 0 && vals.length < 59) {
            val = vals.join(",");
          } else if (vals.length == 59) {
            val = "*";
          }
          $("#minHidden").val(val);
        }
      });

      var hourList = $(".hourList").children();
      $("#hour_appoint").click(function () {
        if (this.checked) {
          if ($(hourList).filter(":checked").length == 0) {
            $(hourList.eq(0)).attr("checked", true);
          }
          hourList.eq(0).change();
        }
      });

      hourList.change(function () {
        var hour_appoint = $("#hour_appoint").prop("checked");
        if (hour_appoint) {
          var vals = [];
          hourList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          var val = "?";
          if (vals.length > 0 && vals.length < 24) {
            val = vals.join(",");
          } else if (vals.length == 24) {
            val = "*";
          }
          $("#hourHidden").val(val);
        }
      });

      var dayList = $(".dayList").children();
      $("#day_appoint").click(function () {
        if (this.checked) {
          if ($(dayList).filter(":checked").length == 0) {
            $(dayList.eq(0)).attr("checked", true);
          }
          dayList.eq(0).change();
        }
      });

      dayList.change(function () {
        var day_appoint = $("#day_appoint").prop("checked");
        if (day_appoint) {
          var vals = [];
          dayList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          var val = "?";
          if (vals.length > 0 && vals.length < 31) {
            val = vals.join(",");
          } else if (vals.length == 31) {
            val = "*";
          }
          $("#dayHidden").val(val);
        }
      });

      var monthList = $(".monthList").children();
      $("#month_appoint").click(function () {
        if (this.checked) {
          if ($(monthList).filter(":checked").length == 0) {
            $(monthList.eq(0)).attr("checked", true);
          }
          monthList.eq(0).change();
        }
      });

      monthList.change(function () {
        var month_appoint = $("#month_appoint").prop("checked");
        if (month_appoint) {
          var vals = [];
          monthList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          var val = "?";
          if (vals.length > 0 && vals.length < 12) {
            val = vals.join(",");
          } else if (vals.length == 12) {
            val = "*";
          }
          $("#monthHidden").val(val);
        }
      });

      var weekList = $(".weekList").children();
      $("#week_appoint").click(function () {
        if (this.checked) {
          if ($(weekList).filter(":checked").length == 0) {
            $(weekList.eq(0)).attr("checked", true);
          }
          weekList.eq(0).change();
        }
      });

      weekList.change(function () {
        var week_appoint = $("#week_appoint").prop("checked");
        if (week_appoint) {
          var vals = [];
          weekList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          var val = "?";
          if (vals.length > 0 && vals.length < 7) {
            val = vals.join(",");
          } else if (vals.length == 7) {
            val = "*";
          }
          $("#weekHidden").val(val);
        }
      });
    },
    initObj: function (strVal, strid) {
      var ary = null;
      var objRadio = $("input[name='" + strid + "'");
      if (strVal == null) {
        strVal = "";
      }
      if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(1).attr("checked", "checked");
        $("#" + strid + "Start_0").val(ary[0]);
        $("#" + strid + "End_0").val(ary[1]);
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(2).attr("checked", "checked");
        $("#" + strid + "Start_1").val(ary[0]);
        $("#" + strid + "End_1").val(ary[1]);
      } else {
        objRadio.eq(3).attr("checked", "checked");
        if (strVal != "?") {
          ary = strVal.split(",");
          for (var i = 0; i < ary.length; i++) {
            $("." + strid + "List input[value='" + ary[i] + "']").attr("checked", "checked");
          }
          $.fn.cronGen.tools.initCheckBox(strid);
        }
      }
    },
    initDay: function (strVal) {
      var ary = null;
      var objRadio = $("input[name='day'");
      if (strVal == null) {
        strVal = "";
      }
      if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal == "?") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr("checked", "checked");
        $("#dayStart_0").val(ary[0]);
        $("#dayEnd_0").val(ary[1]);
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(3).attr("checked", "checked");
        $("#dayStart_1").val(ary[0]);
        $("#dayEnd_1").val(ary[1]);
      } else if (strVal.split('W').length > 1) {
        ary = strVal.split('W');
        objRadio.eq(4).attr("checked", "checked");
        $("#dayStart_2").val(ary[0]);
      } else if (strVal == "L") {
        objRadio.eq(5).attr("checked", "checked");
      } else {
        objRadio.eq(6).attr("checked", "checked");
        ary = strVal.split(",");
        for (var i = 0; i < ary.length; i++) {
          $(".dayList input[value='" + ary[i] + "']").attr("checked", "checked");
        }
        $.fn.cronGen.tools.initCheckBox("day");
      }
    },
    initMonth: function (strVal) {
      var ary = null;
      var objRadio = $("input[name='month'");
      if (strVal == null) {
        strVal = "";
      }
      if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal == "?") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr("checked", "checked");
        $("#monthStart_0").val(ary[0]);
        $("#monthEnd_0").val(ary[1]);
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(3).attr("checked", "checked");
        $("#monthStart_1").val(ary[0]);
        $("#monthEnd_1").val(ary[1]);

      } else {
        objRadio.eq(4).attr("checked", "checked");

        ary = strVal.split(",");
        for (var i = 0; i < ary.length; i++) {
          $(".monthList input[value='" + ary[i] + "']").attr("checked", "checked");
        }
        $.fn.cronGen.tools.initCheckBox("month");
      }
    },
    initWeek: function (strVal) {
      var ary = null;
      var objRadio = $("input[name='week'");
      if (strVal == null) {
        strVal = "";
      }
      if (strVal == "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal == "?") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split('/').length > 1) {
        ary = strVal.split('/');
        objRadio.eq(2).attr("checked", "checked");
        $("#weekStart_0").val(ary[0]);
        $("#weekEnd_0").val(ary[1]);
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(3).attr("checked", "checked");
        $("#weekStart_1").val(ary[0]);
        $("#weekEnd_1").val(ary[1]);
      } else if (strVal.split('L').length > 1) {
        ary = strVal.split('L');
        objRadio.eq(4).attr("checked", "checked");
        $("#weekStart_2").val(ary[0]);
      } else {
        objRadio.eq(5).attr("checked", "checked");
        ary = strVal.split(",");
        for (var i = 0; i < ary.length; i++) {
          $(".weekList input[value='" + ary[i] + "']").attr("checked", "checked");
        }
        $.fn.cronGen.tools.initCheckBox("week");
      }
    },
    initYear: function (strVal) {
      var ary = null;
      var objRadio = $("input[name='year'");
      if (strVal == null) {
        strVal = "";
      }
      if (strVal == "*") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split('-').length > 1) {
        ary = strVal.split('-');
        objRadio.eq(2).attr("checked", "checked");
        $("#yearStart_0").val(ary[0]);
        $("#yearEnd_0").val(ary[1]);
      }
    },
    cronParse: function (cronExpress) {
      //获取参数中表达式的值
      if (cronExpress) {
        var regs = cronExpress.split(' ');
        $("input[name=secondHidden]").val(regs[0]);
        $("input[name=minHidden]").val(regs[1]);
        $("input[name=hourHidden]").val(regs[2]);
        $("input[name=dayHidden]").val(regs[3]);
        $("input[name=monthHidden]").val(regs[4]);
        $("input[name=weekHidden]").val(regs[5]);

        $.fn.cronGen.tools.initObj(regs[0], "second");
        $.fn.cronGen.tools.initObj(regs[1], "min");
        $.fn.cronGen.tools.initObj(regs[2], "hour");
        $.fn.cronGen.tools.initDay(regs[3]);
        $.fn.cronGen.tools.initMonth(regs[4]);
        $.fn.cronGen.tools.initWeek(regs[5]);

        if (regs.length > 6) {
          $("input[name=yearHidden]").val(regs[6]);
          $.fn.cronGen.tools.initYear(regs[6]);
        }
      }
    },
    cronResult: function () {
      var result;
      var second = $("#secondHidden").val();
      second = second == "" ? "*" : second;
      var minute = $("#minHidden").val();
      minute = minute == "" ? "*" : minute;
      var hour = $("#hourHidden").val();
      hour = hour == "" ? "*" : hour;
      var day = $("#dayHidden").val();
      day = day == "" ? "*" : day;
      var month = $("#monthHidden").val();
      month = month == "" ? "*" : month;
      var week = $("#weekHidden").val();
      week = week == "" ? "?" : week;
      var year = $("#yearHidden").val();
      if (year != "") {
        result = second + " " + minute + " " + hour + " " + day + " " + month + " " + week + " " + year;
      } else {
        result = second + " " + minute + " " + hour + " " + day + " " + month + " " + week;
      }
      return result;
    },
    clearCheckbox: function (dom) {
      //清除选中的checkbox
      var list = $("." + dom + "List").children().filter(":checked");
      if ($(list).length > 0) {
        $.each(list, function (index) {
          $(this).attr("checked", false);
          $(this).attr("disabled", "disabled");
          $(this).change();
        });
      }
    },
    initCheckBox: function (dom) {
      //移除checkbox禁用
      var list = $("." + dom + "List").children();
      if ($(list).length > 0) {
        $.each(list, function (index) {
          $(this).removeAttr("disabled");
        });
      }
    }
  };
})(jQuery);
