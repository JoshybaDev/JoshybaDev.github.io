//onclick="JoshyVisor('<?=$x['archivo9']?>','<?=RetornarExtension($x['archivo9'])?>',tipo='w3')"
//
const JoshyVisorHTML = (tipo='w3') =>
{
    let visor;
    if(tipo=='w3')
    {
        visor = 
        `
        <div id="joshyvisor" class="w3-modal">
            <div class="w3-modal-content w3-animate-zoom">
                <header class="w3-container w3-cyan">
                    <span onclick="document.getElementById('joshyvisor').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                </header>
                <h2>Visor de Archivos</h2>
                <!-- <h6 id="rutaArchivo"></h6> -->
                <div class="w3-container" id="xIdVisorFiles">
                </div>
            </div>
        </div>
        `;
    }
    else if(tipo=='boostrap')
    {
        visor = 
        `
        <div class="modal fade" id="joshyvisor" tabindex="-1" role="dialog" aria-labelledby="joshyvisor">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Visor de archivos</h4>
            </div>
            <div class="modal-body">
            <div class="w3-container" id="xIdVisorFiles">
            </div>
          </div>
        </div>
      </div>
        `;        
    }
    document.querySelector("#joshyvisorcontent").innerHTML=visor;
}
function JoshyVisor(xFile, formato,tipo='w3') {
    var img = '';
    var embded = '';
    var vervisor = true;
    formato=formato.toLowerCase();
    if (formato == 'jpg' || formato == 'jpeg' || formato == 'gif' || formato == 'png') {
        img = '<img id="xidImg" src="' + xFile + '" alt="" align="center" width="100%" height="100%">';
    } else if (formato == 'pdf') {
        embded = '<embed id="xidPdf" src="' + xFile + '" type="application/' + formato + '" width="100%" height="500px" />';
    } else if (formato == 'zip' || formato == 'xml' || formato == 'rar' || formato == '7zip' || formato == 'tar' || formato == 'docx' || formato == 'doc' || formato == 'xls' || formato == 'xlsx') {
        window.open(xFile);
        vervisor = false;
    }
    if (vervisor) {
        var xVisor = img + embded;
        document.getElementById('xIdVisorFiles').innerHTML = xVisor;
        //document.getElementById('rutaArchivo').innerHTML = xFile;
        if(tipo=='w3')
        document.getElementById('joshyvisor').style.display = 'block';
        else if(tipo=='boostrap')
        $('#joshyvisor').modal('show')

    }
}