module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.ios.tsx', '.android.tsx', '.js', '.jsx'],
        alias: {
          '@': ['./src']
        }
      },
    ],
    [
      'react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      },
    ]
  ]
};
