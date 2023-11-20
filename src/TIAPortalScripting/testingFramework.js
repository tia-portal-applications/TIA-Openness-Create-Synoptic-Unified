export function assertEqual(propertyName, actual, expected) {
  if (actual !== expected) {
    console.error('!! TEST FAILED !! ' + propertyName + ' Expected: ' + expected + ' Actual: ' + actual);
  }
}
