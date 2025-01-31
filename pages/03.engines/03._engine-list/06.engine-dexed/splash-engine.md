---
title: Dexed
id: dexed
image: dexed.jpg
description: 'FM soft-synth inspired on the classic Yamaha DX7 & TX7 synthesizers from 1980s'
taxonomy:
    category: synthesizer
    tag: [free-software,synth-emu,synth-fm,ucase-kb,ucase-pr]
date: '17:38 24-04-2020'
subtitle: 'FM Synthesizer'
splash:
    bg_image_landscape: dexed-hero.png
    bg_image: dexed-hero_small.png
media_thumb: dexed.jpg
---
[column class="column-offset-1 column-6 first"]
Dexed is a FM-type softsynth developed by Pascal Gauthier of Digital Suburban. It is an ideal application for importing, playing and editing/managing sysex patches from both the classic Yamaha DX7 synthesizer and the TX7.

Dexed includes six operators, faithful to DX structure. Each operator has a level indicator. The operators can be arranged in various algorithms, indicated by the green boxes. Patch banks are called "cartridges" and there are many (about 32) included in the installation package. Selecting a cartridge loads the patches in the relative bank.

Dexed can be configured to use some of the original math limitation of a DX synthesizer. This does not only apply to the DAC, it also involves the bit resolution of the sine waves and the way that the amplitude is applied to each operator. Since all of this is experimental, multiple engines will be available to be able to compare them easily.

Dexed comes with 3 engine types:
+ **Modern:** this is the original 24-bit music-synthesizer-for-android implementation.
+ **Mark I:** Based on the OPL Series but at a higher resolution (LUT are 10-bits). The target of this engine is to be closest to the real DX7.
+ **OPL Series:** this is an experimental implementation of the reversed engineered OPL family chips. 8-bit. Keep in mind that the envelopes stills needs tuning.
<br>
<br>

## Features:
+ Multi platform (OS X, Windows or Linux) and multi format (VST, AU, LV2)
+ The sound engine music-synthesizer-for-android is closely modeled on the original DX7 characteristics
+ 144 DAW automatable DX7 parameters available from one single panel
+ Fully supports DX7 input and output Sysex messages; including controller change. This means that you can use this with a native DX7/TX7 as a patch editor and sysex manager
+ Each operator have a realtime VU meter to know which one is active
+ Can load/save any DX7/TX7 sysex programs. It is also possible to save a single program into a different sysex file.
[/column]

[column class="column-offset-1 column-4"]
## Video
[youtube="https://youtu.be/wSs1-020nNY"]
<br>
## Audio
![mmoncur - Hexed (OSC74)](https://soundcloud.com/starling-studios/mmoncur-hexed-osc74)
<br>
<p align="right">
 <a href="https://wiki.zynthian.org/index.php/Zynthian_Sound_Demos" target="_blank">more video/audio demos...</a>
</p>
<br>
## Links:
+ [Project's Website](https://asb2m10.github.io/dexed)
+ [LinuxSynths Page](http://www.linuxsynths.com/DexedPatchesDemos/dexed.html)
+ [Source Code](https://github.com/asb2m10/dexed)
+ [Yamaha DX7 Info](https://yamahablackboxes.com/collection/yamaha-dx7-synthesizer/)
[/column]
