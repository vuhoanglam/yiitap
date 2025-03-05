import { Extension } from '@tiptap/core'
import { Plugin } from '@tiptap/pm/state'

import { findColors } from './utils'

const OColorHighlighter = Extension.create({
	name: 'colorHighlighter',

	addProseMirrorPlugins() {
		return [
			new Plugin({
				state: {
					init(_, { doc }) {
						return findColors(doc)
					},
					apply(transaction, oldState) {
						return transaction.docChanged
							? findColors(transaction.doc)
							: oldState
					},
				},
				props: {
					decorations(state) {
						return this.getState(state)
					},
				},
			}),
		]
	},
})

export default OColorHighlighter
