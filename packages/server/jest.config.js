module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    // Aliasの設定
    '^@/(.+)': '<rootDir>/src/$1'
  },
  roots: ['.'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )
        module: {
          type: 'commonjs' // 出力するファイルをcommonjsとする
        },
        jsc: {
          parser: {
            syntax: 'typescript', // ソースコードをtypescriptとしてパースする
            tsx: true // jsx記法を許可する
          },
          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  transformIgnorePatterns: ['/node_modules/']
}
