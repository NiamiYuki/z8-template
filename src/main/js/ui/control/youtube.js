Z8.define('org.zenframework.z8.template.controls.youtube', {

    extend: 'Z8.form.field.Text',

    setRawValue(newValue) {
        Z8.form.field.Text.prototype.setRawValue.call(this, newValue);
        if (!this.dom) {
            return;
        }
        this.getPlayer(newValue);
    },
    
    onInput() {
        Z8.form.field.Text.prototype.onInput.call(this);
        this.getPlayer(this.getRawValue());
    },

    getPlayer(youtubeUrl) {
        if (!this.youtubeIframe) {
            this.createPlayer();
        }
        this.youtubeIframe.src = this.getFullUrlForPlayer(youtubeUrl);
    },

    getUrlPart(fullUrl) {
        let videoID = fullUrl.split('/').pop();
        let videoIdFinal = videoID.split('=').pop();
        return videoIdFinal;
    },

    getFullUrlForPlayer(youtubeUrl) {
        let videoID = this.getUrlPart(youtubeUrl);
        let videoSRC = 'https://www.youtube.com/embed/' + videoID;
        return videoSRC;
    },

    createPlayer() {
        let youtubePlayer = document.createElement('div');
        youtubePlayer.className = 'youTubePlayer';
        this.youtubeIframe = document.createElement('iframe');
        this.youtubeIframe.className = 'youtubeIframe';

        this.youtubeIframe.style.height = 315 + 'px';
        this.youtubeIframe.style.width = 560 + 'px';
        this.youtubeIframe.style.frameBorder = 0;
        this.youtubeIframe.style.type = 'text/html';

        this.dom.appendChild(youtubePlayer);
        youtubePlayer.appendChild(this.youtubeIframe);
    }
});
