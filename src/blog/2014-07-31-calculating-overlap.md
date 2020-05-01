---
layout: post
title: Calculating the overlap of aerial photos
author: [Drew Silcock]
tags: [Coding]
image: img/demo4.jpg
date: "2014-07-05T12:00:00Z"
draft: false
---

The setup is as follows: you have a camera attached to a UAV which is taking pictures regularly every five seconds, and you need at least 80% overlap between the photos in order to properly stitch them together into a Digital Elevation Model (DEM). What do you do? How far apart should each photo be? How fast do you need to fly your UAV in order to achieve this?

This post demonstrates how to go about calculating the required maximum distance between successive photos in order to ensure a certain percentage overlap between those photos, as a function of the required overlap, the angle of view of the camera and your height above the ground.

I then go on to show how to simply work out how fast you need to fly your UAV to achieve this overlap, given the time between successive photographs.

<!--more-->

## Calculating inter-photo distance

The geometry of the situation is shown below:

![geometry of overlap](/public/media/calculating-overlap/overlap.svg)

Let's call the inter-photo distance {% latex %} d_{int} {% endlatex %}, the angle of view {% latex %} \alpha_y {% endlatex %}, the height {% latex %} h {% endlatex %} and the required overlap fraction {% latex %} \omega {% endlatex %} (i.e. if we want 80% overlap, then {% latex %} \omega = 0.8 {% endlatex %}).

{% latex centred %} d_{int}      = 2h\tan\left(\frac{\alpha_y}{2}\right) - \text{overlap} {% endlatex %}
{% latex centred %} ~~~~~~~~~~~~ = 2h\tan\left(\frac{\alpha_y}{2}\right) - 2h\omega\tan\left(\frac{\alpha_y}{2}\right) {% endlatex %}
{% latex centred %} ~            = 2h\tan\left(\frac{\alpha_y}{2}\right)\left[ 1 - \omega \right] {% endlatex %}

## Calculating UAV speed

The speed that a UAV must fly at, {% latex %} v_{UAV} {% endlatex %} , given the time interval between successive photos, {% latex %} t_{int} {% endlatex %}, is then simply given by:

{% latex centred %} v_{UAV} = \frac{d_{int}}{t_{int}} = \frac{2h\tan\left(\frac{\alpha_y}{2}\right)\left[ 1 - \omega \right]}{t_{int}} {% endlatex %}

Taking a reasonable value for the angle of view, {% latex %}\alpha_y = 48.9^{\circ}{% endlatex %}, the time interval betweem successive photos, {% latex %}t_{int} = 5{% endlatex %} seconds and taking {% latex %} \omega = 0.8 {% endlatex %} thus gives the very reasonable value for the velocity of the UAV as:

{% latex centred %} v_{UAV} = 0.182h ~ \text{meters/second} {% endlatex %}

So if you're taking photos at a reasonable {% latex %} h = 50 {% endlatex %} meters, then:

{% latex centred %} v_{UAV} = 9.09 ~ \text{meters/second} {% endlatex %}

Luckily, this is a very reasonable value! (Remembering that this is the *maximum* speed you can go before your overlap becomes too small for proper photogrammetry.)
