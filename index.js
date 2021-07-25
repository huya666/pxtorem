// const parseUrl = path.parse(fileUrl)
// 如果是文件真接读取，检测文件格式，然后读取，如果目录那么要读取目录下面的所有的东西
// 然后更改只更改 .css .less .scss .sass

const fs = require('fs')
const path = require('path')
const colors = require('colors')

const { writeFile } = fs.promises
let scale = 100

// console.log(process.argv, '--')

if (!process.argv[2]) {
  console.log('node input file path'.red)
  return false
}

if (process.argv[3] && parseInt(process.argv[3]) > 0) {
  scale = parseInt(process.argv[3])
}

const fileUrl = process.argv[2]
const includesExt = ['.css', '.less', '.scss', '.sass']

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
      const changeData = pxToRes(data)
      try {
        writeFile(`${fileInfo.dir}/${fileInfo.name}${fileInfo.ext}`, changeData)
      } catch (err) {
        console.log(`${err}`.red)
      }
    })
    console.log(`${fileUrl} px to rem success`.green)
  } else {
    console.log(`${fileUrl} file format is not supported`.yellow)
  }
}

const pxToRes = (str) => {
  const reg = /(\d+)px/gi
  let newStr = str.replace(reg, function (_x) {
    return parseFloat(_x) / scale + 'rem'
  })
  return newStr
}

main(fileUrl)