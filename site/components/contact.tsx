import {ArrowUpRight,ArrowRight} from 'lucide-react';
import content,{type ContactLink} from '../content/portfolio';
import {asset} from '../lib/paths';

export function contactHref(link:ContactLink):string {
  const value=(link.value??'').trim();
  switch(link.type){
    case 'phone': {
      const number=value.replace(/[^+0-9]/g,'');
      if(!number||!/[0-9]/.test(number))throw new Error(`Enter a phone number for contact entry: ${link.label}`);
      return `tel:${number}`;
    }
    case 'email':
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))throw new Error(`Enter an email address for contact entry: ${link.label}`);
      return `mailto:${value}`;
    case 'cv': return asset(content.contact.resume);
    case 'file':
      if(!link.file)throw new Error(`Select a file for contact entry: ${link.label}`);
      return asset(link.file);
    case 'link':
    case 'linkedin': {
      let url:URL;
      try{url=new URL(value);}catch{throw new Error(`Enter a full https:// address for contact entry: ${link.label}`);}
      if(!['https:','http:'].includes(url.protocol))throw new Error(`Use a website address for contact entry: ${link.label}`);
      return url.href;
    }
    default: throw new Error(`Choose a contact link type for: ${link.label}`);
  }
}

export function ContactSection(){
  const {contact}=content;
  return <section id="contact" className="contact-section wrap" aria-labelledby="contact-title">
    <div><p className="eyebrow">{contact.eyebrow}</p><h2 id="contact-title">{contact.title}</h2><p className="preserve-lines">{contact.intro}</p></div>
    <div className="contact-links">{contact.links.map((link,index)=>{
      const file=link.type==='cv'||link.type==='file';
      const newTab=file||link.type==='link'||link.type==='linkedin';
      return <a key={index} href={contactHref(link)} target={newTab?'_blank':undefined} rel={newTab?'noreferrer':undefined}>
        <span><small>{link.label}</small>{link.text||link.value||link.label}</span>{file?<ArrowRight/>:<ArrowUpRight/>}
      </a>;
    })}</div>
  </section>;
}
