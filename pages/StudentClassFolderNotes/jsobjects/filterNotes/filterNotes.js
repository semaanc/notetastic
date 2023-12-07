export default {
	filterNotes: function() {
		return GetNotesForClass.data.filter(note => note.folder_name == appsmith.URL.queryParams.folder_name);
	}
}