const pluginTester = require("babel-plugin-tester");
const plugin = require("./index.js");

pluginTester({
	plugin: plugin,
	tests: [
		{
			title: 'should replace [^] to [\\w\\W]',
			code: 'const regex = /[^]/;',
			output: 'const regex = /[\\w\\W]/;',
		},
		{
			title: 'should replace [^] to [\\w\\W]',
			code: 'const regex = /aaa[^]/;',
			output: 'const regex = /aaa[\\w\\W]/;',
		},
		{
			title: 'should not replace [^]',
			code: 'const regex = /[a-z[^]0-9]/;',
			output: 'const regex = /[a-z[^]0-9]/;',
		},
	],
});