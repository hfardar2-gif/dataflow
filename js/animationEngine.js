export class AnimationEngine{constructor(){this.running=false;this.speed=1;this.timer=null}play(fn){this.running=true;clearInterval(this.timer);this.timer=setInterval(fn,Math.max(500,1800/this.speed))}pause(){this.running=false;clearInterval(this.timer)}setSpeed(v){this.speed=v}}

