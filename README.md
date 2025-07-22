#Тестовое задание на вакансию Frontend для Only

Для запуска клонируйте проект с github и выполните следующие команды в терминале:
```bash
git clone https://github.com/MarkinAO/historical-dates.git
cd historical-dates
npm install
npm build
```
Откройте файл ```index.html``` из папки ```dist``` в браузере

### Описание
В приложении добавлены mock данные, которые можно найти в файле ```src/shared/api/mock.ts```. И добавлена функция для получения mock данных ```src/shared/api/api.ts```. Функция возвращает promise, который черз 1 с разрешается и возвращает данные.