export default {
  filterNotes: function() {
    return GetNotes.data.filter(note => note.student_folder === appsmith.store.folder_name);
  }
}