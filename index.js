// const parseUrl = path.parse(fileUrl)
// 如果是文件，检测文件格式，读取，如果目录那么要读取目录下所有文件及目录
// 更改 .css .less .scss .sass

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const colors = require('colors')

let target = 'rem'
let source = 'px'

const { writeFile } = fs.promises
let scale = 100

const promptList = [
  {
    type: 'list',
    message: '请选择转换单位:',
    name: 'type',
    choices: [
      'px -> rem',
      'rem -> px',
      'px -> rpx',
      'rpx -> px',
      'rem -> rpx',
      'rpx -> rem',
    ],
    filter: (val) => val.toLowerCase(),
  },
  {
    type: 'input',
    message: '请输入转换单位数值',
    name: 'scale',
    filter: (val) => val,
  },
]

const fileUrl = process.argv[2]
const includesExt = [
  '.css',
  '.less',
  '.scss',
  '.sass',
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.wxss', // 支付宝小程序
  '.acss', // 支付宝小程序
]

const main = (fileUrl) => {
  fs.stat(fileUrl, (err, stats) => {
    if (err) {
      console.log(`${err}`.red)
      return false
    }

    if (stats.isFile()) {
      processFiles(fileUrl)
    }

    if (stats.isDirectory()) {
      fs.readdir(fileUrl, (err, files) => {
        if (err) {
          console.log(`${err}`.red)
          return false
        }

        if (!files.length) {
          console.log(`${fileUrl} is empty no conversion required`.yellow)
          return false
        }

        for (let i = 0; i < files.length; i++) {
          const url = path.join(fileUrl, files[i])
          main(url)
        }
      })
    }
  })
}

const processFiles = (fileUrl) => {
  const fileInfo = path.parse(fileUrl)

  if (includesExt.includes(fileInfo.ext)) {
    fs.readFile(fileUrl, 'utf8', (err, data) => {
      if (err) {
        console.log(`${err}`.red)
        return
      }
      const changeData = conversionFunc(data)
      try {
        writeFile(`${fileInfo.dir}/${fileInfo.name}${fileInfo.ext}`, changeData)
      } catch (err) {
        console.log(`${err}`.red)
      }
    })
    console.log(`${fileUrl} ${source} to ${target} success`.green)
  } else {
    console.log(`${fileUrl} file format is not supported`.yellow)
  }
}

const conversionFunc = (str) => {
  const reg = new RegExp(`(\\d+)${source}`, 'gi')
  let newStr = str.replace(reg, (_x) => {
    if (Math.abs(parseFloat(_x)) === 0 || Math.abs(parseFloat(_x)) === 1) {
      // 排除 0px 0 1px -1px -0px -0
      return _x
    }

    let num = parseFloat(_x) / scale
    const bitLength = String(num).split('.')

    if (bitLength[1] && bitLength[1].length > 2) {
      num = num.toFixed(Math.min(bitLength[1].length - 2, 2))
    }

    // if (String(num).length > 2) {
    //   num = (parseFloat(_x) / scale).toFixed(
    //     Math.min(String(num).length - 2, 2),
    //   )
    // }

    return num + target
  })
  return newStr
}

inquirer.prompt(promptList).then((answers) => {
  const selectType = answers.type.split(' -> ')
  target = selectType[1]
  source = selectType[0]

  scale = Number(answers.scale) ? Number(answers.scale) : null

  if (!scale || scale <= 0) {
    console.log('转换的数值必须大于0'.red)
    return false
  }

  if (!process.argv[2]) {
    console.log('node input file path'.red)
    return false
  }

  main(fileUrl)
})
