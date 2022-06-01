function task1(x, y, z) {
  console.log('x += y - x++ * z результат: ', x += y - ++x * z);
}
task1 (6, 15, 4);

function task2(x, y, z) {
  console.log('z = -- x - y * 5 результат: ', z = --x - y * 5);
}
task2 (6, 15, 4);

function task3(x, y, z) {
  console.log('y /= x + 5 % z результат: ', y /= x + 5 % z);
}
task3 (6, 15, 4);

function task4(x, y, z) {
  console.log('z = x++ + y * 5 результат: ', z = ++x + y * 5);
}
task4 (6, 15, 4);

function task5(x, y, z) {
  console.log('x = y - x++ * z результат: ', x = y - ++x * z);
}
task5 (6, 15, 4);
