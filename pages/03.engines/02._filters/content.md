---
title: Filters
content_position: center
date: '09:57 09-03-2020'
margin_top: half
padding_top: none
padding_bottom: none
margin_bottom: none
role: default
body_classes: 'engines-filter-wrapper use-case custom-list'
limit_reveal: '0'
---

[column class="column-3"]
<div id="engines_filter_cat">
	<select id="cat">
		<option value="synthesizer">Synthesizers</option>
		<option value="effect">Effects</option>
	</select>
</div>
[/column]
[column class="column-9"]
<div id="engines_filter_tag">
    <label><input type="checkbox" id="tag" value="synth-mono"><span class="label-name">Monophonic</span></label>
    <label><input type="checkbox" id="tag" value="synth-sample"><span class="label-name">Sampler</span></label>
    <label><input type="checkbox" id="tag" value="synth-add"><span class="label-name">Additive</span></label>
    <label><input type="checkbox" id="tag" value="synth-sub"><span class="label-name">Subtractive</span></label>
    <label><input type="checkbox" id="tag" value="synth-pad"><span class="label-name">Pad</span></label>
    <label><input type="checkbox" id="tag" value="synth-phy"><span class="label-name">Physical</span></label>
    <label><input type="checkbox" id="tag" value="synth-emu"><span class="label-name">Emulator</span></label>
</div>
[/column]