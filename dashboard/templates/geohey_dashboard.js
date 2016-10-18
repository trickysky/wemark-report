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
                "startEffect": "easeInSine",
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
                    // {
                    //     "date": "2016-09-26",
                    //     "scan": "2810",
                    //     "confirm": "345"
                    // },
                    // {
                    //     "date": "2016-09-27",
                    //     "scan": "2763",
                    //     "confirm": "988"
                    // },
                    // {
                    //     "date": "2016-09-28",
                    //     "scan": "2966",
                    //     "confirm": "666"
                    // },
                    // {
                    //     "date": "2016-09-29",
                    //     "scan": "2284",
                    //     "confirm": "381"
                    // },
                    // {
                    //     "date": "2016-09-30",
                    //     "scan": "3656",
                    //     "confirm": "982"
                    // },
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
                        "scan": "2203",
                        "confirm": "377"
                    },
                    {
                        "date": "2016-10-10",
                        "scan": "2313",
                        "confirm": "440"
                    },
                    {
                        "date": "2016-10-11",
                        "scan": "2745",
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
                        "scan": "3510",
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
            $('#spiderbalance').html("<iframe width=100% height=100% src='https://geohey.com/apps/dataviz/55f5f8c6105143bd989a7c42a4f12b19/share?ak=N2IxMTc3MTIyODRlNGJkNjkxYWVlNDQ4OWI1YWY0ZTk' frameborder=0></iframe>");
        },
        initDataRank: function () {
            if (typeof(AmCharts) === 'undefined' || $('#datarank').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("datarank", {
                "type": "pie",
                "angle": 12,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]次</b> ([[percents]]%)</span>",
                "depth3D": 15,
                "titleField": "category",
                "valueField": "column-1",
                "percentPrecision": 1,
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "enabled": true,
                    "align": "center",
                    "markerType": "circle",
                    "valueAlign": "left",
                    "valueText": ""
                },
                "titles": [],
                "dataProvider": [
                    {
                        "category": "百威",
                        "column-1": 6570
                    },
                    {
                        "category": "百威纯生",
                        "column-1": 4021
                    },
                    {
                        "category": "哈尔滨小麦王",
                        "column-1": 4901
                    },
                    {
                        "category": "哈尔滨冰爽",
                        "column-1": 4210
                    },
                    {
                        "category": "哈尔滨冰畅",
                        "column-1": 2121
                    },
                    {
                        "category": "哈尔滨清爽",
                        "column-1": 2039
                    },
                    { 
                        "category": "大富豪", 
                        "column-1": 1039 
                    },
                    { 
                        "category": "雪津", 
                        "column-1": 2039 
                    }
                ]
            });
        },
        initDataFormation: function () {
            if (typeof(AmCharts) === 'undefined' || $('#dataformation').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("dataformation", {
                "type": "gauge",
                "startDuration": 5,
                "startEffect": "easeOutSine",
                "arrows": [
                    {
                        "id": "GaugeArrow-1",
                        "value": 114
                    }
                ],
                "axes": [
                    {
                        "bottomText": "1,146,302 元",
                        "bottomTextColor": "#00CC00",
                        "bottomTextFontSize": 21,
                        "bottomTextYOffset": -20,
                        "endValue": 500,
                        "id": "GaugeAxis-1",
                        "unit": " 万元",
                        "valueInterval": 50,
                        "bands": [
                            {
                                "color": "#00CC00",
                                "endValue": 250,
                                "id": "GaugeBand-1",
                                "startValue": 0
                            },
                            {
                                "color": "#ffac29",
                                "endValue": 400,
                                "id": "GaugeBand-2",
                                "innerRadius": "96%",
                                "startValue": 250
                            },
                            {
                                "color": "#ea3838",
                                "endValue": 500,
                                "id": "GaugeBand-3",
                                "innerRadius": "94%",
                                "startValue": 400
                            }
                        ]
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "titles": [
                    {
                        "id": "Title-1",
                        "size": 15,
                        "text": "奖金池兑奖情况"
                    }
                ]
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
