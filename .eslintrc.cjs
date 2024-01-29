module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-essential"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"parser": "@typescript-eslint/parser",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"vue"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": [
			"error",
			{
				"allow": ["warn", "error"]
			}
		],
		"max-len": [
			"warn",
			{
				"code": 150,
				"ignoreComments": true,
				"ignoreStrings": true
			}
		],
		"@typescript-eslint/no-this-alias": "warn",
		"@typescript-eslint/no-empty-interface": [
			"warn",
			{
				"allowSingleExtends": false
			}
		],
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/ban-types": ["error",
			{
				"types": {
					"String": true,
					"Boolean": true,
					"Number": true,
					"Symbol": true,
					"{}": true,
					"Object": false,
					"object": false,
					"Function": false
				},
				"extendDefaults": true
			}
		],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1
			}
		],
		"no-multi-spaces": [
			"error", {
				"ignoreEOLComments": true
			}
		],
		"no-template-curly-in-string": "error",
		"no-constructor-return": "error",
		"no-whitespace-before-property": "error",
		"no-prototype-builtins": "off",
		"no-empty-pattern": "off",
		"no-mixed-spaces-and-tabs": "off",
		"arrow-parens": ["error", "as-needed"],
		"arrow-spacing": ["error", {"before": true, "after": true}],
		"block-spacing": "error",
		"brace-style": ["error", "1tbs", {"allowSingleLine": true}],
		"comma-spacing": ["error", {"before": false, "after": true}],
		"comma-style": "error",
		"computed-property-spacing": "error",
		"func-call-spacing": "error",
		"key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
		"keyword-spacing": "error",
		"max-statements-per-line": ["error", {"max": 1}],
		"camelcase": "error",
		"class-methods-use-this": "warn",
		"default-case-last": "error",
		"default-param-last": "error",
		"max-depth": "error",
		"max-lines-per-function": ["warn", {"max": 60, "skipComments": true}],
		"no-empty-function": "warn",
		"no-extra-boolean-cast": "off",
		"no-lone-blocks": "error",
		"no-unneeded-ternary": "error",
		"no-new": "warn",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-param-reassign": "error",
		"no-var": "error",
		"prefer-exponentiation-operator": "error",
		"require-yield": "error",
		"no-useless-escape": "warn",
		"no-extra-semi": "off",
		"vue/no-unused-vars": "warn",
		"padding-line-between-statements": [
			"error",

			// After directives (like 'use-strict'), except between directives
			{"blankLine": "always", "prev": "directive", "next": "*"},
			{"blankLine": "any", "prev": "directive", "next": "directive"},

			// After imports, except between imports
			{"blankLine": "always", "prev": "import", "next": "*"},
			{"blankLine": "any", "prev": "import", "next": "import"},

			// Before and after every sequence of variable declarations
			{"blankLine": "always", "prev": "*", "next": ["const", "let", "var"]},
			{"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
			{"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},

			// Before and after class declaration, if, while, switch, try
			{"blankLine": "always", "prev": "*", "next": ["class", "if", "while", "switch", "try"]},
			{"blankLine": "always", "prev": ["class", "if", "while", "switch", "try"], "next": "*"}
		]
	}
};
