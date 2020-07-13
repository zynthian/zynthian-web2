---
title: 'x42 MIDI filters'
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
A collection of 25+ MIDI data filters in LV2 plugin format, developed and maintained by [Robin Gareus](http://x42-plugins.com). The filters follow these basic rules:
+ One MIDI input, one MIDI output (no generators, no synths)
+ No custom GUI, control inputs only
+ Every control can be automated, the plugins handle dynamic parameter changes
+ All plugins report their latency to the host (for most of them it is zero)
+ DRY (Don't Repeat Yourself principle) - simple filters that can be combined in a network
+ Self-documenting: Built-in description and control-port documentation

###Overview
**CC2Note:** Convert MIDI control change messages to note-on/off messages. Note off is queued 10msec later.

**MIDI Channel Filter:** Simple MIDI channel filter. Only data for selected channels may pass. This filter only affects midi-data which is channel relevant (ie note-on/off, control and program changes, key and channel pressure and pitchbend). MIDI-SYSEX and Realtime message are always passed on. This plugin is intended for live-use, button-control. See also 'MIDI Channel Map' filter.

**MIDI Channel Map:** Rewrite midi-channel number. This filter only affects midi-data which is channel relevant (ie note-on/off, control and program changes, key and channel pressure and pitchbend). MIDI-SYSEX and Realtime message are always passed thru unmodified.

**MIDI Enforce Scale:** Filter note-on/off events depending on musical scale. If the key is changed note-off events of are sent for all active off-key notes.

**MIDI Event Filter:** Notch style message filter. Suppress specific messages. For flexible note-on/off range see also 'keyrange' and 'velocityrange'.

**MIDI Key-Range Filter:** This filter allows to define a range of allowed midi notes. Notes-on/off events outside the allowed range are discarded. If the range changes, note-off events are sent to currently active notes that end up outside the valid range.

**MIDI Keysplit:** Change midi-channel number depending on note. The plugin keeps track of transposed midi-notes in case and sends note-off events accordingly if the range is changed even if a note is active. However the split-point and channel-assignments for each manual should only be changed when no notes are currently played.

**MapCC:** Change one control message into another -- combine with scalecc to modify/scale the actual value.

**MIDI Keys Transpose:** Flexible 12-tone map. Allow to map a note within an octave to another note in the same octave-range +- 12 semitones. Alternatively notes can also be masked (disabled). If two keys are mapped to the same note, the corresponding note on/events are latched: only the first note on and last note off will be sent. The settings can be changed dynamically: Note-on/off events will be sent accordingly.

**MIDI Chord:** Harmonizer - make chords from single (fundamental) note in a given musical scale. The scale as well as intervals can be automated freely (currently held chords will change). Note-ons are latched, for multiple/combined chords only single note-on/off will be triggered for the duration of the combined chords. If a off-scale note is given, it will be passed through - no chord is allocated. Note: Combine this effect with the 'MIDI 
Enforce Scale' filter to weed them out.

**MIDI Delayline:** MIDI delay line. Delay all MIDI events by a given time which is given as BPM and beats. If the delay includes a random factor, this effect takes care of always keeping note on/off events sequential regardless of the randomization.

**MIDI Channel Unisono:** Duplicate MIDI events from one channel to another.

**MIDI Strum:** A midi arpeggio effect intended to simulate strumming a stringed instrument (e.g. guitar). A chord is 'collected' and the single notes of the chord are played back spread out over time. The 'Note Collect Timeout' allows for the effect to be played live with midi-keyboard, it compensates for a human not pressing keys at the same point in time. If the effect is used with a sequencer that can send chords with all note-on at the exactly time, it should be set to zero.

**MIDI Chromatic Transpose:** Chromatic transpose of midi notes and key-pressure. If an inversion point is set, the scale is mirrored around this point before transposing. Notes that end up outside the valid range 0..127 are discarded.
MIDI Monophonic Legato	Hold a note until the next note arrives. -- Play the same note again to switch it off.

**MIDI Remove Active Sensing:** Filter to block all active sensing events. Active sensing messages are optional MIDI messages and intended to be sent repeatedly to tell a receiver that a connection is alive, however they can clutter up the MIDI channel or be inadvertently recorded when dumping raw MIDI data to disk.

**MIDI Duplicate Blocker:** MIDI Duplicate Blocker. Filter out overlapping note on/off and duplicate messages.

**Note2CC:** Convert MIDI note-on messages to control change messages.

**MIDI Note Toggle:** Toggle Notes: play a note to turn it on, play it again to turn it off.

**MIDI N-Tap Delay:** This effect repeats notes N times. Where N is either a fixed number or unlimited as long as a given key is pressed. BPM and delay-time variable allows tempo-ramps. On every repeat the given velocity-adjustment is added or subtracted, the result is clamped between 1 and 127.

**MIDI Thru:** MIDI All pass. This plugin has no effect and is intended as example.

**MIDI Quantization:** Live event quantization. This filter aligns incoming MIDI events to a fixed time-grid. Since the effect operates on a live-stream it will introduce latency: Events will be delayed until the next 'tick'. If the plugin-host provides BBT information, the events are aligned to the host's clock otherwise the effect runs on its own time.

**MIDI Velocity Randomization:** Randomize Velocity of MIDI notes (both note on and note off).

**Scale CC Value:** Modify the value (data-byte) of a MIDI control change message.

**MIDI Sostenuto:** This filter delays note-off messages by a given time, emulating a piano sostenuto pedal. When the pedal is released, note-off messages that are queued will be sent immediately. The delay-time can be changed dynamically, changes do affects note-off messages that are still queued.

**MIDI Velocity-Range Filter:** Filter MIDI note-on events according to velocity. Note-on events outside the allowed range are discarded. If a Note-off is received for a note that was previously filtered, it is also not passed though. If the allowed range changes, note-off events are sent to currently active notes that end up outside the valid range.

**MIDI Velocity Adjust:** Change the velocity of note events with separate controls for Note-on and Note-off. The input range 1 - 127 is mapped to the range between Min and Max. If Min is greater than Max, the range is reversed. The offsets value is added to the velocity event after mapping the Min/Max range.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [x42 MIDI-filter's Website](http://x42-plugins.com/x42/x42-midifilter)
+ [Source Code](https://github.com/x42/x42-plugins)
[/column]

