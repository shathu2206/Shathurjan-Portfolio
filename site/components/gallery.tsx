import {Picture} from './picture';
import content from '../content/portfolio';
import {Header,Footer} from './site-chrome';
import {asset} from '../lib/paths';
import {PageBlocks} from './story-blocks';
import {PageIntro} from './page-intro';

export function GalleryPage() {
  const {gallery}=content;
  return <>
    <Header page="gallery"/>
    <main id="main" className="gallery-main">
      <PageIntro page="gallery" eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.description}/>
      <div className="wrap">
      {gallery.photos.length ? <div className="gallery-grid">
        {gallery.photos.map((photo,index)=><figure className="gallery-card" key={`${photo.image}-${index}`}>
          <Picture layout={photo.imageLayout} src={asset(photo.image)} alt={photo.alt} loading={index<3?'eager':'lazy'} width="1200" height="900" style={{objectFit:photo.fit==='cover'?'cover':photo.fit==='contain'?'contain':undefined,objectPosition:photo.position||'center'}}/>
          <figcaption><h2>{photo.title}</h2>{photo.caption&&<p>{photo.caption}</p>}</figcaption>
        </figure>)}
      </div> : <p className="gallery-empty">{gallery.emptyMessage}</p>}
      </div>
      <PageBlocks page="gallery"/>
    </main>
    <Footer/>
  </>;
}
