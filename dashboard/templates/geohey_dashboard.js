/**
 * Created by Nathan on 12/28/15.
 * Optimize by TK on 1/14/16
 */

var category,spider,startDate,endDate,mode;

$('#action-trend label').bind('click', function () {
    var scope = $(this).attr("id");
    $(".portlet-body:eq(0) div:first").removeClass("display-none");
    getTrendData(scope);
});

function getTrendData(scope) {
    $.ajax({
        type : 'GET',
        url : '/api/spider',
        data : {
            scope : scope
        },
        success : function(data) {
            if (typeof(AmCharts) === 'undefined' || $('#datatrend').size() === 0) {
                return;
            }
            var chart = AmCharts.makeChart("datatrend", getTrendChartConfig(scope, JSON.parse(data)));
            $(".portlet-body:eq(0) div:first").addClass("display-none");
        },
        error : function(xhr, status, error) {

        }
    });
}

function getTrendChartConfig(scope, data) {
    var datatrend = {
        "type": "serial",
        "fontSize": 12,
        "fontFamily": "Ubuntu",
        "dataDateFormat": "YYYY-MM-DD JJ:NN",
        "dayNames": ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
        "monthNames": ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        "legend": {
            "equalWidths": false,
            "periodValueText": "total: [[value.sum]]",
            "position": "top",
            "valueAlign": "left",
            "valueWidth": 100
        },
        "dataProvider": data,
        "valueAxes": [{
            "stackType": "regular",
            "gridAlpha": 0.07,
            "position": "left",
            "title": "数据量"
        }],
        "categoryField": "date",
        "categoryAxis": {
            startOnAxis: true,
            parseDates: true,
            minPeriod: "3DD",
            autoGridCount: false,
            gridCount: 50,
            gridAlpha: 0.1,
            gridColor: "#FFFFFF",
            axisColor: "#555555",
            title:"时间",
            dateFormats: [{
                period: 'DD',
                format: 'D'
            }, {
                period: 'MM',
                format: 'MMM'
            }, {
                period: 'YYYY',
                format: 'YYYY'
            }]
        },

        "export": {
            "enabled": true
        },

        "graphs": [{
            "type":"line",
            "balloonText": "错误 [[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "错误数据",
            "valueField": "error",
            "legendPeriodValueText": "[[value]]",
            "color": "#E6434E"
        },{
            "type":"line",
            "balloonText": "更新 [[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "更新数据",
            "valueField": "update",
            "legendPeriodValueText": "[[value]]",
            "color": "#23B679"
        },{
            "type":"line",
            "balloonText": "新增 [[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "新增数据",
            "valueField": "new",
            "legendPeriodValueText": "[[value]]",
            "color": "#E5B700"
        } ],
        "chartCursor": {
            zoomable: false,
            categoryBalloonDateFormat: "MMM-D",
            "cursorAlpha": 0}
    }
    if (scope == 'week') {
        datatrend.categoryAxis.minPeriod = "14DD";
    }
    if (scope == 'month') {
        datatrend.categoryAxis.minPeriod = "MM";
        datatrend.chartCursor.categoryBalloonDateFormat = "MMM";
    }
    if (scope == 'year') {
        datatrend.categoryAxis.minPeriod = "YYYY";
        datatrend.chartCursor.categoryBalloonDateFormat = "YYYY";
    }
    return datatrend;
}

$('#action-balance label').bind('click', function () {
    var scope = $(this).attr("id");
    $(".portlet-body:eq(1) div:first").removeClass("display-none");
    getBalanceData(scope);
});
$('#action-balance-type label').bind('click', function () {
    var scope = $("#action-balance .active").attr("id");
    $(".portlet-body:eq(1) div:first").removeClass("display-none");
    getBalanceData(scope);
});

function getBalanceData(scope) {
    $.ajax({
        type : 'GET',
        url : '/api/spider',
        data : {
            mode: "balance",
            scope : scope
        },
        success : function(data) {
            if (typeof(AmCharts) === 'undefined' || $('#spiderbalance').size() === 0) {
                return;
            }
            var type = $("#action-balance-type .active").attr("id");
            var chart = AmCharts.makeChart("spiderbalance", getBalanceChartConfig(scope, JSON.parse(data), type));
            $(".portlet-body:eq(1) div:first").addClass("display-none");
        },
        error : function(xhr, status, error) {

        }
    });
}

function getBalanceChartConfig(scope, data, type) {
    var balanceChartConfig = {
        "type": "serial",
        "theme": "light",
        "legend": {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "useGraphSettings": true,
            "markerSize": 10
        },
        dayNames:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
        monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        "dataProvider": data,
        valueAxes: [{
            "stackType": "regular",
            "axisAlpha": 0.3,
            "gridAlpha": 0
        }],
        categoryField: "scope",
        categoryAxis: {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
        },
        "graphs": [{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "自然相关",
            "valueField": "自然相关_time",
            legendPeriodValueText:"[[value]]",
            "color": "#e7505a"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "房地产",
            "valueField": "房地产_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "代理服务器",
            "valueField": "代理服务器_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "股票",
            "valueField": "股票_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "教育",
            "valueField": "教育_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "交通",
            "valueField": "交通_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "汽车",
            "valueField": "汽车_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "旅游",
            "valueField": "旅游_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "餐饮",
            "valueField": "餐饮_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "批发零售",
            "valueField": "批发零售_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "生活方式",
            "valueField": "生活方式_time",
            legendPeriodValueText:"[[value]]"
        },{
            "type":"column",
            "balloonText": "[[title]]耗时：[[value]]",
            "fillAlphas": 0.6,
            "lineAlpha": 0.4,
            "title": "行政区划",
            "valueField": "行政区划_time",
            legendPeriodValueText:"[[value]]"
        } ]
    }
    if (type == "absolute") {
        balanceChartConfig.valueAxes[0].stackType = "regular";
    }
    else if (type == "relative") {
        balanceChartConfig.valueAxes[0].stackType = "100%";
    }
    if (scope == "dow") {
        var dowData = data;
        var week_cn = ["周日","周一","周二","周三","周四","周五","周六"];
        for (var i=0; i<7; i++) {
            dowData[i].scope = week_cn[i];
        }
        balanceChartConfig.dataProvider = dowData;
    }
    return balanceChartConfig;
}

var dashboard = function () {
    return {
        initDataRank: function () {
            if (typeof(AmCharts) === 'undefined' || $('#datarank').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("datarank", {
                "type": "serial",
                "theme": "light",
                "legend": {
                    "horizontalGap": 10,
                    "maxColumns": 1,
                    "position": "right",
                    "useGraphSettings": true,
                    "markerSize": 10
                },
                dayNames:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
                monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],

                "dataLoader": {
                    "url": "../api/spider?mode=rank",
                    "format": "json",
                    "showErrors": true,
                    "noStyles": true,
                    "async": true
                },

                valueAxes: [{
                    "stackType": "regular",
                    "axisAlpha": 0.3,
                    "gridAlpha": 0
                }],

                categoryField: "category",
                "rotate": true,
                categoryAxis: {
                    "gridPosition": "start",
                    "axisAlpha": 0,
                    "gridAlpha": 0,
                    "position": "left"
                },


                "export": {
                    "enabled": true
                 },

                "graphs": [{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "汽车",
                    "valueField": "汽车_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "股票",
                    "valueField": "股票_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "自然相关",
                    "valueField": "自然相关_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "交通",
                    "valueField": "交通_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "房地产",
                    "valueField": "房地产_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "代理服务器",
                    "valueField": "代理服务器_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "旅游",
                    "valueField": "旅游_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "教育",
                    "valueField": "教育_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "餐饮",
                    "valueField": "餐饮_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "生活方式",
                    "valueField": "生活方式_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "行政区划",
                    "valueField": "行政区划_total",
                    legendPeriodValueText:"[[value]]"
                },{
                    "type":"column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "批发零售",
                    "valueField": "批发零售_total",
                    legendPeriodValueText:"[[value]]",
                } ]


            });
        },
        initDataFormation: function () {
            if (typeof(AmCharts) === 'undefined' || $('#dataformation').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("dataformation", {
              "type": "pie",
              "startDuration": 0,
               "theme": "light",
              "addClassNames": true,
              "legend":{
                "position":"right",
                "marginRight":100,
                "autoMargins":false
              },
              "innerRadius": "30%",
                "radius":"30%",
              "defs": {
                "filter": [{
                  "id": "shadow",
                  "width": "200%",
                  "height": "200%",
                  "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                  },
                  "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                  },
                  "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                  }
                }]
              },
              "dataLoader": {
                    "url": "../api/spider?mode=formation&category=批发零售",
                    "format": "json",
                    "showErrors": true,
                    "noStyles": true,
                    "async": true
                },
              "valueField": "value",
              "titleField": "spider",
              "export": {
                "enabled": true
              }
            });
        },
        init: function () {
            //this.initDataTrend();
            //this.initSpiderBalance();
            this.initDataRank();
            this.initDataFormation();
        }
    };
}();


if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function () {
        dashboard.init(); // init metronic core componets
        getTrendData('day')
        getBalanceData('day')
    });
}
