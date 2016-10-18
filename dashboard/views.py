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
	base_data['app_name'] = u'报表'
	base_data['icon_name'] = 'icon-home'
	base_data['page_name'] = u'数据报表'
	base_data['page_desc'] = u'图表-地图'
	base_data['dashboards'] = get_dashboard().values()
	base_data['portlets'] = get_charts().values()
	return base_data


def get_dashboard():
	stat_data = {'error': 2050236, 'period': datetime.timedelta(0, 900, 957177), 'total': 863625778,
	             'update': 365760996}
	confs = defaultdict(dict)

	confs[0] = {'lg_pos': 3, 'md_pos': 3, 'sm_pos': 6, 'xm_pos': 12, 'color': 'blue', 'icon': 'bar-chart',
	            'name': u'总扫码量', 'value': u'1,209,437'}
	confs[1] = {'lg_pos': 3, 'md_pos': 3, 'sm_pos': 6, 'xm_pos': 12, 'color': 'yellow-crusta', 'icon': 'clock-o',
	            'name': u'总赋码数', 'value': u'10,261,034'}
	confs[2] = {'lg_pos': 3, 'md_pos': 3, 'sm_pos': 6, 'xm_pos': 12, 'color': 'green-jungle', 'icon': 'plug',
	            'name': u'总奖金', 'value': u'5,000,000', 'unit': u'元'}
	confs[3] = {'lg_pos': 3, 'md_pos': 3, 'sm_pos': 6, 'xm_pos': 12, 'color': 'red', 'icon': 'exclamation-triangle',
	            'name': u'已兑奖金额',
	            'value': u'1,946,302', 'unit': u'元'}
	return confs


def get_charts():
	confs = defaultdict(dict)
	confs[0] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'line-chart', 'icon_color': 'green-haze',
	            'font_color': 'green-haze', 'name': u'用户趋势', 'desc': u'扫码数、兑奖数趋势',
	            'actions': "brief/trend_actions.html", 'body_id': 'datatrend', 'body_class': 'CSSAnimationChart'}
	confs[1] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'calendar', 'icon_color': 'red-sunglo',
	            'font_color': 'red-sunglo', 'name': u'区域分布', 'desc': u'用户扫码地点分布',
	            'actions': "brief/balance_actions.html", 'body_id': 'spiderbalance', 'body_class': 'CSSAnimationChart'}
	confs[2] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'list-ol', 'icon_color': 'yellow',
	            'font_color': 'yellow', 'name': u'产品类型', 'desc': u'不同产品的扫码数和兑奖数量',
	            'actions': "brief/filter_order_actions.html", 'body_id': 'datarank', 'body_class': 'CSSAnimationChart'}
	confs[3] = {'lg_pos': 6, 'md_pos': 12, 'sm_pos': 12, 'xm_pos': 12, 'icon': 'pie-chart',
	            'icon_color': 'purple-sharp', 'font_color': 'purple-sharp', 'name': u'数据构成', 'desc': u'展示数据不同指标的构成成分',
	            'actions': "brief/filter_actions.html", 'body_id': 'dataformation', 'body_class': 'CSSAnimationChart'}
	return confs


def index(request):
	return render(request, 'index.html', set_index())


def login(request):
	return render(request, 'login.html')
