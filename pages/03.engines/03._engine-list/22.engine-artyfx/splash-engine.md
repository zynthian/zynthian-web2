---
title: ArtyFX
media_order: 'artyfx.png'
description: 'A minimalistic but complete plugin collection'
taxonomy:
    category: effect
    tag: [free-software,effect,fx-mod,fx-delay,fx-eq,fx-filter,fx-dynamics,fx-distortion,fx-other,ucase-kb,ucase-fx]
date: '17:38 24-04-2020'
subtitle: 'Minimalistic Plugin Collection'
splash:
    bg_image_landscape: artyfx-hero.png
    bg_image: artyfx-hero_small.png
media_thumb: artyfx.png
---
[column class="column-offset-1 column-6 first"]
ArtyFX is a suite of minimalistic audio effects, which can be used standalone but is also built into many of OpenAV’s more complex projects like Fabla2, Sorcer and Luppp. Each effect can be used individually as an LV2 plugin.

ArtyFX contains many different plugins - all of the “classic” effects like reverbs, delays and filters are present. The following sections detail each plugin individually, showing how it can be used, and making some suggestions on best practices.

#### Bitta
Bitta is a bit-crusher plugin. Bit crushing reduces the bit-depth of the audio. Because it depends on the volume of the incoming signal, be careful when setting the “crush” dial.

**Crush :** Changes the number of bits used to rush the audio.

#### Della
Della is a BPM adjusting delay, with controls for feedback and delay volume.

**Feedback:** controls the amount of the signal fed back into the delay line: turn it up to have that reggae-crazy-dub-echo that goes on forever!

**Volume:** changes the amount of the delayed signal you hear: useful to keep the delays in the background of a track.

**Time:** changes the delay-length: note that this is “quantized” to multiples of the BPM, so it “jumps” between a 1/8th note, 1/4 note, 1/2 note and whole note duration. Della picks up the BPM from the host program: so if you change tempo it will continue to stay in time!

#### Ducka
Ducka is a side- chain envelope plugin: it is very useful for creating “pumping” basslines as often found in minimal house music. The plugin works by analysing the volume of a sidechain input, and changing the volume of a separate stereo track, based on the amplitude of the sidechain input.

**Threshold:** sets the level that the input audio must reach before the stereo track gets reduced.

**Drop:** controls the amount of volume reduction that is performed.

**Time:** controls the amount of time it take before the stereo track is faded in again. Note that this control is BPM dependant, and the center is directly on the off- beats. A setting of half (its default) is generally musical :)

#### Driva
Driva is a multi-distortion unit capable of the most mean and gritty distortions.

**Tone:** Click the Tone button, a list of different distortion models are available. Just click the desired distortion, and keep rocking out. Cancel at the bottom quits the tone-change view.

**Amount:** just cranks up the gain / distortion quanitity. Use at your own peril!

#### Filta
Filta is a lowpass and highpass filter combination. Useful to remove unwanted high and low frequencies from various recordings or instruments.A

**Frequency:** controls what type of filtering is done, and what frequency. Lower values are lowpass filter, turning up the dial is causes highpass.

#### Kuiza
Kuiza is a 4 band equalizer. Its perfect for creatively shaping the sound of an instrument or synth. Each of the gain controls changes the amplitude at the given frequency. The master gain can be used to reduce or amplify the overall volume if needed. The controls (left to right):

* Low ( ~55 Hz)
* Low mid ( ~220 Hz)
* High mid ( ~1760 Hz)
* High ( ~7040 Hz)
* Master Gain

#### Masha
Masha is a beat grinder plugin: it records a segment of audio and plays it back as a loop, causing a “stutter” effect.

**Volume:** changes the loudness of the stutter-loop. PassThru allows bleeding the normal signal trough.

**Time:** is a BPM dependant control that changes the loop-record and playback length. Gradually reduce this value to get that “standard” DJ stutter effect! This effect has some special functionality, to allow manual control over the BPM. Usually the BPM will be taken from the host program (or JACK transport), but it can now be controlled by a dial.

**HostBPM button:** controls the BPM source. When the button is blue, the HostBPM is enabled. Turning the button off makes the manual BPM dial appear. The dial also shows the current BPM.

#### Panda
Panda is a compressor expander combo, with attack and release controls.

**Threshold:** the “turning point” of compression / expansion. Turning down the dial expands the signal, turning it up causes compression.

**Release:** changes the time for Panda to fade-out its compression/expansion.

**Factor:** controls the amount of compression/expansion performed, the “maximizer” dial.

#### Roomy
Roomy is a spacious and smooth reverb.

**The Time control** changes the length of the reverb tail: higher values give will create a bigger and more spacious mix.

**Damping** controls the high- frequency damping: lower settings gives a spacious open sound, while a high damping feels small and close.

**The Dry/Wet control** changes the amount of reverb signal mixed in: useful for techno and trance “reverb builds”... just crank it right up!

#### Satma
Satma is a crazy distortion plugin. Useful to excite and get gritty, dirty audio.

**Distortion** changes the amount of signal-shaping that occurs: the overall amount of noise production.

**The Tone control** subtly varies between high-frequencies and lower frequencies, or making both equally gritty.

#### Vihda
Vihda is a stereo-enhancer, using a mid-side matrix.

**The Width parameter** affects the amount of stereo content in the signal. Note that the the mid-side technique only enhances stereo: it does not create it!

**The Invert button** inverts the right channel, which can cause a perceptual wider mix due to how the brain interprets audio. Try it and see if it sounds good.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [ArtyFX's Website](http://openavproductions.com/artyfx/)
+ [ArtyFX's Documentation](http://openavproductions.com/doc/artyfx.html)
+ [Source Code](https://github.com/openAVproductions/openAV-ArtyFX)
[/column]


