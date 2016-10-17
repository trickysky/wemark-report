/**
 * Created by Nathan on 12/28/15.
 * Optimize by TK on 1/14/16
 */

var dashboard = function () {
    return {
        initDataTrend: function () {
            if (typeof(AmCharts) === 'undefined' || $('#datatrend').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("datatrend", {
                "type": "serial",
                "categoryField": "date",
                "dataDateFormat": "YYYY-MM-DD",
                "startDuration": 1,
                "startEffect": "bounce",
                "categoryAxis": {
                    "gridPosition": "start",
                    "parseDates": true
                },
                "chartCursor": {
                    "enabled": true,
                    "categoryBalloonDateFormat": "MMM DD"
                },
                "trendLines": [],
                "graphs": [
                    {
                        "accessibleLabel": "[[title]] : [[value]]",
                        "balloonText": "[[title]] : [[value]]",
                        "bullet": "round",
                        "id": "AmGraph-1",
                        "labelText": "",
                        "lineAlpha": 0.87,
                        "lineThickness": 3,
                        "showAllValueLabels": true,
                        "title": "扫码数",
                        "valueField": "scan"
                    },
                    {
                        "accessibleLabel": "[[title]] : [[value]]",
                        "balloonText": "[[title]] : [[value]]",
                        "fillAlphas": 0.7,
                        "id": "AmGraph-2",
                        "labelText": "[[value]]",
                        "title": "兑奖数",
                        "type": "column",
                        "valueField": "confirm"
                    }
                ],
                "guides": [],
                "valueAxes": [
                    {
                        "id": "ValueAxis-1",
                        "title": "次数"
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "enabled": true,
                    "align": "center",
                    "position": "top",
                    "valueAlign": "left"
                },
                "titles": [],
                "dataProvider": [
                    // {
                    //     "date": "2016-09-18",
                    //     "scan": "2576",
                    //     "confirm": "180"
                    // },
                    // {
                    //     "date": "2016-09-19",
                    //     "scan": "2382",
                    //     "confirm": "892"
                    // },
                    // {
                    //     "date": "2016-09-20",
                    //     "scan": "2909",
                    //     "confirm": "559"
                    // },
                    // {
                    //     "date": "2016-09-21",
                    //     "scan": "2986",
                    //     "confirm": "728"
                    // },
                    // {
                    //     "date": "2016-09-22",
                    //     "scan": "2348",
                    //     "confirm": "755"
                    // },
                    // {
                    //     "date": "2016-09-23",
                    //     "scan": "3292",
                    //     "confirm": "765"
                    // },
                    // {
                    //     "date": "2016-09-24",
                    //     "scan": "3375",
                    //     "confirm": "646"
                    // },
                    // {
                    //     "date": "2016-09-25",
                    //     "scan": "2959",
                    //     "confirm": "521"
                    // },
                    {
                        "date": "2016-09-26",
                        "scan": "2810",
                        "confirm": "345"
                    },
                    {
                        "date": "2016-09-27",
                        "scan": "2763",
                        "confirm": "988"
                    },
                    {
                        "date": "2016-09-28",
                        "scan": "2966",
                        "confirm": "666"
                    },
                    {
                        "date": "2016-09-29",
                        "scan": "2284",
                        "confirm": "381"
                    },
                    {
                        "date": "2016-09-30",
                        "scan": "3656",
                        "confirm": "982"
                    },
                    {
                        "date": "2016-10-01",
                        "scan": "2153",
                        "confirm": "416"
                    },
                    {
                        "date": "2016-10-02",
                        "scan": "2020",
                        "confirm": "272"
                    },
                    {
                        "date": "2016-10-03",
                        "scan": "2075",
                        "confirm": "299"
                    },
                    {
                        "date": "2016-10-04",
                        "scan": "2129",
                        "confirm": "276"
                    },
                    {
                        "date": "2016-10-05",
                        "scan": "2464",
                        "confirm": "361"
                    },
                    {
                        "date": "2016-10-06",
                        "scan": "2252",
                        "confirm": "281"
                    },
                    {
                        "date": "2016-10-07",
                        "scan": "2079",
                        "confirm": "268"
                    },
                    {
                        "date": "2016-10-08",
                        "scan": "2194",
                        "confirm": "411"
                    },
                    {
                        "date": "2016-10-09",
                        "scan": "3474",
                        "confirm": "377"
                    },
                    {
                        "date": "2016-10-10",
                        "scan": "2313",
                        "confirm": "440"
                    },
                    {
                        "date": "2016-10-11",
                        "scan": "3445",
                        "confirm": "263"
                    },
                    {
                        "date": "2016-10-12",
                        "scan": "3339",
                        "confirm": "267"
                    },
                    {
                        "date": "2016-10-13",
                        "scan": "3650",
                        "confirm": "261"
                    },
                    {
                        "date": "2016-10-14",
                        "scan": "3392",
                        "confirm": "260"
                    },
                    {
                        "date": "2016-10-15",
                        "scan": "2510",
                        "confirm": "507"
                    },
                    {
                        "date": "2016-10-16",
                        "scan": "3344",
                        "confirm": "638"
                    }
                ]
            });
        },
        initSpiderBalance: function () {
            if (typeof(AmCharts) === 'undefined' || $('#spiderbalance').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("spiderbalance", {
                "type": "pie",
                "startDuration": 0,
                "theme": "light",
                "addClassNames": true,
                "legend": {
                    "position": "right",
                    "marginRight": 100,
                    "autoMargins": false
                },
                "innerRadius": "30%",
                "radius": "30%",
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
                "dataProvider": [
                    {
                        "category": "自然相关",
                        "spider": "aqicn",
                        "value": 39556689
                    },
                    {
                        "category": "自然相关",
                        "spider": "jrm",
                        "value": 24733877
                    },
                    {
                        "category": "自然相关",
                        "spider": "weather_cn",
                        "value": 13239895
                    },
                    {
                        "category": "自然相关",
                        "spider": "aqi_zhenqi",
                        "value": 8817561
                    },
                    {
                        "category": "自然相关",
                        "spider": "chkvalid",
                        "value": 175509
                    }
                ],
                "valueField": "value",
                "titleField": "spider",
                "export": {
                    "enabled": true
                }
            });
        },
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
                dayNames: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],

                "dataProvider": [
                    {
                        "category": "自然相关",
                        "自然相关_total": 86521938
                    },
                    {
                        "category": "股票",
                        "股票_total": 60180009
                    },
                    {
                        "category": "批发零售",
                        "批发零售_total": 53136885
                    },
                    {
                        "category": "生活方式",
                        "生活方式_total": 26944090
                    },
                    {
                        "category": "房地产",
                        "房地产_total": 9662622
                    },
                    {
                        "category": "代理服务器",
                        "代理服务器_total": 4740109
                    },
                    {
                        "category": "旅游",
                        "旅游_total": 3973745
                    },
                    {
                        "category": "汽车",
                        "汽车_total": 2717756
                    },
                    {
                        "category": "行政区划",
                        "行政区划_total": 1835195
                    },
                    {
                        "category": "教育",
                        "教育_total": 331070
                    },
                    {
                        "category": "体育",
                        "体育_total": 113312
                    },
                    {
                        "category": "物流",
                        "物流_total": 34715
                    },
                    {
                        "category": "其他",
                        "其他_total": 24947
                    },
                    {
                        "category": "餐饮",
                        "餐饮_total": 3822
                    },
                    {
                        "category": "瓦片",
                        "瓦片_total": 0
                    },
                    {
                        "category": "公司",
                        "公司_total": 0
                    }
                ],

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
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "汽车",
                    "valueField": "汽车_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "股票",
                    "valueField": "股票_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "自然相关",
                    "valueField": "自然相关_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "交通",
                    "valueField": "交通_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "房地产",
                    "valueField": "房地产_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "代理服务器",
                    "valueField": "代理服务器_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "旅游",
                    "valueField": "旅游_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "教育",
                    "valueField": "教育_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "餐饮",
                    "valueField": "餐饮_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "生活方式",
                    "valueField": "生活方式_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "行政区划",
                    "valueField": "行政区划_total",
                    legendPeriodValueText: "[[value]]"
                }, {
                    "type": "column",
                    "balloonText": "[[title]]：[[value]]",
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "title": "批发零售",
                    "valueField": "批发零售_total",
                    legendPeriodValueText: "[[value]]",
                }]


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
                "legend": {
                    "position": "right",
                    "marginRight": 100,
                    "autoMargins": false
                },
                "innerRadius": "30%",
                "radius": "30%",
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
                "dataProvider": [
                    {
                        "category": "自然相关",
                        "spider": "aqicn",
                        "value": 39556689
                    },
                    {
                        "category": "自然相关",
                        "spider": "jrm",
                        "value": 24733877
                    },
                    {
                        "category": "自然相关",
                        "spider": "weather_cn",
                        "value": 13239895
                    },
                    {
                        "category": "自然相关",
                        "spider": "aqi_zhenqi",
                        "value": 8817561
                    },
                    {
                        "category": "自然相关",
                        "spider": "chkvalid",
                        "value": 175509
                    }
                ],
                "valueField": "value",
                "titleField": "spider",
                "export": {
                    "enabled": true
                }
            });
        },
        init: function () {
            this.initDataTrend();
            this.initSpiderBalance();
            this.initDataRank();
            this.initDataFormation();
        }
    };
}();


if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function () {
        dashboard.init(); // init metronic core componets
    });
}
