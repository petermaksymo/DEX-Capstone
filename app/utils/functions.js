// Cleans a string into a decimal
export const force_decimal = (val) => {
  // replace non-digits and periods
  val = val.replace(/[^\d.]/g, "")
  const idx_decimal = val.indexOf(".")

  // only keep the first decimal point
  if (idx_decimal >= 0) {
    val = val.replace(/\./g, "")
    val = val.substring(0, idx_decimal) + "." + val.substring(idx_decimal)
  }
  return val
}
