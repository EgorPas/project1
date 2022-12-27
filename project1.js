'use strict';
let money, time;

function start () {
      money = +prompt("Ваш бюджет на месяц?", '');
      time = prompt("Введите дату в формате YYYY-MM-DD", '');

      while (isNaN(money) || money == '' || money == null) {
          money = +prompt("Ваш бюджет на месяц?", '');
      }
}

start();

let appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: true,
     chooseExpenses: function() {
          for ( let i = 0; i < 2; i++) {
               let a = prompt("Введите обязательную статью расходов в этом месяце" , ''),
                   b = prompt("Во сколько обойдется?", '');
          
               if (typeof(a) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a !== '' && b !== '' && a.length < 50) {
                    appData.expenses[a] = b;
               } else {
                    console.log ("bad result");
                    i--;
               }
            }; 
     },
     detectDayBudget: function() {
          appData.moneyPerDay = (appData.budget / 30).toFixed();
     alert('Ежедневный бюджет ' + appData.moneyPerDay);
     },
     detectLevel: function() {
          if (appData.moneyPerDay < 100) {
               console.log('Минимальный уровень достатка')
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
               console.log('Средний уровень достатка')
            } else if (appData.moneyPerDay > 2000) {
               console.log('Высокий уровень достатка')
            } else {
               console.log('Произошла ошибка')
            }
     },
     checkSavings: function() {
          if (appData.savings === true) {
               let save = +prompt('Какова сумма накоплений?'),
               percent = +prompt('Под какой процент?');
     
               appData.mothInCome = save / 100 /12 * percent;
               alert('Доход в месяц с вашего депозита: ' + appData.mothInCome);
          }
     },
     chooseOptExpenses: function() {
          for ( let i = 0; i <= 2; i++) {
               let questionOptExpenses = prompt("Статья необязательных расходов?" , '');
               appData.optionalExpenses[i] = questionOptExpenses;
               console.log(appData.optionalExpenses);
            }; 
     },
     chooseInCome: function() {
          for (let i = 0; i < 1; i++) {
               let items = prompt('Что принесет дополнительный доход?(Перечислить через запятую)', ''),
               addItems = prompt('Может что-то еще?', '');

               if(typeof(items) === 'string' && items !== '') {
                    appData.income = items.split(', ');
                    appData.income.push(addItems);
               } else {
                    console.log ("bad result");
                    i--;
               }
          }
          appData.income.sort();
          appData.income.forEach(element => {
               alert('Способы доп. заработка: ' + element)
          });
     }
}

for( var output in appData) {
     console.log('Наша программа включает в себя данные: ' + output + ': ' + appData[output]);
}
