export default {
  filterNotes: function() {
    return GetNotesForClass.data.filter(note => note.class_folder === appsmith.URL.queryParams.folder_name);
  }
}