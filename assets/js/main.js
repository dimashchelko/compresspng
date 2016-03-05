(function() {

  this.myAwesomeDropzone = new Dropzone("#my-awesome-dropzone", {
    maxFiles: 1,
    maxFilesize: 5,
    acceptedFiles: 'image/*',
    autoProcessQueue: false,
    autoDiscover: false,

    init: function() {
      this.on("maxfilesexceeded", function(file) {
        console.log("fail file");
        this.removeFile(file);
      });
      this.on("addedfile", function(file) {
        $('.dropIcon').css({'background-position-x': '200%'});
        $('.dz-error-mark').attr({'data-dz-remove':''})
      });
      this.on("removedfile", function(file) {
        $('.dropIcon').css({'background-position-x': ''});
      });
    }
  });



})();








