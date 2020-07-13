---
title: 'dRowAudio'
date: '06:34 24-04-2020'
margin_top: half
padding_top: none
padding_bottom: none
margin_bottom: none
role: default
content:
    items: '@self.modular'
body_classes: 'use-case custom-list'
---
[column class="column-offset-1 column-6 first"]
dRowAudio - A JUCE module for high level audio application development.

dRowAudio is a 3rd party JUCE module designed for rapid audio application development. It contains classes for audio processing and gui elements. Additionally there are several wrappers around 3rd party libraries including cURL, FFTReal and SoundTouch. dRowAudio is written in the strict JUCE style, closely following the style guide set out at JUCE Coding Standards.

## Overview

#### Tremolo
This tremolo effect can be used in either a mono or stereo mode and has all the features you would expect. Rate and depth are adjustable along with the shape of the waveform and the phase difference between the left and right channels. A live modulation waveform display is also present so you can see exactly what effect your tremolo is having visually.

#### Distortion Shaper
This is a highly configurable Distortion with a user-definable transfer function. This means that you can control the curve used to define the distortion yourself using two points on the graph. This allows for extremely custom distortion sounds.

Both input and output gains are controlable as well as simple pre and post distrotion low-pass filters to customise the distortion even more and remove harsh high frequencies if necessary.

#### Reverb
This is a highly configurable Reverb based on the Schoeder/Moorer model. It includes controls for adjusting Pre-delay, Early Reflections and Late Reverb as well as various room parameters such as shape, absorption and diffusion.

#### Flanger
This is a stereo flanger effect. It large intensity range and adjustable feedback ammount for extreme effects. An output mix control is also provided to adjust how much of the effect is applied to the track.

#### Distortion
This is a simple distortion effect can be used in either a mono or stereo mode. It has controls for pre and post distortion filtering as well as a colour control for adjusting the waveshape.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [dRowAudio's Website](http://www.drowaudio.co.uk/products.php)
+ [Source Code](https://github.com/drowaudio/drowaudio)
[/column]

