---
title: 'X42 Compressor'
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
x42-compressor (aka darc.lv2) is a Dynamic Audio Range Compressor inspired by Adriaensen's zita-dc1. It is a very nice sounding downward compressor that focuses on workflow, exposing only a minimal set of controls. Compression responds to signal-power (RMS), loudness as perceived by humans, not medium related digital-peak.

The compressor features auto makeup-gain, fixed at -10 dBFS/RMS. This maintains perceived loudness over a wide range of thresholds and ratio settings.

A distinct «Hold» feature changes the release-time to be applied only as long as the signal exceeds the threshold. In other words: When «Hold» is enabled, the current gain (or attenuation) is frozen when the signal falls below the threshold.
This prevents the compressor from adding excessive gain (e.g. modulate the noise-floor) and it can counter-act excessive 'pumping' when using short release times.

The plugin is available as mono and stereo variant. In case of the latter, both inputs are summed and the signal power is averaged to determine the gain factor.

darc.lv2 is inspired by the algorithm and UI of Fons Adriaensen's zita-dc1.

#### Parameters
**Input Gain:** Gain applied before level detection or any other processing. Note that this is not visualized as x-axis offset in the curve display. The range is -10 to +30dB in steps of 1dB (0.2dB fine-gained).

**Threshold:** Signal level (RMS) at which the compression effect is engaged. The range is -50 to -10dB in steps of 0.5dB (0.1dB fine-grained).

**Ratio:** The amount of gain or attenuation to be applied (dB/dB above threshold). Unity is retained at -10dBFS/RMS (auto makeup-gain).

**Attack time:** Time it takes for the signal to become fully compressed after exceeding the threshold.

**Release time:** Minimum recovery time to uncompressed signal-level after falling below threshold.

**Hold (check-button):** Retain current attenuation when the signal subceeds the threshold. This prevents modulation of the noise-floor and can counter-act 'pumping'.

#### Display
The horizontal meter at the bottom shows the gain that is applied to the signal. The display shows the min/max range in the last 50ms. Values to the left &lt; 0 means the signal is attenuated (input is louder than -10 dBFS/RMS).

The graph at the top visualizes the input to output gain mapping in dB. When «Hold» is enabled the area where the gain is not releases is shaded blue. The display also shows the input signal level as shaded white area under the curve as well and the current output-level (50ms average) as dot.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [X42 Compressor's Website](http://x42-plugins.com/x42/x42-compressor)
+ [Source Code](https://github.com/x42/darc.lv2)
[/column]

