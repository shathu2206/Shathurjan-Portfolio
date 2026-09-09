// Progressive enhancement: the first photo remains visible without JavaScript.
class IntroCarousel extends HTMLElement {
  connectedCallback(){ queueMicrotask(()=>{if(this.isConnected)this.start();}); }
  disconnectedCallback(){ this.stop();this.events?.abort(); }
  start(){
    if(this.events&&!this.events.signal.aborted)return;
    this.slides=Array.from(this.querySelectorAll('[data-slide]'));
    if(this.slides.length<2)return;
    this.events=new AbortController();
    const listen=(target,event,callback)=>target.addEventListener(event,callback,{signal:this.events.signal});
    this.index=0;
    this.interval=Math.max(5,Math.min(60,Number(this.dataset.interval)||15))*1000;
    this.motion=matchMedia('(prefers-reduced-motion: reduce)');
    this.paused=this.dataset.autoplay!=='true'||this.motion.matches;
    this.gesture=null;this.hovered=false;this.focused=this.contains(document.activeElement);
    this.dots=Array.from(this.querySelectorAll('[data-dot]'));
    this.captions=Array.from(this.querySelectorAll('[data-caption]'));
    this.querySelector('[data-controls]').hidden=false;
    this.querySelector('[data-dots]').hidden=false;
    listen(this.querySelector('[data-next]'),'click',()=>this.show(this.index+1,true));
    listen(this.querySelector('[data-previous]'),'click',()=>this.show(this.index-1,true));
    this.dots.forEach((dot,index)=>listen(dot,'click',()=>this.show(index,true)));
    listen(this,'keydown',event=>{
      if(!['ArrowLeft','ArrowRight'].includes(event.key))return;
      event.preventDefault();this.show(this.index+(event.key==='ArrowLeft'?-1:1),true);
    });
    listen(this,'pointerenter',event=>{if(event.pointerType==='mouse'){this.hovered=true;this.stop();}});
    listen(this,'pointerleave',event=>{if(event.pointerType==='mouse'){this.hovered=false;this.schedule();}});
    listen(this,'pointerdown',event=>{
      if(event.pointerType==='mouse'||event.isPrimary===false||event.target.closest('button'))return;
      this.gesture={id:event.pointerId,x:event.clientX,y:event.clientY};
      this.setPointerCapture(event.pointerId);this.stop();
    });
    listen(this,'pointerup',event=>{
      if(!this.gesture||event.pointerId!==this.gesture.id)return;
      const dx=event.clientX-this.gesture.x,dy=event.clientY-this.gesture.y;
      this.gesture=null;
      if(this.hasPointerCapture(event.pointerId))this.releasePointerCapture(event.pointerId);
      if(Math.abs(dx)>=45&&Math.abs(dx)>Math.abs(dy)*1.25)this.show(this.index+(dx<0?1:-1),true);
      else this.schedule();
    });
    listen(this,'pointercancel',()=>{this.gesture=null;this.schedule();});
    listen(this,'focusin',()=>{this.focused=true;this.stop();});
    listen(this,'focusout',event=>{this.focused=this.contains(event.relatedTarget);this.schedule();});
    listen(document,'visibilitychange',()=>this.schedule());
    listen(this.motion,'change',()=>{this.paused=this.dataset.autoplay!=='true'||this.motion.matches;this.schedule();});
    this.show(0,false);
  }
  stop(){clearTimeout(this.timer);this.timer=null;}
  schedule(){
    this.stop();
    if(this.paused||this.hovered||this.focused||this.gesture||document.hidden||!this.isConnected)return;
    this.timer=setTimeout(()=>this.show(this.index+1,false),this.interval);
  }
  show(index,manual){
    this.index=(index+this.slides.length)%this.slides.length;
    this.slides.forEach((slide,i)=>{slide.hidden=i!==this.index;});
    this.captions.forEach((caption,i)=>{caption.hidden=i!==this.index;});
    this.dots.forEach((dot,i)=>{if(i===this.index)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});
    this.slides[this.index].querySelector('img').loading='eager';
    this.slides[(this.index+1)%this.slides.length].querySelector('img').loading='eager';
    const counter=`${this.index+1} / ${this.slides.length}`;
    if(manual)this.querySelector('[data-announcement]').textContent=`${counter}: ${this.slides[this.index].querySelector('img').alt}`;
    this.schedule();
  }
}
if(!customElements.get('intro-carousel'))customElements.define('intro-carousel',IntroCarousel);
