
Z8.define('org.zenframework.z8.template.controls.XML', {

    extend: 'Z8.form.field.TextArea',

    completeRender(){
        Z8.form.field.TextArea.prototype.completeRender.call(this);
            this.aceEditor = ace.edit(this.input);
            this.aceEditor.getSession().setMode('ace/mode/xml');
            this.aceEditor.setTheme('ace/theme/eclipse');
            this.aceEditor.on('change', () => {
               this.onInput();
            });
            this.dom.querySelector('.ace_editor').style.height = 150+'px';
    },

    setRawValue(newValue) {
        if (!this.aceEditor) {
            return;
        }
        this.aceEditor.setValue(newValue);
    },

    getRawValue(value) {
        return this.aceEditor? this.aceEditor.getValue() : '';
    }
});


