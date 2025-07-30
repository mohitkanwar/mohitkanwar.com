---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name | urlize }}"
date: {{ .Date }}
draft: true
author: "Mohit Kanwar"
tags: []
image: "/images/{{ replace .Path "content/" "" | replaceRE "\\.md$" "" }}/banner.png"
description: ""
toc: true
---