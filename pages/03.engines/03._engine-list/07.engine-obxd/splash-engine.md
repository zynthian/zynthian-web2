---
title: OBX-D
id: obxd
description: 'Soft-synth inspired on some classic devices manufactured by Oberheim on 1980s'
taxonomy:
    category: synthesizer
    tag: [free-software,synth-emu,synth-sub,ucase-kb,ucase-pr]
date: '17:38 24-04-2020'
subtitle: 'Oberheim Emulator'
splash:
    bg_image: obxd-hero_small.png
    bg_image_landscape: obxd-hero.png
media_thumb: obxd.jpg
---
[column class="column-offset-1 column-6 first"]
OBXD is a monophonic/8-voice polyphonic realtime synthesizer developed by 2DaT, Layzer and Breeze (at KVR) and recently ported to linux. OBXD is available in LV2 and VST formats, and can run in most hosts, such as Ardour, Carla, Jalv and Qtractor.

OBXD includes many features of the famous OB-X hardware synth of the 1980's, as well as a few modifications (see manual links below). There are two oscillators with discrete level controls and a noise level knob, independent saw and square waveforms with pulsewidth modulation control; a cross-modulation knob, sync button and step button (to adjust oscillator tuning in semitones rather than smooth). Unison mode button (all polyphony notes are stacked into one, thicker monophonic voice), spread, glide (portamento), tuning and octave transpose control are included. The "Bright" knob controls higher sound-spectrum precision, and the "P Env" knob provides pitch envelope, hard-wired to the filter envelope section.
<br>
<br>

## Features:
The OBXD filter section has a 12-dB multi-mode filter. Along with the traditional cutoff, resonance and envelope depth controls, this section allows to control key follow, high-quality interpolation (increases CPU consumption slightly) and multi-mode control.

The "Multi" knob allows to transition between the following filter options: low-pass (knob to left), notch (mid-position) and high-pass (knob to right). Activating the "BP" button provides a bandpass filter instead of notch (knob in mid-position). The "24dB" button gives a 24-dB lowpass filter that adjusts from 24dB (knob to left) to 6dB (knob to right).

There is a VAM (voice allocation mode) button which gives last-note priority instead of low-note priority. The Control Section includes 12-semitone bend range (2-note when off) and a oscillator 2 bend only button. The Vibrato Rate is hardwired to the modwheel, but also interacts with the LFO rate knob in interesting ways as well. The Control Section also has both filter and amplitude velocity sensitivity control.

The LFO section includes sine, square and sample-and-hold waveshapes, which can be mixed together. The Voice Variation Section gives further control of filter, glide and amplitude, and the Voice Pan allows to control pan direction of each of the 8 voices independently.
[/column]

[column class="column-offset-1 column-4"]
## Video
[youtube="https://www.youtube.com/watch?v=NdfcgiLsp88"]
<br>
<br>
## Audio
<small>Oberheim Love, by Humi</small>
![Loving OB-Xd, by Humi](OBXdLoveByHumi.mp3)
<small>Chirpy Bells 2</small>
![chirpybellstwo.ogg](chirpybellstwo.ogg)
<small>Lots Happenin</small>
![lotshappenin.ogg](lotshappenin.ogg)
<small>Madderthan</small>
![madderthan.ogg](madderthan.ogg)
<small>Salad Dressing</small>
![saladdressing.ogg](saladdressing.ogg)
<small>Withair</small>
![withair.ogg](withair.ogg)
<br>
<p align="right">
 <a href="https://wiki.zynthian.org/index.php/Zynthian_Sound_Demos" target="_blank">more video/audio demos...</a>
</p>
<br>
## Links:
+ [LinuxSynths Page](http://www.linuxsynths.com/ObxdPatchesDemos/obxd.html)
+ [Source Code](https://github.com/2DaT/Obxd)
[/column]


