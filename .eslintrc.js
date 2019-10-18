module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'airbnb'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
        'consistent-return': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'react/no-children-prop': ['off'],
        'react/forbid-prop-types': ['off'],
        'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    }
};