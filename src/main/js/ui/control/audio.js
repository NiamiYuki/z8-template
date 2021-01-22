Z8.define('org.zenframework.z8.template.controls.audio',{

    extend: 'Z8.form.field.Text',

    setRawValue(newValue) {
        if (!this.dom) {
            return;
        }
        if(!newValue){
            this.getAudioPlayer('');
            return;
        }
        newValue = JSON.parse(newValue);
        if(newValue.length===0||newValue[0]['path'].split('.').pop()!=='mp3'){
            this.getAudioPlayer('');
            return;
        }
        const URL = newValue[0]['path'] + '?&session='+ Application.session +'&id='+newValue[0]['id'];
        this.getAudioPlayer(URL);
    },

    getAudioPlayer(value){
        if(!this.audioPlayer){
            this.createAudioPlayer(value)
        }
        this.audioPlayer.src = value;
    },

    createAudioPlayer(value){
        let audioPlayerContainer = document.createElement('div');
        audioPlayerContainer.className = 'audioPlayer';

        this.audioPlayer = document.createElement('audio');
        this.audioPlayer.className = 'audioPlayerControl';

        this.audioPlayer.controls = true;
        this.audioPlayer.style.height ="20px";
        this.audioPlayer.src = value;
        this.input.remove();

        this.dom.appendChild(audioPlayerContainer);
        audioPlayerContainer.appendChild(this.audioPlayer);
    }
});
