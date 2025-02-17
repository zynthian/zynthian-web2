---
title: Arpeggiator
media_order: 'arpeggiator.jpg'
description: 'A simple MIDI arpeggiator and MIDI pattern plugin'
taxonomy:
    category: effect
    tag: [free-software,effect,fx-midi,ucase-kb]
date: '17:38 24-04-2020'
subtitle: 'A simple arpeggiator & MIDI pattern plugin'
splash:
    bg_image_landscape: arpeggiator-hero.jpg
    bg_image: arpeggiator-hero_small.jpg
media_thumb: arpeggiator.jpg
---
[column class="column-offset-1 column-6 first"]
Arpeggiator and a MIDI-pattern plugin developed for the MOD platform by Bram Giesen.

####Arpeggiator
The arpeggiator has the following options:

**Tempo options:**
There are a few options too set the tempo of the plugin. The first one is the Free Running mode. In this mode the tempo is controlled by the BPM control of the plugin. On top of the BPM control there is a Divisions control. The plugin can also be synced to the host.

**Arpeggiator modes:**
The arpeggiator has the following modes:
 + Up
 + Down
 + Up-Down
 + Up-Down(alternative)
 + Played
 + Random

**Octave Modes:**
The arpeggiator has octave spread control. The arpeggiator can iterate the incoming notes over multiple octaves. This control sets the range of the octaves that will be iterated over the original pitch. The way how this octaves will be added to the original notes is determent by the octave mode control.

####MIDI-pattern
The MIDI-pattern plugin can be used to create rhythmic patterns. The plugins takes the incoming note and replaces the velocity of the note by a value which is set by one of the faders of the plugin. Because the plugin iterates through the faders it generates a sort of rhythmic sequence. The CV control of the plugin can be used to retrigger the sequence.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [Source Code](https://github.com/BramGiesen/arpeggiator_LV2)
[/column]
