---
title: X42 Equalizer
media_order: 'x42-fil4.png'
description: '4 band parametric equalizer'
taxonomy:
    category: effect
    tag: [free-software,effect,fx-filter,ucase-pr]
content:
    items: '@self.modular'
date: '17:38 24-04-2020'
subtitle: '4 band Parametric Equalizer'
splash:
    bg_image_landscape: x42-fil4-hero_small.png
    bg_image: x42-fil4-hero_small.png
media_thumb: x42-fil4.png
---
[column class="column-offset-1 column-6 first"]
x42-eq (aka fil4.lv2) is a 4 band parametric equalizer with additional low & high shelfing and high & low-pass filters. The equalizer is designed to match equivalent analog gain with zero latency and no phase-shift when approaching the Nyquist frequency. It does not have a cramped response which is often the referred to as digital sound. x42-eq features built-in realtime spectrum and spectrogram (waterfall) displays, a user resettable peak-hold display and an output gain control.

fil4.lv2 is based on Fons Adriaensen's LADSPA fil-plugins.

#### Spectrum Controls
The spectrogram controls are on the lower right hand side,

**Off:** Do not display the spectrum<br>
**Spec:** Display a pink-noise (1/octave) weighted spectrum.<br>
**Hist:** Spectrogram display; history view (white dashed lines indicate change of settings)<br>
**Pre:** Analyze the input<br>
**Post:** Analyze the Processed Output<br>

The Stereo Variant has an option to analyze the sum (All) or Left or Right channel only. The gain knob allows to align the spectrum, see the scale on the right-side of the display.

**High:** High Frequency Warping, increased resolution in the lower frequencies.<br>
**Med:** Medium Frequency Warping<br>
**Bark:** No Frequency Warping, emphasize high frequencies<br>

**Rpd:** Rapid falloff (~20ms)<br>
**Fast:** Fast falloff (~80ms)<br>
**Mod:** Moderate falloff time (~200ms)<br>
**Slow:** Slow falloff (~2sec)<br>
**Ns.:** Noise measurement (~20sec)<br>

#### Filter specs
Fil4 consists of four 2nd order resonant filters using a Regalia-Mitra style lattice filter, which has the nice property of being stable even while parameters are being changed.

The high/low-shelf filters are standard 2nd order biquad/IIR filters.

High and Low pass are 2nd order resonant filters (-12dB/octave):

+ Quality 0.0: -6dB at cutoff-freq (no feedback)
+ Quality 0.7: -3dB at cutoff-freq
+ Quality 1.0: 0dB at cutoff (resonant)

All filters are zero latency with correct equivalent analog gain at Nyquist (signal phase-shift at Nyquist frequency is zero).
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [X42 Equalizer's Website](http://x42-plugins.com/x42/x42-eq)
+ [Source Code](https://github.com/x42/fil4.lv2)
[/column]


