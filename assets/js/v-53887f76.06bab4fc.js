"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71274],{525579:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-53887f76","path":"/devices/NAS-PS09B2.html","title":"Neo NAS-PS09B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-PS09B2 control via MQTT","description":"Integrate your Neo NAS-PS09B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T19:12:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Human motion state (enum)","slug":"human-motion-state-enum","link":"#human-motion-state-enum","children":[]},{"level":3,"title":"Departure delay (numeric)","slug":"departure-delay-numeric","link":"#departure-delay-numeric","children":[]},{"level":3,"title":"Radar range (numeric)","slug":"radar-range-numeric","link":"#radar-range-numeric","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Current distance (numeric)","slug":"current-distance-numeric","link":"#current-distance-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717253003000},"filePathRelative":"devices/NAS-PS09B2.md"}')},182536:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(166252);const n=(0,a._)("h1",{id:"neo-nas-ps09b2",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#neo-nas-ps09b2","aria-hidden":"true"},"#"),(0,a.Uk)(" Neo NAS-PS09B2")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"NAS-PS09B2")],-1),r=(0,a._)("td",null,"Vendor",-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Human presence sensor")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"occupancy, human_motion_state, departure_delay, radar_range, radar_sensitivity, presence_sensitivity, dis_current, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-PS09B2.png",alt:"Neo NAS-PS09B2"})])],-1),l=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="human-motion-state-enum" tabindex="-1"><a class="header-anchor" href="#human-motion-state-enum" aria-hidden="true">#</a> Human motion state (enum)</h3><p>Human Motion State. Value can be found in the published state on the <code>human_motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>small</code>, <code>large</code>.</p><h3 id="departure-delay-numeric" tabindex="-1"><a class="header-anchor" href="#departure-delay-numeric" aria-hidden="true">#</a> Departure delay (numeric)</h3><p>Presence Time. Value can be found in the published state on the <code>departure_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;departure_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="radar-range-numeric" tabindex="-1"><a class="header-anchor" href="#radar-range-numeric" aria-hidden="true">#</a> Radar range (numeric)</h3><p>Motion Range Detection. Value can be found in the published state on the <code>radar_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_range&quot;: NEW_VALUE}</code>. The minimal value is <code>150</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar sensitivity (numeric)</h3><p>Motion Detection Sensitivity. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric" aria-hidden="true">#</a> Presence sensitivity (numeric)</h3><p>Motionless Detection Sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>.</p><h3 id="current-distance-numeric" tabindex="-1"><a class="header-anchor" href="#current-distance-numeric" aria-hidden="true">#</a> Current distance (numeric)</h3><p>Current Distance of Detected Motion. Value can be found in the published state on the <code>dis_current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>cm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),h={},p=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Neo"},{default:(0,a.w5)((()=>[(0,a.Uk)("Neo")])),_:1})])]),c,s,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),l])}]])}}]);