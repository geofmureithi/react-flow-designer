import {
	FLOWDESIGNER_NODE_MOVE_START,
	FLOWDESIGNER_NODE_APPLY_MOVEMENT,
	FLOWDESIGNER_NODE_MOVE,
	FLOWDESIGNER_NODE_MOVE_END,
	FLOWDESIGNER_NODE_ADD,
	FLOWDESIGNER_NODE_SET_TYPE,
	FLOWDESIGNER_NODE_SET_GRAPHICAL_ATTRIBUTES,
	FLOWDESIGNER_NODE_REMOVE_GRAPHICAL_ATTRIBUTES,
	FLOWDESIGNER_NODE_SET_DATA,
	FLOWDESIGNER_NODE_REMOVE_DATA,
	FLOWDESIGNER_NODE_SET_SIZE,
	FLOWDESIGNER_NODE_REMOVE,
	FLOWDESIGNER_NODE_UPDATE,
} from '../constants/flowdesigner.constants';

/**
 * Ask for node creation and injection into current dataflow
 * @param {string} nodeId
 * @param {{x: number, y: number}} nodePosition
 * @param {{height: number, width: number}} nodeSize
 * @param {string} nodeType
 * @param {Object} attr
 * @return {Object}
 */
export const addNode = (nodeId, nodeType, { data = {}, graphicalAttributes = {} } = {}) => ({
	type: FLOWDESIGNER_NODE_ADD,
	nodeId,
	nodeType,
	data,
	graphicalAttributes,
});

/**
 * @deprecated use moveStart action
 */
export function startMoveNodeTo(nodeId, nodePosition) {
	return {
		type: FLOWDESIGNER_NODE_MOVE_START,
		nodeId,
		nodePosition,
	};
}

/**
 * Ask for moving node
 * @deprecated use move action
 * @param {string} nodeId - identifier of the targeted node
 * @param {{x: number, y: number}} nodePosition - the new absolute position of the node
 * @return {Object}
 */
export function moveNodeTo(nodeId, nodePosition) {
	return {
		type: FLOWDESIGNER_NODE_MOVE,
		nodeId,
		nodePosition,
	};
}

/**
 * Ask to apply the same movement to multiples nodesId
 * @deprecated
 * @param nodesId {array<string>} list of nodeId
 * @param movement {Object} relative movement to apply on all nodes
 *
 * @return {Object}
 */
export const applyMovementTo = (nodesId, movement) => ({
	type: FLOWDESIGNER_NODE_APPLY_MOVEMENT,
	nodesId,
	movement,
});

/**
 * When node movement is done
 * @deprecated use moveEnd action
 * @param {string} nodeId - identifier of the targeted node
 * @param {{x: number, y: number}} nodePosition - the new absolute position of the node
 * @return {Object}
 */
export function moveNodeToEnd(nodeId, nodePosition) {
	return {
		type: FLOWDESIGNER_NODE_MOVE_END,
		nodeId,
		nodePosition,
	};
}

/**
 * set node size
 * @deprecated
 * @param {string} nodeId
 * @param {{height: number, width: number}} nodeSize
 * @return {Object}
 */
export const setNodeSize = (nodeId, nodeSize) => ({
	type: FLOWDESIGNER_NODE_SET_SIZE,
	nodeId,
	nodeSize,
});

/**
 * Ask for node creation and injection into current dataflow
 * @deprecated
 * @param {string} nodeId
 * @param {string} nodeType
 * @return {Object}
 */
export function setNodeType(nodeId, nodeType) {
	return {
		type: FLOWDESIGNER_NODE_SET_TYPE,
		nodeId,
		nodeType,
	};
}

/**
 * Give the ability to a graphical attribute onto the node
 * @deprecated
 * @param {string} nodeId
 * @param {Object} graphicalAttributes
 */
export const setNodeGraphicalAttributes = (nodeId, graphicalAttributes) => ({
	type: FLOWDESIGNER_NODE_SET_GRAPHICAL_ATTRIBUTES,
	nodeId,
	graphicalAttributes,
});

/**
 * Ask to remove a graphical attribute on target node
 * @deprecated
 * @param {string} nodeId
 * @param {string} graphicalAttributesKey - the key of the attribute to be removed
 */
export const removeNodeGraphicalAttribute = (nodeId, graphicalAttributesKey) => ({
	type: FLOWDESIGNER_NODE_REMOVE_GRAPHICAL_ATTRIBUTES,
	nodeId,
	graphicalAttributesKey,
});

/**
 * Give the ability to set data onto a node
 * @deprecated
 * @param {string} nodeId
 * @param {Object} data
 * @param {boolean} bySubmit Flag to indicates that the action was triggered by a manual user action
 */
export const setNodeData = (nodeId, data, bySubmit) => ({
	type: FLOWDESIGNER_NODE_SET_DATA,
	nodeId,
	data,
	bySubmit,
});

/**
 * Ask to remove a graphical attribute on target node
 * @deprecated
 * @param {string} nodeId
 * @param {string} dataKey - the key of the data to be removed
 */
export const removeNodeData = (nodeId, dataKey) => ({
	type: FLOWDESIGNER_NODE_REMOVE_DATA,
	nodeId,
	dataKey,
});

/**
 * Ask for removal of target node and each ports/links attached to it
 * @deprecated use deleteNode action
 * @param {string} nodeId
 */
export const removeNode = nodeId => ({
	type: FLOWDESIGNER_NODE_REMOVE,
	nodeId,
});

export const update = (nodeId, node) => ({
	type: FLOWDESIGNER_NODE_UPDATE,
	node,
	nodeId,
});
