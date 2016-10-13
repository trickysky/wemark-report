# coding=utf8
from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from collections import defaultdict
import datetime


def test(request):
    return JsonResponse({'msg': 'Hello tiankun!!!'})


def set_index():
    base_data = {}
    base_data['app_name'] = u'生产监控'
    base_data['icon_name'] = 'icon-home'
    base_data['page_name'] = u'数据生产简报'
    base_data['page_desc'] = u'数据总览 & 机器人监控'
    base_data['dashboards'] = get_dashboard().values()
    base_data['portlets'] = get_charts().values()
    return base_data


def get_dashboard():
    stat_data = {'error': 2050236,'period': datetime.timedelta(0, 900, 957177),'total': 863625778,'update': 365760996}
    confs=defaultdict(dict)
    delta=stat_data['period']
    deltaMinutes= delta.seconds // 60
    deltaHours= delta.seconds // 3600
    deltaMinutes-= deltaHours * 60
    deltaWeeks= delta.days    // 7
    deltaMonth = delta.days//30
    deltaSeconds= delta.seconds - deltaMinutes * 60 - deltaHours * 3600
    deltaDays=delta.days- deltaWeeks * 7

    valuesAndNames =[(deltaMonth,u'月'),(deltaWeeks,u"周"),(deltaDays,u"天"),(deltaHours,u"小时"),(deltaMinutes,u"分"),(deltaSeconds,u"秒")]
    text =""
    for value, name in valuesAndNames:
        if value > 0:
            text += len(text)   and ", " or ""
            text += "%d %s" % (value, name)
            text += (value > 1) and "" or ""

    if text.find(",") > 0:
        text = "".join(text.rsplit(", ",1))

    confs[0]={'lg_pos':3,'md_pos':3,'sm_pos':6,'xm_pos':12,'color':'blue','icon':'bar-chart','name':'数据量','value':format(stat_data['total'],',d')}
    confs[1]={'lg_pos':3,'md_pos':3,'sm_pos':6,'xm_pos':12,'color':'yellow-crusta','icon':'clock-o','name':'更新周期','value':text}
    confs[2]={'lg_pos':3,'md_pos':3,'sm_pos':6,'xm_pos':12,'color':'green-jungle','icon':'plug','name':'代理服务器','value':28567}
    confs[3]={'lg_pos':3,'md_pos':3,'sm_pos':6,'xm_pos':12,'color':'red','icon':'exclamation-triangle','name':'错误率','value':round((stat_data['error'] / float(stat_data['total'] + stat_data['update'])) * 100, 2),'unit':'%'}
    return confs


def get_charts():
    confs=defaultdict(dict)
    confs[0] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'line-chart', 'icon_color': 'green-haze','font_color': 'green-haze', 'name': u'数据量趋势', 'desc': u'数据增长、更新、错误趋势','actions': "brief/trend_actions.html", 'body_id': 'datatrend', 'body_class': 'CSSAnimationChart'}
    confs[1] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'calendar', 'icon_color': 'red-sunglo','font_color': 'red-sunglo', 'name': u'计划统筹', 'desc': u'采集任务计划统筹表','actions': "brief/balance_actions.html", 'body_id': 'spiderbalance','body_class': 'CSSAnimationChart'}
    confs[2] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12,'icon':'list-ol','icon_color':'yellow','font_color':'yellow','name':u'数据排序','desc':u'根据不同的数据指标进行排序','actions':"brief/filter_order_actions.html",'body_id':'datarank','body_class': 'CSSAnimationChart'}
    confs[3] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'pie-chart','icon_color': 'purple-sharp', 'font_color': 'purple-sharp', 'name': u'数据构成', 'desc': u'展示数据不同指标的构成成分','actions': "brief/filter_actions.html", 'body_id': 'dataformation','body_class': 'CSSAnimationChart'}
    return confs


def index(request):
    return render(request, 'index.html', set_index())
