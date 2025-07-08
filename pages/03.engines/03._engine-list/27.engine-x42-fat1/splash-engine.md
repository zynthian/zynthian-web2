---
title: X42 Autotune
media_order: 'x42-fat1.png'
description: 'Auto-tuner plugin'
taxonomy:
    category: effect
    tag: [free-software,effect,fx-other,ucase-pr,ucase-fx]
date: '17:38 24-04-2020'
subtitle: 'Auto-tuner based on zita-at1 from Fons Adriaensens'
splash:
    bg_image_landscape: x42-fat1-hero_small.png
    bg_image: x42-fat1-hero_small.png
media_thumb: x42-fat1.png
---
[column class="column-offset-1 column-6 first"]
x42-autotune (aka fat1.lv2) is an auto-tuner based on Fons Adriaensen's zita-at1.

AT1 is intended to correct the pitch of a voice singing (slightly) out of tune. It works by resampling and looping the signal and does not include formant correction, so it should be used to correct small errors only and not to really transpose a song. AT1 can probably be used on some instruments as well, but is primarily designed to cover the vocal range.

The 'expected' pitch can be controlled by MIDI, or be a fixed set of notes.

The main differences to zita-at1 are that the LV2 plugin version reports its latency to the host, saves the state with the session and the MIDI input has sidechain semantics. 

#### Operation Modes
AT1 re-tunes the input signal to the note closest in the configured scale. The scale consists of up to 12 notes (1 octave), which are set and indicated on keyboard on the left side. By default all 12 are enabled.

Left-click allow to en/disable individual notes, and right-click on the keyboard brings up a dialog to select common major/minor scales. The keyboard also indicate the current note as selected by the pitch estimator.

The following operation modes are supported:

**Manual:** Use a fixed set of notes (ignore MIDI). Left click to toggle notes.

**MIDI:** Respond to MIDI note on/off messages. Use currently active MIDI note(s). If none, use any note on the chromatic scale.

**Auto (default):** If no MIDI notes are on, use the static, fixed set of notes (left click to toggle). MIDI notes take priority.

#### Parameters

**MIDI channel selection:** Select the MIDI channel to respond to. This can be 'Omni' or 1..16.

**MIDI Panic:** Reset any 'hanging' MIDI notes.

**Tuning:** This sets the frequency corresponding to 'A' pitch, in other words the required tuning. This will be the default 440 Hz in most cases. The exact value is displayed whenever this control is touched, and can be set in steps of 0.2 Hz.

**Bias:** Normally the pitch estimator will select the enabled note closest to the measured pitch. The Bias control adds some preference for the current note - this allows it to go off-tune more than would be the case otherwise.

**Filter:** This sets the amount of smoothing on the pitch correction while the current note does not change. If it does change the filter is bypassed and the correction jumps immediately to the new value.

**Correction:** Determines how much of the estimated pitch error gets corrected. Full correction may remove expression or vibrato.

**Offset:** Adds an offset in the range of +/- two semitones to the pitch correction. With the Correction control set to zero the result is a constant pitch change.

**Pitch error meter:** The bar below the keyboard indicates the pitch error of the input signal with respect to the current note. The range is +/- one semitone.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [X42 Autotune's Website](http://x42-plugins.com/x42/x42-autotune)
+ [Source Code](https://github.com/x42/fat1.lv2)
[/column]


