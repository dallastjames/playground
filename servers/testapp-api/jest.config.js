module.exports = {
    displayName: '..-servers-testapp-api',
    preset: '../../jest.preset.js',
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json'
        }
    },
    transform: {
        '^.+\\.[tj]s$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/servers/testapp-api'
};
