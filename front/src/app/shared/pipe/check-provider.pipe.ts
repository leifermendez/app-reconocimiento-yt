import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkProvider'
})
export class CheckProviderPipe implements PipeTransform {

  YOUTUBE_REGEX: RegExp = new RegExp(
    '^(https?://)?(www.)?(youtube.com|youtu.be)/.+$'
  );
  DAILYMOTION_REGEX: RegExp = new RegExp(
    '^(https?://)?(www.)?dailymotion.com/video/.+$'
  );
  VIMEO_REGEX: RegExp = new RegExp('^(https?://)?(www.)?vimeo.com/.+$');
  LOOM_REGEX: RegExp = new RegExp(
    '^(https?://)?(www.)?loom.com/(share|embed)/.+$'
  );

  transform(value: string): any {
    try{
      return this.makeProvider(value)
    }catch(e){
      return null
    }
  }

  private getVideoProvider = (url: string): { provider: string; id: string } => {
    if (this.YOUTUBE_REGEX.test(url))
      return { provider: 'youtube', id: this.getYoutubeId(url) };
    else if (this.DAILYMOTION_REGEX.test(url))
      return { provider: 'dailymotion', id: url.split('video/')[1] };
    else if (this.VIMEO_REGEX.test(url))
      return { provider: 'vimeo', id: url.split('vimeo.com/')[1] };
    else if (this.LOOM_REGEX.test(url))
      return { provider: 'loom', id: url.split('/share/')[1] };
    else return { provider: 'unknown', id: 'undefined' };
  };

  makeProvider(src: string): any {
    const { provider, id } = this.getVideoProvider(src);
    const urlIframe = this.getOEmbedUrl(provider, id);
    return urlIframe;
  }

  private getYoutubeId(url: string): any {
    const paramId = new URLSearchParams(url.split('?')[1]).get('v');
    if (paramId) return paramId;
    const YOUTU_BE_REGEX = new RegExp('^(https?://)?(www.)?(youtu.be)/.+$');
    if (YOUTU_BE_REGEX.test(url)) return url.split('.be/')[1];
  }

  private getVideoUrl(provider: string, id: string): any {
    switch (provider) {
      case 'youtube':
        return `https://youtube.com/${id}`;
      case 'dailymotion':
        return `https://dailymotion.com/video/${id}`;
      case 'vimeo':
        return `https://vimeo.com/${id}`;
      case 'loom':
        return `https://loom.com/share/${id}`;
      default:
        return null;
    }
  };

  private getOEmbedUrl(provider: string, id: string): any {
    switch (provider) {
      case 'youtube':
        return `https://youtube.com/embed/${id}`;
      case 'dailymotion':
        return `https://dailymotion.com/embed/video/${id}`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${id}`;
      case 'loom':
        return `https://loom.com/embed/${id}`;
      default:
        return '';
    }
  };

}
