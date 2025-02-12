const regjsparser = require('regjsparser');
const regjsgen = require('regjsgen');

const replaceRegexPlugin = function(babel) {
	return {
		name: 'babel-plugin-transform-regexp-empty-negative-class',
		visitor: {
			RegExpLiteral(path) {
				const { pattern } = path.node;
				const ast = regjsparser.parse(pattern); // 解析正则表达式为 AST

				let changed = false;
				// 修改 AST，将 [^] 替换为 [\w\W]
				traverseAST(ast, function(node) {
					if(node.type === 'characterClass' && node.raw === '[^]') {
						changed = true;
						node.raw = '[\\w\\W]';
						node.negative = false;
						node.body = [
							{ type: "characterClassEscape", value: "w" },
							{ type: "characterClassEscape", value: "W" }
						];
					}
				});

				if(changed) {
					// 从修改后的 AST 生成新的正则表达式
					const newPattern = regjsgen.generate(ast);
					path.node.pattern = newPattern;
				}
			},
		},
	};

	function traverseAST(node, callback) {
		callback(node);
		for(const key in node) {
			if(node[key] && typeof node[key] === 'object') {
				traverseAST(node[key], callback);
			}
		}
	}
};

module.exports = replaceRegexPlugin;