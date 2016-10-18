#!/usr/bin/python
# -*- coding=UTF-8 -*-
# trickysky
# 2016/10/12

from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^login$', views.login, name='login'),
    url(r'^test$', views.test, name='test'),
]
