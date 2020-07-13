---
title: 'argorlunar'
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
Argotlunar is a tool for creating surreal transformations of audio streams. Specifically, it is a real-time delay-line granulator. It disintegrates an audio stream into short samples (grains). Each grain can have random settings of amplitude, panning, duration, delay, pitch, glissando, filter and envelope. The output of all grains is mixed together into a stream which can be fed back into the main input.

Time-related parameters can be synced to the host tempo, for rhythmic and pulsing textures. Pitch-related parameters can be quantized for harmonic and melodic effects. Feedback can create chaotic, densely layered, and distorted sounds.

Most of the parameters can be correlated. Examples:

+ Filter cut-off correlated with pitch: Higher filter cut-off for grains with higher pitch, and vice versa.
+ Grain duration correlated with panning: Grains with shorter duration panned to the center of the stereo field, and grains with longer duration panned wide in the stereo field.

Argotlunar is free software. Licensed under the GPL v2.

#### Details:

+ Time-related parameters can be synced to the host tempo.
+ Pitch-related parameters can be quantized to various chords/scales.
+ Up to three pairs of parameters can be correlated.
+ Raised-cosine-bell, parabolic, and triangle grain envelopes, with adjustable shape.
+ Transposition is spline-interpolated to reduce aliasing.
+ 12dB state variable filter (HP/BP/LP/Notch).
+ Comb filter.

[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [Argotlunar's Website](http://mourednik.github.io/argotlunar/)
+ [KVRAudio's Page](https://www.kvraudio.com/product/argotlunar-by-michael-ourednik)
+ [Source Code](https://github.com/mourednik/argotlunar)
[/column]

