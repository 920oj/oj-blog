const convertDate = {
  dateToMonthDay(input_date) {
    const dateAttr = new Date(input_date)
    const year = dateAttr.getFullYear()
    const month = dateAttr.getMonth() + 1
    const date = dateAttr.getDate()
    return `${year}年${month}月${date}日`
  },
}

export default convertDate