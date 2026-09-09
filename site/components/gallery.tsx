import content from '../content/portfolio';
import {Header,Footer} from './site-chrome';
import {asset} from '../lib/paths';

export function GalleryPage() {
  const {gallery}=content;
  return <>
    <Header page="gallery"/>
    <main id="main" className="wrap gallery-main">
      <div className="gallery-heading">
        <p className="eyebrow">{gallery.eyebrow}</p>
        <h1>{gallery.title}</h1>
        <p>{gallery.description}</p>
      </div>
      {gallery.photos.length ? <div className="gallery-grid">
        {gallery.photos.map((photo,index)=><figure className="gallery-card" key={`${photo.image}-${index}`}>
          <img src={asset(photo.image)} alt={photo.alt} loading={index<3?'eager':'lazy'} width="1200" height="900"/>
          <figcaption><h2>{photo.title}</h2>{photo.caption&&<p>{photo.caption}</p>}</figcaption>
        </figure>)}
      </div> : <p className="gallery-empty">{gallery.emptyMessage}</p>}
    </main>
    <Footer/>
  </>;
}
