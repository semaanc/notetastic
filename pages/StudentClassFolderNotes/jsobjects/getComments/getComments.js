export default {
	get: async () => {
		return GetNoteComments.run()
		// GetNoteComments.run(note_id).data;
	}
}
