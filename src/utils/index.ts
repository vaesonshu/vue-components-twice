// 把驼峰转换成-连接的形式
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}