---
title: X42 Whirl Speaker
media_order: 'x42-whirl.png'
description: 'Rotary Speaker Simulator'
taxonomy:
    category: effect
    tag: [free-software,effect,fx-mod,ucase-kb,ucase-fx]
date: '17:38 24-04-2020'
subtitle: 'Plugin Collection'
splash:
    bg_image_landscape: x42-whirl-hero_small.png
media_thumb: x42-whirl.png
---
[column class="column-offset-1 column-6 first"]
x42-whirl is designed to imitate the sound and properties of the electromechanical rotating speaker device that brought world-wide fame to the name and products of Don Leslie.

It is a standalone version of the effect that came to be with the setBfree synth. Rather than simulating the net effect of the electromechanical device, x42-whirl physically models the properties, which results in very accurate representation of the sound of the real device.

Since all individual parts are modelled, x42-whirl not only provides advanced control, but also facilitates customizations, some of which are not feasible in the mechanical device.

#### Details
The signal flow matches the one found in the original hardware. For convenience it is depicted in the plugin's UI. Two filters are used to separate bass and treble, which are sent to the horn and drum speakers. An additional EQ allows to customize the sound of the high-frequency driver.

The heart of the effect is a rotating horn loudspeaker. Two horns are apparent, but one (the dark in the GUI) is a dummy, serving mainly to cancel the centrifugal force of the other during rotation. The plugin uses a combination of Doppler-shift and angular-dependent zero-shifted impulse responses for a Model 600 Horn (The Model 44W horn is identical to that of the Model 600, and evidently standard across all Leslie models [1]). The horn measurement was carried out by J.O. Smith III et al([2]). The woofer's sound is dominated by an amplitude modulation caused by scoop of the rotating drum.

x42-whirl calculates six reflections depending on the angles of the horn and drum as well as distance and position of the microphones to emulate the reverberant scattering corresponding to the dimensions and scattering characteristics of the cabinet. Furthermore the model accounts for artifacts such as signal leakage from the tweeter which does not pass through the horn.

The motor-control allows to set two target speeds (slow/chorale and fast/tremolo) for each of the horn and drum rotors in RPM as well as acceleration and deceleration time-constants in seconds (to reach half the speed). While this does not account for friction it is close to an original properly oiled setup.

Sometimes the horn or drum is aimed at the back of the cabinet when it comes to a halt, which results in a less than desirable sound. An additional optional setting allows to set a stop-position.

For convenience the output stage includes two stereo matrix mixers which allows to reduce the stereo-field and increase mono-compatibility.

#### Note on Parameters
Per default the plugin uses settings corresponding to a Model 44 (rotational speeds, drum and horn radius) and a characteristic 180deg left/right mic'ing technique. However the various aspects can be customized.

The horn's off-center position is accounted for in the cabinet reflections calculation, however the microphones are positioned symmetrical at an equal distance to the rotor's center. Increasing the radii increases the Doppler frequency modulation, increasing the microphone distance subtly changes the spectrum due to different signal runtime length for each of the reflection and speaker positions.

All distances are measured from the center of each rotor. The plugin allows for some impossible real-world configurations (e.g. move the mic pickup inside of the rotating device). Those cases only account for distance and angle calculations and will not correspond to whatever you may hear if it was possible to do so mechanically. While the maxim is to closely model the device as realistically as possible, they are kept in the plugin because it can lead to interesting sounds, which at the end of the day is what this is all about.
[/column]

[column class="column-offset-1 column-4"]
## Links:
+ [Whirl Speaker's Website](http://x42-plugins.com/x42/x42-whirl)
+ [Source Code](https://github.com/pantherb/setBfree)
[/column]
