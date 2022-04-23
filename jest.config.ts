import type {Config} from '@jest/types'

const config: Config.InitialOptions = {
    roots: [ //Specifies root entry of the code i.e "src"
        "<rootDir>/test",
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest" // When encountering tsx file, use "ts-jest" to transform it
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$", //All files with "test" or "spec" and treat them as test
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // To know what kind of files it needs
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}'
    ]
}

export default config;