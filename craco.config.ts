const config = {
  devServer: {
    open: false,
  },
  babel: {
    plugins: [['import', { libraryName: 'antd', style: 'css' }]],
  },
}

export default config
