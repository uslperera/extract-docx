/**
 * Created by shamal on 12/4/16.
 */
(function(){
    'use strict';
    zip.workerScriptsPath = "lib/zipjs/";
    $('#btnProcess').click(function(){
        var blob = $('#fileUploader')[0].files[0];
        zip.createReader(new zip.BlobReader(blob), function(reader){

            reader.getEntries(function(entries){
                var names = "";
                entries.forEach(function(entry){
                    names += entry.filename + "\n";
                });
                $('#filesList').html(names);
                console.log(entries);
                if(entries.length){
                    entries[0].getData(new zip.TextWriter(), function(text){
                        console.log(text);

                    }, function(current, total){

                    });
                }
            });
        }, function(error){

        });
    });

})();